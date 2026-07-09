/*************************************************************************************/
/* 各カード情報
/*************************************************************************************/
const cardClass = {gran: 'グラン', djeeta: 'ジータ', common: '共通', abnormal: '状態異常'};
const rarity = {starter: '初期', common: 'レア', uncommon: 'スーパーレア', rare: 'SSレア'};
const type = {attack: 'アタック', skill: 'スキル', power: 'パワー', abnormal: '状態異常'};

/**************************************************************************/
/* グランカードリスト(強化前)
/**************************************************************************/
const granCardList = {
	/********************************************* スターター *********************************************/
	Wide: {
		No: 111001,
		key: 'Wide',
		name: 'ワイドブレード',
		class: cardClass.gran,
		rarity: rarity.starter,
		type: type.attack,
		func: 'effectAttack',
		image:'images/card/gran_Wide.jpg',
		effect: '{A}のダメージを与える。',
		amount: {
			cost: 1, 
			attack: 6,
			discard: false,
		}
	},
	PowerSwing: {
		No: 111002,
		key: 'PowerSwing',
		name: 'パワースウィング',
		class: cardClass.gran,
		rarity: rarity.starter,
		type: type.attack,
		func: 'effectAttackAndDebuff',
		image:'images/card/gran_PowerSwing.jpg',
		effect: '{A}のダメージを与える。防御力ダウン{D}を与える。',
		amount: {
			cost: 2,
			attack: 8,
			debuff: 2,
			debuffType: 'defenseDown',
			discard: false,
		}
	},
	Defense: {
		No: 112001,
		key: 'Defense',
		name: '防御',
		class: cardClass.gran,
		rarity: rarity.starter,
		type: type.skill,
		func: 'effectDefense',
		image:'images/card/gran_Defense.jpg',
		effect: '{B}ブロックを得る。',
		amount: {
			cost: 1, 
			block: 5,
			discard: false,
		}
	},
	/********************************************* コモン *********************************************/
	//なぎ払い
	Ichimonji: {
		No: 121001,
		key: 'Ichimonji',
		name: '一文字切り',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectAllAttack',
		image:'images/card/gran_Ichimonji.jpg',
		effect: '敵全体に{A}のダメージを与える。',
		amount: {
			cost: 1, 
			attack: 8,
			discard: false,
		}
	},
	//アイアンウェーブ
	Swing: {
		No: 121002,
		key: 'Swing',
		name: 'スウィング',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectAttackAndDefense',
		image:'images/card/gran_Swing.jpg',
		effect: '{B}のブロックを得る。{A}のダメージを与える。',
		amount: {
			cost: 1, 
			attack: 5,
			block: 5,
			discard: false,
		}
	},
	//クラッシュ
	Straight: {
		No: 121003,
		key: 'Straight',
		name: '正拳突き',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectAttack',
		image:'images/card/gran_Straight.jpg',
		effect: '手札が全て「アタック」の場合に使用可。{A}のダメージを与える。',
		amount: {
			conditions: 'conditionsStraight', // 発動条件
			cost: 0, 
			attack: 14,
			discard: false,
		}
	},
	//サンダークラップ
	Pain: {
		No: 121004,
		key: 'Pain',
		name: 'ペインメロディ',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectALLAttackAndDebuff',
		image:'images/card/gran_Pain.jpg',
		effect: '敵全体に{A}のダメージと防御力ダウン{D}を与える。',
		amount: {
			cost: 1, 
			attack: 4,
			debuff: 1,
			debuffType: 'defenseDown',
			discard: false,
		}
	},
	//ソードブーメラン
	ThreeBurst: {
		No: 121005,
		key: 'ThreeBurst',
		name: 'スリーバースト',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectTimesRandomAttack',
		image:'images/card/gran_ThreeBurst.jpg',
		effect: 'ランダムな敵に{A}のダメージを{C}回与える。',
		amount: {
			cost: 1, 
			attack: 3,
			count: 3,
			discard: false,
		}
	},
	//ツインストライク
	CrossSlash: {
		No: 121006,
		key: 'CrossSlash',
		name: 'クロススラッシュ',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectTimesAttack',
		image:'images/card/gran_CrossSlash.jpg',
		effect: '{A}のダメージを{C}回与える。',
		amount: {
			cost: 1, 
			attack: 5,
			count: 2,
			discard: false,
		}
	},
	//ヘッドバット
	Heavy: {
		No: 121007,
		key: 'Heavy',
		name: 'ヘヴィショット',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectAttackAndRestore',
		image:'images/card/gran_Heavy.jpg',
		effect: '{A}のダメージを与える。捨て札のカードを1枚山札の一番上に置く。',
		amount: {
			cost: 1, 
			attack: 9,
			discard: false,
		}
	},
	//ヘヴィブレード
	Dig: {
		No: 121008,
		key: 'Dig',
		name: 'クレイター・ディグ',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectAttackMagnification',
		image:'images/card/gran_Dig.jpg',
		effect: '{A}のダメージを与える。このカードには3倍の筋力ボーナスが適用される。',
		amount: {
			cost: 2, 
			attack: 14,
			magnification: 3,
			discard: false,
		}
	},
	//ポンメルストライク
	Fire: {
		No: 121009,
		key: 'Fire',
		name: 'ファイアグライド',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectAttackAndDraw',
		image:'images/card/gran_Fire.jpg',
		effect: '{A}のダメージを与える。カードを{Dr}枚引く。',
		amount: {
			cost: 1, 
			attack: 9,
			draw: 1,
			discard: false,
		}
	},
	//ラリアット
	BrainShake: {
		No: 121010,
		key: 'BrainShake',
		name: 'ブレインシェイク',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectAttackAndDebuff',
		image:'images/card/gran_BrainShake.jpg',
		effect: '{A}のダメージを与える。恐怖{D}を与える。',
		amount: {
			cost: 2,
			attack: 12,
			debuff: 2,
			debuffType: 'weak',
			discard: false,
		}
	},
	//ワイルドストライク
	Crash: {
		No: 121011,
		key: 'Crash',
		name: 'クラッシュブロー',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectAttackAndAbnormal',
		image:'images/card/gran_Crash.jpg',
		effect: '{A}のダメージを与える。負傷を{C}枚山札に加える。',
		amount: {
			cost: 1,
			attack: 12,
			abnormal: 'Injury',
			count: 1,
			discard: false,
		}
	},
	//怒り
	Bullet: {
		No: 121012,
		key: 'Bullet',
		name: '弾突拳',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectAttackAndReproduction',
		image:'images/card/gran_Bullet.jpg',
		effect: '{A}のダメージを与える。このカードの複製を捨て札に加える。',
		amount: {
			cost: 0,
			attack: 6,
			discard: false,
		}
	},
	//******************************スキル******************************//
	//フレックス
	Stimulant: {
		No: 122001,
		key: 'Stimulant',
		name: '興奮剤',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.skill,
		func: 'effectBuffAndDebuff',
		image:'images/card/gran_Stimulant.jpg',
		effect: '攻撃力アップ{F}を得る。ターン終了時に攻撃力アップ{D}を失う。',
		amount: {
			cost: 0,
			buff: 2,
			buffType: 'attackUp',
			debuff: 2,
			debuffType: 'invalidAttackUp',
			discard: false,
		}
	},
	//不屈の闘志
	Coat: {
		No: 122002,
		key: 'Coat',
		name: 'ナイトコート',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.skill,
		func: 'effectDefenseAndRandomDiscard',
		image:'images/card/gran_Coat.jpg',
		effect: '{B}ブロックを得る。手札をランダムで1枚廃棄する。',
		amount: {
			cost: 1,
			block: 7,
			discard: false,
		}
	},
	//受け流し
	Smokescreen: {
		No: 122003,
		key: 'Smokescreen',
		name: '白煙弾',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.skill,
		func: 'effectDefenseAndDraw',
		image:'images/card/gran_Smokescreen.jpg',
		effect: '{B}ブロックを得る。カードを{Dr}枚引く。',
		amount: {
			cost: 1,
			block: 8,
			draw: 1,
			discard: false,
		}
	},
	//武装
	Adrenal: {
		No: 122004,
		key: 'Adrenal',
		name: 'アドレナル',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.skill,
		func: 'effectDefenseAndUpGrade',
		image:'images/card/gran_Adrenal.jpg',
		effect: '{B}ブロックを得る。戦闘終了まで手札のカード1枚をアップグレードする。',
		amount: {
			cost: 1,
			block: 5,
			discard: false,
		}
	},
	//荒廃
	OverPower: {
		No: 122005,
		key: 'OverPower',
		name: 'オーバーパワー',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.skill,
		func: 'effectDeckTopPlay',
		image:'images/card/gran_OverPower.jpg',
		effect: '山札の一番上にあるカードをプレイする。そのカードを廃棄する。',
		amount: {
			cost: 1,
			discard: false,
		}
	},
	//雄叫び
	Bell: {
		No: 122006,
		key: 'Bell',
		name: '銅鈴の響',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.skill,
		func: 'effectDrawAndUnshiftDeck',
		image:'images/card/gran_Bell.jpg',
		effect: 'カードを{Dr}枚引く。手札のカードを山札の1番上に置く。廃棄。',
		amount: {
			cost: 0,
			draw: 1,
			discard: true,
		}
	},

	/********************************************* アンコモン ********************************************/
	//アッパーカット
	Melee: {
		No: 131001,
		key: 'Melee',
		name: 'メレーブロウ',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAttackAndDoubleDebuff',
		image:'images/card/gran_Melee.jpg',
		effect: '{A}のダメージを与える。恐怖{D1}と防御力ダウン{D2}を与える。',
		amount: {
			cost: 2, 
			attack: 13,
			debuff1: 1,
			debuffType1: 'weak',
			debuff2: 1,
			debuffType2: 'defenseDown',
			discard: false,
		}
	},
	//ドロップキック
	EarthKilling: {
		No: 131002,
		key: 'EarthKilling',
		name: '地烈斬',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAttackAndConditionsDefenseDown',
		image:'images/card/gran_EarthKilling.jpg',
		effect: '{A}のダメージを与える。敵が「防御力ダウン」を受けている場合は{E}エナジーを得てカードを{Dr}枚引く。',
		amount: {
			cost: 1, 
			attack: 5,
			energy: 1,
			draw: 1,
			discard: false,
		}
	},
	//ヘモキネシス
	Zetsusen: {
		No: 131003,
		key: 'Zetsusen',
		name: '絶閃',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAttackAndSelfHarm',
		image:'images/card/gran_Zetsusen.jpg',
		effect: 'HP{HP}を失う。{A}のダメージを与える。',
		amount: {
			cost: 1, 
			attack: 15,
			harm: 2,
			discard: false,
		}
	},
	//ランページ
	Reaper: {
		No: 131004,
		key: 'Reaper',
		name: 'ヴァイスリーパー',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAttackAndPowerUp',
		image:'images/card/gran_Reaper.jpg',
		effect: '{A}のダメージを与える。このカードを使用するたび、戦闘終了までダメージが5増加。',
		amount: {
			cost: 1,
			attack: 8,
			powerUp: 5,
			discard: false,
		}
	},
	//大虐殺
	Shrieking: {
		No: 131005,
		key: 'Shrieking',
		name: '断切の慟哭',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAttack',
		image:'images/card/gran_Shrieking.jpg',
		effect: 'エセリアル。{A}のダメージを与える。',
		amount: {
			cost: 2,
			attack: 20,
			discard: false,
			ethereal: true,
		}
	},
	//旋風刃
	Rush: {
		No: 131006,
		key: 'Rush',
		name: 'ラッシュスマイト',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAllAttackXTimes',
		image:'images/card/gran_Rush.jpg',
		effect: '敵全体に{A}のダメージをX回与える。',
		amount: {
			cost: 'X',
			variable: 0,
			attack: 5,
			discard: false,
		}
	},
	//無謀なる突進
	ArtilleryShell: {
		No: 131007,
		key: 'ArtilleryShell',
		name: '砲弾',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAttackAndAbnormal',
		image:'images/card/gran_ArtilleryShell.jpg',
		effect: '{A}のダメージを与える。めまいを{C}枚山札に加える。',
		amount: {
			cost: 0,
			attack: 7,
			abnormal: 'Dizziness',
			count: 1,
			discard: false,
		}
	},
	//猛撃
	Revision: {
		No: 131008,
		key: 'Revision',
		name: 'リビジョン',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectTimesAttack',
		image:'images/card/gran_Revision.jpg',
		effect: '{A}のダメージを{C}回与える。廃棄。',
		amount: {
			cost: 1,
			attack: 2,
			count: 4,
			discard: true,
		}
	},
	//血には血を
	Bloody: {
		No: 131009,
		key: 'Bloody',
		name: 'ブラッディ・ヴォウ',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAttack',
		image:'images/card/gran_Bloody.jpg',
		effect: '戦闘でHPを失うたび、使用コストが-1。{A}のダメージを与える。',
		amount: {
			cost: 4,
			originCost: 4,
			costChange:'changeCostDownEveryDamage',
			attack: 18,
			discard: false,
		}
	},
	//霊魂切断
	Tempest: {
		No: 131010,
		key: 'Tempest',
		name: 'テンペストブレード',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAttackAndNoAttackDiscard',
		image:'images/card/gran_Tempest.jpg',
		effect: '「アタック」以外の手札を廃棄する。{A}のダメージを与える。',
		amount: {
			cost: 2,
			attack: 16,
			discard: false,
		}
	},
	//******************************スキル******************************//
	//やせ我慢
	Mantle: {
		No: 132001,
		key: 'Mantle',
		name: '闇蕩外套',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectDefenseAndAbnormal',
		image:'images/card/gran_Mantle.jpg',
		effect: '負傷を{C}枚手札に加える。{B}ブロックを得る。',
		amount: {
			cost: 1, 
			block: 15,
			abnormal: 'Injury',
			count: 2,
			discard: false,
		}
	},
	//ゴーストアーマー
	Belief: {
		No: 132002,
		key: 'Belief',
		name: '戦士の信念',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectDefense',
		image:'images/card/gran_Belief.jpg',
		effect: 'エセリアル。{B}ブロックを得る。',
		amount: {
			cost: 1, 
			block: 10,
			discard: false,
			ethereal: true,
		}
	},
	//セカンドウィンド
	Helm: {
		No: 132003,
		key: 'Helm',
		name: 'ナイツヘルム',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectDefenseAndNoAttackDiscard',
		image:'images/card/gran_Helm.jpg',
		effect: '「アタック」以外の手札を廃棄する。この方法で廃棄したカードの枚数×{B}ブロックを得る。',
		amount: {
			cost: 1, 
			block: 5,
			discard: false,
		}
	},
	//バトルトランス
	Script: {
		No: 132004,
		key: 'Script',
		name: '探偵の台本',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectDrawAndDebuff',
		image:'images/card/gran_Script.jpg',
		effect: 'カードを{Dr}枚引く。このターン、追加でカードを引くことができない。',
		amount: {
			cost: 0, 
			draw: 3,
			debuff: '',
			debuffType: 'noDraw',
			discard: false,
		}
	},
	//二刀流
	HangedMan: {
		No: 132005,
		key: 'HangedMan',
		name: 'ザ・ハングドマン',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectReproductionToHand',
		image:'images/card/gran_HangedMan.jpg',
		effect: '手札にある「アタック」か「パワー」を複製し、1枚手札に加える。',
		amount: {
			cost: 1, 
			discard: false,
		}
	},
	//塹壕
	Scutum: {
		No: 132006,
		key: 'Scutum',
		name: 'スクトゥム',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectTwiceDefense',
		image:'images/card/gran_Scutum.jpg',
		effect: '現在のブロックの値を2倍にする。',
		amount: {
			cost: 2, 
			discard: false,
		}
	},
	//威嚇
	KillKnife: {
		No: 132007,
		key: 'KillKnife',
		name: 'キルナイフ',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectALLDebuff',
		image:'images/card/gran_KillKnife.jpg',
		effect: '敵全体に恐怖{D}を与える。廃棄。',
		amount: {
			cost: 0, 
			debuff: 1,
			debuffType: 'weak',
			discard: true,
		}
	},
	//弱点発見
	Headband: {
		No: 132008,
		key: 'Headband',
		name: '心眼鉢巻',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectBuffForAttack',
		image:'images/card/gran_Headband.jpg',
		effect: '敵が攻撃を予定している場合、攻撃力アップ{F}を得る。',
		amount: {
			cost: 1, 
			buff: 3,
			buffType: 'attackUp',
			discard: false,
		}
	},
	//激怒
	Tiamat: {
		No: 132009,
		key: 'Tiamat',
		name: 'ティアマトシールド',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectBuff',
		image:'images/card/gran_Tiamat.jpg',
		effect: 'このターン、「アタック」をプレイするたび{F}ブロックを得る。',
		amount: {
			cost: 0, 
			buff: 3,
			buffType: 'wind',
			discard: false,
		}
	},
	//武装解除
	Devil: {
		No: 132010,
		key: 'Devil',
		name: 'ザ・デビル',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectDebuff',
		image:'images/card/gran_Devil.jpg',
		effect: '敵に攻撃力ダウン{D}を与える。廃棄。',
		amount: {
			cost: 1, 
			debuff: 2,
			debuffType: 'attackDown',
			discard: true,
		}
	},
	//激昂
	Tamtam: {
		No: 132011,
		key: 'Tamtam',
		name: '汝、食い改めよ！',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectGetEnergy',
		image:'images/card/gran_Tamtam.jpg',
		effect: '{E}エナジーを得る。廃棄。',
		amount: {
			cost: 1, 
			energy: 2,
			discard: true,
		}
	},
	//瀉血
	Stagnation: {
		No: 132012,
		key: 'Stagnation',
		name: '闇の淀み',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectGetEnergyAndSelfHarm',
		image:'images/card/gran_Stagnation.jpg',
		effect: '{E}エナジーを得る。HP{HP}を失う。',
		amount: {
			cost: 0, 
			energy: 2,
			harm: 3,
			discard: false,
		}
	},
	//炎の障壁
	Rose: {
		No: 132013,
		key: 'Rose',
		name: 'ローズシールド',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectDefenseAndBuff',
		image:'images/card/gran_Rose.jpg',
		effect: '{B}ブロックを得る。このターン攻撃を受けるたび、攻撃した敵に{F}ダメージを与える。',
		amount: {
			cost: 2, 
			block: 12,
			buff: 4,
			buffType: 'reflection',
			discard: false,
		}
	},
	//焦熱の契約
	Truce: {
		No: 132014,
		key: 'Truce',
		name: '一時休戦',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectDrawAndDiscard',
		image:'images/card/gran_Truce.jpg',
		effect: 'カードを1枚廃棄する。カードを{Dr}枚引く。',
		amount: {
			cost: 1, 
			draw: 2,
			discard: false,
		}
	},
	//衝撃波
	Cane: {
		No: 132015,
		key: 'Cane',
		name: 'カースドケーン',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectALLDoubleDebuff',
		image:'images/card/gran_Cane.jpg',
		effect: '敵全体に恐怖{D1}と防御力ダウン{D2}を与える。廃棄。',
		amount: {
			cost: 2, 
			debuff1: 3,
			debuffType1: 'weak',
			debuff2: 3,
			debuffType2: 'defenseDown',
			discard: true,
		}
	},
	//見張り
	Carbuncle: {
		No: 132016,
		key: 'Carbuncle',
		name: 'カーバンクル',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectDefense',
		image:'images/card/gran_Carbuncle.jpg',
		effect: '5ブロックを得る。このカードを廃棄した時、{E}エナジーを得る。',
		amount: {
			cost: 1, 
			block: 5,
			energy: 2,
			discard: false,
			discardFunc: 'effectGetEnergy'
		}
	},
/*	//非道の刃
	Yorishiro: {
		key: 'Yorishiro',
		name: '依代の刃',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: '',
		image:'images/card/gran_Yorishiro.jpg',
		effect: 'ランダムな「アタック」を1枚手札に加える。このターンそのカードのコストは0。廃棄。',
		amount: {
			cost: 1, 
			discard: true,
		}
	},
*/
	//******************************パワー******************************//
	// 炎の吐息
	Samsara: {
		No: 133001,
		key: 'Samsara',
		name: 'サンサーラ',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/gran_Samsara.jpg',
		effect: '状態異常か呪いを引くたび、敵全体に{F}ダメージを与える。',
		amount: {
			cost: 1,
			buff: 6,
			buffType: 'barrage',
		}
	},
	//無痛
	Jasseron: {
		No: 133002,
		key: 'Jasseron',
		name: 'ジャセロン',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/gran_Jasseron.jpg',
		effect: 'カードを廃棄するたび、{F}ブロックを得る。',
		amount: {
			cost: 1,
			buff: 3,
			buffType: 'painless',
		}
	},
	//燃焼
	Stamp: {
		No: 133003,
		key: 'Stamp',
		name: 'ショロトルスタンプ',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/gran_Stamp.jpg',
		effect: 'ターン終了時にHPを1失い、すべての敵に{F}ダメージを与える。',
		amount: {
			cost: 1,
			buff: 5,
			buffType: 'madness',
		}
	},
	//破裂
	Vamp: {
		No: 133004,
		key: 'Vamp',
		name: 'ヴァンプネイル',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/gran_Vamp.jpg',
		effect: 'カードのプレイによってHPが失われるたび、筋力{F}を得る。',
		amount: {
			cost: 1,
			buff: 1,
			buffType: 'compensation',
		}
	},
	//発火
	Fist: {
		No: 133005,
		key: 'Fist',
		name: 'ダンディフィスト',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/gran_Fist.jpg',
		effect: '攻撃力アップ{F}を得る。',
		amount: {
			cost: 1,
			buff: 2,
			buffType: 'attackUp',
		}
	},
	//進化
	Wander: {
		No: 133006,
		key: 'Wander',
		name: '彷徨の刃',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/gran_Wander.jpg',
		effect: '状態異常を引くたび、カードを{F}枚引く。',
		amount: {
			cost: 1,
			buff: 1,
			buffType: 'adversity',
		}
	},
	//金属化
	Holy: {
		No: 133007,
		key: 'Holy',
		name: 'ホーリーシールド',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/gran_Holy.jpg',
		effect: 'ターン終了時に{F}ブロックを得る。',
		amount: {
			cost: 1,
			buff: 3,
			buffType: 'barrier',
		}
	},
	//闇の抱擁
	Lynette: {
		No: 133008,
		key: 'Lynette',
		name: 'リネット',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/gran_Lynette.jpg',
		effect: 'カードを廃棄するたび、カードを{F}枚引く。',
		amount: {
			cost: 2,
			buff: 1,
			buffType: 'eye',
		}
	},
	/********************************************* レア *********************************************/
	//捕食
	Ignorance: {
		No: 141001,
		key: 'Ignorance',
		name: '無明剣',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.attack,
		func: 'effectAttackAndSeizure',
		image:'images/card/gran_Ignorance.jpg',
		effect: '{A}のダメージを与える。この攻撃で敵を倒すと、最大HPが3増える(戦闘終了後も有効)。廃棄。',
		amount: {
			cost: 1, 
			attack: 10,
			maxHp: 3,
			discard: true,
		}
	},
	//死神
	Meteor: {
		No: 141002,
		key: 'Meteor',
		name: 'ミーティアライト',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.attack,
		func: 'effectAttackAndBloodsucking',
		image:'images/card/gran_Meteor.jpg',
		effect: '敵全体に{A}のダメージを与える。防御されなかったダメージ分を回復する。廃棄。',
		amount: {
			cost: 2,
			attack: 4,
			discard: true,
		}
	},
	//焼身
	Weke: {
		No: 141003,
		key: 'Weke',
		name: 'ローエンドヴェーク',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.attack,
		func: 'effectAllAttackAndAbnormal',
		image:'images/card/gran_Weke.jpg',
		effect: '敵全体に{A}のダメージを与える。火傷を{C}枚捨て札に加える。',
		amount: {
			cost: 2,
			attack: 21,
			abnormal: 'Burn',
			count: 1,
			discard: false,
		}
	},
	//脳天割り
	Cutting: {
		No: 141004,
		key: 'Cutting',
		name: '大切断',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.attack,
		func: 'effectAttack',
		image:'images/card/gran_Cutting.jpg',
		effect: '{A}のダメージを与える。',
		amount: {
			cost: 3,
			attack: 32,
			discard: false,
		}
	},
	//鬼火
	Getsuga: {
		No: 141005,
		key: 'Getsuga',
		name: '月牙',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.attack,
		block: 0,
		func: 'effectAttackAndAllDiscard',
		image:'images/card/gran_Getsuga.jpg',
		effect: '手札を全て廃棄する。この方法で廃棄した枚数x{A}のダメージを与える。廃棄。',
		amount: {
			cost: 2,
			attack: 7,
			discard: true,
		}
	},
	//******************************スキル******************************//
	//ダブルタップ
	Lyman: {
		No: 142001,
		key: 'Lyman',
		name: 'ライマンブレイク',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.skill,
		func: 'effectBuff',
		image:'images/card/gran_Lyman.jpg',
		effect: 'このターン、次の「アタック」を2回プレイする。',
		amount: {
			cost: 1, 
			buff: 1,
			buffType: 'attackCombo',
			discard: false,
		}
	},
	//リミットブレイク
	Lion: {
		No: 142002,
		key: 'Lion',
		name: 'フラム・デュ・リオン',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.skill,
		func: 'effectTimesBuff',
		image:'images/card/gran_Lion.jpg',
		effect: '「攻撃力アップ」を2倍にする。廃棄。',
		amount: {
			cost: 1, 
			buffType: 'attackUp',
			times: 2,
			discard: true,
		}
	},
	//不動
	Solar: {
		No: 142003,
		key: 'Solar',
		name: '日輪の鈴',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.skill,
		func: 'effectDefense',
		image:'images/card/gran_Solar.jpg',
		effect: '{B}ブロックを得る。廃棄。',
		amount: {
			cost: 2, 
			block: 30,
			discard: true,
		}
	},
	//供物
	Naan: {
		No: 142004,
		key: 'Naan',
		name: 'ハッル・ラディーズ',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.skill,
		func: 'effectGetEnergyAndDrawAndSelfHarm',
		image:'images/card/gran_Naan.jpg',
		effect: 'HP{HP}を失う。{E}エナジーを得る。カードを{Dr}枚引く。廃棄。',
		amount: {
			cost: 0, 
			energy: 2,
			draw: 3,
			harm: 6,
			discard: true,
		}
	},
	//発掘
	Reuse: {
		No: 142005,
		key: 'Reuse',
		name: '再利用',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.skill,
		func: 'effectReuseToHand',
		image:'images/card/gran_Reuse.jpg',
		effect: '廃棄したカードから1枚選んで手札に加える。廃棄。',
		amount: {
			cost: 1, 
			discard: true,
		}
	},
	//******************************パワー******************************//
	//ジャガーノート
	Bahamut: {
		No: 143001,
		key: 'Lamentation',
		name: 'バハムートシールド',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/gran_Bahamut.jpg',
		effect: 'ブロックを得るたび、ランダムな敵に{F}ダメージを与える。',
		amount: {
			cost: 2,
			buff: 5,
			buffType: 'bahamut',
		}
	},
	//バリケード
	Hero: {
		No: 143002,
		key: 'Colossus',
		name: '英雄の盾',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/gran_Hero.jpg',
		effect: 'ターン開始時にブロック値を失わない。',
		amount: {
			cost: 3,
			buff: '',
			buffType: 'hero',
		}
	},
	//堕落
	//未実装
	Manuscript: {
		No: 143003,
		key: 'Manuscript',
		name: '禁聖の写本',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/gran_Manuscript.jpg',
		effect: '「スキル」がエナジーを消費しない。プレイした「スキル」は廃棄する。',
		amount: {
			cost: 3,
			buff: '',
			buffType: 'sacred',
		}
	},
	//悪魔化
	Wear: {
		No: 143004,
		key: 'Wear',
		name: '十天光輝の佩剣',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/gran_Wear.png',
		effect: 'ターン開始時に、攻撃力アップ{F}を得る。',
		amount: {
			cost: 3,
			buff: 2,
			buffType: 'end',
		}
	},
	//残虐
	Hrunting: {
		No: 143005,
		key: 'Hrunting',
		name: 'フルンティング',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/gran_Hrunting.jpg',
		effect: 'ターン開始時に、HPを1失いカードを{F}枚引く。',
		amount: {
			cost: 0,
			buff: 1,
			buffType: 'hrunting',
		}
	},
	//狂戦士
	Lancet: {
		No: 143006,
		key: 'Lancet',
		name: 'ランセット',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.power,
		func: 'effectBuffAndDebuff',
		image:'images/card/gran_Lancet.jpg',
		effect: '防御力ダウン{D}を得る。ターン開始時、{F}エナジーを得る。',
		amount: {
			cost: 0,
			buff: 1,
			buffType: 'energized',
			debuff: 2,
			debuffType: 'defenseDown',
		}
	},
};
/********************************************************************************************************/
/* グランカードリスト(強化後)
/********************************************************************************************************/
const granEnhancedCardList = {
	Wide: {
		No: 211001,
		name: '<span class="upgrade">ワイドブレード+</span>',
		class: cardClass.gran,
		rarity: rarity.starter,
		type: type.attack,
		func: 'effectAttack',
		image:'images/card/gran_Wide.jpg',
		effect: '<span class="upgrade">{A}</span>のダメージを与える。',
		amount: {
			cost: 1, 
			attack: 9,
			discard: false,
		}
	},
	PowerSwing: {
		No: 211002,
		name: '<span class="upgrade">パワースウィング+</span>',
		class: cardClass.gran,
		rarity: rarity.starter,
		type: type.attack,
		func: 'effectAttackAndDebuff',
		image:'images/card/gran_PowerSwing.jpg',
		effect: '<span class="upgrade">{A}</span>のダメージを与える。防御力ダウン<span class="upgrade">{D}</span>を与える。',
		amount: {
			cost: 2,
			attack: 10,
			debuff: 3,
			debuffType: 'defenseDown',
			discard: false,
		}
	},
	Defense: {
		No: 212001,
		name: '<span class="upgrade">防御+</span>',
		class: cardClass.gran,
		rarity: rarity.starter,
		type: type.skill,
		func: 'effectDefense',
		image:'images/card/gran_Defense.jpg',
		effect: '<span class="upgrade">{B}</span>ブロックを得る。',
		amount: {
			cost: 1, 
			block: 8,
			discard: false,
		}
	},
	/********************************************* コモン *********************************************/
	Ichimonji: {
		No: 221001,
		name: '<span class="upgrade">一文字切り+</span>',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectAllAttack',
		image:'images/card/gran_Ichimonji.jpg',
		effect: '敵全体に<span class="upgrade">{A}</span>のダメージを与える。',
		amount: {
			cost: 1, 
			attack: 11,
			discard: false,
		}
	},
	Swing: {
		No: 221002,
		name: '<span class="upgrade">スウィング+</span>',
		class: cardClass.gran,
		cost: 1,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectAttackAndDefense',
		image:'images/card/gran_Swing.jpg',
		effect: '<span class="upgrade">{B}</span>のブロックを得る。<span class="upgrade">{A}</span>のダメージを与える。',
		amount: {
			cost: 1, 
			attack: 7,
			block: 7,
			discard: false,
		}
	},
	Straight: {
		No: 221003,
		name: '<span class="upgrade">正拳突き+</span>',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.attack,
		image:'images/card/gran_Straight.jpg',
		func: 'effectAttack',
		effect: '手札が全て「アタック」の場合に使用可。<span class="upgrade">{A}</span>のダメージを与える。',
		amount: {
			conditions: 'conditionsStraight', // 発動条件
			cost: 0, 
			attack: 18,
			discard: false,
		}
	},
	Pain: {
		No: 221004,
		name: '<span class="upgrade">ペインメロディ+</span>',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectALLAttackAndDebuff',
		image:'images/card/gran_Pain.jpg',
		effect: '敵全体に<span class="upgrade">{A}</span>のダメージと防御力ダウン{D}を与える。',
		amount: {
			cost: 1, 
			attack: 7,
			debuff: 1,
			debuffType: 'defenseDown',
			discard: false,
		}
	},
	ThreeBurst: {
		No: 221005,
		name: '<span class="upgrade">スリーバースト+</span>',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectTimesRandomAttack',
		image:'images/card/gran_ThreeBurst.jpg',
		effect: 'ランダムな敵に{A}のダメージを<span class="upgrade">{C}</span>回与える。',
		amount: {
			cost: 1, 
			attack: 3,
			count: 4,
			discard: false,
		}
	},
	CrossSlash: {
		No: 221006,
		name: '<span class="upgrade">クロススラッシュ+</span>',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectTimesAttack',
		image:'images/card/gran_CrossSlash.jpg',
		effect: '<span class="upgrade">{A}</span>のダメージを2回与える。',
		amount: {
			cost: 1, 
			attack: 7,
			count: 2,
			discard: false,
		}
	},
	Heavy: {
		No: 221007,
		name: '<span class="upgrade">ヘヴィショット+</span>',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectAttackAndRestore',
		image:'images/card/gran_Heavy.jpg',
		effect: '<span class="upgrade">{A}</span>のダメージを与える。捨て札のカードを1枚山札の一番上に置く。',
		amount: {
			cost: 1, 
			attack: 12,
			discard: false,
		}
	},
	Dig: {
		No: 221008,
		key: 'Dig',
		name: '<span class="upgrade">クレイター・ディグ+</span>',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectAttackMagnification',
		image:'images/card/gran_Dig.jpg',
		effect: '{A}のダメージを与える。このカードには<span class="upgrade">5</span>倍の筋力ボーナスが適用される。',
		amount: {
			cost: 2, 
			attack: 14,
			magnification: 5,
			discard: false,
		}
	},
	Fire: {
		No: 221009,
		name: '<span class="upgrade">ファイアグライド+</span>',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectAttackAndDraw',
		image:'images/card/gran_Fire.jpg',
		effect: '<span class="upgrade">{A}</span>のダメージを与える。カードを<span class="upgrade">{Dr}</span>枚引く。',
		amount: {
			cost: 1, 
			attack: 10,
			draw: 2,
			discard: false,
		}
	},
	BrainShake: {
		No: 221010,
		name: '<span class="upgrade">ブレインシェイク+</span>',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectAttackAndDebuff',
		image:'images/card/gran_BrainShake.jpg',
		effect: '<span class="upgrade">{A}</span>のダメージを与える。恐怖<span class="upgrade">{D}</span>を与える。',
		amount: {
			cost: 2,
			attack: 14,
			debuff: 3,
			debuffType: 'weak',
			discard: false,
		}
	},
	Crash: {
		No: 221011,
		name: '<span class="upgrade">クラッシュブロー+</span>',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectAttackAndAbnormal',
		image:'images/card/gran_Crash.jpg',
		effect: '<span class="upgrade">{A}</span>のダメージを与える。負傷を{C}枚山札に加える。',
		amount: {
			cost: 1,
			attack: 17,
			abnormal: 'Injury',
			count: 1,
			discard: false,
		}
	},
	Bullet: {
		No: 221012,
		name: '<span class="upgrade">弾突拳+</span>',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectAttackAndReproduction',
		image:'images/card/gran_Bullet.jpg',
		effect: '<span class="upgrade">{A}</span>のダメージを与える。このカードの複製を捨て札に加える。',
		amount: {
			cost: 0,
			attack: 8,
			discard: false,
		}
	},
	//******************************スキル******************************//
	Stimulant: {
		No: 222001,
		name: '<span class="upgrade">興奮剤+</span>',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.skill,
		func: 'effectBuffAndDebuff',
		image:'images/card/gran_Stimulant.jpg',
		effect: '攻撃力アップ<span class="upgrade">{F}</span>を得る。ターン終了時に攻撃力アップ<span class="upgrade">4</span>を失う。',
		amount: {
			cost: 0,
			buff: 4,
			buffType: 'attackUp',
			debuff: 4,
			debuffType: 'invalidAttackUp',
			discard: false,
		}
	},
	Coat: {
		No: 222002,
		name: '<span class="upgrade">ナイトコート+</span>',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.skill,
		func: 'effectDefenseAndDiscard',
		image:'images/card/gran_Coat.jpg',
		effect: '<span class="upgrade">{B}</span>ブロックを得る。手札を1枚廃棄する。',
		amount: {
			cost: 1,
			block: 9,
			discard: false,
		}
	},
	Smokescreen: {
		No: 222003,
		name: '<span class="upgrade">白煙弾+</span>',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.skill,
		func: 'effectDefenseAndDraw',
		image:'images/card/gran_Smokescreen.jpg',
		effect: '<span class="upgrade">{B}</span>ブロックを得る。カードを{Dr}枚引く。',
		amount: {
			cost: 1,
			block: 11,
			draw: 1, 
			discard: false,
		}
	},
	Adrenal: {
		No: 222004,
		name: '<span class="upgrade">アドレナル+</span>',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.skill,
		func: 'effectDefenseAndAllUpGrade',
		image:'images/card/gran_Adrenal.jpg',
		effect: '{B}ブロックを得る。戦闘終了まで手札のカード<span class="upgrade">すべて</span>をアップグレードする。',
		amount: {
			cost: 1,
			block: 5,
			discard: false,
		}
	},
	OverPower: {
		No: 222005,
		name: '<span class="upgrade">オーバーパワー+</span>',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.skill,
		func: 'effectDeckTopPlay',
		image:'images/card/gran_OverPower.jpg',
		effect: '山札の一番上にあるカードをプレイする。そのカードを廃棄する。',
		amount: {
			cost: 0,
			discard: false,
		}
	},
	Bell: {
		No: 222006,
		name: '<span class="upgrade">銅鈴の響+</span>',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.skill,
		func: 'effectDrawAndUnshiftDeck',
		image:'images/card/gran_Bell.jpg',
		effect: 'カードを<span class="upgrade">{Dr}</span>枚引く。手札のカードを山札の1番上に置く。廃棄。',
		amount: {
			cost: 0,
			draw: 2,
			discard: true,
		}
	},
	/********************************************* アンコモン *********************************************/
	Melee: {
		No: 231001,
		name: '<span class="upgrade">メレーブロウ+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.attack,
		block: 0,
		func: 'effectAttackAndDoubleDebuff',
		image:'images/card/gran_Melee.jpg',
		effect: '{A}のダメージを与える。恐怖<span class="upgrade">{D1}</span>と防御力ダウン<span class="upgrade">{D2}</span>を与える。',
		amount: {
			cost: 2, 
			attack: 13,
			debuff1: 2,
			debuffType1: 'weak',
			debuff2: 2,
			debuffType2: 'defenseDown',
			discard: false,
		}
	},
	EarthKilling: {
		No: 231002,
		name: '<span class="upgrade">地烈斬+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAttackAndConditionsDefenseDown',
		image:'images/card/gran_EarthKilling.jpg',
		effect: '<span class="upgrade">{A}</span>のダメージを与える。敵が「防御力ダウン」を受けている場合は{E}エナジーを得てカードを{Dr}枚引く。',
		amount: {
			cost: 1, 
			attack: 8,
			energy: 1,
			draw: 1,
			discard: false,
		}
	},
	Zetsusen: {
		No: 231003,
		name: '<span class="upgrade">絶閃+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAttackAndSelfHarm',
		image:'images/card/gran_Zetsusen.jpg',
		effect: 'HP{HP}を失う。<span class="upgrade">{A}</span>のダメージを与える。',
		amount: {
			cost: 1, 
			attack: 20,
			harm: 2,
			discard: false,
		}
	},
	Reaper: {
		No: 231004,
		name: '<span class="upgrade">ヴァイスリーパー+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAttackAndPowerUp',
		image:'images/card/gran_Reaper.jpg',
		effect: '{A}のダメージを与える。このカードを使用するたび、戦闘終了までダメージが<span class="upgrade">8</span>増加。',
		amount: {
			cost: 1,
			attack: 8,
			powerUp: 8,
			discard: false,
		}
	},
	Shrieking: {
		No: 231005,
		name: '<span class="upgrade">断切の慟哭+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAttack',
		image:'images/card/gran_Shrieking.jpg',
		effect: 'エセリアル。<span class="upgrade">{A}</span>のダメージを与える。',
		amount: {
			cost: 2,
			attack: 28,
			discard: false,
			ethereal: true,
		}
	},
	Rush: {
		No: 231006,
		name: '<span class="upgrade">ラッシュスマイト+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAllAttackXTimes',
		image:'images/card/gran_Rush.jpg',
		effect: '敵全体に<span class="upgrade">{A}</span>のダメージをX回与える。',
		amount: {
			cost: 'X',
			variable: 0,
			attack: 8,
			discard: false,
		}
	},
	ArtilleryShell: {
		No: 231007,
		name: '<span class="upgrade">砲弾+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAttackAndAbnormal',
		image:'images/card/gran_ArtilleryShell.jpg',
		effect: '<span class="upgrade">{A}</span>のダメージを与える。めまいを{C}枚山札に加える。',
		amount: {
			cost: 0,
			attack: 10,
			abnormal: 'Dizziness',
			count: 1,
			discard: false,
		}
	},
	Revision: {
		No: 231008,
		name: '<span class="upgrade">リビジョン+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectTimesAttack',
		image:'images/card/gran_Revision.jpg',
		effect: '{A}のダメージを<span class="upgrade">{C}</span>回与える。廃棄。',
		amount: {
			cost: 1,
			attack: 2,
			count: 5,
			discard: true,
		}
	},
	Bloody: {
		No: 231009,
		name: '<span class="upgrade">ブラッディ・ヴォウ+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAttack',
		image:'images/card/gran_Bloody.jpg',
		effect: '戦闘でHPを失うたび、エナジー消費が-1。<span class="upgrade">{A}</span>のダメージを与える。',
		amount: {
			cost: 3,
			originCost: 3,
			costChange:'changeCostDownEveryDamage',
			attack: 22,
			discard: false,
		}
	},
	Tempest: {
		No: 231010,
		name: '<span class="upgrade">テンペストブレード+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.attack,
		block: 0,
		func: 'effectAttackAndNoAttackDiscard',
		image:'images/card/gran_Tempest.jpg',
		effect: '「アタック」以外の手札を廃棄する。<span class="upgrade">{A}</span>のダメージを与える。',
		amount: {
			cost: 2,
			attack: 22,
			discard: false,
		}
	},
	//******************************スキル******************************//
	Mantle: {
		No: 232001,
		name: '<span class="upgrade">闇蕩外套+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectDefenseAndAbnormal',
		image:'images/card/gran_Mantle.jpg',
		effect: '負傷を{C}枚手札に加える。<span class="upgrade">{B}</span>ブロックを得る。',
		amount: {
			cost: 1, 
			block: 20,
			abnormal: 'Injury',
			count: 2,
			discard: false,
		}
	},
	Belief: {
		No: 232002,
		name: '<span class="upgrade">戦士の信念+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectDefense',
		image:'images/card/gran_Belief.jpg',
		effect: 'エセリアル。<span class="upgrade">{B}</span>ブロックを得る。',
		amount: {
			cost: 1, 
			block: 13,
			discard: false,
			ethereal: true,
		}
	},
	Helm: {
		No: 232003,
		name: '<span class="upgrade">ナイツヘルム+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectDefenseAndNoAttackDiscard',
		image:'images/card/gran_Helm.jpg',
		effect: '「アタック」以外の手札を廃棄する。この方法で廃棄したカードの枚数×<span class="upgrade">{B}</span>ブロックを得る。',
		amount: {
			cost: 1, 
			block: 7,
			discard: false,
		}
	},
	Script: {
		No: 232004,
		name: '<span class="upgrade">探偵の台本+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectDrawAndDebuff',
		image:'images/card/gran_Script.jpg',
		effect: 'カードを<span class="upgrade">{Dr}</span>枚引く。このターン、追加でカードを引くことができない。',
		amount: {
			cost: 0, 
			draw: 4,
			debuff: '',
			debuffType: 'noDraw',
			discard: false,
		}
	},
	HangedMan: {
		No: 232005,
		name: '<span class="upgrade">ザ・ハングドマン+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectTwoReproductionToHand',
		image:'images/card/gran_HangedMan.jpg',
		effect: '手札にある「アタック」か「パワー」を複製し、<span class="upgrade">2</span>枚手札に加える。',
		amount: {
			cost: 1, 
			discard: false,
		}
	},
	Scutum: {
		No: 232006,
		name: '<span class="upgrade">スクトゥム+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectTwiceDefense',
		image:'images/card/gran_Scutum.jpg',
		effect: '現在のブロックの値を2倍にする。',
		amount: {
			cost: 1, 
			discard: false,
		}
	},
	KillKnife: {
		No: 232007,
		name: '<span class="upgrade">キルナイフ+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectALLDebuff',
		image:'images/card/gran_KillKnife.jpg',
		effect: '敵全体に恐怖<span class="upgrade">{D}</span>を与える。廃棄。',
		amount: {
			cost: 0, 
			debuff: 2,
			debuffType: 'weak',
			discard: true,
		}
	},
	Headband: {
		No: 232008,
		name: '<span class="upgrade">心眼鉢巻+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectBuffForAttack',
		image:'images/card/gran_Headband.jpg',
		effect: '敵が攻撃を予定している場合、攻撃力アップ<span class="upgrade">{F}</span>を得る。',
		amount: {
			cost: 1, 
			buff: 4,
			buffType: 'attackUp',
			discard: false,
		}
	},
	Tiamat: {
		No: 232009,
		name: '<span class="upgrade">ティアマトシールド+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectBuff',
		image:'images/card/gran_Tiamat.jpg',
		effect: 'このターン、「アタック」をプレイするたび<span class="upgrade">{F}</span>ブロックを得る。',
		amount: {
			cost: 0, 
			buff: 5,
			buffType: 'wind',
			discard: false,
		}
	},
	Devil: {
		No: 232010,
		name: '<span class="upgrade">ザ・デビル+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectDebuff',
		image:'images/card/gran_Devil.jpg',
		effect: '敵に攻撃力ダウン<span class="upgrade">{D}</span>を与える。廃棄。',
		amount: {
			cost: 1, 
			debuff: 3,
			debuffType: 'attackDown',
			discard: true,
		}
	},
	Tamtam: {
		No: 232011,
		name: '<span class="upgrade">汝、食い改めよ！+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectGetEnergy',
		image:'images/card/gran_Tamtam.jpg',
		effect: '<span class="upgrade">{E}</span>エナジーを得る。廃棄。',
		amount: {
			cost: 0, 
			energy: 2,
			discard: true,
		}
	},//瀉血
	Stagnation: {
		No: 232012,
		name: '<span class="upgrade">闇の淀み+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectGetEnergyAndSelfHarm',
		image:'images/card/gran_Stagnation.jpg',
		effect: '<span class="upgrade">{E}</span>エナジーを得る。HP{HP}を失う。',
		amount: {
			cost: 0, 
			energy: 3,
			harm: 3,
			discard: false,
		}
	},
	//炎の障壁
	Rose: {
		No: 232013,
		name: '<span class="upgrade">ローズシールド+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectDefenseAndBuff',
		image:'images/card/gran_Rose.jpg',
		effect: '<span class="upgrade">{B}</span>ブロックを得る。このターン攻撃を受けるたび、攻撃した敵に<span class="upgrade">{A}</span>ダメージを与える。',
		amount: {
			cost: 2, 
			block: 16,
			buff: 6,
			buffType: 'reflection',
			discard: false,
		}
	},
	//焦熱の契約
	Truce: {
		No: 232014,
		name: '<span class="upgrade">一時休戦+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectDrawAndDiscard',
		image:'images/card/gran_Truce.jpg',
		effect: 'カードを1枚廃棄する。カードを<span class="upgrade">{Dr}</span>枚引く。',
		amount: {
			cost: 1, 
			draw: 3,
			discard: false,
		}
	},
	//衝撃波
	Cane: {
		No: 232015,
		name: '<span class="upgrade">カースドケーン+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectALLDoubleDebuff',
		image:'images/card/gran_Cane.jpg',
		effect: '敵全体に恐怖<span class="upgrade">{D1}</span>と防御力ダウン<span class="upgrade">{D2}</span>を与える。廃棄。',
		amount: {
			cost: 2, 
			debuff1: 5,
			debuffType1: 'weak',
			debuff2: 5,
			debuffType2: 'defenseDown',
			discard: true,
		}
	},
	//見張り
	Carbuncle: {
		No: 232016,
		name: '<span class="upgrade">カーバンクル+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectDefense',
		image:'images/card/gran_Carbuncle.jpg',
		effect: '<span class="upgrade">{D}</span>ブロックを得る。このカードを廃棄した時、<span class="upgrade">{E}</span>エナジーを得る。',
		amount: {
			cost: 1, 
			block: 8,
			energy: 3,
			discard: false,
			discardFunc: 'effectGetEnergy'
		}
	},
/*	//非道の刃
	Yorishiro: {
		name: '<span class="upgrade">依代の刃+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: '',
		image:'images/card/gran_Yorishiro.jpg',
		effect: 'ランダムな「アタック」を1枚手札に加える。このターンそのカードのコストは0。廃棄。',
		amount: {
			cost: 0, 
			discard: true,
		}
	},
*/
	//******************************パワー******************************//
	// 炎の吐息
	Samsara: {
		No: 233001,
		name: '<span class="upgrade">サンサーラ+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/gran_Samsara.jpg',
		effect: '状態異常か呪いを引くたび、敵全体に<span class="upgrade">{F}</span>ダメージを与える。',
		amount: {
			cost: 1,
			buff: 10,
			buffType: 'barrage',
		}
	},
	//無痛
	Jasseron: {
		No: 233002,
		name: '<span class="upgrade">ジャセロン+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/gran_Jasseron.jpg',
		effect: 'カードを廃棄するたび、<span class="upgrade">{F}</span>ブロックを得る。',
		amount: {
			cost: 1,
			buff: 4,
			buffType: 'painless',
		}
	},
	//燃焼
	Stamp: {
		No: 233003,
		name: '<span class="upgrade">ショロトルスタンプ+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/gran_Stamp.jpg',
		effect: 'ターン終了時にHPを1失い、すべての敵に<span class="upgrade">{F}</span>ダメージを与える。',
		amount: {
			cost: 1,
			buff: 7,
			buffType: 'madness',
		}
	},
	//破裂
	Vamp: {
		No: 233004,
		name: '<span class="upgrade">ヴァンプネイル+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/gran_Vamp.jpg',
		effect: 'カードのプレイによってHPが失われるたび、攻撃力アップ<span class="upgrade">{F}</span>を得る。',
		amount: {
			cost: 1,
			buff: 2,
			buffType: 'compensation',
		}
	},
	//発火
	Fist: {
		No: 233005,
		name: '<span class="upgrade">ダンディフィスト+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/gran_Fist.jpg',
		effect: '攻撃力アップ<span class="upgrade">{F}</span>を得る。',
		amount: {
			cost: 1,
			buff: 3,
			buffType: 'attackUp',
		}
	},
	//進化
	Wander: {
		No: 233006,
		name: '<span class="upgrade">彷徨の刃+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/gran_Wander.jpg',
		effect: '状態異常を引くたび、カードを<span class="upgrade">{F}</span>枚引く。',
		amount: {
			cost: 1,
			buff: 2,
			buffType: 'adversity',
		}
	},
	//金属化
	Holy: {
		No: 233007,
		name: '<span class="upgrade">ホーリーシールド+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/gran_Holy.jpg',
		effect: 'ターン終了時に<span class="upgrade">{F}</span>ブロックを得る。',
		amount: {
			cost: 1,
			buff: 4,
			buffType: 'barrier',
		}
	},
	//闇の抱擁
	Lynette: {
		No: 233008,
		name: '<span class="upgrade">リネット+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/gran_Lynette.jpg',
		effect: 'カードを廃棄するたび、カードを{F}枚引く。',
		amount: {
			cost: 1,
			buff: 1,
			buffType: 'eye',
		}
	},
	/********************************************* レア *********************************************/
	Ignorance: {
		No: 241001,
		name: '<span class="upgrade">無明剣+</span>',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.attack,
		func: 'effectAttackAndSeizure',
		image:'images/card/gran_Ignorance.jpg',
		effect: '<span class="upgrade">{A}</span>のダメージを与える。この攻撃で敵を倒すと、最大HPが<span class="upgrade">4</span>増える(戦闘終了後も有効)。廃棄。',
		amount: {
			cost: 1, 
			attack: 12,
			maxHp: 4,
			discard: true,
		}
	},
	Meteor: {
		No: 241002,
		name: '<span class="upgrade">ミーティアライト+</span>',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.attack,
		func: 'effectAttackAndBloodsucking',
		image:'images/card/gran_Meteor.jpg',
		effect: '敵全体に<span class="upgrade">{A}</span>のダメージを与える。防御されなかったダメージ分を回復する。廃棄。',
		amount: {
			cost: 2,
			attack: 5,
			discard: true,
		}
	},
	Weke: {
		No: 241003,
		name: '<span class="upgrade">ローエンドヴェーク+</span>',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.attack,
		func: 'effectAllAttackAndAbnormal',
		image:'images/card/gran_Weke.jpg',
		effect: '敵全体に<span class="upgrade">{A}</span>のダメージを与える。火傷を{C}枚捨て札に加える。',
		amount: {
			cost: 2,
			attack: 28,
			abnormal: 'Burn',
			count: 1,
			discard: false,
		}
	},
	Cutting: {
		No: 241004,
		name: '<span class="upgrade">大切断+</span>',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.attack,
		func: 'effectAttack',
		image:'images/card/gran_Cutting.jpg',
		effect: '<span class="upgrade">{A}</span>のダメージを与える。',
		amount: {
			cost: 3,
			attack: 42,
			discard: false,
		}
	},
	Getsuga: {
		No: 241005,
		name: '<span class="upgrade">月牙+</span>',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.attack,
		block: 0,
		func: 'effectAttackAndAllDiscard',
		image:'images/card/gran_Getsuga.jpg',
		effect: '手札を全て廃棄する。この方法で廃棄した枚数x<span class="upgrade">{A}</span>のダメージを与える。廃棄。',
		amount: {
			cost: 2,
			attack: 10,
			discard: true,
		}
	},
	//******************************スキル******************************//
	Lyman: {
		No: 242001,
		name: '<span class="upgrade">ライマンブレイク+</span>',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.skill,
		func: 'effectBuff',
		image:'images/card/gran_Lyman.jpg',
		effect: 'このターン、次の<span class="upgrade">2つの</span>「アタック」を2回プレイする。',
		amount: {
			cost: 1, 
			buff: 2,
			buffType: 'attackCombo',
			discard: false,
		}
	},
	Lion: {
		No: 242002,
		name: '<span class="upgrade">フラム・デュ・リオン+</span>',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.skill,
		func: 'effectTimesBuff',
		image:'images/card/gran_Lion.jpg',
		effect: '「攻撃力アップ」を2倍にする。',
		amount: {
			cost: 1, 
			buffType: 'attackUp',
			times: 2,
			discard: false,
		}
	},
	Solar: {
		No: 242003,
		name: '<span class="upgrade">日輪の鈴+</span>',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.skill,
		func: 'effectDefense',
		image:'images/card/gran_Solar.jpg',
		effect: '<span class="upgrade">{B}</span>ブロックを得る。廃棄。',
		amount: {
			cost: 2, 
			block: 40,
			discard: true,
		}
	},
	Naan: {
		No: 242004,
		name: '<span class="upgrade">ハッル・ラディーズ+</span>',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.skill,
		func: 'effectGetEnergyAndDrawAndSelfHarm',
		image:'images/card/gran_Naan.jpg',
		effect: 'HP{HP}を失う。{E}エナジーを得る。カードを<span class="upgrade">{Dr}</span>枚引く。廃棄。',
		amount: {
			cost: 0, 
			energy: 2,
			draw: 5,
			harm: 6,
			discard: true,
		}
	},
	//発掘
	Reuse: {
		No: 242005,
		name: '<span class="upgrade">再利用+</span>',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.skill,
		func: 'effectReuseToHand',
		image:'images/card/gran_Reuse.jpg',
		effect: '廃棄したカードから1枚選んで手札に加える。廃棄。',
		amount: {
			cost: 0, 
			discard: true,
		}
	},
	//******************************パワー******************************//
	//ジャガーノート
	Bahamut: {
		No: 243001,
		name: '<span class="upgrade">バハムートシールド+</span>',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/gran_Bahamut.jpg',
		effect: 'ブロックを得るたび、ランダムな敵に<span class="upgrade">{F}</span>ダメージを与える。',
		amount: {
			cost: 2,
			buff: 7,
			buffType: 'bahamut',
		}
	},
	//バリケード
	Hero: {
		No: 243002,
		name: '<span class="upgrade">英雄の盾+</span>',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/gran_Hero.jpg',
		effect: 'ターン開始時にブロック値を失わない。',
		amount: {
			cost: 2,
			buff: '',
			buffType: 'hero',
		}
	},
	//堕落
	//未実装
	Manuscript: {
		No: 243003,
		name: '<span class="upgrade">禁聖の写本+</span>',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/gran_Manuscript.jpg',
		effect: '「スキル」がエナジーを消費しない。プレイした「スキル」は廃棄する。',
		amount: {
			cost: 2,
			buff: '',
			buffType: 'sacred',
		}
	},
	//悪魔化
	Wear: {
		No: 243004,
		name: '<span class="upgrade">十天光輝の佩剣+</span>',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/gran_Wear.png',
		effect: 'ターン開始時に、攻撃力アップ<span class="upgrade">{F}</span>を得る。',
		amount: {
			cost: 3,
			buff: 3,
			buffType: 'end',
		}
	},
	//残虐
	Hrunting: {
		No: 243005,
		name: '<span class="upgrade">フルンティング+</span>',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/gran_Hrunting.jpg',
		effect: '<span class="upgrade">天賦。</span>ターン開始時に、HPを1失いカードを{F}枚引く。',
		amount: {
			gift: true,
			cost: 0,
			buff: 1,
			buffType: 'hrunting',
		}
	},
	//狂戦士
	Lancet: {
		No: 243006,
		name: '<span class="upgrade">ランセット+</span>',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.power,
		func: 'effectBuffAndDebuff',
		image:'images/card/gran_Lancet.jpg',
		effect: '防御力ダウン<span class="upgrade">{D}</span>を得る。ターン開始時、{F}エナジーを得る。',
		amount: {
			cost: 0,
			buff: 1,
			buffType: 'energized',
			debuff: 1,
			debuffType: 'defenseDown',
		}
	},
};
/*****************************************************************************************/
/* ジータカードリスト
/*****************************************************************************************/
const djeetaCardList = {
	Wide: {
		No: 311001,
		key: 'Wide',
		name: 'ワイドブレード',
		class: cardClass.djeeta,
		rarity: rarity.starter,
		type: type.attack,
		func: 'effectAttack',
		image:'images/card/djeeta_Wide.jpg',
		effect: '{A}のダメージを与える。',
		amount: {
			cost: 1,
			attack: 6,
			discard: false,
		}
	},
	//無力化
	Assassin: {
		No: 311002,
		key: 'Assassin',
		name: 'アサシンブレード',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectAttackAndDebuff',
		image:'images/card/djeeta_Assassin.jpg',
		effect: `{A}ダメージを与える。恐怖{D}を与える。`,
		amount: {
			cost: 0,
			attack: 3,
			debuff: 1,
			debuffType: 'weak',
			discard: false,
		}
	},
	Defense: {
		No: 312001,
		key: 'Defense',
		name: '防御',
		class: cardClass.djeeta,
		rarity: rarity.starter,
		type: type.skill,
		func: 'effectDefense',
		image:'images/card/djeeta_Defense.jpg',
		effect: '{B}ブロックを得る。',
		amount: {
			cost: 1,
			block: 5,
			discard: false,
		}
	},
	//サバイバー
	Pulverizer: {
		No: 312002,
		key: 'Pulverizer',
		name: 'パルバライザー',
		class: cardClass.djeeta,
		rarity: rarity.starter,
		type: type.skill,
		func: 'effectDefenseAndTrash',
		image:'images/card/djeeta_Pulverizer.jpg',
		effect: '{B}ブロックを得る。カードを1枚捨てる。',
		amount: {
			cost: 1,
			block: 8,
			discard: false,
		}
	},
	/********************************************* コモン *********************************************/
	//はやぶさ斬り
	Removal: {
		No: 321001,
		key: 'Removal',
		name: '芽摘',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectAttackAndDraw',
		image:'images/card/djeeta_Removal.jpg',
		effect: `{A}ダメージを与える。カードを{Dr}枚引く。`,
		amount: {
			cost: 1,
			attack: 8,
			draw: 1,
			discard: false,
		}
	},
	//スライス
	Kill: {
		No: 321002,
		key: 'Kill',
		name: 'キリング・ダガー',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectAttack',
		image:'images/card/djeeta_Kill.jpg',
		effect: `{A}ダメージを与える。`,
		amount: {
			cost: 0,
			attack: 6,
			discard: false,
		}
	},
	//ダガースロー
	World: {
		No: 321003,
		key: 'World',
		name: 'アラウンドザワールド',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectAttackAndDrawAndTrash',
		image:'images/card/djeeta_World.jpg',
		effect: `{A}ダメージを与える。カードを1枚引き、1枚捨てる。`,
		amount: {
			cost: 1,
			attack: 9,
			draw: 1,
			discard: false,
		}
	},
	//不意打ち
	Fast: {
		No: 321004,
		key: 'Fast',
		name: 'ファストスライサー',
		class: cardClass.djeeta,
		rarity: rarity.starter,
		type: type.attack,
		func: 'effectAttackAndDebuff',
		image:'images/card/djeeta_Fast.jpg',
		effect: `{A}ダメージを与える。恐怖{D}を与える。`,
		amount: {
			cost: 1,
			attack: 7,
			debuff: 1,
			debuffType: 'weak',
			discard: false,
		}
	},
	//五月雨ダガー
	Rain: {
		No: 321005,
		key: 'Rain',
		name: 'アローレイン',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectTimesAllAttack',
		image:'images/card/djeeta_Rain.jpg',
		effect: `全ての敵に{A}ダメージを{C}回与える。`,
		amount: {
			cost: 1,
			attack: 4,
			count: 2,
			discard: false,
		}
	},
	//スニーキーストライク
	Kamaitachi: {
		No: 321006,
		key: 'Kamaitachi',
		name: '鎌鼬',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectAttackAndGetEnergy',
		image:'images/card/djeeta_Kamaitachi.jpg',
		effect: `{A}ダメージを与える。このターンにカードを捨てていれば、{E}エナジーを得る。`,
		amount: {
			cost: 2,
			attack: 12,
			energy: 2,
			discard: false,
		}
	},
	//毒の一刺し
	True: {
		No: 321007,
		key: 'True',
		name: 'ポイズンスラスト',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectAttackAndDebuff',
		image:'images/card/djeeta_True.jpg',
		effect: `{A}ダメージを与える。毒{D}を与える。`,
		amount: {
			cost: 1,
			attack: 6,
			debuff: 3,
			debuffType: 'poison',
			discard: false,
		}
	},
	//破滅
	Dead: {
		No: 321008,
		key: 'Dead',
		name: 'デッドウェッジ',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectAttackAndConditionsPoison',
		image:'images/card/djeeta_Dead.jpg',
		effect: `{A}ダメージを与える。敵が毒を受けている場合、さらに7ダメージを与える。`,
		amount: {
			cost: 1,
			attack: 7,
			additionalAttack: 7,
			discard: false,
		}
	},
	//飛び膝蹴り
	Circle: {
		No: 321009,
		key: 'Circle',
		name: 'サークル',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectAttackAndBuff',
		image:'images/card/djeeta_Circle.jpg',
		effect: `{A}ダメージを与える。次のターン、{F}エナジーを得る。`,
		amount: {
			cost: 1,
			attack: 8,
			buff: 1,
			buffType: 'activity',
			discard: false,
		}
	},
	//******************************スキル******************************//
	//アクロバット
	Preparation: {
		No: 322001,
		key: 'Preparation',
		name: '戦闘準備',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.skill,
		effect: `カードを{Dr}枚引く。カードを1枚捨てる。`,
		func: 'effectDrawAndTrash',
		image:'images/card/djeeta_Preparation.jpg',
		amount: {
			cost: 1,
			draw: 3,
			discard: false,
		}
	},
	//ディフレクト
	Twill: {
		No: 322002,
		key: 'Twill',
		name: 'ツイルコート',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.skill,
		func: 'effectDefense',
		image:'images/card/djeeta_Twill.jpg',
		effect: `{B}ブロックを得る。`,
		amount: {
			cost: 0,
			block: 4,
			discard: false,
		}
	},
	//ドッジロール
	Knight: {
		No: 322003,
		key: 'Knight',
		name: 'ナイトシールド',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.skill,
		func: 'effectDefenseAndBuff',
		image:'images/card/djeeta_Knight.jpg',
		effect: `{B}ブロックを得る。次のターン、{F}ブロックを得る。`,
		amount: {
			cost: 1,
			block: 4,
			buff: 4,
			buffType: 'nextTurnBlock',
			discard: false,
		}
	},
	//バックフリップ
	Yggdrasil: {
		No: 322004,
		key: 'Yggdrasil',
		name: 'ユグドラシル・ミニステル',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.skill,
		func: 'effectDefenseAndDraw',
		image:'images/card/djeeta_Yggdrasil.jpg',
		effect: `{B}ブロックを得る。カードを{Dr}枚引く。`,
		amount: {
			cost: 1,
			block: 5,
			draw: 2,
			discard: false,
		}
	},
	//先読み
	Extinction: {
		No: 322005,
		key: 'Extinction',
		name: '滅尽の覇気',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.skill,
		func: 'effectBuff',
		image:'images/card/djeeta_Extinction.jpg',
		effect: `次のターン{F}エナジーを得る。`,
		amount: {
			cost: 1,
			buff: 2,
			buffType: 'activity',
			discard: false,
		}
	},
	//剣の舞
	Leiomano: {
		No: 322006,
		key: 'Leiomano',
		name: 'レイオマノ',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.skill,
		func: 'effectAddCommonCard',
		image:'images/card/djeeta_Leiomano.jpg',
		effect: `ナイフを{C}枚手札に加える。`,
		amount: {
			cost: 1,
			commonCard: 'Knife',
			count: 3,
			discard: false,
		}
	},
	//外套と短剣
	Rune: {
		No: 322007,
		key: 'Rune',
		name: 'ルーンナイフ',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.skill,
		func: 'effectDefenseAndAddCommonCard',
		image:'images/card/djeeta_Rune.jpg',
		effect: `{B}ブロックを得る。ナイフを1枚手札に加える。`,
		amount: {
			cost: 1,
			block: 6,
			commonCard: 'Knife',
			count: 1,
			discard: false,
		}
	},
	//準備
	Refrain: {
		No: 322008,
		key: 'Refrain',
		name: 'リフレイン',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.skill,
		func: 'effectDrawAndTrash',
		image:'images/card/djeeta_Refrain.jpg',
		effect: `カードを{Dr}枚引き、1枚捨てる。`,
		amount: {
			cost: 0,
			draw: 1,
			discard: false,
		}
	},
	//致死毒
	Cocktail: {
		No: 322009,
		key: 'Cocktail',
		name: 'ポイズンカクテル',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.skill,
		func: 'effectDebuff',
		image:'images/card/djeeta_Cocktail.jpg',
		effect: `毒{D}を与える。`,
		amount: {
			cost: 1,
			debuff: 5,
			debuffType: 'poison',
			discard: false,
		}
	},
	//金切り声
	Sleep: {
		No: 322010,
		key: 'Sleep',
		name: '催眠針',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.skill,
		func: 'effectALLDoubleDebuff',
		image:'images/card/djeeta_Sleep.jpg',
		effect: `ターン終了まで、敵全体に攻撃力ダウン6を与える。廃棄。`,
		amount: {
			cost: 1,
			debuff1: 6,
			debuffType1: 'attackDown',
			debuff2: 6,
			debuffType2: 'invalidAttackDown',
			discard: true,
		}
	},
	//*********************************************アンコモン*********************************************//
	//とどめの一撃
	Shigure: {
		No: 331001,
		key: 'Shigure',
		name: '秋時雨',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectTimesAttackEveryAttack',
		image:'images/card/djeeta_Shigure.jpg',
		effect: `このターン使用した「アタック」の枚数ｘ{A}ダメージを与える。`,
		amount: {
			cost: 1,
			attack: 6,
			discard: false,
		}
	},
	//ダッシュ
	Smash: {
		No: 331002,
		key: 'Smash',
		name: 'スマッシュライザー',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAttackAndDefense',
		image:'images/card/djeeta_Smash.jpg',
		effect: `{B}ブロックを得る。{A}ダメージを与える。`,
		amount: {
			cost: 2,
			attack: 10,
			block: 10,
			discard: false,
		}
	},
	//ハチの巣
	Doobie: {
		No: 331003,
		key: 'Doobie',
		name: 'ドゥービーショット',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectTimesAttack',
		image:'images/card/djeeta_Doobie.jpg',
		effect: `{A}ダメージを{C}回与える。`,
		amount: {
			cost: 2,
			attack: 3,
			count: 5,
			discard: false,
		}
	},
	//ヒールフック
	Wheel: {
		No: 331004,
		key: 'Wheel',
		name: 'セラフホウィール',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAttackAndConditionsWeak',
		image:'images/card/djeeta_Wheel.jpg',
		effect: `{A}ダメージを与える。敵が恐怖を受けている場合は{E}エナジーを得てカードを{Dr}枚引く。`,
		amount: {
			cost: 1,
			attack: 5,
			energy: 1,
			draw: 1,
			discard: false,
		}
	},
	//フルアタック
	Blaze: {
		No: 331005,
		key: 'Blaze',
		name: 'セラフブレイズ',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAllAttackAndRandomTrash',
		image:'images/card/djeeta_Blaze.jpg',
		effect: `敵全体に{A}ダメージを与える。手札をランダムに1枚捨てる。`,
		amount: {
			cost: 1,
			attack: 10,
			discard: false,
		}
	},
	//フレシェット
	Instruction: {
		No: 331006,
		key: 'Instruction',
		name: '魔星の指南書',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectTimesAttackEverySkillCard',
		image:'images/card/djeeta_Instruction.jpg',
		effect: `手札にある「スキル」の枚数ｘ{A}ダメージを与える。`,
		amount: {
			cost: 1,
			attack: 4,
			discard: false,
		}
	},
	//一撃必殺
	Perfeed: {
		No: 331007,
		key: 'Perfeed',
		name: 'ペルフィード',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAttack',
		image:'images/card/djeeta_Perfeed.jpg',
		effect: `{A}ダメージを与える。ダメージを受けるたび、このカードのコストが1増加。`,
		amount: {
			cost: 0,
			originCost: 0,
			costChange:'changeCostUpEveryDamage',
			attack: 12,
			discard: false,
		}
	},
	//串刺し
	Agastia: {
		No: 331008,
		key: 'Agastia',
		name: 'アガスティア・ダブル',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAttackXTimes',
		image:'images/card/djeeta_Agastia.jpg',
		effect: `{A}ダメージをX回与える。`,
		amount: {
			cost: 'X',
			variable: 0,
			attack: 7,
			discard: false,
		}
	},
	//略奪
	Mimic: {
		No: 331009,
		key: 'Mimic',
		name: 'ミニック',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAttackAndBuff',
		image:'images/card/djeeta_Mimic.jpg',
		effect: `{A}ダメージを与える。次のターン開始時、カードを{F}枚引く。`,
		amount: {
			cost: 2,
			attack: 15,
			buff: 2,
			buffType: 'nextTurnDraw',
			discard: false,
		}
	},
	//窒息
	Leviathan: {
		No: 331010,
		key: 'Leviathan',
		name: 'リヴァイアサン・ミニステル',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAttackAndDebuff',
		image:'images/card/djeeta_Leviathan.jpg',
		effect: `{A}ダメージを与える。このターンでカードを使用するたび、ターゲットの敵がHP{D}を失う。`,
		amount: {
			cost: 2,
			attack: 12,
			debuff: 3,
			debuffType: 'suffocation',
			discard: false,
		}
	},
	//終わりなき苦痛
	Spada: {
		No: 331011,
		key: 'Spada',
		name: 'イルジオーネ・スパーダ',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAttack',
		image:'images/card/djeeta_Spada.jpg',
		effect: `このカードを引くたび、「イルジオーネ・スパーダ」を手札に加える。{A}ダメージを与える。廃棄。`,
		amount: {
			cost: 0,
			drawFanc: 'drawReproduction',
			attack: 4,
			discard: true,
		}
	},
	//腹裂き
	GiveUp: {
		No: 331012,
		key: 'GiveUp',
		name: 'ネバーギブアップ',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectTimesAllAttack',
		image:'images/card/djeeta_GiveUp.jpg',
		effect: `このターンに捨てたカード1枚につき、使用コストが-1。{A}ダメージを3回与える。`,
		amount: {
			cost: 3,
			originCost: 3,
			costChange:'changeCostDownEveryTrash',
			attack: 7,
			count: 3,
			discard: false,
		}
	},
	//騙し討ち
	Iai: {
		No: 331013,
		key: 'Iai',
		name: '居合スラッシュ',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAttack',
		image:'images/card/djeeta_Iai.jpg',
		effect: `{A}ダメージを与える。天賦。廃棄。`,
		amount: {
			gift: true,
			cost: 0,
			attack: 11,
			discard: true,
		}
	},
	//******************************スキル******************************//
	//イカサマ
	Branch: {
		No: 332001,
		key: 'Branch',
		name: '天導樹の枝',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectAllTrashAndDraw',
		image:'images/card/djeeta_Branch.jpg',
		effect: `手札をすべて捨て、同じ枚数だけカードを引く。廃棄。`,
		amount: {
			cost: 0,
			discard: true,
		}
	},
	//セットアップ
	Justice: {
		No: 332002,
		key: 'Justice',
		name: 'ザ・ジャスティス',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectPutCardDeckTop',
		image:'images/card/djeeta_Justice.jpg',
		effect: `手札のカード1枚を山札の1番上に置く。プレイされるまでそのコストは0`,
		amount: {
			cost: 1,
			discard: false,
		}
	},
	//バウンドフラスコ
	BlackishPurple: {
		No: 332003,
		key: 'BlackishPurple',
		name: '黒紫羽',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectTimesRandomDebuff',
		image:'images/card/djeeta_BlackishPurple.jpg',
		effect: `ランダムな敵に毒{D}を{C}回与える。`,
		amount: {
			cost: 2,
			debuff: 3,
			debuffType: 'invalidAttackUp',
			count: 3,
			discard: false,
		}
	},
	//劇毒
	Cell: {
		No: 332004,
		key: 'Cell',
		name: '壊獣細胞',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectALLDoubleDebuff',
		image:'images/card/djeeta_Cell.jpg',
		effect: `敵全体に毒4と恐怖2を与える。廃棄。`,
		amount: {
			cost: 2,
			debuff1: 4,
			debuffType1: 'poison',
			debuff2: 2,
			debuffType2: 'weak',
			discard: true,
		}
	},
	//反射
	Tactics: {
		No: 332005,
		key: 'Tactics',
		name: '戦術',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.skill,
		func: '',
		image:'images/card/djeeta_Tactics.jpg',
		effect: `使用不可。このカードを捨てたとき、カードを{Dr}枚引く。`,
		amount: {
			cost: 99,
			draw: 2,
			discard: false,
			trashFunc: 'effectDraw',
		}
	},
	//恐怖
	Penalty: {
		No: 332006,
		key: 'Penalty',
		name: 'ペナルティ',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectDebuff',
		image:'images/card/djeeta_Penalty.jpg',
		effect: `防御ダウン99を与える。廃棄。`,
		amount: {
			cost: 1,
			debuff: 99,
			debuffType: 'defenseDown',
			discard: true,
		}
	},
	//策士
	Supply: {
		No: 332007,
		key: 'Supply',
		name: '補給',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.skill,
		func: '',
		image:'images/card/djeeta_Supply.jpg',
		effect: `使用不可。このカードを捨てた時、{E}エナジーを得る。`,
		amount: {
			cost: 99,
			energy: 1,
			discard: false,
			trashFunc: 'effectGetEnergy'
		}
	},
	//職人技
	Sun: {
		No: 332008,
		key: 'Sun',
		name: 'ザ・サン',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectCountDraw',
		image:'images/card/djeeta_Sun.jpg',
		effect: `手札が{C}枚になるまでカードを引く。`,
		amount: {
			cost: 1,
			count: 6,
			discard: false,
		}
	},
	//脱出計画
	Shell: {
		No: 332009,
		key: 'Shell',
		name: '執明真甲',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectDrawAndSkillDefense',
		image:'images/card/djeeta_Shell.jpg',
		effect: `カードを{Dr}枚引く。引いたカードが「スキル」の場合、{B}ブロックを得る。`,
		amount: {
			cost: 0,
			drow: 1,
			block: 3,
			discard: false,
		}
	},
	//触媒
	Chain: {
		No: 332010,
		key: 'Chain',
		name: '凶毒の穿鎖',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectTimesDebuff',
		image:'images/card/djeeta_Chain.jpg',
		effect: `敵の毒を2倍にする。廃棄。`,
		amount: {
			cost: 1,
			debuffType: 'poison',
			times: 2,
			discard: true,
		}
	},
	//足払い
	LawWheel: {
		No: 332011,
		key: 'LawWheel',
		name: '転舞法輪',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectDefenseAndBuff',
		image:'images/card/djeeta_LawWheel.jpg',
		effect: `恐怖{D}を与える。{B}のブロックを得る。`,
		amount: {
			cost: 2,
			block: 11,
			debuff: 2,
			debuffType: 'weak',
			discard: false,
		}
	},
	//集中
	Noodles: {
		No: 332012,
		key: 'Noodles',
		name: '替え玉一丁！',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectThreeTrashAndGetEnergy',
		image:'images/card/djeeta_Noodles.jpg',
		effect: `カードを3枚捨てる。{E}エナジーを得る。`,
		amount: {
			cost: 0,
			energy: 2,
			discard: false,
		}
	},
	//ブラー
	LuWoh: {
		No: 332013,
		key: 'LuWoh',
		name: 'ル・オー・ミニステル',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectDefenseAndBuff',
		image:'images/card/djeeta_LuWoh.jpg',
		effect: `{B}ブロックを得る。次のターン開始時にブロックを失わない。`,
		amount: {
			cost: 1,
			block: 5,
			buff: '',
			buffType: 'lightWall',
			discard: false,
		}
	},
	
/*	//動揺
	test1: {
		key: '',
		name: '',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.skill,
		func: '',
		image:'images/card/djeeta_.jpg',
		effect: `ランダムな「スキル」を1枚手札に加える。このターンそのカードのコストは0。廃棄`,
		amount: {
			cost: 0,
			discard: true,
		}
	},
*/
	//******************************パワー******************************//
	//まきびし
	Aura: {
		No: 333001,
		key: 'Aura',
		name: '闇のオーラ',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/djeeta_Aura.jpg',
		effect: `攻撃を受けるたび、攻撃を行った敵に{F}ダメージを与える。`,
		amount: {
			cost: 1,
			buff: 3,
			buffType: 'counter',
		}
	},
	//フットワーク
	Runner: {
		No: 333002,
		key: 'Runner',
		name: 'ランナーズハイ',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/djeeta_Runner.jpg',
		effect: `回避率アップ{F}を得る。`,
		amount: {
			cost: 1,
			buff: 2,
			buffType: 'dexterity',
		}
	},
	//有毒ガス
	Grudge: {
		No: 333003,
		key: 'Grudge',
		name: '怨怨',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/djeeta_Grudge.jpg',
		effect: `ターン開始時に、敵全体に毒{F}を与える。`,
		amount: {
			cost: 1,
			buff: 2,
			buffType: 'grudge',
		}
	},
	//無限の刃
	FlyingBlade: {
		No: 333004,
		key: 'FlyingBlade',
		name: '無限の飛刃',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/djeeta_FlyingBlade.jpg',
		effect: `ターン開始時に、ナイフを{F}枚手札に加える。`,
		amount: {
			cost: 1,
			buff: 1,
			buffType: 'infinite',
		}
	},
	//用意周到
	Decomposition: {
		No: 333005,
		key: 'Decomposition',
		name: '再構築',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/djeeta_Decomposition.jpg',
		effect: `ターン終了時に、カードを{F}枚保留する。`,
		amount: {
			cost: 1,
			buff: 1,
			buffType: 'repair',
		}
	},

	//精度上昇
	Telescope: {
		No: 333006,
		key: 'Telescope',
		name: '精度上昇',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/djeeta_Telescope.jpg',
		effect: `ナイフが{F}の追加ダメージを与える。`,
		amount: {
			cost: 1,
			buff: 4,
			buffType: 'hitRate',
		}
	},
	//*********************************************レア*********************************************//
	//アンロード
	Roses: {
		No: 341001,
		key: 'Roses',
		name: 'ブルー・ローゼス',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.attack,
		func: 'effectAttackAndNoAttackTrash',
		image:'images/card/djeeta_Roses.jpg',
		effect: `{A}ダメージを与える。「アタック」以外の全てのカードを捨てる。`,
		amount: {
			cost: 1,
			attack: 14,
			discard: false,
		}
	},
	//ガラスのナイフ
	Ominous: {
		No: 341002,
		key: 'Ominous',
		name: 'ウルヴォルラーネ',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.attack,
		func: 'effectTimesAttackAndDamageDown',
		image:'images/card/djeeta_Ominous.jpg',
		effect: `{A}ダメージを2回与える。この戦闘中はウルヴォルラーネのダメージが-2低下する。`,
		amount: {
			cost: 1,
			attack: 8,
			count: 2,
			attackDown: 2,
			discard: false,
		}
	},
	//グランドフィナーレ
	Blossom: {
		No: 341003,
		key: 'Blossom',
		name: 'デスブロッサム',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.attack,
		func: 'effectAllAttack',
		image:'images/card/djeeta_Blossom.jpg',
		effect: `山札にカードがない時だけ使用可能。敵全体に50ダメージを与える。`,
		amount: {
			conditions: 'conditionsNoDeck', // 発動条件
			cost: 0,
			attack: 50,
			discard: false,
		}
	},
	//ダイ、ダイ、ダイ！
	Zetsu: {
		No: 341004,
		key: 'Zetsu',
		name: '絶',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.attack,
		func: 'effectAllAttack',
		image:'images/card/djeeta_Zetsu.jpg',
		effect: `敵全体に{A}ダメージを与える。廃棄。`,
		amount: {
			cost: 1,
			attack: 13,
			discard: true,
		}
	},
	//******************************スキル******************************//
	//アドレナリン
	Record: {
		No: 342001,
		key: 'Record',
		name: 'シーイング・レコード',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.skill,
		func: 'effectGetEnergyAndDraw',
		image:'images/card/djeeta_Record.jpg',
		effect: `{E}エナジーを得る。カードを{Dr}枚引く。廃棄`,
		amount: {
			cost: 0,
			energy: 1,
			draw: 2,
			discard: true,
		}
	},
	//ドッペルゲンガー
	Aethos: {
		No: 342002,
		key: 'Aethos',
		name: 'アエトス・オブ・ワールド',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.skill,
		func: 'effectGetEnergyAndDrawXTimes',
		image:'images/card/djeeta_Aethos.jpg',
		effect: `次のターンにX枚のカードを引きXのエナジーを得る。廃棄。`,
		amount: {
			cost: 'X',
			variable: 0,
			discard: true,
		}
	},
	//バレットタイム
	Bailout: {
		No: 342003,
		key: 'Bailout',
		name: 'ベイルアウト',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.skill,
		func: 'effectDebuffAndCostDown',
		image:'images/card/djeeta_Bailout.jpg',
		effect: `このターン、カードを引くことができない。このターン、あなたの手札のコストは0になる。`,
		amount: {
			cost: 3,
			debuff: '',
			debuffType: 'noDraw',
			discard: false,
		}
	},
	//バースト
	Cat: {
		No: 342004,
		key: 'Cat',
		name: '新神気鋭・猫の印',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.skill,
		func: 'effectBuff',
		image:'images/card/djeeta_Cat.jpg',
		effect: `このターン、次の「スキル」を2回プレイする。`,
		amount: {
			cost: 1,
			buff: 1,
			buffType: 'skillCombo',
			discard: true,
		}
	},
	//不快感
	Petrification: {
		No: 342005,
		key: 'Petrification',
		name: 'フルグライト',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.skill,
		func: 'effectXTimesDoubleDebuff',
		image:'images/card/djeeta_Petrification.jpg',
		effect: `敵は攻撃力ダウンXと恐怖Xを与える。廃棄。`,
		amount: {
			cost: 'X',
			variable: 0,
			debuffType1: 'attackDown',
			debuffType2: 'weak',
			discard: true,
		}
	},
	//幻影の暗殺者
	Ereshkigal: {
		No: 342006,
		key: 'Ereshkigal',
		name: 'エレシュキガル',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.skill,
		func: 'effectBuff',
		image:'images/card/djeeta_Ereshkigal.jpg',
		effect: `次のターン、「アタック」のダメージが2倍になる。`,
		amount: {
			cost: 1,
			buff: 1,
			buffType: 'Ereshkigal',
			discard: false,
		}
	},
	//悪夢
	Cerberus: {
		No: 342007,
		key: 'Cerberus',
		name: 'ケルベロス',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.skill,
		func: 'effectReproductionToNextTurn',
		image:'images/card/djeeta_Cerberus.jpg',
		effect: `手札のカード1枚を選ぶ、次のターン、そのカードの複製を3枚手札に加える。廃棄。`,
		amount: {
			cost: 3,
			buff: 3,
			buffType: 'mirror',
			discard: false,
		}
	},
	//死体爆破
	Autophagy: {
		No: 342008,
		key: 'Autophagy',
		name: '自壊因子',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.skill,
		func: 'effectDoubleDebuff',
		image:'images/card/djeeta_Autophagy.jpg',
		effect: `毒6を与える。対象の敵が死亡した時、その最大HPに等しいダメージをすべての敵に与える。`,
		amount: {
			cost: 2,
			debuff1: 6,
			debuffType1: 'poison',
			debuff2: 1,
			debuffType2: 'autophagy',
			discard: false,
		}
	},
	//鋼の嵐
	Mirror: {
		No: 342009,
		key: 'Mirror',
		name: '刃鏡の短剣',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.skill,
		func: 'effectAllTrashAndGetCommonCard',
		image:'images/card/djeeta_Mirror.jpg',
		effect: `手札をすべて捨てる。捨てたカード1枚につきナイフを1枚手札に加える。`,
		amount: {
			cost: 3,
			commonCard: 'Knife',
			discard: false,
		}
	},
	//******************************パワー******************************//
	//メッタ切り
	Parazonium: {
		No: 343001,
		key: 'Parazonium',
		name: 'パラゾニウム',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/djeeta_Parazonium.jpg',
		effect: `カードをプレイするたび、敵全体に{F}ダメージを与える。`,
		amount: {
			cost: 2,
			buff: 1,
			buffType: 'Bonus',
		}
	},
	//商売道具
	CaitSea: {
		No: 343002,
		key: 'CaitSea',
		name: 'ケット・シー',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/djeeta_CaitSea.jpg',
		effect: `ターン開始時に、カードを{F}枚引き、{F}枚捨てる。`,
		amount: {
			cost: 1,
			buff: 1,
			buffType: 'caitSea',
		}
	},
	//死霊化
	NewWarld: {
		No: 343003,
		key: 'NewWarld',
		name: '新世界の盾',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.power,
		func: 'effectBuffAndDebuff',
		image:'images/card/djeeta_NewWarld.jpg',
		effect: `ダメージカット{F}を得る。ターン終了時ごとに回避率ダウン{D}を得る。`,
		amount: {
			cost: 3,
			buff: 2,
			buffType: 'damageCut',
			debuff: 1,
			debuffType: 'slowing',
		}
	},
	//残像
	Lamentation: {
		No: 343004,
		key: 'Archangel',
		name: '嘆きの盾',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/djeeta_Lamentation.jpg',
		effect: `カードを1枚プレイするたび、{F}ブロックを得る。`,
		amount: {
			cost: 1,
			buff: 1,
			buffType: 'lamentation',
		}
	},
	//猛毒の仕込み
	Lich: {
		No: 343005,
		key: 'Lich',
		name: 'リッチ',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/djeeta_Lich.jpg',
		effect: `「アタック」でダメージを与えるたび、毒1を与える。`,
		amount: {
			cost: 2,
			buff: 1,
			buffType: 'lich',
		}
	},
};

