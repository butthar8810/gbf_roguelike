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
	// 強化前のカード一覧表示
	myOriginalDeck.forEach((card) => {
		if (!('key' in card)){
			console.log('強化済み');
			console.log(card);
			return;
		}
		const enhanceCardDiv = createCardDom(card);
		enhanceCardDiv
			.addClass('enhance-card')
			// 手札クリック時の処理登録
			.click(card ,() => {
				console.log(card);
				decideEnhanceCard(card);
			});
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
	const enhanceCardDiv = createCardDom(card);
	enhanceCardDiv
		.addClass('enhance-decide-card')
		.addClass('before')
		// 手札クリック時の処理登録
		.click(card ,() => {
			console.log(card);
			decideEnhanceCard(card);
		});
	$('.enhance-decide-content').append(enhanceCardDiv);
	// 矢印
	const arrowIcon = $('<i>')
		.addClass('fa-solid')
		.addClass('fa-angles-right');
	$('.enhance-decide-content').append(arrowIcon);
	// 強化後のカードを表示
	const enhancedCard = granEnhancedCardList[card.key];
	console.log(enhancedCard);
	const enhancedCardDiv = createCardDom(enhancedCard)
	enhancedCardDiv
		.addClass('enhance-decide-card')
		.addClass('after')
		// 手札クリック時の処理登録
		.click(enhancedCard ,() => {
			console.log(enhancedCard);
			decideEnhanceCard(enhancedCard);
		});
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
		exchangeEnhancedCard(card, enhancedCard);
	});
}

function exchangeEnhancedCard(card, enhancedCard){
	const index = myOriginalDeck.findIndex(deckCard => deckCard.name === card.name);
	const enhancedOriginCard = deepCopyCard(enhancedCard);
	console.log(myOriginalDeck);
	myOriginalDeck.splice(index, 1, enhancedOriginCard);
	console.log(myOriginalDeck);
	$('.before').addClass('hidden');

}