/*****************************************************************************/
/* ステージ情報
/*****************************************************************************/
const stageLevel = {boss: 3, special: 2, normal:1, test: 0}
const rewardType = {money: 'money', card: 'card', artifact: 'artifact', boss: 'bossArtifact'}
const stages = {
	boss: { name: 'ボス戦闘', weight: 0, image: 'images/map/boss.png' },
	gift: { name: '宝箱', weight: 0, image: 'images/map/gift.png' },
	shop: { name: 'ショップ', weight: 5, image: 'images/map/shop.png' },
	rest: { name: '休憩', weight: 12, image: 'images/map/rest.png' },
	event: { name: 'イベント', weight: 22, image: 'images/map/event.png' },
	special: { name: '強敵戦闘', weight: 8, image: 'images/map/special.png' },
	normal: { name: '通常戦闘', weight: 53, image: 'images/map/normal.png' },
	test: { name: 'TEST戦闘', weight: 0, image: 'images/map/test.png' },
};
const battleArea = {
	stage1: 'images/stage1.jpg',
	stage2: 'images/stage2.jpg',
	stage3: 'images/stage3.jpg',
}


/*****************************************************************************/
/* ステータス情報
/*****************************************************************************/
// バフ
const buffStatus = {
	//永続
	attackUp: {id: '0001', name: '攻撃力アップ', amount: '',effect: '攻撃ダメージが+{X}。',image: 'images/status/status_1001.png'},
	dexterity: {id: '0002', name: '回避率アップ', amount: '', effect: 'カードから得られるブロックが+{X}。', image: 'images/status/status_1566.png'},
	counter: {id: '0003', name: 'カウンター', amount: '', effect: '攻撃を受けるたび、攻撃を行った敵に{X}ダメージを与える。', image: 'images/status/status_1541.png'},
	bahamut: {id: '0004', name: '創世の翼', amount: '', effect: 'ブロックを得るたび、ランダムな敵に{X}ダメージを与える。', image: 'images/status/status_7467.png'},
	compensation: {id: '0005', name: '血の代償', amount: '', effect: 'カードのプレイによってHPが失われるたび、攻撃力アップ{X}を得る。', image: 'images/status/status_6568.png'},
	barrage: {id: '0006', name: '弾幕', amount: '', effect: '状態異常を引くたび、敵全体に{X}ダメージを与える。', image: 'images/status/status_14311.png'},
	adversity: {id: '0007', name: '逆境', amount: '', effect: '状態異常を引くたび、カードを{X}枚引く。', image: 'images/status/status_1181.png'},
	painless: {id: '0008', name: '無痛', amount: '', effect: 'カードを廃棄するたび、{X}ブロックを得る。', image: 'images/status/status_6083.png'},
	eye: {id: '0009', name: '慧眼', amount: '', effect: 'カードを廃棄するたび、カードを{X}枚引く。', image: 'images/status/status_7122.png'},
	energized: {id: '0010', name: '活性化', amount: '', effect: 'ターン開始時、{X}エナジーを得る。', image: 'images/status/status_1638.png'},
	hero: {id: '0011', name: '英雄の盾', amount: '', effect: 'ターン開始時にブロック値を失わない。', image: 'images/status/status_7343.png'},
	end: {id: '0012', name: '果ての力', amount: '', effect: 'ターン開始時に、攻撃力アップ{X}を得る。', image: 'images/status/status_7980_1.png'},
	hrunting: {id: '0013', name: 'フルンティング', amount: '', effect: 'ターン開始時に、HPを1失いカードを{X}枚引く。', image: 'images/status/status_3170.png'},
	grudge: {id: '0014', name: '怨念', amount: '', effect: 'ターン開始時に、敵全体に毒{X}を与える。', image: 'images/status/status_1527.png'},
	barrier: {id: '0015', name: 'バリア', amount: '', effect: 'ターン終了時、{X}ブロックを得る。', image: 'images/status/status_1314.png'},
	regeneration: {id: '0016', name: '再生', amount: '', effect: 'ターン終了時、HPを{X}回復する。', image: 'images/status/status_2.png'},
	madness: {id: '0017', name: '狂化', amount: '', effect: 'ターン終了時にHPを1失い、すべての敵に{X}ダメージを与える。', image: 'images/status/status_3097.png'},
	sacred: {id: '0018', name: '禁聖', amount: '', effect: '「スキル」がエナジーを消費しない。プレイした「スキル」は廃棄する。', image: 'images/status/status_7758.png'},
	hitRate: {id: '0019', name: '命中率アップ', amount: '', effect: 'ナイフが{X}の追加ダメージを与える。', image: 'images/status/status_1057.png'},
	infinite: {id: '0020', name: '無限の飛刃', amount: '', effect: 'ターン開始時に、ナイフを{X}枚手札に加える。', image: 'images/status/status_7769_1.png'},
	repair: {id: '0021', name: '再利用', amount: '', effect: 'ターン終了時に、カードを{X}枚保留する。', image: 'images/status/status_1609.png'},
	caitSea: {id: '0022', name: 'ケット・シー', amount: '', effect: 'ターン開始時に、カードを{X}枚引き、{X}枚捨てる。', image: 'images/status/status_3030.png'},
	Parazonium: {id: '0023', name: 'パラゾニウム', amount: '', effect: 'カードを1枚プレイするたび、敵全体に{X}ダメージを与える。', image: 'images/status/status_6993.png'},
	lamentation: {id: '0024', name: '調停の翼', amount: '', effect: 'カードを1枚プレイするたび、{X}ブロックを得る。', image: 'images/status/status_1534_6.png'},
	lich: {id: '0025', name: '不死王の刃', amount: '', effect: '「アタック」でダメージを与えるたび、毒{X}を与える。', image: 'images/status/status_3126.png'},
	mount: {id: '0026', name: '弱体無効', amount: '', effect: 'デバフを{X}回無効化。', image: 'images/status/status_1003.png'},
	extinction: {id: '0027', name: '滅尽', amount: '', effect: '敵にデバフを与えると、{X}ダメージを与える。', image: 'images/status/status_6826_1.png'},
	cosmic: {id: '0028', name: '均衡の秩序', amount: '', effect: 'このターンにカードを5枚プレイするたび、敵全体に{X}ダメージを与える。', image: 'images/status/status_3295.png'},
	moon: {id: '0029', name: '月の雫', amount: '', effect: 'ターン開始時、{X}枚のランダムな無色のカードを手札に加える。', image: 'images/status/status_6427.png'},
	deathcannon: {id: '0030', name: '砲撃', amount: '', effect: 'ターン開始時、山札の上から{X}枚のカードをプレイする。', image: 'images/status/status_6622.png'},
	firstAttackUp: {id: '0031', name: '気力', amount: '', effect: '次にプレイするアタックが{X}の追加ダメージを与える。', image: 'images/status/status_62.png'},
	armor: {id: '0032', name: 'ガード', amount: '', effect: 'ターン終了時、{X}ブロックを得る。攻撃によってHPを失うたび、ガードが1減少。', image: 'images/status/status_6549.png'},
	illusion: {id: '0033', name: '幻影', amount: '', effect: '次のHPの喪失を{X}回防ぐ。', image: 'images/status/status_1313.png'},
	// ターン制
	defenseUp: {id: '0101', name: '防御力アップ', amount: '', effect: 'アタックで受けるダメージが50%減少。{X}ターン有効。',image: 'images/status/status_1019.png'},
	Ereshkigal: {id: '0102', name: 'エレシュキガル', amount: '', effect: 'ターン開始時、ダブルアタックを得る。{X}ターン有効。', image: 'images/status/status_1413_8.png'},
	doubleDamage: {id: '0103', name: 'ダブルアタック', amount: '', effect: 'アタックのダメージが2倍になる。1ターン有効', image: 'images/status/status_7608.png'},
	damageCut: {id: '0104', name: 'ダメージカット', amount: '', effect: 'すべてのダメージとHPを失う効果を1に軽減する。{X}ターン有効。', image: 'images/status/status_1019_0_1000.png'},
	// 1ターン有効
	reflection: {id: '0201', name: '反射', amount: '', effect: '攻撃を受けるたび、攻撃した敵に{X}ダメージを与える。1ターン有効。', image: 'images/status/status_1062_3.png'},
	wind: {id: '0202', name: '風の障壁', amount: '', effect: '「アタック」をプレイするたび{X}ブロックを得る。1ターン有効。', image: 'images/status/status_6132_4.png'},
	attackCombo: {id: '0203', name: '連撃アップ(アタック)', amount: '', effect: '次の{X}枚の「アタック」を2回プレイする。1ターン有効。', image: 'images/status/status_1004.png'},
	skillCombo: {id: '0204', name: '連撃アップ(スキル)', amount: '', effect: '次の{X}枚の「スキル」を2回プレイする。1ターン有効。', image: 'images/status/status_7980_3.png'},
	activity: {id: '0205', name: '活性', amount: '', effect: '次のターン開始時、{X}エナジーを得る。1ターン有効', image: 'images/status/status_2.png'},
	lightWall: {id: '0206', name: '光の盾', amount: '', effect: 'ターン開始時にブロック値を失わない。1ターン有効', image: 'images/status/status_7343.png'},
	nextTurnBlock: {id: '0207', name: '次ターンブロック', amount: '', effect: '次ターン開始時、ブロック{X}を得る。1ターン有効', image: 'images/status/status_1075.png'},
	nextTurnDraw: {id: '0208', name: 'ヘイスト', amount: '', effect: 'ターン開始時、{X}枚のカードを引く。1ターン有効。', image: 'images/status/status_1058.png'},
	reproduction: {id: '0209', name: '複製', amount: '', effect: '次のターン開始時、選択したカードを{X}枚手札に加える。1ターン有効', image: 'images/status/status_6393.png'},
	// 固定3ターン
	bomb40: {id: '0300', name: '爆弾', amount: '', effect: '{X}ターン経過後、40ダメージを与える。', image: 'images/status/status_8210.png'},
	bomb50: {id: '0301', name: '爆弾', amount: '', effect: '{X}ターン経過後、50ダメージを与える。', image: 'images/status/status_8210.png'},

	//実装待ち
	afterImage: {id: '0042', name: '残像', amount: '', effect: 'カードを1枚プレイするたび、{X}ブロックを得る。', image: 'images/status/status_1566.png'},
	invincible: {id: '0043', name: '無敵', amount: '', effect: 'このターン中に減らせるHPは、残り{X}。', image: 'images/status/status_62.png'},

	// エネミー専用
	rage: {id: '0401', name: '激怒', amount: '', effect: 'ターン終了時、攻撃力アップ{X}を得る。', image: 'images/status/status_9999_2.png'},
	pollen: {id: '0402', name: '花粉', amount: '', effect: '死亡時、プレイヤーに防御力ダウン{X}を与える。', image: 'images/status/status_7176.png'},
	strategy: {id: '0403', name: '戦略', amount: '', effect: '「スキル」を1枚プレイするたび、攻撃力アップ{X}を得る', image: 'images/status/status_6022_1.png'},
	tears: {id: '0404', name: '涙の護り', amount: '', effect: 'ターン開始時にブロック値を失わない。', image: 'images/status/status_7343.png'},

};
// デバフ
const debuffStatus = {
	// 永続
	attackDown: {id: '1001', name: '攻撃力ダウン', amount: '', effect: '攻撃ダメージが-{X}。', image: 'images/status/status_1010.png'},
	dexterityDown: {id: '1002', name: '回避率ダウン', amount: '', effect: 'カードから得られるブロックが-{X}。', image: 'images/status/status_1566_2.png'},
	autophagy: {id: '1003', name: '自壊因子', amount: '', effect: 'この敵が死亡した時、その最大HPの{X}倍に等しいダメージを敵全体に与える。', image: 'images/status/status_3096.png'},
	slowing: {id: '1004', name: '鈍化', amount: '', effect: 'ターン終了時に回避率ダウン1を得る。', image: 'images/status/status_3270.png'},

	// ターン制
	defenseDown: {id: '1101', name: '防御力ダウン', amount: '', effect: 'アタックで受けるダメージが50%増加。{X}ターン有効。', image: 'images/status/status_1020.png'},
	frail: {id: '1102', name: '脆弱化', amount: '', effect: 'カードから得られるブロックが25%減少。{X}ターン有効。', image: 'images/status/status_1011.png'},
	weak: {id: '1103', name: '恐怖', amount: '', effect: 'アタックで与えるダメージが25%減少。{X}ターン有効。', image: 'images/status/status_1374.png'},
	poison: {id: '1104', name: '毒', amount: '', effect: 'ターン開始時、HPを{X}失い、毒が1減少。', image: 'images/status/status_8.png'},
	frozen: {id: '1105', name: '凍結', amount: '', effect: '{X}ターンの間「アタック」をプレイできない。', image: 'images/status/status_7297.png'},
	sleep: {id: '1106', name: '眠り', amount: '', effect: 'この敵はまだ目覚めていない…', image: 'images/status/status_6327.png'},
	noBlock: {id: '1107', name: 'ブロック不可', amount: '', effect: 'カードからブロックを得られない。{X}ターン有効。', image: 'images/status/status_6765.png'},
	// 1ターン有効
	noDraw: {id: '1201', name: 'ショート', amount: '', effect: 'ターン終了時までカードが引けない。1ターン有効', image: 'images/status/status_1472.png'},
	invalidAttackUp: {id: '1202', name: '攻UP削除', amount: '',effect: 'ターン終了時、攻撃力アップを{X}下げる',image: 'images/status/status_9999.png'},
	invalidAttackDown: {id: '1203', name: '攻Down削除', amount: '',effect: 'ターン終了時、攻撃力ダウンを{X}下げる',image: 'images/status/status_9999_2.png'},
	suffocation: {id: '1204', name: '窒息', amount: '', effect: 'カードをプレイするたび、HPを{X}失う。1ターン有効', image: 'images/status/status_1103.png'},
	fainting: {id: '1205', name: '気絶', amount: '', effect: '行動を制限された状態。1ターン有効', image: 'images/status/status_1412.png'},
	//未実装
	confusion: {id: '1005', name: '混乱', amount: '', effect: 'カードを引くたび、そのコストはランダムに変化する。', image: 'images/status/status_1408.png'},
	heat: {id: '1017', name: '灼熱', amount: '', effect: 'カードをプレイするたび、あなたは{X}ダメージを受ける。', image: 'images/status/status_83.png'},
	petrification: {id: '1018', name: '石化', amount: '', effect: '', image: 'images/status/status_1241.png'},
	Fading: {id: '1019', name: '死の宣告', amount: '', effect: '{X}ターン経過後、死亡する。', image: 'images/status/status_100.png'},
};
// ステータス：志望
const dead = {id: '9999', name: '討伐', amount: 1, effect: '討伐状態',image: ''};