const djeetaEnhancedCardList = {
	Wide: {
		No:411001,
		name: '<span class="upgrade">ワイドブレード+</span>',
		class: cardClass.djeeta,
		rarity: rarity.starter,
		type: type.attack,
		func: 'effectAttack',
		image:'images/card/djeeta_Wide.jpg',
		effect: '<span class="upgrade">{A}</span>のダメージを与える。',
		amount: {
			cost: 1,
			attack: 9,
			discard: false,
		}
	},
	//無力化
	Assassin: {
		No:411002,
		name: '<span class="upgrade">アサシンブレード+</span>',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectAttackAndDebuff',
		image:'images/card/djeeta_Assassin.jpg',
		effect: `<span class="upgrade">{A}</span>ダメージを与える。恐怖<span class="upgrade">{D}</span>を与える。`,
		amount: {
			cost: 0,
			attack: 4,
			debuff: 2,
			debuffType: 'weak',
			discard: false,
		}
	},
	Defense: {
		No:412001,
		name: '<span class="upgrade">防御+</span>',
		class: cardClass.djeeta,
		rarity: rarity.starter,
		type: type.skill,
		func: 'effectDefense',
		image:'images/card/djeeta_Defense.jpg',
		effect: '<span class="upgrade">{B}</span>ブロックを得る。',
		amount: {
			cost: 1,
			block: 8,
			discard: false,
		}
	},
	//サバイバー
	Pulverizer: {
		No:412002,
		name: '<span class="upgrade">パルバライザー+</span>',
		class: cardClass.djeeta,
		rarity: rarity.starter,
		type: type.skill,
		func: 'effectDefenseAndTrash',
		image:'images/card/djeeta_Pulverizer.jpg',
		effect: '<span class="upgrade">{B}</span>ブロックを得る。カードを1枚捨てる。',
		amount: {
			cost: 1,
			block: 11,
			discard: false,
		}
	},
	/********************************************* コモン *********************************************/
	//はやぶさ斬り
	Removal: {
		No:421001,
		name: '<span class="upgrade">芽摘+</span>',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectAttackAndDraw',
		image:'images/card/djeeta_Removal.jpg',
		effect: `<span class="upgrade">{A}</span>ダメージを与える。カードを{Dr}枚引く。`,
		amount: {
			cost: 1,
			attack: 12,
			draw: 1,
			discard: false,
		}
	},
	//スライス
	Kill: {
		No:421002,
		name: '<span class="upgrade">キリング・ダガー+</span>',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectAttack',
		image:'images/card/djeeta_Kill.jpg',
		effect: `<span class="upgrade">{A}</span>ダメージを与える。`,
		amount: {
			cost: 0,
			attack: 9,
			discard: false,
		}
	},
	//ダガースロー
	World: {
		No:421003,
		name: '<span class="upgrade">アラウンドザワールド+</span>',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectAttackAndDrawAndTrash',
		image:'images/card/djeeta_World.jpg',
		effect: `<span class="upgrade">{A}</span>ダメージを与える。カードを1枚引き、1枚捨てる。`,
		amount: {
			cost: 1,
			attack: 12,
			draw: 1,
			discard: false,
		}
	},
	//不意打ち
	Fast: {
		No:421004,
		name: '<span class="upgrade">ファストスライサー+</span>',
		class: cardClass.djeeta,
		rarity: rarity.starter,
		type: type.attack,
		func: 'effectAttackAndDebuff',
		image:'images/card/djeeta_Fast.jpg',
		effect: `<span class="upgrade">{A}</span>ダメージを与える。恐怖<span class="upgrade">{D}</span>を与える。`,
		amount: {
			cost: 1,
			attack: 9,
			debuff: 2,
			debuffType: 'weak',
			discard: false,
		}
	},
	//五月雨ダガー
	Rain: {
		No:421005,
		name: '<span class="upgrade">アローレイン+</span>',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectTimesAllAttack',
		image:'images/card/djeeta_Rain.jpg',
		effect: `全ての敵に<span class="upgrade">{A}</span>ダメージを{C}回与える。`,
		amount: {
			cost: 1,
			attack: 6,
			count: 2,
			discard: false,
		}
	},
	//スニーキーストライク
	Kamaitachi: {
		No:421006,
		name: '<span class="upgrade">鎌鼬+</span>',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectAttackAndGetEnergy',
		image:'images/card/djeeta_Kamaitachi.jpg',
		effect: `<span class="upgrade">{A}</span>ダメージを与える。このターンにカードを捨てていれば、{E}エナジーを得る。`,
		amount: {
			cost: 2,
			attack: 16,
			energy: 2,
			discard: false,
		}
	},
	//毒の一刺し
	True: {
		No:421007,
		name: '<span class="upgrade">ポイズンスラスト+</span>',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectAttackAndDebuff',
		image:'images/card/djeeta_True.jpg',
		effect: `<span class="upgrade">{A}</span>ダメージを与える。毒<span class="upgrade">{D}</span>を与える。`,
		amount: {
			cost: 1,
			attack: 8,
			debuff: 4,
			debuffType: 'poison',
			discard: false,
		}
	},
	//破滅
	Dead: {
		No:421008,
		name: '<span class="upgrade">デッドウェッジ+</span>',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectAttackAndConditionsPoison',
		image:'images/card/djeeta_Dead.jpg',
		effect: `<span class="upgrade">{A}</span>ダメージを与える。敵が毒を受けている場合、さらに<span class="upgrade">{A}</span>ダメージを与える。`,
		amount: {
			cost: 1,
			attack: 10,
			additionalAttack: 10,
			discard: false,
		}
	},
	//飛び膝蹴り
	Circle: {
		No:421009,
		name: '<span class="upgrade">サークル+</span>',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectAttackAndBuff',
		image:'images/card/djeeta_Circle.jpg',
		effect: `<span class="upgrade">{A}</span>ダメージを与える。次のターン、{F}エナジーを得る。`,
		amount: {
			cost: 1,
			attack: 11,
			buff: 1,
			buffType: 'activity',
			discard: false,
		}
	},
	//******************************スキル******************************//
	//アクロバット
	Preparation: {
		No:422001,
		name: '<span class="upgrade">戦闘準備+</span>',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.skill,
		func: 'effectDrawAndTrash',
		image:'images/card/djeeta_Preparation.jpg',
		effect: `カードを<span class="upgrade">{Dr}</span>枚引く。カードを1枚捨てる。`,
		amount: {
			cost: 1,
			draw: 4,
			discard: false,
		}
	},
	//ディフレクト
	Twill: {
		No:422002,
		name: '<span class="upgrade">ツイルコート+</span>',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.skill,
		func: 'effectDefense',
		image:'images/card/djeeta_Twill.jpg',
		effect: `<span class="upgrade">{B}</span>ブロックを得る。`,
		amount: {
			cost: 0,
			block: 7,
			discard: false,
		}
	},
	//ドッジロール
	Knight: {
		No:422003,
		name: '<span class="upgrade">ナイトシールド+</span>',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.skill,
		func: 'effectDefenseAndBuff',
		image:'images/card/djeeta_Knight.jpg',
		effect: `<span class="upgrade">{B}</span>ブロックを得る。次のターン、<span class="upgrade">{F}</span>ブロックを得る。`,
		amount: {
			cost: 1,
			block: 6,
			buff: 6,
			buffType: 'nextTurnBlock',
			discard: false,
		}
	},
	//バックフリップ
	Yggdrasil: {
		No:422004,
		name: '<span class="upgrade">ユグドラシル・ミニステル+</span>',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.skill,
		func: 'effectDefenseAndDraw',
		image:'images/card/djeeta_Yggdrasil.jpg',
		effect: `<span class="upgrade">{B}</span>ブロックを得る。カードを{Dr}枚引く。`,
		amount: {
			cost: 1,
			block: 8,
			draw: 2,
			discard: false,
		}
	},
	//先読み
	Extinction: {
		No:422005,
		name: '<span class="upgrade">滅尽の覇気+</span>',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.skill,
		func: 'effectBuff',
		image:'images/card/djeeta_Extinction.jpg',
		effect: `次のターン<span class="upgrade">{F}</span>エナジーを得る。`,
		amount: {
			cost: 1,
			buff: 3,
			buffType: 'activity',
			discard: false,
		}
	},
	//剣の舞
	Leiomano: {
		No:422006,
		name: '<span class="upgrade">レイオマノ+</span>',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.skill,
		func: 'effectAddCommonCard',
		image:'images/card/djeeta_Leiomano.jpg',
		effect: `ナイフを<span class="upgrade">{C}</span>枚手札に加える。`,
		amount: {
			cost: 1,
			commonCard: 'Knife',
			count: 4,
			discard: false,
		}
	},
	//外套と短剣
	Rune: {
		No:422007,
		name: '<span class="upgrade">ルーンナイフ+</span>',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.skill,
		func: 'effectDefenseAndAddCommonCard',
		image:'images/card/djeeta_Rune.jpg',
		effect: `{B}ブロックを得る。ナイフを<span class="upgrade">{C}</span>枚手札に加える。`,
		amount: {
			cost: 1,
			block: 6,
			commonCard: 'Knife',
			count: 2,
			discard: false,
		}
	},
	//準備
	Refrain: {
		No:422008,
		name: '<span class="upgrade">リフレイン+</span>',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.skill,
		func: 'effectDrawAndTrash',
		image:'images/card/djeeta_Refrain.jpg',
		effect: `カードを<span class="upgrade">{Dr}</span>枚引き、<span class="upgrade">2</span>枚捨てる。`,
		amount: {
			cost: 0,
			draw: 2,
			discard: false,
		}
	},
	//致死毒
	Cocktail: {
		No:422009,
		name: '<span class="upgrade">ポイズンカクテル+</span>',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.skill,
		func: 'effectDebuff',
		image:'images/card/djeeta_Cocktail.jpg',
		effect: `毒<span class="upgrade">{D}</span>を与える。`,
		amount: {
			cost: 1,
			debuff: 7,
			debuffType: 'poison',
			discard: false,
		}
	},
	//金切り声
	Sleep: {
		No:422010,
		name: '<span class="upgrade">催眠針+</span>',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.skill,
		func: 'effectALLDoubleDebuff',
		image:'images/card/djeeta_Sleep.jpg',
		effect: `ターン終了まで、敵全体に攻撃力ダウン<span class="upgrade">{D1}</span>を与える。廃棄。`,
		amount: {
			cost: 1,
			debuff1: 8,
			debuffType1: 'attackDown',
			debuff2: 8,
			debuffType2: 'invalidAttackDown',
			discard: true,
		}
	},
	//*********************************************アンコモン*********************************************//
	//とどめの一撃
	Shigure: {
		No:431001,
		name: '<span class="upgrade">秋時雨+</span>',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectTimesAttackEveryAttack',
		image:'images/card/djeeta_Shigure.jpg',
		effect: `このターン使用した「アタック」の枚数ｘ<span class="upgrade">{A}</span>ダメージを与える。`,
		amount: {
			cost: 1,
			attack: 8,
			discard: false,
		}
	},
	//ダッシュ
	Smash: {
		No:431002,
		name: '<span class="upgrade">スマッシュライザー+</span>',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAttackAndDefense',
		image:'images/card/djeeta_Smash.jpg',
		effect: `<span class="upgrade">{B}</span>ブロックを得る。<span class="upgrade">{A}</span>ダメージを与える。`,
		amount: {
			cost: 2,
			attack: 13,
			block: 13,
			discard: false,
		}
	},
	//ハチの巣
	Doobie: {
		No:431002,
		name: '<span class="upgrade">ドゥービーショット+</span>',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectTimesAttack',
		image:'images/card/djeeta_Doobie.jpg',
		effect: `<span class="upgrade">{A}</span>ダメージを{C}回与える。`,
		amount: {
			cost: 2,
			attack: 4,
			count: 5,
			discard: false,
		}
	},
	//ヒールフック
	Wheel: {
		No:431003,
		name: '<span class="upgrade">セラフホウィール+</span>',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAttackAndConditionsWeak',
		image:'images/card/djeeta_Wheel.jpg',
		effect: `<span class="upgrade">{A}</span>ダメージを与える。敵が恐怖を受けている場合は{E}エナジーを得てカードを{Dr}枚引く。`,
		amount: {
			cost: 1,
			attack: 7,
			energy: 1,
			draw: 1,
			discard: false,
		}
	},
	//フルアタック
	Blaze: {
		No:431004,
		name: '<span class="upgrade">セラフブレイズ+</span>',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAllAttackAndRandomTrash',
		image:'images/card/djeeta_Blaze.jpg',
		effect: `敵全体に<span class="upgrade">{A}</span>ダメージを与える。手札をランダムに1枚捨てる。`,
		amount: {
			cost: 1,
			attack: 14,
			discard: false,
		}
	},
	//フレシェット
	Instruction: {
		No:431005,
		name: '<span class="upgrade">魔星の指南書+</span>',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectTimesAttackEverySkillCard',
		image:'images/card/djeeta_Instruction.jpg',
		effect: `手札にある「スキル」の枚数ｘ<span class="upgrade">{A}</span>ダメージを与える。`,
		amount: {
			cost: 1,
			attack: 6,
			discard: false,
		}
	},
	//一撃必殺
	Perfeed: {
		No:431006,
		name: '<span class="upgrade">ペルフィード+</span>',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAttack',
		image:'images/card/djeeta_Perfeed.jpg',
		effect: `<span class="upgrade">{A}</span>ダメージを与える。ダメージを受けるたび、このカードのコストが1増加。`,
		amount: {
			cost: 0,
			originCost: 0,
			costChange:'changeCostUpEveryDamage',
			attack: 16,
			discard: false,
		}
	},
	//串刺し
	Agastia: {
		No:431007,
		name: '<span class="upgrade">アガスティア・ダブル+</span>',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAttackXTimes',
		image:'images/card/djeeta_Agastia.jpg',
		effect: `<span class="upgrade">{A}</span>ダメージをX回与える。`,
		amount: {
			cost: 'X',
			variable: 0,
			attack: 10,
			discard: false,
		}
	},
	//略奪
	Mimic: {
		No:431008,
		name: '<span class="upgrade">ミニック+</span>',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAttackAndBuff',
		image:'images/card/djeeta_Mimic.jpg',
		effect: `<span class="upgrade">{A}</span>ダメージを与える。次のターン開始時、カードを{F}枚引く。`,
		amount: {
			cost: 2,
			attack: 20,
			buff: 2,
			buffType: 'nextTurnDraw',
			discard: false,
		}
	},
	//窒息
	Leviathan: {
		No:431009,
		name: '<span class="upgrade">リヴァイアサン・ミニステル+</span>',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAttackAndDebuff',
		image:'images/card/djeeta_Leviathan.jpg',
		effect: `{A}ダメージを与える。このターンでカードを使用するたび、ターゲットの敵がHP<span class="upgrade">{D}</span>を失う。`,
		amount: {
			cost: 2,
			attack: 12,
			debuff: 5,
			debuffType: 'suffocation',
			discard: false,
		}
	},
	//終わりなき苦痛
	Spada: {
		No:431010,
		name: '<span class="upgrade">イルジオーネ・スパーダ+</span>',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAttack',
		image:'images/card/djeeta_Spada.jpg',
		effect: `このカードを引くたび、「イルジオーネ・スパーダ」を手札に加える。<span class="upgrade">{A}</span>ダメージを与える。廃棄。`,
		amount: {
			cost: 0,
			drawFanc: 'drawReproduction',
			attack: 6,
			discard: true,
		}
	},
	//腹裂き
	GiveUp: {
		No:431011,
		name: '<span class="upgrade">ネバーギブアップ+</span>',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectTimesAllAttack',
		image:'images/card/djeeta_GiveUp.jpg',
		effect: `このターンに捨てたカード1枚につき、使用コストが-1。<span class="upgrade">{A}</span>ダメージを3回与える。`,
		amount: {
			cost: 3,
			originCost: 3,
			costChange:'changeCostDownEveryTrash',
			attack: 9,
			count: 3,
			discard: false,
		}
	},
	//騙し討ち
	Iai: {
		No:431012,
		name: '<span class="upgrade">居合スラッシュ+</span>',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAttack',
		image:'images/card/djeeta_Iai.jpg',
		effect: `<span class="upgrade">{A}</span>ダメージを与える。天賦。廃棄。`,
		amount: {
			gift: true,
			cost: 0,
			attack: 15,
			discard: true,
		}
	},
	//******************************スキル******************************//
	//イカサマ
	Branch: {
		No:432001,
		name: '<span class="upgrade">天導樹の枝+</span>',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectAllTrashAndDraw',
		image:'images/card/djeeta_Branch.jpg',
		effect: `手札をすべて捨て、同じ枚数だけカードを引く。`,
		amount: {
			cost: 0,
			discard: false,
		}
	},
	//セットアップ
	Justice: {
		No:432002,
		name: '<span class="upgrade">ザ・ジャスティス+</span>',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectPutCardDeckTop',
		image:'images/card/djeeta_Justice.jpg',
		effect: `手札のカード1枚を山札の1番上に置く。プレイされるまでそのコストは0`,
		amount: {
			cost: 0,
			discard: false,
		}
	},
	//バウンドフラスコ
	BlackishPurple: {
		No:432003,
		name: '<span class="upgrade">黒紫羽+</span>',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectTimesRandomDebuff',
		image:'images/card/djeeta_BlackishPurple.jpg',
		effect: `ランダムな敵に毒{D}を<span class="upgrade">{C}</span>回与える。`,
		amount: {
			cost: 2,
			debuff: 3,
			debuffType: 'invalidAttackUp',
			count: 4,
			discard: false,
		}
	},
	//劇毒
	Cell: {
		No:432004,
		name: '<span class="upgrade">壊獣細胞+</span>',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectALLDoubleDebuff',
		image:'images/card/djeeta_Cell.jpg',
		effect: `敵全体に毒<span class="upgrade">{D1}</span>と恐怖{D2}を与える。廃棄。`,
		amount: {
			cost: 2,
			debuff1: 7,
			debuffType1: 'poison',
			debuff2: 2,
			debuffType2: 'weak',
			discard: true,
		}
	},
/*	//動揺
	test1: {
		name: '',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.skill,
		func: '',
		image:'images/card/djeeta_.jpg',
		effect: `ランダムな「スキル」を1枚手札に加える。このターンそのカードのコストは0。廃棄`,
		amount: {
			cost: 0,
			discard: true,
		}
	},
*/
	//反射
	Tactics: {
		No:432005,
		name: '<span class="upgrade">戦術+</span>',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.skill,
		func: '',
		image:'images/card/djeeta_Tactics.jpg',
		effect: `使用不可。このカードを捨てたとき、カードを<span class="upgrade">{Dr}</span>枚引く。`,
		amount: {
			cost: 99,
			draw: 3,
			discard: false,
			trashFunc: 'effectDraw',
		}
	},
	//恐怖
	Penalty: {
		No:432006,
		name: '<span class="upgrade">ペナルティ+</span>',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectDebuff',
		image:'images/card/djeeta_Penalty.jpg',
		effect: `防御ダウン99を与える。廃棄。`,
		amount: {
			cost: 0,
			debuff: 99,
			debuffType: 'defenseDown',
			discard: true,
		}
	},
	//策士
	Supply: {
		No:432007,
		name: '<span class="upgrade">補給+</span>',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.skill,
		func: '',
		image:'images/card/djeeta_Supply.jpg',
		effect: `使用不可。このカードを捨てた時、<span class="upgrade">{E}</span>エナジーを得る。`,
		amount: {
			cost: 99,
			energy: 2,
			discard: false,
			trashFunc: 'effectGetEnergy'
		}
	},
	//職人技
	Sun: {
		No:432008,
		name: '<span class="upgrade">ザ・サン+</span>',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectCountDraw',
		image:'images/card/djeeta_Sun.jpg',
		effect: `手札が<span class="upgrade">{C}</span>枚になるまでカードを引く。`,
		amount: {
			cost: 1,
			count: 7,
			discard: false,
		}
	},
	//脱出計画
	Shell: {
		No:432009,
		name: '<span class="upgrade">執明真甲+</span>',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectDrawAndSkillDefense',
		image:'images/card/djeeta_Shell.jpg',
		effect: `カードを{Dr}枚引く。引いたカードが「スキル」の場合、<span class="upgrade">{B}</span>ブロックを得る。`,
		amount: {
			cost: 0,
			drow: 1,
			block: 5,
			discard: false,
		}
	},
	//触媒
	Chain: {
		No:432010,
		name: '<span class="upgrade">凶毒の穿鎖+</span>',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectTimesDebuff',
		image:'images/card/djeeta_Chain.jpg',
		effect: `敵の毒を<span class="upgrade">3</span>倍にする。廃棄。`,
		amount: {
			cost: 1,
			debuffType: 'poison',
			times: 3,
			discard: true,
		}
	},
	//足払い
	LawWheel: {
		No:432011,
		name: '<span class="upgrade">転舞法輪+</span>',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectDefenseAndBuff',
		image:'images/card/djeeta_LawWheel.jpg',
		effect: `恐怖<span class="upgrade">{D}</span>を与える。<span class="upgrade">{B}</span>のブロックを得る。`,
		amount: {
			cost: 2,
			block: 14,
			debuff: 3,
			debuffType: 'weak',
			discard: false,
		}
	},
	//集中
	Noodles: {
		No:432012,
		name: '<span class="upgrade">替え玉一丁！+</span>',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectTwoTrashAndGetEnergy',
		image:'images/card/djeeta_Noodles.jpg',
		effect: `カードを<span class="upgrade">2</span>枚捨てる。{E}エナジーを得る。`,
		amount: {
			cost: 0,
			energy: 2,
			discard: false,
		}
	},
	//ブラー
	LuWoh: {
		No:432013,
		name: '<span class="upgrade">ル・オー・ミニステル+</span>',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectDefenseAndBuff',
		image:'images/card/djeeta_LuWoh.jpg',
		effect: `<span class="upgrade">{B}</span>ブロックを得る。次のターン開始時にブロックを失わない。`,
		amount: {
			cost: 1,
			block: 8,
			buff: '',
			buffType: 'lightWall',
			discard: false,
		}
	},
	
	//******************************パワー******************************//
	//まきびし
	Aura: {
		No:433001,
		name: '<span class="upgrade">闇のオーラ+</span>',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/djeeta_Aura.jpg',
		effect: `攻撃を受けるたび、攻撃を行った敵に<span class="upgrade">{F}</span>ダメージを与える。`,
		amount: {
			cost: 1,
			buff: 5,
			buffType: 'counter',
		}
	},
	//フットワーク
	Runner: {
		No:433002,
		name: '<span class="upgrade">ランナーズハイ+</span>',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/djeeta_Runner.jpg',
		effect: `回避率アップ<span class="upgrade">{F}</span>を得る。`,
		amount: {
			cost: 1,
			buff: 3,
			buffType: 'dexterity',
		}
	},
	//有毒ガス
	Grudge: {
		No:433003,
		name: '<span class="upgrade">怨怨+</span>',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/djeeta_Grudge.jpg',
		effect: `ターン開始時に、敵全体に毒<span class="upgrade">{F}</span>を与える。`,
		amount: {
			cost: 1,
			buff: 3,
			buffType: 'grudge',
		}
	},
	//無限の刃
	FlyingBlade: {
		No:433004,
		name: '<span class="upgrade">無限の飛刃+</span>',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/djeeta_FlyingBlade.jpg',
		effect: `<span class="upgrade">天賦。</span>ターン開始時に、ナイフを{F}枚手札に加える。`,
		amount: {
			gift: true,
			cost: 1,
			buff: 1,
			buffType: 'infinite',
		}
	},
	//用意周到
	Decomposition: {
		No:433005,
		name: '<span class="upgrade">再利用+</span>',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/djeeta_Decomposition.jpg',
		effect: `ターン終了時に、カードを<span class="upgrade">{F}</span>枚保留する。`,
		amount: {
			cost: 1,
			buff: 2,
			buffType: 'repair',
		}
	},

	//精度上昇
	Telescope: {
		No:433006,
		name: '<span class="upgrade">精度上昇+</span>',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/djeeta_Telescope.jpg',
		effect: `ナイフが<span class="upgrade">{F}</span>の追加ダメージを与える。`,
		amount: {
			cost: 1,
			buff: 6,
			buffType: 'hitRate',
		}
	},
	//*********************************************レア*********************************************//
	//アンロード
	Roses: {
		No:441001,
		name: '<span class="upgrade">ブルー・ローゼス+</span>',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.attack,
		func: 'effectAttackAndNoAttackTrash',
		image:'images/card/djeeta_Roses.jpg',
		effect: `<span class="upgrade">{A}</span>ダメージを与える。「アタック」以外の全てのカードを捨てる。`,
		amount: {
			cost: 1,
			attack: 18,
			discard: false,
		}
	},
	//ガラスのナイフ
	Ominous: {
		No:441002,
		name: '<span class="upgrade">ウルヴォルラーネ+</span>',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.attack,
		func: 'effectTimesAttackAndDamageDown',
		image:'images/card/djeeta_Ominous.jpg',
		effect: `<span class="upgrade">{A}</span>ダメージを2回与える。この戦闘中はウルヴォルラーネのダメージが-2低下する。`,
		amount: {
			cost: 1,
			attack: 12,
			count: 2,
			attackDown: 2,
			discard: false,
		}
	},
	//グランドフィナーレ
	Blossom: {
		No:441003,
		name: '<span class="upgrade">デスブロッサム+</span>',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.attack,
		func: 'effectAllAttack',
		image:'images/card/djeeta_Blossom.jpg',
		effect: `山札にカードがない時だけ使用可能。敵全体に<span class="upgrade">{A}</span>ダメージを与える。`,
		amount: {
			conditions: 'conditionsNoDeck', // 発動条件
			cost: 0,
			attack: 60,
			discard: false,
		}
	},
	//ダイ、ダイ、ダイ！
	Zetsu: {
		No:441004,
		name: '<span class="upgrade">絶+</span>',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.attack,
		func: 'effectAllAttack',
		image:'images/card/djeeta_Zetsu.jpg',
		effect: `敵全体に<span class="upgrade">{A}</span>ダメージを与える。廃棄。`,
		amount: {
			cost: 1,
			attack: 17,
			discard: true,
		}
	},
	//******************************スキル******************************//
	//アドレナリン
	Record: {
		No:442001,
		name: '<span class="upgrade">シーイング・レコード+</span>',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.skill,
		func: 'effectGetEnergyAndDraw',
		image:'images/card/djeeta_Record.jpg',
		effect: `<span class="upgrade">{E}</span>エナジーを得る。カードを{Dr}枚引く。廃棄`,
		amount: {
			cost: 0,
			energy: 2,
			draw: 2,
			discard: true,
		}
	},
	//ドッペルゲンガー
	Aethos: {
		No:442002,
		name: '<span class="upgrade">アエトス・オブ・ワールド+</span>',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.skill,
		func: 'effectGetEnergyAndDrawXPlusOneTimes',
		image:'images/card/djeeta_Aethos.jpg',
		effect: `次のターンに<span class="upgrade">X+1</span>枚のカードを引き<span class="upgrade">X+1</span>のエナジーを得る。廃棄。`,
		amount: {
			cost: 'X',
			variable: 0,
			discard: true,
		}
	},
	//バレットタイム
	Bailout: {
		No:442003,
		name: '<span class="upgrade">ベイルアウト+</span>',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.skill,
		func: 'effectDebuffAndCostDown',
		image:'images/card/djeeta_Bailout.jpg',
		effect: `このターン、カードを引くことができない。このターン、あなたの手札のコストは0になる。`,
		amount: {
			cost: 2,
			debuff: '',
			debuffType: 'noDraw',
			discard: false,
		}
	},
	//バースト
	Cat: {
		No:442004,
		name: '<span class="upgrade">新神気鋭・猫の印+</span>',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.skill,
		func: 'effectBuff',
		image:'images/card/djeeta_Cat.jpg',
		effect: `このターン、次の<span class="upgrade">2つの</span>「スキル」を2回プレイする。`,
		amount: {
			cost: 1,
			buff: 2,
			buffType: 'skillCombo',
			discard: true,
		}
	},
	//不快感
	Petrification: {
		No:442005,
		name: '<span class="upgrade">フルグライト+</span>',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.skill,
		func: 'effectXPlusOneTimesDoubleDebuff',
		image:'images/card/djeeta_Petrification.jpg',
		effect: `敵は攻撃力ダウン<span class="upgrade">X+1</span>と恐怖<span class="upgrade">X+1</span>を与える。廃棄。`,
		amount: {
			cost: 'X',
			variable: 0,
			debuffType1: 'attackDown',
			debuffType2: 'weak',
			discard: true,
		}
	},
	//幻影の暗殺者
	Ereshkigal: {
		No:442006,
		name: '<span class="upgrade">エレシュキガル+</span>',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.skill,
		func: 'effectBuff',
		image:'images/card/djeeta_Ereshkigal.jpg',
		effect: `次のターン、「アタック」のダメージが2倍になる。`,
		amount: {
			cost: 0,
			buff: 1,
			buffType: 'Ereshkigal',
			discard: false,
		}
	},
	//悪夢
	Cerberus: {
		No:442007,
		name: '<span class="upgrade">ケルベロス+</span>',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.skill,
		func: 'effectReproductionToNextTurn',
		image:'images/card/djeeta_Cerberus.jpg',
		effect: `手札のカード1枚を選ぶ、次のターン、そのカードの複製を3枚手札に加える。廃棄。`,
		amount: {
			cost: 2,
			buff: 3,
			buffType: 'mirror',
			discard: false,
		}
	},
	//死体爆破
	Autophagy: {
		No:442008,
		name: '<span class="upgrade">自壊因子+</span>',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.skill,
		func: 'effectDoubleDebuff',
		image:'images/card/djeeta_Autophagy.jpg',
		effect: `毒<span class="upgrade">{D1}</span>を与える。対象の敵が死亡した時、その最大HPに等しいダメージをすべての敵に与える。`,
		amount: {
			cost: 2,
			debuff1: 9,
			debuffType1: 'poison',
			debuff2: 1,
			debuffType2: 'autophagy',
			discard: false,
		}
	},
	//鋼の嵐
	Mirror: {
		No:442009,
		name: '<span class="upgrade">刃鏡の短剣+</span>',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.skill,
		func: 'effectAllTrashAndGetUGCommonCard',
		image:'images/card/djeeta_Mirror.jpg',
		effect: `手札をすべて捨てる。捨てたカード1枚につき<span class="upgrade">アップグレードした</span>ナイフを1枚手札に加える。`,
		amount: {
			cost: 3,
			commonCard: 'Knife',
			discard: false,
		}
	},
	//******************************パワー******************************//
	//メッタ切り
	Parazonium: {
		No:443001,
		name: '<span class="upgrade">パラゾニウム+</span>',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/djeeta_Parazonium.jpg',
		effect: `カードをプレイするたび、敵全体に<span class="upgrade">{F}</span>ダメージを与える。`,
		amount: {
			cost: 2,
			buff: 2,
			buffType: 'Bonus',
		}
	},
	//商売道具
	CaitSea: {
		No:443002,
		name: '<span class="upgrade">ケット・シー+</span>',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/djeeta_CaitSea.jpg',
		effect: `ターン開始時に、カードを{F}枚引き、{F}枚捨てる。`,
		amount: {
			cost: 0,
			buff: 1,
			buffType: 'caitSea',
		}
	},
	//死霊化
	NewWarld: {
		No:443003,
		name: '<span class="upgrade">新世界の盾+</span>',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.power,
		func: 'effectBuffAndDebuff',
		image:'images/card/djeeta_NewWarld.jpg',
		effect: `ダメージカット<span class="upgrade">{F}</span>を得る。ターン終了時ごとに回避率ダウン{D}を得る。`,
		amount: {
			cost: 3,
			buff: 3,
			buffType: 'damageCut',
			debuff: 1,
			debuffType: 'slowing',
		}
	},
	//残像
	Lamentation: {
		No:443004,
		name: '<span class="upgrade">嘆きの盾+</span>',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/djeeta_Lamentation.jpg',
		effect: `<span class="upgrade">天賦。</span>カードを1枚プレイするたび、{F}ブロックを得る。`,
		amount: {
			gift: true,
			cost: 1,
			buff: 1,
			buffType: 'lamentation',
		}
	},
	//猛毒の仕込み
	Lich: {
		No:443005,
		name: '<span class="upgrade">リッチ+</span>',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.power,
		func: 'effectBuff',
		image:'images/card/djeeta_Lich.jpg',
		effect: `「アタック」でダメージを与えるたび、毒1を与える。`,
		amount: {
			cost: 1,
			buff: 1,
			buffType: 'lich',
		}
	},
};
const commonCardList = {
	Knife: {
		No:511001,
		key: 'Knife',
		name: '投げナイフ',
		class: cardClass.common,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectKnifeAttack',
		image:'images/card/common_Knife.jpg',
		effect: `{A}ダメージを与える。廃棄。`,
		amount: {
			cost: 0,
			attack: 4,
			originAttack: 4,
			discard: true,
		}
	},
};
const commonEnhancedCardList = {
	Knife: {
		No:611001,
		name: '<span class="upgrade">投げナイフ+</span>',
		class: cardClass.common,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectKnifeAttack',
		image:'images/card/common_Knife.jpg',
		effect: `<span class="upgrade">{A}</span>ダメージを与える。廃棄。`,
		amount: {
			cost: 0,
			attack: 6,
			originAttack: 6,
			discard: true,
		}
	},
};

