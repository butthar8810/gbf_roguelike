/*************************************************************************************/
/* 初期設定
/*************************************************************************************/
/*******************************************************/
/* startNomalButtle：通常戦闘を開始する
/*******************************************************/
function startButtle(level){
	// 各キューの初期化
	initializeQueue();
	currentTurn = 0;
	// デッキの準備
	readyDeck();
	// デッキとした後にそこからカードを5枚引き、手札とする。
	setupHandCard();
	// 自分・敵のUIをセットアップする
	updatePlayerAreaDom();
	setupEnemy(level);

	setupBtn();
	setLocalStorage(keyContinueBattleFlag, true);

	$('.battle-area').removeClass('hidden');
	$('.info-area').removeClass('hidden');
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
	updatePlayerAreaDom();
	setupEnemy();
	setupBtn();


	updateDeckDom();
	updateTrashDom();
	updateEnergyDom();
	updateEnemyAreaDom(true);
	$('.battle-area').removeClass('hidden');
	$('.info-area').removeClass('hidden');
}

/*******************************************************/
/* continueBattle：戦闘を再開する
/*******************************************************/
function continueCount(){
	const lastTrash = getLocalStorage(keyContinueTrash);
	const lastEnergy = getLocalStorage(keyContinueEnergy);
	const lastMaxEnergy = getLocalStorage(keyContinueMaxEnergy);
	const lastDiscard = getLocalStorage(keyContinueDiscard);
	const lastTemporary = getLocalStorage(keyContinueTemporary);
	const lastStack = getLocalStorage(keyContinueStack);
	const lastTurn = getLocalStorage(keyContinueTurn);
	const lastStatus = getLocalStorage(keyContinueStatus);
	if (lastTrash) {
		myTrash = lastTrash;
	}
	if (lastEnergy) {
		myEnergy = lastEnergy;
	}
	if (lastMaxEnergy) {
		maxEnergy = lastMaxEnergy;
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
	if (lastStatus) {
		currentMyStatus = lastStatus;
	}
}
/*******************************************************/
/* initializeQueue：キューの初期化
/*******************************************************/
function initializeQueue(){
	deletAllDeck();
	deletAllHand();
	deletAllTrash();
	deletAllDiscard();
	deletAllTemporaryArea();
	deletAllStackCard();
	currentTurn = 0;
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
	}
	updateHandDom();
}

