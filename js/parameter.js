/*****************************************************************************/
/* ステージ情報
/*****************************************************************************/
const stageLevel = {boss: 3, special: 2, normal:1}
const stages = {
	boss: { name: 'ボス戦闘', weight: 0, image: 'images/map/boss.png' },
	gift: { name: '宝箱', weight: 0, image: 'images/map/gift.jpg' },
	shop: { name: 'ショップ', weight: 5, image: 'images/map/shop.png' },
	rest: { name: '休憩', weight: 12, image: 'images/map/rest.png' },
	event: { name: 'イベント', weight: 22, image: 'images/map/event.png' },
	special: { name: '強敵戦闘', weight: 8, image: 'images/map/special.png' },
	nomal: { name: '通常戦闘', weight: 53, image: 'images/map/nomal.png' },
};

/*****************************************************************************/
/* プレイヤー情報
/*****************************************************************************/
const selectCharacter = {
	gran:	{name: 'グラン', maxHP: 80, money: 99}, 
	djeeta:	{name: 'ジータ', maxHP: 75, money: 99}
};
const cardClass = {gran: 'グラン', djeeta: 'ジータ', normal: '無色'};
const rarity = {starter: '初期', common: 'レア', uncommon: 'スーパーレア', rare: 'SSレア'};
const type = {attack: 'アタック', skill: 'スキル', power: 'パワー', rare: 'レア'};
const granCardList = {
	Wide: {name: 'ワイドブレード', class: cardClass.gran, cost: 1, rarity: rarity.starter, type: type.attack, effect: '6のダメージを与える。', func: 'effectStrike', image:'images/card/gran_Wide.jpg' },
	Powerswing: {name: 'パワースウィング', class: cardClass.gran, cost: 2, rarity: rarity.starter, type: type.attack, effect: '8のダメージを与える。弱体2を与える。', func: 'effectPowerswing', image:'images/card/gran_Powerswing.jpg'},
	Defense: {name: '防御', class: cardClass.gran, cost: 1, rarity: rarity.starter, type: type.skill, effect: '5ブロックを得る。', func: 'effectDefense', image:'images/card/gran_Defense.jpg'},
};
const djeetaCardList = {
	Wide: {name: 'ワイドブレード', class: cardClass.djeeta, cost: 1, rarity: rarity.starter, type: type.attack, effect: '6のダメージを与える。', func: 'effectStrike', image:'images/card/djeeta_Wide.jpg'},
	Fast: {name: 'ファストスライサー', class: cardClass.djeeta, cost: 0, rarity: rarity.starter, type: type.attack, effect: '3ダメージを与える。脱力1を与える。', func: 'effectFast', image:'images/card/djeeta_Fast.jpg'},
	Defense: {name: '防御', class: cardClass.djeeta, cost: 1, rarity: rarity.starter, type: type.skill, effect: '5ブロックを得る。', func: 'effectDefense', image:'images/card/djeeta_Defense.jpg'},
	Pulverizer: {name: 'パルバライザー', class: cardClass.djeeta, cost: 1, rarity: rarity.starter, type: type.skill, effect: '8ブロックを得る。カードを1枚捨てる。', func: 'effectPulverizer', image:'images/card/djeeta_Pulverizer.jpg'}
};


/*****************************************************************************/
/* エネミー情報
/*****************************************************************************/
const enemyList = {
	slime:{
		name: 'スライム', 
		minHP: 8, 
		maxHP: 12, 
		image: 'images/enemy/kingbronze.gif', 
		action: [
			{
				weight: 25,
				func: '',
				damage: 6,
				image, ''
			}
		],
		currentStatus:{
			remainHP: 0, 
			maxHP: 0, 
			status: [], 
			nextAction: ''
		}
	},
	silver:{name: 'シルバースライム', minHP: 28, maxHP: 32,  image: 'images/enemy/kingsilver.gif', currentStatus:{remainHP: 0, maxHP: 0, status: [], nextAction: ''}},
	golem:{name: 'ゴーレム', minHP: 48, maxHP: 55, image: 'images/enemy/golem.png', currentStatus:{remainHP: 0, maxHP: 0, status: [], nextAction: ''}},
	zombie:{name: 'ゾンビ', minHP: 40, maxHP: 44, image: 'images/enemy/zombie.png', currentStatus:{remainHP: 0, maxHP: 0, status: [], nextAction: ''}},
	imp:{name: 'インプ', minHP: 10, maxHP: 17, image: 'images/enemy/imp.png', currentStatus:{remainHP: 0, maxHP: 0, status: [], nextAction: ''}},

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
/* グローバル定数
/*****************************************************************************/
const fixedStageBoss = 0;
const fixedStageGift = 7;
const fixedStageNomal = 15;
const initialHandNum = 5;
const drowWatiTime = 400;
const initialMap = {row: 16, column: 5};
const mapColumns = 11;
const mapRows = 16;
/*****************************************************************************/
/* ローカルストレージのキー
/*****************************************************************************/
const keySelectChara = 'Babu.Select.Chara';
const keyContinueFlag = 'Babu.Continue.Flag';// 途中プレイがあるかのフラグ
const keyContinueBattleFlag = 'Babu.Continue.Battle.Flag';// 途中戦闘があるかのフラグ
const keyContinueRemainHp = 'Babu.Continue.Remain.HP';
const keyContinueMaxHp = 'Babu.Continue.MAX.HP';
const keyContinueMoney = 'Babu.Continue.Remain.Money';
const keyContinueMap = 'Babu.Continue.Map';
const keyContinueCurrentMap = 'Babu.Continue.Current.Map';
const keyContinueDeck = 'Babu.Continue.Deck';
const keyContinueOriginalDeck = 'Babu.Continue.Original.Deck';
const keyContinueHand = 'Babu.Continue.Hand';
const keyContinueTrash = 'Babu.Continue.Trash';
const keyContinueDiscard = 'Babu.Continue.Discard';
const keyContinueTemporary = 'Babu.Continue.Temporary';
const keyContinueStack = 'Babu.Continue.Stack';
const keyContinueEnergy = 'Babu.Continue.Energy';
const keyContinueEnemy = 'Babu.Continue.Enemy';





/*****************************************************************************/
/* グローバル変数
/*****************************************************************************/
let myRemainHP = 0;
let myMaxHP = 0;
let myMoney = 0;
// アウトゲーム
let currnetMap = {};
let map = [];
let myOriginalDeck = [];
const mapHistory = [];
// インゲーム
let myDeck = [];
let myHand = [];
let myTrash = [];
let myEnergy = 0;
let discard = [];
let tmpArea =[];
let stackCard = [];
let currentTurn = 0;
let currnetEnemies = [];
let currnetTarget = {};