
/*****************************************************************************/
/* エネミー情報
/*****************************************************************************/
const enemyList = {
	test:{
		name: 'ういなす', 
		size: 'small',
		minHP: 50, 
		maxHP: 100, 
		image: 'images/enemy/small/uinasu.png',
		actionAlgorithm: 'actionTEST', 
		actionFirst: 'testFirst',
		currentStatus:{
			remainHP: 0, 
			maxHP: 0, 
			block: 0,
			status: [], 
			nextAction: {},
			actionCount: {},
			divId: ''
		}
	},
	bronze:{
		name: 'スライム', 
		size: 'small',
		minHP: 8, 
		maxHP: 12, 
		image: 'images/enemy/gifs/kingbronze.gif',
		actionAlgorithm: 'actionBronze', 
		actionFirst: '',
		currentStatus:{
			remainHP: 0, 
			maxHP: 0, 
			block: 0,
			status: [], 
			nextAction: {},
			actionCount: {},
			divId: ''
		}
	},
	bronze_battle:{
		name: 'スライム(バトル)', 
		size: 'small',
		minHP: 10, 
		maxHP: 14, 
		image: 'images/enemy/gifs/kingbronze.gif',
		actionAlgorithm: 'actionBronzeBattle', 
		actionFirst: '',
		currentStatus:{
			remainHP: 0, 
			maxHP: 0, 
			block: 0,
			status: [], 
			nextAction: {},
			actionCount: {},
			divId: ''
		}
	},
	silver:{
		name: 'シルバースライム', 
		size: 'small',
		minHP: 28, 
		maxHP: 32, 
		image: 'images/enemy/gifs/kingsilver.gif', 
		actionAlgorithm: 'actionSilver', 
		actionFirst: '',
		currentStatus:{
			remainHP: 0, 
			maxHP: 0, 
			block: 0,
			status: [], 
			nextAction: {},
			actionCount: {},
			divId: ''
		}
	},
	silver_battle:{
		name: 'シルバースライム(バトル)', 
		size: 'small',
		minHP: 28, 
		maxHP: 32, 
		image: 'images/enemy/gifs/kingsilver.gif', 
		actionAlgorithm: 'actionSilverBattle', 
		actionFirst: '',
		currentStatus:{
			remainHP: 0, 
			maxHP: 0, 
			block: 0,
			status: [], 
			nextAction: {},
			actionCount: {},
			divId: ''
		}
	},
	Minotaur:{
		name: 'ミノタウロス', 
		size: 'middle',
		minHP: 48, 
		maxHP: 55, 
		image: 'images/enemy/middle/Minotaur.png', 
		actionAlgorithm: 'actionMinotaur', 
		actionFirst: '',
		currentStatus:{
			remainHP: 0, 
			maxHP: 0, 
			block: 0,
			status: [], 
			nextAction: {},
			actionCount: {},
			divId: ''
		}
	},
	Crusher:{
		name: 'ランページシェル', 
		size: 'small',
		minHP: 40, 
		maxHP: 44, 
		image: 'images/enemy/small/Crab_Crusher.png', 
		actionAlgorithm: 'actionCrusher', 
		actionFirst: '',
		currentStatus:{
			remainHP: 0, 
			maxHP: 0, 
			block: 0,
			status: [], 
			nextAction: {},
			actionCount: {},
			divId: ''
		}
	},
	Skewerfish:{
		name: 'ミートミキサー', 
		size: 'small',
		minHP: 10, 
		maxHP: 17, 
		image: 'images/enemy/small/fish_Skewerfish.png', 
		actionAlgorithm: 'actionSkewerfish', 
		actionFirst: '',
		currentStatus:{
			remainHP: 0, 
			maxHP: 0, 
			block: 0,
			status: [], 
			nextAction: {},
			actionCount: {},
			divId: ''
		}
	},
	Rivacuda:{
		name: 'ウラザナ', 
		size: 'small',
		minHP: 10, 
		maxHP: 17, 
		image: 'images/enemy/small/fish_Rivacuda.png', 
		actionAlgorithm: 'actionRivacuda', 
		actionFirst: '',
		currentStatus:{
			remainHP: 0, 
			maxHP: 0, 
			block: 0,
			status: [], 
			nextAction: {},
			actionCount: {},
			divId: ''
		}
	},
	Skeleton:{
		name: 'スケルトン', 
		size: 'small',
		minHP: 46, 
		maxHP: 50, 
		image: 'images/enemy/small/Skeleton_Skeleton.png', 
		actionAlgorithm: 'actionSkeleton', 
		actionFirst: '',
		currentStatus:{
			remainHP: 0, 
			maxHP: 0, 
			block: 0,
			status: [], 
			nextAction: {},
			actionCount: {},
			divId: ''
		}
	},
	Purgatorian:{
		name: '辺獄の亡者', 
		size: 'small',
		minHP: 46, 
		maxHP: 50, 
		image: 'images/enemy/small/Skeleton_Purgatorian.png', 
		actionAlgorithm: 'actionPurgatorian', 
		actionFirst: '',
		currentStatus:{
			remainHP: 0, 
			maxHP: 0, 
			block: 0,
			status: [], 
			nextAction: {},
			actionCount: {
				onceAttackFlag: false,
			},
			divId: ''
		}
	},
	Sleepyhead:{
		name: 'スリーピィ', 
		size: 'small',
		minHP: 22, 
		maxHP: 28, 
		image: 'images/enemy/small/Sleepyhead.png', 
		actionAlgorithm: 'actionSleepyhead', 
		actionFirst: 'buffPollen',
		currentStatus:{
			remainHP: 0, 
			maxHP: 0, 
			block: 0,
			status: [], 
			nextAction: {},
			actionCount: {},
			divId: ''
		}
	},
	QueenBee:{
		name: 'クイーンビー', 
		size: 'middle',
		minHP: 82, 
		maxHP: 86, 
		image: 'images/enemy/tall/QueenBee.png', 
		actionAlgorithm: 'actionQueenBee', 
		actionFirst: '',
		currentStatus:{
			remainHP: 0, 
			maxHP: 0, 
			block: 0,
			status: [], 
			nextAction: {},
			actionCount: {},
			divId: ''
		}
	},
	Ikelos:{
		name: 'イケロス', 
		size: 'middle',
		minHP: 109, 
		maxHP: 111, 
		image: 'images/enemy/middle/Ikelos.png', 
		actionAlgorithm: 'actionIkelos', 
		actionFirst: 'buffBarrier',
		currentStatus:{
			remainHP: 0, 
			maxHP: 0, 
			block: 0,
			status: [], 
			nextAction: {},
			actionCount: {
				attackCount: 0,
				AwakeningFlag: false,
			},
			divId: ''
		}
	},
	despair:{
		name: '絶望', 
		size: 'small',
		minHP: 36, 
		maxHP: 42, 
		image: 'images/enemy/small/Despair.png', 
		actionAlgorithm: 'actionDespair', 
		actionFirst: 'buffMount',
		currentStatus:{
			remainHP: 0, 
			maxHP: 0, 
			block: 0,
			status: [], 
			nextAction: {},
			actionCount: {},
			divId: ''
		}
	},
	grief:{
		name: '悲哀', 
		size: 'small',
		minHP: 36, 
		maxHP: 42, 
		image: 'images/enemy/small/Grief.png', 
		actionAlgorithm: 'actionGrief', 
		actionFirst: 'buffMount',
		currentStatus:{
			remainHP: 0, 
			maxHP: 0, 
			block: 0,
			status: [], 
			nextAction: {},
			actionCount: {},
			divId: ''
		}
	},
	branwen:{
		name: 'ブランウェン', 
		size: 'tall',
		minHP: 20, 
		maxHP: 20, 
		image: 'images/enemy/tall/Branwen.png', 
		actionAlgorithm: 'actionBranwen', 
		actionFirst: 'buffFirstBranwen',
		currentStatus:{
			remainHP: 0, 
			maxHP: 0, 
			block: 0,
			status: [], 
			nextAction: {},
			actionCount: {},
			divId: ''
		}
	},
};
const bossEnemyList = {

};
const testEnemies = [
	{weight: 100, enemiesFunc(){
		return [enemyList.Ikelos];
	}},
];
const easyEnemiesPool = [
	{weight: 25000, enemiesFunc(){
		return enemyComboOrganize(
			[enemyList.silver, enemyList.silver_battle],
			[enemyList.bronze, enemyList.bronze_battle]
		);
	}},
	{weight: 25000, enemiesFunc(){return [enemyList.Minotaur]}},
	{weight: 25000, enemiesFunc(){return [enemyList.Crusher]}},
	{weight: 25000, enemiesFunc(){
		return enemyRandomOrganize(
			2, [enemyList.Skewerfish, enemyList.Rivacuda]
		);
	}},
];
const strongEnemiesPool = [
	{weight: 12500, enemiesFunc(){return [enemyList.Skeleton]} },
	{weight: 12500, 
		enemiesFunc(){
			return enemyRandomOrganize(
				3, [enemyList.Skewerfish, enemyList.Rivacuda]
			);
		}
	},
	{weight: 12500, enemiesFunc(){return [enemyList.Sleepyhead, enemyList.Sleepyhead]}},
	{weight: 9375, enemiesFunc(){
		return enemyComboOrganize(
			[enemyList.Skewerfish, enemyList.Rivacuda, enemyList.silver, enemyList.silver_battle], 
			[enemyList.Skeleton, enemyList.Purgatorian, enemyList.Minotaur]
		);
	}},
	{weight: 9375, enemiesFunc(){
		return enemyComboOrganize(
			[enemyList.Sleepyhead, enemyList.Crusher],
			[enemyList.Skewerfish, enemyList.Rivacuda, enemyList.silver, enemyList.silver_battle]
		);
	}},
	{weight: 6250, enemiesFunc(){return [enemyList.Purgatorian]}},
	{weight: 6250, enemiesFunc(){
		return [enemyList.bronze_battle, enemyList.bronze, enemyList.bronze_battle, enemyList.bronze, enemyList.bronze_battle]
	}},
];
const eliteEnemiesPool = [
	{weight: 1000, enemiesFunc(){return [enemyList.QueenBee];}},
	{weight: 1000, enemiesFunc(){
		return [enemyList.despair, enemyList.grief, enemyList.despair];
	}},
	{weight: 1000, enemiesFunc(){return [enemyList.Ikelos];}},
];

