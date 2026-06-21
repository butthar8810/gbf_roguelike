
/*****************************************************************************/
/* エネミー情報
/*****************************************************************************/
const enemyList = {
	test:{
		name: 'ういなす', 
		minHP: 6, 
		maxHP: 20, 
		image: 'images/enemy/uinasu.png',
		actionAlgorithm: 'actionTEST', 
		actionFirst: 'testFirst',
		currentStatus:{
			remainHP: 0, 
			maxHP: 0, 
			block: 0,
			status: [], 
			nextAction: {},
			divId: ''
		}
	},
	slime:{
		name: 'スライム', 
		minHP: 8, 
		maxHP: 12, 
		image: 'images/enemy/kingbronze.gif',
		actionAlgorithm: 'actionSlime', 
		actionFirst: '',
		currentStatus:{
			remainHP: 0, 
			maxHP: 0, 
			block: 0,
			status: [], 
			nextAction: {},
			divId: ''
		}
	},
	silver:{
		name: 'シルバースライム', 
		minHP: 28, 
		maxHP: 32, 
		image: 'images/enemy/kingsilver.gif', 
		actionAlgorithm: 'actionSilver', 
		actionFirst: '',
		currentStatus:{
			remainHP: 0, 
			maxHP: 0, 
			block: 0,
			status: [], 
			nextAction: {},
			divId: ''
		}
	},
	golem:{
		name: 'ゴーレム', 
		minHP: 48, 
		maxHP: 55, 
		image: 'images/enemy/golem.png', 
		actionAlgorithm: 'actionGolem', 
		actionFirst: '',
		currentStatus:{
			remainHP: 0, 
			maxHP: 0, 
			block: 0,
			status: [], 
			nextAction: {},
			divId: ''
		}
	},
	zombie:{
		name: 'ゾンビ', 
		minHP: 40, 
		maxHP: 44, 
		image: 'images/enemy/zombie.png', 
		actionAlgorithm: 'actionZombie', 
		actionFirst: '',
		currentStatus:{
			remainHP: 0, 
			maxHP: 0, 
			block: 0,
			status: [], 
			nextAction: {},
			divId: ''
		}
	},
	imp:{
		name: 'インプ', 
		minHP: 10, 
		maxHP: 17, 
		image: 'images/enemy/imp.png', 
		actionAlgorithm: 'actionImp', 
		actionFirst: '',
		currentStatus:{
			remainHP: 0, 
			maxHP: 0, 
			block: 0,
			status: [], 
			nextAction: {},
			divId: ''
		}
	},
/*
	angelcore:{name: 'エンジェル・コア', minHP: 8, maxHP: 12, image: 'images/enemy/angelcore.png', currentStatus:{remainHP: 0, maxHP: 0, status: [], nextAction: ''}},
	bee:{name: 'キラービー', minHP: 8, maxHP: 12, image: 'images/enemy/bee.png', currentStatus:{remainHP: 0, maxHP: 0, status: [], nextAction: ''}},
	baru:{name: 'バル・ザレニア', minHP: 8, maxHP: 12, image: 'images/enemy/baru.png', currentStatus:{remainHP: 0, maxHP: 0, status: [], nextAction: ''}},
	ghost:{name: 'ゴースト', minHP: 8, maxHP: 12, image: 'images/enemy/ghost.png', currentStatus:{remainHP: 0, maxHP: 0, status: [], nextAction: ''}},
	hellhound:{name: 'ヘルハウンド', minHP: 8, maxHP: 12, image: 'images/enemy/hellhound.png', currentStatus:{remainHP: 0, maxHP: 0, status: [], nextAction: ''}},
	jerry:{name: 'ジェリー', minHP: 8, maxHP: 12, image: 'images/enemy/jerry.png', currentStatus:{remainHP: 0, maxHP: 0, status: [], nextAction: ''}},
	rafflesia:{name: 'ラフレシア', minHP: 8, maxHP: 12, image: 'images/enemy/rafflesia.png', currentStatus:{remainHP: 0, maxHP: 0, status: [], nextAction: ''}},
	agnu:{name: '火霊・アーグヌ', minHP: 8, maxHP: 12, image: 'images/enemy/agnu.png', currentStatus:{remainHP: 0, maxHP: 0, status: [], nextAction: ''}},
	shell:{name: 'シェル', minHP: 8, maxHP: 12, image: 'images/enemy/shell.png', currentStatus:{remainHP: 0, maxHP: 0, status: [], nextAction: ''}},
	snipper:{name: 'スニッパー', minHP: 8, maxHP: 12, image: 'images/enemy/snipper.png', currentStatus:{remainHP: 0, maxHP: 0, status: [], nextAction: ''}},
	wita:{name: '水霊・ウィタ', minHP: 8, maxHP: 12, image: 'images/enemy/wita.png', currentStatus:{remainHP: 0, maxHP: 0, status: [], nextAction: ''}},
	goblin:{name: 'ゴブリン戦士', minHP: 8, maxHP: 12, image: 'images/enemy/goblin.png', currentStatus:{remainHP: 0, maxHP: 0, status: [], nextAction: ''}},
	wolf:{name: 'ウルフ', minHP: 8, maxHP: 12, image: 'images/enemy/wolf.png', currentStatus:{remainHP: 0, maxHP: 0, status: [], nextAction: ''}},
*/
};
const bossEnemyList = {
	kinggold:{name: 'キングゴールドスライム', minHP: 8, maxHP: 12, image: 'images/enemy/kinggold.gif', currentStatus:{remainHP: 0, maxHP: 0, status: [], nextAction: ''}},
	juanitta:{name: 'ジュアニッタ', minHP: 8, maxHP: 12, image: 'images/enemy/juanitta.png', currentStatus:{remainHP: 0, maxHP: 0, status: [], nextAction: ''}},
};
const testEnemies = [
	{weight: 100, enemies: [enemyList.test, enemyList.test]},
];
const easyEnemies = [
	{weight: 25, enemies: [enemyList.slime, enemyList.silver]},
	{weight: 25, enemies: [enemyList.golem]},
	{weight: 25, enemies: [enemyList.zombie]},
	{weight: 25, enemies: [enemyList.imp, enemyList.imp]},
];
const strongEnemies = [

];

