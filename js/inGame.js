/*************************************************************************************/
/* 初期設定
/*************************************************************************************/
/*******************************************************/
/* startBattle：戦闘を開始する
/*******************************************************/
function startBattle(){
	// 各キューの初期化
	initialize();
	currentTurn = 0;
	// デッキの準備
	readyDeck();
	// デッキとした後にそこからカードを5枚引き、手札とする。
	setupHandCard();
	// 自分・敵のUIをセットアップする
	updatePlayerAreaDom(playerStatus);
	setupEnemy();
	// 初めの敵予兆を決定する
	decideNextAction();

	setupBtn();

	startAbility();
	$('.battle-area').removeClass('hidden');
	$('.info-area').removeClass('hidden');
	setLocalStorage(keyContinueBattleFlag, true);
	
	setLocalStorage(keyContinueTrashCount, trashCount);
	setLocalStorage(keyContinueTrash, myTrash);
	setLocalStorage(keyContinueTurn, currentTurn);
	setLocalStorage(keyContinueEnemy, currentEnemies);
	setLocalStorage(keyContinuePlayerStatus, playerStatus);
	startTurn();// 非同期関数
}
/*******************************************************/
/* endBattle：戦闘の終了処理を開始する
/*******************************************************/
function endBattle(){
	removeLocalStorage(keyContinueBattleFlag);
	removeLocalStorage(keyContinueDeck);
	removeLocalStorage(keyContinueHand);
	removeLocalStorage(keyContinueTrash);
	removeLocalStorage(keyContinuePlayArea);
	removeLocalStorage(keyContinueDiscard);
	removeLocalStorage(keyContinueTemporary);
	removeLocalStorage(keyContinueStack);
	removeLocalStorage(keyContinueTurn);
	removeLocalStorage(keyContinueEnemy);
	removeLocalStorage(keyContinueLevel);
	removeLocalStorage(keyContinueReward);
	removeLocalStorage(keyContinuePhase);
	removeLocalStorage(keyContinueTrashCount);
	initialize();
	$('.result-modal').removeClass('active');
	$('.battle-area').addClass('hidden');
	$('.info-area').addClass('hidden');
	$('.hand-area').html('');

	playerStatus.block = 0;
	playerStatus.statuses = [];
	
	map = getLocalStorage(keyContinueMap);
	climbTowerContinue();
}

/*******************************************************/
/* continueBattle：戦闘を再開する
/*******************************************************/
function continueBattle(){
	continueCount();
	// デッキの準備
	readyDeck();
	setupHandCard();
	updatePlayerAreaDom(playerStatus);
	setupEnemy();
	setupBtn();
	checkEnemyDefeated(currentEnemies);

	updateDeckDom();
	updateTrashDom();
	updateDiscardDom();
	updateHandDom();
	updateEnergyDom();
	updateEnemyAreaDom(currentEnemies, true);
	$('.battle-area').removeClass('hidden');
	$('.info-area').removeClass('hidden');
	if (allDefeatedFlag){
		allEnemiesDefeated();
	}
	// フェイズ開始
	if (currentPhase !== null){
		startPhase(currentPhase);
	} else {
		startPhase(phase.action);
	}
}

