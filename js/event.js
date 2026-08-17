
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
	let selectFlag = true;
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
	const energyNoBreak = myArtifacts.find((artifact) => 
		artifact.name === normalArtifact.energyNoBreak.name);
	if(!energyNoBreak){
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
				setLocalStorage(keyContinueOriginalDeck, myOriginalDeck);
				setLocalStorage(keyContinueArtifact, myArtifacts);
				removeLocalStorage(keyContinueReward);
				climbTowerContinue();
			});
			// アーティファクトの効果を発動
			myArtifacts.forEach((artifact) => {
				if('breakFunc' in artifact){
					if (artifact.breakFunc !== '') {
						const storedFunc = globalThis[artifact.breakFunc];
						if( typeof storedFunc === 'function'){
							ret = storedFunc(artifact.amount);
						} 
					}
				}
			});
		});
		selectFlag = false;
	}
	const energyNoBlackSmithing = myArtifacts.find((artifact) => 
		artifact.name === normalArtifact.energyNoBlackSmithing.name);
	if(!energyNoBlackSmithing){
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
					.addClass('show-card')
					.click(card ,() => {
						decideEnhanceCardDom(card);
					});
				$('.enhance-content').append(enhanceCardDiv);
			});
		});
		selectFlag = false;
	}
	const restAttackUp = myArtifacts.find((artifact) => 
		artifact.name === normalArtifact.restAttackUp.name);
	if(restAttackUp && restAttackUp.amount.Count < restAttackUp.amount.max){
		const thirdBtn = appendTalkingBtn(`鍛錬する(筋力:${restAttackUp.amount.Count}/${restAttackUp.amount.max})`);
		thirdBtn.click((e) => {
			deleteTalkingBtn();
			restAttackUp.amount.Count++;
			updateArtifactDom();
			const btn = appendTalkingBtn('塔へ上る');
			btn.click((e) => {
				setLocalStorage(keyContinuePlayerStatus, playerStatus);
				setLocalStorage(keyContinueOriginalDeck, myOriginalDeck);
				setLocalStorage(keyContinueArtifact, myArtifacts);
				removeLocalStorage(keyContinueReward);
				climbTowerContinue();
			});
		});
		selectFlag = false;
	}
	const restRemove = myArtifacts.find((artifact) => 
		artifact.name === normalArtifact.restRemove.name);
	if(restRemove){
		const fourthBtn = appendTalkingBtn(`武器を解体する`);
		fourthBtn.click((e) => {
			$('.black-back-area').addClass('active');
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
			$('.delete-cancel-btn').off();
			$('.delete-cancel-btn')
				.click(() => {
					$('.black-back-area').removeClass('active');
					$('.delete-area').removeClass('active');
					$('.delete-modal-body').html('');
				});
			$('.delete-btn').off();
			$('.delete-btn')
				.click(() => {
					deleteTalkingBtn();
					deleteCardInRest();
					const btn = appendTalkingBtn('塔へ上る');
					btn.click((e) => {
						setLocalStorage(keyContinuePlayerStatus, playerStatus);
						setLocalStorage(keyContinueOriginalDeck, myOriginalDeck);
						setLocalStorage(keyContinueArtifact, myArtifacts);
						removeLocalStorage(keyContinueReward);
						climbTowerContinue();
					});
				});
		});
		selectFlag = false;
	}
	if(selectFlag){
		const btn = appendTalkingBtn('塔へ上る');
		btn.click((e) => {
			setLocalStorage(keyContinuePlayerStatus, playerStatus);
			setLocalStorage(keyContinueOriginalDeck, myOriginalDeck);
			setLocalStorage(keyContinueArtifact, myArtifacts);
			removeLocalStorage(keyContinueReward);
			climbTowerContinue();
		});
	}
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
		setLocalStorage(keyContinuePlayerStatus, playerStatus);
		setLocalStorage(keyContinueOriginalDeck, myOriginalDeck);
		setLocalStorage(keyContinueArtifact, myArtifacts);
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
/*******************************************************/
/* 削除イベント（決定後）
/*******************************************************/
function deleteCardInRest(card, enhancedCard){
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
	setupOriginalDeckBtnDom();
	
	$('.black-back-area').removeClass('active');
	$('.delete-area').removeClass('active');
	$('.delete-modal-body').html('');
	return true;
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
		//専用カードのラインナップ
		const selectCards = decideShopExclusiveCardLineup();
		//共通（無色）カードのラインナップ
		const selectCommonCards = decideShopCommonCardLineup();
		//アーティファクトのラインナップ
		const selectArtifacts = decideArtifactLineup();
		//カード削除サービスのラインナップ
		let deletePrice = 75 + (25 * playerStatus.Count.deleteServiceCount);
		const deleteService = {
			stock: true,
			originPrice: deletePrice,
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
	//再入荷する（アーティファクトがある場合）
	const newArrival = myArtifacts.find((artifact) => 
		artifact.name === normalArtifact.newArrival.name);
	if(newArrival){
		//専用カードの再入荷
		restockShopExclusiveCardLineup(selectCardsInfo.exclusive);
		//無色カードの再入荷
		restockShopCommonCardLineup(selectCardsInfo.common);
		//アーティファクトの再入荷
		restockArtifactLineup(selectCardsInfo.artifacts)
	}
	console.log(selectCardsInfo);
	//値段を更新する
	updateShopPrice(selectCardsInfo);
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
		if(selectInfo.stock){
			const selectCardDiv = createCardDom(selectInfo.card);
			selectCardDiv
				.addClass('shop-card')
				.click(() => {
					buyCard(selectInfo, selectCardWrapperDiv);
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
		}
	});

	// 共通カードのラインナップ
	selectCardsInfo.common.forEach((selectInfo) => {
		if(selectInfo.stock){
			const selectCardDiv = createCardDom(selectInfo.card);
			selectCardDiv
				.addClass('shop-card')
				.click(() => {
					buyCard(selectInfo, selectCardWrapperDiv);
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
		}
	});

	// アーティファクトのラインナップ
	const artifactWrapperDiv = $('<div>')
		.addClass('artifact-wrapper');
	const selectArtifactDiv = $('<div>')
		.addClass('artifact-position')
		.append(artifactWrapperDiv);
	$(`.shop-modal-body`).append(selectArtifactDiv);
	selectCardsInfo.artifacts.forEach((selectInfo) => {
		if(selectInfo.stock){
			const artifactDiv = createArtifactDom(selectInfo.artifact);
			artifactDiv
				.addClass('shop-artifact')
				.click(() => {
					buyArtifact(selectInfo, selectArtifactsWrapperDiv);
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
		}

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
	if(selectCardsInfo.delete.stock){
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
/* 値段更新関数
/*******************************************************/
function updateShopPrice(selectCardsInfo){
	//元の値段を設定
	selectCardsInfo.exclusive.forEach((exclusive) => {
		exclusive.price = exclusive.originPrice;
	});
	selectCardsInfo.common.forEach((common) => {
		common.price = common.originPrice;
	});
	selectCardsInfo.artifacts.forEach((artifact) => {
		artifact.price = artifact.originPrice;
	});
	selectCardsInfo.delete.price = selectCardsInfo.delete.originPrice;
	//価格は20％割引される。
	const newArrival = myArtifacts.find((artifact) => 
		artifact.name === normalArtifact.newArrival.name);
	if(newArrival){
		selectCardsInfo.exclusive.forEach((exclusive) => {
			exclusive.price = 
				Math.floor(exclusive.price * 0.8);
		});
		selectCardsInfo.common.forEach((common) => {
			common.price = 
				Math.floor(common.price * 0.8);
		});
		selectCardsInfo.artifacts.forEach((artifact) => {
			artifact.price = 
				Math.floor(artifact.price * 0.8);
		});
		selectCardsInfo.delete.price = 
			Math.floor(selectCardsInfo.delete.price * 0.8);
	}
	//全商品50％割引！
	const card = myArtifacts.find((artifact) => 
		artifact.name === normalArtifact.card.name);
	if(card){
		selectCardsInfo.exclusive.forEach((exclusive) => {
			exclusive.price = 
				Math.floor(exclusive.price * 0.5);
		});
		selectCardsInfo.common.forEach((common) => {
			common.price = 
				Math.floor(common.price * 0.5);
		});
		selectCardsInfo.artifacts.forEach((artifact) => {
			artifact.price = 
				Math.floor(artifact.price * 0.5);
		});
		selectCardsInfo.delete.price = 
			Math.floor(selectCardsInfo.delete.originPrice * 0.5);
	}
	//商人のカード削除サービスの費用が50ゴールドに固定される。
	const shopService = myArtifacts.find((artifact) => 
		artifact.name === normalArtifact.shopService.name);
	if(shopService){
		selectCardsInfo.delete.price = 50;
	}
	console.log(selectCardsInfo);
}
/*******************************************************/
/* カード購入関数
/*******************************************************/
function buyCard(selectInfo, selectCardWrapperDiv){
	console.log(selectInfo);
	// 購入処理
	if(selectInfo.price > playerStatus.money){
		alert('お金が足りません');
		return;
	}
	selectInfo.stock = false;
	// 支払い
	payMoney(selectInfo.price);
	updateMoneyDom();
	// 購入カードのデッキ挿入
	addCardToOriginalDeck(selectInfo.card);
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
function buyArtifact(selectInfo, selectArtifactWrapperDiv){
	console.log(selectInfo);
	// 購入処理
	if(selectInfo.price > playerStatus.money){
		alert('お金が足りません');
		return;
	}
	selectInfo.stock = false;
	// 支払い
	payMoney(selectInfo.price);
	updateMoneyDom();
	// 購入アーティファクトのデッキ挿入
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
	setupOriginalDeckBtnDom();
	deleteInfo.stock = false;
	playerStatus.Count.deleteServiceCount++;
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
	const bonusInfo = {
		common:{weight:75, rarity:artifactRarity.common},
		uncommon:{weight:25, rarity:artifactRarity.uncommon},
		rare:{weight:0, rarity:artifactRarity.rare},
	}
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
		let bonusGetFlag = false;
		rewards = [];
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
		rewards.push({type: rewardType.money, getFlag: moneyGetFlag, amount: moneyAmount});
		rewards.push({type: rewardType.artifact, getFlag: true, amount: treasureArtifact});
		//アーティファクトによる追加報酬
		const bonusRelic = myArtifacts.find((artifact) => 
			artifact.name === normalArtifact.bonusRelic.name);
		if(bonusRelic && bonusRelic.amount.Count > 0){
			// アーティファクトのレアリティ抽選
			let selectBonusRarity = {};
			const bonusWeight = Object.values(bonusInfo).reduce((sum, item) => sum + item.weight, 0);
			let bonusRandom = Math.floor(Math.random() * bonusWeight);
			for (const bonus of Object.values(bonusInfo)) {
				if (bonusRandom < bonus.weight) {
					selectBonusRarity = bonus.rarity;
					break;
				}
				bonusRandom -= bonus.weight;
			}
			// アーティファクトの抽選
			const filteringBonusArtifact = Object.values(normalArtifact)
				.filter((artifact) => artifact.rarity === selectBonusRarity)
				.filter((artifact) => {
					return !myArtifacts.find((myArtifact) => myArtifact.name === artifact.name);;
				})
				.filter((artifact) => artifact.name !== treasureArtifact.name);
			const BonusArtifact = shuffleArray(filteringBonusArtifact).shift();
			bonusGetFlag = true;
			rewards.push({type: rewardType.artifact, getFlag: bonusGetFlag, amount: BonusArtifact});
			bonusRelic.amount.Count--;
		}
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
