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
	updatePlayerStatus();
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
	updatePlayerStatus();
	setupEnemy();
	setupBtn();


	updateDeckDom();
	updateTrashDom();
	updateEnergyDom();
	updateEnemyStatus();
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
	decideNextAction();

	updateHandDom();
	updateDeckDom();
	updateTrashDom();
	updateEnergyDom();
	setTimeout(() => {
		updateEnemyStatus();
	}, 3000);
	

	setLocalStorage(keyContinueTurn, currentTurn);
	setLocalStorage(keyContinueEnergy, myEnergy);
	setLocalStorage(keyContinueHand, myHand);
	setLocalStorage(keyContinueEnemy, currnetEnemies);
	

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
		currnetEnemies = lastEnemyGroup;
	} else {
		switch(level) {
			case stageLevel.normal:
				const totalWeight = easyEnemies.reduce((sum, item) => sum + item.weight, 0);
				let enemyGroupWeight = mt.nextInt(0, totalWeight);
				for (const enemy of Object.values(easyEnemies)) {
					if (enemyGroupWeight < enemy.weight) {
						currnetEnemies = deepCopyEnemies(enemy.enemies);
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
		currnetEnemies.forEach((enemy, i) => {
			const randomHP = mt.nextInt(enemy.minHP, enemy.maxHP);
			enemy.currentStatus.maxHP = randomHP;
			enemy.currentStatus.remainHP = randomHP;
			enemy.currentStatus.divId = `enemy${i}`;
		});
		setLocalStorage(keyContinueEnemy, currnetEnemies);
	}
	currnetTarget = currnetEnemies[0];
	console.log(currnetEnemies);
}
/*******************************************************/
/* startEnemiesTurn：敵のターン処理を行う
/*******************************************************/
function startEnemiesTurn(){
	// 敵の予測した攻撃を行う
	currnetEnemies.forEach((enemy) => {
		if(!enemy.currentStatus.status.includes('dead')){
			const nextAction = enemy.currentStatus.nextAction;
			console.log(nextAction);
			if (nextAction !== '') {
				const storedFunc = globalThis[nextAction.func];
				if( typeof storedFunc === 'function'){
					ret = storedFunc();
					animateEnemyAttack($(`#${enemy.currentStatus.divId}`));
					animatePlayerdamage();
				} 
			}
		}
	});

	startTurn();
}
/*******************************************************/
/* decideNextAction：敵の次の行動を決める
/*******************************************************/
function decideNextAction(){
	currnetEnemies.forEach((enemy) => {
		if(!enemy.currentStatus.status.includes('dead')){
			const actionFunc = enemy.actionAlgorithm;
			if (actionFunc !== '') {
				const storedFunc = globalThis[actionFunc];
				if( typeof storedFunc === 'function'){
					enemy.currentStatus.nextAction = storedFunc();
					console.log(enemy.currentStatus.nextAction);
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
	currnetEnemies.forEach((enemy, i) => {
		if(!enemy.currentStatus.status.includes('dead')){
			if(enemy.currentStatus.remainHP <= 0){
				animateDefeated($(`#enemy${i}`));
				enemy.currentStatus.status.splice(0);
				enemy.currentStatus.status.push('dead');
				targetingEnemy();
				defeatedFlag = true;
			} else {
				allDefeatedFlag = false;
			}
		}
	});
	if (defeatedFlag){
		setTimeout(() => {
			updateEnemyStatus();
			if (allDefeatedFlag){
				allEnemiesdefeated();
			}
		}, defeatedWaitTime);
	} else {
		updateEnemyStatus();
		if (allDefeatedFlag){
			allEnemiesdefeated();
		}
	}
}

function targetingEnemy(){
	currnetEnemies.forEach((enemy) => {
		if (!enemy.currentStatus.status.includes('dead')) {
			currnetTarget = enemy;
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
function updatePlayerStatus(){
	const selectChara = getLocalStorage(keySelectChara);
	$(`.player-status`).html('');
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
	const innerDiv = $('<div>')
		.append(hpContainerDiv);
	const playerImage = $('<img>');
	if (selectChara == selectCharacter.gran.name){
		playerImage.attr('src', 'images/gifs/gran_idle.gif');
	} else if (selectChara == selectCharacter.djeeta.name){
		playerImage.attr('src', 'images/gifs/djeeta_idle.gif');
	} else {
		alert('別キャラが選択されています。');
		window.location.href = 'index.html';
	}
	$(`.player-status`)
		.append(playerImage)
		.append(innerDiv);

}
function updateEnemyStatus(){
	$(`.enemies-status`).html('');
	currnetEnemies.forEach((enemy) => {
		// 敵立ち絵要素
		const enemyImage = $('<img>')
			.attr('src', enemy.image);
		// 残りHP要素
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
		// 予測攻撃の要素
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
		// 「enemy-status」要素
		const enemyStatusDiv = $('<div>')
			.attr('id', enemy.currentStatus.divId)
			.addClass('enemy-status')
			.append(enemyImage)
			.append(hpContainerDiv)
			.append(omenDiv);
			
		$(`.enemies-status`).append(enemyStatusDiv);
		if (enemy.currentStatus.status.includes('dead')) {
			enemyStatusDiv.addClass('defeated');
		} else {
			enemyStatusDiv.click(enemy, (e) => {
				$('.enemy-status').removeClass('select');
				enemyStatusDiv.addClass('select');
				currnetTarget = enemy;
			});
		}

	});
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