/*******************************************************/
/* continueCount: 各種保存された情報を獲得する
/*******************************************************/
function continueCount(){
	const lastTrash = getLocalStorage(keyContinueTrash);
	const lastPlayArea = getLocalStorage(keyContinuePlayArea);
	const lastDiscard = getLocalStorage(keyContinueDiscard);
	const lastTemporary = getLocalStorage(keyContinueTemporary);
	const lastStack = getLocalStorage(keyContinueStack);
	const lastTurn = getLocalStorage(keyContinueTurn);
	const lastPlayerStatus = getLocalStorage(keyContinuePlayerStatus);
	const lastLevel = getLocalStorage(keyContinueLevel);
	const lastPhase = getLocalStorage(keyContinuePhase);
	const lastTrashCount = getLocalStorage(keyContinueTrashCount);
	if (lastTrash) {myTrash = lastTrash;}
	if (lastPlayArea) {playArea = lastPlayArea;}
	if (lastDiscard ) {discard = lastDiscard;}
	if (lastTemporary) {tmpArea = lastTemporary;}
	if (lastStack) {stackCard = lastStack;}
	if (lastTurn) {currentTurn = lastTurn;}
	if (lastPhase) {currentPhase = lastPhase;}
	if (lastTrashCount) {trashCount = lastTrashCount;}
	if (lastLevel !== undefined || lastLevel !== null) {
		currentLevel = lastLevel;
	}
	if (lastPlayerStatus) {
		playerStatus.remainHP = lastPlayerStatus.remainHP;
		playerStatus.maxHP = lastPlayerStatus.maxHP;
		playerStatus.money = lastPlayerStatus.money;
		playerStatus.remainEnergy = lastPlayerStatus.remainEnergy;
		playerStatus.maxEnergy = lastPlayerStatus.maxEnergy;
		playerStatus.block = lastPlayerStatus.block;
		playerStatus.statuses = lastPlayerStatus.statuses;
	}

}
/*******************************************************/
/* initializeQueue：キューの初期化
/*******************************************************/
function initialize(){
	deleteAllDeck();
	deleteAllHand();
	deleteAllTrash();
	deleteAllDiscard();
	deleteAllTemporaryArea();
	deleteAllStackCard();
	currentTurn = 1;
	playerStatus.remainEnergy = playerStatus.maxEnergy;
}
/*******************************************************/
/* readyDeck：初期デッキとなる10枚のカードを配る
/*******************************************************/
function readyDeck(){
	const continueBattleFlag = getLocalStorage(keyContinueBattleFlag);
	const lastDeck = getLocalStorage(keyContinueDeck);
	if(lastDeck !== null && continueBattleFlag){
		// 続きからの場合
		myDeck = lastDeck;
	} else {
		myDeck = deepCopyCardList(myOriginalDeck);
		myDeck = shuffleArray(myDeck);
		setLocalStorage(keyContinueDeck, myDeck);
	}
	
}
/*******************************************************/
/* setupHandCard：初期手札となる5枚のカードを引く
/*******************************************************/
function setupHandCard(){
	const continueBattleFlag = getLocalStorage(keyContinueBattleFlag);
	const lastHand = getLocalStorage(keyContinueHand);
	if(lastHand !== null && continueBattleFlag){
		// 続きからの場合
		myHand = lastHand;
	} else {
		drawCardFromDeck(initialHandNum);
		setLocalStorage(keyContinueHand, myHand);
	}
}

/*******************************************************/
/* setupBtn：各種ボタンの初期設定
/*******************************************************/
function setupBtn(){
	$('.end-btn').click((e) => {
		startPhase(phase.enemy);
	});
	$('.trash-area').click((e) => {
		if (myTrash.length <= 0) {
			console.log('捨て札がありません。');
			return;
		}
		$('.black-back-area').addClass('active');
		$('.list-area').addClass('active');
		createTrashListDom();
	});
	$('.discard-area').click((e) => {
		if (discard.length <= 0) {
			console.log('廃棄札がありません。');
			return;
		}
		$('.black-back-area').addClass('active');
		$('.list-area').addClass('active');
		createDiscardListDom();
	});
	$('.close-list-btn').click((e) => {
		$('.black-back-area').removeClass('active');
		$('.list-area').removeClass('active');
	});
	$('.skip-btn').click((e) => {
		endBattle();
	});
	$('.hand-decide-btn').click((e) => {
		switch(currentPhase){
			case phase.trash:
				trashCard();
				break;
			case phase.unshiftDeck:
				unshiftDeckCard();
				break;
			case phase.upGrade:
				upGradeCard();
				break;
			case phase.reproductionToHand:
				reproductionToHandCard();
				break;
			default:
				break;
		}
	});
	$('.return-decide-btn').click((e) => {
		switch(currentPhase){
			case phase.restore:
				restoreCard();
				break;
			case phase.reuseToHand:
				reuseCard();
				break;
			default:
				break;
		}
	});
}

