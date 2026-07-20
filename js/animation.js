/*************************************************************************************/
/* アニメーション用変数関連
/*************************************************************************************/
const coordinateDeckForHandArea = {top: '40px', left: '-70px', width: '80px', size: '8px'};
const coordinateHandForHandArea = {top: '0px', left: '450px', width: '150px', size: '12px'};
const coordinateTrashForHandArea = {top: '50px', left: '970px', width: '80px', size: '8px'};
const coordinateShowForShowArea = {top: '0px', left: '500px', width: '150px', size: '12px'};
const coordinateTrashForShowArea = {top: '290px', left: '1040px', width: '80px', size: '8px'};
const coordinateHandForShowArea = {top: '240px', left: '500px', width: '150px', size: '12px'};

const playerAttackWaitTime = 1500;
const playerDamageWaitTime = 1000;
const defeatedWaitTime = 1000;
const drawWaitTime = 300;
const trashWaitTime = 500;
const showWaitTime = 1200;
const enemyAttackGoWaitTime = 500;
const enemyAttackReturnWaitTime = 500;
/*************************************************************************************/
/* カード移動処理関連(アウトゲーム)
/*************************************************************************************/
function animateInsertCardsToOriginalDeck(cardDiv){
	cardDiv
		.css('position', 'absolute');
}
/*************************************************************************************/
/* カード移動処理関連(インゲーム)
/*************************************************************************************/
/*******************************************************/
/* animateDrawDeck：ドローのアニメーション
/*******************************************************/
async function animateDrawDeck(card){
	// カード内容を形成
	const drawCardDiv = createCardDom(card);
	drawCardDiv
		.addClass('hand-card')
		.addClass('is-hover-disabled')
		.prop('disabled', true)
		.css('position', 'absolute')
		.css('font-size', coordinateDeckForHandArea.size)
		.css('width', coordinateDeckForHandArea.width)
		.css('top', coordinateDeckForHandArea.top)
		.css('left', coordinateDeckForHandArea.left);
	if (card.class == cardClass.gran) {
		drawCardDiv.addClass('gran-card');
	} else if (card.class == cardClass.djeeta) {
		drawCardDiv.addClass('djeeta-card');
	} else if (card.class == cardClass.common) {
		drawCardDiv.addClass('common-card');
	} else if (card.class == cardClass.abnormal) {
		drawCardDiv.addClass('abnormal-card');
	}
	$('.hand-area').append(drawCardDiv);

	cardDrawPromise = drawCardDiv.animate({
		left: coordinateHandForHandArea.left, 
		top: coordinateHandForHandArea.top,
		width: coordinateHandForHandArea.width,
		fontSize: coordinateHandForHandArea.size
	}, drawWaitTime);
	await sleep(drawWaitTime - 100);
}
/*******************************************************/
/* animateHandToTrash：捨て札に捨てるアニメーション
/*******************************************************/
function animateHandToTrash(card){
	const handCardDiv = $(`#hand-card${card.id}`);
	handCardDiv
		.addClass('is-hover-disabled')
		.prop('disabled', true)
		.css('position', 'absolute')
		.css('top', coordinateHandForHandArea.top)
		.css('left', coordinateHandForHandArea.left);

	cardTrashPromise = handCardDiv.animate({
		left: coordinateTrashForHandArea.left, 
		top: coordinateTrashForHandArea.top,
		width: coordinateTrashForHandArea.width,
		fontSize: coordinateTrashForHandArea.size
	}, trashWaitTime);
}
/*******************************************************/
/* animateHandToDiscard：廃棄札に捨てるアニメーション
/*******************************************************/
function animateHandToDiscard(card){
	const handCardDiv = $(`#hand-card${card.id}`);
	handCardDiv
		.addClass('is-hover-disabled')
		.prop('disabled', true);

	cardDiscardPromise = handCardDiv.animate({
		opacity: 0
	}, trashWaitTime);
}
/*******************************************************/
/* animateTrashToDeck：捨て札からデッキに移動するアニメーション
/*******************************************************/
function animateTrashToDeck(card){
	const restoreCardDiv = createCardDom(card);
	restoreCardDiv
		.addClass('hand-card')
		.addClass('is-hover-disabled')
		.prop('disabled', true)
		.css('position', 'absolute')
		.css('font-size', coordinateTrashForHandArea.size)
		.css('width', coordinateTrashForHandArea.width)
		.css('top', coordinateTrashForHandArea.top)
		.css('left', coordinateTrashForHandArea.left);
	if (card.class == cardClass.gran) {
		restoreCardDiv.addClass('gran-card');
	} else if (card.class == cardClass.djeeta) {
		restoreCardDiv.addClass('djeeta-card');
	} else if (card.class == cardClass.common) {
		restoreCardDiv.addClass('common-card');
	} else if (card.class == cardClass.abnormal) {
		restoreCardDiv.addClass('abnormal-card');
	}
	$('.hand-area').append(restoreCardDiv);

	cardRestorePromise = restoreCardDiv.animate({
		left: coordinateDeckForHandArea.left, 
		top: coordinateDeckForHandArea.top,
		width: coordinateDeckForHandArea.width,
		fontSize: coordinateDeckForHandArea.size
	}, trashWaitTime);
}

