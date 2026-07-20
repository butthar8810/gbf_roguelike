/*****************************************************************************/
/* アーティファクト情報
/*****************************************************************************/
const artifactRarity = {common: 'common', uncommon: 'uncommon', rare: 'rare', boss: 'boss', shop: 'shop'};


const starterTest = {
	test: {
		name: 'TestArtifact', 
		effect: '戦闘開始時、攻撃力アップ3。', 
		image: 'images/artifact/gladiator.png', 
		firstFunc: 'effectBuff',
		amount: {
			buffType: 'attackUp',
			buff: 1,
		}
	},
};

const starterArtifact = {
	recovery: {
		name: '剣闘士の証', 
		effect: '戦闘終了時、HP6回復。', 
		image: 'images/artifact/Gladiator.png', 
		endFunc: 'effectRecovery',
		amount: {
			recovery: 6,
		}
	},
	startDraw: {
		name: '魔剣士の証', 
		effect: '戦闘開始時、カード2枚を追加で引く。', 
		image: 'images/artifact/Swordsman.png', 
		firstFunc: 'effectDraw',
		amount: {
			draw: 2,
		}
	},
};

const normalArtifact = {
	/*********************************コモン*************************************/
	hitPoint7: {
		name: '栄華の指輪', 
		rarity: artifactRarity.common,
		effect: '最大HPが増加:7', 
		image: 'images/artifact/Crown.png', 
		getFunc: 'effectGetMaxHP',
		amount: {
			maxHP: 7,
		}
	},
	attackUpGrade: {
		name: 'ギガス鋼', 
		rarity: artifactRarity.common,
		effect: '獲得時に、ランダムな2枚の「アタック」をアップグレードする。', 
		image: 'images/artifact/Gigas.png', 
		getFunc: 'effectRandomUpgrade',
		amount: {
			type: type.attack,
			count: 2,
		}
	},
	skillUpGrade: {
		name: '玉鋼', 
		rarity: artifactRarity.common,
		effect: '獲得時に、ランダムな2枚の「スキル」をアップグレードする。', 
		image: 'images/artifact/Tamahagane.png', 
		getFunc: 'effectRandomUpgrade',
		amount: {
			type: type.skill,
			count: 2,
		}
	},
	noBlock: {
		name: '守護騎士の証', 
		rarity: artifactRarity.common,
		effect: 'ブロック無しでターン終了した時、6ブロックを得る',
		image: 'images/artifact/Defender.png', 
	},
	shopRecovery: {
		name: '聖職者の証', 
		rarity: artifactRarity.common,
		effect: 'ショップに来店するたび、HPを15回復。', 
		image: 'images/artifact/Clergyman.png'
	},
	allWeak: {
		name: '魔導士の証', 
		rarity: artifactRarity.common,
		effect: '戦闘開始時、敵全体に恐怖1を与える。',
		image: 'images/artifact/Mage.png', 
		firstFunc: 'effectALLDebuff',
		amount: {
			debuff: 1,
			debuffType: 'weak',
		}
	},
	firstEnergy: {
		name: '盗賊の証', 
		rarity: artifactRarity.common,
		effect: '戦闘開始時、1エナジーを得る。', 
		image: 'images/artifact/Bandit.png', 
		firstFunc: 'effectGetEnergy',
		amount: {
			energy: 1,
		}
	},
	firstStrength: {
		name: '格闘士の証', 
		rarity: artifactRarity.common,
		effect: '戦闘開始時、攻撃力アップ1獲得。', 
		image: 'images/artifact/Combat.png', 
		firstFunc: 'effectBuff',
		amount: {
			buffType: 'attackUp',
			buff: 1,
		}
	},
	firstAgility: {
		name: '射手の証', 
		rarity: artifactRarity.common,
		effect: '戦闘開始時、回避率アップ1を得る。', 
		image: 'images/artifact/Archer.png', 
		firstFunc: 'effectBuff',
		amount: {
			buffType: 'dexterity',
			buff: 1,
		}
	},
	firstRecovery: {
		name: '吟遊詩人の証', 
		rarity: artifactRarity.common,
		effect: '戦闘開始時、HP2回復。', 
		image: 'images/artifact/Bard.png', 
		firstFunc: 'effectRecovery',
		amount: {
			recovery: 2,
		}
	},
	everyTrunEnergy: {
		name: '槍騎兵の証',
		rarity: artifactRarity.common,
		effect: '3ターンごとに、1エナジーを得る。', 
		image: 'images/artifact/Lancer.png', 
	},
	twice: {
		name: '双剣士の証', 
		rarity: artifactRarity.common,
		effect: 'アタックの使用10回ごとにダメージが2倍になる。', 
		image: 'images/artifact/TwinSwordsman.png', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	everyplayEnergy: {
		name: '森人の証', 
		rarity: artifactRarity.common,
		effect: 'アタックを10枚プレイするたび、1エナジーを得る。', 
		image: 'images/artifact/Dweller.png', 
	},
	Counter: {
		name: '重竜騎兵の証', 
		rarity: artifactRarity.common,
		effect: 'ダメージを受けるたび、敵に3の反撃ダメージを与える。', 
		image: 'images/artifact/Dragoon.png', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	firstAttack: {
		name: '僧兵の証', 
		rarity: artifactRarity.common,
		effect: 'このターン、「アタック」を1枚もプレイしなかった場合、次のターン開始時、1エナジーを得る。', 
		image: 'images/artifact/Monk.png', 
	},
	damageBuff: {
		name: '義弓の証', 
		rarity: artifactRarity.common,
		effect: '自分がアタックで与える、ブロックされなかった4以下のダメージを5ダメージに増加する。', 
		image: 'images/artifact/RobinHood.png', 
	},
	firstAttack: {
		name: '契約者の証', 
		rarity: artifactRarity.common,
		effect: '戦闘中最初のアタックは追加で8ダメージを与える。', 
		image: 'images/artifact/ContractHolder.png', 
	},
	firstAttack: {
		name: '尊命の証', 
		rarity: artifactRarity.common,
		effect: '戦闘中初めてHPを失うと、カードを3枚引く。', 
		image: 'images/artifact/Order.png', 
	},
	firstBlock: {
		name: '盾騎士の証', 
		rarity: artifactRarity.common,
		effect: '戦闘開始時に10ブロックを得る。', 
		image: 'images/artifact/Shielder.png', 
		firstFunc: 'effectDefense',
		amount: {
			block: 10,
		}
	},
	codex: {
		name: 'コーデックス', 
		rarity: artifactRarity.common,
		effect: '休憩時にカードを1枚獲得する。', 
		image: 'images/artifact/Codex.png',

	},
	/*********************************アンコモン*************************************/
	hitPoint10: {
		name: '覇業の指輪', 
		rarity: artifactRarity.uncommon,
		effect: '最大HPが増加:10', 
		image: 'images/artifact/Conquest.png', 
		getFunc: 'effectGetMaxHP',
		amount: {
			maxHP: 10,
		}
	},
	threeAttackPower: {
		name: 'オミナス・ホーン', 
		rarity: artifactRarity.uncommon,
		effect: '1ターンに3枚の「アタック」をプレイするたび、攻撃力アップ1を得る。', 
		image: 'images/artifact/Horn.png',
	},
	threeAttackDexterity: {
		name: 'オミナス・フィアン', 
		rarity: artifactRarity.uncommon,
		effect: '1ターンに3枚の「アタック」をプレイするたび、回避率アップ1を得る。', 
		image: 'images/artifact/Fian.png', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	threeSkill: {
		name: 'オミナス・アミュレット', 
		rarity: artifactRarity.uncommon,
		effect: '1ターンの間に「スキル」を3枚プレイするたび、敵全体に5ダメージを与える。', 
		image: 'images/artifact/Amulet.png', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	threeAttackBlock: {
		name: 'オミナス・ホイッスル', 
		rarity: artifactRarity.uncommon,
		effect: '「アタック」を3枚プレイするたび、4のブロックを得る。', 
		image: 'images/artifact/Whistle.png', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	emblem: {
		name: '英勇のエンブレム', 
		rarity: artifactRarity.uncommon,
		effect: '敵を倒すと、1エナジーを得て、カードを1枚引く。', 
		image: 'images/artifact/Emblem.png', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	tenCard: {
		name: '幻麗の紋章', 
		rarity: artifactRarity.uncommon,
		effect: 'カードを10枚プレイするたび、カードを1枚引く。', 
		image: 'images/artifact/Arms.png', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	/*********************************レア*************************************/
	hitPoint14: {
		name: '至極の指輪', 
		rarity: artifactRarity.rare,
		effect: '最大HPが増加:14', 
		image: 'images/artifact/Extremely.png', 
		getFunc: 'effectGetMaxHP',
		amount: {
			maxHP: 14,
		}
	},
	thelma: {
		name: 'テルマ', 
		rarity: artifactRarity.rare,
		effect: '使用しなかったエナジーが蓄積されていく。', 
		image: 'images/artifact/Thelma.png', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	omega: {
		name: 'オメガの器', 
		rarity: artifactRarity.rare,
		effect: '脆弱化にならない。', 
		image: 'images/artifact/Omega.png', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	gavsky: {
		name: 'ガフスキー', 
		rarity: artifactRarity.rare,
		effect: '恐怖にならない。', 
		image: 'images/artifact/Gavsky.png', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	starFragment: {
		name: '星の欠片', 
		rarity: artifactRarity.rare,
		effect: '7ターン目の終了時、すべての敵に52ダメージを与える。', 
		image: 'images/artifact/StarFragment.png', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	/*********************************BOSS*************************************/
	annihilation: {
		name: '灼滅の焔角', 
		rarity: artifactRarity.boss,
		effect: 'ターン開始時に、1エナジーを得る。ゴールドを入手できなくなる。', 
		image: 'images/artifact/Annihilation.png', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	prison: {
		name: '氷獄の結晶', 
		rarity: artifactRarity.boss,
		effect: 'ターン開始時に、1エナジーを得る。1ターンの間に、6枚までしかカードを使えなくなる。', 
		image: 'images/artifact/Prison.png', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	judgment: {
		name: '裁考の水晶', 
		rarity: artifactRarity.boss,
		effect: 'ターン開始時に、1エナジーを得る。戦闘開始時、すべての敵は筋力1を得る。', 
		image: 'images/artifact/Judgment.png', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	horse: {
		name: '人馬の円盤', 
		rarity: artifactRarity.boss,
		effect: 'ターン開始時に、1エナジーを得る。報酬のカード選択画面で、選択できるカードが2枚減る。', 
		image: 'images/artifact/Horse.png', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	crystal: {
		name: '妃光の水晶', 
		rarity: artifactRarity.boss,
		effect: 'ターン開始時に、1エナジーを得る。敵の行動予測がわからなくなる。', 
		image: 'images/artifact/Crystal.png', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	genma: {
		name: '幻魔の破片', 
		rarity: artifactRarity.boss,
		effect: 'ターン開始時に、1エナジーを得る。休憩場所で休息ができなくなる。', 
		image: 'images/artifact/Genma.png', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	eye: {
		name: '嵐竜の琥珀眼', 
		rarity: artifactRarity.boss,
		effect: 'ターン終了時に、手札を捨てなくなる。', 
		image: 'images/artifact/Eye.png', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	blue: {
		name: '蒼の羽根', 
		rarity: artifactRarity.boss,
		effect: 'エリートを倒すと2個のレリックをドロップするようになる。', 
		image: 'images/artifact/Blue.png', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	key: {
		name: '虚ろなる鍵', 
		rarity: artifactRarity.boss,
		effect: '獲得時、2枚のカードをデッキから削除する。', 
		image: 'images/artifact/Key.png', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	thorn: {
		name: '漆黒の棘翅', 
		rarity: artifactRarity.boss,
		effect: 'ボスとエリートとの戦闘において、ターン開始時に、1エナジーを得る。', 
		image: 'images/artifact/Thorn.png', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	/*********************************BOSS*************************************/
	card: {
		name: 'よろずや会員カード', 
		rarity: artifactRarity.shop,
		effect: '全商品50％割引！', 
		image: 'images/artifact/Card.png', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	Dawn: {
		name: '極到の暁', 
		rarity: artifactRarity.shop,
		effect: 'エリートとの戦闘開始時、筋力2を得る。', 
		image: 'images/artifact/Dawn.png', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	Drop: {
		name: '極到の雫', 
		rarity: artifactRarity.shop,
		effect: 'デッキをシャッフルするたび、6ブロックを得る。', 
		image: 'images/artifact/Drop.png', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	Star: {
		name: '極到の星', 
		rarity: artifactRarity.shop,
		effect: '戦闘開始時、弱体無効1を得る。', 
		image: 'images/artifact/Star.png', 
		firstFunc: 'effectBuff',
		amount: {
			buffType: 'mount',
			buff: 1,
		}
	},
	eye: {
		name: '嵐竜の琥珀眼', 
		rarity: artifactRarity.shop,
		effect: '山札を見た時、カードの並び順通りに表示される。', 
		image: 'images/artifact/Eye.png', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
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
		myArtifacts = lastArtifact;
	} else {
		// プレイヤーに初期デッキとなる10枚のカードを配る
		if (selectChara == selectCharacter.gran.name){
			getArtifact(starterArtifact.recovery);
		} else if (selectChara == selectCharacter.djeeta.name){
			getArtifact(starterArtifact.startDraw);
			getArtifact(normalArtifact.attackUpGrade);
		}
		setLocalStorage(keyContinueArtifact, myArtifacts);
	}
	updateArtifactDom();
}

/*******************************************************/
/* getArtifactEffect：アーティファクト獲得関数
/*******************************************************/
function getArtifact(artifact){
	// 獲得時効果発動
	if('getFunc' in artifact){
		if (artifact.getFunc !== '') {
			const storedFunc = globalThis[artifact.getFunc];
			if( typeof storedFunc === 'function'){
				ret = storedFunc(artifact.amount);
			} 
		}
	}
	myArtifacts.push(artifact);
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
		boss:{minPrice: 9999, maxPrice: 9999},
	};
	let index = 0
	// ラインナップ抽選
	let filteringArtifact = Object.values(normalArtifact).filter((artifact) => 
		artifact.rarity === artifactRarity.common ||
		artifact.rarity === artifactRarity.uncommon ||
		artifact.rarity === artifactRarity.rare
	)
	filteringArtifact = filteringArtifact.filter((artifact) => {
		return !myArtifacts.find((myArtifact) => myArtifact.name === artifact.name);
	});
	console.log(filteringArtifact);
	const lineupArtifact = shuffleArray(filteringArtifact).splice(0, 2);
	const shopArtifact = Object.values(normalArtifact).filter((artifact) => 
		artifact.rarity === artifactRarity.shop
	).filter((artifact) => {
		return !myArtifacts.find((myArtifact) => myArtifact.name === artifact.name);
	});
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

/*******************************************************/
/* decideArtifactReward：報酬用アーティファクト決定関数
/*******************************************************/
function decideArtifactReward(){
	let selectRarity = {};
	let selectArtifact = {};
	const artifactReward = {
		common:{weight:50, rarity: artifactRarity.common},
		uncommon:{weight:33, rarity: artifactRarity.uncommon},
		rare:{weight:17, rarity: artifactRarity.rare},
	};
	const totalWeight = Object.values(artifactReward).reduce((sum, item) => sum + item.weight, 0);
	let random = Math.floor(Math.random() * totalWeight);
	for (const rarity of Object.values(artifactReward)) {
		if (random < rarity.weight) {
			selectRarity = rarity.rarity;
			break;
		}
		random -= rarity.weight;
	}
	const filteringArtifact = Object.values(normalArtifact)
		.filter((artifact) => artifact.rarity === selectRarity)
		.filter((artifact) => {
			return !myArtifacts.find((myArtifact) => myArtifact.name === artifact.name);
		});
	console.log(filteringArtifact);
	selectArtifact = shuffleArray(filteringArtifact).shift();

	return {type: rewardType.artifact, getFlag: true, amount: selectArtifact};
}
/*******************************************************/
/* decideBossArtifactReward：報酬用ボスアーティファクト決定関数
/*******************************************************/
function decideBossArtifactReward(){
	let selectArtifacts = {};
	const filteringArtifact = Object.values(normalArtifact)
		.filter((artifact) => artifact.rarity === artifactRarity.boss)
		.filter((artifact) => {
			return !myArtifacts.find((myArtifact) => myArtifact.name === artifact.name);
		});
	console.log(filteringArtifact);
	selectArtifacts = shuffleArray(filteringArtifact).splice(0, 3);
	return {type: rewardType.boss, getFlag: true, amount: selectArtifacts};
}
/*****************************************************************************/
/* アーティファクト効果
/*****************************************************************************/
/*******************************************************/
/* 戦闘終了時、HP6回復。
/*******************************************************/
function effectRecovery(amount){
	if('recovery' in amount){
		recoveryHP(amount.recovery);
	}
	endAction();
	return true;
}

/*******************************************************/
/* 最大HPが増加:〇〇
/*******************************************************/
function effectGetMaxHP(amount){
	if('maxHP' in amount){
		playerStatus.maxHP += amount.maxHP;
		recoveryHP(amount.maxHP);
	}
	return true;
}
/*******************************************************/
/* 獲得時に、ランダムな2枚の「〇〇」をアップグレードする。
/*******************************************************/
function effectRandomUpgrade(amount){
	let enhancedCard = [];
	if('type' in amount && 'count' in amount ){
		const filteringDeck = myOriginalDeck.filter((card) => {
			return card.type === amount.type &&
			 'key' in card && card.key !== undefined;
		});
		const UpgradeCards = shuffleArray(filteringDeck).splice(0, amount.count);
		for(const card of UpgradeCards){
			if('key' in card && card.key !== undefined){
				if(card.class === cardClass.gran){
					enhancedCard.push(granEnhancedCardList[card.key]);
				} else if(card.class === cardClass.djeeta){
					enhancedCard.push(djeetaEnhancedCardList[card.key]);
				} else if(card.class === cardClass.common){
					enhancedCard.push(commonEnhancedCardList[card.key]);
				}
				myOriginalDeck = myOriginalDeck.filter((deckCard) => {
					return deckCard.id !== card.id;
				});
			}
		}
		insertCardsToOriginalDeckDom(enhancedCard);
		enhancedCard.forEach((card) => {
			pushOriginalDeck(card);
		});
		setupOriginalDeckBtnDom();
	}
	return true;
}