/*************************************************************************************/
/* プレイヤー処理関連
/*************************************************************************************/
/*******************************************************/
/* startPhase: 各フェイズを開始する
/*******************************************************/
function startPhase(ph){
	console.log(ph);
	currentPhase = ph;
	setLocalStorage(keyContinuePhase, currentPhase);
	switch(ph){
		case phase.action:
			disabledEndBtn(false);
			disabledMyHand(false);
			endAction();
			break;
		case phase.enemy:
			disabledEndBtn(true);
			startCleanup();
			break;
		case phase.trash:
			disabledEndBtn(true);
			disabledMyHand(false);
			updateHandDom();
			updateHandDecideTitleDom('捨てるカードを選んでください');
			$.when(
				cardDrawPromise,
				playerAbnormalityPromise,
				playerGetBlockPromise,
				enemyAbnormalityPromise,
			).done(() => {
				$('.black-back-area').addClass('active');
				$('.hand-decide-area').addClass('active');
				$('.hand-area').addClass('front');
			});
			break;
		case phase.unshiftDeck:
			disabledEndBtn(true);
			disabledMyHand(false);
			updateHandDom();
			updateHandDecideTitleDom('デッキに戻すカードを選んでください');
			$.when(
				cardDrawPromise,
				playerAbnormalityPromise,
				playerGetBlockPromise,
				enemyAbnormalityPromise,
			).done(() => {
				$('.black-back-area').addClass('active');
				$('.hand-decide-area').addClass('active');
				$('.hand-area').addClass('front');
			});
			break;
		case phase.upGrade:
			disabledEndBtn(true);
			disabledMyHand(false);
			updateHandDom();
			updateHandDecideTitleDom('アップグレードするカードを選んでください');
			$.when(
				cardDrawPromise,
				playerAbnormalityPromise,
				playerGetBlockPromise,
				enemyAbnormalityPromise,
			).done(() => {
				$('.black-back-area').addClass('active');
				$('.hand-decide-area').addClass('active');
				$('.hand-enhance-area').removeClass('hidden');
				$('.hand-area').addClass('front');
			});
			break;
		case phase.reproductionToHand:
			disabledEndBtn(true);
			disabledMyHand(false);
			updateHandDom();
			updateHandDecideTitleDom('複製するカードを選んでください');
			$.when(
				cardDrawPromise,
				playerAbnormalityPromise,
				playerGetBlockPromise,
				enemyAbnormalityPromise,
			).done(() => {
				$('.black-back-area').addClass('active');
				$('.hand-decide-area').addClass('active');
				$('.hand-area').addClass('front');
			});
			break;
		case phase.restore:
			if (myTrash.length <= 0) {
				console.log('捨て札がありません。');
				startPhase(phase.action);
				break;
			}
			disabledEndBtn(true);
			disabledMyHand(true);
			updateHandDom();
			updateReturnDecideTitleDom('捨て札のカードを1枚山札の一番上に置いてください');
			$.when(
				cardDrawPromise,
				playerAbnormalityPromise,
				playerGetBlockPromise,
				enemyAbnormalityPromise,
			).done(() => {
				$('.black-back-area').addClass('active');
				$('.return-decide-area').addClass('active');
				createRestoreListDom();
			});
			break;
		case phase.reuse:
			if (discard.length <= 0) {
				console.log('廃棄札がありません。');
				startPhase(phase.action);
				break;
			}
			disabledEndBtn(true);
			disabledMyHand(true);
			updateHandDom();
			updateReturnDecideTitleDom('廃棄カードを1枚手札に戻してください');
			$.when(
				cardDrawPromise,
				playerAbnormalityPromise,
				playerGetBlockPromise,
				enemyAbnormalityPromise,
			).done(() => {
				$('.black-back-area').addClass('active');
				$('.restore-decide-area').addClass('active');
				createReuseListDom();
			});
			break;
		default:
			break;
	}
}
/*******************************************************/
/* startTurn：ターン開始処理を行う
/*******************************************************/
async function startTurn(){
	console.log(`turn: ${currentTurn}`);
	updateTrashDom();
	updateDiscardDom()
	updateEnergyDom();
	$.when(
		enemyGetBlockPromise,
		enemyAbnormalityPromise
	).done(() => {
		fadeInEnemyOmenDom();
		updateEnemyAreaDom(currentEnemies, true);
	});
	$.when(
		playerAbnormalityPromise,
		playerGetBlockPromise
	).done(() => {
		updatePlayerAreaDom(playerStatus);
	});
	for(const hand of myHand){
		await animateDrawDeck(hand);
	}
	$.when(cardDrawPromise).done(() => {
		updateHandDom();
		disabledMyHand(false);
		updateDeckDom();
	});
	startPhase(phase.action);
}
/*******************************************************/
/* endTurn：ターン終了処理を行う
/*******************************************************/
function endTurn(){
	console.log(`endTurn`);
	// カードを5枚引く
	drawCardFromDeck(initialHandNum);
	
	// 「ヘイスト」で追加2枚
	const drawCard = playerStatus.statuses
		.find((status) => status.name === bufStatus.drawCard.name);
	if (drawCard){
		drawCardFromDeck(2);
		drawCard.amount = 0;
	}

	// エネルギーを回復する
	playerStatus.remainEnergy = playerStatus.maxEnergy;
	// 「活性」で追加回復
	const energized = playerStatus.statuses
		.find((status) => status.name === bufStatus.energized.name);
	if (energized){
		playerStatus.remainEnergy += energized.amount;
		energized.amount = 0;
	}

	// 「次ターンブロック」でブロックを得る
	const nextTurnBlock = playerStatus.statuses
		.find((status) => status.name === bufStatus.nextTurnBlock.name);
	if (nextTurnBlock){
		playerStatus.block += nextTurnBlock.amount;
		nextTurnBlock.amount = 0;
	}
	// 「攻UP無効」で攻撃力アップが減る
	const invalidAttackUp = playerStatus.statuses
		.find((status) => status.name === debufStatus.invalidAttackUp.name);
	if (invalidAttackUp){
		const attackUp = playerStatus.statuses
			.find((status) => status.name === bufStatus.attackUp.name);
		if(attackUp){
			attackUp.amount -= invalidAttackUp.amount;
		}
	}

	
	// ターン制の状態変化のターンを進める
	// プレイヤーの状態変化処理
	playerStatus.statuses.forEach((status, index) => {
		switch(status.name){
			case bufStatus.defenseUp.name:
			case bufStatus.penetration.name:
			case bufStatus.phantasmal.name:
			case debufStatus.defenseDown.name:
			case debufStatus.frail.name:
			case debufStatus.weak.name:
			case debufStatus.poison.name:
			case debufStatus.noBlock.name:
			case debufStatus.noDraw.name:
			case debufStatus.Fading.name:
				status.amount--;
				break;
			case debufStatus.invalidAttackUp.name:
				status.amount = 0;
				break;
			default:
				break;
		}
	});
	// 効果が切れた状態変化を削除する
	playerStatus.statuses = playerStatus.statuses.filter((status) => {
		return status.amount > 0;
	});
	// エネミーの状態変化処理
	currentEnemies.forEach((enemy) => {
		enemy.currentStatus.status.forEach((status) => {
			switch(status.name){
				case bufStatus.defenseUp.name:
				case bufStatus.phantasmal.name:
				case debufStatus.defenseDown.name:
				case debufStatus.frail.name:
				case debufStatus.weak.name:
				case debufStatus.poison.name:
				case debufStatus.noBlock.name:
				case debufStatus.Fading.name:
					status.amount--;
					break;
				default:
					break;
			}
		});
		// 効果が切れた状態変化を削除する
		enemy.currentStatus.status = enemy.currentStatus.status.filter((status) => {
			return status.amount > 0;
		});
	});
	// ブロックを解除する
	playerStatus.block = 0;
	// 次の予測を決定する
	decideNextAction();
	// 捨て札の枚数をリセットする
	trashCount = 0;
	// ターンを進める
	currentTurn++;
}
/*******************************************************/
/* startAbility：敵やAFの開始時効果処理を行う
/*******************************************************/
function startAbility(){
	console.log(myArtifact);
	// アーティファクトの効果を発動
	myArtifact.forEach((artifact) => {
		switch(artifact.name){
			case starterArtifact.recovery.name:
			case starterArtifact.startDraw.name:
			case normalArtifact.agility.name:
			case normalArtifact.strength.name:
			case normalArtifact.normalRecovery.name:
			case normalArtifact.block.name:
				if (artifact.firstFunc !== '') {
					const storedFunc = globalThis[artifact.firstFunc];
					if( typeof storedFunc === 'function'){
						ret = storedFunc();
					} 
				}
				break;
			default:
				break;
		}
	});
	currentEnemies.forEach((enemy) => {
		console.log(enemy.actionFirst);
		if (enemy.actionFirst !== '') {
			const storedFunc = globalThis[enemy.actionFirst];
			if( typeof storedFunc === 'function'){
				ret = storedFunc(enemy, playerStatus, true);
			} 
		}
	});
		
}

