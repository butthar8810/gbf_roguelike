/*************************************************************************************/
/* 初期設定
/*************************************************************************************/
/*******************************************************/
/* startNomalButtle：通常戦闘を開始する
/*******************************************************/
function startButtle(level){
	// 各キューの初期化
	initialize();
	currentTurn = 0;
	// デッキの準備
	readyDeck();
	// デッキとした後にそこからカードを5枚引き、手札とする。
	setupHandCard();
	// 自分・敵のUIをセットアップする
	updatePlayerAreaDom(playerStatus);
	setupEnemy(level);
	decideNextAction();

	setupBtn();

	$('.battle-area').removeClass('hidden');
	$('.info-area').removeClass('hidden');
	setLocalStorage(keyContinueBattleFlag, true);
	
	setLocalStorage(keyContinueTrash, myTrash);
	setLocalStorage(keyContinueTurn, currentTurn);
	setLocalStorage(keyContinueEnemy, currentEnemies);
	setLocalStorage(keyContinuePlayerStatus, playerStatus);
	startTurn();
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
	updateHandDom();
	updateEnergyDom();
	updateEnemyAreaDom(currentEnemies, true);
	$('.battle-area').removeClass('hidden');
	$('.info-area').removeClass('hidden');
}

/*******************************************************/
/* continueBattle：戦闘を再開する
/*******************************************************/
function continueCount(){
	const lastTrash = getLocalStorage(keyContinueTrash);
	const lastDiscard = getLocalStorage(keyContinueDiscard);
	const lastTemporary = getLocalStorage(keyContinueTemporary);
	const lastStack = getLocalStorage(keyContinueStack);
	const lastTurn = getLocalStorage(keyContinueTurn);
	const lastPlayerStatus = getLocalStorage(keyContinuePlayerStatus);
	if (lastTrash) {
		myTrash = lastTrash;
	}
	if (lastDiscard) {
		discard = lastDiscard;
	}
	if (lastTemporary) {
		tmpArea = lastTemporary;
	}
	if (lastStack) {
		stackCard = lastStack;
	}
	if (lastTurn) {
		currentTurn = lastTurn;
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
	deletAllDeck();
	deletAllHand();
	deletAllTrash();
	deletAllDiscard();
	deletAllTemporaryArea();
	deletAllStackCard();
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
		myDeck = deepCopyCard(myOriginalDeck);
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
		$('.end-btn').prop('disabled', true);
		startCleanup();
	});
}

