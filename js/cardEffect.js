/*************************************************************************************/
/* 各カード情報
/*************************************************************************************/
const cardClass = {gran: 'グラン', djeeta: 'ジータ', common: '共通', abnormal: '状態異常'};
const rarity = {starter: '初期', common: 'レア', uncommon: 'スーパーレア', rare: 'SSレア'};
const type = {attack: 'アタック', skill: 'スキル', power: 'パワー', abnormal: '状態異常'};

/********************************************/
/* グランカードリスト(強化前)
/********************************************/
const granCardList = {
	/*************** スターター ***************/
	Wide: {
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
	/*************** コモン ***************/
	//なぎ払い
	Ichimonji: {
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
		key: 'ThreeBurst',
		name: 'スリーバースト',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectTimesRandomAttack',
		image:'images/card/gran_ThreeBurst.jpg',
		effect: 'ランダムな敵に{A}のダメージを3回与える。',
		amount: {
			cost: 1, 
			attack: 3,
			count: 3,
			discard: false,
		}
	},
	//ツインストライク
	CrossSlash: {
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
	//ポンメルストライク
	Fire: {
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
		key: 'BrainShake',
		name: 'ブレインシェイク',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectAttackAndDebuff',
		image:'images/card/gran_BrainShake.jpg',
		effect: '{A}のダメージを与える。脱力{D}を与える。',
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
	//スキル
	//フレックス
	Stimulant: {
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
			block: 9,
			discard: false,
		}
	},
	//受け流し
	Smokescreen: {
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

	/*************** アンコモン ***************/
	//アッパーカット
	Melee: {
		key: 'Melee',
		name: 'メレーブロウ',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAttackAndDoubleDebuff',
		image:'images/card/gran_Melee.jpg',
		effect: '{A}のダメージを与える。脱力{D1}と防御力ダウン{D2}を与える。',
		amount: {
			cost: 1, 
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
		key: 'Shrieking',
		name: '断切の慟哭',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAttack',
		image:'images/card/gran_Shrieking.jpg',
		effect: 'エセリアル。{A}のダメージを与える。',
		amount: {
			cost: 1,
			attack: 20,
			discard: false,
			ethereal: true,
		}
	},
	//旋風刃
	Rush: {
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
		key: 'Bloody',
		name: 'ブラッディ・ヴォウ',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAttack',
		image:'images/card/gran_Bloody.jpg',
		effect: '戦闘でHPを失うたび、エナジー消費が-1。{A}のダメージを与える。',
		amount: {
			cost: 4,
			attack: 18,
			discard: false,
		}
	},
	//霊魂切断
	Tempest: {
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
	//スキル
	//やせ我慢
	Mantle: {
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
			debuff: 1,
			debuffType: 'noDraw',
			discard: false,
		}
	},
	//二刀流
	HangedMan: {
		key: 'HangedMan',
		name: '刑死者召喚',
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
		key: 'Scutum',
		name: 'スクトゥム',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectDoubleBlock',
		image:'images/card/gran_Scutum.jpg',
		effect: '現在のブロックの値を2倍にする。',
		amount: {
			cost: 2, 
			discard: false,
		}
	},
	//威嚇
	KillKnife: {
		key: 'KillKnife',
		name: 'キルナイフ',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectALLDebuff',
		image:'images/card/gran_KillKnife.jpg',
		effect: '敵全体に脱力{D}を与える。廃棄。',
		amount: {
			cost: 0, 
			debuff: 1,
			debuffType: 'weak',
			discard: true,
		}
	},
	//弱点発見
	Headband: {
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
		key: 'Tiamat',
		name: 'ティアマトシールド',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectDefenseEveryAttack',
		image:'images/card/gran_Tiamat.jpg',
		effect: 'このターン、「アタック」をプレイするたび{B}ブロックを得る。',
		amount: {
			cost: 0, 
			block: 3,
			discard: false,
		}
	},
	//武装解除
	Devil: {
		key: 'Devil',
		name: '悪魔召喚',
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
		key: 'Rose',
		name: 'ローズシールド',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: '',
		image:'images/card/gran_Rose.jpg',
		effect: '{B}ブロックを得る。このターン攻撃を受けるたび、攻撃した敵に{A}ダメージを与える。',
		amount: {
			cost: 2, 
			attack: 4,
			block: 12,
			discard: false,
		}
	},
	//焦熱の契約
	Truce: {
		key: 'Truce',
		name: '一時休戦',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: '',
		image:'images/card/gran_Truce.jpg',
		effect: 'カードを1枚廃棄する。カードを2枚引く。',
		amount: {
			cost: 1, 
			discard: false,
		}
	},
	//衝撃波
	Cane: {
		key: 'Cane',
		name: 'カースドケーン',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectALLDoubleDebuff',
		image:'images/card/gran_Cane.jpg',
		effect: '敵全体に脱力{D1}と防御力ダウン{D2}を与える。廃棄。',
		amount: {
			cost: 2, 
			debuff1: 3,
			debuffType1: 'weak',
			debuff2: 3,
			debuffType2: 'defenseDown',
			discard: false,
		}
	},
	//見張り
	Carbuncle: {
		key: 'Carbuncle',
		name: 'カーバンクル召喚',
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
		}
	},
	//非道の刃
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
	/*************** レア ***************/
	//捕食
	Ignorance: {
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
	//スキル
	//ダブルタップ
	Lyman: {
		key: 'Lyman',
		name: 'ライマンブレイク',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.skill,
		func: 'effect',
		image:'images/card/gran_Lyman.jpg',
		effect: 'このターン、次の「アタック」を2回プレイする。',
		amount: {
			cost: 1, 
			discard: false,
		}
	},
	//リミットブレイク
	Lion: {
		key: 'Lion',
		name: 'フラム・デュ・リオン',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.skill,
		func: 'effect',
		image:'images/card/gran_Lion.jpg',
		effect: '「攻撃力アップ」を2倍にする。廃棄。',
		amount: {
			cost: 1, 
			discard: true,
		}
	},
	//不動
	Solar: {
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
};
/********************************************/
/* グランカードリスト(強化後)
/********************************************/
const granEnhancedCardList = {
	Wide: {
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
	/*************** コモン ***************/
	Ichimonji: {
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
		name: '<span class="upgrade">正拳突き+</span>',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.attack,
		image:'images/card/gran_Straight.jpg',
		func: 'effectAttack',
		conditions: 'conditionsStraight',
		effect: '手札が全て「アタック」の場合に使用可。<span class="upgrade">{A}</span>のダメージを与える。',
		amount: {
			cost: 0, 
			attack: 18,
			discard: false,
		}
	},
	Pain: {
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
	Fire: {
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
		name: '<span class="upgrade">ブレインシェイク+</span>',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectAttackAndDebuff',
		image:'images/card/gran_BrainShake.jpg',
		effect: '<span class="upgrade">{A}</span>のダメージを与える。脱力<span class="upgrade">{D}</span>を与える。',
		amount: {
			cost: 2,
			attack: 14,
			debuff: 3,
			debuffType: 'weak',
			discard: false,
		}
	},
	Crash: {
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
	//怒り
	Bullet: {
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
	//スキル
	Stimulant: {
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
		name: '<span class="upgrade">ナイトコート+</span>',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.skill,
		func: 'effectDefenseAndRandomDiscard',
		image:'images/card/gran_Coat.jpg',
		effect: '<span class="upgrade">{B}</span>ブロックを得る。手札をランダムで1枚廃棄する。',
		amount: {
			cost: 1,
			block: 12,
			discard: false,
		}
	},
	Smokescreen: {
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
		name: '<span class="upgrade">アドレナル+</span>',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.skill,
		func: '',
		image:'images/card/gran_Adrenal.jpg',
		effect: '{B}ブロックを得る。戦闘終了まで手札のカード<span class="upgrade">すべて</span>をアップグレードする。',
		amount: {
			cost: 1,
			block: 5,
			discard: false,
		}
	},
	OverPower: {
		name: '<span class="upgrade">オーバーパワー+</span>',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.skill,
		func: '',
		image:'images/card/gran_OverPower.jpg',
		effect: '山札の一番上にあるカードをプレイする。そのカードを廃棄する。',
		amount: {
			cost: 0,
			discard: false,
		}
	},
	Bell: {
		name: '<span class="upgrade">銅鈴の響+</span>',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.skill,
		func: '',
		image:'images/card/gran_Bell.jpg',
		effect: 'カードを<span class="upgrade">2</span>枚引く。手札のカードを山札の1番上に置く。廃棄。',
		amount: {
			cost: 0,
			discard: true,
		}
	},
	/*************** アンコモン ***************/
	Melee: {
		name: '<span class="upgrade">メレーブロウ+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.attack,
		block: 0,
		func: 'effectAttackAndDoubleDebuff',
		image:'images/card/gran_Melee.jpg',
		effect: '{A}のダメージを与える。脱力<span class="upgrade">{D1}</span>と防御力ダウン<span class="upgrade">{D2}</span>を与える。',
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
		name: '<span class="upgrade">断切の慟哭+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAttack',
		image:'images/card/gran_Shrieking.jpg',
		effect: 'エセリアル。<span class="upgrade">{A}</span>のダメージを与える。',
		amount: {
			cost: 1,
			attack: 28,
			discard: false,
			ethereal: true,
		}
	},
	Rush: {
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
		name: '<span class="upgrade">ブラッディ・ヴォウ+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectAttack',
		image:'images/card/gran_Bloody.jpg',
		effect: '戦闘でHPを失うたび、エナジー消費が-1。<span class="upgrade">{A}</span>のダメージを与える。',
		amount: {
			cost: 3,
			attack: 22,
			discard: false,
		}
	},
	Tempest: {
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
	//スキル
	Mantle: {
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
			discard: false,
		}
	},
	HangedMan: {
		name: '<span class="upgrade">刑死者召喚+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: '',
		image:'images/card/gran_HangedMan.jpg',
		effect: '手札にある「アタック」か「パワー」を複製し、<span class="upgrade">2</span>枚手札に加える。',
		amount: {
			cost: 1, 
			discard: false,
		}
	},
	Scutum: {
		name: '<span class="upgrade">スクトゥム+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectDoubleBlock',
		image:'images/card/gran_Scutum.jpg',
		effect: '現在のブロックの値を2倍にする。',
		amount: {
			cost: 1, 
			discard: false,
		}
	},
	KillKnife: {
		name: '<span class="upgrade">キルナイフ+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectALLDebuff',
		image:'images/card/gran_KillKnife.jpg',
		effect: '敵全体に脱力<span class="upgrade">{D}</span>を与える。廃棄。',
		amount: {
			cost: 0, 
			debuff: 2,
			debuffType: 'weak',
			discard: true,
		}
	},
	Headband: {
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
		name: '<span class="upgrade">ティアマトシールド+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectDefenseEveryAttack',
		image:'images/card/gran_Tiamat.jpg',
		effect: 'このターン、「アタック」をプレイするたび<span class="upgrade">{B}</span>ブロックを得る。',
		amount: {
			cost: 0, 
			Block: 5,
			discard: false,
		}
	},
	Devil: {
		name: '<span class="upgrade">悪魔召喚+</span>',
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
		name: '<span class="upgrade">汝、食い改めよ！+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectGetEnergy',
		image:'images/card/gran_Tamtam.jpg',
		effect: '<span class="upgrade">{E}</span>エナジーを得る。廃棄。',
		amount: {
			cost: 1, 
			energy: 3,
			discard: true,
		}
	},//瀉血
	Stagnation: {
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
		name: '<span class="upgrade">ローズシールド+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: '',
		image:'images/card/gran_Rose.jpg',
		effect: '<span class="upgrade">{B}</span>ブロックを得る。このターン攻撃を受けるたび、攻撃した敵に<span class="upgrade">{A}</span>ダメージを与える。',
		amount: {
			cost: 2, 
			attack: 6,
			block: 16,
			discard: false,
		}
	},
	//焦熱の契約
	Truce: {
		name: '<span class="upgrade">一時休戦+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: '',
		image:'images/card/gran_Truce.jpg',
		effect: 'カードを1枚廃棄する。カードを<span class="upgrade">2</span>枚引く。',
		amount: {
			cost: 1, 
			discard: false,
		}
	},
	//衝撃波
	Cane: {
		name: '<span class="upgrade">カースドケーン+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectALLDoubleDebuff',
		image:'images/card/gran_Cane.jpg',
		effect: '敵全体に脱力<span class="upgrade">{D1}</span>と防御力ダウン<span class="upgrade">{D2}</span>を与える。廃棄。',
		amount: {
			cost: 2, 
			debuff1: 5,
			debuffType1: 'weak',
			debuff2: 5,
			debuffType2: 'defenseDown',
			discard: false,
		}
	},
	//見張り
	Carbuncle: {
		name: '<span class="upgrade">カーバンクル召喚+</span>',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectDefense',
		image:'images/card/gran_Carbuncle.jpg',
		effect: '<span class="upgrade">{D}</span>ブロックを得る。このカードを廃棄した時、<span class="upgrade">{E}</span>エナジーを得る。',
		amount: {
			cost: 1, 
			block: 8,
			energy: 2,
			discard: false,
		}
	},
	//非道の刃
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
	/*************** レア ***************/
	Ignorance: {
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
		name: '<span class="upgrade">ローエンドヴェーク+</span>',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.attack,
		func: 'effectAllAttackAndAbnormal',
		image:'images/card/gran_Weke.jpg',
		effect: '敵全体に<span class="upgrade">{A}</span>のダメージを与える。火傷を1枚捨て札に加える。',
		amount: {
			cost: 2,
			attack: 28,
			discard: false,
		}
	},
	Cutting: {
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
	//スキル
	Lyman: {
		name: '<span class="upgrade">ライマンブレイク+</span>',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.skill,
		func: 'effect',
		image:'images/card/gran_Lyman.jpg',
		effect: 'このターン、次の<span class="upgrade">2つの</span>「アタック」を2回プレイする。',
		amount: {
			cost: 1, 
			discard: false,
		}
	},
	Lion: {
		name: '<span class="upgrade">フラム・デュ・リオン+</span>',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.skill,
		func: 'effect',
		image:'images/card/gran_Lion.jpg',
		effect: '「攻撃力アップ」を2倍にする。',
		amount: {
			cost: 1, 
			discard: false,
		}
	},
	Solar: {
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
};
/********************************************/
/* ジータカードリスト
/********************************************/
const djeetaCardList = {
	Wide: {
		name: 'ワイドブレード',
		class: cardClass.djeeta,
		rarity: rarity.starter,
		type: type.attack,
		func: 'effectStrike',
		image:'images/card/djeeta_Wide.jpg',
		effect: '{A}のダメージを与える。',
		amount: {
			cost: 1,
			attack: 6,
			discard: false,
		}
	},
	Fast: {
		name: 'ファストスライサー',
		class: cardClass.djeeta,
		rarity: rarity.starter,
		type: type.attack,
		func: 'effectFast',
		image:'images/card/djeeta_Fast.jpg',
		effect: `{A}ダメージを与える。${debufStatus.weak.name}1を与える。`,
		amount: {
			cost: 0,
			attack: 3,
			discard: false,
		}
	},
	Defense: {
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
	Pulverizer: {
		name: 'パルバライザー',
		class: cardClass.djeeta,
		rarity: rarity.starter,
		type: type.skill,
		func: 'effectPulverizer',
		image:'images/card/djeeta_Pulverizer.jpg',
		effect: '{B}ブロックを得る。カードを1枚捨てる。',
		amount: {
			cost: 1,
			block: 8,
			discard: false,
		}
	},
	// コモン
	Mineuchi: {
		name: '峰打',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectMineuchi',
		image:'images/card/djeeta_Mineuchi.jpg',
		effect: `{A}ダメージを与える。カードを1枚引く。`,
		amount: {
			cost: 1,
			attack: 8,
			discard: false,
		}
	},
	Removal: {
		name: '芽摘',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectRemoval',
		image:'images/card/djeeta_Removal.jpg',
		effect: `{A}ダメージを与える。`,
		amount: {
			cost: 0,
			attack: 6,
			discard: false,
		}
	},
	World: {
		name: 'アラウンドザワールド',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectWorld',
		image:'images/card/djeeta_World.jpg',
		effect: `{A}ダメージを与える。カードを1枚引き、1枚捨てる。`,
		amount: {
			cost: 1,
			attack: 9,
			discard: false,
		}
	},
	Rain: {
		name: 'アローレイン',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectRain',
		image:'images/card/djeeta_Rain.jpg',
		effect: `全ての敵に{A}ダメージを2回与える。`,
		amount: {
			cost: 1,
			attack: 4,
			discard: false,
		}
	},
	True: {
		name: 'ポイズンスラスト',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectTrue',
		image:'images/card/djeeta_True.jpg',
		effect: `{A}ダメージを与える。毒3を与える。`,
		amount: {
			cost: 1,
			attack: 6,
			discard: false,
		}
	},
	Dead: {
		name: 'デッドウェッジ',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectDead',
		image:'images/card/djeeta_Dead.jpg',
		effect: `{A}ダメージを与える。敵が毒を受けている場合、さらに{A}ダメージを与える。`,
		amount: {
			cost: 1,
			attack: 7,
			discard: false,
		}
	},
	Kamaitachi: {
		name: '鎌鼬',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectKamaitachi',
		image:'images/card/djeeta_Kamaitachi.jpg',
		effect: `{A}ダメージを与える。このターンにカードを捨てていれば、2エナジーを得る。`,
		amount: {
			cost: 2,
			attack: 12,
			discard: false,
		}
	},
	Simple: {
		name: '簡易防御',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.skill,
		func: 'effectSimple',
		image:'images/card/djeeta_Simple.jpg',
		effect: `{B}ブロックを得る。`,
		amount: {
			cost: 0,
			block: 4,
			discard: false,
		}
	},
	Storm: {
		name: '嵐竜の加護',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.skill,
		func: 'effectStorm',
		image:'images/card/djeeta_Storm.jpg',
		effect: `カードを3枚引く。カードを1枚捨てる。`,
		amount: {
			cost: 1,
			discard: false,
		}
	},
	Preparation: {
		name: '戦闘準備',
		class: cardClass.djeeta,
		rarity: rarity.common,
		type: type.skill,
		effect: `カードを1枚引き、1枚捨てる。`,
		func: 'effectPreparation',
		image:'images/card/djeeta_Preparation.jpg',
		amount: {
			cost: 0,
			discard: false,
		}
	},
	// アンコモン
	Smash: {
		name: 'スマッシュライザー',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.attack,
		effect: `{B}ブロックを得る。{A}ダメージを与える。`,
		func: 'effectSmash',
		image:'images/card/djeeta_Smash.jpg',
		amount: {
			cost: 2,
			attack: 10,
			block: 10,
			discard: false,
		}
	},
	GiveUp: {
		name: 'ネバーギブアップ',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectGiveUp',
		image:'images/card/djeeta_GiveUp.jpg',
		effect: `このターンに捨てたカード1枚につき、エナジーの消費-1。{A}ダメージを3回与える。`,
		amount: {
			cost: 3,
			attack: 7,
			discard: false,
		}
	},
	Iai: {
		name: '居合スラッシュ',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectIai',
		image:'images/card/djeeta_Iai.jpg',
		effect: `{A}ダメージを与える。開幕。廃棄。`,
		amount: {
			cost: 0,
			attack: 11,
			first: true,
			discard: true,
		}
	},
	Blaze: {
		name: 'セラフブレイズ',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectBlaze',
		image:'images/card/djeeta_Blaze.jpg',
		effect: `敵全体に{A}ダメージを与える。手札をランダムに1枚捨てる。`,
		amount: {
			cost: 1,
			attack: 10,
			discard: false,
		}
	},
	Violent: {
		name: '劇毒',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectViolent',
		image:'images/card/djeeta_Violent.jpg',
		effect: `敵全体に毒4と脱力2を与える。廃棄。`,
		amount: {
			cost: 2,
			discard: true,
		}
	},
	Penalty: {
		name: 'ペナルティ',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectPenalty',
		image:'images/card/djeeta_Penalty.jpg',
		effect: `弱体99を与える。廃棄。`,
		amount: {
			cost: 2,
			discard: true,
		}
	},
	Supply: {
		name: '補給',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectSupply',
		image:'images/card/djeeta_Supply.jpg',
		effect: `使用不可。このカードを捨てた時、1エナジーを得る。`,
		amount: {
			cost: 99,
			discard: false,
		}
	},
	Tactics: {
		name: '戦術',
		class: cardClass.djeeta,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectTactics',
		image:'images/card/djeeta_Tactics.jpg',
		effect: `使用不可。このカードを捨てたとき、カードを2枚引く。`,
		amount: {
			cost: 99,
			discard: false,
		}
	},
	// レア
	Roses: {
		name: 'ブルー・ローゼス',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.attack,
		func: 'effectRoses',
		image:'images/card/djeeta_Roses.jpg',
		effect: `{A}ダメージを与える。「アタック」以外の全てのカードを捨てる。`,
		amount: {
			cost: 1,
			attack: 14,
			discard: false,
		}
	},
	DAGARA: {
		name: 'ダガラハット',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.attack,
		func: 'effectDAGARA',
		image:'images/card/djeeta_DAGARA.jpg',
		effect: `{A}ダメージを2回与える。この戦闘中はガラスのナイフのダメージが-2低下する。`,
		amount: {
			cost: 1,
			attack: 8,
			discard: false,
		}
	},
	Zetsu: {
		name: '絶',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.attack,
		func: 'effectZetsu',
		image:'images/card/djeeta_Zetsu.jpg',
		effect: `敵全体に{A}ダメージを与える。廃棄。`,
		amount: {
			cost: 1,
			attack: 13,
			discard: true,
		}
	},
	Zosimos: {
		name: 'ゾーシモス',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.skill,
		func: 'effectZosimos',
		image:'images/card/djeeta_Zosimos.jpg',
		effect: `次のターン、「アタック」のダメージが2倍になる。`,
		amount: {
			cost: 1,
			discard: false,
		}
	},
	Petrification: {
		name: 'フルグライト',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.skill,
		func: 'effectPetrification',
		image:'images/card/djeeta_Petrification.jpg',
		effect: `敵は筋力Xを失う。脱力Xを与える。廃棄。`,
		amount: {
			cost: 1,
			discard: true,
		}
	},
	Bailout: {
		name: 'ベイルアウト',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.skill,
		func: 'effectBailout',
		image:'images/card/djeeta_Bailout.jpg',
		effect: `このターン、カードを引くことができない。このターン、あなたの手札のコストは0になる。`,
		amount: {
			cost: 3,
			discard: false,
		}
	},
	Record: {
		name: 'シーイング・レコード',
		class: cardClass.djeeta,
		rarity: rarity.rare,
		type: type.skill,
		effect: `1エナジーを得る。カードを2枚引く。廃棄`,
		func: 'effectRecord',
		image:'images/card/djeeta_Record.jpg',
		amount: {
			cost: 0,
			discard: true,
		}
	},
};

const commonCardList = {

};

const abnormalCardList = {
	Mucus: {
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

			addCardToOriginalDeck(granCardList.Shrieking, 2);
			addCardToOriginalDeck(granCardList.Rush, 2);
			addCardToOriginalDeck(granCardList.ArtilleryShell, 2);
			addCardToOriginalDeck(granCardList.Revision, 2);
			addCardToOriginalDeck(granCardList.Bloody, 2);

		} else if (selectChara == selectCharacter.djeeta.name){
			addCardToOriginalDeck(djeetaCardList.Wide, 5);
			addCardToOriginalDeck(djeetaCardList.Defense, 5);
			addCardToOriginalDeck(djeetaCardList.Fast, 1);
			addCardToOriginalDeck(djeetaCardList.Pulverizer, 1);
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

function effectDoubleAttack(amount){
	// {A}のダメージを2回与える。
	console.log('effectDoubleAttack');
	if('attack' in amount){
		actionAttack(amount.attack);
		actionAttack(amount.attack);
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
function effectTimesRandomAttack(amount){
	// {A}のダメージを2回与える。
	console.log('effectFourthAttack');
	if('attack' in amount && 'count' in amount){
		for(let i = 0; i < amount.count; i++){
			actionRandomAttack(amount.attack);
		}
	}
	endAction();
	return true;
}
function effectRandomThreeAttack(amount){
	// ランダムな敵に{A}のダメージを3回与える。
	console.log('effectRandomThreeAttack');
	if('attack' in amount){
		actionRandomAttack(amount.attack);
		actionRandomAttack(amount.attack);
		actionRandomAttack(amount.attack);
	}
	endAction();
	return true;
}
function effectRandomFourAttack(amount){
	// ランダムな敵に{A}のダメージを4回与える。
	console.log('effectRandomFourAttack');
	if('attack' in amount){
		actionRandomAttack(amount.attack);
		actionRandomAttack(amount.attack);
		actionRandomAttack(amount.attack);
		actionRandomAttack(amount.attack);
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
	// {A}のダメージを与える。脱力{D1}と防御力ダウン{D2}を与える。
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
		playerStatus.remainHP -= amount.harm;
		playerCount.HPDownCount++;
		console.log(`playerCount.HPDownCount: ${playerCount.HPDownCount}`);
		setLocalStorage(keyContinuePlayerCount, playerCount);
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
function effectDoubleBlock(amount){
	// 現在のブロックの値を2倍にする。
	console.log('effectDefenseDouble');
	actionBlock(playerStatus.block);
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
}function effectALLDebuff(amount){
	// 敵全体に脱力{D}を与える。
	console.log('effectALLDebuff');
	if('debuff' in amount && 'debuffType' in amount ){
		actionStatusAllDebuf(debufStatus[amount.debuffType], amount.debuff);
	}
	endAction();
	return true;
}
function effectALLDoubleDebuff(amount){
	// 敵全体に脱力{D}を与える。
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
function effectDefenseAndRandomDiscard(amount){
	// {B}ブロックを得る。手札をランダムで1枚廃棄する。
	console.log('effectDefenseAndRandomDiscard');
	if('block' in amount){
		actionBlock(amount.block);
	}
	actionTrashRandomCard();
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
function effectGetEnergy(amount){
	// 2エナジーを得る。廃棄。
	console.log('effectGetEnergy');
	if('energy' in amount){
		playerStatus.remainEnergy += amount.energy;
		updateEnergyDom();
	}
	return true;
}
function effectGetEnergyAndSelfHarm(amount){
	// 2エナジーを得る。廃棄。
	console.log('effectGetEnergy');
	if('harm' in amount){
		playerStatus.remainHP -= amount.harm;
		playerCount.HPDownCount++;
		console.log(`playerCount.HPDownCount: ${playerCount.HPDownCount}`);
		setLocalStorage(keyContinuePlayerCount, playerCount);
	}
	if('energy' in amount){
		playerStatus.remainEnergy += amount.energy;
		updateEnergyDom();
	}
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
	const myHand = myHand.filter((hand) => hand.type === type.attack);
	noAttack.forEach((card) => {
		pushDiscard(card);
	});

	if('attack' in amount){
		actionAttack(amount.attack);
	}
	return true;
}
function effectDefenseAndNoAttackDiscard(amount){
	// 「アタック」以外の手札を廃棄する。この方法で廃棄したカードの枚数×{B}ブロックを得る。
	console.log('effectAttackAndNoAttackDiscard');
	const noAttack = myHand.filter((hand) => hand.type !== type.attack);
	const myHand = myHand.filter((hand) => hand.type === type.attack);
	noAttack.forEach((card) => {
		pushDiscard(card);
	});
	if('block' in amount){
		const totalBlock = amount.block * noAttack.length;
		actionBlock(totalBlock);
	}
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
		switch(enemy.currentStatus.nextAction.omen.type){
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
function effectDefenseEveryAttack(amount){
	// このターン、「アタック」をプレイするたび{B}ブロックを得る。
	
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
		actionAllAttack(amount.attack);
	}
	
	endAction();
	return true;
}
function effectAttackAndAllDiscard(amount){
	// 手札を全て廃棄する。この方法で廃棄した枚数x7のダメージを与える。廃棄。
	console.log('effectAttackAndAllDiscard');
	if('attack' in amount){
		const damage = myHand.length * amount.attack;
		const discardCards = deleteAllHand();
		discardCards.forEach((card) => {
			pushDiscard(card);
		});
		actionAttack(damage);
	}
	endAction();
	return true;
}
function effectGetEnergyAndDrawAndSelfHarm(amount){
	// HP6を失う。●●を得る。カードを3枚引く。廃棄。
	console.log('effectGetEnergyAndDrawAndSelfHarm');
	if('harm' in amount){
		playerStatus.remainHP -= amount.harm;
		playerCount.HPDownCount++;
		console.log(`playerCount.HPDownCount: ${playerCount.HPDownCount}`);
		setLocalStorage(keyContinuePlayerCount, playerCount);
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
	console.log('effectDeckTopPlay');
	actionReproductionToHand();
	
	return true;
}
/*************************************************************************************/
/* ジータのカード効果関数
/*************************************************************************************/
function effectFast(){
	// 3ダメージを与える。脱力1を与える。
	console.log('effectFast');
	actionAttack(djeetaCardList.Fast.amount.attack);
	actionStatusDebuf(debufStatus.weak, 1);
	return true;
}
function effectPulverizer(){
	// 8ブロックを得る。カードを1枚捨てる。
	console.log('effectPulverizer');
	actionBlock(djeetaCardList.Pulverizer.amount.block);
	actionTrashCard();
	return true;
}
function effectMineuchi(){
	// 8ダメージを与える。カードを1枚引く。
	console.log('effectMineuchi');
	actionAttack(djeetaCardList.Mineuchi.amount.attack);
	const cards = drawCardFromDeck(1);
	cards.forEach((card) => {
		animateDrawDeck(card);
	});
	return true;
}
function effectRemoval(){
	// 6ダメージを与える。
	console.log('effectRemoval');
	actionAttack(djeetaCardList.Removal.amount.attack);
	return true;
}
function effectWorld(){
	// 9ダメージを与える。カードを1枚引き、1枚捨てる。
	console.log('effectWorld');
	actionAttack(djeetaCardList.World.amount.attack);
	const cards = drawCardFromDeck(1);
	cards.forEach((card) => {
		animateDrawDeck(card);
	});
	actionTrashCard();
	return true;
}
function effectRain(){
	// 全ての敵に4ダメージを2回与える。
	console.log('effectRain');
	actionAttack(djeetaCardList.Rain.amount.attack);
	actionAttack(djeetaCardList.Rain.amount.attack);
	return true;
}
function effectTrue(){
	// 6ダメージを与える。毒3を与える。
	console.log('effectTrue');
	actionAttack(djeetaCardList.True.amount.attack);
	actionStatusDebuf(debufStatus.poison, 3);
	return true;
}
function effectDead(){
	// 7ダメージを与える。敵が毒を受けている場合、さらに7ダメージを与える。
	console.log('effectDead');
	actionAttack(djeetaCardList.Dead.amount.attack);
	// 	敵が毒を受けている場合
	if (
		currentTarget.currentStatus.status
		.find((status) => status.name === debufStatus.poison.name)
	) {
		actionAttack(djeetaCardList.Dead.amount.attack);
	}
	return true;
}
function effectKamaitachi(){
	// `12ダメージを与える。このターンにカードを捨てていれば、2エナジーを得る。
	console.log('effectKamaitachi');
	actionAttack(djeetaCardList.Kamaitachi.amount.attack);
	if (playerCount.trashCount > 0) {
		playerStatus.remainEnergy += 2;
	}
	return true;
}
function effectSimple(){
	// 4ブロックを得る。
	console.log('effectSimple');
	actionBlock(djeetaCardList.Simple.amount.block);
	return true;
}
function effectStorm(){
	// カードを3枚引く。カードを1枚捨てる。
	console.log('effectStorm');
	const cards = drawCardFromDeck(3);
	cards.forEach((card) => {
		animateDrawDeck(card);
	});
	actionTrashCard();
	return true;
}
function effectPreparation(){
	// カードを1枚引き、1枚捨てる。
	console.log('effectPreparation');
	const cards = drawCardFromDeck(1);
	cards.forEach((card) => {
		animateDrawDeck(card);
	});
	actionTrashCard();
	return true;
}
function effectSmash(){
	// 10のブロックを得る。10ダメージを与える。
	console.log('effectSmash');
	actionBlock(djeetaCardList.Smash.amount.block);
	actionAttack(djeetaCardList.Smash.amount.attack);
	return true;
}
function effectGiveUp(){
	// このターンに捨てたカード1枚につき、エナジーの消費-1。7ダメージを3回与える。
	console.log('effectGiveUp');
	actionAttack(djeetaCardList.GiveUp.amount.attack);
	actionAttack(djeetaCardList.GiveUp.amount.attack);
	actionAttack(djeetaCardList.GiveUp.amount.attack);
	return true;
}
function effectIai(){
	// 11ダメージを与える。天賦。廃棄。
	console.log('effectIai');
	actionAttack(djeetaCardList.Iai.amount.attack);
	return true;
}
function effectBlaze(){
	// 敵全体に10ダメージを与える。手札をランダムに1枚捨てる。
	console.log('effectBlaze');
	actionAllAttack(djeetaCardList.Blaze.amount.attack);
	actionTrashRandomCard();
	return true;
}
function effectViolent(){
	// 敵全体に毒4と脱力2を与える。廃棄。`
	console.log('effectViolent');
	actionStatusAllDebuf(debufStatus.poison, 4);
	actionStatusAllDebuf(debufStatus.weak, 2);
	return true;
}
function effectPenalty(){
	// 弱体99を与える。廃棄。
	console.log('effectPenalty');
	actionStatusAllDebuf(debufStatus.defenseDown, 99);
	return true;
}
function effectSupply(){
	// 使用不可。このカードを捨てた時、1エナジーを得る。
	console.log('effectSupply');
	return true;
}
function effectTactics(){
	// 使用不可。このカードを捨てたとき、カードを2枚引く。
	console.log('effectTactics');
	return true;
}
function effectRoses(){
	// 14ダメージを与える。「アタック」以外の全てのカードを捨てる。
	console.log('effectSupply');
	actionAttack(djeetaCardList.Roses.amount.attack);

	const noAttack = myHand.filter((hand) => hand.type !== type.attack);
	const myHand = myHand.filter((hand) => hand.type === type.attack);
	noAttack.forEach((card) => {
		pushTrash(card);
	});
	return true;
}
function effectDAGARA(){
	// 8ダメージを2回与える。この戦闘中はガラスのナイフのダメージが-2低下する。
	console.log('effectSupply');
	actionAttack(djeetaCardList.DAGARA.amount.attack);
	actionAttack(djeetaCardList.DAGARA.amount.attack);
	return true;
}
function effectZetsu(){
	// 敵全体に13ダメージを与える。廃棄。
	console.log('effectZetsu');
	actionAllAttack(djeetaCardList.Zetsu.amount.attack);
	return true;
}
function effectZosimos(){
	// 次のターン、「アタック」のダメージが2倍になる。
	console.log('effectSupply');
	return true;
}
function effectPetrification(){
	// 敵は筋力Xを失う。脱力Xを与える。廃棄。
	console.log('effectSupply');
	return true;
}
function effectBailout(){
	// このターン、カードを引くことができない。このターン、あなたの手札のコストは0になる。
	console.log('effectSupply');
	return true;
}
function effectRecord(){
	// 1エナジーを得る。カードを2枚引く。廃棄
	console.log('effectSupply');
	playerStatus.remainEnergy += 1;
	const cards = drawCardFromDeck(2);
	cards.forEach((card) => {
		animateDrawDeck(card);
	});
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
/*************************************************************************************/
/* カードアクション用システム関数
/*************************************************************************************/
/*******************************************************/
// ダメージ計算
/*******************************************************/
function calcDamage(attackCount, targetEnemy){
	let totalAttack = attackCount;
	let magnification = 1;
	// 脱力（攻撃力25%減少）
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
	if (Object.keys(targetEnemy).length !== 0) {
		// エネミーの状態異常を確認
		targetEnemy.currentStatus.status.forEach((status) => {
			switch(status.name){
				case bufStatus.invincible.name:// 無敵(このターン中に減らせるHPは、残りX。)
					if (totalAttack > status.amount){
						totalAttack = status.amount;
						status.amount = 0;
					} else {
						status.amount -= totalAttack;
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
/* 与ダメージ関数
/*******************************************************/
function actionAttack(attackCount){
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
			totalAttack = totalAttack - enemyBlock;
		}
	}
	enemy.currentStatus.remainHP -= totalAttack;
	// アニメーション
	animatePlayerAttack();
}
/*******************************************************/
// ブロック計算
/*******************************************************/
function calcBlock(blockCount){
	let totalBlock = blockCount;
	// 敏捷性の効果
	const dexterity = playerStatus.statuses
		.find((status) => status.name === bufStatus.dexterity.name);
	if (dexterity){
		totalBlock += dexterity.amount;
	}
	// 石化の効果
	const petrification = playerStatus.statuses
		.find((status) => status.name === debufStatus.petrification.name);
	if (petrification){
		if(totalBlock > petrification.amount){
			totalBlock -= petrification.amount;
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
function actionBlock(blockCount){
	playerStatus.block += calcBlock(blockCount);
	// アニメーション
	animatePlayerBlocked();
}
/*******************************************************/
/* バフを与える関数
/*******************************************************/
function actionStatusBuf(buf, amountCount){
	let sameBufFlag = false;
	// すでに同じバフがかかってないか確認
	// 同じバフは累積する
	for (const status of playerStatus.statuses) {
		if (status.name == buf.name) {
			status.amount += amountCount;
			sameBufFlag = true;
		}
	}
	const receivedBuf = {...buf};
	receivedBuf.amount = amountCount;
	if (!sameBufFlag) {
		playerStatus.statuses.push(receivedBuf);
	}
	// アニメーション
	animatePlayerAbnormality(receivedBuf);
}
/*******************************************************/
/* 状態異常を与える関数
/*******************************************************/
function actionStatusDebuf(debuf, amountCount){
	console.log(debuf);
	// すでに同じデバフがかかってないか確認
	// 同じデバフは累積する
	let sameDebufFlag = false;
	// すでに同じデバフがかかってないか確認
	// 同じバフは累積する
	for (const status of currentTarget.currentStatus.status) {
		if (status.name == debuf.name) {
			status.amount += amountCount;
			sameDebufFlag = true;
		}
	}
	const receivedDebuf = {...debuf};
	receivedDebuf.amount = amountCount;
	if (!sameDebufFlag) {
		currentTarget.currentStatus.status.push(receivedDebuf);
	}
	// アニメーション
	animateEnemyAbnormality(currentTarget, receivedDebuf);
}
/*******************************************************/
/* 状態異常を与える関数(全体デバフ)
/*******************************************************/
function actionStatusAllDebuf(debuf, amountCount){
	currentEnemies.forEach((enemy) => {
		// すでに同じデバフがかかってないか確認
		// 同じデバフは累積する
		let sameDebufFlag = false;
		// すでに同じデバフがかかってないか確認
		// 同じバフは累積する
		for (const status of enemy.currentStatus.status) {
			if (status.name == debuf.name) {
				status.amount += amountCount;
				sameDebufFlag = true;
			}
		}
		const receivedDebuf = {...debuf};
		receivedDebuf.amount = amountCount;
		if (!sameDebufFlag) {
			enemy.currentStatus.status.push(receivedDebuf);
		}
		// アニメーション
		animateEnemyAbnormality(enemy, receivedDebuf);
	});
}
/*******************************************************/
/* 1枚カードを捨てる関数
/*******************************************************/
function actionTrashCard(){
	startPhase(phase.trash);
}
function trashCard(){
	console.log('trashCard');
	console.log(tmpArea);
	if(tmpArea.length === 0){
		return false;
	}
	const trashCard = shiftTemporaryArea();
	if (trashCard !== undefined) {
		setLocalStorage(keyContinueTemporary, tmpArea);
		const index = findIndexHand('id', trashCard.id);
		if (index === -1) {
			return false;
		}
		const card = spliceHand(index);
		if (card === undefined) {
			return false;
		}
		pushTrash(card);
		playerCount.trashCount++;
		setLocalStorage(keyContinuePlayerCount, playerCount);
		setLocalStorage(keyContinueHand, myHand);
		setLocalStorage(keyContinueTrash, myTrash);
		$('.black-back-area').removeClass('active');
		$('.hand-decide-area').removeClass('active');
		$('.hand-area').removeClass('front');
		$(`.hand-card`).removeClass('select');

		animateHandToTrash(card);
		$.when(cardTrashPromise).done(() => {
			updateHandDom();
			updateTrashDom();
		});
		startPhase(phase.action);
	}
	endAction();
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
	pushTrash(card);
	playerCount.trashCount++;
	setLocalStorage(keyContinuePlayerCount, playerCount);
	animateHandToTrash(card);
	$.when(cardTrashPromise).done(() => {
		updateHandDom();
		updateTrashDom();
	});
}
/*******************************************************/
/* 手札1枚をデッキの一番上に置く関数
/*******************************************************/
function actionUnshiftDeck(){
	startPhase(phase.unshiftDeck);
}
function unshiftDeckCard(){
	console.log('unshiftDeckCard');
	if(tmpArea.length === 0){
		return false;
	}
	const restoreCard = shiftTemporaryArea();
	if (restoreCard !== undefined) {
		setLocalStorage(keyContinueTemporary, tmpArea);

		const index = findIndexHand('id', restoreCard.id);
		if (index === -1) {
			return false;
		}
		const card = spliceHand(index);
		if (card === undefined) {
			return false;
		}
		unshiftDeck(card);
		setLocalStorage(keyContinueDeck, myDeck);
		setLocalStorage(keyContinueTrash, myHand);
		$('.black-back-area').removeClass('active');
		$('.return-decide-area').removeClass('active');

		animateHandToDeck(card);
		$.when(cardRemovePromise).done(() => {
			updateHandDom();
			updateDeckDom();
		});
		startPhase(phase.action);
	}
	endAction();
}
/*******************************************************/
/* 手札1枚をアップグレードする関数
/*******************************************************/
function actionUpGradeCard(){
	startPhase(phase.upGrade);
}
function upGradeCard(){
	console.log('upGradeCard');
	if(tmpArea.length === 0){
		return false;
	}
	const upGradeCard = shiftTemporaryArea();
	if (upGradeCard !== undefined) {
		setLocalStorage(keyContinueTemporary, tmpArea);
		const index = findIndexHand('id', upGradeCard.id);
		if (index === -1) {
			return false;
		}
		const card = spliceHand(index);
		if (card === undefined) {
			return false;
		}
		pushHand(granEnhancedCardList[card.key]);
		setLocalStorage(keyContinueHand, myHand);
		$('.black-back-area').removeClass('active');
		$('.hand-decide-area').removeClass('active');
		$('.hand-area').removeClass('front');
		$(`.hand-card`).removeClass('select');
		$(`.hand-enhance-area`).addClass('hidden');
		updateHandDom();
		startPhase(phase.action);
	}
	endAction();
}


/*******************************************************/
/* 手札1枚を複製する関数
/*******************************************************/
function actionReproductionToHand(){
	startPhase(phase.reproductionToHand);
}
function reproductionToHandCard(){
	console.log('reproductionToHandCard');
	if(tmpArea.length === 0){
		return false;
	}
	const upGradeCard = shiftTemporaryArea();
	if (upGradeCard !== undefined) {
		setLocalStorage(keyContinueTemporary, tmpArea);
		const index = findIndexHand('id', upGradeCard.id);
		if (index === -1) {
			return false;
		}
		const card = myHand[index];
		if (card === undefined) {
			return false;
		}
		pushHand(card);
		setLocalStorage(keyContinueHand, myHand);
		$('.black-back-area').removeClass('active');
		$('.hand-decide-area').removeClass('active');
		$('.hand-area').removeClass('front');
		$(`.hand-card`).removeClass('select');

		startPhase(phase.action);
	}
	endAction();
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
		pushStackCard(card);
	}else{
		console.log("shiftDeck undefined");
	}
	// デッキと手札をローカルストレージに記憶
	setLocalStorage(keyContinueDeck, myDeck);
	setLocalStorage(keyContinueStack, stackCard);
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