const abnormalCardList = {
	Mucus: {
		No:914001,
		name: '粘液',
		class: cardClass.abnormal,
		rarity: rarity.common,
		type: type.abnormal,
		func: '',
		image:'images/card/abnormal_Mucus.jpg',
		effect: `廃棄。`,
		amount: {
			cost: 1,
			discard: true,
		}
	},
	Injury: {
		No:914001,
		name: '負傷',
		class: cardClass.abnormal,
		rarity: rarity.common,
		type: type.abnormal,
		func: '',
		image:'images/card/abnormal_Injury.jpg',
		effect: `使用不可。`,
		amount: {
			cost: 99,
			discard: true,
		}
	},
	Curse: {
		No:914003,
		name: '呪いの紋章',
		class: cardClass.abnormal,
		cost: 99,
		rarity: rarity.common,
		type: type.abnormal,
		func: '',
		image:'images/card/abnormal_Curse.jpg',
		effect: `使用不可。このカードを引いたとき、エナジーを1失う。エセリアル。`,
		amount: {
			cost: 99,
			discard: true,
		}
	},
	Burn: {
		No:914004,
		name: '火傷',
		class: cardClass.abnormal,
		rarity: rarity.common,
		type: type.abnormal,
		func: '',
		image:'images/card/abnormal_Burn.jpg',
		effect: `使用不可。ターン終了時に2ダメージを受ける。`,
		amount: {
			cost: 99,
			discard: true,
		}
	},
	Dizziness: {
		No:914005,
		name: 'めまい',
		class: cardClass.abnormal,
		rarity: rarity.common,
		type: type.abnormal,
		func: '',
		image:'images/card/abnormal_Dizziness.jpg',
		effect: `使用不可。エセリアル。`,
		amount: {
			cost: 99,
			discard: true,
			ethereal: true,
		}
	},
};