/*************************************************************************************/
/* プレイヤー処理関連
/*************************************************************************************/
/*******************************************************/
/* startTurn：ターン開始処理を行う
/*******************************************************/
async function startTurn(){
	console.log(`turn: ${currentTurn}`);
	updateTrashDom();
	updateEnergyDom();
	updatePlayerAreaDom(playerStatus);
	fadeInEnemyOmenDom();
	updateEnemyAreaDom(currentEnemies, true);


	for(const hand of myHand){
		await animateDrawDeck(hand);
	}
	await sleep(100);
	updateHandDom();
	disabledMyHand(false);
	updateDeckDom();
}
/*******************************************************/
/* endTurn：ターン終了処理を行う
/*******************************************************/
function endTurn(){
	console.log(`endTurn`);
	// ターン制の状態変化のターンを進める
	// プレイヤーの状態変化処理
	playerStatus.statuses.forEach((status, index) => {
		switch(status.name){
			case bufStatus.defenseUp.name:
			case bufStatus.phantasmal.name:
			case debufStatus.defenseDown.name:
			case debufStatus.frail.name:
			case debufStatus.weak.name:
			case debufStatus.noBlock.name:
			case debufStatus.Fading.name:
				status.amount--;
				if (status.amount <= 0){

				}
				break;
			default:
				break;
		}
	});
	// 効果が切れた状態変化を削除する
	playerStatus.statuses = playerStatus.statuses.filter((status) => {
		return status.amount > 0;
	})
	// エネミーの状態変化処理
	currentEnemies.forEach((enemy) => {
		enemy.currentStatus.status.forEach((status) => {
			switch(status.name){
				case bufStatus.defenseUp.name:
				case bufStatus.phantasmal.name:
				case debufStatus.defenseDown.name:
				case debufStatus.frail.name:
				case debufStatus.weak.name:
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
		})
	});
	// 次の予測を決定する
	decideNextAction();
	// カードを5枚引く
	drawCardFromDeck(initialHandNum);
	// ターンを進める
	currentTurn++;
	// エネルギーを回復する
	playerStatus.remainEnergy = playerStatus.maxEnergy;
}

/*******************************************************/
/* startCleanup：ターン終了処理を行う
/*******************************************************/
async function startCleanup(){
	// カードに触れれなくする
	disabledMyHand(true);
	for(const hand of myHand){
		await animateHnadToTrash(hand);
	}
	// 手札を捨て札エリアに格納
	deletAllHand().forEach((card) => {
		pushTrash(card);
	});
	await sleep(trashWatiTime);
	updateHandDom();
	updateTrashDom();

	startEnemiesTurn();
}


/*******************************************************/
/* drawDeckCard：デッキからカードをドローする
/*******************************************************/
function drawCardFromDeck(count = 1){
	for(let i = 0; i < count; i++){
		if (myDeck.length <= 0) {
			// 捨て札をデッキに再構築する
			reconfigureDeck();
		}
		// デッキから手札へカードを引く
		const card = shiftDeck();
		if (card !== undefined){
			pushHand(card);
		}else{
			console.log("shiftDeck undefined");
			break;
		}
	}
	// デッキと手札をローカルストレージに記憶
	setLocalStorage(keyContinueDeck, myDeck);
	setLocalStorage(keyContinueHand, myHand);
}
/*******************************************************/
/* reconfigureDeck：捨て札のカードをデッキに再構成する
/*******************************************************/
function reconfigureDeck(){
	// 捨て札をデッキに格納
	deletAllTrash().forEach((card) => {
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
	pushTrash(card);
	pushStackCard(card.func);
	updateTrashDom();

	setLocalStorage(keyContinueHand, myHand);
	setLocalStorage(keyContinueTrash, myTrash);
	setLocalStorage(keyContinueStack, stackCard);

	endAction();
}
/*******************************************************/
/* endAction：プレイしたカードの終了処理をする
/*******************************************************/
async function endAction(){
	let ret = false;
	if ( stackCard.length === 0 ){
		return true;
	}

	const animatePlayerStatus = deepCopyPlayerStatus(playerStatus);
	const animateCurrentEnemies = deepCopyEnemies(currentEnemies);
	// 攻撃を内部的に行う
	const playFunc = shiftStackCard();
	if (playFunc !== undefined) {
		const storedFunc = globalThis[playFunc];
		if( typeof storedFunc === 'function'){
			ret = storedFunc();
		} 
	}
	checkEnemydefeated(currentEnemies);
	setLocalStorage(keyContinueStack, stackCard);
	setLocalStorage(keyContinuePlayerStatus, playerStatus);
	setLocalStorage(keyContinueEnemy, currentEnemies);
	if (actionWaitFlagForPlayer) {
		setTimeout(() => {
			updatePlayerAreaDom(playerStatus);
		},playerAttackWaitTime);
	} else {
		updatePlayerAreaDom(playerStatus);
	}
	if (actionWaitFlagForEnemy) {
		setTimeout(() => {
			updateEnemyAreaDom(currentEnemies, true);
		},playerAttackWaitTime);
	} else {
		updateEnemyAreaDom(currentEnemies, true);
	}


	actionWaitFlagForPlayer = false;
	actionWaitFlagForEnemy = false;
	
	if (allDefeatedFlag){
		allEnemiesdefeated();
	}
	return ret;
}
/*******************************************************/
/* clickHandProcess：クリック時の処理
/*******************************************************/
function clickHandProcess(handCardDiv, hand){

	if (playerStatus.remainEnergy >= hand.cost) {
		const index = findIndexHand('id', hand.id);
		playerStatus.remainEnergy -= hand.cost;
		updateEnergyDom();
		playHandCard(index);
		setLocalStorage(keyContinuePlayerStatus, playerStatus);
	} else {
		console.log("エネルギーが足りません");
		deletAllTemporaryArea();
		setLocalStorage(keyContinueTemporary, tmpArea);
		return false;
	}
	return true;
}
/*******************************************************/
/* disabledMyHand：手札のdisabled化
/*******************************************************/
function disabledMyHand(flag){
	return $('.hand-area').prop('disabled', flag);
}
/*************************************************************************************/
/* エネミー関連
/*************************************************************************************/
/*******************************************************/
/* setupEnemy：出現した敵をレベルごとに決める
/*******************************************************/
function setupEnemy(level = stageLevel.normal){
	const mt = new MersenneTwister();
	const battleFlag = getLocalStorage(keyContinueBattleFlag);
	const lastEnemyGroup = getLocalStorage(keyContinueEnemy);
	if (lastEnemyGroup && battleFlag) {
		currentEnemies = lastEnemyGroup;
	} else {
		switch(level) {
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
				if (enemyAttackWaitFlag){
					animateEnemyAttack(enemy);
					await sleep(enemyAttackGoWaitTime);
					animatePlayerdamage();
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
/* checkEnemydefeated：敵が倒されたかチェックする
/*******************************************************/
function checkEnemydefeated(Enemies){
	let enemyDefeatedFlag = false;
	allDefeatedFlag = true;
	Enemies.forEach((enemy, i) => {
		if(!enemy.currentStatus.status.some(status => status.name === dead.name)){
			if(enemy.currentStatus.remainHP <= 0){
				enemy.currentStatus.status.splice(0);
				enemy.currentStatus.status.push(dead);
				targetingEnemy();
				animateDefeated(enemy);
				actionWaitFlagForEnemy = true;
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
function omenText(omenAction){
	const omenText = 'この敵が予定しているのは<br>';
	switch(omenAction.type){
		case enemyActionType.attack:
			return omenText + omenAction.type + 'による' + omenAction.damage +'ダメージ。';
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
		case enemyActionType.both:
			return omenText + omenAction.type + 'を' + omenAction.damage +'ダメージ。';
			break;
		default:
			return omenText + '不明です';
			break;
	}
}
/*******************************************************/
/* allEnemiesdefeated：敵がすべて倒された時の処理
/*******************************************************/
function allEnemiesdefeated(){
	alert('全滅');

}

/***************************************************************************************/
/* DOM要素の更新処理
/***************************************************************************************/
function updateDeckDom(){
	const deckImage = $(`.deck-area`).children('img');
	if(myDeck.length <= 0){
		deckImage.addClass('empty');
	}else{
		deckImage.removeClass('empty');
	}
	$(`.deck-count`).html(`${myDeck.length}`);
}
function updateTrashDom(){
	const trashImage = $(`.trash-area`).children('img');
	if(myTrash.length <= 0){
		trashImage.addClass('empty');
	}else{
		trashImage.removeClass('empty');
	}
	$(`.trash-count`).html(`${myTrash.length}`);
}
function updateEnergyDom(){
	$(`.energy-count`).html(`${playerStatus.remainEnergy}/${playerStatus.maxEnergy}`);
}
function updateHandDom(){
	$(`.hand-area`).html('');
	myHand.forEach((hand, i) => {
		const textParagraph = $('<p>')
			.html(hand.effect);
		const costDiv = $('<div>')
			.html(hand.cost);
		const cardImage = $('<img>')
			.attr('src', hand.image);
		const handCardDiv = $('<div>')
			.attr('id', `hand-card${hand.id}`)
			.addClass('hand-card')
			.html(`${hand.name}`)
			.append(cardImage)
			.append(costDiv)
			.append(textParagraph)
			// 手札クリック時の処理登録
			.click(hand ,() => {
				clickHandProcess(handCardDiv, hand);
			});
			if (hand.class == cardClass.gran) {
				handCardDiv.addClass('gran-card');
			} else if (hand.class == cardClass.djeeta) {
				handCardDiv.addClass('djeeta-card');
			} else if (hand.class == cardClass.normal) {
				handCardDiv.addClass('normal-card');
			}
		$(`.hand-area`).append(handCardDiv);
	});
}
function updatePlayerAreaDom(argPlayerStatus){
	console.log('updatePlayerAreaDom');
	const selectChara = getLocalStorage(keySelectChara);
	$(`.player-area`).html('');
	// HPバー[player-hp-container]の要素
	const remainHP = 100 * ( argPlayerStatus.remainHP / argPlayerStatus.maxHP );
	const hpBerDiv = $('<div>')
		.addClass('player-hp-bar')
		.css('width', `${remainHP}%`);
	const hpParagraph = $('<p>')
		.html(`${argPlayerStatus.remainHP}/${argPlayerStatus.maxHP}`);
	const hpContainerDiv = $('<div>')
		.addClass('player-hp-container')
		.append(hpBerDiv)
		.append(hpParagraph);
	if (argPlayerStatus.block > 0) {
		hpContainerDiv.addClass('block');
		const blockImage = $('<img>')
			.attr('src', 'images/status/block.png');
		const blockCountSpan = $('<span>')
			.addClass('block-count')
			.html(argPlayerStatus.block);
		const blockInnerDiv = $('<div>')
			.addClass('block-inner')
			.append(blockImage)
			.append(blockCountSpan);
		const blockDiv = $('<div>')
			.addClass('block-container')
			.append(blockInnerDiv);
		hpContainerDiv
			.append(blockDiv);
	}
	// innerDivの要素
	const innerDiv = $('<div>')
		.addClass('player-hp')
		.append(hpContainerDiv);
	// プレイヤー立ち絵の要素
	const playerImage = $('<img>');
	if (selectChara == selectCharacter.gran.name){
		playerImage.attr('src', 'images/gifs/gran_idle.gif');
	} else if (selectChara == selectCharacter.djeeta.name){
		playerImage.attr('src', 'images/gifs/djeeta_idle.gif');
	} else {
		alert('別キャラが選択されています。');
		window.location.href = 'index.html';
	}
	// ステータス[status]の要素
	const statusesDiv = $('<div>')
		.addClass('player-statuses');
	// 状態変化モーダルの枠
	const modalsDiv = $('<div>')
		.addClass('player-modals')
		.addClass('hidden')
		.hover(() => {
			modalsDiv.addClass('hidden');
		}, () => {});
	argPlayerStatus.statuses.forEach((status) => {
		// ステータス[status]の要素
		const statusImage = $('<img>')
			.attr('src', status.image);
		const amountSpan = $('<span>')
			.addClass('player-status-amount')
			.html(status.amount);
		const statusDiv = $('<div>')
			.addClass('player-status')
			.append(statusImage)
			.append(amountSpan);
		statusesDiv.append(statusDiv);
		// 状態変化モーダルの枠
		const modalImage = $('<img>')
			.attr('src', status.image);
		const modalName = $('<p>')
			.append(status.name)
			.append(modalImage);
		const modalDiv = $('<div>')
			.addClass('player-modal')
			.append(modalName)
			.append(status.effect.replace('X', `<span>${status.amount}</span>`));
		modalsDiv.append(modalDiv);
	});
	const playerAreaInnerDiv = $('<div>')
		.addClass('player-area-inner')
		.append(playerImage)
		.append(innerDiv)
		.append(statusesDiv)
		.append(modalsDiv)
		.hover(() => {
			modalsDiv.removeClass('hidden');
		}, () => {
			modalsDiv.addClass('hidden');
		});
	$(`.player-area`)
		.append(playerAreaInnerDiv);
	// マウスオーバー時の処理を追加
	playerAreaInnerDiv
}
function updateEnemyAreaDom(argEnemies, omenFlag = false){
	console.log('updateEnemyAreaDom');
	$(`.enemies-area`).html('');
	argEnemies.forEach((enemy) => {
		// 敵立ち絵要素
		const enemyImage = $('<img>')
			.attr('src', enemy.image);
		// 残りHP[enemy-hp-container]要素
		const remainHP = 100 * (enemy.currentStatus.remainHP / enemy.currentStatus.maxHP);
		const hpBerDiv = $('<div>')
			.addClass('enemy-hp-bar')
			.css('width', `${remainHP}%`);
		const hpParagraph = $('<p>')
			.html(`${enemy.currentStatus.remainHP}/${enemy.currentStatus.maxHP}`);
		const hpContainerInnerDiv = $('<div>')
			.addClass('enemy-hp-container-inner')
			.append(hpBerDiv)
			.append(hpParagraph);
		const hpContainerDiv = $('<div>')
			.addClass('enemy-hp-container')
			.append(hpContainerInnerDiv);
		if (enemy.currentStatus.block > 0) {
			hpContainerDiv.addClass('block');
			const blockImage = $('<img>')
				.attr('src', 'images/status/block.png');
			const blockCountSpan = $('<span>')
				.addClass('enemy-block-count')
				.html(enemy.currentStatus.block);
			const blockInnerDiv = $('<div>')
				.addClass('enemy-block-inner')
				.append(blockImage)
				.append(blockCountSpan);
			const blockDiv = $('<div>')
				.addClass('enemy-block-container')
				.append(blockInnerDiv);
			hpContainerDiv
				.append(blockDiv);
		}
		// ステータス[status]の要素
		const statusesDiv = $('<div>')
			.addClass('statuses');
		// 状態変化モーダルの枠
		const modalsDiv = $('<div>')
			.addClass('enemy-modals')
			.addClass('hidden')
			.hover(() => {
				modalsDiv.addClass('hidden');
			}, () => {});
		const omenModalImage = $('<img>')
			.attr('src', enemy.currentStatus.nextAction.image);
		const omenName = $('<p>')
			.append(enemy.currentStatus.nextAction.name)
			.append(omenModalImage);
		const omenModalDiv = $('<div>')
			.addClass('enemy-modal')
			.append(omenName)
			.append(omenText(enemy.currentStatus.nextAction));
		modalsDiv.append(omenModalDiv);
		enemy.currentStatus.status.forEach((status) => {
			// ステータス[status]の要素
			const statusImage = $('<img>')
				.attr('src', status.image);
			const amountSpan = $('<span>')
				.addClass('amount')
				.html(status.amount);
			const statusDiv = $('<div>')
				.addClass('status')
				.append(statusImage)
				.append(amountSpan);
			statusesDiv.append(statusDiv);
			// 状態変化モーダルの枠
			const modalImage = $('<img>')
				.attr('src', status.image);
			const modalName = $('<p>')
				.append(status.name)
				.append(modalImage);
			const modalDiv = $('<div>')
				.addClass('enemy-modal')
				.append(modalName)
				.append(status.effect.replace('X', `<span>${status.amount}</span>`));
			modalsDiv.append(modalDiv);
		});
		// 「enemy-area」要素
		const enemyAreaDiv = $('<div>')
			.attr('id', enemy.currentStatus.divId)
			.addClass('enemy-area')
			.append(enemyImage)
			.append(hpContainerDiv)
			.append(statusesDiv)
			.append(modalsDiv)
			.hover(() => {
				modalsDiv.removeClass('hidden');
			}, () => {
				modalsDiv.addClass('hidden');
			});
		if (omenFlag || Object.keys(enemy.currentStatus.nextAction).length === 0){
			// 予測攻撃[omen]の要素
			const nextActionImage = $('<img>')
				.attr('src', enemy.currentStatus.nextAction.image);
			const omenInnerDiv = $('<div>')
				.addClass('omen-inner')
				.append(nextActionImage);
			if(enemy.currentStatus.nextAction.damage > 0){
				const damageDiv = $('<div>')
					.addClass('damage')
					.html(enemy.currentStatus.nextAction.damage);
				omenInnerDiv.append(damageDiv);
			}
			const omenDiv = $('<div>')
				.addClass('omen')
				.append(omenInnerDiv);
			enemyAreaDiv.append(omenDiv);
		}
		$(`.enemies-area`).append(enemyAreaDiv);
		if(enemy.currentStatus.status.some(status => status.name === dead.name)){
			enemyAreaDiv.addClass('defeated');
		} else {
			enemyAreaDiv.click(enemy, (e) => {
				$('.enemy-area').removeClass('select');
				enemyAreaDiv.addClass('select');
				currentTarget = enemy;
			});
		}
		$(`#${enemy.currentStatus.divId}`)
	});
}

function fadeInEnemyOmenDom(){
	currentEnemies.forEach((enemy) => {
		// 予測攻撃[omen]の要素
		const nextActionImage = $('<img>')
			.attr('src', enemy.currentStatus.nextAction.image);
		const omenInnerDiv = $('<div>')
			.addClass('omen-inner')
			.append(nextActionImage);
		if(enemy.currentStatus.nextAction.damage > 0){
			const damageDiv = $('<div>')
				.addClass('damage')
				.html(enemy.currentStatus.nextAction.damage);
			omenInnerDiv.append(damageDiv);
		}
		const omenDiv = $('<div>')
			.css('opacity', 0)
			.addClass('omen')
			.append(omenInnerDiv);
		$(`#${enemy.currentStatus.divId}`).append(omenDiv);

		omenDiv.animate({ opacity: '1' }, omenFadeInWaitTime, "easeInQuart");
	});
}
function fadeOutEnemyOmenDom(enemy){
	// 予測攻撃[omen]の要素
	$(`#${enemy.currentStatus.divId}`).children('.omen')
		.animate({ 
			opacity: '0',
			top: '50px'
		}, omenFadeOutWaitTime, "linear");
	
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
	} else if (card.class == cardClass.normal) {
		explanationModal.addClass('nomal-card');
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