/*******************************************************/
/* startCleanup：ターン終了処理を行う
/*******************************************************/
function startCleanup(){
	// カードに触れれなくする
	disabledMyHand(true);
	// 手札を捨て札エリアに格納
	deleteAllHand().forEach((card) => {
		if('ethereal' in card.amount && card.amount.ethereal){
			// エセリアルは廃棄
			pushDiscard(card);
		} else {
			pushTrash(card);
			animateHandToTrash(card);
		}
	});
	// トラッシュアニメーションが完了したら
	$.when(cardTrashPromise).done(() => {
		hiddenHandDom();
		updateTrashDom();
	});
	// ターン終了時効果の発動
	// バリアの効果発動
	const barrier = playerStatus.statuses
		.find((status) => status.name === bufStatus.barrier.name);
	if (barrier){
		actionBlock(barrier.amount);
		updatePlayerStatusDom(playerStatus);
		barrier.amount = 0;
	}
	// 再生の効果発動
	const regene = playerStatus.statuses
		.find((status) => status.name === bufStatus.regene.name);
	if (regene){
		recoveryHP(regene.amount);
		updatePlayerStatusDom(playerStatus);
		regene.amount = 0;
	}
	startEnemiesTurn();
}


/*******************************************************/
/* drawDeckCard：デッキからカードをドローする
/*******************************************************/
function drawCardFromDeck(count = 1){
	const drawCards = [];
	for(let i = 0; i < count; i++){
		if (myDeck.length <= 0) {
			// 捨て札をデッキに再構築する
			reconfigureDeck();
		}
		// デッキから手札へカードを引く
		const card = shiftDeck();
		if (card !== undefined){
			pushHand(card);
			drawCards.push(card);
		}else{
			console.log("shiftDeck undefined");
			break;
		}
	}
	// デッキと手札をローカルストレージに記憶
	setLocalStorage(keyContinueDeck, myDeck);
	setLocalStorage(keyContinueHand, myHand);
	return drawCards;
}
/*******************************************************/
/* reconfigureDeck：捨て札のカードをデッキに再構成する
/*******************************************************/
function reconfigureDeck(){
	// 捨て札をデッキに格納
	deleteAllTrash().forEach((card) => {
		pushDeck(card);
	});
	//デッキをシャッフル
	myDeck = shuffleArray(myDeck);
	setLocalStorage(keyContinueDeck, myDeck);
	setLocalStorage(keyContinueTrash, myTrash);
}
/*******************************************************/
/* playHandCard：カードをプレイする
/*******************************************************/
function playHandCard(index){
	const card = spliceHand(index);
	// 手札表示の更新
	updateHandDom();
	pushStackCard(card);

	setLocalStorage(keyContinueHand, myHand);
	setLocalStorage(keyContinueStack, stackCard);

	endAction();
}
/*******************************************************/
/* endAction：プレイしたカードの終了処理をする
/*******************************************************/
function endAction(){
	let ret = false;
	if ( stackCard.length === 0 ){
		const playCards = deleteAllPlayArea();
		setLocalStorage(keyContinuePlayArea, playArea);
		playCards.forEach((playCard) => {
			if('tmpDiscard' in playCard.amount && playCard.amount.tmpDiscard){
				delete playCard.amount.tmpDiscard;
				pushDiscard(playCard);
				setLocalStorage(keyContinueDiscard, discard);
				updateDiscardDom();
			} else if(playCard.amount.discard){
				pushDiscard(playCard);
				setLocalStorage(keyContinueDiscard, discard);
				updateDiscardDom();
			} else {
				pushTrash(playCard);
				setLocalStorage(keyContinueTrash, myTrash);
				updateTrashDom();
			}
		});
		return true;
	}
	// 攻撃を内部的に行う
	const card = shiftStackCard();
	pushPlayArea(card);
	// カードプレイのアニメーション
	animatePlayCard(card);
	if (card !== undefined) {
		const storedFunc = globalThis[card.func];
		if( typeof storedFunc === 'function'){
			ret = storedFunc(card.amount);
		} 
	}
	checkEnemyDefeated(currentEnemies);
	setLocalStorage(keyContinuePlayArea, playArea);
	setLocalStorage(keyContinueStack, stackCard);
	setLocalStorage(keyContinuePlayerStatus, playerStatus);
	setLocalStorage(keyContinueEnemy, currentEnemies);
	// ステータス部分だけ更新する
	updatePlayerStatusDom(playerStatus);
	updateEnemyStatusDom(currentEnemies);
	// 攻撃アニメーションの完了を待ち、DOM更新する
	$.when(
		playerGetBlockPromise,
		playerAbnormalityPromise
	).done(() => {
		updatePlayerAreaDom(playerStatus);
	});
	$.when(enemyAbnormalityPromise).done(() => {
		updateEnemyAreaDom(currentEnemies, true);
	});
	
	if (allDefeatedFlag){
		console.log('全滅');
		console.log(enemyDefeatedPromise);
		$.when(
			enemyDefeatedPromise
		).done(() => {
			allEnemiesDefeated();
		});
	}
	$.when(
		cardDrawPromise,
		cardTrashPromise
	).done(() => {
		updateHandDom();
	});
	return ret;
}
/*******************************************************/
/* clickHandProcess：手札クリック時の処理
/*******************************************************/
function clickHandProcess(handCardDiv, hand){
	
	const index = findIndexTemporaryArea('id', hand.id);
	switch(currentPhase) {
		case phase.action:
			if ('conditions' in hand.amount && hand.amount.conditions !== '') {
				const conditionsFunc = globalThis[hand.amount.conditions];
				if( typeof conditionsFunc === 'function'){
					if(!conditionsFunc()){
						alert("発動条件を満たしていません。");
						return false
					}else{
						console.log('発動可能');
					}
				} 
			}
			if (hand.amount.cost === 'X'){// コストXのカードの場合
				hand.amount.variable = playerStatus.remainEnergy;
				playerStatus.remainEnergy = 0;
				updateEnergyDom();
				const index = findIndexHand('id', hand.id);
				playHandCard(index);
				setLocalStorage(keyContinuePlayerStatus, playerStatus);
			} else if (playerStatus.remainEnergy >= hand.amount.cost) {
				const index = findIndexHand('id', hand.id);
				playerStatus.remainEnergy -= hand.amount.cost;
				updateEnergyDom();
				playHandCard(index);
				setLocalStorage(keyContinuePlayerStatus, playerStatus);
			} else {
				alert("エネルギーが足りません");
				deleteAllTemporaryArea();
				setLocalStorage(keyContinueTemporary, tmpArea);
				return false;
			}
			break;
		case phase.enemy:
			break;
		case phase.trash:
		case phase.unshiftDeck:
			if (index === -1) {
				if (tmpArea.length < 1){
					pushTemporaryArea(hand);
					handCardDiv.addClass("select");
				} else {
					spliceTemporaryArea(index);
					$('.hand-card').removeClass("select");
					pushTemporaryArea(hand);
					handCardDiv.addClass("select");
				}
			} else {
				spliceTemporaryArea(index);
				handCardDiv.removeClass("select");
			}
			break;
		case phase.upGrade:
			if (index === -1) {
				if('key' in hand){
					if (tmpArea.length < 1){
						pushTemporaryArea(hand);
						handCardDiv.addClass("select");
						selectEnhanceCardDom(hand);
					} else {
						spliceTemporaryArea(index);
						$('.hand-card').removeClass("select");
						pushTemporaryArea(hand);
						handCardDiv.addClass("select");
						selectEnhanceCardDom(hand);
					}
				}
			} else {
				spliceTemporaryArea(index);
				handCardDiv.removeClass("select");
			}
			break;
		case phase.reproductionToHand:
			if(hand.type === type.attack || hand.type === type.power){
				if (index === -1) {
					if (tmpArea.length < 1){
						pushTemporaryArea(hand);
						handCardDiv.addClass("select");
					} else {
						spliceTemporaryArea(index);
						$('.hand-card').removeClass("select");
						pushTemporaryArea(hand);
						handCardDiv.addClass("select");
					}
				} else {
					spliceTemporaryArea(index);
					handCardDiv.removeClass("select");
				}
			} else {
				alert('「アタック」か「パワー」しか選択できません。')
			}
			break;
		default:
			break;
	}
	return true;
}
/*******************************************************/
/* clickTrashCardProcess：捨て札クリック時の処理
/*******************************************************/
function clickTrashCardProcess(trashCardDiv, card){
	const trashIndex = findIndexTemporaryArea('id', card.id);
	switch(currentPhase) {
		case phase.restore:
			if (trashIndex === -1) {
				if (tmpArea.length < 1){
					pushTemporaryArea(card);
					trashCardDiv.addClass("select");
				} else {
					spliceTemporaryArea(trashIndex);
					$('.enhance-card').removeClass("select");
					pushTemporaryArea(card);
					trashCardDiv.addClass("select");
				}
			} else {
				spliceTemporaryArea(trashIndex);
				trashCardDiv.removeClass("select");
			}
			console.log(tmpArea);
			break;
		default:
			break;
	}
	return true;
}
/*******************************************************/
/* clickTrashCardProcess：廃棄札クリック時の処理
/*******************************************************/
function clickDiscardCardProcess(trashCardDiv, card){
	const discardIndex = findIndexTemporaryArea('id', card.id);
	switch(currentPhase) {
		case phase.reuseToHand:
			if (discardIndex === -1) {
				if (tmpArea.length < 1){
					pushTemporaryArea(card);
					trashCardDiv.addClass("select");
				} else {
					spliceTemporaryArea(discardIndex);
					$('.enhance-card').removeClass("select");
					pushTemporaryArea(card);
					trashCardDiv.addClass("select");
				}
			} else {
				spliceTemporaryArea(discardIndex);
				trashCardDiv.removeClass("select");
			}
			console.log(tmpArea);
			break;
		default:
			break;
	}
	return true;
}



