/*************************************************************************************/
/* 各カード情報
/*************************************************************************************/
const cardClass = {gran: 'グラン', djeeta: 'ジータ', common: '共通', abnormal: '状態異常'};

const granCardList = {
	Wide: {name: 'ワイドブレード', class: cardClass.gran, cost: 1, rarity: rarity.starter, type: type.attack, effect: '6のダメージを与える。', func: 'effectStrike', image:'images/card/gran_Wide.jpg', discard: false},
	PowerSwing: {name: 'パワースウィング', class: cardClass.gran, cost: 2, rarity: rarity.starter, type: type.attack, effect: `8のダメージを与える。${debufStatus.defenseDown.name}2を与える。`, func: 'effectPowerSwing', image:'images/card/gran_PowerSwing.jpg', discard: false},
	Defense: {name: '防御', class: cardClass.gran, cost: 1, rarity: rarity.starter, type: type.skill, effect: '5ブロックを得る。', func: 'effectDefense', image:'images/card/gran_Defense.jpg', discard: false},
	// コモン
	Ichimonji: {name: '一文字切り', class: cardClass.gran, cost: 1, rarity: rarity.common, type: type.attack, effect: '敵全体に8のダメージを与える。', func: 'effectIchimonji', image:'images/card/gran_Ichimonji.jpg', discard: false},
	Swing: {name: 'スウィング', class: cardClass.gran, cost: 1, rarity: rarity.common, type: type.attack, effect: '5のブロックを得る。5のダメージを与える。', func: 'effectSwing', image:'images/card/gran_Swing.jpg', discard: false},
	ThreeBurst: {name: 'スリーバースト', class: cardClass.gran, cost: 1, rarity: rarity.common, type: type.attack, effect: 'ランダムな敵に3のダメージを3回与える。', func: 'effectThreeBurst', image:'images/card/gran_ThreeBurst.jpg', discard: false},
	CrossSlash: {name: 'クロススラッシュ', class: cardClass.gran, cost: 1, rarity: rarity.common, type: type.attack, effect: '5のダメージを2回与える。', func: 'effectCrossSlash', image:'images/card/gran_CrossSlash.jpg', discard: false},
	BrainShake: {name: 'ブレインシェイク', class: cardClass.gran, cost: 2, rarity: rarity.common, type: type.attack, effect: '12のダメージを与える。脱力2を与える。', func: 'effectBrainShake', image:'images/card/gran_BrainShake.jpg', discard: false},
	// アンコモン
	EarthKilling: {name: '地烈斬', class: cardClass.gran, cost: 1, rarity: rarity.uncommon, type: type.attack, effect: '5のダメージを与える。敵が弱体を受けている場合は1エナジーを得てカードを1枚引く。', func: 'effectEarthKilling', image:'images/card/gran_EarthKilling.jpg', discard: false},
	Tempest: {name: 'テンペストブレード', class: cardClass.gran, cost: 2, rarity: rarity.uncommon, type: type.attack, effect: '「アタック」以外の手札を廃棄する。16のダメージを与える。', func: 'effectTempest', image:'images/card/gran_Tempest.jpg', discard: false},
	Melee: {name: 'メレーブロウ', class: cardClass.gran, cost: 1, rarity: rarity.uncommon, type: type.attack, effect: '13のダメージを与える。脱力1と弱体1を与える。', func: 'effectMelee', image:'images/card/gran_Melee.jpg', discard: false},
	Zetsusen: {name: '絶閃', class: cardClass.gran, cost: 1, rarity: rarity.uncommon, type: type.attack, effect: 'HP2を失う。15のダメージを与える。', func: 'effectZetsusen', image:'images/card/gran_Zetsusen.jpg', discard: false},
	Tamtam: {name: '汝、食い改めよ！', class: cardClass.gran, cost: 1, rarity: rarity.uncommon, type: type.skill, effect: '2エナジーを得る。廃棄。', func: 'effectTamtam', image:'images/card/gran_Tamtam.jpg', discard: true},
	// レア
	Ignorance: {name: '無明剣', class: cardClass.gran, cost: 1, rarity: rarity.rare, type: type.attack, effect: '10のダメージを与える。この攻撃で敵を倒すと、最大HPが3増える(戦闘終了後も有効)。廃棄。', func: 'effectIgnorance', image:'images/card/gran_Ignorance.jpg', discard: true},
	Meteor: {name: 'ミーティアライト', class: cardClass.gran, cost: 2, rarity: rarity.rare, type: type.attack, effect: '敵全体に4のダメージを与える。防御されなかったダメージ分を回復する。廃棄。', func: 'effectMeteor', image:'images/card/gran_Meteor.jpg', discard: true},
	Cutting: {name: '大切断', class: cardClass.gran, cost: 3, rarity: rarity.rare, type: type.attack, effect: '32のダメージを与える。', func: 'effectCutting', image:'images/card/gran_Cutting.jpg', discard: false},
	Getsuga: {name: '無明剣', class: cardClass.gran, cost: 2, rarity: rarity.rare, type: type.attack, effect: '手札を全て廃棄する。この方法で廃棄した枚数x7のダメージを与える。廃棄。', func: 'effectGetsuga', image:'images/card/gran_Getsuga.jpg', discard: true},
	Naan: {name: 'ハッル・ラディーズ', class: cardClass.gran, cost: 1, rarity: rarity.rare, type: type.skill, effect: 'HP6を失う。●●を得る。カードを3枚引く。廃棄。', func: 'effectNaan', image:'images/card/gran_Naan.jpg', discard: true},
};
const djeetaCardList = {
	Wide: {name: 'ワイドブレード', class: cardClass.djeeta, cost: 1, rarity: rarity.starter, type: type.attack, effect: '6のダメージを与える。', func: 'effectStrike', image:'images/card/djeeta_Wide.jpg', discard: false},
	Fast: {name: 'ファストスライサー', class: cardClass.djeeta, cost: 0, rarity: rarity.starter, type: type.attack, effect: `3ダメージを与える。${debufStatus.weak.name}1を与える。`, func: 'effectFast', image:'images/card/djeeta_Fast.jpg', discard: false},
	Defense: {name: '防御', class: cardClass.djeeta, cost: 1, rarity: rarity.starter, type: type.skill, effect: '5ブロックを得る。', func: 'effectDefense', image:'images/card/djeeta_Defense.jpg', discard: false},
	Pulverizer: {name: 'パルバライザー', class: cardClass.djeeta, cost: 1, rarity: rarity.starter, type: type.skill, effect: '8ブロックを得る。カードを1枚捨てる。', func: 'effectPulverizer', image:'images/card/djeeta_Pulverizer.jpg', discard: false},
	// コモン
	Mineuchi: {name: '峰打', class: cardClass.djeeta, cost: 1, rarity: rarity.common, type: type.attack, effect: `8ダメージを与える。カードを1枚引く。`, func: 'effectFast', image:'images/card/djeeta_Mineuchi.jpg', discard: false},
	Removal: {name: '芽摘', class: cardClass.djeeta, cost: 0, rarity: rarity.common, type: type.attack, effect: `6ダメージを与える。`, func: 'effectFast', image:'images/card/djeeta_Removal.jpg', discard: false},
	World: {name: 'アラウンドザワールド', class: cardClass.djeeta, cost: 1, rarity: rarity.common, type: type.attack, effect: `9ダメージを与える。カードを1枚引き、1枚捨てる。`, func: 'effectFast', image:'images/card/djeeta_World.jpg', discard: false},
	Rain: {name: 'アローレイン', class: cardClass.djeeta, cost: 1, rarity: rarity.common, type: type.attack, effect: `全ての敵に4ダメージを2回与える。`, func: 'effectFast', image:'images/card/djeeta_Rain.jpg', discard: false},
	True: {name: 'ポイズンスラスト', class: cardClass.djeeta, cost: 1, rarity: rarity.common, type: type.attack, effect: `6ダメージを与える。毒3を与える。`, func: 'effectFast', image:'images/card/djeeta_True.jpg', discard: false},
	Dead: {name: 'デッドウェッジ', class: cardClass.djeeta, cost: 1, rarity: rarity.common, type: type.attack, effect: `7ダメージを与える。敵が毒を受けている場合、さらに7ダメージを与える。`, func: 'effectFast', image:'images/card/djeeta_Dead.jpg', discard: false},
	Kamaitachi: {name: '鎌鼬', class: cardClass.djeeta, cost: 2, rarity: rarity.common, type: type.attack, effect: `12ダメージを与える。このターンにカードを捨てていれば、2エナジーを得る。`, func: 'effectFast', image:'images/card/djeeta_Kamaitachi.jpg', discard: false},
	Simple: {name: '簡易防御', class: cardClass.djeeta, cost: 0, rarity: rarity.common, type: type.skill, effect: `4ブロックを得る。`, func: 'effectFast', image:'images/card/djeeta_Simple.jpg', discard: false},
	Storm: {name: '嵐竜の加護', class: cardClass.djeeta, cost: 1, rarity: rarity.common, type: type.skill, effect: `カードを3枚引く。カードを1枚捨てる。`, func: 'effectFast', image:'images/card/djeeta_Storm.jpg', discard: false},
	Preparation: {name: '戦闘準備', class: cardClass.djeeta, cost: 0, rarity: rarity.common, type: type.skill, effect: `カードを1枚引き、1枚捨てる。`, func: 'effectFast', image:'images/card/djeeta_Preparation.jpg', discard: false},
	// アンコモン
	Smash: {name: 'スマッシュライザー', class: cardClass.djeeta, cost: 2, rarity: rarity.uncommon, type: type.attack, effect: `10のブロックを得る。10ダメージを与える。`, func: 'effectFast', image:'images/card/djeeta_Smash.jpg', discard: false},
	GiveUp: {name: 'ネバーギブアップ', class: cardClass.djeeta, cost: 3, rarity: rarity.uncommon, type: type.attack, effect: `このターンに捨てたカード1枚につき、エナジーの消費-1。7ダメージを3回与える。`, func: 'effectFast', image:'images/card/djeeta_GiveUp.jpg', discard: false},
	Iai: {name: '居合スラッシュ', class: cardClass.djeeta, cost: 0, rarity: rarity.uncommon, type: type.attack, effect: `11ダメージを与える。天賦。廃棄。`, func: 'effectFast', image:'images/card/djeeta_Iai.jpg', discard: true},
	Blaze: {name: 'セラフブレイズ', class: cardClass.djeeta, cost: 1, rarity: rarity.uncommon, type: type.attack, effect: `敵全体に10ダメージを与える。手札をランダムに1枚捨てる。`, func: 'effectFast', image:'images/card/djeeta_Blaze.jpg', discard: false},
	Violent: {name: '劇毒', class: cardClass.djeeta, cost: 2, rarity: rarity.uncommon, type: type.skill, effect: `敵全体に毒4と脱力2を与える。廃棄。`, func: 'effectFast', image:'images/card/djeeta_Violent.jpg', discard: true},
	Penalty: {name: 'ペナルティ', class: cardClass.djeeta, cost: 2, rarity: rarity.uncommon, type: type.skill, effect: `弱体99を与える。廃棄。`, func: 'effectFast', image:'images/card/djeeta_Penalty.jpg', discard: true},
	Supply: {name: '補給', class: cardClass.djeeta, cost: 99, rarity: rarity.uncommon, type: type.skill, effect: `使用不可。このカードを捨てた時、1エナジーを得る。`, func: 'effectFast', image:'images/card/djeeta_Supply.jpg', discard: false},
	Tactics: {name: '戦術', class: cardClass.djeeta, cost: 99, rarity: rarity.uncommon, type: type.skill, effect: `使用不可。このカードを捨てたとき、カードを2枚引く。`, func: 'effectFast', image:'images/card/djeeta_Tactics.jpg', discard: false},
	// レア
	Roses: {name: 'ブルー・ローゼス', class: cardClass.djeeta, cost: 1, rarity: rarity.rare, type: type.attack, effect: `14ダメージを与える。「アタック」以外の全てのカードを捨てる。`, func: 'effectFast', image:'images/card/djeeta_Roses.jpg', discard: false},
	DAGARA: {name: 'ダガラハット', class: cardClass.djeeta, cost: 1, rarity: rarity.rare, type: type.attack, effect: `8ダメージを2回与える。この戦闘中はガラスのナイフのダメージが-2低下する。`, func: 'effectFast', image:'images/card/djeeta_DAGARA.jpg', discard: false},
	Zetsu: {name: '絶', class: cardClass.djeeta, cost: 1, rarity: rarity.rare, type: type.attack, effect: `敵全体に13ダメージを与える。廃棄。`, func: 'effectFast', image:'images/card/djeeta_Zetsu.jpg', discard: true},
	Zosimos: {name: 'ゾーシモス', class: cardClass.djeeta, cost: 1, rarity: rarity.rare, type: type.skill, effect: `次のターン、「アタック」のダメージが2倍になる。`, func: 'effectFast', image:'images/card/djeeta_Zosimos.jpg', discard: false},
	Petrification: {name: 'フルグライト', class: cardClass.djeeta, cost: 'X', rarity: rarity.rare, type: type.skill, effect: `敵は筋力Xを失う。脱力Xを与える。廃棄。`, func: 'effectFast', image:'images/card/djeeta_Petrification.jpg', discard: true},
	Bailout: {name: 'ベイルアウト', class: cardClass.djeeta, cost: 3, rarity: rarity.rare, type: type.skill, effect: `このターン、カードを引くことができない。このターン、あなたの手札のコストは0になる。`, func: 'effectFast', image:'images/card/djeeta_Bailout.jpg', discard: false},
	Record: {name: 'シーイング・レコード', class: cardClass.djeeta, cost: 0, rarity: rarity.rare, type: type.skill, effect: `1エナジーを得る。カードを2枚引く。廃棄`, func: 'effectFast', image:'images/card/djeeta_Record.jpg', discard: true},
};

