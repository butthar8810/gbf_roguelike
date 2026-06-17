/*******************************************************/
/* animatePlayerAttack：プレイヤーが攻撃する
/*******************************************************/
function animatePlayerAttack(){
	console.log(`animatePlayerAttack`);
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
	console.log(`animatePlayerAttack`);
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
