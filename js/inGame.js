/*************************************************************************************/
/* 初期設定
/*************************************************************************************/
/*******************************************************/
/* startBattle：戦闘を開始する
/*******************************************************/
function startBattle(){
	setLocalStorage(keyContinueFlag, continueFlag.inGame);
	// 各キューの初期化
	initialize();
	// デッキの準備
	readyDeck();
	// デッキとした後にそこからカードを5枚引き、手札とする。
	setupHandCard();
	// 自分・敵のUIをセットアップする
	updatePlayerAreaDom(playerStatus);
	setupEnemy();

	setupBtn();
	// 開始時効果を発揮する
	startAbility();
	// 初めの敵予兆を決定する
	decideNextAction();
	displayBattleArea();
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
	// アーティファクトの効果を発動
	myArtifacts.forEach((artifact) => {
		if('endFunc' in artifact){
			if (artifact.endFunc !== '') {
				const storedFunc = globalThis[artifact.endFunc];
				if( typeof storedFunc === 'function'){
					ret = storedFunc(artifact.amount);
				} 
			}
		}
	});
	initialize();
	removeLocalStorage(keyContinueDeck);
	removeLocalStorage(keyContinueHand);
	removeLocalStorage(keyContinueTrash);
	removeLocalStorage(keyContinuePlayArea);
	removeLocalStorage(keyContinueDiscard);
	removeLocalStorage(keyContinueTemporary);
	removeLocalStorage(keyContinueStack);
	removeLocalStorage(keyContinueTurn);
	//currentEnemies削除
	removeLocalStorage(keyContinueEnemy);
	currentEnemies = [];
	//currentLevel削除
	removeLocalStorage(keyContinueLevel);
	currentLevel = -1;
	//rewards削除
	removeLocalStorage(keyContinueReward);
	rewards = [];
	//holdCard削除
	removeLocalStorage(keyContinueHold);
	holdCard = [];
	//currentPhase初期化
	removeLocalStorage(keyContinuePhase);
	currentPhase = phase.action;
	

	hiddenBattleArea();

	map = getLocalStorage(keyContinueMap);
	climbTowerContinue();
}
/*******************************************************/
/* initializeQueue：キューの初期化
/*******************************************************/
function initialize(){
	deleteAllDeck();
	deleteAllHand();
	deleteAllTrash();
	deleteAllPlayArea();
	deleteAllDiscard();
	deleteAllTemporaryArea();
	deleteAllStackCards();
	currentTurn = 1;
	allDefeatedFlag = false;
	playerStatus.remainEnergy = playerStatus.maxEnergy;
	playerStatus.block = 0;
	playerStatus.statuses = [];
}
/*******************************************************/
/* continueBattle：戦闘を再開する
/*******************************************************/
function continueBattle(){
	continueInfo();
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
	displayBattleArea(); 
	
	// フェイズ開始
	if (currentPhase !== null){
		startPhase();
	} else {
		startPhase(phase.action);
	}
}

/*******************************************************/
/* continueInfo: 各種保存された情報を獲得する
/*******************************************************/
function continueInfo(){
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
	if (lastDiscard) {discard = lastDiscard;}
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
		playerStatus.Count.HPDownCount = lastPlayerStatus.Count.HPDownCount;
		playerStatus.Count.trashCountPerTurn = lastPlayerStatus.Count.trashCountPerTurn;
		playerStatus.Count.playAttackPerTurn = lastPlayerStatus.Count.playAttackPerTurn;
	}

}