/*************************************************************************************/
/* エネミー関連
/*************************************************************************************/
/*******************************************************/
/* setupEnemy：出現した敵をレベルごとに決める
/*******************************************************/
function setupEnemy(){
	const mt = new MersenneTwister();
	const battleFlag = getLocalStorage(keyContinueBattleFlag);
	const lastEnemyGroup = getLocalStorage(keyContinueEnemy);
	if (lastEnemyGroup && battleFlag) {
		currentEnemies = lastEnemyGroup;
	} else {
		switch(currentLevel) {
			case stageLevel.normal:
				const totalWeight = easyEnemies.reduce((sum, item) => sum + item.weight, 0);
				let enemyGroupWeight = mt.nextInt(0, totalWeight);
				for (const enemy of Object.values(easyEnemies)) {
					if (enemyGroupWeight < enemy.weight) {
						currentEnemies = deepCopyEnemies(enemy.enemies);
						break;
					}
					enemyGroupWeight -= enemy.weight;
				}
				break;
			case stageLevel.special:
				break;
			case stageLevel.boss:
				break;
			default:
				currentEnemies = deepCopyEnemies(testEnemies[0].enemies);
				break;
		}
		currentEnemies.forEach((enemy, i) => {
			const randomHP = mt.nextInt(enemy.minHP, enemy.maxHP);
			enemy.currentStatus.maxHP = randomHP;
			enemy.currentStatus.remainHP = randomHP;
			enemy.currentStatus.divId = `enemy${i}`;
		});
		console.log(`currentLevel: ${currentLevel}`);
		setLocalStorage(keyContinueLevel, currentLevel);
		setLocalStorage(keyContinueEnemy, currentEnemies);
	}
	targetingEnemy();
	updateEnemyAreaDom(currentEnemies, false);
	console.log(currentEnemies);
}
/*******************************************************/
/* startEnemiesTurn：敵のターン処理を行う
/*******************************************************/
async function startEnemiesTurn(){
	const animatePlayerStatus = deepCopyPlayerStatus(playerStatus);
	const animateCurrentEnemies = deepCopyEnemies(currentEnemies);
	// 敵の予測した攻撃を内部的に行う
	for (const enemy of currentEnemies) {
		if(!enemy.currentStatus.status.some(status => status.name === dead.name)){
			const nextAction = enemy.currentStatus.nextAction;
			console.log(nextAction);
			if (Object.keys(nextAction).length > 0) {
				const storedFunc = globalThis[nextAction.func];
				if( typeof storedFunc === 'function'){
					ret = storedFunc(enemy, playerStatus, false);
				}
			}
		}
	}
	endTurn();
	currentPhase = phase.action;
	setLocalStorage(keyContinueTrashCount, trashCount);
	setLocalStorage(keyContinuePhase, currentPhase);
	setLocalStorage(keyContinueDeck, myDeck);
	setLocalStorage(keyContinueHand, myHand);
	setLocalStorage(keyContinueTrash, myTrash);
	setLocalStorage(keyContinueTurn, currentTurn);
	setLocalStorage(keyContinueEnemy, currentEnemies);
	setLocalStorage(keyContinuePlayerStatus, playerStatus);
	
	// 攻撃のアニメーションを行う
	for (const enemy of animateCurrentEnemies) {
		if(!enemy.currentStatus.status.some(status => status.name === dead.name)){
			const nextAction = enemy.currentStatus.nextAction;
			console.log(nextAction);
			if (Object.keys(nextAction).length > 0) {
				fadeOutEnemyOmenDom(enemy);
				await sleep(omenFadeOutWaitTime);
				const storedFunc = globalThis[nextAction.func];
				if( typeof storedFunc === 'function'){
					ret = await storedFunc(enemy, animatePlayerStatus, true);
				}
				updateEnemyStatusDom(animateCurrentEnemies);
				if (enemyAttackWaitFlag){
					animateEnemyAttack(enemy);
					await sleep(enemyAttackGoWaitTime);
					animatePlayerDamage();
					console.log(animatePlayerStatus);
					updatePlayerStatusDom(animatePlayerStatus);
				}
				await sleep(1500);
				enemy.currentStatus.nextAction = {};
			}
		}
		updatePlayerAreaDom(animatePlayerStatus);
		updateEnemyAreaDom(animateCurrentEnemies, true);
		enemyAttackWaitFlag = false;
	}
	startTurn();
}
/*******************************************************/
/* decideNextAction：敵の次の行動を決める
/*******************************************************/
function decideNextAction(){
	currentEnemies.forEach((enemy) => {
		if(!enemy.currentStatus.status.some(status => status.name === dead.name)){
			const actionFunc = enemy.actionAlgorithm;
			if (actionFunc !== '') {
				const storedFunc = globalThis[actionFunc];
				if( typeof storedFunc === 'function'){
					enemy.currentStatus.nextAction = storedFunc();
				} 
			}
		}
	});
}


