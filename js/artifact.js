/*****************************************************************************/
/* アーティファクト情報
/*****************************************************************************/
const rtifactRarity = {common: 'common', uncommon: 'uncommon', rare: 'rare', boss: 'boss', shop: 'shop'};


const starterTest = {
	test: {name: '剣闘士の証', effect: '戦闘開始時、攻撃力アップ3。', image: 'images/artifact/gladiator.png', firstFunc: 'artifactTest'},
};

const starterArtifact = {
	recovery: {
		name: '剣闘士の証', 
		effect: '戦闘終了時、HP6回復。', 
		image: 'images/artifact/gladiator.png', 
		firstFunc: 'artifactRecovery'
	},
	startDraw: {
		name: '魔剣士の証', 
		effect: '戦闘開始時、カード2枚を追加で引く。', 
		image: 'images/artifact/swordsman.png', 
		firstFunc: 'artifactStartDraw'
	},
};

const normalArtifact = {
	hitPoint7: {
		name: '栄華の指輪', 
		rarity: rtifactRarity.common,
		effect: '最大HPが増加:7', 
		image: 'images/artifact/crown.png', 
		firstFunc: ''
	},
	agility: {
		name: '金華羽飾', 
		rarity: rtifactRarity.common,
		effect: '戦闘開始時、回避率アップ1を得る。', 
		image: 'images/artifact/feather.png', 
		firstFunc: 'artifactAgility'
	},
	attackUpGrade: {
		name: 'ギガス鋼', 
		rarity: rtifactRarity.common,
		effect: '獲得時に、ランダムな2枚の「アタック」をアップグレードする。', 
		image: 'images/artifact/Gigas.png', 
		firstFunc: ''
	},
	skillUpGrade: {
		name: '玉鋼', 
		rarity: rtifactRarity.common,
		effect: '獲得時に、ランダムな2枚の「スキル」をアップグレードする。', 
		image: 'images/artifact/Tamahagane.png', firstFunc: ''
	},
	block: {
		name: 'サント・キャスク', 
		rarity: rtifactRarity.common,
		effect: '戦闘開始時に10ブロックを得る。', 
		image: 'images/artifact/cask.png', 
		firstFunc: 'artifactBlock'
	},
	lamp: {
		name: '幻麗の明鉱', 
		rarity: rtifactRarity.common,
		effect: '戦闘開始時、1エナジーを得る。', 
		image: 'images/artifact/lamp.png', 
		firstFunc: 'artifactLamp'
	},
	noBlock: {
		name: '守護騎士の証', 
		rarity: rtifactRarity.common,
		effect: 'ブロック無しでターン終了した時、6ブロックを得る',
		image: 'images/artifact/defender.png', 
		firstFunc: ''
	},
	Samurai: {
		name: '侍の証', 
		rarity: rtifactRarity.common,
		effect: 'ダメージを受けるたび、敵に3の反撃ダメージを与える。', 
		image: 'images/artifact/Samurai.png', 
		firstFunc: ''
	},
	goblet: {
		name: '双剣士の証', 
		rarity: rtifactRarity.common,
		effect: 'アタックの使用10回ごとにダメージが2倍になる。', 
		image: 'images/artifact/twinSwordsman.png', 
		firstFunc: ''
	},
	codex: {
		name: 'コーデックス', 
		rarity: rtifactRarity.common,
		effect: '休憩時にカードを1枚獲得する。', 
		image: 'images/artifact/codex.png', 
		firstFunc: ''
	},
	pendant: {
		name: 'オミナス・ペンダント', 
		rarity: rtifactRarity.common,
		effect: 'アタックを10枚プレイするたび、1エナジーを得る。', 
		image: 'images/artifact/pendant.png', firstFunc: ''
	},
	stone: {
		name: 'オミナス・ストーン',
		rarity: rtifactRarity.common,
		effect: '3ターンごとに、1エナジーを得る。', 
		image: 'images/artifact/stone.png', 
		firstFunc: ''
	},
	strength: {
		name: 'オミナス・リング', 
		rarity: rtifactRarity.common,
		effect: '戦闘開始時、攻撃力アップ1獲得。', 
		image: 'images/artifact/ring.png', 
		firstFunc: 'artifactStrength'
	},
	goblet: {
		name: 'オミナス・ゴブレット', 
		rarity: rtifactRarity.common,
		effect: '戦闘開始時、HP2回復。', 
		image: 'images/artifact/goblet.png', 
		firstFunc: 'artifactNormalRecovery'
	},
	gavel: {
		name: '幻麗の小槌', 
		rarity: rtifactRarity.common,
		effect: 'ショップに来店するたび、HPを15回復。', 
		image: 'images/artifact/gavel.png', 
		firstFunc: ''
	},
	hitPoint10: {
		name: '覇業の指輪', 
		rarity: rtifactRarity.uncommon,
		effect: '最大HPが増加:10', 
		image: 'images/artifact/conquest.png', 
		firstFunc: ''
	},
	threeAttackPower: {
		name: 'オミナス・ホーン', 
		rarity: rtifactRarity.uncommon,
		effect: '1ターンに3枚の「アタック」をプレイするたび、攻撃力アップ1を得る。', 
		image: 'images/artifact/horn.png', 
		firstFunc: ''
	},
	threeAttackDexterity: {
		name: 'オミナス・フィアン', 
		rarity: rtifactRarity.uncommon,
		effect: '1ターンに3枚の「アタック」をプレイするたび、回避率アップ1を得る。', 
		image: 'images/artifact/fian.png', 
		firstFunc: ''
	},
	threeSkill: {
		name: 'オミナス・アミュレット', 
		rarity: rtifactRarity.uncommon,
		effect: '1ターンの間に「スキル」を3枚プレイするたび、敵全体に5ダメージを与える。', 
		image: 'images/artifact/amulet.png', 
		firstFunc: ''
	},
	threeAttackBlock: {
		name: 'オミナス・ホイッスル', 
		rarity: rtifactRarity.uncommon,
		effect: '「アタック」を3枚プレイするたび、4のブロックを得る。', 
		image: 'images/artifact/whistle.png', 
		firstFunc: ''
	},
	emblem: {
		name: '英勇のエンブレム', 
		rarity: rtifactRarity.uncommon,
		effect: '敵を倒すと、1エナジーを得て、カードを1枚引く。', 
		image: 'images/artifact/emblem.png', 
		firstFunc: ''
	},
	tenCard: {
		name: '幻麗の紋章', 
		rarity: rtifactRarity.uncommon,
		effect: 'カードを10枚プレイするたび、カードを1枚引く。', 
		image: 'images/artifact/arms.png', 
		firstFunc: ''
	},
	hitPoint14: {
		name: '至極の指輪', 
		rarity: rtifactRarity.rare,
		effect: '最大HPが増加:14', 
		image: 'images/artifact/extremely.png', 
		firstFunc: ''
	},
	thelma: {
		name: 'テルマ', 
		rarity: rtifactRarity.rare,
		effect: '使用しなかったエナジーが蓄積されていく。', 
		image: 'images/artifact/thelma.png', 
		firstFunc: ''
	},
	omega: {
		name: 'オメガの器', 
		rarity: rtifactRarity.rare,
		effect: '脆弱化にならない。', 
		image: 'images/artifact/omega.png', 
		firstFunc: ''
	},
	gavsky: {
		name: 'ガフスキー', 
		rarity: rtifactRarity.rare,
		effect: '恐怖にならない。', 
		image: 'images/artifact/gavsky.png', 
		firstFunc: ''
	},
	star: {
		name: '星の欠片', 
		rarity: rtifactRarity.rare,
		effect: '7ターン目の終了時、すべての敵に52ダメージを与える。', 
		image: 'images/artifact/star.png', 
		firstFunc: ''
	},
	annihilation: {
		name: '灼滅の焔角', 
		rarity: rtifactRarity.boss,
		effect: 'ターン開始時に、1エナジーを得る。ゴールドを入手できなくなる。', 
		image: 'images/artifact/annihilation.png', 
		firstFunc: ''
	},
	prison: {
		name: '氷獄の結晶', 
		rarity: rtifactRarity.boss,
		effect: 'ターン開始時に、1エナジーを得る。1ターンの間に、6枚までしかカードを使えなくなる。', 
		image: 'images/artifact/prison.png', 
		firstFunc: ''
	},
	judgment: {
		name: '裁考の水晶', 
		rarity: rtifactRarity.boss,
		effect: 'ターン開始時に、1エナジーを得る。戦闘開始時、すべての敵は筋力1を得る。', 
		image: 'images/artifact/judgment.png', 
		firstFunc: ''
	},
	horse: {
		name: '人馬の円盤', 
		rarity: rtifactRarity.boss,
		effect: 'ターン開始時に、1エナジーを得る。報酬のカード選択画面で、選択できるカードが2枚減る。', 
		image: 'images/artifact/horse.png', 
		firstFunc: ''
	},
	crystal: {
		name: '妃光の水晶', 
		rarity: rtifactRarity.boss,
		effect: 'ターン開始時に、1エナジーを得る。敵の行動予測がわからなくなる。', 
		image: 'images/artifact/crystal.png', 
		firstFunc: ''
	},
	genma: {
		name: '幻魔の破片', 
		rarity: rtifactRarity.boss,
		effect: 'ターン開始時に、1エナジーを得る。休憩場所で休息ができなくなる。', 
		image: 'images/artifact/Genma.png', 
		firstFunc: ''
	},
	eye: {
		name: '嵐竜の琥珀眼', 
		rarity: rtifactRarity.boss,
		effect: 'ターン終了時に、手札を捨てなくなる。', 
		image: 'images/artifact/eye.png', 
		firstFunc: ''
	},
	blue: {
		name: '蒼の羽根', 
		rarity: rtifactRarity.boss,
		effect: 'エリートを倒すと2個のレリックをドロップするようになる。', 
		image: 'images/artifact/blue.png', 
		firstFunc: ''
	},
	key: {
		name: '虚ろなる鍵', 
		rarity: rtifactRarity.boss,
		effect: '獲得時、2枚のカードをデッキから削除する。', 
		image: 'images/artifact/key.png', 
		firstFunc: ''
	},
	thorn: {
		name: '漆黒の棘翅', 
		rarity: rtifactRarity.boss,
		effect: 'ボスとエリートとの戦闘において、ターン開始時に、1エナジーを得る。', 
		image: 'images/artifact/thorn.png', 
		firstFunc: ''
	},
};
/*******************************************************/
/* setupArtifact：初期アーティファクトを配る
/*******************************************************/
function setupArtifact(){
	const Continued = getLocalStorage(keyContinueFlag);
	const selectChara = getLocalStorage(keySelectChara);
	const lastArtifact = getLocalStorage(keyContinueArtifact);

	if(lastArtifact && Continued){
		// 続きからの場合
		myArtifact = lastArtifact;
	} else {
		// プレイヤーに初期デッキとなる10枚のカードを配る
		if (selectChara == selectCharacter.gran.name){
			myArtifact.push(starterArtifact.recovery);
		} else if (selectChara == selectCharacter.djeeta.name){
			myArtifact.push(starterArtifact.startDraw);
		}
		setLocalStorage(keyContinueArtifact, myArtifact);
	}
	updateArtifactDom();
}
/*******************************************************/
/* setupArtifact：ショップラインナップ決定関数
/*******************************************************/
function decideArtifactLineup(){
	const selectArtifacts = [];
	const lineupPrice = {
		common:{minPrice: 149, maxPrice: 201},
		uncommon:{minPrice: 191, maxPrice: 259},
		rare:{minPrice: 234, maxPrice: 316},
		shop:{minPrice: 170, maxPrice: 230},
		boss:{minPrice: 170, maxPrice: 230},
	};
	let index = 0
	// ラインナップ抽選
	const filteringArtifact = Object.values(normalArtifact).filter((artifact) => 
		artifact.rarity === rtifactRarity.common ||
		artifact.rarity === rtifactRarity.uncommon ||
		artifact.rarity === rtifactRarity.rare
	);
	const lineupArtifact = shuffleArray(filteringArtifact).splice(0, 2);
	const shopArtifact = Object.values(normalArtifact).filter((artifact) => 
		artifact.rarity === rtifactRarity.boss ||
		artifact.rarity === rtifactRarity.shop
	);
	lineupArtifact.push(shuffleArray(shopArtifact).splice(0, 1)[0]);
	//レア度別に値段を決める
	lineupArtifact.forEach((artifact) => {
		const price = lineupPrice[artifact.rarity];
		let randomPrice = Math.floor(
			Math.random() * (price.maxPrice - price.minPrice) + price.minPrice
		);
		selectArtifacts.push({
			id: index,
			artifact: artifact,
			price: randomPrice,
		});
		index++;
	});
	return selectArtifacts;
}
/*****************************************************************************/
/* アーティファクト効果
/*****************************************************************************/
function artifactTest(){
	console.log('artifactAgility');
	
	actionStatusBuf(buffStatus.attackUp, 3);
	
	return true;
}
/*******************************************************/
/* 戦闘終了時、HP6回復。
/*******************************************************/
function artifactRecovery(){
	const recoveryHP = playerStatus.remainHP + 6;
	if (playerStatus.maxHP < recoveryHP){
		playerStatus.remainHP = playerStatus.maxHP;
	} else {
		playerStatus.remainHP = recoveryHP;
	}
	return true;
}

