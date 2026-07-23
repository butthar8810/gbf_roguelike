
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
	//「ハンサムゴリラTA」のフラグ回収
	const restEnergy = myArtifacts.find((artifact) => 
		artifact.name === normalArtifact.restEnergy.name);
	if(restEnergy){
		restEnergy.amount.flag = true;
	}
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
	recoveryCount = Math.floor(playerStatus.maxHP * 0.3);
	const firstBtn = appendTalkingBtn(`休憩する（HP30%[${recoveryCount}]回復）`);
	firstBtn.click((e) => {
		deleteTalkingBtn();
		recoveryHP(recoveryCount);
		animateRestHeal();
		updateHPDom();
		const btn = appendTalkingBtn('塔へ上る');
		btn.click((e) => {
			setLocalStorage(keyContinuePlayerStatus, playerStatus);
			console.log(myOriginalDeck);
			setLocalStorage(keyContinueOriginalDeck, myOriginalDeck);
			removeLocalStorage(keyContinueReward);
			climbTowerContinue();
		});
		// アーティファクトの効果を発動
		myArtifacts.forEach((artifact) => {
			if('restFunc' in artifact){
				if (artifact.restFunc !== '') {
					const storedFunc = globalThis[artifact.restFunc];
					if( typeof storedFunc === 'function'){
						ret = storedFunc(artifact.amount);
					} 
				}
			}
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
	$('.before').addClass('hidden');
	$('.arrow-icon').addClass('hidden');
	setTimeout(() => {
		setLocalStorage(keyContinueOriginalDeck, myOriginalDeck);
		$('.black-back-area').removeClass('active');
		$('.enhance-area').removeClass('active');
		$('.enhance-content').html('');
		$('.enhance-content').removeClass('hidden');
		$('.enhance-decide-content').addClass('hidden');
		$('.arrow-icon').removeClass('hidden');
		$('.before').removeClass('hidden');
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
	// アーティファクトの効果を発動
	myArtifacts.forEach((artifact) => {
		if('shopFunc' in artifact){
			if (artifact.shopFunc !== '') {
				const storedFunc = globalThis[artifact.shopFunc];
				if( typeof storedFunc === 'function'){
					ret = storedFunc(artifact.amount);
				} 
			}
		}
	});
	setLocalStorage(keyContinueFlag, continueFlag.shopArea);
	const shopBtn = appendTalkingBtn('商品を見る');
	shopBtn.click((e) => {
		$('.black-back-area').addClass('active');
		$('.shop-buy-area').addClass('active');
		shopCardList();
	});
	const returnBtn = appendTalkingBtn('立ち去る');
	returnBtn.click((e) => {
		setLocalStorage(keyContinuePlayerStatus, playerStatus);
		removeLocalStorage(keyContinueShopLineup);
		climbTowerContinue();
	});
}
/*******************************************************/
/* ショップUI表示
/*******************************************************/
function shopCardList(){
	// ラインナップの選定
	let selectCardsInfo = {};
	const lastSelectCardsInfo = getLocalStorage(keyContinueShopLineup);
	if(lastSelectCardsInfo){
		selectCardsInfo = lastSelectCardsInfo;
	}else{
		const selectCards = decideShopExclusiveCardLineup();
		const selectCommonCards = decideShopCommonCardLineup();
		//アーティファクトのラインナップ
		const selectArtifacts = decideArtifactLineup();
		//カード削除サービスのラインナップ
		const shopService = myArtifacts.find((artifact) => 
			artifact.name === normalArtifact.shopService.name);
		let deletePrice = 0;
		if(shopService){
			deletePrice = 50;
		} else {
			deletePrice = 75 + (25 * playerStatus.playerCount.deleteServiceCount);
		}
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
		.attr('src', `images/events/Hukidashi.png`);
	const HukidashiText = $('<p>')
		.addClass('delete-hukidashi-text');
	const deleteImage = $('<img>')
		.addClass('delete-image')
		.attr('src', `images/events/Delete.png`);
	
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
	const index = artifactList.findIndex(info => info.id === selectInfo.id);
	const buyInfo = artifactList.splice(index, 1)[0];
	// 支払い
	playerStatus.money -= buyInfo.price;
	updateMoneyDom();
	// 購入カードのデッキ挿入
	getArtifact(selectInfo.artifact);
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
		deleteTalkingBtn();
		knockDownMimicEvent();
	});
}
/*******************************************************/
/* 宝箱イベント
/*******************************************************/
function knockDownMimicEvent(){
	const treasuresInfo = {
		Red:{
			weight:50, 
			image: 'images/events/treasure_red.png',
			artifactInfo:{
				common:{weight:75, rarity:artifactRarity.common},
				uncommon:{weight:25, rarity:artifactRarity.uncommon},
				rare:{weight:0, rarity:artifactRarity.rare},
			},
			moneyInfo: {
				weight: 50,
				minMoney: 23,
				maxMoney: 27,
			}
		},
		Blue:{
			weight:33, 
			image: 'images/events/treasure_blue.png',
			artifactInfo:{
				common:{weight:35, rarity:artifactRarity.common},
				uncommon:{weight:50, rarity:artifactRarity.uncommon},
				rare:{weight:15, rarity:artifactRarity.rare},
			},
			moneyInfo: {
				weight: 35,
				minMoney: 45,
				maxMoney: 55,
			}
		},
		Gold:{
			weight:17, 
			image: 'images/events/treasure_gold.png',
			artifactInfo:{
				common:{weight:0, rarity:artifactRarity.common},
				uncommon:{weight:75, rarity:artifactRarity.uncommon},
				rare:{weight:25, rarity:artifactRarity.rare},
			},
			moneyInfo: {
				weight: 50,
				minMoney: 68,
				maxMoney: 82,
			}
		},
	}
	let treasureBox = {};
	const lastTreasureInfo = getLocalStorage(keyContinueTreasure);
	const lastReward = getLocalStorage(keyContinueReward);
	if(lastTreasureInfo && lastReward){
		treasureBox = lastTreasureInfo;
		rewards = lastReward;
	} else {
		let selectInfo = {};
		let selectRarity;
		let selectRarityInfo = {};
		let moneyGetFlag = false;
		// 宝箱の種類抽選
		const totalWeight = Object.values(treasuresInfo).reduce((sum, item) => sum + item.weight, 0);
		let treasureRandom = Math.floor(Math.random() * totalWeight);
		for (const treasureBox of Object.values(treasuresInfo)) {
			if (treasureRandom < treasureBox.weight) {
				selectInfo = treasureBox;
				break;
			}
			treasureRandom -= treasureBox.weight;
		}
		treasureBox = selectInfo.image;
		// アーティファクトのレアリティ抽選
		const totalRarityWeight = Object.values(selectInfo.artifactInfo).reduce((sum, item) => sum + item.weight, 0);
		let rarityRandom = Math.floor(Math.random() * totalRarityWeight);
		for (const rarity of Object.values(selectInfo.artifactInfo)) {
			if (rarityRandom < rarity.weight) {
				selectRarity = rarity.rarity;
				break;
			}
			rarityRandom -= rarity.weight;
		}
		// アーティファクトの抽選
		const filteringArtifact = Object.values(normalArtifact)
			.filter((artifact) => artifact.rarity === selectRarity)
			.filter((artifact) => {
				return !myArtifacts.find((myArtifact) => myArtifact.name === artifact.name);;
			});
		console.log(filteringArtifact);
		const treasureArtifact = shuffleArray(filteringArtifact).shift();
		// ゴールドの封入抽選
		let moneyAmount = 0;
		let moneyRandom = Math.floor(Math.random() * 100);
		if (moneyRandom < selectInfo.moneyInfo.weight) {
			moneyAmount = Math.floor(
				Math.random() * (selectInfo.moneyInfo.maxMoney - selectInfo.moneyInfo.minMoney) + selectInfo.moneyInfo.minMoney
			);
			moneyGetFlag = true;
		}
		rewards = [
			{type: rewardType.money, getFlag: moneyGetFlag, amount: moneyAmount},
			{type: rewardType.artifact, getFlag: true, amount: treasureArtifact},
		];
		setLocalStorage(keyContinueTreasure, treasureBox);
		setLocalStorage(keyContinueReward, rewards);
	}
	console.log(rewards);
	const mimicPromise = animateKnockDownMimic();
	$.when(mimicPromise).done(() => {
		$(`.enemies-area`).html('');
		const treasure = $('<img>')
			.addClass('treasure-box')
			.attr('src', treasureBox);
		$(`.enemies-area`).append(treasure);
		const treasurePromise = treasure.animate({ 
			opacity: 1
		}, 1000);
		$.when(treasurePromise).done(() => {
			const mimicBtn = appendTalkingBtn('宝箱を拾う');
			mimicBtn.click((e) => {
				deleteTalkingBtn();
				getItemEvent();
			});
		});
	});
}
/*******************************************************/
/* 宝箱獲得イベント
/*******************************************************/
function getItemEvent(){
	// 宝箱オープン
	const treasurePromise = openTreasure();
	$.when(treasurePromise).done(() => {
		updateResultContentDom();
		$('.result-modal').addClass('active');
	});
	$('.skip-btn').click((e) => {
		rewards = [];
		removeLocalStorage(keyContinueTreasure);
		removeLocalStorage(keyContinueReward);
		hiddenBattleArea();
		climbTowerContinue();
	});
}
/*****************************************************************************************/
/* ランダムイベント
/*****************************************************************************************/