const enemyActionType = {
	none: '無し',
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
/* エネミー編成生成関数
/*****************************************************************************/
function enemyRandomOrganize(count, enemyArg = []){
	const enemiesOrganization = [];
	let randomIndex;
	for(let i = 0; i < count; i++){
		randomIndex = Math.floor(Math.random() * enemyArg.length);
		enemiesOrganization.push(enemyArg[randomIndex]);
	}
	return enemiesOrganization;
}
function enemyComboOrganize(firstEnemyArg = [], secondEnemyArg = []){
	const enemiesOrganization = [];
	let randomIndex;
	randomIndex = Math.floor(Math.random() * firstEnemyArg.length);
	enemiesOrganization.push(firstEnemyArg[randomIndex]);
	
	randomIndex = Math.floor(Math.random() * secondEnemyArg.length);
	enemiesOrganization.push(secondEnemyArg[randomIndex]);
	
	return enemiesOrganization;
}
/*****************************************************************************/
/* エネミーアクション関数
/*****************************************************************************/
function enemyAttack(enemyInfo, playerInfo, animationFlag){
	// アタック〇点ダメージ
	enemyActionAttack(
		enemyInfo, 
		playerInfo, 
		animationFlag, 
		enemyInfo.currentStatus.nextAction.damage,
	);
}
function enemyTimesAttack(enemyInfo, playerInfo, animationFlag){
	// アタック〇点ダメージを〇回
	for(let i = 0; i < enemyInfo.currentStatus.nextAction.count; i++){
		enemyActionAttack(
			enemyInfo, 
			playerInfo, 
			animationFlag, 
			enemyInfo.currentStatus.nextAction.damage,
		);
	}
}
function enemyAttackAndBlock(enemyInfo, playerInfo, animationFlag){
	// アタック+ブロック
	enemyActionAttack(
		enemyInfo, 
		playerInfo, 
		animationFlag, 
		enemyInfo.currentStatus.nextAction.damage,
	);
	enemyActionBlock(
		enemyInfo, 
		animationFlag, 
		enemyInfo.currentStatus.nextAction.block,
	);
}
function enemyAttackAndBuff(enemyInfo, playerInfo, animationFlag){
	// デバフ+アタック
	enemyActionAttack(
		enemyInfo, 
		playerInfo, 
		animationFlag, 
		enemyInfo.currentStatus.nextAction.damage,
	);
	enemyActionStatusBuf(
		enemyInfo, 
		animationFlag, 
		buffStatus[enemyInfo.currentStatus.nextAction.buffType], 
		enemyInfo.currentStatus.nextAction.buff,
	);
}
function enemyAttackAndDebuf(enemyInfo, playerInfo, animationFlag){
	// デバフ+アタック
	enemyActionAttack(
		enemyInfo, 
		playerInfo, 
		animationFlag, 
		enemyInfo.currentStatus.nextAction.damage,
	);
	enemyActionStatusDebuf(
		enemyInfo, 
		playerInfo, 
		animationFlag, 
		debuffStatus[enemyInfo.currentStatus.nextAction.debuffType], 
		enemyInfo.currentStatus.nextAction.debuff,
	);
}
function enemyBlock(enemyInfo, playerInfo, animationFlag){
	// ブロック
	enemyActionBlock(
		enemyInfo, 
		animationFlag, 
		enemyInfo.currentStatus.nextAction.block,
	);
}
function enemyBlockAndBuff(enemyInfo, playerInfo, animationFlag){
	// バフ+ブロック
	enemyActionBlock(
		enemyInfo, 
		animationFlag, 
		enemyInfo.currentStatus.nextAction.block,
	);
	enemyActionStatusBuf(
		enemyInfo, 
		animationFlag, 
		buffStatus[enemyInfo.currentStatus.nextAction.buffType], 
		enemyInfo.currentStatus.nextAction.buff,
	);
}
function enemyBlockAndDebuf(enemyInfo, playerInfo, animationFlag){
	// デバフ+ブロック
	enemyActionBlock(
		enemyInfo, 
		animationFlag, 
		enemyInfo.currentStatus.nextAction.block,
	);
	enemyActionStatusDebuf(
		enemyInfo, 
		playerInfo, 
		animationFlag, 
		debuffStatus[enemyInfo.currentStatus.nextAction.debuffType], 
		enemyInfo.currentStatus.nextAction.debuff,
	);
}
function enemyBuff(enemyInfo, playerInfo, animationFlag){
	// バフ
	enemyActionStatusBuf(
		enemyInfo, 
		animationFlag, 
		buffStatus[enemyInfo.currentStatus.nextAction.buffType], 
		enemyInfo.currentStatus.nextAction.buff,
	);
}
function enemyDoubleBuff(enemyInfo, playerInfo, animationFlag){
	// バフ
	enemyActionStatusBuf(
		enemyInfo, 
		animationFlag, 
		buffStatus[enemyInfo.currentStatus.nextAction.buffType1], 
		enemyInfo.currentStatus.nextAction.buff1,
	);
	enemyActionStatusBuf(
		enemyInfo, 
		animationFlag, 
		buffStatus[enemyInfo.currentStatus.nextAction.buffType2], 
		enemyInfo.currentStatus.nextAction.buff2,
	);
}
function enemyDebuf(enemyInfo, playerInfo, animationFlag){
	// デバフ
	enemyActionStatusDebuf(
		enemyInfo, 
		playerInfo, 
		animationFlag, 
		debuffStatus[enemyInfo.currentStatus.nextAction.debuffType], 
		enemyInfo.currentStatus.nextAction.debuff,
	);
}
function enemyDoubleDebuf(enemyInfo, playerInfo, animationFlag){
	// デバフ
	enemyActionStatusDebuf(
		enemyInfo, 
		playerInfo, 
		animationFlag, 
		debuffStatus[enemyInfo.currentStatus.nextAction.debuffType1], 
		enemyInfo.currentStatus.nextAction.debuff1,
	);
	enemyActionStatusDebuf(
		enemyInfo, 
		playerInfo, 
		animationFlag, 
		debuffStatus[enemyInfo.currentStatus.nextAction.debuffType2], 
		enemyInfo.currentStatus.nextAction.debuff2,
	);
}
function enemyBuffAndDebuf(enemyInfo, playerInfo, animationFlag){
	// バフ+デバフ
	enemyActionStatusBuf(
		enemyInfo, 
		animationFlag, 
		buffStatus[enemyInfo.currentStatus.nextAction.buffType], 
		enemyInfo.currentStatus.nextAction.buff,
	);
	enemyActionStatusDebuf(
		enemyInfo, 
		playerInfo, 
		animationFlag, 
		debuffStatus[enemyInfo.currentStatus.nextAction.debuffType], 
		enemyInfo.currentStatus.nextAction.debuff,
	);
}
function enemyCardDebuf(enemyInfo, playerInfo, animationFlag){
	// 粘液1枚を捨て札に加える
	const cards = [];
	for(let i=0; i < enemyInfo.currentStatus.nextAction.abnormal; i++){
		cards.push(abnormalCardList[enemyInfo.currentStatus.nextAction.abnormalType]);
	}
	enemyActionAbnormal(animationFlag, cards);
}
function enemyAttackAndCardDebuf(enemyInfo, playerInfo, animationFlag){
	// 8ダメージ+粘液1枚を捨て札に加える
	enemyActionAttack(
		enemyInfo, 
		playerInfo, 
		animationFlag, 
		enemyInfo.currentStatus.nextAction.damage
	);
	const cards = [];
	for(let i=0; i < enemyInfo.currentStatus.nextAction.abnormal; i++){
		cards.push(abnormalCardList[enemyInfo.currentStatus.nextAction.abnormalType]);
	}
	enemyActionAbnormal(animationFlag, cards);
}
/*****************************************************************************/
/* エネミーアクション
/*****************************************************************************/
function actionTEST(statuses){
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
	enemyActionStatusBuf(enemyInfo, animationFlag, buffStatus.defenseUp, 2);
}
/*******************************************************/
/* スライム
/*******************************************************/
function actionBronze(statuses){
	console.log('actionBronze');
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
/* スライム(バトル)
/*******************************************************/
function actionBronzeBattle(statuses){
	console.log('actionBronzeBattle');
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
function actionSilver(statuses){
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
/* シルバースライム(バトル)
/*******************************************************/
function actionSilverBattle(statuses){
	console.log('actionSilverBattle');
	const actions = [
		{	weight: 30, 
			omen:{
				name: '腐食性の粘液', 
				func: 'enemyAttackAndCardDebuf', 
				type: enemyActionType.debuffAndAttack, 
				damage: 8, 
				abnormal: 1, 
				abnormalType: 'Mucus',
				image: 'images/enemy/omen/poison.png'
			}
		},
		{	weight: 70, 
			omen:{
				name: '舐める', 
				func: 'enemyDebuf', 
				type: enemyActionType.debuff, 
				damage: 0, 
				debuff: 2, 
				debuffType: 'frail',
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
/* ミノタウロス
/*******************************************************/
function actionMinotaur(statuses){
	console.log('actionMinotaur');
	const actions = [
		{	weight: 0, 
			omen:{
				name: '激怒', 
				func: 'enemyBuff', 
				type: enemyActionType.buff, 
				damage: 0, 
				buff: 3,
				buffType: 'rage',
				image: 'images/enemy/omen/Power2.png'
			}
		},
		{	weight: 40, 
			omen:{
				name: '攻撃', 
				func: 'enemyAttack', 
				type: enemyActionType.attack, 
				damage: 3, 
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
/* ランページシェル
/*******************************************************/
function actionCrusher(statuses){
	console.log('actionCrusher');
	const actions = [
		{	weight: 25, 
			omen:{
				name: '攻撃', 
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
				name: '興奮', 
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
/* ミートミキサー
/*******************************************************/
function actionSkewerfish(statuses){
	console.log('actionSkewerfish');
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
/* ウラザナ
/*******************************************************/
function actionRivacuda(statuses){
	console.log('actionRivacuda');
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
/* スケルトン
/*******************************************************/
function actionSkeleton(statuses){
	console.log('actionSkeleton');
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
				name: '畏怖', 
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
/* 辺獄の亡者
/*******************************************************/
function actionPurgatorian(statuses){
	console.log('actionPurgatorian');
	console.log(statuses);
	const actions = [
		{	weight: 45, 
			omen:{name: '攻撃', 
				func: 'enemyAttack', 
				type: enemyActionType.attack, 
				damage: 13, 
				image: 'images/enemy/omen/Attack.png'
			}
		},
		{	weight: 55, 
			omen:{
				name: '畏怖', 
				func: 'enemyAttackAndDebuf', 
				type: enemyActionType.debuffAndAttack, 
				damage: 8, 
				debuff: 2,
				debuffType: 'defenseDown',
				image: 'images/enemy/omen/Break.png'
			}
		},
		{	weight: 25, 
			omen:{
				name: '凍結', 
				func: 'enemyAttackAndDebuf', 
				type: enemyActionType.debuff, 
				damage: 0, 
				debuff: 2,
				debuffType: 'frozen',
				image: 'images/enemy/omen/Break.png'
			}
		},
	];
	const selectActions = [];
	selectActions.push(actions[0]);
	selectActions.push(actions[1]);
	if(!statuses.actionCount.onceAttackFlag && currentTurn !== 1){
		selectActions.push(actions[2]);
	}
	console.log(statuses.actionCount);
	const totalWeight = selectActions.reduce((sum, item) => sum + item.weight, 0);
	let random = Math.floor(Math.random() * totalWeight);
	console.log(random);
	for (const action of selectActions) {
		if (random < action.weight) {
			if(action.omen.name === actions[2].omen.name){
				statuses.actionCount.onceAttackFlag = true;
			}
			return action.omen;
		}
		random -= action.weight;
	}
	return false;
}

/*******************************************************/
/* スリーピィ
/*******************************************************/
function actionSleepyhead(statuses){
	console.log('actionSleepyhead');
	const actions = [
		{	weight: 60, 
			omen:{
				name: '攻撃', 
				func: 'enemyAttack', 
				type: enemyActionType.attack, 
				damage: 6, 
				image: 'images/enemy/omen/Attack.png'
			}
		},
		{	weight: 40, 
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
function buffPollen(enemyInfo, playerInfo, animationFlag){
	// 花粉2を自身に付与
	enemyActionStatusBuf(enemyInfo, animationFlag, buffStatus.pollen, 2);
}
/*******************************************************/
/* クイーンビー
/*******************************************************/
function actionQueenBee(statuses){
	console.log('actionQueenBee');
	const actions = [
		{	weight: 0, 
			omen:{
				name: '戦略', 
				func: 'enemyBuff', 
				type: enemyActionType.buff, 
				damage: 0,
				buff: 3,
				buffType: 'strategy', 
				image: 'images/enemy/omen/Power1.png'
			}
		},
		{	weight: 67, 
			omen:{
				name: '攻撃', 
				func: 'enemyAttack', 
				type: enemyActionType.attack, 
				damage: 6, 
				image: 'images/enemy/omen/Attack.png'
			}
		},
		{	weight: 33, 
			omen:{
				name: '毒針', 
				func: 'enemyAttackAndDebuf', 
				type: enemyActionType.debuffAndAttack, 
				damage: 6, 
				debuff: 3,
				debuffType: 'defenseDown',
				image: 'images/enemy/omen/Break.png'
			}
		},
	];
	if(currentTurn === 1){
		return actions[0].omen;
	}
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
/* イケロス
/*******************************************************/
function actionIkelos(statuses){
	console.log('actionIkelos');
	const actions = [
		{	weight: 0, 
			omen:{
				name: '睡眠中', 
				func: '', 
				type: enemyActionType.none, 
				damage: 0,
				image: 'images/enemy/omen/Power2.png'
			}
		},
		{	weight: 67, 
			omen:{
				name: '攻撃', 
				func: 'enemyAttack', 
				type: enemyActionType.attack, 
				damage: 18, 
				image: 'images/enemy/omen/Attack.png'
			}
		},
		{	weight: 33, 
			omen:{
				name: '戦略', 
				func: 'enemyAttackAndDebuf', 
				type: enemyActionType.debuffAndAttack, 
				damage: 0, 
				debuff: 1,
				debuffType: 'attackDown',
				debuff: 1,
				debuffType: 'dexterityDown',
				image: 'images/enemy/omen/Break.png'
			}
		},
	];
	console.log(statuses);
	const sleep = statuses.status
		.find((status) => status.name === debuffStatus.sleep.name);
	if (sleep){
		return actions[0].omen;
	}
	if(statuses.actionCount.attackCount >= 2){
		statuses.actionCount.attackCount = 0;
		return actions[2].omen;
	}else{
		statuses.actionCount.attackCount++;
		return actions[1].omen;
	}
	return false;
}
function buffBarrier(enemyInfo, playerInfo, animationFlag){
	// ブロックを付与
	enemyActionBlock(
		enemyInfo, 
		animationFlag, 
		8,
	);
	// バリアを自身に付与
	enemyActionStatusBuf(enemyInfo, animationFlag, buffStatus.barrier, 8);
	// 睡眠を付与
	enemyActionStatusBuf(enemyInfo, animationFlag, debuffStatus.sleep, 3);
}
/*******************************************************/
/* 絶望・悲哀
/*******************************************************/
const emotionsActions = [
	{	weight: 0, 
		omen:{
			name: '攻撃', 
			func: 'enemyAttack', 
			type: enemyActionType.attack, 
			damage: 9, 
			image: 'images/enemy/omen/Attack.png'
		}
	},
	{	weight: 0, 
		omen:{
			name: 'めまい', 
			func: 'enemyCardDebuf', 
			type: enemyActionType.debuff, 
			damage: 0, 
			abnormal: 2, 
			abnormalType: 'Dizziness',
			image: 'images/enemy/omen/Weakness1.png'
		}
	},
];
function actionDespair(statuses){
	console.log('actionDespair');

	if (0 === currentTurn % 2){
		return emotionsActions[0].omen;
	} else {
		// 1ターン目に必ず使用する。
		return emotionsActions[1].omen;
	}
	return false;
}
function actionGrief(statuses){
	console.log('actionGrief');

	if (0 === currentTurn % 2){
		return emotionsActions[1].omen;
	} else {
		// 1ターン目に必ず使用する。
		return emotionsActions[0].omen;
	}
	return false;
}
function buffMount(enemyInfo, playerInfo, animationFlag){
	// 弱体無効1を自身に付与
	enemyActionStatusBuf(enemyInfo, animationFlag, buffStatus.mount, 1);
}
/*******************************************************/
/* ブランウェン
/*******************************************************/
function actionBranwen(statuses){
	console.log('actionBranwen');
	const actions = [
		{	weight: 0, 
			omen:{
				name: '防御', 
				func: 'enemyBlock', 
				type: enemyActionType.block, 
				damage: 0, 
				block: 25,
				image: 'images/enemy/omen/Defense1.png'
			}
		},
		{	weight: 0, 
			omen:{
				name: '攻撃+戦略', 
				func: 'enemyAttackAndDebuf', 
				type: enemyActionType.debuffAndAttack, 
				damage: 10,
				debuff: 5,
				debuffType: 'frail',
				image: 'images/enemy/omen/Break.png'
			}
		},
		{	weight: 0, 
			omen:{
				name: '攻撃', 
				func: 'enemyTimesAttack', 
				type: enemyActionType.attack, 
				damage: 10, 
				count: 2,
				image: 'images/enemy/omen/Attack.png'
			}
		},
		{	weight: 0, 
			omen:{
				name: '攻撃+防御', 
				func: 'enemyAttackAndBlock', 
				type: enemyActionType.blockAndAttack, 
				damage: 10, 
				block: 15,
				image: 'images/enemy/omen/Break.png'
			}
		},
	];
	if(currentTurn === 1){
		return actions[0].omen;
	}
	if(currentTurn === 2){
		return actions[1].omen;
	}
	if (0 === currentTurn % 2){
		// 偶数ターン
		return emotionsActions[3].omen;
	} else {
		// 奇数ターン
		return emotionsActions[2].omen;
	}
	return false;
}
function buffFirstBranwen(enemyInfo, playerInfo, animationFlag){
	//ブロック40を自身に付与
	enemyActionBlock(
		enemyInfo, 
		animationFlag, 
		40,
	);
	// 弱体無効1を自身に付与
	enemyActionStatusBuf(enemyInfo, animationFlag, buffStatus.mount, 3);
	// 英雄の盾を自身に付与
	enemyActionStatusBuf(enemyInfo, animationFlag, buffStatus.tears, '');

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
		.find((status) => status.name === debuffStatus.weak.name);
	if (weakness){magnification -= 0.25;}
	// 防御力ダウン（被ダメ50%上昇）
	const defenseUp = playerStatus.statuses
		.find((status) => status.name === buffStatus.defenseUp.name);
	if (defenseUp){magnification -= 0.5;}
	// 防御力アップ（被ダメ50%減少）
	const defenseDown = playerStatus.statuses
		.find((status) => status.name === debuffStatus.defenseDown.name);
	if (defenseDown){magnification += 0.5;}
	totalAttack = Math.floor(totalAttack * magnification);
		
	// エネミーの状態異常の確認
	enemyInfo.currentStatus.status.forEach((status) => {
		switch(status.name){
			case buffStatus.attackUp.name:// 攻撃力アップ（攻撃ダメージが+X。）
				totalAttack += status.amount;
				break;
			case debuffStatus.attackDown.name:// 攻撃力ダウン（攻撃ダメージがｰX。）
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
			case buffStatus.damageCut.name:
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
function enemyActionAttack(enemyInfo, playerInfo, animationFlag, attackCount){
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
		damageHP(totalAttack, playerInfo, animationFlag);
	}
	// 「反射」の効果
	const reflection = playerInfo.statuses
		.find((status) => status.name === buffStatus.reflection.name);
	if(reflection){
		let playerReflection = reflection.amount;
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
		.find((status) => status.name === buffStatus.counter.name);
	if(counter){
		let playerCounter = counter.amount;
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
	
	// アーティファクトの効果
	const Counter = myArtifacts.find((artifact) => 
		artifact.name === normalArtifact.Counter.name);
	if(Counter){
		let playerCounter = Counter.amount.damage;
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
function enemyActionBlock(enemyInfo, animationFlag, blockCount){
	enemyInfo.currentStatus.block += blockCount;
	if(animationFlag){
		animateEnemyBlocked(enemyInfo);
	}
}
/*******************************************************/
/* バフを与える関数
/*******************************************************/
function enemyActionStatusBuf(enemyInfo, animationFlag, buf, amountCount){
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
function enemyActionStatusDebuf(enemyInfo, playerInfo, animationFlag, debuf, amountCount){
	let sameDebufFlag = false;
	// 弱体無効がついていれば、無効になる
	const mount = playerStatus.statuses
		.find((status) => status.name === buffStatus.mount.name);
	if (mount){
		mount.amount--;
		playerStatus.statuses = playerStatus.statuses.filter((status) => {
			return status.amount > 0;
		});
		return;
	}

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
/*******************************************************/
/* 状態異常カードを追加する関数
/*******************************************************/
function enemyActionAbnormal(animationFlag, cards){
	if(!animationFlag){
		// カードを追加する
		cards.forEach((card) => {
			pushTrash(card);
		});
	} else {
		animatePlayerAddTrash(cards);
	}
}