/*******************************************************/
/* animateHandToDeck：手札からデッキに移動するアニメーション
/*******************************************************/
function animateHandToDeck(card){
	const restoreCardDiv = createCardDom(card);
	restoreCardDiv
		.addClass('hand-card')
		.addClass('is-hover-disabled')
		.prop('disabled', true)
		.css('position', 'absolute')
		.css('font-size', coordinateHandForHandArea.size)
		.css('width', coordinateHandForHandArea.width)
		.css('top', coordinateHandForHandArea.top)
		.css('left', coordinateHandForHandArea.left);
	if (card.class == cardClass.gran) {
		restoreCardDiv.addClass('gran-card');
	} else if (card.class == cardClass.djeeta) {
		restoreCardDiv.addClass('djeeta-card');
	} else if (card.class == cardClass.common) {
		restoreCardDiv.addClass('common-card');
	} else if (card.class == cardClass.abnormal) {
		restoreCardDiv.addClass('abnormal-card');
	}
	$('.hand-area').append(restoreCardDiv);

	cardRemovePromise = restoreCardDiv.animate({
		left: coordinateDeckForHandArea.left, 
		top: coordinateDeckForHandArea.top,
		width: coordinateDeckForHandArea.width,
		fontSize: coordinateDeckForHandArea.size
	}, trashWaitTime);
}
/*******************************************************/
/* animatePlayerAddTrash：捨て札にカードを追加するアニメーション
/*******************************************************/
function animatePlayerAddTrash(cards){
	$('.show-area').removeClass('hidden');
	$('.show-area-inner').html('');
	cards.forEach((card, i) => {
		const showCardDiv = createCardDom(card);
		showCardDiv
			.addClass('hand-card')
			.addClass('is-hover-disabled');
		$('.show-area-inner').append(showCardDiv);
	});
	setTimeout(() => {
		const showCards = $('.show-area-inner').children('.hand-card');
		showCards
			.prop('disabled', true)
			.css('position', 'absolute')
			.css('top', coordinateShowForShowArea.top)
			.css('left', coordinateShowForShowArea.left);

		cardShowPromise = showCards.animate({
			left: coordinateTrashForShowArea.left, 
			top: coordinateTrashForShowArea.top,
			width: coordinateTrashForShowArea.width,
			fontSize: coordinateTrashForShowArea.size
		}, trashWaitTime);
		$.when(cardShowPromise).done(() => {
			$('.show-area').addClass('hidden');
			$('.show-area-inner').html('');
		});
	}, showWaitTime);
}
/*******************************************************/
/* animatePlayerAddTrash：手札にカードを追加するアニメーション
/*******************************************************/
function animatePlayerAddHand(cards){
	cardAddHandPromise = new Promise((resolve) => {
		$('.show-area').removeClass('hidden');
		$('.show-area-inner').html('');
		cards.forEach((card, i) => {
			const showCardDiv = createCardDom(card);
			showCardDiv
				.addClass('hand-card')
				.addClass('is-hover-disabled');
			$('.show-area-inner').append(showCardDiv);
		});
		setTimeout(() => {
			const showCards = $('.show-area-inner').children('.hand-card');
			showCards
				.prop('disabled', true)
				.css('position', 'absolute')
				.css('top', coordinateShowForShowArea.top)
				.css('left', coordinateShowForShowArea.left);

			cardShowPromise = showCards.animate({
				left: coordinateHandForShowArea.left, 
				top: coordinateHandForShowArea.top,
				width: coordinateHandForShowArea.width,
				fontSize: coordinateHandForShowArea.size
			}, trashWaitTime);
			$.when(cardShowPromise).done(() => {
				$('.show-area').addClass('hidden');
				$('.show-area-inner').html('');
				resolve();
			});
		}, showWaitTime);
	});
}

