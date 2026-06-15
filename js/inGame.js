/*******************************************************/
/* startNomalButtle：通常戦闘を開始する
/*******************************************************/
function startButtle(level){
	$('.battle-area').removeClass('hidden');
	$('.info-area').removeClass('hidden');
	// 各キューの初期化
	initializeQueue();
	currentTurn = 0;
	updatePlayerStatus();
	// デッキの準備
	readyDeck();
	// デッキとした後にそこからカードを5枚引き、手札とする。
	setupHandCard();
	setupEnemy(level);

	setLocalStorage(keyContinueBattleFlag, true);

	startTurn();
}


/*******************************************************/
/* continueBattle：戦闘を再開する
/*******************************************************/
function continueBattle(){
	continueCount();
	$('.battle-area').removeClass('hidden');
	$('.info-area').removeClass('hidden');
	
	updatePlayerStatus();
	// デッキの準備
	readyDeck();
	// デッキとした後にそこからカードを5枚引き、手札とする。
	setupHandCard();
	setupEnemy();
	
	startTurn();
}

/*******************************************************/
/* continueBattle：戦闘を再開する
/*******************************************************/
function continueCount(){
	const lastTrash = getLocalStorage(keyContinueTrash);
	const lastEnergy = getLocalStorage(keyContinueEnergy);
	const lastDiscard = getLocalStorage(keyContinueDiscard);
	const lastTemporary = getLocalStorage(keyContinueTemporary);
	const lastStack = getLocalStorage(keyContinueStack);
	if (lastTrash) {
		myTrash = lastTrash;
	}
	if (lastEnergy) {
		myEnergy = lastEnergy;
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
}
/*******************************************************/
/* startTurn：ターン開始処理を行う
/*******************************************************/
function startTurn(){
	currentTurn++;
	myEnergy = 3;
	updateDeckDom();
	updateTrashDom();
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
	setLocalStorage(keyContinueStack, stackCard);
	return ret;
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
		// カードを5枚引く
		drawCardFromDeck(initialHandNum);
	}
	updateHandDom();
}
/*******************************************************/
/* setupHandCard：初期手札となる5枚のカードを引く
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
		currnetEnemies.forEach((enemy) => {
			const randomHP = mt.nextInt(enemy.minHP, enemy.maxHP);
			enemy.currentStatus.maxHP = randomHP;
			enemy.currentStatus.remainHP = randomHP;
		});
		
		setLocalStorage(keyContinueEnemy, currnetEnemies);
	}
	currnetTarget = currnetEnemies[0];
	console.log(currnetEnemies);
	updateEnemyStatus();
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
	
//	updateHandDom();
}
/*******************************************************/
/* drawDeckCard：デッキからカードをドローする
/*******************************************************/
function drawCardFromDeck(count = 1){
	if (myDeck.length < count) {
		// 捨て札をデッキに再構築する
		reconfigureDeck();
	} 

	for(let i = 0; i < count; i++){
		if(myDeck.length > 0){
			// デッキから手札へカードを引く
			const card = shiftDeck();
			if (card !== undefined){
				pushHand(card);
			}else{
				console.log("shiftDeck undefined");
				break;
			}
		} else {
			break;
		}
	}
//	updateDeckDom();
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

/***************************************************************************************/
/* DOM要素の更新処理
/***************************************************************************************/
function updateDeckDom(){
	console.log(`Deck:${myDeck.length}`);
	const deckImage = $(`.deck-area`).children('img');
	if(myDeck.length <= 0){
		deckImage.addClass('empty');
	}else{
		deckImage.removeClass('empty');
	}
	$(`.deck-count`).html(`${myDeck.length}`);
}
function updateTrashDom(){
	console.log(`Trash:${myTrash.length}`);
	const trashImage = $(`.trash-area`).children('img');
	if(myTrash.length <= 0){
		trashImage.addClass('empty');
	}else{
		trashImage.removeClass('empty');
	}
	$(`.trash-count`).html(`${myTrash.length}`);
}
function updateEnergyDom(){
	console.log(`Energy::${myEnergy}`);

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
	currnetEnemies.forEach((enemy, i) => {
		const remainHP = 100 * (enemy.currentStatus.remainHP / enemy.currentStatus.maxHP);
		const hpBerDiv = $('<div>')
			.addClass('enemy-hp-bar')
			.css('width', `${remainHP}%`);
		const hpParagraph = $('<p>')
			.html(`${enemy.currentStatus.remainHP}/${enemy.currentStatus.maxHP}`);
		const hpContainerDiv = $('<div>')
			.addClass('enemy-hp-container')
			.append(hpBerDiv)
			.append(hpParagraph);
		const enemyImage = $('<img>')
			.attr('src', enemy.image);
		const enemyStatusDiv = $('<div>')
			.attr('id', `enemy${i}`)
			.addClass('enemy-status')
			.append(enemyImage)
			.append(hpContainerDiv)
			.click(enemy, (e) => {
				$('.enemy-status').removeClass('select');
				enemyStatusDiv.addClass('select');
				currnetTarget = enemy;
			});
		$(`.enemies-status`).append(enemyStatusDiv);
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