/*******************************************************/
/* setupBtn：各種ボタンの初期設定
/*******************************************************/
function setupBtn(){
	$('.end-btn').click((e) => {
		console.log('click end-btn');
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
function startTurn(){
	currentTurn++;
	console.log(`turn: ${currentTurn}`);
	myEnergy = maxEnergy;
	drawCardFromDeck(initialHandNum);
	//敵の次行動予測を決定する

	updateHandDom();
	updateDeckDom();
	updateTrashDom();
	updateEnergyDom();
	updatePlayerAreaDom()
	updateEnemyAreaDom(false);
	decideNextAction();
	fadeInEnemyOmenDom();

	setLocalStorage(keyContinueTurn, currentTurn);
	setLocalStorage(keyContinueEnergy, myEnergy);
	setLocalStorage(keyContinueHand, myHand);
	setLocalStorage(keyContinueStatus, currentMyStatus);
	setLocalStorage(keyContinueEnemy, currentEnemies);
	

}


/*******************************************************/
/* startCleanup：ターン終了処理を行う
/*******************************************************/
function startCleanup(){
	// 手札を捨て札エリアに格納
	deletAllHand().forEach((card) => {
		pushTrash(card);
	});
	setLocalStorage(keyContinueHand, myHand);
	setLocalStorage(keyContinueTrash, myTrash);
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
	updateDeckDom();
	// デッキと手札をローカルストレージに記憶
	setLocalStorage(keyContinueDeck, myDeck);
	setLocalStorage(keyContinueHand, myHand);
	setTimeout(() => {
		updateHandDom();
	}, drowWatiTime);
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
	// DOM要素を更新
	updateDeckDom();
	updateTrashDom();
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
function endAction(){
	let ret = false;
	if ( stackCard.length === 0 ){
		return true;
	}
	const playFunc = shiftStackCard();
	if (playFunc !== undefined) {
		const storedFunc = globalThis[playFunc];
		if( typeof storedFunc === 'function'){
			ret = storedFunc();
		} 
	}
	checkEnemydefeated();
	setLocalStorage(keyContinueStack, stackCard);
	setTimeout(() => {
		updatePlayerAreaDom();
	},playerAttackWaitTime);
	return ret;
}
/*******************************************************/
/* clickHandProcess：クリック時の処理
/*******************************************************/
function clickHandProcess(handCardDiv, hand){

	if (myEnergy >= hand.cost) {
		const index = findIndexHand('id', hand.id);
		myEnergy -= hand.cost;
		updateEnergyDom();
		playHandCard(index);
		setLocalStorage(keyContinueEnergy, myEnergy);
	} else {
		console.log("エネルギーが足りません");
		deletAllTemporaryArea();
		setLocalStorage(keyContinueTemporary, tmpArea);
		return false;
	}
	return true;
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
	console.log(currentEnemies);
}
/*******************************************************/
/* startEnemiesTurn：敵のターン処理を行う
/*******************************************************/
async function startEnemiesTurn(){
	// 敵の予測した攻撃を行う
	for (const enemy of currentEnemies) {
		if(!enemy.currentStatus.status.includes('dead')){
			const nextAction = enemy.currentStatus.nextAction;
			console.log(nextAction);
			if (nextAction !== '') {
				const storedFunc = globalThis[nextAction.func];
				if( typeof storedFunc === 'function'){
					ret = storedFunc(enemy);
				} 
			}
		}
	}
	setLocalStorage(keyContinueRemainHp, myRemainHP);
	setLocalStorage(keyContinueStatus, currentMyStatus);
	// 攻撃のアニメーションを行う
	for (const enemy of currentEnemies) {
		if(!enemy.currentStatus.status.includes('dead')){
			const nextAction = enemy.currentStatus.nextAction;
			if (nextAction !== '') {
				fadeOutEnemyOmenDom(enemy);
				await sleep(omenFadeOutWaitTime);
				if (nextAction.damage > 0){
					animateEnemyAttack(enemy);
					animatePlayerdamage();
				}
				await sleep(1200);
			}
		}
	}
	startTurn();
}
/*******************************************************/
/* decideNextAction：敵の次の行動を決める
/*******************************************************/
function decideNextAction(){
	currentEnemies.forEach((enemy) => {
		if(!enemy.currentStatus.status.includes('dead')){
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
/* decideNextAction：敵が倒されたかチェックする
/*******************************************************/
function checkEnemydefeated(){
	defeatedFlag = false;
	allDefeatedFlag = true;
	currentEnemies.forEach((enemy, i) => {
		if(!enemy.currentStatus.status.includes('dead')){
			if(enemy.currentStatus.remainHP <= 0){
				animateDefeated(enemy);
				animateEnemydamage(enemy);
				enemy.currentStatus.status.splice(0);
				enemy.currentStatus.status.push('dead');
				targetingEnemy();
				defeatedFlag = true;
			} else {
				allDefeatedFlag = false;
			}
		}
	});
	setLocalStorage(keyContinueEnemy, currentEnemies);
	if (defeatedFlag){
		setTimeout(() => {
			updateEnemyAreaDom(true);
			if (allDefeatedFlag){
				allEnemiesdefeated();
			}
		}, defeatedWaitTime);
	} else {
		updateEnemyAreaDom(true);
		if (allDefeatedFlag){
			allEnemiesdefeated();
		}
	}
}

/*******************************************************/
/* targetingEnemy：自動でターゲッティングする
/*******************************************************/
function targetingEnemy(){
	currentEnemies.forEach((enemy) => {
		if (!enemy.currentStatus.status.includes('dead')) {
			currentTarget = enemy;
		}
	});
}
/*******************************************************/
/* decideNextAction：敵がすべて倒された時の処理
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
	$(`.energy-count`).html(`${myEnergy}/${maxEnergy}`);
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
function updatePlayerAreaDom(){
	const selectChara = getLocalStorage(keySelectChara);
	$(`.player-area`).html('');
	// HPバー[player-hp-container]の要素
	const remainHP = 100 * ( myRemainHP / myMaxHP );
	const hpBerDiv = $('<div>')
		.addClass('player-hp-bar')
		.css('width', `${remainHP}%`);
	const hpParagraph = $('<p>')
		.html(`${myRemainHP}/${myMaxHP}`);
	const hpContainerDiv = $('<div>')
		.addClass('player-hp-container')
		.append(hpBerDiv)
		.append(hpParagraph);
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
	console.log(currentMyStatus);
	currentMyStatus.forEach((status) => {
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
	});
	const playerAreaInnerDiv = $('<div>')
		.addClass(`player-area-inner`)
		.append(playerImage)
		.append(innerDiv)
		.append(statusesDiv);
	$(`.player-area`)
		.append(playerAreaInnerDiv);

}
function updateEnemyAreaDom(omenFlag = false){
	$(`.enemies-area`).html('');
	currentEnemies.forEach((enemy) => {
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
		// ステータス[status]の要素
		const statusesDiv = $('<div>')
			.addClass('statuses');
		enemy.currentStatus.status.forEach((status) => {
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
		});
		// 「enemy-area」要素
		const enemyAreaDiv = $('<div>')
			.attr('id', enemy.currentStatus.divId)
			.addClass('enemy-area')
			.append(enemyImage)
			.append(hpContainerDiv)
			.append(statusesDiv);
		if (omenFlag){
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
		if (enemy.currentStatus.status.includes('dead')) {
			enemyAreaDiv.addClass('defeated');
		} else {
			enemyAreaDiv.click(enemy, (e) => {
				$('.enemy-area').removeClass('select');
				enemyAreaDiv.addClass('select');
				currentTarget = enemy;
			});
		}
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