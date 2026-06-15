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
/* グローバル定数
/*****************************************************************************/
const fixedStageBoss = 0;
const fixedStageGift = 7;
const fixedStageNomal = 15;
const initialHandNum = 5;
const initialEnergy = 3;
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
const keyContinueMaxEnergy = 'Babu.Continue.Max.Energy';
const keyContinueTurn = 'Babu.Continue.Turn';
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
let maxEnergy = 3;
let discard = [];
let tmpArea =[];
let stackCard = [];
let currentTurn = 0;
let currnetEnemies = [];
let currnetTarget = {};