/*******************************************************/
/* animatePlayCard：カードをプレイするアニメーション
/*******************************************************/
function animatePlayCard(card){
	console.log('animatePlayCard');
	$.when(cardShowPromise).done(() => {
		$('.show-area').removeClass('hidden');
		$('.show-area-inner').html('');
		console.log(card);
		
		const showCardDiv = createCardDom(card);
		showCardDiv
			.addClass('hand-card')
			.addClass('is-hover-disabled');
		$('.show-area-inner').append(showCardDiv);
		showCardDiv
			.prop('disabled', true)
			.css('position', 'absolute');

		if('tmpDiscard' in card.amount && card.amount.tmpDiscard){
			cardShowPromise = showCardDiv
			.animate({
				left: coordinateShowForShowArea.left, 
				top: coordinateShowForShowArea.top,
			}, showWaitTime)
			.animate({
				opacity: 0
			}, trashWaitTime);
		} else if(card.amount.discard){
			cardShowPromise = showCardDiv
			.animate({
				left: coordinateShowForShowArea.left, 
				top: coordinateShowForShowArea.top,
			}, showWaitTime)
			.animate({
				opacity: 0
			}, trashWaitTime);
		} else {
			cardShowPromise = showCardDiv
			.animate({
			left: coordinateShowForShowArea.left, 
				top: coordinateShowForShowArea.top,
				}, showWaitTime)
			.animate({
				left: coordinateTrashForShowArea.left, 
				top: coordinateTrashForShowArea.top,
				width: coordinateTrashForShowArea.width,
				fontSize: coordinateTrashForShowArea.size
			}, trashWaitTime);
		}
		$.when(cardShowPromise).done(() => {
			$('.show-area').addClass('hidden');
			$('.show-area-inner').html('');
		});
	});
}
/*************************************************************************************/
/* バトルアニメーション処理関連
/*************************************************************************************/
/*******************************************************/
/* animatePlayerAttack：プレイヤーが攻撃する
/*******************************************************/
function animatePlayerAttack(){
	const selectChara = getLocalStorage(keySelectChara);
	const playerImage = $('.player-area-inner').children('.player-picture');
	if (selectChara) {
		$('.name-space').html(selectChara);
		if (selectChara == selectCharacter.gran.name){
			playerAttackPromise = new Promise((resolve) => {
				let timestamp = new Date().getTime();
				playerImage.attr('src', 'images/gifs/gran_attack.gif' + '?' + timestamp);
				setTimeout(() => {
					playerImage.attr('src', 'images/gifs/gran_idle.gif');
					resolve();
				}, playerAttackWaitTime);
			});
		} else if (selectChara == selectCharacter.djeeta.name){
			playerAttackPromise = new Promise((resolve) => {
				let timestamp = new Date().getTime();
				playerImage.attr('src', 'images/gifs/djeeta_attack.gif' + '?' + timestamp);
				setTimeout(() => {
					playerImage.attr('src', 'images/gifs/djeeta_idle.gif');
					resolve();
				}, playerAttackWaitTime);
			});
		} else {
			alert('別キャラが選択されています。');
			window.location.href = 'index.html';
		}
	} else{
		alert('キャラが選択されていません。');
		window.location.href = 'index.html';
	}
}
/*******************************************************/
/* animatePlayerPower：プレイヤーがパワーアップする
/*******************************************************/
function animatePlayerPower(){
	const selectChara = getLocalStorage(keySelectChara);
	const playerImage = $('.player-area-inner').children('.player-picture');
	console.log('Attack Start');
	if (selectChara) {
		$('.name-space').html(selectChara);
		if (selectChara == selectCharacter.gran.name){
			let timestamp = new Date().getTime();
			playerImage.attr('src', 'images/gifs/gran_ready.gif');
			setTimeout(() => {
				playerImage.attr('src', 'images/gifs/gran_idle.gif');
				console.log('Attack end');
			}, playerAttackWaitTime);
		} else if (selectChara == selectCharacter.djeeta.name){
			let timestamp = new Date().getTime();
			playerImage.attr('src', 'images/gifs/djeeta_ready.gif');
			setTimeout(() => {
				playerImage.attr('src', 'images/gifs/djeeta_idle.gif');
			}, playerAttackWaitTime);
		} else {
			alert('別キャラが選択されています。');
			window.location.href = 'index.html';
		}
	} else{
		alert('キャラが選択されていません。');
		window.location.href = 'index.html';
	}
}
/*******************************************************/
/* animatePlayerAttack：プレイヤーが攻撃を受ける
/*******************************************************/
function animatePlayerDamage(){
	const selectChara = getLocalStorage(keySelectChara);
	const playerImage = $('.player-area-inner').children('.player-picture');
	
	if (selectChara) {
		$('.name-space').html(selectChara);
		if (selectChara == selectCharacter.gran.name){
			playerImage.attr('src', 'images/gifs/gran_dmg.gif');
			setTimeout(() => {
				playerImage.attr('src', 'images/gifs/gran_idle.gif');
			}, playerDamageWaitTime);
		} else if (selectChara == selectCharacter.djeeta.name){
			playerImage.attr('src', 'images/gifs/djeeta_dmg.gif');
			setTimeout(() => {
				playerImage.attr('src', 'images/gifs/djeeta_idle.gif');
			}, playerDamageWaitTime);
		} else {
			alert('別キャラが選択されています。');
			window.location.href = 'index.html';
		}
	} else{
		alert('キャラが選択されていません。');
		window.location.href = 'index.html';
	}
}
/*******************************************************/
/* animatePlayerAbnormality：プレイヤーが状態変化を受ける
/*******************************************************/
function animatePlayerAbnormality(abnormality){
	console.log(abnormality);
	const abnormalityImage = $('<img>')
		.attr('src', abnormality.image);
	const nameParagraph = $('<p>')
		.html(`${abnormality.name}+${abnormality.amount}`);
	const abnormalityDiv = $('<div>')
		.addClass('player-abnormality')
		.append(abnormalityImage)
		.append(nameParagraph);
	$('.player-area-inner').append(abnormalityDiv);

	playerAbnormalityPromise = abnormalityDiv
		.animate({ top: '-30px' },1000, "easeOutQuart")
		.animate({ opacity: 0 },500, "easeOutQuart");

	$('.player-area-inner').remove(abnormalityDiv);
}
/*******************************************************/
/* animatePlayerBlocked：プレイヤーがブロックを得る
/*******************************************************/
function animatePlayerBlocked(){
	console.log('animatePlayerBlocked');
	const blockImage = $('<img>')
		.addClass('player-block')
		.attr('src', 'images/status/block.png');
	$('.player-area-inner').append(blockImage);
	playerGetBlockPromise = blockImage
		.animate({ opacity: 1, top: '100px' },1000, "easeOutQuart")
		.animate({ opacity: 0 },500, "easeOutQuart");
}
/*******************************************************/
/* animatePlayerAttack：エネミーが攻撃する
/*******************************************************/
function animateEnemyAttack(animateEnemy){
	enemyAttackPromise = $(`#${animateEnemy.currentStatus.divId}`).children('img')
		.animate({ left: '50px' }, enemyAttackGoWaitTime, "easeInQuart")
		.animate({ left: '0px' }, enemyAttackReturnWaitTime, "easeOutQuart");
	$('.front-effect')
		.animate({ opacity: '0' }, 400, "easeInQuart")
		.animate({ opacity: '1' }, 10, "easeInQuart")
		.animate({ opacity: '0' }, 600, "easeInQuart");
}
/*******************************************************/
/* animatePlayerAttack：エネミーがダメージを受ける
/*******************************************************/
function animateEnemydamage(animateEnemy){
	$(`#${animateEnemy.currentStatus.divId}`).children('img')
		.animate({ left: '5px' }, 25, "linear")
		.animate({ left: '-5px' }, 50, "linear")
		.animate({ left: '5px' }, 50, "linear")
		.animate({ left: '-5px' }, 50, "linear")
		.animate({ left: '5px' }, 50, "linear")
		.animate({ left: '-5px' }, 50, "linear")
		.animate({ left: '5px' }, 50, "linear")
		.animate({ left: '-5px' }, 50, "linear")
		.animate({ left: '5px' }, 50, "linear")
		.animate({ left: '-5px' }, 50, "linear")
		.animate({ left: '5px' }, 50, "linear")
		.animate({ left: '-5px' }, 50, "linear")
		.animate({ left: '5px' }, 50, "linear")
		.animate({ left: '-5px' }, 50, "linear")
		.animate({ left: '5px' }, 50, "linear")
		.animate({ left: '-5px' }, 50, "linear")
		.animate({ left: '5px' }, 50, "linear")
		.animate({ left: '-5px' }, 50, "linear")
		.animate({ left: '5px' }, 50, "linear")
		.animate({ left: '-5px' }, 50, "linear")
		.animate({ left: '5px' }, 50, "linear")
		.animate({ left: '-5px' }, 50, "linear");
}
/*******************************************************/
/* animateEnemyAbnormality：エネミーが状態変化を受ける
/*******************************************************/
function animateEnemyAbnormality(animateEnemy, abnormality){
	console.log(abnormality);
	const abnormalityImage = $('<img>')
		.attr('src', abnormality.image);
	const nameParagraph = $('<p>')
		.html(`${abnormality.name}+${abnormality.amount}`);
	const abnormalityDiv = $('<div>')
		.addClass('abnormality')
		.append(abnormalityImage)
		.append(nameParagraph);
	$(`#${animateEnemy.currentStatus.divId}`).append(abnormalityDiv);

	enemyAbnormalityPromise = abnormalityDiv
		.animate({ top: '-30px' },1000, "easeOutQuart")
		.animate({ opacity: 0 },500, "easeOutQuart");
	$(`#${animateEnemy.currentStatus.divId}`).remove(abnormalityDiv);
}
/*******************************************************/
/* animateEnemyBlocked：エネミーがブロックを得る
/*******************************************************/
function animateEnemyBlocked(animateEnemy){
	console.log('animateEnemyBlocked');
	const blockImage = $('<img>')
		.addClass('enemy-block')
		.attr('src', 'images/status/block.png');
	$(`#${animateEnemy.currentStatus.divId}`).append(blockImage);
	enemyGetBlockPromise = blockImage
		.animate({ opacity: 1, top: '80px' },1000, "easeOutQuart")
		.animate({ opacity: 0 },500, "easeOutQuart");
}
/*******************************************************/
/* animateDefeated：敵が倒されてフェードアウトする
/*******************************************************/
function animateDefeated(animateEnemy){
	const animateEnemyDiv = $(`#${animateEnemy.currentStatus.divId}`);
	enemyDefeatedPromise = animateEnemyDiv.animate({ 
		opacity: 0
	}, defeatedWaitTime);
}