/*******************************************************/
/* checkEnemyDefeated：敵が倒されたかチェックする
/*******************************************************/
function checkEnemyDefeated(Enemies){
	allDefeatedFlag = true;
	Enemies.forEach((enemy, i) => {
		if(!enemy.currentStatus.status.some(status => status.name === dead.name)){
			if(enemy.currentStatus.remainHP <= 0){
				enemy.currentStatus.status.splice(0);
				enemy.currentStatus.status.push(dead);
				targetingEnemy();
				animateDefeated(enemy);
			} else {
				allDefeatedFlag = false;
			}
		}
	});
}

/*******************************************************/
/* targetingEnemy：自動でターゲッティングする
/*******************************************************/
function targetingEnemy(){
	currentEnemies.forEach((enemy) => {
		if(!enemy.currentStatus.status.some(status => status.name === dead.name)){
			currentTarget = enemy;
			
		}
	});
}

/*******************************************************/
/* targetingEnemy：予兆行動のテキストを出力する
/*******************************************************/
function omenText(omenAction, totalAttack = 0){
	const omenText = 'この敵が予定しているのは<br>';
	switch(omenAction.type){
		case enemyActionType.attack:
			return omenText + omenAction.type + 'による<span>' + totalAttack +'</span>ダメージ。';
			break;
		case enemyActionType.block:
			return omenText + omenAction.type + 'を与えること。';
			break;
		case enemyActionType.buff:
			return omenText + omenAction.type + 'の使用。';
			break;
		case enemyActionType.debuff:
			return omenText + omenAction.type + 'を与えること。';
			break;
		case enemyActionType.blockAndAttack:
			return omenText + omenAction.type + 'を<span>' + totalAttack +'</span>ダメージ。';
			break;
		case enemyActionType.blockAndBuff:
			return omenText + omenAction.type + 'の使用。';
			break;

		case enemyActionType.buffAndAttack:
			return omenText + 'バフを使用し、アタックを<span>' + totalAttack +'</span>ダメージ。';
			break;
		case enemyActionType.debuffAndAttack:
			return omenText + 'デバフを与え、アタックを<span>' + totalAttack +'</span>ダメージ。';
			break;
		default:
			return omenText + '不明です';
			break;
	}
}
/*******************************************************/
/* allEnemiesDefeated：敵がすべて倒された時の処理
/*******************************************************/
function allEnemiesDefeated(){
	console.log('allEnemiesDefeated');
	const lastReward = getLocalStorage(keyContinueReward);
	$('result-content').html('');
	console.log(lastReward);
	if (lastReward) {
		rewards = lastReward;
	} else {
		// コイン報酬
		const decidedMoneyReward = decideMoneyReward();
		rewards.push(decidedMoneyReward);

		// 武器報酬
		const selectCards = decideCardReward();
		rewards.push(selectCards);

		// アーティファクト報酬
		switch (currentLevel) {
			case stageLevel.test:
			case stageLevel.special:
			case stageLevel.boss:
				break;
			default:
				break;
		}

		setLocalStorage(keyContinueReward, rewards);
	}
	updateResultContentDom();
	
	$('.result-modal').addClass('active');
}
/*******************************************************/
/* decideMoneyReward：コイン報酬の設定
/*******************************************************/
function decideMoneyReward(){
	const mt = new MersenneTwister();
	let money = 0;
	console.log(`currentLevel: ${currentLevel}`);
	switch(currentLevel){
		case stageLevel.test:
			money = mt.nextInt(moneyReward.normal.min, moneyReward.normal.max);
			break;
		case stageLevel.normal:
			money = mt.nextInt(moneyReward.normal.min, moneyReward.normal.max);
			break;
		case stageLevel.special:
			money = mt.nextInt(moneyReward.special.min, moneyReward.special.max);
			break;
		case stageLevel.boss:
			money = mt.nextInt(moneyReward.boss.min, moneyReward.boss.max);
			break;
		default:
			break;
	}
	return {type: 'money', getFlag: true, amount: money};
}