const testCardList = {
	testAttack: {
		No:999999,
		name: 'テスト用一撃カード',
		class: cardClass.common,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectAllAttack',
		image:'images/card/common_Knife.jpg',
		effect: `天賦。敵全体に{A}ダメージを与える。廃棄。`,
		amount: {
			gift: true,
			cost: 0,
			attack: 999,
			discard: true,
		}
	},
}
/*************************************************************************************/
/* カード報酬抽選
/*************************************************************************************/
const cardReward = {
	normal:{
		common:{weight:60, rarity: rarity.common},
		uncommon:{weight:37, rarity: rarity.uncommon},
		rare:{weight:3, rarity: rarity.rare},
	},
	special:{
		common:{weight:50, rarity: rarity.common},
		uncommon:{weight:40, rarity: rarity.uncommon},
		rare:{weight:10, rarity: rarity.rare},

	},
	boss:{
		common:{weight:0, rarity: rarity.common},
		uncommon:{weight:0, rarity: rarity.uncommon},
		rare:{weight:100, rarity: rarity.rare},
	},
};
/*******************************************************/
/* setupDeck：初期デッキとなる10枚のカードを配る
/*******************************************************/
function setupDeck(){
	const continueFlag = getLocalStorage(keyContinueFlag);
	const selectChara = getLocalStorage(keySelectChara);
	const lastDeck = getLocalStorage(keyContinueDeck);
	const lastOriginalDeck = getLocalStorage(keyContinueOriginalDeck);

	if(lastDeck !== null && continueFlag){
		// 続きからの場合
		myDeck = lastDeck;
		myOriginalDeck = lastOriginalDeck;
	} else {
		// プレイヤーに初期デッキとなる10枚のカードを配る
		if (selectChara == selectCharacter.gran.name){
			addCardToOriginalDeck(granCardList.Wide, 5);
			addCardToOriginalDeck(granCardList.Defense, 4);
			addCardToOriginalDeck(granCardList.PowerSwing, 1);
			addCardToOriginalDeck(granEnhancedCardList.Hrunting, 1);
			addCardToOriginalDeck(granEnhancedCardList.HangedMan, 1);

		} else if (selectChara == selectCharacter.djeeta.name){
			addCardToOriginalDeck(djeetaCardList.Wide, 5);
			addCardToOriginalDeck(djeetaCardList.Defense, 5);
			addCardToOriginalDeck(djeetaCardList.Assassin, 1);
			addCardToOriginalDeck(djeetaCardList.Pulverizer, 1);
			addCardToOriginalDeck(djeetaCardList.Blaze, 2);
			addCardToOriginalDeck(djeetaCardList.Spada, 2);
			addCardToOriginalDeck(testCardList.testAttack, 2);
		}
	}
}
/*****************************************************/
/* カード報酬決定関数
/*****************************************************/
function decideCardReward(){
	const mt = new MersenneTwister();
	const selectChara = getLocalStorage(keySelectChara);
	const selectCards = [];
	let level = {};
	let selectRarity = {};
	let selectCardList = [];
	let selectCard = {};
	switch(currentLevel){
		case stageLevel.test:
			level = cardReward.normal;
			break;
		case stageLevel.normal:
			level = cardReward.normal;
			break;
		case stageLevel.special:
			level = cardReward.special;
			break;
		case stageLevel.boss:
			level = cardReward.boss;
			break;
		default:
			break;
	}
	const totalWeight = Object.values(level).reduce((sum, item) => sum + item.weight, 0);
	if (selectChara == selectCharacter.gran.name){
		selectCardList = deepCopyCardList(Object.values(granCardList));
	} else if (selectChara == selectCharacter.djeeta.name){
		selectCardList = deepCopyCardList(Object.values(djeetaCardList));	
	} else {
		alert('キャラが選択されていません。');
		window.location.href = 'index.html';
	}

	let i = 0
	while(i < 3){
		// レアリティ抽選
		let random = Math.floor(Math.random() * totalWeight);
		for (const rarity of Object.values(level)) {
			if (random < rarity.weight) {
				selectRarity = rarity;
				break;
			}
			random -= rarity.weight;
		}
		selectCard = shuffleArray(
			selectCardList.filter((card) => card.rarity === selectRarity.rarity)
		).shift();
		selectCards.push(selectCard);
		i++;
	}
	return {type: 'card', getFlag: true, amount: selectCards};
}

