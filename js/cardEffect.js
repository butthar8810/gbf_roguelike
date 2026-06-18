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
	return true;
}
function effectPowerswing(){
	// 8のダメージを与える。弱体2を与える。
	console.log('effectPowerswing');
	actionAttack(8);
	actionStatusDebuf(debufStatus.defenseDown, 2);
	return true;
}
function effectFast(){
	// 3ダメージを与える。脱力1を与える。
	console.log('effectFast');
	actionAttack(3);
	actionStatusDebuf(debufStatus.weak, 1);
	return true;
}
function effectPulverizer(){
	// 8ブロックを得る。カードを1枚捨てる。
	console.log('effectPulverizer');
	actionBlock(8);
	return true;
}



/*************************************************************************************/
/* カードアクション用システム関数
/*************************************************************************************/
/*******************************************************/
/* 与ダメージ関数
/*******************************************************/
function actionAttack(attackCount){
	let totalAttack = attackCount;
	// 
	const enemyBlock = currentTarget.currentStatus.block;
	if(enemyBlock > 0){
		if(enemyBlock >= attackCount){
			currentTarget.currentStatus.block -= attackCount;
			totalAttack = 0;
		} else if (enemyBlock < attackCount){
			currentTarget.currentStatus.block = 0;
			totalAttack = attackCount - enemyBlock;
		}
	}
	currentTarget.currentStatus.remainHP -= totalAttack;
	// アニメーション
	animatePlayerAttack();
	actionWaitFlagForEnemy = true;
}
/*******************************************************/
/* ブロック関数
/*******************************************************/
function actionBlock(blockCount){
	playerStatus.block += blockCount;
	// アニメーション
	animatePlayerBlocked();
	actionWaitFlagForPlayer = true;
}
/*******************************************************/
/* バフを与える関数
/*******************************************************/
function actionStatusBuf(buf, amountCount){
	let sameBufFlag = false;
	// すでに同じバフがかかってないか確認
	// 同じバフは累積する
	for (const status of playerStatus.statuses) {
		if (status.name == buf.name) {
			status.amount += amountCount;
			sameBufFlag = true;
		}
	}
	const receivedBuf = {...buf};
	receivedBuf.amount = amountCount;
	if (!sameBufFlag) {
		playerStatus.statuses.push(receivedBuf);
	}
	// アニメーション
	animatePlayerAbnormality(receivedBuf);
	actionWaitFlagForPlayer = true;
}
/*******************************************************/
/* 状態異常を与える関数
/*******************************************************/
function actionStatusDebuf(debuf, amountCount){
	// すでに同じデバフがかかってないか確認
	// 同じデバフは累積する
	let sameDebufFlag = false;
	// すでに同じデバフがかかってないか確認
	// 同じバフは累積する
	for (const status of currentTarget.currentStatus.status) {
		if (status.name == debuf.name) {
			status.amount += amountCount;
			sameDebufFlag = true;
		}
	}
	const receivedDebuf = {...debuf};
	receivedDebuf.amount = amountCount;
	if (!sameDebufFlag) {
		currentTarget.currentStatus.status.push(receivedDebuf);
	}
	// アニメーション
	animateEnemyAbnormality(currentTarget, receivedDebuf);
	actionWaitFlagForEnemy = true;
}