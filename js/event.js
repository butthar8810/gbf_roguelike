
/*****************************************************************************************/
/* 休憩イベント
/*****************************************************************************************/
/*******************************************************/
/* 休憩イベント開始
/*******************************************************/
function startRestEvent(){
	// レストエリアとトークエリアを開放
	displayRestEventArea();
	setLocalStorage(keyContinueFlag, continueFlag.restArea);
	const btn = appendTalkingBtn('一息つく');
	btn.click((e) => {
		deleteTalkingBtn();
		selectRestAction();
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
		const btn = appendTalkingBtn('塔へ上る');
		btn.click((e) => {
			climbTowerContinue();
		});
	});
	const secondBtn = appendTalkingBtn('鍛冶（武器を強化する）');
	secondBtn.click((e) => {
		deleteTalkingBtn();
		$('.black-back-area').addClass('active');
		$('.enhance-area').addClass('active');
		$('.enhance-content').html('');
		updateEnhanceTitleDom('強化する武器を選んでください');
		// 強化前のカード一覧表示
		myOriginalDeck.forEach((card) => {
			if (!('key' in card) || card.key === undefined){
				//強化済みのカードは除外
				console.log(card);
				return;
			}
			const enhanceCardDiv = createCardDom(card);
			enhanceCardDiv
				.addClass('enhance-card')
				.click(card ,() => {
					decideEnhanceCardDom(card);
				});
			$('.enhance-content').append(enhanceCardDiv);
		});
	});
}

/*******************************************************/
/* 鍛冶イベント（決定後）
/*******************************************************/
function exchangeEnhancedCard(card, enhancedCard){
	const index = myOriginalDeck.findIndex(deckCard => deckCard.name === card.name);
	const enhancedOriginCard = deepCopyCard(enhancedCard);
	spliceOriginalDeck(index);
	pushOriginalDeck(enhancedOriginCard);
	setupOriginalDeckBtnDom();
	setLocalStorage(keyContinueOriginalDeck, myOriginalDeck);
	$('.before').addClass('hidden');
	$('.arrow-icon').addClass('hidden');
	setTimeout(() => {
		$('.black-back-area').removeClass('active');
		$('.enhance-area').removeClass('active');
		$('.enhance-content').html('');
		climbTowerContinue();
	}, 1000);
}

