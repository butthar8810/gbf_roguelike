/*************************************************************************************/
/* 各カード情報
/*************************************************************************************/
const cardClass = {gran: 'グラン', djeeta: 'ジータ', common: '共通', abnormal: '状態異常'};

/********************************************/
/* グランカードリスト
/********************************************/
const granCardList = {
	Wide: {
		name: 'ワイドブレード',
		class: cardClass.gran,
		rarity: rarity.starter,
		type: type.attack,
		func: 'effectStrike',
		image:'images/card/gran_Wide.jpg',
		effect: '{A}のダメージを与える。',
		amount: {
			cost: 1, 
			attack: 6,
			discard: false,
		}
	},
	PowerSwing: {
		name: 'パワースウィング',
		class: cardClass.gran,
		rarity: rarity.starter,
		type: type.attack,
		func: 'effectPowerSwing',
		image:'images/card/gran_PowerSwing.jpg',
		effect: '{A}のダメージを与える。防御力ダウン2を与える。',
		amount: {
			cost: 2,
			attack: 8,
			discard: false,
		}
	},
	Defense: {
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
	// コモン
	Ichimonji: {
		name: '一文字切り',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectIchimonji',
		image:'images/card/gran_Ichimonji.jpg',
		effect: '敵全体に{A}のダメージを与える。',
		amount: {
			cost: 1, 
			attack: 8,
			discard: false,
		}
	},
	Swing: {
		name: 'スウィング',
		class: cardClass.gran,
		cost: 1,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectSwing',
		image:'images/card/gran_Swing.jpg',
		effect: '{B}のブロックを得る。{A}のダメージを与える。',
		amount: {
			cost: 1, 
			attack: 5,
			block: 5,
			discard: false,
		}
	},
	ThreeBurst: {
		name: 'スリーバースト',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectThreeBurst',
		image:'images/card/gran_ThreeBurst.jpg',
		effect: 'ランダムな敵に{A}のダメージを3回与える。',
		amount: {
			cost: 1, 
			attack: 3,
			discard: false,
		}
	},
	CrossSlash: {
		name: 'クロススラッシュ',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectCrossSlash',
		image:'images/card/gran_CrossSlash.jpg',
		effect: '{A}のダメージを2回与える。',
		amount: {
			cost: 1, 
			attack: 5,
			discard: false,
		}
	},
	BrainShake: {
		name: 'ブレインシェイク',
		class: cardClass.gran,
		rarity: rarity.common,
		type: type.attack,
		func: 'effectBrainShake',
		image:'images/card/gran_BrainShake.jpg',
		effect: '{A}のダメージを与える。脱力2を与える。',
		amount: {
			cost: 2,
			attack: 12,
			discard: false,
		}
	},
	// アンコモン
	EarthKilling: {
		name: '地烈斬',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectEarthKilling',
		image:'images/card/gran_EarthKilling.jpg',
		effect: '{A}のダメージを与える。敵が「防御力ダウン」を受けている場合は1エナジーを得てカードを1枚引く。',
		amount: {
			cost: 1, 
			attack: 5,
			discard: false,
		}
	},
	Tempest: {
		name: 'テンペストブレード',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.attack,
		block: 0,
		func: 'effectTempest',
		image:'images/card/gran_Tempest.jpg',
		effect: '「アタック」以外の手札を廃棄する。{A}のダメージを与える。',
		amount: {
			cost: 2,
			attack: 16,
			discard: false,
		}
	},
	Melee: {
		name: 'メレーブロウ',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.attack,
		block: 0,
		func: 'effectMelee',
		image:'images/card/gran_Melee.jpg',
		effect: '{A}のダメージを与える。脱力1と弱体1を与える。',
		amount: {
			cost: 1, 
			attack: 13,
			discard: false,
		}
	},
	Zetsusen: {
		name: '絶閃',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.attack,
		func: 'effectZetsusen',
		image:'images/card/gran_Zetsusen.jpg',
		effect: 'HP2を失う。{A}のダメージを与える。',
		amount: {
			cost: 1, 
			attack: 15,
			discard: false,
		}
	},
	Tamtam: {
		name: '汝、食い改めよ！',
		class: cardClass.gran,
		rarity: rarity.uncommon,
		type: type.skill,
		func: 'effectTamtam',
		image:'images/card/gran_Tamtam.jpg',
		effect: '2エナジーを得る。廃棄。',
		amount: {
			cost: 1, 
			discard: true,
		}
	},
	// レア
	Ignorance: {
		name: '無明剣',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.attack,
		func: 'effectIgnorance',
		image:'images/card/gran_Ignorance.jpg',
		effect: '{A}のダメージを与える。この攻撃で敵を倒すと、最大HPが3増える(戦闘終了後も有効)。廃棄。',
		amount: {
			cost: 1, 
			attack: 10,
			discard: true,
		}
	},
	Meteor: {
		name: 'ミーティアライト',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.attack,
		func: 'effectMeteor',
		image:'images/card/gran_Meteor.jpg',
		effect: '敵全体に{A}のダメージを与える。防御されなかったダメージ分を回復する。廃棄。',
		amount: {
			cost: 2,
			attack: 4,
			discard: true,
		}
	},
	Cutting: {
		name: '大切断',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.attack,
		block: 0,
		func: 'effectCutting',
		image:'images/card/gran_Cutting.jpg',
		discard: false,
		effect: '{A}のダメージを与える。',
		amount: {
			cost: 3,
			attack: 32,
			discard: false,
		}
	},
	Getsuga: {
		name: '月牙',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.attack,
		block: 0,
		func: 'effectGetsuga',
		image:'images/card/gran_Getsuga.jpg',
		effect: '手札を全て廃棄する。この方法で廃棄した枚数x{A}のダメージを与える。廃棄。',
		amount: {
			cost: 2,
			attack: 7,
			discard: true,
		}
	},
	Naan: {
		name: 'ハッル・ラディーズ',
		class: cardClass.gran,
		rarity: rarity.rare,
		type: type.skill,
		effect: 'HP6を失う。2エナジーを得る。カードを3枚引く。廃棄。',
		func: 'effectNaan',
		image:'images/card/gran_Naan.jpg',
		amount: {
			cost: 1, 
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
		type: type.skill,
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
		type: type.skill,
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
		type: type.skill,
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
		type: type.skill,
		func: '',
		image:'images/card/abnormal_Burn.jpg',
		effect: `使用不可。ターン終了時に2ダメージを受ける。`,
		amount: {
			cost: 99,
			discard: true,
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
		selectCardList = deepCopyCard(Object.values(granCardList));
	} else if (selectChara == selectCharacter.djeeta.name){
		selectCardList = deepCopyCard(Object.values(djeetaCardList));	
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
/*****************************************************/
/* カード報酬選択関数
/*****************************************************/
function selectCardReward(rewardCards){
	$(`.select-cards-area`).html('');
	$(`.select-skip`).html('');
	console.log(rewardCards);
	rewardCards.amount.forEach((card) => {
		let effect = card.effect;
		if('attack' in card.amount){
			effect = effect.replace('{A}', `${card.amount.attack}`);
		}
		if('block' in card.amount){
			effect = effect.replace('{B}', `${card.amount.block}`);
		}
		const textParagraph = $('<p>')
			.html(effect);
		const costDiv = $('<div>')
			.html(card.amount.cost);
		const cardImage = $('<img>')
			.attr('src', card.image);
		const selectCardDiv = $('<div>')
			.addClass('select-card')
			.html(`${card.name}`)
			.append(cardImage)
			.append(costDiv)
			.append(textParagraph)
			.click(card ,() => {
				addCardToOriginalDeck(card);
				rewardCards.getFlag = false;
				setLocalStorage(keyContinueReward, rewards);
				updateResultContent();
				$('.card-select').addClass('hidden');
				$('.result-modal-body').removeClass('hidden');
			});
		if (card.class == cardClass.gran) {
			selectCardDiv.addClass('gran-card');
		} else if (card.class == cardClass.djeeta) {
			selectCardDiv.addClass('djeeta-card');
		} else if (card.class == cardClass.common) {
			selectCardDiv.addClass('common-card');
		} else if (card.class == cardClass.abnormal) {
			selectCardDiv.addClass('abnormal-card');
		}
		$(`.select-cards-area`).append(selectCardDiv);
	});
	const btnImage = $('<img>')
		.attr('src', 'images/btn2.png');
	const skipParagraph = $('<p>')
		.html('スキップ');
	const selectSkipBtnDiv = $('<div>')
		.addClass('select-skip-btn')
		.append(btnImage)
		.append(skipParagraph)
		.click((e) => {
			rewardCards.getFlag = false;
			setLocalStorage(keyContinueReward, rewards);
			updateResultContent();
			$('.card-select').addClass('hidden');
			$('.result-modal-body').removeClass('hidden');
		});
	$(`.select-skip`).append(selectSkipBtnDiv);
	$('.result-modal-body').addClass('hidden');
	$('.card-select').removeClass('hidden');
}
/*************************************************************************************/
/* 各カード効果関数
/*************************************************************************************/
function effectDammy(){}
function effectStrike(){
	// 6のダメージを与える。
	console.log('effectStrike');
	actionAttack(granCardList.Wide.amount.attack);
	actionStatusBuf(bufStatus.attackUp, 2);
	actionStatusDebuf(debufStatus.attackDown, 2);
	return true;
}
function effectDefense(){
	// 5ブロックを得る。
	console.log('effectDefense');
	actionBlock(granCardList.Defense.amount.block);
	return true;
}
/*************************************************************************************/
/* グランのカード効果関数
/*************************************************************************************/
function effectPowerSwing(){
	// 8のダメージを与える。弱体2を与える。
	console.log('effectPowerSwing');
	actionAttack(granCardList.PowerSwing.amount.attack);
	actionStatusDebuf(debufStatus.defenseDown, 2);
	return true;
}
function effectIchimonji(){
	// 敵全体に8のダメージを与える。
	console.log('effectIchimonji');
	actionAllAttack(granCardList.Ichimonji.amount.attack);
	return true;
}
function effectSwing(){
	// 5のブロックを得る。5のダメージを与える。
	console.log('effectIchimonji');
	actionBlock(granCardList.Swing.amount.block);
	actionAttack(granCardList.Swing.amount.attack);
	return true;
}
function effectThreeBurst(){
	// ランダムな敵に3のダメージを3回与える。
	console.log('effectThreeBurst');
	actionRandomAttack(granCardList.ThreeBurst.amount.attack);
	actionRandomAttack(granCardList.ThreeBurst.amount.attack);
	actionRandomAttack(granCardList.ThreeBurst.amount.attack);
	return true;
}
function effectCrossSlash(){
	// 5のダメージを2回与える。
	console.log('effectCrossSlash');
	actionAttack(granCardList.CrossSlash.amount.attack);
	actionAttack(granCardList.CrossSlash.amount.attack);
	
	return true;
}
function effectBrainShake(){
	// 12のダメージを与える。脱力2を与える。
	console.log('effectBrainShake');
	actionAttack(granCardList.BrainShake.amount.attack);
	actionStatusDebuf(debufStatus.weak, 2);
	
	return true;
}
function effectEarthKilling(){
	// 5のダメージを与える。敵が防御力ダウンを受けている場合は1エナジーを得てカードを1枚引く。
	console.log('effectEarthKilling');
	actionAttack(granCardList.EarthKilling.amount.attack);
	// 	敵が防御力ダウンを受けている場合
	if (
		currentTarget.currentStatus.status
		.find((status) => status.name === debufStatus.defenseDown.name)
	) {
		playerStatus.remainEnergy += 1;
		const card = drawCardFromDeck(1)[0];
		animateDrawDeck(card);
	}
	
	return true;
}
function effectTempest(){
	// 「アタック」以外の手札を廃棄する。16のダメージを与える。
	console.log('effectTempest');
	const noAttack = myHand.filter((hand) => hand.type !== type.attack);
	const myHand = myHand.filter((hand) => hand.type === type.attack);
	noAttack.forEach((card) => {
		pushDiscard(card);
	});

	actionAttack(granCardList.Tempest.amount.attack);
	return true;
}
function effectMelee(){
	// 13のダメージを与える。脱力1と弱体1を与える。
	console.log('effectMelee');
	actionAttack(granCardList.Melee.amount.attack);
	actionStatusDebuf(debufStatus.defenseDown, 1);
	actionStatusDebuf(debufStatus.week, 1);
	
	return true;
}
function effectZetsusen(){
	// HP2を失う。15のダメージを与える。
	console.log('effectZetsusen');
	playerStatus.remainHP -= 2;
	actionAttack(granCardList.Zetsusen.amount.attack);
	
	return true;
}
function effectTamtam(){
	// 2エナジーを得る。廃棄。
	console.log('effectTamtam');
	playerStatus.remainEnergy += 2;
	
	return true;
}
function effectIgnorance(){
	// 10のダメージを与える。この攻撃で敵を倒すと、最大HPが3増える(戦闘終了後も有効)。廃棄。
	console.log('effectIgnorance');
	actionAttack(granCardList.Ignorance.amount.attack);
	return true;
}
function effectMeteor(){
	// 敵全体に4のダメージを与える。防御されなかったダメージ分を回復する。廃棄。
	console.log('effectMeteor');
	actionAllAttack(granCardList.Meteor.amount.attack);
	
	return true;
}
function effectCutting(){
	// 32のダメージを与える。
	console.log('effectCutting');
	actionAttack(granCardList.Cutting.amount.attack);
	
	return true;
}
function effectGetsuga(){
	// 手札を全て廃棄する。この方法で廃棄した枚数x7のダメージを与える。廃棄。
	console.log('effectGetsuga');
	const damage = myHand.length * granCardList.Getsuga.amount.attack;
	const discardCards = deleteAllHand();
	discardCards.forEach((card) => {
		pushDiscard(card);
	});
	actionAttack(damage);
	
	return true;
}
function effectNaan(){
	// HP6を失う。●●を得る。カードを3枚引く。廃棄。
	console.log('effectNaan');
	playerStatus.remainHP -= 2;
	playerStatus.remainEnergy += 2;
	const cards = drawCardFromDeck(1);
	cards.forEach((card) => {
		animateDrawDeck(card);
	});
	
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
	if (trashCount) {
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
	console.log(targetEnemy);
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
	console.log(`攻撃倍率：${magnification}`);
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
		trashCount = true;
		setLocalStorage(keyContinueTrashCount, trashCount);
		setLocalStorage(keyContinueHand, myHand);
		setLocalStorage(keyContinueDiscard, myTrash);
		$('.black-back-area').removeClass('active');
		$('.trash-decide-area').removeClass('active');
		$('.hand-area').removeClass('front');
		$(`.hand-card`).removeClass('select');

		animateHandToTrash(card);
		$.when(cardTrashPromise).done(() => {
			updateHandDom();
			updateTrashDom();
		});
		startPhase(phase.action);
	}
}
/*******************************************************/
/* 手札をランダムに捨てる関数
/*******************************************************/
function actionTrashRandomCard(){
	let randomIndex = Math.floor(Math.random() * myHand.length);
	const card = spliceHand(index);
	if (card === undefined) {
		return false;
	}
	pushTrash(card);
	trashCount = true;
	animateHandToTrash(card);
	$.when(cardTrashPromise).done(() => {
		updateHandDom();
		updateTrashDom();
	});

}