/*************************************************************************************/
/* 各カード効果関数(アタック)
/*************************************************************************************/
function effectDammy(){}
function effectAttack(amount){
	// {A}のダメージを与える。
	console.log('effectAttack');
	if('attack' in amount){
		actionAttack(amount.attack);
	}
	endAction();
	return true;
}
function effectAllAttack(amount){
	// 敵全体に{A}のダメージを与える。
	console.log('effectAllAttack');
	if('attack' in amount){
		actionAllAttack(amount.attack);
	}
	endAction();
	return true;
}

function effectAttackMagnification(amount){
	// {A}のダメージを与える。このカードには3倍の筋力ボーナスが適用される。
	console.log('effectAttackMagnification');
	if('attack' in amount && 'magnification' in amount){
		actionAttack(amount.attack, amount.magnification);
	}
	endAction();
	return true;
}
function effectTimesAttack(amount){
	// {A}のダメージを2回与える。
	console.log('effectFourthAttack');
	if('attack' in amount && 'count' in amount){
		for(let i = 0; i < amount.count; i++){
			actionAttack(amount.attack);
		}
	}
	endAction();
	return true;
}
function effectTimesAllAttack(amount){
	// {A}のダメージを2回与える。
	console.log('effectFourthAttack');
	if('attack' in amount && 'count' in amount){
		for(let i = 0; i < amount.count; i++){
			actionAllAttack(amount.attack);
		}
	}
	endAction();
	return true;
}
function effectTimesRandomAttack(amount){
	// ランダムな敵に{A}のダメージを3回与える。
	console.log('effectFourthAttack');
	if('attack' in amount && 'count' in amount){
		for(let i = 0; i < amount.count; i++){
			actionRandomAttack(amount.attack);
		}
	}
	endAction();
	return true;
}
function effectAttackAndDefense(amount){
	// {B}のブロックを得る。{A}のダメージを与える。
	console.log('effectAttackAndDefense');
	if('block' in amount){
		actionBlock(amount.block);
	}
	if('attack' in amount){
		actionAttack(amount.attack);
	}
	
	endAction();
	return true;
}
function effectAttackAndBuff(amount){
	// {A}ダメージを与える。次のターン、{F}エナジーを得る。
	console.log('effectAttackAndBuff');
	console.log(amount);
	if('attack' in amount){
		actionAttack(amount.attack);
	}
	if('buff' in amount && 'buffType' in amount ){
		actionStatusBuf(bufStatus[amount.buffType], amount.buff);
	}
	endAction();
	return true;
}
function effectAttackAndDebuff(amount){
	// {A}のダメージを与える。防御力ダウン{D}を与える。
	console.log('effectAttackAndDebuff');
	if('attack' in amount){
		actionAttack(amount.attack);
	}
	if('debuff' in amount && 'debuffType' in amount ){
		actionStatusDebuf(debufStatus[amount.debuffType], amount.debuff);
	}
	endAction();
	return true;
}
function effectAttackAndDoubleDebuff(amount){
	// {A}のダメージを与える。恐怖{D1}と防御力ダウン{D2}を与える。
	console.log('effectAttackAndDebuff');
	if('attack' in amount){
		actionAttack(amount.attack);
	}
	if('debuff1' in amount && 'debuffType1' in amount ){
		actionStatusDebuf(debufStatus[amount.debuffType1], amount.debuff1);
	}
	if('debuff2' in amount && 'debuffType2' in amount ){
		actionStatusDebuf(debufStatus[amount.debuffType2], amount.debuff2);
	}
	endAction();
	return true;
}
function effectALLAttackAndDebuff(amount){
	// 敵全体に{A}のダメージと防御力ダウン{D}を与える。
	console.log('effectALLAttackAndDebuff');
	if('attack' in amount){
		actionAllAttack(amount.attack);
	}
	if('debuff' in amount && 'debuffType' in amount ){
		actionStatusAllDebuf(debufStatus[amount.debuffType], amount.debuff);
	}
	endAction();
	return true;
}
function effectAttackAndAbnormal(amount){
	// {A}のダメージを与える。負傷を1枚山札に加える。
	console.log('effectAttackAndAbnormal');
	if('attack' in amount){
		actionAttack(amount.attack);
	}
	if('abnormal' in amount && 'count' in amount){
		const abnormal = [];
		for(let i = 0; i < amount.count; i++){
			pushTrash(abnormalCardList[amount.abnormal]);
			abnormal.push(abnormalCardList[amount.abnormal]);
		}
		animatePlayerAddTrash(abnormal);
	}
	endAction();
	return true;
}
function effectAllAttackAndAbnormal(amount){
	// 敵全体に{A}のダメージを与える。abnormalを{C}枚捨て札に加える。
	console.log('effectAttackAndAbnormal');
	if('attack' in amount){
		actionAllAttack(amount.attack);
	}
	if('abnormal' in amount && 'count' in amount){
		const abnormal = [];
		for(let i = 0; i < amount.count; i++){
			pushTrash(abnormalCardList[amount.abnormal]);
			abnormal.push(abnormalCardList[amount.abnormal]);
		}
		animatePlayerAddTrash(abnormal);
	}
	endAction();
	return true;
}
function effectAttackAndDraw(amount){
	//{A}のダメージを与える。カードを1枚引く。
	console.log('effectAttackAndDraw');
	if('attack' in amount){
		actionAttack(amount.attack);
	}
	if('draw' in amount){
		const cards = drawCardFromDeck(amount.draw);
		cards.forEach((card) => {
			animateDrawDeck(card);
		});
	}
	endAction();
	return true;
}
function effectAttackAndRestore(amount){
	//{A}のダメージを与える。捨て札のカードを1枚山札の一番上に置く。
	console.log('effectAttackAndRestore');
	if('attack' in amount){
		actionAttack(amount.attack);
	}
	actionRestoreCard();
	return true;
}
function effectAttackAndSelfHarm(amount){
	// HP{HP}を失う。{A}のダメージを与える。
	console.log('effectAttackAndSelfHarm');
	if('harm' in amount){
		actionLoseHP(amount.harm);
	}
	if('attack' in amount){
		actionAttack(amount.attack);
	}
	endAction();
	return true;
}