/*******************************************************/
/* 戦闘開始時、カード2枚を追加で引く。
/*******************************************************/
function artifactStartDraw(){
	console.log('artifactStartDraw');
	const drawCards = drawCardFromDeck(2);
	
	for(const card of drawCards) {
		animateDrawDeck(card);
	}
	return true;
}
/*******************************************************/
/* 戦闘開始時、回避率アップ1を得る。
/*******************************************************/
function artifactAgility(){
	console.log('artifactAgility');
	
	actionStatusBuf(buffStatus.dexterity, 1);
	
	return true;
}
/*******************************************************/
/* 戦闘開始時、攻撃力アップ1獲得。
/*******************************************************/
function artifactStrength(){
	console.log('artifactStrength');
	
	actionStatusBuf(buffStatus.attackUp, 1);

	return true;
}
/*******************************************************/
/* 戦闘開始時、HP2回復。
/*******************************************************/
function artifactNormalRecovery(){
	console.log('artifactNormalRecovery');
	const recoveryHP = playerStatus.remainHP + 2;
	if (playerStatus.maxHP < recoveryHP){
		playerStatus.remainHP = playerStatus.maxHP;
	} else {
		playerStatus.remainHP = recoveryHP;
	}
	return true;
}
/*******************************************************/
/* 戦闘開始時に10ブロックを得る。
/*******************************************************/
function artifactBlock(){
	console.log('artifactBlock');
	playerStatus.block += 10;
	
	animatePlayerBlocked()
	
	return true;
}
/*******************************************************/
/* 戦闘開始時、1エナジーを得る。
/*******************************************************/
function artifactLamp(){
	console.log('artifactBlock');
	playerStatus.remainEnergy += 1;
		
	return true;

}