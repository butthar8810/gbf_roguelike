/*************************************************************************************/
/* アニメーション用変数関連
/*************************************************************************************/
const coordinateDeckForHandArea = {top: '40px', left: '-70px', width: '80px', size: '10px'};
const coordinateHnadForHandArea = {top: '0px', left: '350px', width: '150px', size: '16px'};
const coordinateTrashForHandArea = {top: '50px', left: '820px', width: '80px', size: '10px'};

const playerAttackWaitTime = 2000;
const playerDamageWaitTime = 1000;
const defeatedWaitTime = 1000;
const drowWatiTime = 300;
const trashWatiTime = 300;
/*************************************************************************************/
/* カード移動処理関連
/*************************************************************************************/
/*******************************************************/
/* animateDrowDeck：ドローのアニメーション
/*******************************************************/
async function animateDrowDeck(card){
	// カード内容を形成
	const costDiv = $('<div>')
		.html(card.cost);
	const cardImage = $('<img>')
		.attr('src', card.image);
	const drowCardDiv = $('<div>')
		.addClass('hand-card')
		.html(`${card.name}`)
		.append(cardImage)
		.append(costDiv)
		.prop('disabled', true)
		.css('position', 'absolute')
		.css('font-size', coordinateDeckForHandArea.size)
		.css('width', coordinateDeckForHandArea.width)
		.css('top', coordinateDeckForHandArea.top)
		.css('left', coordinateDeckForHandArea.left);
	if (card.class == cardClass.gran) {
		drowCardDiv.addClass('gran-card');
	} else if (card.class == cardClass.djeeta) {
		drowCardDiv.addClass('djeeta-card');
	} else if (card.class == cardClass.normal) {
		drowCardDiv.addClass('normal-card');
	}
	$('.hand-area').append(drowCardDiv);

	drowCardDiv.animate({
		left: coordinateHnadForHandArea.left, 
		top: coordinateHnadForHandArea.top,
		width: coordinateHnadForHandArea.width,
		fontSize: coordinateHnadForHandArea.size
	}, drowWatiTime);
	await sleep(drowWatiTime);
}
/*******************************************************/
/* animateHnadToTrash：捨て札に捨てるアニメーション
/*******************************************************/
function animateHnadToTrash(card){
	const handCardDiv = $(`#hand-card${card.id}`);
	handCardDiv
		.prop('disabled', true)
		.css('position', 'absolute')
		.css('top', coordinateHnadForHandArea.top)
		.css('left', coordinateHnadForHandArea.left);

	handCardDiv.animate({
		left: coordinateTrashForHandArea.left, 
		top: coordinateTrashForHandArea.top,
		width: coordinateTrashForHandArea.width,
		fontSize: coordinateTrashForHandArea.size
	}, trashWatiTime);
}


/*************************************************************************************/
/* バトルアニメーション処理関連
/*************************************************************************************/
/*******************************************************/
/* animatePlayerAttack：プレイヤーが攻撃する
/*******************************************************/
function animatePlayerAttack(){
	const selectChara = getLocalStorage(keySelectChara);
	const playerImage = $('.player-area-inner').children('img');
	
	if (selectChara) {
		$('.name-space').html(selectChara);
		if (selectChara == selectCharacter.gran.name){
			playerImage.attr('src', 'images/gifs/gran_attack.gif');
			setTimeout(() => {
				playerImage.attr('src', 'images/gifs/gran_idle.gif');
			}, playerAttackWaitTime);
		} else if (selectChara == selectCharacter.djeeta.name){
			playerImage.attr('src', 'images/gifs/djeeta_attack.gif');
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
function animatePlayerdamage(){
	const selectChara = getLocalStorage(keySelectChara);
	const playerImage = $('.player-area-inner').children('img');
	
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
/* animatePlayerAttack：エネミーが攻撃する
/*******************************************************/
function animateEnemyAttack(animateEnemy){
	$(`#${animateEnemy.currentStatus.divId}`).children('img')
		.animate({ left: '50px' }, 500, "easeInQuart")
		.animate({ left: '0px' }, 500, "easeOutQuart");
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
/* animateDefeated：敵が倒されてフェードアウトする
/*******************************************************/
function animateDefeated(animateEnemy){
	const animateDiv = $(`#${animateEnemy.currentStatus.divId}`);
	animateDiv.animate({ 
		opacity: 0
	}, defeatedWaitTime);
}