/*************************************************************************************/
/* 各カード効果関数(スキル)
/*************************************************************************************/
function effectDefense(amount){
	// {B}ブロックを得る。
	console.log('effectDefense');
	if('block' in amount){
		actionBlock(amount.block);
	}
	endAction();
	return true;
}

function effectTwiceDefense(amount){
	// 現在のブロックの値を2倍にする。
	console.log('effectDefenseDouble');
	actionBlock(playerStatus.block);
	endAction();
	return true;
}
function effectBuff(amount){
	// 防御力ダウン{D}を与える。
	console.log('effectBuff');
	if('buff' in amount && 'buffType' in amount ){
		actionStatusBuf(bufStatus[amount.buffType], amount.buff);
	}
	endAction();
	return true;
}
function effectTimesBuff(amount){
	// 「攻撃力アップ」を2倍にする。廃棄。
	console.log('effectDefenseDouble');
	if('buffType' in amount && 'times' in amount){
		const buff = playerStatus.statuses
			.find((status) => status.name === bufStatus[amount.buffType].name)
		if(buff){
			buff.amount *= amount.times;
		}
	}
	endAction();
	return true;
}
function effectDefenseAndBuff(amount){
	// {B}ブロックを得る。
	console.log('effectDefenseAndBuff');
	console.log(amount);
	if('block' in amount){
		actionBlock(amount.block);
	}
	if('buff' in amount && 'buffType' in amount ){
		actionStatusBuf(bufStatus[amount.buffType], amount.buff);
	}
	endAction();
	return true;
}
function effectDebuff(amount){
	// 防御力ダウン{D}を与える。
	console.log('effectDebuff');
	if('debuff' in amount && 'debuffType' in amount ){
		actionStatusDebuf(debufStatus[amount.debuffType], amount.debuff);
	}
	endAction();
	return true;
}
function effectDoubleDebuff(amount){
	// 敵全体に毒4と恐怖2を与える。廃棄。
	console.log('effectALLDoubleDebuff');
	if('debuff1' in amount && 'debuffType1' in amount ){
		actionStatusDebuf(debufStatus[amount.debuffType1], amount.debuff1);
	}
	if('debuff2' in amount && 'debuffType2' in amount ){
		actionStatusDebuf(debufStatus[amount.debuffType2], amount.debuff2);
	}
	endAction();
	return true;
}
function effectTimesDebuff(amount){
	// 敵の毒を2倍にする。廃棄。
	console.log('effectDefenseDouble');
	if('debuffType' in amount && 'times' in amount){
		const debuff = currentTarget.currentStatus.status
			.find((status) => status.name === debufStatus[amount.debuffType].name)
		if(debuff){
			debuff.amount *= amount.times;
		}
	}
	endAction();
	return true;
}
function effectALLDebuff(amount){
	// 敵全体に恐怖{D}を与える。
	console.log('effectALLDebuff');
	if('debuff' in amount && 'debuffType' in amount ){
		actionStatusAllDebuf(debufStatus[amount.debuffType], amount.debuff);
	}
	endAction();
	return true;
}
function effectALLDoubleDebuff(amount){
	// 敵全体に毒4と恐怖2を与える。廃棄。
	console.log('effectALLDoubleDebuff');
	if('debuff1' in amount && 'debuffType1' in amount ){
		actionStatusAllDebuf(debufStatus[amount.debuffType1], amount.debuff1);
	}
	if('debuff2' in amount && 'debuffType2' in amount ){
		actionStatusAllDebuf(debufStatus[amount.debuffType2], amount.debuff2);
	}
	endAction();
	return true;
}
function effectDefenseAndDebuff(amount){
	// 恐怖{D}を与える。{B}のブロックを得る。
	console.log('effectDefenseAndBuff');
	if('block' in amount){
		actionBlock(amount.block);
	}
	if('debuff' in amount && 'debuffType' in amount ){
		actionStatusDebuf(bufStatus[amount.debuffType], amount.debuff);
	}
	endAction();
	return true;
}
function effectBuffAndDebuff(amount){
	// 攻撃力アップ{F}を得る。ターン終了時に攻撃力アップ2を失う。
	console.log('effectBuffAndDebuff');
	if('buff' in amount && 'buffType' in amount ){
		actionStatusBuf(bufStatus[amount.buffType], amount.buff);
	}
	if('debuff' in amount && 'debuffType' in amount ){
		actionStatusBuf(debufStatus[amount.debuffType], amount.debuff);
	}
	endAction();
	return true;
}

function effectDefenseAndDraw(amount){
	// {B}ブロックを得る。カードを1枚引く。
	console.log('effectDefenseAndDraw');
	if('block' in amount){
		actionBlock(amount.block);
	}
	if('draw' in amount){
		const cards = drawCardFromDeck(amount.draw);
		cards.forEach((card) => {
			animateDrawDeck(card);
		});
	}
	endAction();
	return true;
}
function effectDefenseAndTrash(amount){
	// {B}ブロックを得る。カードを1枚捨てる。
	console.log('effectDefenseAndTrash');
	if('block' in amount){
		actionBlock(amount.block);
	}
	actionTrashCard();
	return true;
}
function effectDefenseAndDiscard(amount){
	// {B}ブロックを得る。手札を1枚廃棄する。
	console.log('effectDefenseAndDiscard');
	if('block' in amount){
		actionBlock(amount.block);
	}
	actionDiscardCard();
	return true;
}
function effectDefenseAndRandomDiscard(amount){
	// {B}ブロックを得る。手札をランダムで1枚廃棄する。
	console.log('effectDefenseAndRandomDiscard');
	if('block' in amount){
		actionBlock(amount.block);
	}
	actionDiscardRandomCard();
	endAction();
	return true;
}
function effectDefenseAndAbnormal(amount){
	// Abnormalを{C}枚手札に加える。{B}ブロックを得る。
	console.log('effectAttackAndAbnormal');
	if('abnormal' in amount && 'count' in amount){
		const abnormal = [];
		for(let i = 0; i < amount.count; i++){
			pushTrash(abnormalCardList[amount.abnormal]);
			abnormal.push(abnormalCardList[amount.abnormal]);
		}
		animatePlayerAddTrash(abnormal);
	}
	if('block' in amount){
		actionBlock(amount.block);
	}
	endAction();
	return true;
}
function effectDraw(amount){
	// カードを1枚引く。
	console.log('effectDraw');
	if('draw' in amount){
		const cards = drawCardFromDeck(amount.draw);
		cards.forEach((card) => {
			animateDrawDeck(card);
		});
	}
	endAction();
	return true;
}
function effectCountDraw(amount){
	// 手札が{C}枚になるまでカードを引く。
	console.log('effectCountDraw');
	if('count' in amount){
		const drawNum = amount.count - myHand.length;
		if(drawNum > 0){
			const cards = drawCardFromDeck(drawNum);
			cards.forEach((card) => {
				animateDrawDeck(card);
			});
		}
	}
	endAction();
	return true;
}
function effectGetEnergy(amount){
	// 2エナジーを得る。廃棄。
	console.log('effectGetEnergy');
	if('energy' in amount){
		playerStatus.remainEnergy += amount.energy;
		updateEnergyDom();
	}
	endAction();
	return true;
}
function effectGetEnergyAndSelfHarm(amount){
	// {E}エナジーを得る。HP{HP}を失う。
	console.log('effectGetEnergy');
	if('harm' in amount){
		actionLoseHP(amount.harm);
	}
	if('energy' in amount){
		playerStatus.remainEnergy += amount.energy;
		updateEnergyDom();
	}
	endAction();
	return true;
}
function effectReuseToHand(amount){
	console.log('effectReuseToHand');
	actionReuseCard();
}
function effectDrawAndDebuff(amount){
	// カードを{Dr}枚引く。このターン、追加でカードを引くことができない。
	console.log('effectDrawAndDebuff');
	if('draw' in amount){
		const cards = drawCardFromDeck(amount.draw);
		cards.forEach((card) => {
			animateDrawDeck(card);
		});
	}
	if('debuff' in amount && 'debuffType' in amount ){
		actionStatusBuf(debufStatus[amount.debuffType], amount.debuff);
	}
	endAction();
	return true;
}
async function effectDrawAndDiscard(amount){
	// カードを2枚引く。カードを1枚廃棄する。
	console.log('effectDrawAndDebuff');
	if('draw' in amount){
		const cards = drawCardFromDeck(amount.draw);
		cards.forEach((card) => {
			animateDrawDeck(card);
		});
	}
	actionDiscardCard();
	endAction();
	return true;
}
function effectAddCommonCard(amount){
	// CommonCardを{C}枚手札に加える。
	console.log('effectAddCommonCard');
	if('commonCard' in amount && 'count' in amount){
		const commonCard = [];
		for(let i = 0; i < amount.count; i++){
			pushHand(commonCardList[amount.commonCard]);
			commonCard.push(commonCardList[amount.commonCard]);
		}
		animatePlayerAddHand(commonCard);
	}
	endAction();
	return true;
}
function effectDefenseAndAddCommonCard(amount){
	// CommonCardを{C}枚手札に加える。
	console.log('effectDefenseAndAddCommonCard');
	if('block' in amount){
		actionBlock(amount.block);
	}
	if('commonCard' in amount && 'count' in amount){
		const commonCard = [];
		for(let i = 0; i < amount.count; i++){
			pushHand(commonCardList[amount.commonCard]);
			commonCard.push(commonCardList[amount.commonCard]);
		}
		animatePlayerAddHand(commonCard);
	}
	endAction();
	return true;
}
/*************************************************************************************/
/* グランのカード専用効果関数
/*************************************************************************************/
function effectAttackAndReproduction(amount){
	// {A}のダメージを与える。このカードの複製を捨て札に加える。
	console.log('effectAttackAndReproduction');
	if('attack' in amount){
		actionAttack(amount.attack);
	}
	pushTrash(granCardList.Bullet);
	animatePlayerAddTrash([granCardList.Bullet]);
	endAction();
	return true;
}
function effectAttackAndConditionsDefenseDown(amount){
	// {A}のダメージを与える。敵が「防御力ダウン」を受けている場合は{E}エナジーを得てカードを1枚引く。
	console.log('effectAttackAndConditionsDefenseDown');
	if('attack' in amount){
		actionAttack(amount.attack);
	}
	// 	敵が防御力ダウンを受けている場合
	if (
		currentTarget.currentStatus.status
		.find((status) => status.name === debufStatus.defenseDown.name)
	) {
		if('energy' in amount){
			playerStatus.remainEnergy += amount.energy;
			updateEnergyDom();
		}
		if('draw' in amount){
			const cards = drawCardFromDeck(amount.draw);
			cards.forEach((card) => {
				animateDrawDeck(card);
			});
		}
	}
	endAction();
	return true;
}
function effectAttackAndNoAttackDiscard(amount){
	// 「アタック」以外の手札を廃棄する。{A}のダメージを与える。
	console.log('effectAttackAndNoAttackDiscard');
	const noAttack = myHand.filter((hand) => hand.type !== type.attack);
	myHand = myHand.filter((hand) => hand.type === type.attack);
	noAttack.forEach((card) => {
		discardCardProcess(card);
		animateHandToDiscard(card);
		updateDiscardDom();
	});

	if('attack' in amount){
		actionAttack(amount.attack);
	}
	endAction();
	return true;
}
function effectDefenseAndNoAttackDiscard(amount){
	// 「アタック」以外の手札を廃棄する。この方法で廃棄したカードの枚数×{B}ブロックを得る。
	console.log('effectAttackAndNoAttackDiscard');
	const noAttack = myHand.filter((hand) => hand.type !== type.attack);
	myHand = myHand.filter((hand) => hand.type === type.attack);
	noAttack.forEach((card) => {
		discardCardProcess(card);
		animateHandToDiscard(card);
		updateDiscardDom();
	});
	if('block' in amount){
		const totalBlock = amount.block * noAttack.length;
		actionBlock(totalBlock);
	}
	endAction();
	return true;
}
function effectAllAttackXTimes(amount){
	// 敵全体に{A}のダメージを与える。
	console.log('effectAllAttackXTimes');
	if('attack' in amount && 'variable' in amount){
		console.log(`${amount.variable}回`);
		for(let i = 0; i < amount.variable; i++){
			actionAllAttack(amount.attack);
		}
	}
	endAction();
	return true;
}
function effectAttackAndPowerUp(amount){
	// {A}のダメージを与える。このカードの複製を捨て札に加える。
	console.log('effectAttackAndPowerUp');
	if('attack' in amount){
		actionAttack(amount.attack);
		if('powerUp' in amount){
			amount.attack += amount.powerUp;
		}
	}
	endAction();
	return true;
}

