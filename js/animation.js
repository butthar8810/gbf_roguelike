/*******************************************************/
/* animatePlayerAttack：プレイヤーが攻撃する
/*******************************************************/
function animatePlayerAttack(){
	console.log(`animatePlayerAttack`);
	const selectChara = getLocalStorage(keySelectChara);
	const playerImage = $('.player-status').children('img');
	
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
	const playerImage = $('.player-status').children('img');
	
	if (selectChara) {
		$('.name-space').html(selectChara);
		if (selectChara == selectCharacter.gran.name){
			playerImage.attr('src', 'images/gifs/gran_dmg.gif');
			setTimeout(() => {
				playerImage.attr('src', 'images/gifs/gran_idle.gif');
			}, playerAttackWaitTime);
		} else if (selectChara == selectCharacter.djeeta.name){
			playerImage.attr('src', 'images/gifs/djeeta_dmg.gif');
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
/* animatePlayerAttack：エネミーが攻撃する
/*******************************************************/
function animateEnemyAttack(animateDiv){
	console.log(`animateEnemyAttack`);
	animateDiv.children('img')
		.animate({ left: '100px' }, 1000)
		.animate({ left: '0px' }, 1000);
}


/*******************************************************/
/* animateDefeated：敵が倒されてフェードアウトする
/*******************************************************/
function animateDefeated(animateDiv){
	console.log(`animateDefeated`);
	console.log(animateDiv);
	animateDiv.animate({ 
		opacity: 0
	}, defeatedWaitTime);
}
