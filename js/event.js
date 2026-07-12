
/*****************************************************************************************/
/* 休憩イベント
/*****************************************************************************************/
/*******************************************************/
/* 休憩イベント開始
/*******************************************************/
function startRestEvent(){
	// レストエリアとトークエリアを開放
	hiddenStageArea();
	$('.rest-area').removeClass('hidden');
	$('.talk-area').removeClass('hidden');
	setLocalStorage(keyContinueFlag, continueFlag.restArea);
	const btn = appendTalkingBtn('一息つく');
	btn.click((e) => {
		deleteTalkingBtn();
		selectRestAction();
	});
}
/*******************************************************/
/* 休憩イベント終了
/*******************************************************/
function getReadyRestOK(){
	const btn = appendTalkingBtn('塔へ上る');
	btn.click((e) => {
		climbTowerContinue();
	});
}
/*******************************************************/
/* 休憩イベント
/*******************************************************/
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
/*******************************************************/
/* 鍛冶イベント
/*******************************************************/
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
/*******************************************************/
/* 鍛冶イベント（決定後）
/*******************************************************/
function exchangeEnhancedCard(card, enhancedCard){
	const index = myOriginalDeck.findIndex(deckCard => deckCard.name === card.name);
	const enhancedOriginCard = deepCopyCard(enhancedCard);
	myOriginalDeck.splice(index, 1, enhancedOriginCard);
	setLocalStorage(keyContinueOriginalDeck, myOriginalDeck);
	$('.before').addClass('hidden');
	$('.arrow-icon').addClass('hidden');
	setTimeout(() => {
		$('.black-back-area').removeClass('active');
		$('.enhance-area').removeClass('active');
		$('.enhance-content').html('');
		climbTowerContinue();
	}, 1500);
}

/*****************************************************************************************/
/* ショップイベント
/*****************************************************************************************/
/*******************************************************/
/* ショップイベント開始
/*******************************************************/
function startShopEvent(){
	// ショップエリアとトークエリアを開放
	hiddenStageArea();
	$('.shop-area').removeClass('hidden');
	$('.talk-area').removeClass('hidden');
	setLocalStorage(keyContinueFlag, continueFlag.shopArea);
	const shopBtn = appendTalkingBtn('商品を見る');
	shopBtn.click((e) => {
		shopCardList();
	});
	const returnBtn = appendTalkingBtn('立ち去る');
	returnBtn.click((e) => {
		removeLocalStorage(keyContinueShopLineup);
		climbTowerContinue();
	});
}
/*******************************************************/
/* ショップUI表示
/*******************************************************/
function shopCardList(){
	$('.black-back-area').addClass('active');
	$('.shop-buy-area').addClass('active');
	$('.shop-modal-body').html('');
	//戻るボタン
	$('.shop-cancel-btn').off();
	$('.shop-cancel-btn').click(() => {
		$('.black-back-area').removeClass('active');
		$('.shop-buy-area').removeClass('active');
	});
	// ラインナップの選定
	let selectCardsInfo = [];
	const lastSelectCardsInfo = getLocalStorage(keyContinueShopLineup);
	if(lastSelectCardsInfo){
		selectCardsInfo = lastSelectCardsInfo;
	}else{
		selectCardsInfo = decideShopLineup();
		setLocalStorage(keyContinueShopLineup, selectCardsInfo);
	}
	// 専用カードのラインナップ
	selectCardsInfo.exclusive.forEach((selectInfo) => {
		const selectCardDiv = createCardDom(selectInfo.card);
		selectCardDiv
			.addClass('shop-card')
			// 手札クリック時の処理登録
			.click(() => {
				buyCard(selectInfo, selectCardsInfo.exclusive, selectCardWrapperDiv);
			});
		const priceDiv = createCardPrice(selectInfo.price, selectInfo.discount);
		const selectCardWrapperDiv = $('<div>')
			.addClass('top-row')
			.append(selectCardDiv)
			.append(priceDiv);
		$(`.shop-modal-body`).append(selectCardWrapperDiv);
	});
	selectCardsInfo.common.forEach((selectInfo) => {
		const selectCardDiv = createCardDom(selectInfo.card);
		selectCardDiv
			.addClass('shop-card')
			// 手札クリック時の処理登録
			.click(() => {
				buyCard(selectInfo, selectCardsInfo.common, selectCardWrapperDiv);
			});
		const priceDiv = createCardPrice(selectInfo.price, selectInfo.discount);
		const selectCardWrapperDiv = $('<div>')
			.addClass('bottom-row')
			.append(selectCardDiv)
			.append(priceDiv);
		$(`.shop-modal-body`).append(selectCardWrapperDiv);
	});
	// アーティファクトのラインナップ
	const selectArtifactWrapperDiv = $('<div>')
		.addClass('artifact-position')
	$(`.shop-modal-body`).append(selectArtifactWrapperDiv);
	// カード削除の
	const selectDeleteWrapperDiv = $('<div>')
		.addClass('delete-position')
	$(`.shop-modal-body`).append(selectDeleteWrapperDiv);
}
function buyCard(selectInfo, cardList, selectCardWrapperDiv){
	// 購入処理
	if(selectInfo.price > playerStatus.money){
		alert('お金が足りません');
		return;
	}
	// 支払い
	playerStatus.money -= buyInfo.price;
	updateMoneyDom();
	const index = cardList.findIndex(info => info.id === selectInfo.id);
	const buyInfo = cardList.splice(index, 1)[0];
	// 購入カードのデッキ挿入
	const OriginCard = deepCopyCard(buyInfo.card);
	pushOriginalDeck(OriginCard);
	//購入済み
	selectCardWrapperDiv.addClass('purchased');
	setLocalStorage(keyContinueShopLineup, selectCardsInfo);
	setLocalStorage(keyContinueOriginalDeck, myOriginalDeck);
	setLocalStorage(keyContinuePlayerStatus, playerStatus);
	return;
}