/*****************************************************************************************/
/* ショップイベント
/*****************************************************************************************/
/*******************************************************/
/* ショップイベント開始
/*******************************************************/
function startShopEvent(){
	// ショップエリアとトークエリアを開放
	displayShopEventArea();
	setLocalStorage(keyContinueFlag, continueFlag.shopArea);
	const shopBtn = appendTalkingBtn('商品を見る');
	shopBtn.click((e) => {
		$('.black-back-area').addClass('active');
		$('.shop-buy-area').addClass('active');
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
	// ラインナップの選定
	let selectCardsInfo = [];
	const lastSelectCardsInfo = getLocalStorage(keyContinueShopLineup);
	if(lastSelectCardsInfo){
		selectCardsInfo = lastSelectCardsInfo;
	}else{
		const selectCards = decideShopExclusiveCardLineup();
		const selectCommonCards = decideShopCommonCardLineup();
		//アーティファクトのラインナップ
		const selectArtifacts = decideArtifactLineup();
		//カード削除サービスのラインナップ
		const deletePrice = 75 + (25 * playerStatus.playerCount.deleteServiceCount);
		const deleteService = {
			deleteFlag: true,
			price: deletePrice,
		}
		selectCardsInfo = {
			exclusive: selectCards, 
			common: selectCommonCards, 
			artifacts: selectArtifacts, 
			delete: deleteService
		}
		setLocalStorage(keyContinueShopLineup, selectCardsInfo);
	}
	console.log(selectCardsInfo);
	$('.shop-modal-body').html('');
	//戻るボタン
	$('.shop-cancel-btn')
		.off()
		.click(() => {
			$('.black-back-area').removeClass('active');
			$('.shop-buy-area').removeClass('active');
		});

	// 専用カードのラインナップ
	selectCardsInfo.exclusive.forEach((selectInfo) => {
		const selectCardDiv = createCardDom(selectInfo.card);
		selectCardDiv
			.addClass('shop-card')
			// 手札クリック時の処理登録
			.click(() => {
				buyCard(selectInfo, selectCardsInfo.exclusive, selectCardWrapperDiv);
				setLocalStorage(keyContinueShopLineup, selectCardsInfo);
				shopCardList();
			});
		const priceDiv = createCardPrice(selectInfo.price, selectInfo.discount);
		if(selectInfo.price > playerStatus.money){
			priceDiv.addClass('shop-shortage');
		}
		const selectCardWrapperDiv = $('<div>')
			.addClass('card-lineup')
			.addClass('top-row')
			.append(selectCardDiv)
			.append(priceDiv);
		$(`.shop-modal-body`).append(selectCardWrapperDiv);
	});

	// 共通カードのラインナップ
	selectCardsInfo.common.forEach((selectInfo) => {
		const selectCardDiv = createCardDom(selectInfo.card);
		selectCardDiv
			.addClass('shop-card')
			// 手札クリック時の処理登録
			.click(() => {
				buyCard(selectInfo, selectCardsInfo.common, selectCardWrapperDiv);
				setLocalStorage(keyContinueShopLineup, selectCardsInfo);
				shopCardList();
			});
		const priceDiv = createCardPrice(selectInfo.price, selectInfo.discount);
		if(selectInfo.price > playerStatus.money){
			priceDiv.addClass('shop-shortage');
		}
		const selectCardWrapperDiv = $('<div>')
			.addClass('card-lineup')
			.addClass('bottom-row')
			.append(selectCardDiv)
			.append(priceDiv);
		$(`.shop-modal-body`).append(selectCardWrapperDiv);
	});

	// アーティファクトのラインナップ
	const artifactWrapperDiv = $('<div>')
		.addClass('artifact-wrapper');
	const selectArtifactDiv = $('<div>')
		.addClass('artifact-position')
		.append(artifactWrapperDiv);
	$(`.shop-modal-body`).append(selectArtifactDiv);
	selectCardsInfo.artifacts.forEach((selectInfo) => {
		const artifactDiv = createArtifactDom(selectInfo.artifact);
		artifactDiv
			.addClass('shop-artifact')
			.click(() => {
				buyArtifact(selectInfo, selectCardsInfo.artifacts, selectArtifactsWrapperDiv);
				setLocalStorage(keyContinueShopLineup, selectCardsInfo);
				shopCardList();
			});
		const priceDiv = createCardPrice(selectInfo.price, false);
		if(selectInfo.price > playerStatus.money){
			priceDiv.addClass('shop-shortage');
		}
		const selectArtifactsWrapperDiv = $('<div>')
			.append(artifactDiv)
			.append(priceDiv);
		artifactWrapperDiv.append(selectArtifactsWrapperDiv);
	});

	// カード削除のラインナップ
	const HukidashiImage = $('<img>')
		.addClass('delete-hukidashi')
		.attr('src', `images/shop/Hukidashi.png`);
	const HukidashiText = $('<p>')
		.addClass('delete-hukidashi-text');
	const deleteImage = $('<img>')
		.addClass('delete-image')
		.attr('src', `images/shop/Delete.png`);
	
	const selectDeleteWrapperDiv = $('<div>')
		.addClass('delete-position')
		.append(HukidashiImage)
		.append(HukidashiText)
		.append(deleteImage);
	if(selectCardsInfo.delete.deleteFlag){
		HukidashiText.html('カード削除サービス');
		const deletePriceDiv = createCardPrice(selectCardsInfo.delete.price, false);
		if(selectCardsInfo.delete.price > playerStatus.money){
			deletePriceDiv.addClass('shop-shortage');
		}
		selectDeleteWrapperDiv
			.append(deletePriceDiv)
			.click(() => {
				// 購入処理
				if(selectCardsInfo.delete.price > playerStatus.money){
					alert('お金が足りません');
					return;
				}
				$('.delete-area').addClass('active');
				$('.delete-modal-body').html('');
				myOriginalDeck.forEach((card) => {
					const deleteCardDiv = createCardDom(card);
					deleteCardDiv
						.attr('id', `shop-card${card.id}`)
						.addClass('shop-card')
						.click(() => {
							const index = findIndexTemporaryArea('id', card.id);
							if (index === -1) {
								if (tmpArea.length < 1){
									pushTemporaryArea(card);
									deleteCardDiv.addClass('select');
								} else {
									const cancelCard = shiftTemporaryArea();
									$(`#shop-card${cancelCard.id}`).removeClass("select");
									pushTemporaryArea(card);
									deleteCardDiv.addClass("select");
								}
							} else {
								spliceTemporaryArea(index);
								deleteCardDiv.removeClass("select");
							}
						});
					$('.delete-modal-body').append(deleteCardDiv);
				});
			});
		$('.delete-cancel-btn').off();
		$('.delete-cancel-btn')
			.click(() => {
				$('.delete-area').removeClass('active');
				$('.delete-modal-body').html('');
			});
		$('.delete-btn').off();
		$('.delete-btn')
			.click(() => {
				buyDeleteService(selectCardsInfo.delete);
				setLocalStorage(keyContinueShopLineup, selectCardsInfo);
				shopCardList();
			});
	} else {
		HukidashiText.html('売り切れ！');
	}
	$(`.shop-modal-body`).append(selectDeleteWrapperDiv);
}
/*******************************************************/
/* カード購入関数
/*******************************************************/
function buyCard(selectInfo, cardList, selectCardWrapperDiv){
	// 購入処理
	if(selectInfo.price > playerStatus.money){
		alert('お金が足りません');
		return;
	}
	const index = cardList.findIndex(info => info.id === selectInfo.id);
	const buyInfo = cardList.splice(index, 1)[0];
	// 支払い
	playerStatus.money -= buyInfo.price;
	updateMoneyDom();
	// 購入カードのデッキ挿入
	addCardToOriginalDeck(buyInfo.card);
	//購入済み
	selectCardWrapperDiv.addClass('purchased');
	setupOriginalDeckBtnDom();
	setLocalStorage(keyContinueOriginalDeck, myOriginalDeck);
	setLocalStorage(keyContinuePlayerStatus, playerStatus);
	return;
}
/*******************************************************/
/* アーティファクト購入関数
/*******************************************************/
function buyArtifact(selectInfo, artifactList, selectArtifactWrapperDiv){
	// 購入処理
	if(selectInfo.price > playerStatus.money){
		alert('お金が足りません');
		return;
	}
	const index = cardList.findIndex(info => info.id === selectInfo.id);
	const buyInfo = cardList.splice(index, 1)[0];
	// 支払い
	playerStatus.money -= buyInfo.price;
	updateMoneyDom();
	// 購入カードのデッキ挿入
	myArtifacts.push(selectInfo.artifact);
	updateArtifactDom();
	//購入済み
	selectArtifactWrapperDiv.addClass('purchased');
	setLocalStorage(keyContinueArtifact, myArtifacts);
	setLocalStorage(keyContinuePlayerStatus, playerStatus);
	return;
}
/*******************************************************/
/* カード削除サービス購入関数
/*******************************************************/
function buyDeleteService(deleteInfo){
	if(tmpArea.length === 0){
		return false;
	}
	const deleteCards = deleteAllTemporaryArea();
	setLocalStorage(keyContinueTemporary, tmpArea);
	deleteCards.forEach((deleteCard) => {
		const index = findIndexOriginalDeck('id', deleteCard.id);
		if (index === -1) {
			return false;
		}
		const card = spliceOriginalDeck(index);
		if (card === undefined) {
			return false;
		}
	});
	deleteInfo.deleteFlag = false;
	playerStatus.playerCount.deleteServiceCount++;
	setLocalStorage(keyContinueOriginalDeck, myOriginalDeck);
	setLocalStorage(keyContinuePlayerStatus, playerStatus);
	$('.delete-area').removeClass('active');
	$('.delete-modal-body').html('');
}
/*****************************************************************************************/
/* 宝箱イベント
/*****************************************************************************************/
/*******************************************************/
/* 宝箱イベント開始
/*******************************************************/
function startGiftEvent(){
	// ショップエリアとトークエリアを開放
	displayGiftEventArea();
	setLocalStorage(keyContinueFlag, continueFlag.giftArea);
	const mimicBtn = appendTalkingBtn('ミミックを倒す');
	mimicBtn.click((e) => {
	});
}