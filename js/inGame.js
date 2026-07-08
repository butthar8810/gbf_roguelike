/*************************************************************************************/
/* 初期設定
/*************************************************************************************/
/*******************************************************/
/* startBattle：戦闘を開始する
/*******************************************************/
function startBattle(){
	// 各キューの初期化
	initialize();
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
	removeLocalStorage(keyContinueHold);
	removeLocalStorage(keyContinuePhase);
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

	updateDeckDom();
	updateTrashDom();
	updateDiscardDom();
	updateHandDom();
	updateEnergyDom();
	updateEnemyAreaDom(currentEnemies, true);
	$('.battle-area').removeClass('hidden');
	$('.info-area').removeClass('hidden');
	
	// フェイズ開始
	if (currentPhase !== null){
		startPhase();
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
	const lastHold = getLocalStorage(keyContinueHold);
	const lastTurn = getLocalStorage(keyContinueTurn);
	const lastPlayerStatus = getLocalStorage(keyContinuePlayerStatus);
	const lastLevel = getLocalStorage(keyContinueLevel);
	const lastPhase = getLocalStorage(keyContinuePhase);
	if (lastTrash) {myTrash = lastTrash;}
	if (lastPlayArea) {playArea = lastPlayArea;}
	if (lastDiscard ) {discard = lastDiscard;}
	if (lastTemporary) {tmpArea = lastTemporary;}
	if (lastStack) {stackCards = lastStack;}
	if (lastHold) {holdCard = lastHold;}
	if (lastTurn) {currentTurn = lastTurn;}
	if (lastPhase) {currentPhase = lastPhase;}
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
		playerStatus.playerCount.HPDownCount = lastPlayerStatus.playerCount.HPDownCount;
		playerStatus.playerCount.trashCountPerTurn = lastPlayerStatus.playerCount.trashCountPerTurn;
		playerStatus.playerCount.playAttackPerTurn = lastPlayerStatus.playerCount.playAttackPerTurn;
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
	deleteAllStackCards();
	currentTurn = 1;
	playerStatus.remainEnergy = playerStatus.maxEnergy;
}
/*******************************************************/
/* readyDeck：初期デッキとなるカードを配る
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
		const giftCardsNum = giftDrawFromDeck();
		drawCardFromDeck(initialHandNum - giftCardsNum);
		setLocalStorage(keyContinueHand, myHand);
	}
}

/*******************************************************/
/* setupBtn：各種ボタンの初期設定
/*******************************************************/
function setupBtn(){
	disabledEndBtn(false);
	$('.deck-area').click((e) => {
		if (myDeck.length <= 0) {
			console.log('デッキがありません。');
			return;
		}
		$('.black-back-area').addClass('active');
		$('.list-area').addClass('active');
		createDeckListDom();
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
			case phase.twoTrash:
				if(tmpArea.length < 2){
					break;
				}
				trashCard();
				break;
			case phase.threeTrash:
				if(tmpArea.length < 3){
					break;
				}
				trashCard();
				break;
			case phase.caitSea:
				const caitSea = playerStatus.statuses
					.find((status) => status.name === bufStatus.caitSea.name);
				if(tmpArea.length < caitSea.amount){
					break;
				}
				trashCard();
				break;
			case phase.discard:
				discardCard();
				break;
			case phase.unshiftDeck:
				unshiftDeckCard(false);
				break;
			case phase.unshiftDeckAndZero:
				unshiftDeckCard(true);
				break;
			case phase.upGrade:
				upGradeCard();
				break;
			case phase.reproductionToHand:
				reproductionToHandCard(1);
				break;
			case phase.twoReproductionToHand:
				reproductionToHandCard(2);
				break;
			case phase.reproductionToNextTurn:
				reproductionToNextTurnCard(3);
				break;
			case phase.repair:
				repairCard();
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
/* changePhase: 各フェイズを変更する
/*******************************************************/
function changePhase(ph){
	currentPhase = ph;
	setLocalStorage(keyContinuePhase, currentPhase);
}
/*******************************************************/
/* startPhase: 各フェイズを開始する
/*******************************************************/
function startPhase(ph = false){
	console.log(currentPhase);
	if(ph){
		changePhase(ph);
	}
	switch(currentPhase){
		case phase.action:
			disabledEndBtn(false);
			disabledMyHand(false);
			endAction();
			checkEnemyDefeated(currentEnemies, playerStatus);
			if (allDefeatedFlag){
				allEnemiesDefeated();
			}
			break;
		case phase.enemy:
			disabledEndBtn(true);
			endTurn();
			break;
		case phase.trash:
		case phase.caitSea:
			if (myHand.length <= 0) {
				console.log('手札がありません。');
				startPhase(phase.action);
				break;
			}
			disabledEndBtn(true);
			disabledMyHand(false);
			updateHandDom();
			updateHandDecideTitleDom('捨てるカードを選んでください');
			$.when(
				cardDrawPromise,
				playerAbnormalityPromise,
				enemyAbnormalityPromise,
			).done(() => {
				$('.black-back-area').addClass('active');
				$('.hand-decide-area').addClass('active');
				$('.hand-area').addClass('front');
			});
			break;
		case phase.twoTrash:
			if (myHand.length <= 0) {
				console.log('手札がありません。');
				startPhase(phase.action);
				break;
			}
			disabledEndBtn(true);
			disabledMyHand(false);
			updateHandDom();
			updateHandDecideTitleDom('捨てるカードを選んでください:２枚');
			$.when(
				cardDrawPromise,
				playerAbnormalityPromise,
				enemyAbnormalityPromise,
			).done(() => {
				$('.black-back-area').addClass('active');
				$('.hand-decide-area').addClass('active');
				$('.hand-area').addClass('front');
			});
			break;
		case phase.threeTrash:
			if (myHand.length <= 0) {
				console.log('手札がありません。');
				startPhase(phase.action);
				break;
			}
			disabledEndBtn(true);
			disabledMyHand(false);
			updateHandDom();
			updateHandDecideTitleDom('捨てるカードを選んでください:３枚');
			$.when(
				cardDrawPromise,
				playerAbnormalityPromise,
				enemyAbnormalityPromise,
			).done(() => {
				$('.black-back-area').addClass('active');
				$('.hand-decide-area').addClass('active');
				$('.hand-area').addClass('front');
			});
			break;
		case phase.discard:
			if (myHand.length <= 0) {
				console.log('手札がありません。');
				startPhase(phase.action);
				break;
			}
			disabledEndBtn(true);
			disabledMyHand(false);
			updateHandDom();
			updateHandDecideTitleDom('廃棄するカードを選んでください');
			$.when(
				cardDrawPromise,
				playerAbnormalityPromise,
				enemyAbnormalityPromise,
			).done(() => {
				$('.black-back-area').addClass('active');
				$('.hand-decide-area').addClass('active');
				$('.hand-area').addClass('front');
			});
			break;
		case phase.unshiftDeck:
		case phase.unshiftDeckAndZero:
			if (myHand.length <= 0) {
				console.log('手札がありません。');
				startPhase(phase.action);
				break;
			}
			disabledEndBtn(true);
			disabledMyHand(false);
			updateHandDom();
			updateHandDecideTitleDom('デッキに戻すカードを選んでください');
			$.when(
				cardDrawPromise,
				playerAbnormalityPromise,
				enemyAbnormalityPromise,
			).done(() => {
				$('.black-back-area').addClass('active');
				$('.hand-decide-area').addClass('active');
				$('.hand-area').addClass('front');
			});
			break;
		case phase.upGrade:
			if (myHand.length <= 0) {
				console.log('手札がありません。');
				startPhase(phase.action);
				break;
			}
			disabledEndBtn(true);
			disabledMyHand(false);
			updateHandDom();
			updateHandDecideTitleDom('アップグレードするカードを選んでください');
			$.when(
				cardDrawPromise,
				playerAbnormalityPromise,
				enemyAbnormalityPromise,
			).done(() => {
				$('.black-back-area').addClass('active');
				$('.hand-decide-area').addClass('active');
				$('.hand-enhance-area').removeClass('hidden');
				$('.hand-area').addClass('front');
			});
			break;
		case phase.reproductionToHand:
		case phase.twoReproductionToHand:
		case phase.reproductionToNextTurn:
			if (myHand.length <= 0) {
				console.log('手札がありません。');
				startPhase(phase.action);
				break;
			}
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
		case phase.repair:
			if (myHand.length <= 0) {
				console.log('手札がありません。');
				startPhase(phase.enemy);
				break;
			}
			disabledEndBtn(true);
			disabledMyHand(false);
			updateHandDom();
			updateHandDecideTitleDom('保留するカードを選んでください');
			$('.black-back-area').addClass('active');
			$('.hand-decide-area').addClass('active');
			$('.hand-area').addClass('front');
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
		case phase.reuseToHand:
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
				$('.return-decide-area').addClass('active');
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
	updateDiscardDom();
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
	$.when(cardDrawPromise,cardAddHandPromise).done(() => {
		updateHandDom();
		disabledMyHand(false);
		updateDeckDom();
	});
	startPhase();
}
/*******************************************************/
/* startTurnStatuses：ターン開始時のステータス処理を行う
/*******************************************************/
function startTurnStatuses(playerInfo, enemiesInfo, animateFlag){
	//ターン開始時効果を発動する
	console.log(`endTurnStatuses`);
	//「攻UP無効」で攻撃力アップが減る
	const invalidAttackUp = playerInfo.statuses
		.find((status) => status.name === debufStatus.invalidAttackUp.name);
	if (invalidAttackUp){
		const attackUp = playerInfo.statuses
			.find((status) => status.name === bufStatus.attackUp.name);
		if(attackUp){
			if(attackUp.amount > invalidAttackUp.amount){
				attackUp.amount -= invalidAttackUp.amount;
			} else {
				attackUp.amount = 0;
			}
		}
	}
	//「防Down削除」で攻撃力ダウンが減る
	const invalidAttackDown = playerInfo.statuses
		.find((status) => status.name === debufStatus.invalidAttackDown.name);
	if (invalidAttackDown){
		const attackDown = playerInfo.statuses
			.find((status) => status.name === debufStatus.attackDown.name);
		if(attackDown){
			if(attackDown.amount > invalidAttackDown.amount){
				attackDown.amount -= invalidAttackDown.amount;
			} else {
				attackDown.amount = 0;
			}
		}
	}
	//「無限の飛刃」の効果発動
	const infinite = playerInfo.statuses
		.find((status) => status.name === bufStatus.infinite.name);
	if (infinite){
		if(animateFlag){
			// アニメーション用
			const commonCard = [];
			for(let i = 0; i < infinite.amount; i++){
				commonCard.push(commonCardList.Knife);
			}
			animatePlayerAddHand(commonCard);
		}else {
			// 内部処理用
			for(let i = 0; i < infinite.amount; i++){
				pushHand(commonCardList.Knife);
			}	
		}
	}

	//「怨念」の効果発動
	const grudge = playerInfo.statuses
		.find((status) => status.name === bufStatus.grudge.name);
	if (grudge){
		actionStatusAllDebufForAnimate(enemiesInfo, debufStatus.poison, grudge.amount, animateFlag);
	}
	//「果ての力」の効果発動
	const end = playerInfo.statuses
		.find((status) => status.name === bufStatus.end.name);
	if (end){
		actionStatusBufForAnimate(playerInfo, bufStatus.attackUp, end.amount, animateFlag);
	}
	//「英雄の盾」がある場合はブロックを初期化しない
	const hero = playerInfo.statuses
		.find((status) => status.name === bufStatus.hero.name);
	const lightWall = playerInfo.statuses
		.find((status) => status.name === bufStatus.lightWall.name);
	if (!hero && !lightWall){
		// ブロックを解除する
		playerInfo.block = 0;
	}
	// 「次ターンブロック」でブロックを得る
	const nextTurnBlock = playerInfo.statuses
		.find((status) => status.name === bufStatus.nextTurnBlock.name);
	if (nextTurnBlock){
		playerInfo.block += nextTurnBlock.amount;
	}
	// エネルギーを回復する
	playerInfo.remainEnergy = playerInfo.maxEnergy;
	// 「活性」で追加回復
	const activity = playerInfo.statuses
		.find((status) => status.name === bufStatus.activity.name);
	if (activity){
		playerInfo.remainEnergy += activity.amount;
	}
	// 「活性化」で追加回復
	const energized = playerInfo.statuses
		.find((status) => status.name === bufStatus.energized.name);
	if (energized){
		playerInfo.remainEnergy += energized.amount;
	}
	
	// ターン制の状態変化のターンを進める
	// プレイヤーの状態変化処理
	playerInfo.statuses.forEach((status, index) => {
		switch(status.name){
			case bufStatus.defenseUp.name:
			case bufStatus.doubleDamage.name:
			case bufStatus.damageCut.name:
			case debufStatus.defenseDown.name:
			case debufStatus.frail.name:
			case debufStatus.weak.name:
				status.amount--;
				break;
			case bufStatus.reflection.name:
			case bufStatus.wind.name:
			case bufStatus.attackCombo.name:
			case bufStatus.skillCombo.name:
			case bufStatus.activity.name:
			case bufStatus.lightWall.name:
			case bufStatus.nextTurnBlock.name:
			case bufStatus.nextTurnDraw.name:
			case bufStatus.reproduction.name:
			case debufStatus.noDraw.name:
			case debufStatus.invalidAttackUp.name:
			case debufStatus.invalidAttackDown.name:
			case debufStatus.suffocation.name:
				status.amount = 0;
				break;
			default:
				break;
		}
	});
	// 効果が切れた状態変化を削除する
	playerInfo.statuses = playerInfo.statuses.filter((status) => {
		return status.amount !== 0;
	});
	const Ereshkigal = playerInfo.statuses
		.find((status) => status.name === bufStatus.Ereshkigal.name);
	if (Ereshkigal){
		actionStatusBufForAnimate(playerInfo, bufStatus.doubleDamage, 1, animateFlag);
		Ereshkigal.amount--;
	}
	// 効果が切れた状態変化を削除する
	playerInfo.statuses = playerInfo.statuses.filter((status) => {
		return status.amount !== 0;
	});
	
	// エネミーの状態変化処理
	enemiesInfo.forEach((enemy) => {
		//「攻Down削除」で攻撃力ダウンが減る
		const invalidAttackDown = enemy.currentStatus.status
			.find((status) => status.name === debufStatus.invalidAttackDown.name);
		if (invalidAttackDown){
			const attackDown = enemy.currentStatus.status
				.find((status) => status.name === debufStatus.attackDown.name);
			if(attackDown){
				if(attackDown.amount > invalidAttackDown.amount){
					attackDown.amount -= invalidAttackDown.amount;
				} else {
					attackDown.amount = 0;
				}
			}
		}
		const spiritual = enemy.currentStatus.status
			.find((status) => status.name === bufStatus.spiritual.name);
		if (spiritual){
			enemyStatusBuf(enemy, animateFlag, bufStatus.attackUp, spiritual.amount)
		}
		enemy.currentStatus.status.forEach((status) => {
			switch(status.name){
				case bufStatus.defenseUp.name:
				case bufStatus.damageCut.name:
				case debufStatus.defenseDown.name:
				case debufStatus.frail.name:
				case debufStatus.weak.name:
					status.amount--;
					break;
				case bufStatus.reflection.name:
				case bufStatus.wind.name:
				case bufStatus.attackCombo.name:
				case bufStatus.activity.name:
				case bufStatus.lightWall.name:
				case bufStatus.nextTurnBlock.name:
				case bufStatus.nextTurnDraw.name:
				case debufStatus.noDraw.name:
				case debufStatus.invalidAttackUp.name:
				case debufStatus.invalidAttackDown.name:
				case debufStatus.suffocation.name:
					status.amount = 0;
				default:
					break;
			}
		});
		// 効果が切れた状態変化を削除する
		enemy.currentStatus.status = enemy.currentStatus.status.filter((status) => {
			return status.amount !== 0;
		});
	});

	//保留したカードを手札に加える
	if(animateFlag){
		// アニメーション用
		animatePlayerAddHand(holdCard.splice(0, holdCard.length));
	}else {
		// 内部処理用
		holdCard.forEach((card) => {
			pushHand(card);
		});	
	}
	// 捨て札の枚数をリセットする
	playerInfo.playerCount.trashCountPerTurn = 0;
	playerInfo.playerCount.playAttackPerTurn = 0;
}
/*******************************************************/
/* startTurnProcess：ターン開始時の処理を行う
/*******************************************************/
function startTurnProcess(){
	console.log(`startTurnProcess`);
	//ドロー処理
	//「フルンティング」の効果発動
	const hrunting = playerStatus.statuses
		.find((status) => status.name === bufStatus.hrunting.name);
	if (hrunting){
		damageHP(1);
		drawCardFromDeck(hrunting.amount);
	}
	// 「ヘイスト」で追加2枚
	const nextTurnDraw = playerStatus.statuses
		.find((status) => status.name === bufStatus.nextTurnDraw.name);
	if (nextTurnDraw){
		drawCardFromDeck(nextTurnDraw.amount);
	}
	// 「ケット・シー」で追加1枚
	const caitSea = playerStatus.statuses
		.find((status) => status.name === bufStatus.caitSea.name);
	if (caitSea){
		drawCardFromDeck(caitSea.amount);
	}
	// カードを5枚引く
	drawCardFromDeck(initialHandNum);
	//フェイズを決定
	if (caitSea){
		changePhase(phase.caitSea);
	}else{
		changePhase(phase.action);
	}
	// ターンを進める
	currentTurn++;
	// 次の予測を決定する
	decideNextAction();

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
		if (enemy.actionFirst !== '') {
			const storedFunc = globalThis[enemy.actionFirst];
			if( typeof storedFunc === 'function'){
				ret = storedFunc(enemy, playerStatus, true);
			} 
		}
	});
		
}

/*******************************************************/
/* endTurn：ターン終了処理を行う
/*******************************************************/
function endTurn(){
	// カードに触れれなくする
	disabledMyHand(true);
	// 手札を捨て札エリアに格納
	deleteAllHand().forEach((card) => {
		if('ethereal' in card.amount && card.amount.ethereal){
			// エセリアルは廃棄
			discardCardProcess(card);
			animateHandToDiscard(card);
		} else {
			pushTrash(card);
			animateHandToTrash(card);
		}
	});
	// トラッシュアニメーションが完了したら
	$.when(cardTrashPromise).done(() => {
		hiddenHandDom();
		updateDiscardDom();
		updateTrashDom();
	});
	// 「再生」の効果発動
	const regeneration = playerStatus.statuses
		.find((status) => status.name === bufStatus.regeneration.name);
	if (regeneration){
		recoveryHP(regeneration.amount);
		updatePlayerStatusDom(playerStatus);
		regeneration.amount = 0;
	}
	// ターン終了時効果の発動
	// 「バリア」の効果発動
	const barrier = playerStatus.statuses
		.find((status) => status.name === bufStatus.barrier.name);
	if (barrier){
		actionBlock(barrier.amount);
	}
	//「狂化」の効果発動
	const madness = playerStatus.statuses
		.find((status) => status.name === bufStatus.madness.name);
	if (madness){
		damageHP(1);
		actionAllAttackSimple(madness.amount);
		updateEnemyStatusDom(currentEnemies);
	}
	//「鈍化」の効果発動
	const slowing = playerStatus.statuses
		.find((status) => status.name === debufStatus.slowing.name);
	if (slowing){
		actionStatusBuf(debufStatus.dexterityDown, slowing.amount);
	}
	//「精神統一」の効果
	const spiritual = playerStatus.statuses
		.find((status) => status.name === bufStatus.spiritual.name);
	if (spiritual){
		actionStatusBuf(debufStatus.attackUp, spiritual.amount);
	}
	// エネミーの状態変化処理
	currentEnemies.forEach((enemy) => {
		// ブロックの初期化
		enemy.currentStatus.block = 0;
		// 「毒」の効果発動
		const poison = enemy.currentStatus.status
			.find((status) => status.name === debufStatus.poison.name);
		if (poison){
			enemy.currentStatus.remainHP -= poison.amount;
			poison.amount--;
		}
		// 効果が切れた状態変化を削除する
		enemy.currentStatus.status = enemy.currentStatus.status.filter((status) => {
			return status.amount !== 0;
		});
	});
	updatePlayerStatusDom(playerStatus);
	updateEnemyStatusDom(currentEnemies);
	startEnemiesTurn();
}


/*******************************************************/
/* drawDeckCard：デッキからカードをドローする
/*******************************************************/
function drawCardFromDeck(count = 1){
	const drawCards = [];
	if(
		playerStatus.statuses
		.find((status) => status.name === debufStatus.noDraw.name)
	){
		console.log('デバフによって引けません');
		return true;
	}
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
			if('drawFanc' in card.amount){
				if (card.amount.drawFanc !== '') {
					const storedFunc = globalThis[card.amount.drawFanc];
					if( typeof storedFunc === 'function'){
						ret = storedFunc(card);
					} 
				}
			}
			if(card.type === type.abnormal){
				// 「弾幕」の効果
				const barrage = playerStatus.statuses
					.find((status) => status.name === bufStatus.barrage.name);
				if(barrage){
					actionAllAttackSimple(barrage.amount);
				}
				// 「逆境」の効果
				const adversity = playerStatus.statuses
					.find((status) => status.name === bufStatus.adversity.name);
				if(adversity){
					const cards = drawCardFromDeck(adversity.amount);
					cards.forEach((drawcard) => {
						drawCards.push(drawcard);
					});
				}
			}
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
/* giftDrawFromDeck：「天賦」のカードを引く
/*******************************************************/
function giftDrawFromDeck(){
	const giftCardIndex = myDeck.reduce((acc, current, index) => {
		if ('gift' in current.amount && current.amount.gift) {
			acc.push(index);
		}
		return acc;
	}, []);
	giftCardIndex.forEach((index) => {
		const giftCard = spliceDeck(index);
		pushHand(giftCard);
	});
	return giftCardIndex.length;
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
	pushStackCards({
		func: card.func,
		amount: card.amount,
	});
	pushPlayArea(card);
	//「風の加護」効果
	const wind = playerStatus.statuses
		.find((status) => status.name === bufStatus.wind.name);
	if (wind && card.type === type.attack){
		actionBlock(wind.amount);
	}
	//「連撃アップ」の効果
	const attackCombo = playerStatus.statuses
		.find((status) => status.name === bufStatus.attackCombo.name);
	if (attackCombo && attackCombo.amount > 0 && card.type === type.attack){
		pushStackCards({
			func: card.func,
			amount: card.amount,
		});
		attackCombo.amount--;
	}
	const skillCombo = playerStatus.statuses
		.find((status) => status.name === bufStatus.skillCombo.name);
	if (skillCombo && skillCombo.amount > 0 && card.type === type.skill){
		pushStackCards({
			func: card.func,
			amount: card.amount,
		});
		skillCombo.amount--;
	}
	const Bonus = playerStatus.statuses
		.find((status) => status.name === bufStatus.Bonus.name);
	if (Bonus && Bonus.amount > 0){
		currentEnemies.forEach((enemy) => {
			let totalAttack = Bonus.amount;
			// ブロック計算
			const enemyBlock = enemy.currentStatus.block;
			if(enemyBlock > 0){
				if(enemyBlock >= totalAttack){
					enemy.currentStatus.block -= totalAttack;
					totalAttack = 0;
				} else if (enemyBlock < totalAttack){
					enemy.currentStatus.block = 0;
					totalAttack = totalAttack - enemyBlock;
				}
			}
			enemy.currentStatus.remainHP -= totalAttack;
		});
	}
	const lamentation = playerStatus.statuses
		.find((status) => status.name === bufStatus.lamentation.name);
	if (lamentation && lamentation.amount > 0){
		actionBlock(lamentation.amount);
	}
	currentEnemies.forEach((enemy) => {
		//「窒息」効果
		const suffocation = enemy.currentStatus.status
			.find((status) => status.name === debufStatus.suffocation.name);
		if (suffocation){
			//ブロック無視
			enemy.currentStatus.remainHP -= suffocation.amount;
		}
	});
	playerStatus.statuses = playerStatus.statuses.filter((status) => {
		return status.amount > 0;
	});
	if(card.type === type.attack){
		playerStatus.playerCount.playAttackPerTurn++;
	}
	setLocalStorage(keyContinueHand, myHand);
	setLocalStorage(keyContinueStack, stackCards);
	setLocalStorage(keyContinuePlayerStatus, playerStatus);

	endAction();
}
/*******************************************************/
/* endAction：プレイしたカードの終了処理をする
/*******************************************************/
function endAction(){
	let ret = false;
	if ( stackCards.length === 0 ){
		const playCards = deleteAllPlayArea();
		setLocalStorage(keyContinuePlayArea, playArea);
		playCards.forEach((playCard) => {
			if(playCard.type === type.power){
				// パワーは使用するとその戦闘中デッキから取り除かれる。この処理は廃棄ではない。
				console.log(`「${playCard.name}」は取り除かれた。`);
			}else if('tmpDiscard' in playCard.amount && playCard.amount.tmpDiscard){
				delete playCard.amount.tmpDiscard;
				discardCardProcess(playCard);
				setLocalStorage(keyContinueDiscard, discard);
				updateDiscardDom();
			} else if('discard' in playCard.amount && playCard.amount.discard){
				discardCardProcess(playCard);
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
	const cardInfo = shiftStackCards();
	if (cardInfo !== undefined) {
		const storedFunc = globalThis[cardInfo.func];
		if( typeof storedFunc === 'function'){
			ret = storedFunc(cardInfo.amount);
		} 
	}
	checkEnemyDefeated(currentEnemies, playerStatus);
	setLocalStorage(keyContinueHand, myHand);
	setLocalStorage(keyContinueTrash, myTrash);
	setLocalStorage(keyContinueDiscard, discard);
	setLocalStorage(keyContinuePlayArea, playArea);
	setLocalStorage(keyContinueStack, stackCards);
	setLocalStorage(keyContinuePlayerStatus, playerStatus);
	setLocalStorage(keyContinueEnemy, currentEnemies);
	// ステータス部分だけ更新する
	updatePlayerStatusDom(playerStatus);
	updateEnemyStatusDom(currentEnemies);
	// 攻撃アニメーションの完了を待ち、DOM更新する
	$.when(
		playerAttackPromise,
		playerGetBlockPromise,
		playerAbnormalityPromise
	).done(() => {
		updatePlayerAreaDom(playerStatus);
	});
	$.when(
		enemyAbnormalityPromise,
		enemyDefeatedPromise
	).done(() => {
		updateEnemyAreaDom(currentEnemies, true);
	});
	$.when(
		cardDrawPromise,
		cardTrashPromise,
		cardDiscardPromise,
		cardAddHandPromise
	).done(() => {
		updateHandDom();
		updateTrashDom();
		updateDiscardDom();
	});
	
	if (allDefeatedFlag){
		console.log('全滅');
		$.when(
			enemyDefeatedPromise
		).done(() => {
			console.log('allEnemiesDefeated');
			allEnemiesDefeated();
		});
	}
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
			} else if ('tmpCost' in hand.amount && playerStatus.remainEnergy >= hand.amount.tmpCost) {
				const index = findIndexHand('id', hand.id);
				playerStatus.remainEnergy -= hand.amount.tmpCost;
				updateEnergyDom();
				delete hand.amount.tmpCost;
				playHandCard(index);
				setLocalStorage(keyContinuePlayerStatus, playerStatus);
			}  else if (playerStatus.remainEnergy >= hand.amount.cost) {
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
		case phase.discard:
		case phase.unshiftDeck:
		case phase.unshiftDeckAndZero:
		case phase.reproductionToNextTurn:
			if (index === -1) {
				if (tmpArea.length < 1){
					pushTemporaryArea(hand);
					handCardDiv.addClass("select");
				} else {
					const cancelCard = shiftTemporaryArea();
					$(`#hand-card${cancelCard.id}`).removeClass("select");
					pushTemporaryArea(hand);
					handCardDiv.addClass("select");
				}
			} else {
				spliceTemporaryArea(index);
				handCardDiv.removeClass("select");
			}
			break;
		case phase.twoTrash:
			if (index === -1) {
				if (tmpArea.length < 2){
					pushTemporaryArea(hand);
					handCardDiv.addClass("select");
				} else {
					const cancelCard = shiftTemporaryArea();
					$(`#hand-card${cancelCard.id}`).removeClass("select");
					pushTemporaryArea(hand);
					handCardDiv.addClass("select");
				}
			} else {
				spliceTemporaryArea(index);
				handCardDiv.removeClass("select");
			}
			break;
		case phase.threeTrash:
			if (index === -1) {
				if (tmpArea.length < 3){
					pushTemporaryArea(hand);
					handCardDiv.addClass("select");
				} else {
					const cancelCard = shiftTemporaryArea();
					$(`#hand-card${cancelCard.id}`).removeClass("select");
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
						const cancelCard = shiftTemporaryArea();
						$(`#hand-card${cancelCard.id}`).removeClass("select");
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
		case phase.twoReproductionToHand:
			if(hand.type === type.attack || hand.type === type.power){
				if (index === -1) {
					if (tmpArea.length < 1){
						pushTemporaryArea(hand);
						handCardDiv.addClass("select");
					} else {
						const cancelCard = shiftTemporaryArea();
						$(`#hand-card${cancelCard.id}`).removeClass("select");
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
		case phase.repair:
			const repair = playerStatus.statuses
				.find((status) => status.name === bufStatus.repair.name);
			if (index === -1 && repair) {
				if (tmpArea.length < repair.amount){
					pushTemporaryArea(hand);
					handCardDiv.addClass("select");
				} else {
					const cancelCard = shiftTemporaryArea();
					$(`#hand-card${cancelCard.id}`).removeClass("select");
					pushTemporaryArea(hand);
					handCardDiv.addClass("select");
				}
			} else {
				spliceTemporaryArea(index);
				handCardDiv.removeClass("select");
			}
			break;
		case phase.caitSea:
			const caitSea = playerStatus.statuses
				.find((status) => status.name === bufStatus.caitSea.name);
			if (index === -1 && caitSea) {
				if (tmpArea.length < caitSea.amount){
					pushTemporaryArea(hand);
					handCardDiv.addClass("select");
				} else {
					const cancelCard = shiftTemporaryArea();
					$(`#hand-card${cancelCard.id}`).removeClass("select");
					pushTemporaryArea(hand);
					handCardDiv.addClass("select");
				}
			} else {
				spliceTemporaryArea(index);
				handCardDiv.removeClass("select");
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
/* clickDiscardCardProcess：廃棄札クリック時の処理
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
/*******************************************************/
/* trashCardProcess：捨て札にする際の処理
/*******************************************************/
function trashCardProcess(trashCard){
	console.log('trashCardProcess');
	console.log(playerStatus);
	if('trashFunc' in trashCard.amount && trashCard.amount.trashFunc !== ''){
		pushStackCards({
			func: trashCard.trashFunc,
			amount: trashCard.amount,
		});
	}
	playerStatus.playerCount.trashCountPerTurn++;
	pushTrash(trashCard);
}
/*******************************************************/
/* discardCardProcess：廃棄する際の処理
/*******************************************************/
function discardCardProcess(discardCard){
	//「無痛」の効果
	const painless = playerStatus.statuses
		.find((status) => status.name === bufStatus.painless.name);
	if(painless){
		actionBlock(painless.amount);
		updatePlayerStatusDom(playerStatus);
	}
	//「慧眼」の効果
	const eye = playerStatus.statuses
		.find((status) => status.name === bufStatus.eye.name);
	if(eye){
		const drawCards = drawCardFromDeck(eye.amount);
		drawCards.forEach((card) => {
			animateDrawDeck(card);
		});
	}

	if('discardFunc' in discardCard.amount && discardCard.amount.discardFunc !== ''){
		pushStackCards({
			func: discardCard.discardFunc,
			amount: discardCard.amount,
		});
	}
	pushDiscard(discardCard);
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
				if(battleCount < 3){
					// 弱プール
					const totalWeight = easyEnemiesPool.reduce((sum, item) => sum + item.weight, 0);
					let enemyGroupWeight = mt.nextInt(0, totalWeight);
					for (const enemy of Object.values(easyEnemiesPool)) {
						if (enemyGroupWeight < enemy.weight) {
							currentEnemies = deepCopyEnemies(enemy.enemies);
							break;
						}
						enemyGroupWeight -= enemy.weight;
					}
				} else {
					// 強プール
					const totalWeight = strongEnemiesPool.reduce((sum, item) => sum + item.weight, 0);
					let enemyGroupWeight = mt.nextInt(0, totalWeight);
					for (const enemy of Object.values(strongEnemiesPool)) {
						if (enemyGroupWeight < enemy.weight) {
							currentEnemies = deepCopyEnemies(enemy.enemies);
							break;
						}
						enemyGroupWeight -= enemy.weight;
					}
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
	startTurnProcess();
	startTurnStatuses(playerStatus, currentEnemies, false);
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
	startTurnStatuses(animatePlayerStatus, animateCurrentEnemies, true);
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
					enemy.currentStatus.nextAction = storedFunc(enemy.currentStatus);
				} 
			}
		}
	});
}


/*******************************************************/
/* checkEnemyDefeated：敵が倒されたかチェックする
/*******************************************************/
function checkEnemyDefeated(Enemies, playerInfo, animationFlag = true){
	allDefeatedFlag = true;
	let autophagyFlag = false;
	Enemies.forEach((enemy) => {
		if(!enemy.currentStatus.status.some(status => status.name === dead.name)){
			if(enemy.currentStatus.remainHP <= 0){
				//「自壊因子」の効果発動
				const autophagy = enemy.currentStatus.status
					.find((status) => status.name === debufStatus.autophagy.name);
				if (autophagy){
					autophagyFlag = true;
					for(const targetenemy of currentEnemies){
						let totalAttack = enemy.currentStatus.maxHP;
						// ブロック計算
						const enemyBlock = targetenemy.currentStatus.block;
						if(enemyBlock > 0){
							if(enemyBlock >= totalAttack){
								targetenemy.currentStatus.block -= totalAttack;
								totalAttack = 0;
							} else if (enemyBlock < totalAttack){
								targetenemy.currentStatus.block = 0;
								totalAttack = totalAttack - enemyBlock;
							}
						}
						targetenemy.currentStatus.remainHP -= totalAttack;
					}
				}
				//「花粉」の効果発動
				const pollen = enemy.currentStatus.status
					.find((status) => status.name === bufStatus.pollen.name);
				if (pollen){
					enemyStatusDebuf(enemy, playerInfo, animationFlag, debufStatus.defenseDown, pollen.amount);
				}
				animateDefeated(enemy);
				enemy.currentStatus.status.splice(0);
				enemy.currentStatus.status.push(dead);
				targetingEnemy();
			} else {
				allDefeatedFlag = false;
			}
		}
	});
	if(autophagyFlag){
		checkEnemyDefeated(Enemies, playerInfo);
	}
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

