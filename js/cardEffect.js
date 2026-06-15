function effectDammy(){}


function effectStrike(){
	console.log('effectStrike');
	currnetTarget.currentStatus.remainHP -= 6;
	updateEnemyStatus();
	setLocalStorage(keyContinueEnemy, currnetEnemies);
	return true;
}
function effectDefense(){
	console.log('effectDefense');
	statusBlock(5);
	
}
function effectPowerswing(){
	console.log('effectPowerswing');
	currnetTarget.currentStatus.remainHP -= 8;
	updateEnemyStatus();
	setLocalStorage(keyContinueEnemy, currnetEnemies);

}
function effectFast(){
	console.log('effectFast');
	currnetTarget.currentStatus.remainHP -= 3;
	updateEnemyStatus();
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