/*************************************************************************************/
/* イベントアニメーション処理関連
/*************************************************************************************/
/*******************************************************/
/* animateRestHeal：休憩による回復アニメーション
/*******************************************************/
function animateRestHeal(){
	$('.heal-effect')
		.animate({ opacity: '0' }, 10, "easeInQuart")
		.animate({ opacity: '1' }, 600, "easeInQuart")
		.animate({ opacity: '0' }, 600, "easeInQuart");
}
/*******************************************************/
/* 宝箱イベント/ミミック討伐演出のDOM表示
/*******************************************************/
function animateKnockDownMimic(){
	let treasurePromise;
	//プレイヤーアタックモーション
	animatePlayerAttack();
	//エネミーノックアウト
	const mimicPromise = $('.enemy-area').children('img')
		.animate({ left: '5px' }, 15, "linear")
		.animate({ left: '-5px' }, 30, "linear")
		.animate({ left: '5px' }, 30, "linear")
		.animate({ left: '-5px' }, 30, "linear")
		.animate({ left: '5px' }, 30, "linear")
		.animate({ left: '-5px' }, 30, "linear")
		.animate({ left: '5px' }, 30, "linear")
		.animate({ left: '-5px' }, 30, "linear")
		.animate({ left: '5px' }, 30, "linear")
		.animate({ left: '-5px' }, 30, "linear")
		.animate({ left: '5px' }, 30, "linear")
		.animate({ left: '-5px' }, 30, "linear")
		.animate({ left: '5px' }, 30, "linear")
		.animate({ left: '-5px' }, 30, "linear")
		.animate({ left: '5px' }, 30, "linear")
		.animate({ left: '-5px' }, 30, "linear")
		.animate({ left: '5px' }, 30, "linear")
		.animate({ left: '-5px' }, 30, "linear")
		.animate({ left: '5px' }, 30, "linear")
		.animate({ left: '-5px' }, 30, "linear")
		.animate({ left: '5px' }, 30, "linear")
		.animate({ left: '-5px' }, 30, "linear")
		.animate({ left: '5px' }, 30, "linear")
		.animate({ left: '-5px' }, 30, "linear")
		.animate({ left: '5px' }, 30, "linear")
		.animate({ left: '-5px' }, 30, "linear");
	$('.enemy-area').animate({ 
		opacity: 0
	}, defeatedWaitTime);
	return mimicPromise;
}
function openTreasure(){
	const treasure = $('<img>')
		.addClass('treasure-open-box')
		.attr('src', 'images/events/treasure_2.png');
	$(`.enemies-area`).append(treasure);
	const treasurePromise = $('.treasure-box').animate({ 
		opacity: 0
	}, defeatedWaitTime);
	return treasurePromise;
}