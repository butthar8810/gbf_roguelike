/*****************************************************************************/
/* ステージ情報
/*****************************************************************************/
const stageLevel = {boss: 3, special: 2, normal:1, test: 0}
const stages = {
	boss: { name: 'ボス戦闘', weight: 0, image: 'images/map/boss.png' },
	gift: { name: '宝箱', weight: 0, image: 'images/map/gift.jpg' },
	shop: { name: 'ショップ', weight: 5, image: 'images/map/shop.png' },
	rest: { name: '休憩', weight: 12, image: 'images/map/rest.png' },
	event: { name: 'イベント', weight: 22, image: 'images/map/event.png' },
	special: { name: '強敵戦闘', weight: 8, image: 'images/map/special.png' },
	normal: { name: '通常戦闘', weight: 53, image: 'images/map/normal.png' },
	test: { name: 'TEST戦闘', weight: 0, image: 'images/map/test.png' },
};


/*****************************************************************************/
/* ステータス情報
/*****************************************************************************/
// バフ
const bufStatus = {
	attackUp: {name: '攻撃力アップ', amount: '',effect: '攻撃ダメージが+X。',image: 'images/status/status_1001.png'},
	defenseUp: {name: '防御力アップ', amount: '', effect: 'アタックで受けるダメージが50%減少。Xターン有効。',image: 'images/status/status_1019.png'},
	penetration: {name: '貫通', amount: '', effect: '攻撃ダメージがブロックを無視する。Xターン有効。', image: 'images/status/status_1240.png'},
	mount: {name: '弱体無効', amount: '', effect: 'デバフをX回無効化。', image: 'images/status/status_1003.png'},
	metallicize: {name: '金属化', amount: '', effect: 'ターン終了時、Xブロックを得る。', image: 'images/status/status_6549.png'},
	phantasmal: {name: '幻影', amount: '', effect: '次のターン開始時、ダブルダメージを得る。Xターン有効。', image: 'images/status/status_1313.png'},
	doubleDamage: {name: 'ダブルアタック', amount: '', effect: 'アタックのダメージが2倍になる。1ターン有効。', image: 'images/status/status_1004.png'},
	dexterity: {name: '敏捷性', amount: '', effect: 'カードから得られるブロックが+X。', image: 'images/status/status_1566.png'},
	regene: {name: '再生', amount: '', effect: 'ターン終了時、HPをX回復する。', image: 'images/status/status_2.png'},
	afterImage: {name: '残像', amount: '', effect: 'カードを1枚プレイするたび、Xブロックを得る。', image: 'images/status/status_1566.png'},
	invincible: {name: '無敵', amount: '', effect: 'このターン中に減らせるHPは、残りX。', image: 'images/status/status_62.png'},
	energized: {name: '活性', amount: '', effect: '次のターン、Xエナジーを得る。', image: 'images/status/status_1540.png'},
	drawCard: {name: 'ヘイスト', amount: '', effect: '次のターン開始時、X枚のカードを引く。', image: 'images/status/status_1058.png'},
	nextTurnBlock: {name: '次ターンブロック', amount: '', effect: '次ターン開始時、ブロックXを得る。', image: 'images/status/status_1075.png'},
};
// デバフ
const debufStatus = {
	attackDown: {name: '攻撃力ダウン', amount: '', effect: '攻撃ダメージが-X。', image: 'images/status/status_1010.png'},
	defenseDown: {name: '防御力ダウン', amount: '', effect: 'アタックで受けるダメージが50%増加。Xターン有効。', image: 'images/status/status_1020.png'},
	frail: {name: '脆弱化', amount: '', effect: 'カードから得られるブロックが25%減少。Xターン有効。', image: 'images/status/status_1011.png'},
	weak: {name: '脱力', amount: '', effect: 'アタックで与えるダメージが25%減少。Xターン有効。', image: 'images/status/status_1374.png'},
	poison: {name: '毒', amount: '', effect: 'ターン開始時、HPをX失い、毒が1減少。', image: 'images/status/status_8.png'},
	sleep: {name: '眠り', amount: '', effect: 'この敵はまだ目覚めていない…', image: 'images/status/status_1263.png'},
	paralysis: {name: '麻痺', amount: '', effect: '1ターンの間「アタック」をプレイできない。', image: 'images/status/status_102.png'},
	heat: {name: '灼熱', amount: '', effect: 'カードをプレイするたび、あなたはXダメージを受ける。', image: 'images/status/status_83.png'},
	petrification: {name: '石化', amount: '', effect: 'カードから得られるブロックが-X。', image: 'images/status/status_1241.png'},
	noBlock: {name: 'ブロック不可能', amount: '', effect: 'カードからブロックを得られない。Xターン有効。', image: 'images/status/status_6765.png'},
	Fading: {name: '死の宣告', amount: '', effect: 'Xターン経過後、死亡する。', image: 'images/status/status_100.png'},
};
// ステータス：志望
const dead = {name: '死亡', amount: 1, effect: '死亡状態',image: ''};



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


