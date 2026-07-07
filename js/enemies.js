
/*****************************************************************************/
/* エネミー情報
/*****************************************************************************/
const enemyList = {
	test:{
		name: 'ういなす', 
		minHP: 50, 
		maxHP: 100, 
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
	battleSlime:{
		name: 'バトルスライム', 
		minHP: 10, 
		maxHP: 14, 
		image: 'images/enemy/kingbronze.gif',
		actionAlgorithm: 'actionBattleSlime', 
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
	monk:{
		name: 'モンク', 
		minHP: 48, 
		maxHP: 55, 
		image: 'images/enemy/monk.png', 
		actionAlgorithm: 'actionMonk', 
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
	putesis:{
		name: 'プテシス', 
		minHP: 40, 
		maxHP: 44, 
		image: 'images/enemy/putesis.png', 
		actionAlgorithm: 'actionPutesis', 
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
	bee:{
		name: 'キラー・ビー', 
		minHP: 10, 
		maxHP: 17, 
		image: 'images/enemy/bee.png', 
		actionAlgorithm: 'actionBee', 
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
	fangBee:{
		name: 'ファング・ビー', 
		minHP: 10, 
		maxHP: 17, 
		image: 'images/enemy/fang-bee.png', 
		actionAlgorithm: 'actionFangBee', 
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
	wolf:{
		name: 'ウルフ', 
		minHP: 46, 
		maxHP: 50, 
		image: 'images/enemy/wolf.png', 
		actionAlgorithm: 'actionWolf', 
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
	silverWolf:{
		name: 'シルヴァーウルフ', 
		minHP: 46, 
		maxHP: 50, 
		image: 'images/enemy/wolf_silver.png', 
		actionAlgorithm: 'actionSilverWolf', 
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
	rafflesia:{
		name: 'ラフレシア', 
		minHP: 22, 
		maxHP: 28, 
		image: 'images/enemy/rafflesia.png', 
		actionAlgorithm: 'actionRafflesia', 
		actionFirst: 'rafflesiaFirst',
		currentStatus:{
			remainHP: 0, 
			maxHP: 0, 
			block: 0,
			status: [], 
			nextAction: {},
			divId: ''
		}
	},
};
const bossEnemyList = {
	kinggold:{name: 'キングゴールドスライム', minHP: 8, maxHP: 12, image: 'images/enemy/kinggold.gif', currentStatus:{remainHP: 0, maxHP: 0, status: [], nextAction: ''}},
};
const testEnemies = [
	{weight: 100, enemies: [enemyList.test, enemyList.test]},
];
const easyEnemiesPool = [
	{weight: 25, enemies: [enemyList.slime, enemyList.silver]},
	{weight: 25, enemies: [enemyList.monk]},
	{weight: 25, enemies: [enemyList.putesis]},
	{weight: 25, enemies: [enemyList.bee, enemyList.fangBee]},
];
const strongEnemiesPool = [
	{weight: 12500, enemies: [enemyList.wolf]},
	{weight: 6250, enemies: [enemyList.wolf]},
	{weight: 3100, enemies: [enemyList.bee, enemyList.bee, enemyList.bee]},
	{weight: 3100, enemies: [enemyList.bee, enemyList.bee, enemyList.fangBee]},
	{weight: 3100, enemies: [enemyList.bee, enemyList.fangBee, enemyList.fangBee]},
	{weight: 3100, enemies: [enemyList.fangBee, enemyList.fangBee, enemyList.fangBee]},
	{weight: 12500, enemies: [enemyList.rafflesia, enemyList.rafflesia]},
	{weight: 6250, enemies: [enemyList.slime, enemyList.battleSlime, enemyList.slime, enemyList.battleSlime, enemyList.slime]},

];
const eliteEnemiesPool = [

];
const Enemies = [

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
/* エネミーアクション関数
/*****************************************************************************/
function enemyAttack(enemyInfo, playerInfo, animationFlag){
	// アタック〇点ダメージ
	enemyAttack(
		enemyInfo, 
		playerInfo, 
		animationFlag, 
		enemyInfo.currentStatus.nextAction.damage,
	);
}
function enemyAttackAndBlock(enemyInfo, playerInfo, animationFlag){
	// アタック+ブロック
	enemyAttack(
		enemyInfo, 
		playerInfo, 
		animationFlag, 
		enemyInfo.currentStatus.nextAction.damage,
	);
	enemyBlock(
		enemyInfo, 
		animationFlag, 
		enemyInfo.currentStatus.nextAction.block,
	);
}
function enemyAttackAndBuff(enemyInfo, playerInfo, animationFlag){
	// デバフ+アタック
	enemyAttack(
		enemyInfo, 
		playerInfo, 
		animationFlag, 
		enemyInfo.currentStatus.nextAction.damage,
	);
	enemyStatusBuf(
		enemyInfo, 
		animationFlag, 
		enemyInfo.currentStatus.nextAction.buffType, 
		enemyInfo.currentStatus.nextAction.buff,
	);
}
function enemyAttackAndDebuf(enemyInfo, playerInfo, animationFlag){
	// デバフ+アタック
	enemyAttack(
		enemyInfo, 
		playerInfo, 
		animationFlag, 
		enemyInfo.currentStatus.nextAction.damage,
	);
	enemyStatusDebuf(
		enemyInfo, 
		playerInfo, 
		animationFlag, 
		enemyInfo.currentStatus.nextAction.debuffType, 
		enemyInfo.currentStatus.nextAction.debuff,
	);
}
function enemyBlock(enemyInfo, playerInfo, animationFlag){
	// ブロック
	enemyBlock(
		enemyInfo, 
		animationFlag, 
		enemyInfo.currentStatus.nextAction.block,
	);
}
function enemyBlockAndBuff(enemyInfo, playerInfo, animationFlag){
	// バフ+ブロック
	enemyBlock(
		enemyInfo, 
		animationFlag, 
		enemyInfo.currentStatus.nextAction.block,
	);
	enemyStatusBuf(
		enemyInfo, 
		animationFlag, 
		enemyInfo.currentStatus.nextAction.buffType, 
		enemyInfo.currentStatus.nextAction.buff,
	);
}
function enemyBlockAndDebuf(enemyInfo, playerInfo, animationFlag){
	// デバフ+ブロック
	enemyBlock(
		enemyInfo, 
		animationFlag, 
		enemyInfo.currentStatus.nextAction.block,
	);
	enemyStatusDebuf(
		enemyInfo, 
		playerInfo, 
		animationFlag, 
		enemyInfo.currentStatus.nextAction.debuffType, 
		enemyInfo.currentStatus.nextAction.debuff,
	);
}
function enemyBuff(enemyInfo, playerInfo, animationFlag){
	// バフ
	enemyStatusBuf(
		enemyInfo, 
		animationFlag, 
		enemyInfo.currentStatus.nextAction.buffType, 
		enemyInfo.currentStatus.nextAction.buff,
	);
}
function enemyDebuf(enemyInfo, playerInfo, animationFlag){
	// デバフ
	enemyStatusDebuf(
		enemyInfo, 
		playerInfo, 
		animationFlag, 
		enemyInfo.currentStatus.nextAction.debuffType, 
		enemyInfo.currentStatus.nextAction.debuff,
	);
}
function enemyBuffAndDebuf(enemyInfo, playerInfo, animationFlag){
	// バフ+デバフ
	enemyStatusBuf(
		enemyInfo, 
		animationFlag, 
		enemyInfo.currentStatus.nextAction.buffType, 
		enemyInfo.currentStatus.nextAction.buff,
	);
	enemyStatusDebuf(
		enemyInfo, 
		playerInfo, 
		animationFlag, 
		enemyInfo.currentStatus.nextAction.debuffType, 
		enemyInfo.currentStatus.nextAction.debuff,
	);
}
function enemyCardDebuf(enemyInfo, playerInfo, animationFlag){
	// 粘液1枚を捨て札に加える
	const cards = [];
	for(let i=0; i < enemyInfo.currentStatus.nextAction.abnormal; i++){
		cards.push(abnormalCardList[enemyInfo.currentStatus.nextAction.abnormalType]);
	}
	enemyCardDebuf(animationFlag, cards);
}
function enemyAttackAndCardDebuf(enemyInfo, playerInfo, animationFlag){
	// 8ダメージ+粘液1枚を捨て札に加える
	enemyAttack(
		enemyInfo, 
		playerInfo, 
		animationFlag, 
		enemyInfo.currentStatus.nextAction.damage
	);
	const cards = [];
	for(let i=0; i < enemyInfo.currentStatus.nextAction.abnormal; i++){
		cards.push(abnormalCardList[enemyInfo.currentStatus.nextAction.abnormalType]);
	}
	enemyCardDebuf(animationFlag, cards);
}
/*****************************************************************************/
/* エネミーアクション
/*****************************************************************************/
function actionTEST(){
	const actions = [
		{
			weight: 30, 
			omen:{
				name: 'Test1', 
				func: 'enemyAttackAndDebuf', 
				type: enemyActionType.debuffAndAttack, 
				damage: 6, 
				debuff: 2, 
				debuffType: 'poison',
				image: 'images/enemy/omen/poison.png'
			}
		},
		{
			weight: 30, 
			omen:{
				name: 'Test2', 
				func: 'enemyDebuf', 
				type: enemyActionType.debuff, 
				damage: 0, 
				debuff: 2, 
				debuffType: 'defenseDown',
				image: 'images/enemy/omen/Weakness2.png'
			}
		},
		{
			weight: 30, 
			omen:{
				name: 'Test3', 
				func: 'enemyBuff', 
				type: enemyActionType.buff, 
				damage: 0, 
				buff: 2, 
				buffType: 'attackUp',
				image: 'images/enemy/omen/Power1.png'
			}
		},
		{
			weight: 30, 
			omen:{
				name: 'Test3', 
				func: 'enemyAttackAndCardDebuf', 
				type: enemyActionType.debuffAndAttack, 
				damage: 8, 
				abnormal: 2, 
				abnormalType: 'Mucus',
				image: 'images/enemy/omen/poison.png'
			}
		},
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

function testFirst(enemyInfo, playerInfo, animationFlag){
	// 開始時効果
	enemyStatusBuf(enemyInfo, animationFlag, 'defenseUp', 2);
}
/*******************************************************/
/* スライム
/*******************************************************/
function actionSlime(){
	console.log('actionSlime');
	const actions = [
		{	weight: 0, 
			omen:{
				name: '攻撃', 
				func: 'enemyAttack', 
				type: enemyActionType.attack, 
				damage: 6, 
				image: 'images/enemy/omen/Attack.png'
			}
		},
		{	weight: 0, 
			omen:{
				name: '舐める', 
				func: 'enemyDebuf', 
				type: enemyActionType.debuff, 
				damage: 0, 
				debuff: 2, 
				debuffType: 'weak', 
				image: 'images/enemy/omen/Weakness1.png'
			}
		},
	];
	if (0 === currentTurn % 2){
		return actions[0].omen;
	} else {
		// 1ターン目に必ず使用する。
		return actions[1].omen;
	}
}

/*******************************************************/
/* バトルスライム
/*******************************************************/
function actionBattleSlime(){
	console.log('actionBattleSlime');
	const actions = [
		{	weight: 0, 
			omen:{
				name: '攻撃', 
				func: 'enemyAttack', 
				type: enemyActionType.attack, 
				damage: 5, 
				image: 'images/enemy/omen/Attack.png'
			}
		},
	];
	return actions[0].omen;
}

/*******************************************************/
/* シルバースライム
/*******************************************************/
function actionSilver(){
	console.log('actionSilver');
	const actions = [
		{	weight: 40, 
			omen:{
				name: '攻撃', 
				func: 'enemyAttack', 
				type: enemyActionType.attack, 
				damage: 10, 
				image: 'images/enemy/omen/Attack.png'
			}
		},
		{	weight: 30, 
			omen:{
				name: '腐食性の粘液', 
				func: 'enemyAttackAndCardDebuf', 
				type: enemyActionType.debuffAndAttack, 
				damage: 7, 
				abnormal: 1, 
				abnormalType: 'Mucus',
				image: 'images/enemy/omen/poison.png'
			}
		},
		{	weight: 30, 
			omen:{
				name: '舐める', 
				func: 'enemyDebuf', 
				type: enemyActionType.debuff, 
				damage: 0, 
				debuff: 2, 
				debuffType: 'weak',
				image: 'images/enemy/omen/Weakness1.png'
			}
		},
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

/*******************************************************/
/* モンク
/*******************************************************/
function actionMonk(){
	console.log('actionMonk');
	const actions = [
		{	weight: 0, 
			omen:{
				name: '精神統一', 
				func: 'enemyBuff', 
				type: enemyActionType.buff, 
				damage: 0, 
				buff: 3,
				buffType: 'spiritual',
				image: 'images/enemy/omen/Power2.png'
			}
		},
		{	weight: 40, 
			omen:{
				name: '攻撃', 
				func: 'enemyAttack', 
				type: enemyActionType.attack, 
				damage: 6, 
				image: 'images/enemy/omen/Attack.png'
			}
		},
	];
	if (currentTurn === 1){// 1ターン目に必ず使用する。
		return actions[0].omen;
	} else {
		return actions[1].omen;
	}
}

/*******************************************************/
/* プテシス
/*******************************************************/
function actionPutesis(){
	console.log('actionPutesis');
	const actions = [
		{	weight: 25, 
			omen:{name: '攻撃', 
				func: 'enemyAttack', 
				type: enemyActionType.attack, 
				damage: 11, 
				image: 'images/enemy/omen/Attack.png'
			}
		},
		{	weight: 30, 
			omen:{
				name: '攻撃+防御', 
				func: 'enemyAttackAndBlock', 
				type: enemyActionType.blockAndAttack, 
				damage: 7, 
				block: 5,
				image: 'images/enemy/omen/PowerAttack.png'
			}
		},
		{	weight: 45, 
			omen:{
				name: '怒号', 
				func: 'enemyBlockAndBuff', 
				type: enemyActionType.blockAndBuff, 
				damage: 0, 
				block: 6,
				buff: 3,
				buffType: 'attackUp',
				image: 'images/enemy/omen/Defense1.png'
			}
		},
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

/*******************************************************/
/* キラービー
/*******************************************************/
function actionBee(){
	console.log('actionBee');
	const actions = [
		{	weight: 75, 
			omen:{
				name: '攻撃', 
				func: 'enemyAttack', 
				type: enemyActionType.attack, 
				damage: 6, 
				image: 'images/enemy/omen/Attack.png'
			}
		},
		{	weight: 25, 
			omen:{
				name: '威嚇', 
				func: 'enemyDebuf', 
				type: enemyActionType.debuff, 
				damage: 0, 
				debuff: 2,
				debuffType: 'weak',
				image: 'images/enemy/omen/Weakness1.png'
			}
		},
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
/*******************************************************/
/* ファングビー
/*******************************************************/
function actionFangBee(){
	console.log('actionFangBee');
	const actions = [
		{	weight: 75, 
			omen:{
				name: '攻撃', 
				func: 'enemyAttack', 
				type: enemyActionType.attack, 
				damage: 6, 
				image: 'images/enemy/omen/Attack.png'
			}
		},
		{	weight: 25, 
			omen:{
				name: '成長', 
				func: 'enemyBuff', 
				type: enemyActionType.buff, 
				damage: 0, 
				buff: 3,
				buffType: 'attackUp',
				image: 'images/enemy/omen/Power1.png'
			}
		},
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

/*******************************************************/
/* ウルフ
/*******************************************************/
function actionWolf(){
	console.log('actionWolf');
	const actions = [
		{	weight: 60, 
			omen:{
				name: '攻撃', 
				func: 'enemyAttack', 
				type: enemyActionType.attack, 
				damage: 12, 
				image: 'images/enemy/omen/Attack.png'
			}
		},
		{	weight: 40, 
			omen:{
				name: '咆哮', 
				func: 'enemyAttackAndDebuf', 
				type: enemyActionType.debuffAndAttack, 
				damage: 7, 
				debuff: 2,
				debuffType: 'weak',
				image: 'images/enemy/omen/Break.png'
			}
		},
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

/*******************************************************/
/* シルヴァーウルフ
/*******************************************************/
function actionSilverWolf(){
	console.log('actionImp');
	const actions = [
		{	weight: 60, 
			omen:{name: '攻撃', 
				func: 'enemyAttack', 
				type: enemyActionType.attack, 
				damage: 13, 
				image: 'images/enemy/omen/Attack.png'
			}
		},
		{	weight: 40, 
			omen:{
				name: '咆哮', 
				func: 'enemyAttackAndDebuf', 
				type: enemyActionType.debuffAndAttack, 
				damage: 8, 
				debuff: 2,
				debuffType: 'defenseDown',
				image: 'images/enemy/omen/Break.png'
			}
		},
		{	weight: 40, 
			omen:{
				name: '包囲', 
				func: 'enemyAttackAndDebuf', 
				type: enemyActionType.debuff, 
				damage: 0, 
				debuff: 2,
				debuffType: 'paralysis',
				image: 'images/enemy/omen/Break.png'
			}
		},
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

/*******************************************************/
/* ラフレシア
/*******************************************************/
function actionRafflesia(){
	console.log('actionRafflesia');
	const actions = [
		{	weight: 60, 
			omen:{
				name: '攻撃', 
				func: 'rafflesiaAttack', 
				type: enemyActionType.attack, 
				damage: 6, 
				image: 'images/enemy/omen/Attack.png'
			}
		},
		{	weight: 40, 
			omen:{
				name: '成長', 
				func: 'rafflesiaSkill', 
				type: enemyActionType.buff, 
				damage: 0, 
				buff: 3,
				buffType: 'attackUp',
				image: 'images/enemy/omen/Power1.png'
			}
		},
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
function rafflesiaAttack(enemyInfo, playerInfo, animationFlag){
	// 12点ダメージ
	enemyAttack(enemyInfo, playerInfo, animationFlag, enemyInfo.currentStatus.nextAction.damage);
}
function rafflesiaSkill(enemyInfo, playerInfo, animationFlag){
	// 筋力3を自身に付与
	enemyStatusBuf(enemyInfo, animationFlag, bufStatus.attackUp, 3);
}
function rafflesiaFirst(enemyInfo, playerInfo, animationFlag){
	// 花粉2を自身に付与
	enemyStatusBuf(enemyInfo, animationFlag, bufStatus.pollen, 2);
}



/*************************************************************************************/
/* カードアクション用システム関数
/*************************************************************************************/
/*******************************************************/
/* 与ダメージ計算関数
/*******************************************************/
function calcEnemyDamage(attackCount, enemyInfo, playerInfo){
	let totalAttack = attackCount;
	// 倍率計算
	let magnification = 1;
	// 恐怖（攻撃力25%減少）
	const weakness = enemyInfo.currentStatus.status
		.find((status) => status.name === debufStatus.weak.name);
	if (weakness){magnification -= 0.25;}
	// 防御力ダウン（被ダメ50%上昇）
	const defenseUp = playerStatus.statuses
		.find((status) => status.name === bufStatus.defenseUp.name);
	if (defenseUp){magnification -= 0.5;}
	// 防御力アップ（被ダメ50%減少）
	const defenseDown = playerStatus.statuses
		.find((status) => status.name === debufStatus.defenseDown.name);
	if (defenseDown){magnification += 0.5;}
	totalAttack = Math.floor(totalAttack * magnification);
		
	// エネミーの状態異常の確認
	enemyInfo.currentStatus.status.forEach((status) => {
		switch(status.name){
			case bufStatus.attackUp.name:// 攻撃力アップ（攻撃ダメージが+X。）
				totalAttack += status.amount;
				break;
			case debufStatus.attackDown.name:// 攻撃力ダウン（攻撃ダメージがｰX。）
				if (totalAttack > status.amount){
					totalAttack -= status.amount;
				} else {
					totalAttack = 0;
				}
				break;
			default:
				break;
		}
	});
	// プレイヤーの状態異常を確認
	playerInfo.statuses.forEach((status) => {
		switch(status.name){
			// 「ダメージカット」の効果発動
			case bufStatus.damageCut.name:
				if (totalAttack > 0){
					totalAttack = 1;
				}
				break;
			default:
				break;
		}
	});
	return totalAttack;
}
/*******************************************************/
/* 与ダメージ関数
/*******************************************************/
function enemyAttack(enemyInfo, playerInfo, animationFlag, attackCount){
	let totalAttack = calcEnemyDamage(attackCount, enemyInfo, playerInfo);
	console.log(`totalAttack: ${totalAttack}`);
	const playerBlock = playerInfo.block;
	if(playerBlock > 0){
		if(playerBlock >= totalAttack){
			playerInfo.block -= totalAttack;
			totalAttack = 0;
		} else if (playerBlock < totalAttack){
			totalAttack -= playerBlock;
			playerInfo.block = 0;
		}
	}
	if(totalAttack > 0){
		damageHP(totalAttack, playerInfo);
	}
	// 「反射」の効果
	const reflection = playerInfo.statuses
		.find((status) => status.name === bufStatus.reflection.name);
	if(reflection){
		const playerReflection = reflection.amount;
		const enemyBlock = enemyInfo.currentStatus.block;
		if(enemyBlock > 0){
			if(enemyBlock >= playerReflection){
				enemyInfo.currentStatus.block -= playerReflection;
				playerReflection = 0;
			} else if (enemyBlock < playerReflection){
				playerReflection -= enemyBlock;
				enemyInfo.currentStatus.block = 0;
			}
		}
		enemyInfo.currentStatus.remainHP -= playerReflection;
	}
	// 「カウンター」の効果
	const counter = playerInfo.statuses
		.find((status) => status.name === bufStatus.counter.name);
	if(counter){
		const playerCounter = counter.amount;
		const enemyBlock = enemyInfo.currentStatus.block;
		if(enemyBlock > 0){
			if(enemyBlock >= playerCounter){
				enemyInfo.currentStatus.block -= playerCounter;
				playerCounter = 0;
			} else if (enemyBlock < playerCounter){
				playerCounter -= enemyBlock;
				enemyInfo.currentStatus.block = 0;
			}
		}
		enemyInfo.currentStatus.remainHP -= playerCounter;
	}
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
		if (status.name == bufStatus[buf].name) {
			status.amount += amountCount;
			sameBufFlag = true;
		}
	}
	const receivedBuf = {...bufStatus[buf]};
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
	// 弱体無効がついていれば、無効になる
	const mount = playerStatus.statuses
		.find((status) => status.name === bufStatus.mount.name);
	if (mount){
		mount.amount--;
		if (mount.amount <= 0) {
			playerStatus.statuses = playerStatus.statuses.filter((status) => {
				return status.amount > 0;
			});
		}
		return;
	}

	// すでに同じデバフがかかってないか確認
	// 同じデバフは累積する
	for (const status of playerInfo.statuses) {
		if (status.name == debufStatus[debuf].name) {
			status.amount += amountCount;
			sameDebufFlag = true;
		}
	}
	const receivedDebuf = {...debufStatus[debuf]};
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
/*******************************************************/
/* 状態異常カードを追加する関数
/*******************************************************/
function enemyCardDebuf(animationFlag, cards){
	if(!animationFlag){
		// カードを追加する
		cards.forEach((card) => {
			pushTrash(card);
		});
	} else {
		animatePlayerAddTrash(cards);
	}
}