/*****************************************************************************/
/* プレイヤー情報
/*****************************************************************************/
const selectCharacter = {
	gran:	{name: 'グラン', maxHP: 80, money: 99}, 
	djeeta:	{name: 'ジータ', maxHP: 75, money: 9999}
};


/*****************************************************************************/
/* グローバル定数
/*****************************************************************************/
const fixedStageBoss = 0;
const fixedStageRest = 1;
const fixedStageGift = 7;
const fixedStageNormal = 15;
const initialHandNum = 5;
const initialEnergy = 3;
const initialMap = {row: 16, column: 5};
const maxHandCardNum = 10;
const mapColumns = 11;
const mapRows = 16;
const cardPlay = true;
const otherPaly = false;
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
const keyContinueTreasure = 'Babu.Continue.Treasure';
const keyContinueTemporary = 'Babu.Continue.Temporary';
const keyContinueArtifactPhase = 'Babu.Continue.Artifact.Phase';
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
const keyContinueChoice = 'Babu.Continue.Choice.Card';


/*****************************************************************************/
/* フェイズ定数
/*****************************************************************************/
const continueFlag = {
	outGame: '道中',
	inGame: 'バトル中',
	restArea: '休憩エリア',
	shopArea: 'ショップエリア',
	giftArea: '宝箱エリア',
};