const commonCardList = {

};

const abnormalCardList = {
	Mucus: {name: '粘液', class: cardClass.abnormal, cost: 1, rarity: rarity.common, type: type.skill, effect: `廃棄。`, func: '', image:'images/card/abnormal_Mucus.jpg', discard: true},
	Injury: {name: '負傷', class: cardClass.abnormal, cost: 99, rarity: rarity.common, type: type.skill, effect: `使用不可。`, func: '', image:'images/card/abnormal_Injury.jpg', discard: true},
	Curse: {name: '呪いの紋章', class: cardClass.abnormal, cost: 99, rarity: rarity.common, type: type.skill, effect: `使用不可。このカードを引いたとき、エナジーを1失う。エセリアル。`, func: '', image:'images/card/abnormal_Curse.jpg', discard: true},
	Burn: {name: '火傷', class: cardClass.abnormal, cost: 99, rarity: rarity.common, type: type.skill, effect: `使用不可。ターン終了時に2ダメージを受ける。`, func: '', image:'images/card/abnormal_Burn.jpg', discard: true},
	
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
function selectCardReward(rewardCards){
	$(`.select-cards-area`).html('');
	$(`.select-skip`).html('');
	console.log(rewardCards);
	rewardCards.amount.forEach((card) => {
		const textParagraph = $('<p>')
			.html(card.effect);
		const costDiv = $('<div>')
			.html(card.cost);
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
	actionAttack(6);
	actionStatusBuf(bufStatus.attackUp, 2);
	actionStatusDebuf(debufStatus.attackDown, 2);
	return true;
}
function effectDefense(){
	// 5ブロックを得る。
	console.log('effectDefense');
	actionBlock(5);
	return true;
}
/*************************************************************************************/
/* グランのカード効果関数
/*************************************************************************************/
function effectPowerSwing(){
	// 8のダメージを与える。弱体2を与える。
	console.log('effectPowerSwing');
	actionAttack(8);
	actionStatusDebuf(debufStatus.defenseDown, 2);
	return true;
}
function effectIchimonji(){
	// 敵全体に8のダメージを与える。
	console.log('effectIchimonji');
	actionAllAttack(8);
	return true;
}
function effectSwing(){
	// 5のブロックを得る。5のダメージを与える。
	console.log('effectIchimonji');
	actionBlock(5);
	actionAttack(5);
	return true;
}
function effectThreeBurst(){
	// ランダムな敵に3のダメージを3回与える。
	console.log('effectThreeBurst');
	actionRandomAttack(3);
	actionRandomAttack(3);
	actionRandomAttack(3);
	return true;
}
function effectCrossSlash(){
	// 5のダメージを2回与える。
	console.log('effectCrossSlash');
	actionAttack(5);
	actionAttack(5);
	
	return true;
}
function effectBrainShake(){
	// 12のダメージを与える。脱力2を与える。
	console.log('effectBrainShake');
	actionAttack(12);
	actionStatusDebuf(debufStatus.weak, 2);
	
	return true;
}
function effectEarthKilling(){
	// 5のダメージを与える。敵が防御力ダウンを受けている場合は1エナジーを得てカードを1枚引く。
	console.log('effectEarthKilling');
	actionAttack(5);
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

	actionAttack(16);
	return true;
}
function effectMelee(){
	// 13のダメージを与える。脱力1と弱体1を与える。
	console.log('effectMelee');
	actionAttack(13);
	actionStatusDebuf(debufStatus.defenseDown, 1);
	actionStatusDebuf(debufStatus.week, 1);
	
	return true;
}
function effectZetsusen(){
	// HP2を失う。15のダメージを与える。
	console.log('effectZetsusen');
	playerStatus.remainHP -= 2;
	actionAttack(15);
	
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
	actionAttack(10);
	return true;
}
function effectMeteor(){
	// 敵全体に4のダメージを与える。防御されなかったダメージ分を回復する。廃棄。
	console.log('effectMeteor');
	actionAllAttack(4);
	
	return true;
}
function effectCutting(){
	// 32のダメージを与える。
	console.log('effectCutting');
	actionAttack(32);
	
	return true;
}
function effectGetsuga(){
	// 手札を全て廃棄する。この方法で廃棄した枚数x7のダメージを与える。廃棄。
	console.log('effectGetsuga');
	const damage = myHand.length * 7;
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
	actionAttack(3);
	actionStatusDebuf(debufStatus.weak, 1);
	return true;
}
function effectPulverizer(){
	// 8ブロックを得る。カードを1枚捨てる。
	console.log('effectPulverizer');
	actionBlock(8);
	actionTrashCard();
	return true;
}




/*************************************************************************************/
/* カードアクション用システム関数
/*************************************************************************************/
/*******************************************************/
/* 与ダメージ関数
/*******************************************************/
function actionAttack(attackCount){
	let totalAttack = attackCount;
	// 
	const enemyBlock = currentTarget.currentStatus.block;
	if(enemyBlock > 0){
		if(enemyBlock >= attackCount){
			currentTarget.currentStatus.block -= attackCount;
			totalAttack = 0;
		} else if (enemyBlock < attackCount){
			currentTarget.currentStatus.block = 0;
			totalAttack = attackCount - enemyBlock;
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
	let totalAttack = attackCount;
	currentEnemies.forEach((enemy) => {
		const enemyBlock = enemy.currentStatus.block;
		if(enemyBlock > 0){
			if(enemyBlock >= attackCount){
				enemy.currentStatus.block -= attackCount;
				totalAttack = 0;
			} else if (enemyBlock < attackCount){
				enemy.currentStatus.block = 0;
				totalAttack = attackCount - enemyBlock;
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
	let totalAttack = attackCount;
	let random = Math.floor(Math.random() * currentEnemies.length);
	console.log(`Random Hit: ${random}`);
	const enemy = currentEnemies[random];
	const enemyBlock = enemy.currentStatus.block;
	if(enemyBlock > 0){
		if(enemyBlock >= attackCount){
			enemy.currentStatus.block -= attackCount;
			totalAttack = 0;
		} else if (enemyBlock < attackCount){
			enemy.currentStatus.block = 0;
			totalAttack = attackCount - enemyBlock;
		}
	}
	enemy.currentStatus.remainHP -= totalAttack;
	// アニメーション
	animatePlayerAttack();
}
/*******************************************************/
/* ブロック関数
/*******************************************************/
function actionBlock(blockCount){
	playerStatus.block += blockCount;
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
/* 1枚カードを捨てる関数
/*******************************************************/
function actionTrashCard(){
	decideFunc = 'trashCard';
	setLocalStorage(keyContinueDecide, decideFunc);
	startPhase(phase.trash);
}
function trashCard(){
	console.log('decidePulverizer');
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
		setLocalStorage(keyContinueHand, myHand);
		setLocalStorage(keyContinueDiscard, myTrash);
		$('.decide-area').removeClass('active');
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