const enemyActionType = {
	attack: 'アタック',
	block: 'ブロック',
	buff: 'バフ',
	debuff: 'デバフ',
	blockAndAttack: 'ブロックとアタック',
	blockAndBuff: 'ブロックとバフ',
	buffAndAttack: 'バフとアタック',
	debuffAndAttack: 'デバフとアタック',
};
/*****************************************************************************/
/* エネミーアクション
/*****************************************************************************/
function actionTEST(){
	const actions = [
		{weight: 30, omen:{name: 'Test1', func: 'testAttack', type: enemyActionType.attack, damage: 6, image: 'images/enemy/omen/Attack.png'}},
		{weight: 30, omen:{name: 'Test2', func: 'testStrategy', type: enemyActionType.debuff, damage: 0, image: 'images/enemy/omen/Weakness1.png'}},
		{weight: 30, omen:{name: 'Test3', func: 'testSpell', type: enemyActionType.buff, damage: 0, image: 'images/enemy/omen/Power2.png'}},
		{weight: 30, omen:{name: 'Test4', func: 'testMucus', type: enemyActionType.debuffAndAttack, damage: 8, image: 'images/enemy/omen/poison.png'}},
	];
	const totalWeight = actions.reduce((sum, item) => sum + item.weight, 0);
	let random = Math.floor(Math.random() * totalWeight);
	for (const action of actions) {
		if (random < action.weight) {
			return action.omen;
		}
		random -= action.weight;
	}
	return false;
}
function testAttack(enemyInfo, playerInfo, animationFlag){
	enemyAttack(enemyInfo, playerInfo, animationFlag, 6);
	enemyStatusDebuf(enemyInfo, playerInfo, animationFlag, debufStatus.poison, 2);
}
function testStrategy(enemyInfo, playerInfo, animationFlag){
	enemyStatusDebuf(enemyInfo, playerInfo, animationFlag, debufStatus.defenseDown, 2);
}
function testSpell(enemyInfo, playerInfo, animationFlag){
	enemyStatusBuf(enemyInfo, animationFlag, bufStatus.attackUp, 2);
	enemyBlock(enemyInfo, animationFlag, 5);
}
function testMucus(enemyInfo, playerInfo, animationFlag){
	// 8ダメージ+粘液1枚を捨て札に加える
	enemyAttack(enemyInfo, playerInfo, animationFlag, 8);
}
function testFirst(enemyInfo, playerInfo, animationFlag){
	console.log(testFirst);
	enemyStatusBuf(enemyInfo, animationFlag, bufStatus.metallicize, 2);
}
/*******************************************************/
/* スライム
/*******************************************************/
function actionSlime(){
	console.log('actionSlime');
	const actions = [
		{weight: 0, omen:{name: '攻撃', func: 'slimeAttack', type: enemyActionType.attack, damage: 6, image: 'images/enemy/omen/Attack.png'}},
		{weight: 0, omen:{name: '舐める', func: 'slimeStrategy', type: enemyActionType.debuff, damage: 0, image: 'images/enemy/omen/Weakness1.png'}},
	];
	if (0 === currentTurn % 2){// 1ターン目に必ず使用する。
		return actions[0].omen;
	} else {
		return actions[1].omen;
	}
}
function slimeAttack(enemyInfo, playerInfo, animationFlag){
	// 6点ダメージ
	enemyAttack(enemyInfo, playerInfo, animationFlag, 6);
}
function slimeStrategy(enemyInfo, playerInfo, animationFlag){
	// 脱力1を付与
	enemyStatusDebuf(enemyInfo, playerInfo, animationFlag, debufStatus.weak, 1);
}
/*******************************************************/
/* シルバースライム
/*******************************************************/
function actionSilver(){
	console.log('actionSilver');
	const actions = [
		{weight: 40, omen:{name: '攻撃', func: 'silverAttack', type: enemyActionType.attack, damage: 10, image: 'images/enemy/omen/Attack.png'}},
		{weight: 30, omen:{name: '腐食性の粘液', func: 'silverMucus', type: enemyActionType.buffAndAttack, damage: 8, image: 'images/enemy/omen/poison.png'}},
		{weight: 30, omen:{name: '舐める', func: 'silverStrategy', type: enemyActionType.debuff, damage: 0, image: 'images/enemy/omen/Weakness1.png'}},
	];
	const totalWeight = actions.reduce((sum, item) => sum + item.weight, 0);
	let random = Math.floor(Math.random() * totalWeight);
	for (const action of actions) {
		if (random < action.weight) {
			return action.omen;
		}
		random -= action.weight;
	}
	return false;
}
function silverAttack(enemyInfo, playerInfo, animationFlag){
	// 10点ダメージ
	enemyAttack(enemyInfo, playerInfo, animationFlag, 10);
}
function silverMucus(enemyInfo, playerInfo, animationFlag){
	// 8ダメージ+粘液1枚を捨て札に加える
	enemyAttack(enemyInfo, playerInfo, animationFlag, 8);
}
function silverStrategy(enemyInfo, playerInfo, animationFlag){
	// 脱力1を付与
	enemyStatusDebuf(enemyInfo, playerInfo, animationFlag, debufStatus.weak, 1);
}
/*******************************************************/
/* ゴーレム
/*******************************************************/
function actionGolem(){
	console.log('actionGolem');
	const actions = [
		{weight: 0, omen:{name: '強化', func: 'golemSpell', type: enemyActionType.buff, damage: 0, image: 'images/enemy/omen/Power1.png'}},
		{weight: 0, omen:{name: '攻撃', func: 'golemAttack', type: enemyActionType.attack, damage: 6, image: 'images/enemy/omen/Attack.png'}},
	];
	if (currentTurn === 1){// 1ターン目に必ず使用する。
		return actions[0].omen;
	} else {
		return actions[1].omen;
	}
}
function golemSpell(enemyInfo, playerInfo, animationFlag){
	// 攻撃力アップ2を自身に付与
	enemyStatusBuf(enemyInfo, animationFlag, bufStatus.attackUp, 2);
}
function golemAttack(enemyInfo, playerInfo, animationFlag){
	// 6点ダメージ');
	enemyAttack(enemyInfo, playerInfo, animationFlag, 6);
}
/*******************************************************/
/* ゾンビ
/*******************************************************/
function actionZombie(){
	console.log('actionZombie');
	const actions = [
		{weight: 25, omen:{name: '攻撃', func: 'zombieAttack', type: enemyActionType.attack, damage: 11, image: 'images/enemy/omen/Attack.png'}},
		{weight: 30, omen:{name: '攻撃+防御', func: 'zombieAttackAndDefense', type: enemyActionType.blockAndAttack, damage: 7, image: 'images/enemy/omen/PowerAttack.png'}},
		{weight: 45, omen:{name: '怒号', func: 'zombieDefense', type: enemyActionType.blockAndBuff, damage: 0, image: 'images/enemy/omen/Defense1.png'}},
	];
	const totalWeight = actions.reduce((sum, item) => sum + item.weight, 0);
	let random = Math.floor(Math.random() * totalWeight);
	for (const action of actions) {
		if (random < action.weight) {
			return action.omen;
		}
		random -= action.weight;
	}
	return false;
}
function zombieAttack(enemyInfo, playerInfo, animationFlag){
	// 11点ダメージ');
	enemyAttack(enemyInfo, playerInfo, animationFlag, 11);
}
function zombieAttackAndDefense(enemyInfo, playerInfo, animationFlag){
	// 7点ダメージ+5ブロック');
	enemyAttack(enemyInfo, playerInfo, animationFlag, 7);
	enemyBlock(enemyInfo, animationFlag, 5);
}
function zombieDefense(enemyInfo, playerInfo, animationFlag){
	// 6ブロック+攻撃力アップ3');
	enemyBlock(enemyInfo, animationFlag, 6);
	enemyStatusBuf(enemyInfo, animationFlag, bufStatus.attackUp, 3);

}
/*******************************************************/
/* インプ
/*******************************************************/
function actionImp(){
	console.log('actionImp');
	const actions = [
		{weight: 70, omen:{name: '攻撃', func: 'impAttack', type: enemyActionType.attack, damage: 6, image: 'images/enemy/omen/Attack.png'}},
		{weight: 15, omen:{name: '成長', func: 'impGrowth', type: enemyActionType.buff, damage: 0, image: 'images/enemy/omen/Power1.png'}},
		{weight: 15, omen:{name: '呪術', func: 'impWeb', type: enemyActionType.debuff, damage: 0, image: 'images/enemy/omen/Weakness1.png'}},
	];
	const totalWeight = actions.reduce((sum, item) => sum + item.weight, 0);
	let random = Math.floor(Math.random() * totalWeight);
	for (const action of actions) {
		if (random < action.weight) {
			return action.omen;
		}
		random -= action.weight;
	}
	return false;
}
function impAttack(enemyInfo, playerInfo, animationFlag){
	// 6点ダメージ
	enemyAttack(enemyInfo, playerInfo, animationFlag, 6);
}
function impGrowth(enemyInfo, playerInfo, animationFlag){
	// 攻撃力アップ3を付与
	enemyStatusBuf(enemyInfo, animationFlag, bufStatus.attackUp, 3);
}
function impWeb(enemyInfo, playerInfo, animationFlag){
	// 脱力2を付与
	enemyStatusDebuf(enemyInfo, playerInfo, animationFlag, debufStatus.weak, 2);
}





