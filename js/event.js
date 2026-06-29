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
				decideEnhanceCardDom(card);
			});
		$('.enhance-content').append(enhanceCardDiv);
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