/*******************************************************/
/* readyDeck：初期デッキとなるカードを配る
/*******************************************************/
function readyDeck(){
	const Continued = getLocalStorage(keyContinueFlag);
	const lastDeck = getLocalStorage(keyContinueDeck);
	if(lastDeck !== null && Continued === continueFlag.inGame){
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
	const Continued = getLocalStorage(keyContinueFlag);
	const lastHand = getLocalStorage(keyContinueHand);
	if(lastHand !== null && Continued === continueFlag.inGame){
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
		createDeckListDom();
	});
	$('.trash-area').click((e) => {
		if (myTrash.length <= 0) {
			console.log('捨て札がありません。');
			return;
		}
		createTrashListDom();
	});
	$('.discard-area').click((e) => {
		if (discard.length <= 0) {
			console.log('廃棄札がありません。');
			return;
		}
		createDiscardListDom();
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
					.find((status) => status.name === buffStatus.caitSea.name);
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
				openHandDecideArea();
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
				openHandDecideArea();
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
				openHandDecideArea();
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
				openHandDecideArea();
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
				openHandDecideArea();
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
				openHandDecideArea();
				$('.hand-enhance-area').removeClass('hidden');
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
				openHandDecideArea();
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
			openHandDecideArea();
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
	updateArtifactDom();
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
		.find((status) => status.name === debuffStatus.invalidAttackUp.name);
	if (invalidAttackUp){
		const attackUp = playerInfo.statuses
			.find((status) => status.name === buffStatus.attackUp.name);
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
		.find((status) => status.name === debuffStatus.invalidAttackDown.name);
	if (invalidAttackDown){
		const attackDown = playerInfo.statuses
			.find((status) => status.name === debuffStatus.attackDown.name);
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
		.find((status) => status.name === buffStatus.infinite.name);
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
		.find((status) => status.name === buffStatus.grudge.name);
	if (grudge){
		actionStatusAllDebufForAnimate(enemiesInfo, debuffStatus.poison, grudge.amount, animateFlag);
	}
	//「果ての力」の効果発動
	const end = playerInfo.statuses
		.find((status) => status.name === buffStatus.end.name);
	if (end){
		actionStatusBufForAnimate(playerInfo, buffStatus.attackUp, end.amount, animateFlag);
	}
	//「英雄の盾」がある場合はブロックを初期化しない
	const hero = playerInfo.statuses
		.find((status) => status.name === buffStatus.hero.name);
	const lightWall = playerInfo.statuses
		.find((status) => status.name === buffStatus.lightWall.name);
	if (!hero && !lightWall){
		// ブロックを解除する
		playerInfo.block = 0;
	}
	// 「次ターンブロック」でブロックを得る
	const nextTurnBlock = playerInfo.statuses
		.find((status) => status.name === buffStatus.nextTurnBlock.name);
	if (nextTurnBlock){
		playerInfo.block += nextTurnBlock.amount;
	}
	// エネルギーを回復する
	playerInfo.remainEnergy = playerInfo.maxEnergy;
	// 「活性」で追加回復
	const activity = playerInfo.statuses
		.find((status) => status.name === buffStatus.activity.name);
	if (activity){
		playerInfo.remainEnergy += activity.amount;
	}
	// 「活性化」で追加回復
	const energized = playerInfo.statuses
		.find((status) => status.name === buffStatus.energized.name);
	if (energized){
		playerInfo.remainEnergy += energized.amount;
	}
	
	// ターン制の状態変化のターンを進める
	// プレイヤーの状態変化処理
	playerInfo.statuses.forEach((status, index) => {
		switch(status.name){
			case buffStatus.defenseUp.name:
			case buffStatus.doubleDamage.name:
			case buffStatus.damageCut.name:
			case debuffStatus.defenseDown.name:
			case debuffStatus.frail.name:
			case debuffStatus.weak.name:
			case debuffStatus.frozen.name:
				status.amount--;
				break;
			case buffStatus.reflection.name:
			case buffStatus.wind.name:
			case buffStatus.attackCombo.name:
			case buffStatus.skillCombo.name:
			case buffStatus.activity.name:
			case buffStatus.lightWall.name:
			case buffStatus.nextTurnBlock.name:
			case buffStatus.nextTurnDraw.name:
			case buffStatus.reproduction.name:
			case debuffStatus.noDraw.name:
			case debuffStatus.invalidAttackUp.name:
			case debuffStatus.invalidAttackDown.name:
			case debuffStatus.suffocation.name:
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
		.find((status) => status.name === buffStatus.Ereshkigal.name);
	if (Ereshkigal){
		actionStatusBufForAnimate(playerInfo, buffStatus.doubleDamage, 1, animateFlag);
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
			.find((status) => status.name === debuffStatus.invalidAttackDown.name);
		if (invalidAttackDown){
			const attackDown = enemy.currentStatus.status
				.find((status) => status.name === debuffStatus.attackDown.name);
			if(attackDown){
				if(attackDown.amount > invalidAttackDown.amount){
					attackDown.amount -= invalidAttackDown.amount;
				} else {
					attackDown.amount = 0;
				}
			}
		}
		// 「激怒」の効果
		const rage = enemy.currentStatus.status
			.find((status) => status.name === buffStatus.rage.name);
		if (rage){
			enemyStatusBuf(enemy, animateFlag, buffStatus.attackUp, rage.amount);
		}
		// 「バリア」の効果
		const barrier = enemy.currentStatus.status
			.find((status) => status.name === buffStatus.barrier.name);
		if (barrier){
			enemyActionBlock(enemy, animateFlag, barrier.amount);
		}
		enemy.currentStatus.status.forEach((status) => {
			switch(status.name){
				case buffStatus.defenseUp.name:
				case buffStatus.damageCut.name:
				case debuffStatus.defenseDown.name:
				case debuffStatus.frail.name:
				case debuffStatus.weak.name:
					status.amount--;
					break;
				case buffStatus.reflection.name:
				case buffStatus.wind.name:
				case buffStatus.attackCombo.name:
				case buffStatus.activity.name:
				case buffStatus.lightWall.name:
				case buffStatus.nextTurnBlock.name:
				case buffStatus.nextTurnDraw.name:
				case debuffStatus.noDraw.name:
				case debuffStatus.invalidAttackUp.name:
				case debuffStatus.invalidAttackDown.name:
				case debuffStatus.suffocation.name:
				case debuffStatus.fainting.name:
					status.amount = 0;
					break;
				case debuffStatus.sleep.name:// 
					status.amount--;
					const barrier = enemy.currentStatus.status
						.find((status) => status.name === buffStatus.barrier.name);
					if(barrier && status.amount === 0){
						barrier.amount = 0;
					}
					break;
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
	if(!animateFlag){
		// アーティファクトの効果を発動
		myArtifacts.forEach((artifact) => {
			if('turnFunc' in artifact){
				if (artifact.turnFunc !== '') {
					const storedFunc = globalThis[artifact.turnFunc];
					if( typeof storedFunc === 'function'){
						ret = storedFunc(artifact.amount);
					} 
				}
			}
		});
	}
	// 捨て札の枚数をリセットする
	playerInfo.Count.trashCountPerTurn = 0;
	playerInfo.Count.playAttackPerTurn = 0;
	playerInfo.Count.playSkillPerTurn = 0;
}
/*******************************************************/
/* startTurnProcess：ターン開始時の処理を行う
/*******************************************************/
function startTurnProcess(){
	console.log(`startTurnProcess`);
	//ドロー処理
	//「フルンティング」の効果発動
	const hrunting = playerStatus.statuses
		.find((status) => status.name === buffStatus.hrunting.name);
	if (hrunting){
		damageHP(1, playerStatus);
		drawCardFromDeck(hrunting.amount);
	}
	// 「ヘイスト」で追加2枚
	const nextTurnDraw = playerStatus.statuses
		.find((status) => status.name === buffStatus.nextTurnDraw.name);
	if (nextTurnDraw){
		drawCardFromDeck(nextTurnDraw.amount);
	}
	// 「ケット・シー」で追加1枚
	const caitSea = playerStatus.statuses
		.find((status) => status.name === buffStatus.caitSea.name);
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

}
/*******************************************************/
/* startAbility：敵やAFの開始時効果処理を行う
/*******************************************************/
function startAbility(){
	// アーティファクトの効果を発動
	myArtifacts.forEach((artifact) => {
		if('firstFunc' in artifact){
			if (artifact.firstFunc !== '') {
				const storedFunc = globalThis[artifact.firstFunc];
				if( typeof storedFunc === 'function'){
					ret = storedFunc(artifact.amount);
				} 
			}
		}
	});
	//エネミーの開始時効果発動
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
	$.when(
		cardTrashPromise,
		cardDiscardPromise
	).done(() => {
		hiddenHandDom();
		updateDiscardDom();
		updateTrashDom();
	});
	// アーティファクトの効果を発動
	myArtifacts.forEach((artifact) => {
		if('turnEndFunc' in artifact){
			if (artifact.turnEndFunc !== '') {
				const storedFunc = globalThis[artifact.turnEndFunc];
				if( typeof storedFunc === 'function'){
					ret = storedFunc(artifact.amount);
				} 
			}
		}
	});
	// 「再生」の効果発動
	const regeneration = playerStatus.statuses
		.find((status) => status.name === buffStatus.regeneration.name);
	if (regeneration){
		recoveryHP(regeneration.amount);
		updatePlayerStatusDom(playerStatus);
		regeneration.amount = 0;
	}
	// ターン終了時効果の発動
	// 「バリア」の効果発動
	const barrier = playerStatus.statuses
		.find((status) => status.name === buffStatus.barrier.name);
	if (barrier){
		actionBlock(barrier.amount);
	}
	//「狂化」の効果発動
	const madness = playerStatus.statuses
		.find((status) => status.name === buffStatus.madness.name);
	if (madness){
		damageHP(1, playerStatus);
		actionAllAttackSimple(madness.amount, false);
	}
	//「鈍化」の効果発動
	const slowing = playerStatus.statuses
		.find((status) => status.name === debuffStatus.slowing.name);
	if (slowing){
		actionStatusBuf(debuffStatus.dexterityDown, slowing.amount);
	}
	//「激怒」の効果
	const rage = playerStatus.statuses
		.find((status) => status.name === buffStatus.rage.name);
	if (rage){
		actionStatusBuf(debuffStatus.attackUp, rage.amount);
	}
	// エネミーの状態変化処理
	currentEnemies.forEach((enemy) => {
		// ブロックの初期化
		const tears = enemy.currentStatus.status
			.find((status) => status.name === buffStatus.tears.name);
		if (!tears){
			enemy.currentStatus.block = 0;
		}
		// 「毒」の効果発動
		const poison = enemy.currentStatus.status
			.find((status) => status.name === debuffStatus.poison.name);
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
		.find((status) => status.name === debuffStatus.noDraw.name)
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
					.find((status) => status.name === buffStatus.barrage.name);
				if(barrage){
					actionAllAttackSimple(barrage.amount, false);
				}
				// 「逆境」の効果
				const adversity = playerStatus.statuses
					.find((status) => status.name === buffStatus.adversity.name);
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
	console.log(myDeck);
	console.log(giftCardIndex);
	for(let i = giftCardIndex.length - 1; i >= 0; i--){
		const giftCard = spliceDeck(giftCardIndex[i]);
		pushHand(giftCard);
	}
	console.log(`天賦：${giftCardIndex.length}枚`);
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
	// アーティファクトの効果を発動
	myArtifacts.forEach((artifact) => {
		if('shuffleFunc' in artifact){
			if (artifact.shuffleFunc !== '') {
				const storedFunc = globalThis[artifact.shuffleFunc];
				if( typeof storedFunc === 'function'){
					ret = storedFunc(artifact.amount);
				} 
			}
		}
	});
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
		.find((status) => status.name === buffStatus.wind.name);
	if (wind && card.type === type.attack){
		actionBlock(wind.amount);
	}
	//「連撃アップ」の効果
	const attackCombo = playerStatus.statuses
		.find((status) => status.name === buffStatus.attackCombo.name);
	if (attackCombo && attackCombo.amount > 0 && card.type === type.attack){
		pushStackCards({
			func: card.func,
			amount: card.amount,
		});
		attackCombo.amount--;
	}
	const skillCombo = playerStatus.statuses
		.find((status) => status.name === buffStatus.skillCombo.name);
	if (skillCombo && skillCombo.amount > 0 && card.type === type.skill){
		pushStackCards({
			func: card.func,
			amount: card.amount,
		});
		skillCombo.amount--;
	}
	const Bonus = playerStatus.statuses
		.find((status) => status.name === buffStatus.Bonus.name);
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
		.find((status) => status.name === buffStatus.lamentation.name);
	if (lamentation && lamentation.amount > 0){
		actionBlock(lamentation.amount);
	}
	currentEnemies.forEach((enemy) => {
		//「窒息」効果
		const suffocation = enemy.currentStatus.status
			.find((status) => status.name === debuffStatus.suffocation.name);
		if (suffocation){
			//ブロック無視
			enemy.currentStatus.remainHP -= suffocation.amount;
		}
		//「激怒」効果
		const strategy = enemy.currentStatus.status
			.find((status) => status.name === buffStatus.strategy.name);
		if (strategy && card.type === type.skill){
			enemyStatusBuf(enemy, true, buffStatus.attackUp, strategy.amount);
		}
	});
	playerStatus.statuses = playerStatus.statuses.filter((status) => {
		return status.amount > 0;
	});

	// アーティファクトの効果を発動
	myArtifacts.forEach((artifact) => {
		if('playFunc' in artifact){
			if (artifact.playFunc !== '') {
				const storedFunc = globalThis[artifact.playFunc];
				if( typeof storedFunc === 'function'){
					ret = storedFunc(artifact.amount);
				} 
			}
		}
	});
	if(card.type === type.attack){
		playerStatus.Count.playAttackPerTurn++;
		
		// アーティファクトの効果を発動
		myArtifacts.forEach((artifact) => {
			if('attackFunc' in artifact){
				if (artifact.attackFunc !== '') {
					const storedFunc = globalThis[artifact.attackFunc];
					if( typeof storedFunc === 'function'){
						ret = storedFunc(artifact.amount);
					} 
				}
			}
		});
	}
	if(card.type === type.skill){
		playerStatus.Count.playSkillPerTurn++;
		
		// アーティファクトの効果を発動
		myArtifacts.forEach((artifact) => {
			if('skillFunc' in artifact){
				if (artifact.skillFunc !== '') {
					const storedFunc = globalThis[artifact.skillFunc];
					if( typeof storedFunc === 'function'){
						ret = storedFunc(artifact.amount);
					} 
				}
			}
		});
	}
	setLocalStorage(keyContinueHand, myHand);
	setLocalStorage(keyContinueStack, stackCards);
	setLocalStorage(keyContinuePlayerStatus, playerStatus);
	setLocalStorage(keyContinueArtifact, myArtifacts);

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
	//アーティファクトのカウント更新
	updateArtifactDom();
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
	updateEnergyDom();
	
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
			const frozen = playerStatus.statuses
				.find((status) => status.name === debuffStatus.frozen.name);
			if(frozen && hand.type === type.attack){
				alert('デバフによりアタックが使えません');
				break;
			}
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
				if('key' in hand && hand.key !== undefined){
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
				.find((status) => status.name === buffStatus.repair.name);
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
				.find((status) => status.name === buffStatus.caitSea.name);
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
	playerStatus.Count.trashCountPerTurn++;
	pushTrash(trashCard);
}
/*******************************************************/
/* discardCardProcess：廃棄する際の処理
/*******************************************************/
function discardCardProcess(discardCard){
	//「無痛」の効果
	const painless = playerStatus.statuses
		.find((status) => status.name === buffStatus.painless.name);
	if(painless){
		actionBlock(painless.amount);
		updatePlayerStatusDom(playerStatus);
	}
	//「慧眼」の効果
	const eye = playerStatus.statuses
		.find((status) => status.name === buffStatus.eye.name);
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
	const Continued = getLocalStorage(keyContinueFlag);
	const lastEnemyGroup = getLocalStorage(keyContinueEnemy);
	if (lastEnemyGroup && Continued === continueFlag.inGame) {
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
							const enemiesOrganization = enemy.enemiesFunc();
							console.log(enemiesOrganization);
							currentEnemies = deepCopyEnemies(enemiesOrganization);
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
							const enemiesOrganization = enemy.enemiesFunc();
							currentEnemies = deepCopyEnemies(enemiesOrganization);
							break;
						}
						enemyGroupWeight -= enemy.weight;
					}
				}
				currentEnemies.forEach((enemy, i) => {
					const randomHP = mt.nextInt(enemy.minHP, enemy.maxHP+1);
					enemy.currentStatus.maxHP = randomHP;
					enemy.currentStatus.remainHP = randomHP;
					enemy.currentStatus.divId = `enemy${i}`;
				});
				break;
			case stageLevel.special:
				const totalWeight = eliteEnemiesPool.reduce((sum, item) => sum + item.weight, 0);
				let enemyGroupWeight = mt.nextInt(0, totalWeight);
				for (const enemy of Object.values(eliteEnemiesPool)) {
					if (enemyGroupWeight < enemy.weight) {
						const enemiesOrganization = enemy.enemiesFunc();
						currentEnemies = deepCopyEnemies(enemiesOrganization);
						break;
					}
					enemyGroupWeight -= enemy.weight;
				}
				currentEnemies.forEach((enemy, i) => {
					const randomHP = mt.nextInt(enemy.minHP, enemy.maxHP+1);
					const eliteHpDown = myArtifacts.find((artifact) => 
						artifact.name === normalArtifact.eliteHpDown.name);
					if(eliteHpDown){
						const nerfHP = Math.floor(randomHP * 0.75);
						enemy.currentStatus.maxHP = nerfHP;
						enemy.currentStatus.remainHP = nerfHP;
					}else{
						enemy.currentStatus.maxHP = randomHP;
						enemy.currentStatus.remainHP = randomHP;
					}

					enemy.currentStatus.divId = `enemy${i}`;
				});
				break;
			case stageLevel.boss:
				break;
			default:
				const enemiesOrganization = testEnemies[0].enemiesFunc();
				currentEnemies = deepCopyEnemies(enemiesOrganization);
				currentEnemies.forEach((enemy, i) => {
					const randomHP = mt.nextInt(enemy.minHP, enemy.maxHP+1);
					enemy.currentStatus.maxHP = randomHP;
					enemy.currentStatus.remainHP = randomHP;
					enemy.currentStatus.divId = `enemy${i}`;
				});
				break;
		}
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
		if(
			!enemy.currentStatus.status.some(status => status.name === dead.name) ||
			!enemy.currentStatus.status.some(status => status.name === debuffStatus.fainting.name)
		){
			const nextAction = enemy.currentStatus.nextAction;
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
	// 次の予測を決定する
	decideNextAction();
	setLocalStorage(keyContinueArtifact, myArtifacts);
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
			if (Object.keys(nextAction).length > 0) {
				fadeOutEnemyOmenDom(enemy);
				await sleep(omenFadeOutWaitTime);
				if(!enemy.currentStatus.status.some(status => status.name === debuffStatus.fainting.name)){
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
				}
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
					.find((status) => status.name === debuffStatus.autophagy.name);
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
					.find((status) => status.name === buffStatus.pollen.name);
				if (pollen){
					enemyActionStatusDebuf(enemy, playerInfo, animationFlag, debuffStatus.defenseDown, pollen.amount);
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
	if (lastReward) {
		rewards = lastReward;
	} else {
		// 初期化
		rewards = [];
		// コイン報酬
		const decidedMoneyReward = decideMoneyReward();
		rewards.push(decidedMoneyReward);

		// 武器報酬
		const selectCards = decideCardReward(currentLevel);
		rewards.push(selectCards);


		// アーティファクト報酬
		let selectArtifact;
		switch (currentLevel) {
			case stageLevel.normal:
				//アーティファクト報酬なし
				break;
			case stageLevel.special:
				selectArtifact = decideArtifactReward();
				rewards.push(selectArtifact);
				break;
			case stageLevel.boss:
			case stageLevel.test:
				selectArtifact = decideBossArtifactReward();
				rewards.push(selectArtifact);
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
	return {type: rewardType.money, getFlag: true, amount: money};
}