/***************************************************************************************/
/* モーダル要素の更新処理
/***************************************************************************************/
/*******************************************************/
/* setupExplanationModal：説明モーダルの初期設定
/*******************************************************/
function setupExplanationModal(){
	//モーダルの外側をクリックしたらモーダルを閉じる
	$(document).click((e) => {
		if(!$(e.target).closest('.explanation-modal-body').length) {
			closeExplanationModalDom();
		}
	});
}

/*******************************************************/
/* openExplanationModalDom：説明モーダル表示処理
/*******************************************************/
function openExplanationModalDom(card){
	const explanationModal = $('<div>');
	explanationModal.html(`
		<h1>${card.name}</h1>
		<img src="${card.image}">
		<div>${card.effect}</div>
	`);
	if (card.class == cardClass.gran) {
		explanationModal.addClass('gran-card');
	} else if (card.class == cardClass.djeeta) {
		explanationModal.addClass('djeeta-card');
	} else if (card.class == cardClass.common) {
		explanationModal.addClass('common-card');
	} else if (card.class == cardClass.abnormal) {
		drawCardDiv.addClass('abnormal-card');
	}
	explanationModal.addClass('explanation-modal-card');
	$('.explanation-modal-body').append(explanationModal);
	$('.explanation-modal').addClass('active');
}
/*******************************************************/
/* closeExplanationModalDom：説明モーダル非表示処理
/*******************************************************/
function closeExplanationModalDom(){
	$('.explanation-modal').removeClass('active');
	$('.explanation-modal-body').html('');
}