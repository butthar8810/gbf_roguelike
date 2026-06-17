function effectDammy(){}

/*************************************************************************************/
/* 各カード効果関数
/*************************************************************************************/
function effectStrike(){
	// 6のダメージを与える。
	console.log('effectStrike');
	actionAttack(6);
	actionStatusBuf(bufStatus.attackUp, 2);
	actionStatusDebuf(debufStatus.attackDown, 2);
	return true;
}
function effectDefense(){
	// 5ブロックを得る。
	console.log('effectDefense');
	actionBlock(5);
}
function effectPowerswing(){
	// 8のダメージを与える。弱体2を与える。
	console.log('effectPowerswing');
	actionAttack(8);
	actionStatusDebuf(debufStatus.defenseDown, 2);
}
function effectFast(){
	// 3ダメージを与える。脱力1を与える。
	console.log('effectFast');
	actionAttack(3);
	actionStatusDebuf(debufStatus.attackDown, 1);

}
function effectPulverizer(){
	// 8ブロックを得る。カードを1枚捨てる。
	console.log('effectPulverizer');
	actionBlock(8);
}



/*************************************************************************************/
/* カードアクション用システム関数
/*************************************************************************************/
/*******************************************************/
/* 与ダメージ関数
/*******************************************************/
function actionAttack(attackCount){

	animatePlayerAttack();
	currentTarget.currentStatus.remainHP -= attackCount;
	setLocalStorage(keyContinueEnemy, currentEnemies);
}
/*******************************************************/
/* ブロック関数
/*******************************************************/
function actionBlock(blockCount){
	$('.player-hp-bar').addClass('block');
}
/*******************************************************/
/* バフを与える関数
/*******************************************************/
function actionStatusBuf(buf, amountCount){
	console.log('actionStatusBuf');
	// すでに同じデバフがかかってないか確認
	const myStatus = currentMyStatus.filter((status) => {
		return status.name !== buf.name;
	});
	const receivedBuf = {...buf};
	receivedBuf.amount = amountCount;
	myStatus.push(receivedBuf);
	currentMyStatus = myStatus;
	setLocalStorage(keyContinueStatus, currentMyStatus);
}
/*******************************************************/
/* 状態異常を与える関数
/*******************************************************/
function actionStatusDebuf(debuf, amountCount){
	console.log('actionStatusDebuf');
	// すでに同じデバフがかかってないか確認
	const targetStatus = currentTarget.currentStatus.status.filter((status) => {
		console.log(status.name);
		console.log(debuf.name);
		return status.name !== debuf.name;
	});
	const receivedDebuf = {...debuf};
	receivedDebuf.amount = amountCount;
	targetStatus.push(receivedDebuf);
	currentTarget.currentStatus.status = targetStatus;
	setLocalStorage(keyContinueEnemy, currentEnemies);
}