const phase = {
	action: 'アクションフェイズ',
	enemy: 'エネミーフェイズ',
	trash: 'トラッシュフェイズ', // 手札を捨て札に
	twoTrash: '2トラッシュフェイズ', // 手札を捨て札に
	threeTrash: '3トラッシュフェイズ', // 手札を捨て札に
	selectTrashAndDraw: '好きなカードをトラッシュフェイズ', // 手札を捨て札に
	discard: '廃棄フェイズ',// 手札を廃棄
	threeDiscard: '3枚廃棄フェイズ',// 手札を廃棄
	fiveDiscard: '5枚廃棄フェイズ',// 手札を廃棄
	restore: 'レストアフェイズ', // 捨て札をデッキに
	reuseToHand: 'リユースフェイズ', // 廃棄札を手札に
	searchAttackToHand: 'アタックサーチフェイズ', // デッキから手札に
	searchSkillToHand: 'スキルサーチフェイズ', // デッキから手札に
	upGrade: 'アップグレードフェイズ', // 手札をアップグレード
	unshiftDeck: 'アンシフトデッキフェイズ', // 手札をデッキに
	unshiftDeckAndZero: 'アンシフトデッキアンドゼロフェイズ', // 手札をデッキに
	pushDeckAndZero: 'プッシュデッキアンドゼロフェイズ', // 手札をデッキに
	selectPushDeckAndZero: '好きなカードをプッシュデッキアンドゼロフェイズ', // 手札をデッキに
	reproductionToHand: '複製フェイズ', // 複製を手札に
	twoReproductionToHand: '2枚複製フェイズ', // 複製を手札に
	reproductionToNextTurn: 'ミラーフェイズ', // 複製をミラーエリアに
	repair: 'リペアフェイズ', // 保留カード選定
	caitSea: 'ケットシーフェイズ', // 捨てるカード選定
	choiceThreeCard: '3枚カード選択フェイズ' //3枚生成＆選択
};