function effectBuffForAttack(amount){
	// 敵が攻撃を予定している場合、攻撃力アップ{F}を得る。
	console.log('effectBuffForAttack');
	let AttackFlag = false;
	currentEnemies.forEach((enemy) => {
		switch(enemy.currentStatus.nextAction.type){
			case enemyActionType.attack:
			case enemyActionType.blockAndAttack:
			case enemyActionType.buffAndAttack:
			case enemyActionType.debuffAndAttack:
				AttackFlag = true;
				break;
			default:
				break;
		}
	});
	if(AttackFlag){
		if('buff' in amount && 'buffType' in amount ){
			actionStatusBuf(bufStatus[amount.buffType], amount.buff);
		}
	}
	endAction();
	return true;
}

function effectAttackAndSeizure(amount){
	// {A}のダメージを与える。この攻撃で敵を倒すと、最大HPが3増える(戦闘終了後も有効)。廃棄。
	console.log('effectAttackAndSeizure');
	if('attack' in amount){
		actionAttack(amount.attack);
	}
	if(currentTarget.currentStatus.remainHP <= 0 && 'maxHp' in amount){
		playerStatus.remainHP += amount.maxHp;
		playerStatus.maxHP += amount.maxHp;
	}
	endAction();
	return true;
}
function effectAttackAndBloodsucking(amount){
	// 敵全体に{A}のダメージを与える。防御されなかったダメージ分を回復する。廃棄。
	console.log('effectAttackAndBloodsucking');
	if('attack' in amount){
		actionAllAttackAndAbsorb(amount.attack);
	}
	endAction();
	return true;
}
function effectAttackAndAllDiscard(amount){
	// 手札を全て廃棄する。この方法で廃棄した枚数x7のダメージを与える。廃棄。
	console.log('effectAttackAndAllDiscard');
	if('attack' in amount){
		const discardCards = deleteAllHand();
		discardCards.forEach((card) => {
			discardCardProcess(card);
			actionAttack(amount.attack);
		});
	}
	endAction();
	return true;
}
function effectGetEnergyAndDraw(amount){
	// HP6を失う。●●を得る。カードを3枚引く。廃棄。
	console.log('effectGetEnergyAndDrawAndSelfHarm');
	if('energy' in amount){
		playerStatus.remainEnergy += amount.energy;
		updateEnergyDom();
	}
	if('draw' in amount){
		const cards = drawCardFromDeck(amount.draw);
		cards.forEach((card) => {
			animateDrawDeck(card);
		});
	}
	
	endAction();
	return true;
}
function effectGetEnergyAndDrawAndSelfHarm(amount){
	// HP6を失う。●●を得る。カードを3枚引く。廃棄。
	console.log('effectGetEnergyAndDrawAndSelfHarm');
	if('harm' in amount){
		actionLoseHP(amount.harm);
	}
	if('energy' in amount){
		playerStatus.remainEnergy += amount.energy;
		updateEnergyDom();
	}
	if('draw' in amount){
		const cards = drawCardFromDeck(amount.draw);
		cards.forEach((card) => {
			animateDrawDeck(card);
		});
	}
	
	endAction();
	return true;
}
function effectDeckTopPlay(amount){
	// 山札の一番上にあるカードをプレイする。そのカードを廃棄する。
	console.log('effectDeckTopPlay');
	actionDeckTopPlay();
	endAction();
	return true;
}
function effectDefenseAndUpGrade(amount){
	// {B}ブロックを得る。戦闘終了まで手札のカード1枚をアップグレードする。
	console.log('effectDefenseAndUpGrade');
	if('block' in amount){
		actionBlock(amount.block);
	}
	actionUpGradeCard();
	return true;
}
function effectDefenseAndAllUpGrade(amount){
	// {B}ブロックを得る。戦闘終了まで手札のカードすべてをアップグレードする。
	console.log('effectDefenseAndUpGrade');
	if('block' in amount){
		actionBlock(amount.block);
	}
	actionAllUpGradeCard();
	return true;
}
function effectDrawAndUnshiftDeck(amount){
	// カードを{Dr}枚引く。手札のカードを山札の1番上に置く。廃棄。
	console.log('effectDeckTopPlay');
	if('draw' in amount){
		const cards = drawCardFromDeck(amount.draw);
		cards.forEach((card) => {
			animateDrawDeck(card);
		});
	}
	actionUnshiftDeck();
	return true;
}
function effectReproductionToHand(amount){
	// 手札にある「アタック」か「パワー」を複製し、1枚手札に加える。
	console.log('effectReproductionToHand');
	actionReproductionToHand();
	
	return true;
}
function effectTwoReproductionToHand(amount){
	// 手札にある「アタック」か「パワー」を複製し、1枚手札に加える。
	console.log('effectTwoReproductionToHand');
	actionTwoReproductionToHand();
	
	return true;
}
/*************************************************************************************/
/* ジータのカード専用効果関数
/*************************************************************************************/
function effectAttackAndDrawAndTrash(amount){
	//{A}のダメージを与える。カードを1枚引く。
	console.log('effectAttackAndDraw');
	if('attack' in amount){
		actionAttack(amount.attack);
	}
	if('draw' in amount){
		const cards = drawCardFromDeck(amount.draw);
		cards.forEach((card) => {
			animateDrawDeck(card);
		});
	}
	actionTrashCard();
	return true;
}
function effectAttackAndConditionsPoison(amount){
	// {A}のダメージを与える。敵が「防御力ダウン」を受けている場合は{E}エナジーを得てカードを1枚引く。
	console.log('effectAttackAndConditionsDefenseDown');
	if('attack' in amount){
		actionAttack(amount.attack);
	}
	// 	敵が防御力ダウンを受けている場合
	if (
		currentTarget.currentStatus.status
		.find((status) => status.name === debufStatus.poison.name)
	) {
		actionAttack(amount.additionalAttack);
	}
	endAction();
	return true;
}
function effectAttackAndGetEnergy(amount){
	// `12ダメージを与える。このターンにカードを捨てていれば、2エナジーを得る。
	console.log('effectKamaitachi');
	if('attack' in amount){
		actionAttack(amount.attack);
	}
	if (playerStatus.playerCount.trashCountPerTurn > 0) {
		playerStatus.remainEnergy += 2;
	}
	return true;
}
function effectDrawAndTrash(amount){
	// カードを3枚引く。カードを1枚捨てる。
	console.log('effectStorm');
	if('draw' in amount){
		const cards = drawCardFromDeck(amount.draw);
		cards.forEach((card) => {
			animateDrawDeck(card);
		});
	}
	actionTrashCard();
	return true;
}
function effectTimesAttackEveryAttack(amount){
	// このターン使用した「アタック」の枚数ｘ{A}ダメージを与える。
	console.log('effectTimesAttackEveryAttack');
	if('attack' in amount){
		console.log(`${playerStatus.playerCount.playAttackPerTurn}回 - 1回`);
		for(let i = 0; i < playerStatus.playerCount.playAttackPerTurn - 1; i++){
			actionAttack(amount.attack);
		}
	}
	endAction();
	return true;
}
function effectAttackAndConditionsWeak(amount){
	// {A}のダメージを与える。敵が「防御力ダウン」を受けている場合は{E}エナジーを得てカードを1枚引く。
	console.log('effectAttackAndConditionsWeak');
	if('attack' in amount){
		actionAttack(amount.attack);
	}
	// 	敵が恐怖を受けている場合
	if (
		currentTarget.currentStatus.status
		.find((status) => status.name === debufStatus.weak.name)
	) {
		if('energy' in amount){
			playerStatus.remainEnergy += amount.energy;
			updateEnergyDom();
		}
		if('draw' in amount){
			const cards = drawCardFromDeck(amount.draw);
			cards.forEach((card) => {
				animateDrawDeck(card);
			});
		}
	}
	endAction();
	return true;
}
function effectAllAttackAndRandomTrash(amount){
	// 敵全体に10ダメージを与える。手札をランダムに1枚捨てる。
	console.log('effectAllAttackAndRandomTrash');
	if('attack' in amount){
		actionAllAttack(amount.attack);
	}
	actionTrashRandomCard();
	return true;
}
function effectTimesAttackEverySkillCard(amount){
	// 手札にある「スキル」の枚数ｘ{A}ダメージを与える。
	console.log('effectTimesAttackEverySkillCard');
	const skillCard = myHand.filter((hand) => {
		return hand.type === type.skill;
	});
	if('attack' in amount){
		console.log(`${skillCard.length}回`);
		for(let i = 0; i < skillCard.length; i++){
			actionAttack(amount.attack);
		}
	}
	endAction();
	return true;
}
function effectAttackXTimes(amount){
	// 敵全体に{A}のダメージを与える。
	console.log('effectAttackXTimes');
	if('attack' in amount && 'variable' in amount){
		console.log(`${amount.variable}回`);
		for(let i = 0; i < amount.variable; i++){
			actionAttack(amount.attack);
		}
	}
	endAction();
	return true;
}
function effectAllTrashAndDraw(amount){
	// 手札をすべて捨て、同じ枚数だけカードを引く。廃棄。
	console.log('effectAllTrashAndDraw');
	const allHnad = deleteAllHand();
	allHnad.forEach((card) => {
		trashCardProcess(card);
		animateHandToTrash(card);
	});
	$.when(cardTrashPromise).done(() => {
		hiddenHandDom();
		updateTrashDom();
	});
	if(allHnad.length > 0){
		const cards = drawCardFromDeck(allHnad.length);
		cards.forEach((card) => {
			animateDrawDeck(card);
		});
		$.when(cardDrawPromise).done(() => {
			updateHandDom();
		});
	}
	endAction();
	return true;
}
function effectPutCardDeckTop(amount){
	// 手札のカード1枚を山札の1番上に置く。プレイされるまでそのコストは0
	actionUnshiftDeckAndCostDown();
	endAction();
	return true;
}
function effectTimesRandomDebuff(amount){
	// ランダムな敵に毒3を3回与える。
	console.log('effectALLDebuff');
	if('debuff' in amount && 'debuffType' in amount && 'count' in amount){
		for(let i = 0; i < amount.count; i++){
			actionStatusRandomDebuf(debufStatus[amount.debuffType], amount.debuff);
		}
	}
	endAction();
	return true;
}
function effectDrawAndSkillDefense(amount){
	// カードを1枚引く。引いたカードが「スキル」の場合、3ブロックを得る。
	console.log('effectDraw');
	if('draw' in amount && 'block' in amount){
		const cards = drawCardFromDeck(amount.draw);
		cards.forEach((card) => {
			animateDrawDeck(card);
			if(card.type === type.skill){
				actionBlock(amount.block);
			}
		});
	}
	endAction();
	return true;
}
function effectThreeTrashAndGetEnergy(amount){
	// カードを3枚捨てる。{E}エナジーを得る。
	console.log('effectDefenseAndTrash');
	if('energy' in amount){
		playerStatus.remainEnergy += amount.energy;
		updateEnergyDom();
	}
	actionThreeTrashCard();
	return true;
}
function effectTwoTrashAndGetEnergy(amount){
	// カードを2枚捨てる。{E}エナジーを得る。
	console.log('effectDefenseAndTrash');
	if('energy' in amount){
		playerStatus.remainEnergy += amount.energy;
		updateEnergyDom();
	}
	actionTwoTrashCard();
	return true;
}
function effectAttackAndNoAttackTrash(amount){
	// 14ダメージを与える。「アタック」以外の全てのカードを捨てる。
	console.log('effectAttackAndNoAttackTrash');
	if('attack' in amount){
		actionAttack(amount.attack);
	}
	const noAttack = myHand.filter((hand) => hand.type !== type.attack);
	myHand = myHand.filter((hand) => hand.type === type.attack);
	noAttack.forEach((card) => {
		trashCardProcess(card);
		animateHandToTrash(card);
		updateTrashDom();
	});
	endAction();
	return true;
}
function effectTimesAttackAndDamageDown(amount){
	// 敵全体に{A}のダメージを与える。
	console.log('effectTimesAttackAndDamageDown');
	if('attack' in amount && 'count' in amount){
		console.log(`${amount.count}回`);
		for(let i = 0; i < amount.count; i++){
			actionAttack(amount.attack);
		}
	}
	if('attack' in amount && 'attackDown' in amount){
		amount.attack -= amount.attackDown;
	}
	endAction();
	return true;
}
function effectGetEnergyAndDrawXTimes(amount){
	// 次のターンにX枚のカードを引きXのエナジーを得る。廃棄。
	console.log('effectAllAttackXTimes');
	if('variable' in amount){
		playerStatus.remainEnergy += amount.variable;
		updateEnergyDom();

		const cards = drawCardFromDeck(amount.variable);
		cards.forEach((card) => {
			animateDrawDeck(card);
		});
	}
	endAction();
	return true;
}
function effectGetEnergyAndDrawXPlusOneTimes(amount){
	// 次のターンにX枚のカードを引きXのエナジーを得る。廃棄。
	console.log('effectAllAttackXTimes');
	if('variable' in amount){
		playerStatus.remainEnergy += amount.variable + 1;
		updateEnergyDom();

		const cards = drawCardFromDeck(amount.variable + 1);
		cards.forEach((card) => {
			animateDrawDeck(card);
		});
	}
	endAction();
	return true;
}
function effectDebuffAndCostDown(amount){
	// このターン、カードを引くことができない。このターン、あなたの手札のコストは0になる。
	console.log('effectDrawAndDebuff');
	myHand.forEach((hand) => {
		if(hand.amount.cost !== 'X'){
			hand.amount.tmpCost = 0;
		}
	});
	
	if('debuff' in amount && 'debuffType' in amount ){
		actionStatusBuf(debufStatus[amount.debuffType], amount.debuff);
	}
	endAction();
	return true;
}
function effectXTimesDoubleDebuff(amount){
	// 敵全体に毒4と恐怖2を与える。廃棄。
	console.log('effectALLDoubleDebuff');
	if('variable' in amount){
		if('debuffType1' in amount ){
			actionStatusAllDebuf(debufStatus[amount.debuffType1], amount.variable);
		}
		if('debuffType2' in amount ){
			actionStatusAllDebuf(debufStatus[amount.debuffType2], amount.variable);
		}
	}
	endAction();
	return true;
}
function effectXPlusOneTimesDoubleDebuff(amount){
	// 敵は攻撃力ダウンXと恐怖Xを与える。
	console.log('effectALLDoubleDebuff');
	if('variable' in amount){
		if('debuffType1' in amount ){
			actionStatusAllDebuf(debufStatus[amount.debuffType1], amount.variable + 1);
		}
		if('debuffType2' in amount ){
			actionStatusAllDebuf(debufStatus[amount.debuffType2], amount.variable + 1);
		}
	}
	endAction();
	return true;
}
function effectReproductionToNextTurn(amount){
	// 手札のカード1枚を選ぶ、次のターン、そのカードの複製を3枚手札に加える。
	console.log('effectReproductionToNextTurn');
	actionReproductionToNextTurn();
	return true;
}
function effectAllTrashAndGetCommonCard(amount){
	// 手札をすべて捨てる。捨てたカード1枚につきナイフを1枚手札に加える。
	console.log('effectAllTrashAndGetCommonCard');
	const trashHand = deleteAllHand();
	trashHand.forEach((card) => {
		animateHandToTrash(card);
	});
	updateTrashDom();
	if('commonCard' in amount){
		const commonCard = [];
		for(let i = 0; i < trashHand.length; i++){
			pushHand(commonCardList[amount.commonCard]);
			commonCard.push(commonCardList[amount.commonCard]);
		}
		animatePlayerAddHand(commonCard);
	}
	return true;
}
function effectAllTrashAndGetUGCommonCard(amount){
	// 手札をすべて捨てる。捨てたカード1枚につきナイフを1枚手札に加える。
	console.log('effectAllTrashAndGetEnKnife');
	const trashHand = deleteAllHand();
	trashHand.forEach((card) => {
		animateHandToTrash(card);
	});
	updateTrashDom();
	if('commonCard' in amount){
		const commonCard = [];
		for(let i = 0; i < trashHand.length; i++){
			pushHand(commonEnhancedCardList[amount.commonCard]);
			commonCard.push(commonEnhancedCardList[amount.commonCard]);
		}
		animatePlayerAddHand(commonCard);
	}
	return true;
}



