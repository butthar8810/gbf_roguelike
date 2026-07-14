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
const buffStatus = {
	//永続
	attackUp: {name: '攻撃力アップ', amount: '',effect: '攻撃ダメージが+{X}。',image: 'images/status/status_1001.png'},
	dexterity: {name: '回避率アップ', amount: '', effect: 'カードから得られるブロックが+{X}。', image: 'images/status/status_1566.png'},
	counter: {name: 'カウンター', amount: '', effect: '攻撃を受けるたび、攻撃を行った敵に{X}ダメージを与える。', image: 'images/status/status_1541.png'},
	bahamut: {name: '創世の翼', amount: '', effect: 'ブロックを得るたび、ランダムな敵に{X}ダメージを与える。', image: 'images/status/status_7467.png'},
	compensation: {name: '血の代償', amount: '', effect: 'カードのプレイによってHPが失われるたび、攻撃力アップ{X}を得る。', image: 'images/status/status_6568.png'},
	barrage: {name: '弾幕', amount: '', effect: '状態異常を引くたび、敵全体に{X}ダメージを与える。', image: 'images/status/status_14311.png'},
	adversity: {name: '逆境', amount: '', effect: '状態異常を引くたび、カードを{X}枚引く。', image: 'images/status/status_1181.png'},
	painless: {name: '無痛', amount: '', effect: 'カードを廃棄するたび、{X}ブロックを得る。', image: 'images/status/status_6083.png'},
	eye: {name: '慧眼', amount: '', effect: 'カードを廃棄するたび、カードを{X}枚引く。', image: 'images/status/status_7122.png'},
	energized: {name: '活性化', amount: '', effect: 'ターン開始時、{X}エナジーを得る。', image: 'images/status/status_1638.png'},
	hero: {name: '英雄の盾', amount: '', effect: 'ターン開始時にブロック値を失わない。', image: 'images/status/status_7343.png'},
	end: {name: '果ての力', amount: '', effect: 'ターン開始時に、攻撃力アップ{X}を得る。', image: 'images/status/status_7980_1.png'},
	hrunting: {name: 'フルンティング', amount: '', effect: 'ターン開始時に、HPを1失いカードを{X}枚引く。', image: 'images/status/status_3170.png'},
	grudge: {name: '怨念', amount: '', effect: 'ターン開始時に、敵全体に毒{X}を与える。', image: 'images/status/status_1527.png'},
	barrier: {name: 'バリア', amount: '', effect: 'ターン終了時、{X}ブロックを得る。', image: 'images/status/status_1314.png'},
	regeneration: {name: '再生', amount: '', effect: 'ターン終了時、HPを{X}回復する。', image: 'images/status/status_2.png'},
	madness: {name: '狂化', amount: '', effect: 'ターン終了時にHPを1失い、すべての敵に{X}ダメージを与える。', image: 'images/status/status_3097.png'},
	sacred: {name: '禁聖', amount: '', effect: '「スキル」がエナジーを消費しない。プレイした「スキル」は廃棄する。', image: 'images/status/status_7758.png'},
	hitRate: {name: '命中率アップ', amount: '', effect: 'ナイフが{X}の追加ダメージを与える。', image: 'images/status/status_1057.png'},
	infinite: {name: '無限の飛刃', amount: '', effect: 'ターン開始時に、ナイフを{X}枚手札に加える。', image: 'images/status/status_7769_1.png'},
	repair: {name: '再利用', amount: '', effect: 'ターン終了時に、カードを{X}枚保留する。', image: 'images/status/status_1609.png'},
	caitSea: {name: 'ケット・シー', amount: '', effect: 'ターン開始時に、カードを{X}枚引き、{X}枚捨てる。', image: 'images/status/status_3030.png'},
	Bonus: {name: 'パラゾニウム', amount: '', effect: 'カードを1枚プレイするたび、敵全体に{X}ダメージを与える。', image: 'images/status/status_6993.png'},
	lamentation: {name: '調停の翼', amount: '', effect: 'カードを1枚プレイするたび、{X}ブロックを得る。', image: 'images/status/status_1534_6.png'},
	lich: {name: '不死王の刃', amount: '', effect: '「アタック」でダメージを与えるたび、毒{X}を与える。', image: 'images/status/status_3126.png'},
	// ターン制
	defenseUp: {name: '防御力アップ', amount: '', effect: 'アタックで受けるダメージが50%減少。{X}ターン有効。',image: 'images/status/status_1019.png'},
	Ereshkigal: {name: 'エレシュキガル', amount: '', effect: 'ターン開始時、ダブルアタックを得る。{X}ターン有効。', image: 'images/status/status_1413_8.png'},
	doubleDamage: {name: 'ダブルアタック', amount: '', effect: 'アタックのダメージが2倍になる。1ターン有効', image: 'images/status/status_7608.png'},
	damageCut: {name: 'ダメージカット', amount: '', effect: 'すべてのダメージとHPを失う効果を1に軽減する。{X}ターン有効。', image: 'images/status/status_1019_0_1000.png'},
	// 1ターン有効
	reflection: {name: '反射', amount: '', effect: '攻撃を受けるたび、攻撃した敵に{X}ダメージを与える。1ターン有効。', image: 'images/status/status_1062_3.png'},
	wind: {name: '風の障壁', amount: '', effect: '「アタック」をプレイするたび{X}ブロックを得る。1ターン有効。', image: 'images/status/status_6132_4.png'},
	attackCombo: {name: '連撃アップ(アタック)', amount: '', effect: '次の{X}枚の「アタック」を2回プレイする。1ターン有効。', image: 'images/status/status_1004.png'},
	skillCombo: {name: '連撃アップ(スキル)', amount: '', effect: '次の{X}枚の「スキル」を2回プレイする。1ターン有効。', image: 'images/status/status_7980_3.png'},
	activity: {name: '活性', amount: '', effect: '次のターン開始時、{X}エナジーを得る。1ターン有効', image: 'images/status/status_2.png'},
	lightWall: {name: '光の盾', amount: '', effect: 'ターン開始時にブロック値を失わない。1ターン有効', image: 'images/status/status_7343.png'},
	nextTurnBlock: {name: '次ターンブロック', amount: '', effect: '次ターン開始時、ブロック{X}を得る。1ターン有効', image: 'images/status/status_1075.png'},
	nextTurnDraw: {name: 'ヘイスト', amount: '', effect: 'ターン開始時、{X}枚のカードを引く。1ターン有効。', image: 'images/status/status_1058.png'},
	reproduction: {name: '複製', amount: '', effect: '次のターン開始時、選択したカードを{X}枚手札に加える。1ターン有効', image: 'images/status/status_6393.png'},

	//実装待ち
	mount: {name: '弱体無効', amount: '', effect: 'デバフを{X}回無効化。', image: 'images/status/status_1003.png'},
	afterImage: {name: '残像', amount: '', effect: 'カードを1枚プレイするたび、{X}ブロックを得る。', image: 'images/status/status_1566.png'},
	invincible: {name: '無敵', amount: '', effect: 'このターン中に減らせるHPは、残り{X}。', image: 'images/status/status_62.png'},

	// エネミー専用
	rage: {name: '激怒', amount: '', effect: 'ターン終了時、攻撃力アップ{X}を得る。', image: 'images/status/status_9999_2.png'},
	pollen: {name: '花粉', amount: '', effect: '死亡時、プレイヤーに防御力ダウン{X}を与える。', image: 'images/status/status_7176.png'},
	strategy: {name: '戦略', amount: '', effect: '「スキル」を1枚プレイするたび、筋力{X}を得る', image: 'images/status/status_6022_1.png'},
	tears: {name: '涙の護り', amount: '', effect: 'ターン開始時にブロック値を失わない。', image: 'images/status/status_7343.png'},

};
// デバフ
const debuffStatus = {
	// 永続
	attackDown: {name: '攻撃力ダウン', amount: '', effect: '攻撃ダメージが-{X}。', image: 'images/status/status_1010.png'},
	dexterityDown: {name: '回避率ダウン', amount: '', effect: 'カードから得られるブロックが-{X}。', image: 'images/status/status_1566_2.png'},
	autophagy: {name: '自壊因子', amount: '', effect: 'この敵が死亡した時、その最大HPの{X}倍に等しいダメージを敵全体に与える。', image: 'images/status/status_3096.png'},
	slowing: {name: '鈍化', amount: '', effect: 'ターン終了時に回避率ダウン1を得る。', image: 'images/status/status_3270.png'},
	// ターン制
	defenseDown: {name: '防御力ダウン', amount: '', effect: 'アタックで受けるダメージが50%増加。{X}ターン有効。', image: 'images/status/status_1020.png'},
	frail: {name: '脆弱化', amount: '', effect: 'カードから得られるブロックが25%減少。{X}ターン有効。', image: 'images/status/status_1011.png'},
	weak: {name: '恐怖', amount: '', effect: 'アタックで与えるダメージが25%減少。{X}ターン有効。', image: 'images/status/status_1374.png'},
	poison: {name: '毒', amount: '', effect: 'ターン開始時、HPを{X}失い、毒が1減少。', image: 'images/status/status_8.png'},
	frozen: {name: '凍結', amount: '', effect: '{X}ターンの間「アタック」をプレイできない。', image: 'images/status/status_7297.png'},
	sleep: {name: '眠り', amount: '', effect: 'この敵はまだ目覚めていない…', image: 'images/status/status_6327.png'},
	// 1ターン有効
	noDraw: {name: 'ショート', amount: '', effect: 'ターン終了時までカードが引けない。1ターン有効', image: 'images/status/status_1472.png'},
	invalidAttackUp: {name: '攻UP削除', amount: '',effect: 'ターン終了時、攻撃力アップを{X}下げる',image: 'images/status/status_9999.png'},
	invalidAttackDown: {name: '攻Down削除', amount: '',effect: 'ターン終了時、攻撃力ダウンを{X}下げる',image: 'images/status/status_9999_2.png'},
	suffocation: {name: '窒息', amount: '', effect: 'カードをプレイするたび、HPを{X}失う。1ターン有効', image: 'images/status/status_1103.png'},
	fainting: {name: '気絶', amount: '', effect: '行動を制限された状態。1ターン有効', image: 'images/status/status_1412.png'},

	heat: {name: '灼熱', amount: '', effect: 'カードをプレイするたび、あなたは{X}ダメージを受ける。', image: 'images/status/status_83.png'},
	petrification: {name: '石化', amount: '', effect: '', image: 'images/status/status_1241.png'},
	noBlock: {name: 'ブロック不可', amount: '', effect: 'カードからブロックを得られない。{X}ターン有効。', image: 'images/status/status_6765.png'},
	Fading: {name: '死の宣告', amount: '', effect: '{X}ターン経過後、死亡する。', image: 'images/status/status_100.png'},
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
const keyContinueBattleCount = 'Babu.Continue.Battle.Count';
const keyContinueOriginalDeck = 'Babu.Continue.Original.Deck';
const keyContinueShopLineup = 'Babu.Continue.Shop.Lineup';
const keyContinueTemporary = 'Babu.Continue.Temporary';
// 戦闘用ストレージキー
const keyContinueDeck = 'Babu.Continue.Deck';
const keyContinueHand = 'Babu.Continue.Hand';
const keyContinueTrash = 'Babu.Continue.Trash';
const keyContinuePlayArea = 'Babu.Continue.Play.Area';
const keyContinueDiscard = 'Babu.Continue.Discard';
const keyContinueStack = 'Babu.Continue.Stack';
const keyContinueTurn = 'Babu.Continue.Turn';
const keyContinueEnemy = 'Babu.Continue.Enemy';
const keyContinueLevel = 'Babu.Continue.Level';
const keyContinueReward = 'Babu.Continue.Reward';
const keyContinueHold = 'Babu.Continue.hold';
const keyContinuePhase = 'Babu.Continue.Phase';


/*****************************************************************************/
/* フェイズ定数
/*****************************************************************************/
const continueFlag = {
	outGame: '道中',
	inGame: 'バトル中',
	restArea: '休憩エリア',
	shopArea: 'ショップエリア',
};

const phase = {
	action: 'アクションフェイズ',
	enemy: 'エネミーフェイズ',
	trash: 'トラッシュフェイズ', // 手札を捨て札に
	twoTrash: '2トラッシュフェイズ', // 手札を捨て札に
	threeTrash: '3トラッシュフェイズ', // 手札を捨て札に
	restore: 'レストアフェイズ', // 捨て札をデッキに
	reuseToHand: 'リユースフェイズ', // 廃棄札を手札に
	upGrade: 'アップグレードフェイズ', // 手札をアップグレード
	unshiftDeck: 'アンシフトデッキフェイズ', // 手札をデッキに
	unshiftDeckAndZero: 'アンシフトデッキアンドゼロフェイズ', // 手札をデッキに
	reproductionToHand: '複製フェイズ', // 複製を手札に
	twoReproductionToHand: '2枚複製フェイズ', // 複製を手札に
	reproductionToNextTurn: 'ミラーフェイズ', // 複製をミラーエリアに
	repair: 'リペアフェイズ', // 保留カード選定
	caitSea: 'ケットシーフェイズ', // 捨てるカード選定
};

/*****************************************************************************/
/* グローバル変数
/*****************************************************************************/
let myArtifact = [];
let tmpArea =[];
// アウトゲーム
let currentMap = {};
let map = [];
let myOriginalDeck = [];
const mapHistory = [];
let battleCount = 0;
// インゲーム
const playerStatus = {
	remainHP: 0,
	maxHP: 0,
	money: 0,
	remainEnergy: 0,
	maxEnergy: 3,
	block: 0,
	statuses: [],
	playerCount: {
		deleteServiceCount: 0,
		HPDownCount: 0,
		trashCountPerTurn: 0,
		playAttackPerTurn: 0,
	}
};
let myDeck = [];
let myHand = [];
let myTrash = [];
let playArea = [];
let discard = [];
let stackCards = [];
let holdCard =[];
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
let cardDiscardPromise = Promise.resolve();
let cardRestorePromise = Promise.resolve();
let cardShowPromise = Promise.resolve();
let cardAddHandPromise = Promise.resolve();
let playerAttackPromise = Promise.resolve();
let playerAbnormalityPromise = Promise.resolve();
let playerGetBlockPromise = Promise.resolve();
let enemyAttackPromise = Promise.resolve();
let enemyAbnormalityPromise = Promise.resolve();
let enemyGetBlockPromise = Promise.resolve();
let enemyDefeatedPromise = Promise.resolve();