const artifactPhase = {
	twoRemove: 'ナーヴマテリアルフェイズ',
	changeAndUpgrade: '祖なる欠片フェイズ',
	reproduction: '魔獄のエンブレムフェイズ',
}
/*****************************************************************************/
/* グローバル変数
/*****************************************************************************/
let myArtifacts = [];
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
	Count: {
		deleteServiceCount: 0,
		HPDownCount: 0,
		trashCountPerTurn: 0,
		playCardPerTurn: 0,
		playAttackPerTurn: 0,
		playSkillPerTurn: 0,
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
//カード処理用キュー
const moonQueue = [];
const cannonQueue = [];
const drawCardQueue = [];
//各種フラグ
let enemyAttackWaitFlag = false;
let allDefeatedFlag = false;
let attackTwiceFlag = false;
// promiseオブジェクト
let cardDrawPromise = Promise.resolve();
let cardTrashPromise = Promise.resolve();
let cardDiscardPromise = Promise.resolve();
let cardRestorePromise = Promise.resolve();
let cardShowPromise = Promise.resolve();
let cardAddHandPromise = Promise.resolve();
let cardAddTrashPromise = Promise.resolve();
let cardAddDeckPromise = Promise.resolve();
let playerAttackPromise = Promise.resolve();
let playerAbnormalityPromise = Promise.resolve();
let playerGetBlockPromise = Promise.resolve();
let enemyAttackPromise = Promise.resolve();
let enemyAbnormalityPromise = Promise.resolve();
let enemyGetBlockPromise = Promise.resolve();
let enemyDefeatedPromise = Promise.resolve();