/*****************************************************************************/
/* グローバル定数
/*****************************************************************************/
const fixedStageBoss = 0;
const fixedStageGift = 7;
const fixedStageNormal = 15;
const initialHandNum = 5;
const initialEnergy = 3;
const initialMap = {row: 16, column: 5};
const mapColumns = 11;
const mapRows = 16;
const omenFadeInWaitTime = 1000;
const omenFadeOutWaitTime = 1000;
const moneyReward = {
	normal:{min: 10, max: 20},
	special:{min: 25, max: 35},
	boss:{min: 95, max: 105},
};
/*****************************************************************************/
/* ローカルストレージのキー
/*****************************************************************************/
const keySelectChara = 'Babu.Select.Chara';
const keyContinueFlag = 'Babu.Continue.Flag';// 途中プレイがあるかのフラグ
const keyContinueArtifact = 'Babu.Continue.Artifact';
const keyContinuePlayerStatus = 'Babu.Continue.Player.Status';
const keyContinueMap = 'Babu.Continue.Map';
const keyContinueCurrentMap = 'Babu.Continue.Current.Map';
const keyContinueOriginalDeck = 'Babu.Continue.Original.Deck';
// 戦闘用ストレージキー
const keyContinueBattleFlag = 'Babu.Continue.Battle.Flag';// 途中戦闘があるかのフラグ
const keyContinueDeck = 'Babu.Continue.Deck';
const keyContinueHand = 'Babu.Continue.Hand';
const keyContinueTrash = 'Babu.Continue.Trash';
const keyContinueDiscard = 'Babu.Continue.Discard';
const keyContinueTemporary = 'Babu.Continue.Temporary';
const keyContinueStack = 'Babu.Continue.Stack';
const keyContinueTurn = 'Babu.Continue.Turn';
const keyContinueEnemy = 'Babu.Continue.Enemy';
const keyContinueLevel = 'Babu.Continue.Level';
const keyContinueReward = 'Babu.Continue.Reward';
const keyContinuePhase = 'Babu.Continue.Phase';
const keyContinueDecide = 'Babu.Continue.Decide';


/*****************************************************************************/
/* フェイズ定数
/*****************************************************************************/
const phase = {
	action: 'アクションフェイズ',
	enemy: 'エネミーフェイズ',
	trash: 'トラッシュフェイズ', 
};

/*****************************************************************************/
/* グローバル変数
/*****************************************************************************/
let myArtifact = [];
// アウトゲーム
let currentMap = {};
let map = [];
let myOriginalDeck = [];
const mapHistory = [];
// インゲーム
const playerStatus = {
	remainHP: 0,
	maxHP: 0,
	money: 0,
	remainEnergy: 0,
	maxEnergy: 3,
	block: 0,
	statuses: [],
};
let myDeck = [];
let myHand = [];
let myTrash = [];
let discard = [];
let tmpArea =[];
let stackCard = [];
let myBlock = 0;
let currentTurn = 0;
let currentEnemies = [];
let currentTarget = {};
let currentLevel = -1;
let rewards = [];
let currentPhase = phase.action;
//各種フラグ
let enemyAttackWaitFlag = false;
let allDefeatedFlag = false;

// promiseオブジェクト
let cardDrawPromise = Promise.resolve();
let cardTrashPromise = Promise.resolve();
let playerAbnormalityPromise = Promise.resolve();
let playerGetBlockPromise = Promise.resolve();
let enemyAttackPromise = Promise.resolve();
let enemyAbnormalityPromise = Promise.resolve();
let enemyGetBlockPromise = Promise.resolve();
let enemyDefeatedPromise = Promise.resolve();

// 決定ボタン押下用関数
let decideFunc = '';