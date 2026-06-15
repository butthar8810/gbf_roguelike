
/*****************************************************************************/
/* エネミー情報
/*****************************************************************************/
const enemyList = {
	slime:{
		name: 'スライム', 
		minHP: 8, 
		maxHP: 12, 
		image: 'images/enemy/kingbronze.gif',
		actionAlgorithm: 'actionSlime', 
		currentStatus:{
			remainHP: 0, 
			maxHP: 0, 
			status: [], 
			nextAction: ''
		}
	},
	silver:{
		name: 'シルバースライム', 
		minHP: 28, 
		maxHP: 32, 
		image: 'images/enemy/kingsilver.gif', 
		actionAlgorithm: 'actionSilver', 
		currentStatus:{
			remainHP: 0, 
			maxHP: 0, 
			status: [], 
			nextAction: ''
		}
	},
	golem:{
		name: 'ゴーレム', 
		minHP: 48, 
		maxHP: 55, 
		image: 'images/enemy/golem.png', 
		actionAlgorithm: 'actionGolem', 
		currentStatus:{
			remainHP: 0, 
			maxHP: 0, 
			status: [], 
			nextAction: ''
		}
	},
	zombie:{
		name: 'ゾンビ', 
		minHP: 40, 
		maxHP: 44, 
		image: 'images/enemy/zombie.png', 
		actionAlgorithm: 'actionZombie', 
		currentStatus:{
			remainHP: 0, 
			maxHP: 0, 
			status: [], 
			nextAction: ''
		}
	},
	imp:{
		name: 'インプ', 
		minHP: 10, 
		maxHP: 17, 
		image: 'images/enemy/imp.png', 
		actionAlgorithm: 'actionImp', 
		currentStatus:{
			remainHP: 0, 
			maxHP: 0, 
			status: [], 
			nextAction: ''
		}
	},

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
};
const bossEnemyList = {
	kinggold:{name: 'キングゴールドスライム', minHP: 8, maxHP: 12, image: 'images/enemy/kinggold.gif', currentStatus:{remainHP: 0, maxHP: 0, status: [], nextAction: ''}},
	juanitta:{name: 'ジュアニッタ', minHP: 8, maxHP: 12, image: 'images/enemy/juanitta.png', currentStatus:{remainHP: 0, maxHP: 0, status: [], nextAction: ''}},
};
const easyEnemies = [
	{weight: 25, enemies: [enemyList.slime, enemyList.silver]},
	{weight: 25, enemies: [enemyList.golem]},
	{weight: 25, enemies: [enemyList.zombie]},
	{weight: 25, enemies: [enemyList.imp, enemyList.imp]},
];
const strongEnemies = [

];

/*****************************************************************************/
/* エネミーアクション
/*****************************************************************************/
/*******************************************************/
/* スライム
/*******************************************************/
function actionSlime(){
	console.log('actionSlime');
	const actions = [
		{weight: 0, omen:{func: 'slimeAttack', damage: 6, image: 'images/enemy/omen/Attack.png'}},
		{weight: 0, omen:{func: 'slimeStrategy', damage: 0, image: 'images/enemy/omen/Weakness1.png'}},
	];
	if (0 === currentTurn % 2){// 1ターン目に必ず使用する。
		return actions[0].omen;
	} else {
		return actions[1].omen;
	}
}
function slimeAttack(){
	alert('6点ダメージ');
}
function slimeStrategy(){
	alert('脱力1を付与');
}
/*******************************************************/
/* シルバースライム
/*******************************************************/
function actionSilver(){
	console.log('actionSilver');
	const mt = new MersenneTwister();
	const actions = [
		{weight: 40, omen:{func: 'silverAttack', damage: 10, image: 'images/enemy/omen/Attack.png'}},
		{weight: 30, omen:{func: 'silverMucus', damage: 8, image: 'images/enemy/omen/poison.png'}},
		{weight: 30, omen:{func: 'silverStrategy', damage: 10, image: 'images/enemy/omen/Weakness1.png'}},
	];
	const totalWeight = actions.reduce((sum, item) => sum + item.weight, 0);
	let random = mt.nextInt(0, totalWeight);
	for (const action of actions) {
		if (random < action.weight) {
			return action.omen;
		}
		random -= action.weight;
	}
	return false;
}
function silverAttack(){
	alert('10点ダメージ');
}
function silverMucus(){
	alert('8ダメージ+粘液1枚を捨て札に加える');
}
function silverStrategy(){
	alert('脱力1を付与');
}
/*******************************************************/
/* ゴーレム
/*******************************************************/
function actionGolem(){
	console.log('actionGolem');
	const actions = [
		{weight: 0, omen:{func: 'golemSpell', damage: 0, image: 'images/enemy/omen/Power1.png'}},
		{weight: 0, omen:{func: 'golemAttack', damage: 6, image: 'images/enemy/omen/Attack.png'}},
	];
	if (currentTurn === 1){// 1ターン目に必ず使用する。
		return action.omen;
	} else {
		return action.omen;
	}
}
function golemSpell(){
	alert('強化を自身に付与');
}
function golemAttack(){
	alert('6点ダメージ');
}
/*******************************************************/
/* ゾンビ
/*******************************************************/
function actionZombie(){
	console.log('actionZombie');
	const mt = new MersenneTwister();
	const actions = [
		{weight: 25, omen:{func: 'zombieAttack', damage: 11, image: 'images/enemy/omen/Attack.png'}},
		{weight: 30, omen:{func: 'zombieAttackAndDefence', damage: 7, image: 'images/enemy/omen/PowerAttack.png'}},
		{weight: 45, omen:{func: 'zombieDefence', damage: 0, image: 'images/enemy/omen/Defence1.png'}},
	];
	const totalWeight = actions.reduce((sum, item) => sum + item.weight, 0);
	let random = mt.nextInt(0, totalWeight);
	for (const action of actions) {
		if (random < action.weight) {
			return action.omen;
		}
		random -= action.weight;
	}
	return false;
}
function zombieAttack(){
	alert('11点ダメージ');
}
function zombieAttackAndDefence(){
	alert('7点ダメージ+5ブロック');
}
function zombieDefence(){
	alert('6ブロック+筋力3');
}
/*******************************************************/
/* インプ
/*******************************************************/
function actionImp(){
	console.log('actionImp');
	const mt = new MersenneTwister();
	const actions = [
		{weight: 70, omen:{func: 'impAttack', damage: 6, image: 'images/enemy/omen/Attack.png'}},
		{weight: 15, omen:{func: 'impGrowth', damage: 0, image: 'images/enemy/omen/Power1.png'}},
		{weight: 15, omen:{func: 'impWeb', damage: 0, image: 'images/enemy/omen/Weakness1.png'}},
	];
	const totalWeight = actions.reduce((sum, item) => sum + item.weight, 0);
	let random = mt.nextInt(0, totalWeight);
	for (const action of actions) {
		if (random < action.weight) {
			return action.omen;
		}
		random -= action.weight;
	}
	return false;
}
function impAttack(){
	alert('6点ダメージ');
}
function impGrowth(){
	alert('筋力3を付与');
}
function impWeb(){
	alert('脱力2を付与');
}