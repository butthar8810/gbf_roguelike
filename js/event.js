function startRestEvent(){
	// レストエリアとトークエリアを開放
	$('.battle-area').addClass('hidden');
	$('.info-area').addClass('hidden');
	$('.talk-area').removeClass('hidden');
	$('.rest-area').removeClass('hidden');
	setLocalStorage(keyContinueRestFlag, true);
	const btn = appendTalkingBtn('一息つく');
	btn.click((e) => {
		deleteTalkingBtn();
		selectRestAction();
	});
}
function getReadyRestOK(){
	removeLocalStorage(keyContinueRestFlag);
	const btn = appendTalkingBtn('塔へ上る');
	btn.click((e) => {
		climbTowerContinue();
	});
}
function selectRestAction(){
	const firstBtn = appendTalkingBtn('休憩する（HP30%回復）');
	firstBtn.click((e) => {
		deleteTalkingBtn();
		recoveryHP(playerStatus.maxHP * 0.3);
		animateRestHeal();
		getReadyRestOK();
	});
	const secondBtn = appendTalkingBtn('鍛冶（武器を強化する）');
	secondBtn.click((e) => {
		deleteTalkingBtn();
		enhanceCardList();
	});
}
function enhanceCardList(){
	$('.black-back-area').addClass('active');
	$('.enhance-area').addClass('active');
	$('.enhance-content').html('');
	updateEnhanceTitleDom('強化する武器を選んでください');
	myOriginalDeck.forEach((card) => {
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
		const enhanceCardDiv = $('<div>')
			.addClass('enhance-card')
			.html(`${card.name}`)
			.append(cardImage)
			.append(costDiv)
			.append(textParagraph)
			// 手札クリック時の処理登録
			.click(card ,() => {
				console.log(card);
				decideEnhanceCard(card);
			});
		if (card.class == cardClass.gran) {
			enhanceCardDiv.addClass('gran-card');
		} else if (card.class == cardClass.djeeta) {
			enhanceCardDiv.addClass('djeeta-card');
		} else if (card.class == cardClass.common) {
			enhanceCardDiv.addClass('common-card');
		} else if (card.class == cardClass.abnormal) {
			enhanceCardDiv.addClass('abnormal-card');
		}
		$('.enhance-content').append(enhanceCardDiv);
	});

}
function decideEnhanceCard(card){
	updateEnhanceTitleDom('この武器を強化しますか。');
	$('.enhance-content').addClass('hidden');
	$('.enhance-decide-content').removeClass('hidden');
	$('.enhance-decide-content').html('');
	$('.enhance-btn-area').addClass('active');
	// 強化元のカード表示
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
	const enhanceCardDiv = $('<div>')
		.addClass('enhance-decide-card')
		.addClass('before')
		.html(`${card.name}`)
		.append(cardImage)
		.append(costDiv)
		.append(textParagraph)
		// 手札クリック時の処理登録
		.click(card ,() => {
			console.log(card);
			decideEnhanceCard(card);
		});
	if (card.class == cardClass.gran) {
		enhanceCardDiv.addClass('gran-card');
	} else if (card.class == cardClass.djeeta) {
		enhanceCardDiv.addClass('djeeta-card');
	} else if (card.class == cardClass.common) {
		enhanceCardDiv.addClass('common-card');
	} else if (card.class == cardClass.abnormal) {
		enhanceCardDiv.addClass('abnormal-card');
	}
	$('.enhance-decide-content').append(enhanceCardDiv);
	// 矢印



	// 強化後のカードを表示
	let enhancedEffect = card.effect;
	if('attack' in card.amount){
		enhancedEffect = enhancedEffect.replace('{A}', `${card.amount.attack}`);
	}
	if('block' in card.amount){
		enhancedEffect = enhancedEffect.replace('{B}', `${card.amount.block}`);
	}
	const enhancedtextParagraph = $('<p>')
		.html(enhancedEffect);
	const enhancedcostDiv = $('<div>')
		.html(card.amount.cost);
	const enhancedcardImage = $('<img>')
		.attr('src', card.image);
	const enhancedCardDiv = $('<div>')
		.addClass('enhance-decide-card')
		.addClass('after')
		.html(`${card.name}`)
		.append(enhancedcardImage)
		.append(enhancedcostDiv)
		.append(enhancedtextParagraph)
		// 手札クリック時の処理登録
		.click(card ,() => {
			console.log(card);
			decideEnhanceCard(card);
		});
	if (card.class == cardClass.gran) {
		enhancedCardDiv.addClass('gran-card');
	} else if (card.class == cardClass.djeeta) {
		enhancedCardDiv.addClass('djeeta-card');
	} else if (card.class == cardClass.common) {
		enhancedCardDiv.addClass('common-card');
	} else if (card.class == cardClass.abnormal) {
		enhancedCardDiv.addClass('abnormal-card');
	}
	$('.enhance-decide-content').append(enhancedCardDiv);

	$('.enhance-cancel-btn').off();
	$('.enhance-btn').off();
	$('.enhance-cancel-btn').click(() => {
		$('.enhance-content').removeClass('hidden');
		$('.enhance-decide-content').addClass('hidden');
		$('.enhance-btn-area').removeClass('active');
		enhanceCardList();
	});
	$('.enhance-btn').click(() => {
		$('.enhance-btn-area').removeClass('active');
		exchangeEnhancedCard(card, card);
	});
}

function exchangeEnhancedCard(card, enhancedCard){
	const index = myOriginalDeck.findIndex(deckCard => deckCard.name === card.name);
	const enhancedOriginCard = deepCopyCard([enhancedCard])[0];
	console.log(myOriginalDeck);
	myOriginalDeck.splice(index, 1, enhancedOriginCard);
	console.log(myOriginalDeck);
	$('.before').addClass('hidden');

}
function updateEnhanceTitleDom(text){
	$('.enhance-title').html(text);
}