/*************************************************************************************/
/* カードアクション用システム関数
/*************************************************************************************/
/*******************************************************/
/* 与ダメージ関数
/*******************************************************/
function enemyAttack(enemyInfo, playerInfo, animationFlag, attackCount){
	let totalAttack = attackCount;
	if(playerInfo.block > 0){
		if(playerInfo.block >= attackCount){
			playerInfo.block -= attackCount;
			totalAttack = 0;
		} else if (playerInfo.block < attackCount){
			playerInfo.block = 0;
			totalAttack = attackCount - playerInfo.block;
		}
	}
	playerInfo.remainHP -= totalAttack;

	if(animationFlag){
		enemyAttackWaitFlag = true;
	}
}
/*******************************************************/
/* ブロック関数
/*******************************************************/
function enemyBlock(enemyInfo, animationFlag, blockCount){
	enemyInfo.currentStatus.block += blockCount;
	if(animationFlag){
		animateEnemyBlocked(enemyInfo);
	}
}
/*******************************************************/
/* バフを与える関数
/*******************************************************/
function enemyStatusBuf(enemyInfo, animationFlag, buf, amountCount){
	// すでに同じデバフがかかってないか確認
	// 同じデバフは累積する
	let sameBufFlag = false;
	// すでに同じバフがかかってないか確認
	// 同じバフは累積する
	for (const status of enemyInfo.currentStatus.status) {
		if (status.name == buf.name) {
			status.amount += amountCount;
			sameBufFlag = true;
		}
	}
	const receivedBuf = {...buf};
	receivedBuf.amount = amountCount;
	if (!sameBufFlag) {
		enemyInfo.currentStatus.status.push(receivedBuf);
	}
	if(animationFlag){
		animateEnemyAbnormality(enemyInfo, receivedBuf);
	}
}
/*******************************************************/
/* 状態異常を与える関数
/*******************************************************/
function enemyStatusDebuf(enemyInfo, playerInfo, animationFlag, debuf, amountCount){
	let sameDebufFlag = false;
	// すでに同じデバフがかかってないか確認
	// 同じデバフは累積する
	for (const status of playerInfo.statuses) {
		if (status.name == debuf.name) {
			status.amount += amountCount;
			sameDebufFlag = true;
		}
	}
	const receivedDebuf = {...debuf};
	receivedDebuf.amount = amountCount;
	if (!sameDebufFlag) {
		playerInfo.statuses.push(receivedDebuf);
	}
	if(animationFlag){
		enemyAttackWaitFlag = true;
		setTimeout(() => {
			animatePlayerAbnormality(receivedDebuf);
		},enemyAttackGoWaitTime);
	}
}