/*************************************************************************************/
/* 共通のカード専用効果関数
/*************************************************************************************/
function effectKnifeAttack(amount){
	// {A}のダメージを与える。
	console.log('effectKnifeAttack');
	if('attack' in amount){
		actionKnifeAttack(amount.attack);
	}
	endAction();
	return true;
}
/*****************************************************/
/* 発動条件用関数
/*****************************************************/
function conditionsStraight(){
	const noAttack = myHand.filter((card) => {
		return card.type !== type.attack;
	});
	console.log(`myHand noAttack: ${noAttack.length}`);
	return noAttack.length === 0 ? true : false;
}
function conditionsNoDeck(){
	return myDeck.length === 0 ? true : false;
}
/*****************************************************/
/* コスト変動条件用関数
/*****************************************************/
function changeCostDownEveryDamage(amount){
	if (amount.originCost > playerStatus.playerCount.HPDownCount) {
		amount.cost = amount.originCost - playerStatus.playerCount.HPDownCount;
	} else {
		amount.cost = 0;
	}
}
function changeCostUpEveryDamage(amount){
	amount.cost = amount.originCost + playerStatus.playerCount.HPDownCount;
}
function changeCostDownEveryTrash(amount){
	if (amount.originCost > playerStatus.playerCount.trashCountPerTurn) {
		amount.cost = amount.originCost - playerStatus.playerCount.trashCountPerTurn;
	} else {
		amount.cost = 0;
	}
}
/*****************************************************/
/* ドロー条件用関数
/*****************************************************/
function drawReproduction(card){
	pushHand(card);
}
/*************************************************************************************/
/* カードアクション用システム関数
/*************************************************************************************/
/*******************************************************/
// ダメージ計算
/*******************************************************/
function calcDamage(attackCount, targetEnemy, AttackUpMag = 1){
	let totalAttack = attackCount;
	let magnification = 1;
	// 恐怖（攻撃力25%減少）
	const weakness = playerStatus.statuses
		.find((status) => status.name === debufStatus.weak.name);
	if (weakness){magnification -= 0.25;}
	// ダブルアタック（アタックのダメージが2倍になる）
	const doubleDamage = playerStatus.statuses
		.find((status) => status.name === bufStatus.doubleDamage.name);
	if (doubleDamage){magnification += 1.0;}
	if (Object.keys(targetEnemy).length !== 0) {
		// 防御力ダウン（被ダメ50%上昇）
		const defenseUp = targetEnemy.currentStatus.status
			.find((status) => status.name === bufStatus.defenseUp.name);
		if (defenseUp){magnification -= 0.5;}
		// 防御力アップ（被ダメ50%減少）
		const defenseDown = targetEnemy.currentStatus.status
			.find((status) => status.name === debufStatus.defenseDown.name);
		if (defenseDown){magnification += 0.5;}
	}
	totalAttack = Math.floor(totalAttack * magnification);

	// プレイヤーの状態異常の確認
	playerStatus.statuses.forEach((status) => {
		switch(status.name){
			case bufStatus.attackUp.name:// 攻撃力アップ（攻撃ダメージが+X。）
				totalAttack += status.amount * AttackUpMag;
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
	if (Object.keys(targetEnemy).length !== 0) {
		// エネミーの状態異常を確認
		targetEnemy.currentStatus.status.forEach((status) => {
			switch(status.name){
				case bufStatus.damageCut.name://ダメージカット
					if(totalAttack > 0){
						totalAttack = 1;
					}
					break;
				default:
					break;
			}
		});
	}
	return totalAttack;
}
/*******************************************************/
// ダメージ計算(投げナイフ専用)
/*******************************************************/
function calcKnifeDamage(attackCount, targetEnemy){
	let totalDamage = calcDamage(attackCount, targetEnemy);
	const hitRate = playerStatus.statuses
		.find((status) => status.name === bufStatus.hitRate.name);
	if (hitRate){
		totalDamage = totalDamage + hitRate.amount;
	}
	return totalDamage;
}
/*******************************************************/
/* 与ダメージ関数
/*******************************************************/
function actionAttack(attackCount, magnification = 1){
	let totalAttack = calcDamage(attackCount, currentTarget, magnification);
	// ブロック計算
	const enemyBlock = currentTarget.currentStatus.block;
	if(enemyBlock > 0){
		if(enemyBlock >= totalAttack){
			currentTarget.currentStatus.block -= totalAttack;
			totalAttack = 0;
		} else if (enemyBlock < totalAttack){
			totalAttack -= enemyBlock;
			currentTarget.currentStatus.block = 0;
		}
	}
	currentTarget.currentStatus.remainHP -= totalAttack;
	//「不死王の刃」の効果発動
	const lich = playerStatus.statuses
		.find((status) => status.name === bufStatus.lich.name);
	if(lich && totalAttack > 0){
		actionStatusDebuf(debufStatus.poison, lich.amount);
	}
	// アニメーション
	animatePlayerAttack();
}
/*******************************************************/
/* 与ダメージ関数(投げナイフ専用)
/*******************************************************/
function actionKnifeAttack(attackCount){
	let totalAttack = calcKnifeDamage(attackCount, currentTarget);
	// ブロック計算
	const enemyBlock = currentTarget.currentStatus.block;
	if(enemyBlock > 0){
		if(enemyBlock >= totalAttack){
			currentTarget.currentStatus.block -= totalAttack;
			totalAttack = 0;
		} else if (enemyBlock < totalAttack){
			currentTarget.currentStatus.block = 0;
			totalAttack = totalAttack - enemyBlock;
		}
	}
	currentTarget.currentStatus.remainHP -= totalAttack;
	//「不死王の刃」の効果発動
	const lich = playerStatus.statuses
		.find((status) => status.name === bufStatus.lich.name);
	if(lich && totalAttack > 0){
		actionStatusDebuf(debufStatus.poison, lich.amount);
	}
	// アニメーション
	animatePlayerAttack();
}
/*******************************************************/
/* 与ダメージ&吸収関数
/*******************************************************/
function actionAttackAndAbsorb(attackCount){
	let totalAttack = calcDamage(attackCount, currentTarget);
	// ブロック計算
	const enemyBlock = currentTarget.currentStatus.block;
	if(enemyBlock > 0){
		if(enemyBlock >= totalAttack){
			currentTarget.currentStatus.block -= totalAttack;
			totalAttack = 0;
		} else if (enemyBlock < totalAttack){
			currentTarget.currentStatus.block = 0;
			totalAttack = totalAttack - enemyBlock;
		}
	}
	currentTarget.currentStatus.remainHP -= totalAttack;
	recoveryHP(totalAttack);
	//「不死王の刃」の効果発動
	const lich = playerStatus.statuses
		.find((status) => status.name === bufStatus.lich.name);
	if(lich && totalAttack > 0){
		actionStatusDebuf(debufStatus.poison, lich.amount);
	}
	// アニメーション
	animatePlayerAttack();
}
/*******************************************************/
/* 与ダメージ関数（全体ダメージ）
/*******************************************************/
function actionAllAttack(attackCount){
	currentEnemies.forEach((enemy) => {
		let totalAttack = calcDamage(attackCount, enemy);
		// ブロック計算
		const enemyBlock = enemy.currentStatus.block;
		if(enemyBlock > 0){
			if(enemyBlock >= totalAttack){
				enemy.currentStatus.block -= totalAttack;
				totalAttack = 0;
			} else if (enemyBlock < totalAttack){
				enemy.currentStatus.block = 0;
				totalAttack = totalAttack - enemyBlock;
			}
		}
		enemy.currentStatus.remainHP -= totalAttack;
		//「不死王の刃」の効果発動
		const lich = playerStatus.statuses
			.find((status) => status.name === bufStatus.lich.name);
		if(lich && totalAttack > 0){
			actionStatusDebufToTarget(debufStatus.poison, lich.amount, enemy);
		}
	});
	// アニメーション
	animatePlayerAttack();
}
/*******************************************************/
/* 与ダメージ&吸収関数（全体ダメージ）
/*******************************************************/
function actionAllAttackAndAbsorb(attackCount){
	currentEnemies.forEach((enemy) => {
		let totalAttack = calcDamage(attackCount, enemy);
		// ブロック計算
		const enemyBlock = enemy.currentStatus.block;
		if(enemyBlock > 0){
			if(enemyBlock >= totalAttack){
				enemy.currentStatus.block -= totalAttack;
				totalAttack = 0;
			} else if (enemyBlock < totalAttack){
				enemy.currentStatus.block = 0;
				totalAttack = totalAttack - enemyBlock;
			}
		}
		enemy.currentStatus.remainHP -= totalAttack;
		recoveryHP(totalAttack);
		//「不死王の刃」の効果発動
		const lich = playerStatus.statuses
			.find((status) => status.name === bufStatus.lich.name);
		if(lich && totalAttack > 0){
			actionStatusDebufToTarget(debufStatus.poison, lich.amount, enemy);
		}
	});
	// アニメーション
	animatePlayerAttack();
}
/*******************************************************/
/* 与ダメージ関数（ランダムダメージ）
/*******************************************************/
function actionRandomAttack(attackCount){
	let random = Math.floor(Math.random() * currentEnemies.length);
	console.log(`Random Hit: ${random}`);
	const enemy = currentEnemies[random];
	let totalAttack = calcDamage(attackCount, enemy);
	// ブロック計算
	const enemyBlock = enemy.currentStatus.block;
	if(enemyBlock > 0){
		if(enemyBlock >= totalAttack){
			enemy.currentStatus.block -= totalAttack;
			totalAttack = 0;
		} else if (enemyBlock < totalAttack){
			enemy.currentStatus.block = 0;
			totalAttack -= enemyBlock;
		}
	}
	enemy.currentStatus.remainHP -= totalAttack;
	//「不死王の刃」の効果発動
	const lich = playerStatus.statuses
		.find((status) => status.name === bufStatus.lich.name);
	if(lich && totalAttack > 0){
		actionStatusDebufToTarget(debufStatus.poison, lich.amount, enemy);
	}
	// アニメーション
	animatePlayerAttack();
}
/*******************************************************/
/* 与ダメージ関数(バフ・デバフ影響なし)（全体ダメージ）
/*******************************************************/
function actionAllAttackSimple(attackCount){
	currentEnemies.forEach((enemy) => {
		let totalAttack = attackCount;
		// ブロック計算
		const enemyBlock = enemy.currentStatus.block;
		if(enemyBlock > 0){
			if(enemyBlock >= totalAttack){
				enemy.currentStatus.block -= totalAttack;
				totalAttack = 0;
			} else if (enemyBlock < totalAttack){
				enemy.currentStatus.block = 0;
				totalAttack = totalAttack - enemyBlock;
			}
		}
		enemy.currentStatus.remainHP -= totalAttack;
		recoveryHP(totalAttack);
		//「不死王の刃」の効果発動
		const lich = playerStatus.statuses
			.find((status) => status.name === bufStatus.lich.name);
		if(lich && totalAttack > 0){
			actionStatusDebufToTarget(debufStatus.poison, lich.amount, enemy);
		}
	});
	// アニメーション
	animatePlayerAttack();
}
/*******************************************************/
// ブロック計算
/*******************************************************/
function calcBlock(blockCount){
	let totalBlock = blockCount;
	// 回避率アップの効果
	const dexterity = playerStatus.statuses
		.find((status) => status.name === bufStatus.dexterity.name);
	if (dexterity){
		totalBlock += dexterity.amount;
	}
	// 回避率ダウンの効果
	const dexterityDown = playerStatus.statuses
		.find((status) => status.name === debufStatus.dexterityDown.name);
	if (dexterityDown){
		if(totalBlock > dexterityDown.amount){
			totalBlock -= dexterityDown.amount;
		} else {
			totalBlock = 0;
		}
	}
	const noBlock = playerStatus.statuses
		.find((status) => status.name === debufStatus.noBlock.name);
	if (noBlock){
		totalBlock = 0;
	}
	return totalBlock;
}
/*******************************************************/
/* ブロック関数
/*******************************************************/
function actionBlock(blockCount, animateFlag = true){
	playerStatus.block += calcBlock(blockCount);
	//「バハムートシールド」の効果
	const bahamut = playerStatus.statuses
		.find((status) => status.name === bufStatus.bahamut.name);
	if (bahamut){
		actionRandomAttack(bahamut.amount);
	}
	// アニメーション
	if(animateFlag){
		animatePlayerBlocked();
	}
}
/*******************************************************/
/* バフを与える関数
/*******************************************************/
function actionStatusBuf(buf, amountCount){
	console.log(buf);
	console.log(amountCount);
	return actionStatusBufForAnimate(playerStatus, buf, amountCount, true);
}
function actionStatusBufForAnimate(playerInfo, buf, amountCount, animateFlag = true){
	// 弱体無効がついていれば、無効になる
	const debuffFlag = Object.values(debufStatus)
		.find((status) => status.name === buf.name);
	const mount = playerStatus.statuses
		.find((status) => status.name === bufStatus.mount.name);
	if (mount && debuffFlag){
		mount.amount--;
		playerStatus.statuses = playerStatus.statuses.filter((status) => {
			return status.amount > 0;
		});
		return;
	}

	let sameBufFlag = false;
	// すでに同じバフがかかってないか確認
	// 同じバフは累積する
	for (const status of playerInfo.statuses) {
		if (status.name == buf.name) {
			status.amount += amountCount;
			sameBufFlag = true;
		}
	}
	const receivedBuf = {...buf};
	receivedBuf.amount = amountCount;
	if (!sameBufFlag) {
		playerInfo.statuses.push(receivedBuf);
	}
	// アニメーション
	if(animateFlag){
		animatePlayerAbnormality(receivedBuf);
	}
	console.log(playerInfo.statuses);
}
/*******************************************************/
/* バフを与える関数（アニメーション後付け）
/*******************************************************/
function actionLoseHP(loseHP){
	damageHP(loseHP);
	//「血の代償」の効果発動
	const compensation = playerStatus.statuses
		.find((status) => status.name === bufStatus.compensation.name);
	if (compensation){
		actionStatusBuf(bufStatus.attackUp, compensation.amount);
	}
}
/*******************************************************/
/* 状態異常を与える関数
/*******************************************************/
function actionStatusDebuf(debuf, amountCount){
	return actionStatusDebufToTarget(debuf, amountCount, currentTarget, true);
}
function actionStatusDebufToTarget(debuf, amountCount, target, animateFlag = true){
	console.log(`${debuf.name}: ${amountCount}`);
	// 弱体無効がついていれば、無効になる
	const mount = target.currentStatus.status
		.find((status) => status.name === bufStatus.mount.name);
	if (mount && mount.amount > 0){
		mount.amount--;
		target.currentStatus.status = target.currentStatus.status.filter((status) => {
			return status.amount !== 0;
		});
		return;
	}

	// すでに同じデバフがかかってないか確認
	// 同じデバフは累積する
	let sameDebufFlag = false;
	// すでに同じデバフがかかってないか確認
	// 同じバフは累積する
	for (const status of target.currentStatus.status) {
		if (status.name == debuf.name) {
			status.amount += amountCount;
			sameDebufFlag = true;
		}
	}
	const receivedDebuf = {...debuf};
	receivedDebuf.amount = amountCount;
	if (!sameDebufFlag) {
		target.currentStatus.status.push(receivedDebuf);
	}
	// アニメーション
	if(animateFlag){
		animateEnemyAbnormality(target, receivedDebuf);
	}
}
/*******************************************************/
/* 状態異常を与える関数(全体デバフ)
/*******************************************************/
function actionStatusAllDebuf(debuf, amountCount){
	return actionStatusAllDebufForAnimate(currentEnemies, debuf, amountCount, true);
}
function actionStatusAllDebufForAnimate(enemiesInfo, debuf, amountCount, animateFlag){
	enemiesInfo.forEach((enemy) => {
		actionStatusDebufToTarget(debuf, amountCount, enemy, animateFlag);
	});
}
/*******************************************************/
/* 状態異常を与える関数(ランダムデバフ)
/*******************************************************/
function actionStatusRandomDebuf(debuf, amountCount){
	let random = Math.floor(Math.random() * currentEnemies.length);
	console.log(`Random Hit: ${random}`);
	const enemy = currentEnemies[random];

	actionStatusDebufToTarget(debuf, amountCount, enemy, true);
}
/*******************************************************/
/* カードを捨てる関数
/*******************************************************/
function actionTrashCard(){
	startPhase(phase.trash);
}
function actionTwoTrashCard(){
	startPhase(phase.twoTrash);
}
function actionThreeTrashCard(){
	startPhase(phase.threeTrash);
}
function trashCard(){
	console.log('trashCard');
	if(tmpArea.length === 0){
		return false;
	}
	$('.black-back-area').removeClass('active');
	$('.hand-decide-area').removeClass('active');
	$('.hand-area').removeClass('front');
	$(`.hand-card`).removeClass('select');
	const trashCards = deleteAllTemporaryArea();
	trashCards.forEach((trashCard) => {
		setLocalStorage(keyContinueTemporary, tmpArea);
		const index = findIndexHand('id', trashCard.id);
		if (index === -1) {
			return false;
		}
		const card = spliceHand(index);
		if (card === undefined) {
			return false;
		}
		trashCardProcess(card);
		setLocalStorage(keyContinuePlayerStatus, playerStatus);
		setLocalStorage(keyContinueHand, myHand);
		setLocalStorage(keyContinueTrash, myTrash);
		animateHandToTrash(card);
	});
	$.when(cardTrashPromise).done(() => {
		updateHandDom();
		updateTrashDom();
	});
	startPhase(phase.action);
}

/*******************************************************/
/* 手札をランダムに捨てる関数
/*******************************************************/
function actionTrashRandomCard(){
	let randomIndex = Math.floor(Math.random() * myHand.length);
	const card = spliceHand(randomIndex);
	if (card === undefined) {
		return false;
	}
	trashCardProcess(card);
	setLocalStorage(keyContinuePlayerStatus, playerStatus);
	animateHandToTrash(card);
	$.when(cardTrashPromise).done(() => {
		updateHandDom();
		updateTrashDom();
	});
}
/*******************************************************/
/* カードを廃棄する関数
/*******************************************************/
function actionDiscardCard(){
	startPhase(phase.discard);
}
function discardCard(){
	console.log('trashCard');
	if(tmpArea.length === 0){
		return false;
	}
	$('.black-back-area').removeClass('active');
	$('.hand-decide-area').removeClass('active');
	$('.hand-area').removeClass('front');
	$(`.hand-card`).removeClass('select');
	const discardCards = deleteAllTemporaryArea();
	discardCards.forEach((discardCard) => {
		setLocalStorage(keyContinueTemporary, tmpArea);
		const index = findIndexHand('id', discardCard.id);
		if (index === -1) {
			return false;
		}
		const card = spliceHand(index);
		if (card === undefined) {
			return false;
		}
		discardCardProcess(card);
		playerStatus.playerCount.discardCount++;
		setLocalStorage(keyContinuePlayerStatus, playerStatus);
		setLocalStorage(keyContinueHand, myHand);
		setLocalStorage(keyContinueTrash, discard);
		animateHandToDiscard(card);
	});

	$.when(cardTrashPromise).done(() => {
		updateHandDom();
		updateDiscardDom();
	});
	startPhase(phase.action);
	endAction();
}
/*******************************************************/
/* 手札をランダムに廃棄する関数
/*******************************************************/
function actionDiscardRandomCard(){
	let randomIndex = Math.floor(Math.random() * myHand.length);
	const card = spliceHand(randomIndex);
	if (card === undefined) {
		return false;
	}
	discardCardProcess(card);
	setLocalStorage(keyContinuePlayerStatus, playerStatus);
	animateHandToDiscard(card);
	$.when(cardDiscardPromise).done(() => {
		updateHandDom();
		updateDiscardDom();
	});
}
/*******************************************************/
/* 手札をデッキの一番上に置く関数
/*******************************************************/
function actionUnshiftDeck(){
	startPhase(phase.unshiftDeck);
}
function actionUnshiftDeckAndCostDown(){
	startPhase(phase.unshiftDeckAndZero);
}
function unshiftDeckCard(costZeroFlag = false){
	console.log('unshiftDeckCard');
	if(tmpArea.length === 0){
		return false;
	}
	$('.black-back-area').removeClass('active');
	$('.return-decide-area').removeClass('active');
	const removeCards = deleteAllTemporaryArea();
	removeCards.forEach((removeCard) => {
		setLocalStorage(keyContinueTemporary, tmpArea);
		const index = findIndexHand('id', removeCard.id);
		if (index === -1) {
			return false;
		}
		const card = spliceHand(index);
		if (card === undefined) {
			return false;
		}
		if(costZeroFlag){
			card.amount.tmpCost = 0;
		}
		unshiftDeck(card);
		setLocalStorage(keyContinueDeck, myDeck);
		setLocalStorage(keyContinueTrash, myHand);
		animateHandToDeck(card);
	});
	$.when(cardRemovePromise).done(() => {
		updateHandDom();
		updateDeckDom();
	});
	startPhase(phase.action);
	endAction();
}

/*******************************************************/
/* 手札をアップグレードする関数
/*******************************************************/
function actionUpGradeCard(){
	startPhase(phase.upGrade);
}
function actionAllUpGradeCard(){
	myHand.forEach((hand) => {
		pushTemporaryArea(hand);
	});
	upGradeCard();
}
function upGradeCard(){
	console.log('upGradeCard');
	if(tmpArea.length === 0){
		return false;
	}
	
	$('.black-back-area').removeClass('active');
	$('.hand-decide-area').removeClass('active');
	$('.hand-area').removeClass('front');
	$(`.hand-card`).removeClass('select');
	$(`.hand-enhance-area`).addClass('hidden');
	const upGradeCards = deleteAllTemporaryArea();
	const animateCards = [];
	setLocalStorage(keyContinueTemporary, tmpArea);
	upGradeCards.forEach((upGradeCard) => {
		const index = findIndexHand('id', upGradeCard.id);
		if (index === -1) {
			return false;
		}
		const card = spliceHand(index);
		if (card === undefined) {
			return false;
		}
		if('key' in card){
			if(card.class === cardClass.gran){
				pushHand(granEnhancedCardList[card.key]);
			} else if(card.class === cardClass.djeeta){
				pushHand(djeetaEnhancedCardList[card.key]);
			} else if(card.class === cardClass.common){
				pushHand(commonEnhancedCardList[card.key]);
			}
			animateCards.push(card);
		}
		setLocalStorage(keyContinueHand, myHand);
	});
	animatePlayerAddHand(animateCards);
	$.when(cardAddHandPromise).done(() => {
		updateHandDom();
	});
	startPhase(phase.action);
	endAction();
}


/*******************************************************/
/* 手札1枚を複製する関数
/*******************************************************/
function actionReproductionToHand(){
	const attackCard = myHand.filter((card) => {
		return card.type === type.attack;
	});
	if(attackCard.length === 0){
		return true;
	}
	startPhase(phase.reproductionToHand);
	return true;
}
function actionTwoReproductionToHand(){
	const attackCard = myHand.filter((card) => {
		return card.type === type.attack;
	});
	if(attackCard.length === 0){
		return true;
	}
	startPhase(phase.twoReproductionToHand);
	return true;
}
function reproductionToHandCard(count){
	console.log('reproductionToHandCard');
	if(tmpArea.length === 0){
		return false;
	}
	$('.black-back-area').removeClass('active');
	$('.hand-decide-area').removeClass('active');
	$('.hand-area').removeClass('front');
	$(`.hand-card`).removeClass('select');
	const reproductionCard = shiftTemporaryArea();
	const animateCards = [];
	if (reproductionCard !== undefined) {
		setLocalStorage(keyContinueTemporary, tmpArea);
		const index = findIndexHand('id', reproductionCard.id);
		if (index === -1) {
			return false;
		}
		const card = myHand[index];
		if (card === undefined) {
			return false;
		}
		for(let i=0; i < count; i++){
			pushHand(card);
			animateCards.push(card);
		}
		setLocalStorage(keyContinueHand, myHand);
	}
	animatePlayerAddHand(animateCards);
	$.when(cardAddHandPromise).done(() => {
		updateHandDom();
	});
	deleteAllTemporaryArea();
	startPhase(phase.action);
	endAction();
}

/*******************************************************/
/* 手札1枚を次のターンに複製する関数
/*******************************************************/
function actionReproductionToNextTurn(){
	startPhase(phase.reproductionToNextTurn);
	return true;
}
function reproductionToNextTurnCard(count){
	console.log('mirrorCard');
	if(tmpArea.length === 0){
		return false;
	}
	$('.black-back-area').removeClass('active');
	$('.hand-decide-area').removeClass('active');
	$('.hand-area').removeClass('front');
	$(`.hand-card`).removeClass('select');
	const mirrorCard = shiftTemporaryArea();
	if (mirrorCard !== undefined) {
		setLocalStorage(keyContinueTemporary, tmpArea);
		const index = findIndexHand('id', mirrorCard.id);
		if (index === -1) {
			return false;
		}
		const card = myHand[index];
		if (card === undefined) {
			return false;
		}
		for(let i=0; i < count; i++){
			holdCard.push(card);
		}
		setLocalStorage(keyContinueHold, holdCard);
	}
	actionStatusBuf(bufStatus.reproduction, count);
	updatePlayerAreaDom(playerStatus);
	setLocalStorage(keyContinuePlayerStatus, playerStatus);
	startPhase(phase.action);
	endAction();
}



/*******************************************************/
/* カードを保留する関数
/*******************************************************/
function repairCard(){
	console.log('repairCard');

	$('.black-back-area').removeClass('active');
	$('.hand-decide-area').removeClass('active');
	$('.hand-area').removeClass('front');
	$(`.hand-card`).removeClass('select');
	const mirrorCards = deleteAllTemporaryArea();
	setLocalStorage(keyContinueTemporary, tmpArea);
	mirrorCards.forEach((mirrorCard) => {
		const index = findIndexHand('id', mirrorCard.id);
		if (index === -1) {
			return false;
		}
		const card = spliceHand(index);
		if (card === undefined) {
			return false;
		}
		holdCard.push(card);
	});
	setLocalStorage(keyContinueHold, holdCard);
	startPhase(phase.enemy);
}

/*******************************************************/
/* デッキトップのカードをプレイする関数
/*******************************************************/
function actionDeckTopPlay(){
	if (myDeck.length <= 0) {
		// 捨て札をデッキに再構築する
		reconfigureDeck();
	}
	// デッキからカードを引く
	const card = shiftDeck();
	if (card !== undefined){
		card.amount.tmpDiscard = true;
		pushStackCards(card);
		pushPlayArea(card);
	}else{
		console.log("shiftDeck undefined");
	}
	// デッキと手札をローカルストレージに記憶
	setLocalStorage(keyContinueDeck, myDeck);
	setLocalStorage(keyContinueStack, stackCards);
}
/*******************************************************/
/* 捨て札1枚をデッキの一番上に戻す関数
/*******************************************************/
function actionRestoreCard(){
	startPhase(phase.restore);
}
function restoreCard(){
	console.log('restoreCard');
	if(tmpArea.length === 0){
		return false;
	}
	const restoreCard = shiftTemporaryArea();
	if (restoreCard !== undefined) {
		setLocalStorage(keyContinueTemporary, tmpArea);

		const index = findIndexTrash('id', restoreCard.id);
		if (index === -1) {
			return false;
		}
		const card = spliceTrash(index);
		if (card === undefined) {
			return false;
		}
		unshiftDeck(card);
		setLocalStorage(keyContinueDeck, myDeck);
		setLocalStorage(keyContinueTrash, myTrash);
		$('.black-back-area').removeClass('active');
		$('.return-decide-area').removeClass('active');

		animateTrashToDeck(card);
		$.when(cardRestorePromise).done(() => {
			updateHandDom();
			updateTrashDom();
			updateDeckDom();
		});
		startPhase(phase.action);
	}
	endAction();
}
/*******************************************************/
/* 廃棄札1枚を手札に戻す関数
/*******************************************************/
function actionReuseCard(){
	startPhase(phase.reuseToHand);
}
function reuseCard(){
	console.log('reuseCard');
	if(tmpArea.length === 0){
		return false;
	}
	const reuseCard = shiftTemporaryArea();
	if (reuseCard !== undefined) {
		setLocalStorage(keyContinueTemporary, tmpArea);

		const index = findIndexDiscard('id', reuseCard.id);
		if (index === -1) {
			return false;
		}
		const card = spliceDiscard(index);
		if (card === undefined) {
			return false;
		}
		pushHand(card);
		setLocalStorage(keyContinueHand, myHand);
		setLocalStorage(keyContinueDiscard, discard);
		animatePlayerAddHand([card]);
		$.when(cardAddHandPromise).done(() => {
			updateHandDom();
		});
		$('.black-back-area').removeClass('active');
		$('.return-decide-area').removeClass('active');

		updateDiscardDom();
		startPhase(phase.action);
	}
	endAction();
}


