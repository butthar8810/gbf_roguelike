function effectDammy(){}


function effectStrike(){
	console.log('effectStrike');
	animatePlayerAttack();
	currnetTarget.currentStatus.remainHP -= 6;
	setLocalStorage(keyContinueEnemy, currnetEnemies);
	return true;
}
function effectDefense(){
	console.log('effectDefense');
	statusBlock(5);
}
function effectPowerswing(){
	console.log('effectPowerswing');
	animatePlayerAttack();
	currnetTarget.currentStatus.remainHP -= 8;
	setLocalStorage(keyContinueEnemy, currnetEnemies);

}
function effectFast(){
	console.log('effectFast');
	animatePlayerAttack();
	currnetTarget.currentStatus.remainHP -= 3;
	setLocalStorage(keyContinueEnemy, currnetEnemies);

}
function effectPulverizer(){
	console.log('effectPulverizer');
	statusBlock(8);
}



/*******************************************************/
/* カードエフェクト用システム関数
/*******************************************************/
function statusBlock(blockCount){
	$('.player-hp-bar').addClass('block');

}