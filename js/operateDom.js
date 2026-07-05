
/*******************************************************/
/* createStartBtnDom：トップページのスタートボタンの表示
/*******************************************************/
function createStartBtnDom(){
	const playBtn1Image = $('<img>')
		.attr('src', 'images/btn1.png');
	const playSpan = $('<span>')
		.html('プレイ');
	const playAnchor = $('<a>')
		.addClass('toppage-play-btn')
		.append(playBtn1Image)
		.append(playSpan);
	$('.start-btn-area').append(playAnchor);

	if (getLocalStorage(keyContinueFlag)) {
		const continueBtn1Image = $('<img>')
			.attr('src', 'images/btn1.png');
		const continueSpan = $('<span>')
			.html('つづきから');
		const continueAnchor = $('<a>')
			.addClass('toppage-continue-btn')
			.append(continueBtn1Image)
			.append(continueSpan);
		$('.start-btn-area').append(continueAnchor);
	}

	const listBtn1Image = $('<img>')
		.attr('src', 'images/btn1.png');
	const listSpan = $('<span>')
		.html('カード一覧');
	const listAnchor = $('<a>')
		.addClass('toppage-list-btn')
		.append(listBtn1Image)
		.append(listSpan);
	$('.start-btn-area').append(listAnchor);

	const creditBtn1Image = $('<img>')
		.attr('src', 'images/btn1.png');
	const creditSpan = $('<span>')
		.html('プレイ');
	const creditAnchor = $('<a>')
		.addClass('toppage-play-btn')
		.append(creditBtn1Image)
		.append(creditSpan);
	$('.start-btn-area').append(creditAnchor);
}

/*******************************************************/
/* updateArtifactDom：アーティファクトDOMを生成
/*******************************************************/
function updateArtifactDom(){
	$('.artifact-area').html('');
	myArtifact.forEach((artifact) => {
		const modalName = $('<p>')
			.append(artifact.name);
		const modalDiv = $('<div>')
			.addClass('artifact-modal')
			.append(modalName)
			.append(artifact.effect);
		const modalsDiv = $('<div>')
			.addClass('artifact-modals')
			.addClass('hidden')
			.append(modalDiv)
			.hover(() => {
				modalsDiv.addClass('hidden');
			}, () => {});
		const artifactImage = $('<img>')
			.attr('src', artifact.image);
		const artifactDiv = $('<div>')
			.addClass('artifact')
			.append(artifactImage)
			.append(modalsDiv)
			.hover(() => {
				modalsDiv.removeClass('hidden');
			}, () => {
				modalsDiv.addClass('hidden');
			});
		$('.artifact-area')
			.append(artifactDiv)
	});
}
/***************************************************************************************/
/* カードDOM作成処理
/***************************************************************************************/
function createCardDom(card){
	let effect = card.effect;
	if('attack' in card.amount){
		switch(card.name){
			case granCardList.Dig.name:
			case granEnhancedCardList.Dig.name:
				attackDamage = calcDamage(card.amount.attack, currentTarget, card.amount.magnification);
				break;
			case commonCardList.Knife.name:
			case commonEnhancedCardList.Knife.name:
				attackDamage = calcKnifeDamage(card.amount.attack, currentTarget);
				break;
			default:
				attackDamage = calcDamage(card.amount.attack, currentTarget);
				break;
		}
		if (card.amount.attack > attackDamage) {
			effect = effect.replace('{A}', `<span class='down'>${attackDamage}</span>`);
		} else if (card.amount.attack < attackDamage){
			effect = effect.replace('{A}', `<span class='up'>${attackDamage}</span>`);
		} else {
			effect = effect.replace('{A}', `${attackDamage}`);
		}
	}
	if('block' in card.amount){
		blockCount = calcBlock(card.amount.block);
		if (card.amount.block > blockCount) {
			effect = effect.replace('{B}', `<span class='down'>${blockCount}</span>`);
		} else if (card.amount.block < blockCount){
			effect = effect.replace('{B}', `<span class='up'>${blockCount}</span>`);
		} else {
			effect = effect.replace('{B}', `${blockCount}`);
		}
	}
	if('count' in card.amount){
		effect = effect.replace('{C}', `${card.amount.count}`);
	}
	if('debuff' in card.amount){
		effect = effect.replace('{D}', `${card.amount.debuff}`);
	}
	if('debuff1' in card.amount){
		effect = effect.replace('{D1}', `${card.amount.debuff1}`);
	}
	if('debuff1' in card.amount){
		effect = effect.replace('{D2}', `${card.amount.debuff2}`);
	}
	if('draw' in card.amount){
		effect = effect.replace('{Dr}', `${card.amount.draw}`);
	}
	if('energy' in card.amount){
		effect = effect.replace('{E}', `${card.amount.energy}`);
	}
	if('buff' in card.amount){
		effect = effect.replace('{F}', `${card.amount.buff}`);
	}
	if('harm' in card.amount){
		effect = effect.replace('{HP}', `${card.amount.harm}`);
	}
	const textParagraph = $('<p>')
		.addClass('effect')
		.html(effect);
	const typeParagraph = $('<p>')
		.addClass('type')
		.html(card.type);
		
	const costDiv = $('<div>');
	if('costChange' in card.amount){
		const changeFunc = globalThis[card.amount.costChange];
		if( typeof changeFunc === 'function'){
			ret = changeFunc(card.amount);
		}
	}
	if('tmpCost' in card.amount && card.amount.cost !== 'X'){
		costDiv
			.addClass('costDown')
			.html(card.amount.tmpCost);
	}else{
		costDiv.html(card.amount.cost);
	}
	const cardImage = $('<img>')
		.attr('src', card.image);
	const cardDiv = $('<div>');
	if(card.name.length > 10){
		cardDiv.addClass('is-small');
	}
	cardDiv
		.addClass('card-style')
		.html(`${card.name}`)
		.append(cardImage)
		.append(typeParagraph)
		.append(textParagraph)
		.append(costDiv);
	if (card.class == cardClass.gran) {
		cardDiv.addClass('gran-card');
	} else if (card.class == cardClass.djeeta) {
		cardDiv.addClass('djeeta-card');
	} else if (card.class == cardClass.common) {
		cardDiv.addClass('common-card');
	} else if (card.class == cardClass.abnormal) {
		cardDiv.addClass('abnormal-card');
	}
	return cardDiv;
}
/***************************************************************************************/
/* バトル用DOM要素の更新処理
/***************************************************************************************/
/*******************************************************/
/* updateDeckDom：デッキ用DOMを生成
/*******************************************************/
function updateDeckDom(){
	const deckImage = $(`.deck-area`).children('img');
	if(myDeck.length <= 0){
		deckImage.addClass('empty');
	}else{
		deckImage.removeClass('empty');
	}
	$(`.deck-count`).html(`${myDeck.length}`);
}
/*******************************************************/
/* updateTrashDom：捨て札用DOMを生成
/*******************************************************/
function updateTrashDom(){
	const trashImage = $(`.trash-area`).children('img');
	if(myTrash.length <= 0){
		trashImage.addClass('empty');
	}else{
		trashImage.removeClass('empty');
	}
	$(`.trash-count`).html(`${myTrash.length}`);
}
/*******************************************************/
/* updateDiscardDom：捨て札用DOMを生成
/*******************************************************/
function updateDiscardDom(){
	if(discard.length <= 0){
		$('.discard').addClass('empty');
	}else{
		$('.discard').removeClass('empty');
	}
	$(`.discard-count`).html(`${discard.length}`);
}
/*******************************************************/
/* updateEnergyDom：残りエネルギー用DOMを生成
/*******************************************************/
function updateEnergyDom(){
	$(`.energy-count`).html(`${playerStatus.remainEnergy}/${playerStatus.maxEnergy}`);
}
/*******************************************************/
/* updateEnergyDom：手札用DOMを生成
/*******************************************************/
function updateHandDom(){
	console.log('updateHandDom');
	$(`.hand-area`).html('');
	myHand.forEach((hand, i) => {
		let attackDamage = 0;
		let blockCount = 0;
		const handCardDiv = createCardDom(hand);
		handCardDiv
			.attr('id', `hand-card${hand.id}`)
			.addClass('hand-card')
			// 手札クリック時の処理登録
			.click(hand ,() => {
				clickHandProcess(handCardDiv, hand);
			});
		$(`.hand-area`).append(handCardDiv);
	});
}
function hiddenHandDom(){
	$(`.hand-area`).html('');
}
/*******************************************************/
/* updatePlayerAreaDom：プレイヤーエリアを生成
/*******************************************************/
function updatePlayerAreaDom(argPlayerStatus){
	console.log('updatePlayerAreaDom');
	const selectChara = getLocalStorage(keySelectChara);
	$(`.player-area`).html('');
	// HPバー[player-hp-container]の要素
	const remainHP = 100 * ( argPlayerStatus.remainHP / argPlayerStatus.maxHP );
	const hpBerDiv = $('<div>')
		.addClass('player-hp-bar')
		.css('width', `${remainHP}%`);
	const hpParagraph = $('<p>')
		.html(`${argPlayerStatus.remainHP}/${argPlayerStatus.maxHP}`);
	const hpContainerDiv = $('<div>')
		.addClass('player-hp-container')
		.append(hpBerDiv)
		.append(hpParagraph);
	if (argPlayerStatus.block > 0) {
		hpContainerDiv.addClass('block');
		const blockImage = $('<img>')
			.attr('src', 'images/status/block.png');
		const blockCountSpan = $('<span>')
			.addClass('block-count')
			.html(argPlayerStatus.block);
		const blockInnerDiv = $('<div>')
			.addClass('block-inner')
			.append(blockImage)
			.append(blockCountSpan);
		const blockDiv = $('<div>')
			.addClass('block-container')
			.append(blockInnerDiv);
		hpContainerDiv
			.append(blockDiv);
	}
	// innerDivの要素
	const innerDiv = $('<div>')
		.addClass('player-hp')
		.append(hpContainerDiv);
	// プレイヤー立ち絵の要素
	const playerImage = $('<img>')
		.addClass('player-picture');
	if (selectChara == selectCharacter.gran.name){
		playerImage.attr('src', 'images/gifs/gran_idle.gif');
	} else if (selectChara == selectCharacter.djeeta.name){
		playerImage.attr('src', 'images/gifs/djeeta_idle.gif');
	} else {
		alert('別キャラが選択されています。');
		window.location.href = 'index.html';
	}
	// ステータス[status]の要素
	const statusesDiv = $('<div>')
		.addClass('player-statuses');
	// 状態変化モーダルの枠
	const modalsDiv = $('<div>')
		.addClass('player-modals')
		.addClass('hidden')
		.hover(() => {
			modalsDiv.addClass('hidden');
		}, () => {});
	argPlayerStatus.statuses.forEach((status) => {
		// ステータス[status]の要素
		const statusImage = $('<img>')
			.attr('src', status.image);
		const amountSpan = $('<span>')
			.addClass('player-status-amount')
			.html(status.amount);
		const statusDiv = $('<div>')
			.addClass('player-status')
			.append(statusImage)
			.append(amountSpan);
		statusesDiv.append(statusDiv);
		// 状態変化モーダルの枠
		const modalImage = $('<img>')
			.attr('src', status.image);
		const modalName = $('<p>')
			.append(status.name)
			.append(modalImage);
		const modalDiv = $('<div>')
			.addClass('player-modal')
			.append(modalName)
			.append(status.effect.replace('{X}', `<span>${status.amount}</span>`));
		modalsDiv.append(modalDiv);
	});
	const playerAreaInnerDiv = $('<div>')
		.addClass('player-area-inner')
		.append(playerImage)
		.append(innerDiv)
		.append(statusesDiv)
		.append(modalsDiv)
		.hover(() => {
			modalsDiv.removeClass('hidden');
		}, () => {
			modalsDiv.addClass('hidden');
		});
	$(`.player-area`)
		.append(playerAreaInnerDiv);
	// マウスオーバー時の処理を追加
	playerAreaInnerDiv
}
/*******************************************************/
/* updatePlayerStatusDom：プレイヤーのステータス部を生成
/*******************************************************/
function updatePlayerStatusDom(argPlayerStatus){
	console.log('updatePlayerStatusDom');
	$('.player-hp').html('');
	// HPバー[player-hp-container]の要素
	const remainHP = 100 * ( argPlayerStatus.remainHP / argPlayerStatus.maxHP );
	const hpBerDiv = $('<div>')
		.addClass('player-hp-bar')
		.css('width', `${remainHP}%`);
	const hpParagraph = $('<p>')
		.html(`${argPlayerStatus.remainHP}/${argPlayerStatus.maxHP}`);
	const hpContainerDiv = $('<div>')
		.addClass('player-hp-container')
		.append(hpBerDiv)
		.append(hpParagraph);
	if (argPlayerStatus.block > 0) {
		hpContainerDiv.addClass('block');
		const blockImage = $('<img>')
			.attr('src', 'images/status/block.png');
		const blockCountSpan = $('<span>')
			.addClass('block-count')
			.html(argPlayerStatus.block);
		const blockInnerDiv = $('<div>')
			.addClass('block-inner')
			.append(blockImage)
			.append(blockCountSpan);
		const blockDiv = $('<div>')
			.addClass('block-container')
			.append(blockInnerDiv);
		hpContainerDiv
			.append(blockDiv);
	}
	$('.player-hp').append(hpContainerDiv);

	// ステータス[status]の要素
	$('.player-statuses').html('');
	$('.player-modals').html('');
	argPlayerStatus.statuses.forEach((status) => {
		console.log(status);
		// ステータス[status]の要素
		const statusImage = $('<img>')
			.attr('src', status.image);
		const amountSpan = $('<span>')
			.addClass('player-status-amount')
			.html(status.amount);
		const statusDiv = $('<div>')
			.addClass('player-status')
			.append(statusImage)
			.append(amountSpan);
		$('.player-statuses').append(statusDiv);
		// 状態変化モーダルの枠
		const modalImage = $('<img>')
			.attr('src', status.image);
		const modalName = $('<p>')
			.append(status.name)
			.append(modalImage);
		const modalDiv = $('<div>')
			.addClass('player-modal')
			.append(modalName)
			.append(status.effect.replace('{X}', `<span>${status.amount}</span>`));
		$('.player-modals').append(modalDiv);
	});
}
/*******************************************************/
/* updatePlayerStatusDom：エネミーエリアを生成
/*******************************************************/
function updateEnemyAreaDom(argEnemies, omenFlag = false){
	console.log('updateEnemyAreaDom');
	$(`.enemies-area`).html('');
	argEnemies.forEach((enemy) => {
		// 敵立ち絵要素
		const enemyImage = $('<img>')
			.attr('src', enemy.image);
		// 残りHP[enemy-hp-container]要素
		const remainHP = 100 * (enemy.currentStatus.remainHP / enemy.currentStatus.maxHP);
		const hpBerDiv = $('<div>')
			.addClass('enemy-hp-bar')
			.css('width', `${remainHP}%`);
		const hpParagraph = $('<p>')
			.html(`${enemy.currentStatus.remainHP}/${enemy.currentStatus.maxHP}`);
		const hpContainerInnerDiv = $('<div>')
			.addClass('enemy-hp-container-inner')
			.append(hpBerDiv)
			.append(hpParagraph);
		const hpContainerDiv = $('<div>')
			.addClass('enemy-hp-container')
			.append(hpContainerInnerDiv);
		if (enemy.currentStatus.block > 0) {
			hpContainerDiv.addClass('block');
			const blockImage = $('<img>')
				.attr('src', 'images/status/block.png');
			const blockCountSpan = $('<span>')
				.addClass('enemy-block-count')
				.html(enemy.currentStatus.block);
			const blockInnerDiv = $('<div>')
				.addClass('enemy-block-inner')
				.append(blockImage)
				.append(blockCountSpan);
			const blockDiv = $('<div>')
				.addClass('enemy-block-container')
				.append(blockInnerDiv);
			hpContainerDiv
				.append(blockDiv);
		}
		// ステータス[status]の要素
		const statusesDiv = $('<div>')
			.addClass('statuses');
		// 状態変化モーダルの枠
		const modalsDiv = $('<div>')
			.addClass('enemy-modals')
			.addClass('hidden')
			.hover(() => {
				modalsDiv.addClass('hidden');
			}, () => {});
		const omenModalImage = $('<img>')
			.attr('src', enemy.currentStatus.nextAction.image);
		const omenName = $('<p>')
			.append(enemy.currentStatus.nextAction.name)
			.append(omenModalImage);
		const omenModalDiv = $('<div>')
			.addClass('enemy-modal')
			.append(omenName);
		modalsDiv.append(omenModalDiv);
		enemy.currentStatus.status.forEach((status) => {
			// ステータス[status]の要素
			const statusImage = $('<img>')
				.attr('src', status.image);
			const amountSpan = $('<span>')
				.addClass('amount')
				.html(status.amount);
			const statusDiv = $('<div>')
				.addClass('status')
				.append(statusImage)
				.append(amountSpan);
			statusesDiv.append(statusDiv);
			// 状態変化モーダルの枠
			const modalImage = $('<img>')
				.attr('src', status.image);
			const modalName = $('<p>')
				.append(status.name)
				.append(modalImage);
			const modalDiv = $('<div>')
				.addClass('enemy-modal')
				.append(modalName)
				.append(status.effect.replace('{X}', `<span>${status.amount}</span>`));
			modalsDiv.append(modalDiv);
		});
		// 「enemy-area」要素
		const enemyAreaDiv = $('<div>')
			.attr('id', enemy.currentStatus.divId)
			.addClass('enemy-area')
			.append(enemyImage)
			.append(hpContainerDiv)
			.append(statusesDiv)
			.append(modalsDiv)
			.hover(() => {
				modalsDiv.removeClass('hidden');
			}, () => {
				modalsDiv.addClass('hidden');
			});
		if (omenFlag || Object.keys(enemy.currentStatus.nextAction).length === 0){
			// 予測攻撃[omen]の要素
			const nextActionImage = $('<img>')
				.attr('src', enemy.currentStatus.nextAction.image);
			const omenInnerDiv = $('<div>')
				.addClass('omen-inner')
				.append(nextActionImage);
			if(enemy.currentStatus.nextAction.damage > 0){
				let totalAttack = calcEnemyDamage(enemy.currentStatus.nextAction.damage, enemy);
				const damageDiv = $('<div>')
					.addClass('damage')
					.html(totalAttack);
				omenInnerDiv.append(damageDiv);
				omenModalDiv.append(omenText(enemy.currentStatus.nextAction, totalAttack));
			} else {
				omenModalDiv.append(omenText(enemy.currentStatus.nextAction));
			}
			const omenDiv = $('<div>')
				.addClass('omen')
				.append(omenInnerDiv);
			enemyAreaDiv.append(omenDiv);
		}
		$(`.enemies-area`).append(enemyAreaDiv);
		if(enemy.currentStatus.status.some(status => status.name === dead.name)){
			enemyAreaDiv.addClass('defeated');
		} else {
			enemyAreaDiv.click(enemy, (e) => {
				$('.enemy-area').removeClass('select');
				enemyAreaDiv.addClass('select');
				currentTarget = enemy;
				updateHandDom();
			});
		}
		$(`#${enemy.currentStatus.divId}`)
	});
}
/*******************************************************/
/* updateEnemyStatusDom：エネミーのステータス部を生成
/*******************************************************/
function updateEnemyStatusDom(argEnemies){
	console.log('updateEnemyStatusDom');
	argEnemies.forEach((enemy) => {
		// 残りHP[enemy-hp-container]要素
		const hpContainerDiv = 
			$(`#${enemy.currentStatus.divId}`).children('.enemy-hp-container');
		hpContainerDiv.html('');
		const remainHP = 100 * (enemy.currentStatus.remainHP / enemy.currentStatus.maxHP);
		const hpBerDiv = $('<div>')
			.addClass('enemy-hp-bar')
			.css('width', `${remainHP}%`);
		const hpParagraph = $('<p>')
			.html(`${enemy.currentStatus.remainHP}/${enemy.currentStatus.maxHP}`);
		const hpContainerInnerDiv = $('<div>')
			.addClass('enemy-hp-container-inner')
			.append(hpBerDiv)
			.append(hpParagraph);
		hpContainerDiv.append(hpContainerInnerDiv);
		if (enemy.currentStatus.block > 0) {
			hpContainerDiv.addClass('block');
			const blockImage = $('<img>')
				.attr('src', 'images/status/block.png');
			const blockCountSpan = $('<span>')
				.addClass('enemy-block-count')
				.html(enemy.currentStatus.block);
			const blockInnerDiv = $('<div>')
				.addClass('enemy-block-inner')
				.append(blockImage)
				.append(blockCountSpan);
			const blockDiv = $('<div>')
				.addClass('enemy-block-container')
				.append(blockInnerDiv);
			hpContainerDiv
				.append(blockDiv);
		}
		// ステータス[status]の要素
		const statusesDiv = 
			$(`#${enemy.currentStatus.divId}`).children('.statuses');
		statusesDiv.html('');
		// 状態変化モーダルの枠
		const modalsDiv = 
			$(`#${enemy.currentStatus.divId}`).children('.enemy-modals');
		modalsDiv.html('');
		const omenModalImage = $('<img>')
			.attr('src', enemy.currentStatus.nextAction.image);
		const omenName = $('<p>')
			.append(enemy.currentStatus.nextAction.name)
			.append(omenModalImage);
		const omenModalDiv = $('<div>')
			.addClass('enemy-modal')
			.append(omenName)
			.append(omenText(enemy.currentStatus.nextAction));
		modalsDiv.append(omenModalDiv);
		enemy.currentStatus.status.forEach((status) => {
			// ステータス[status]の要素
			const statusImage = $('<img>')
				.attr('src', status.image);
			const amountSpan = $('<span>')
				.addClass('amount')
				.html(status.amount);
			const statusDiv = $('<div>')
				.addClass('status')
				.append(statusImage)
				.append(amountSpan);
			statusesDiv.append(statusDiv);
			// 状態変化モーダルの枠
			const modalImage = $('<img>')
				.attr('src', status.image);
			const modalName = $('<p>')
				.append(status.name)
				.append(modalImage);
			const modalDiv = $('<div>')
				.addClass('enemy-modal')
				.append(modalName)
				.append(status.effect.replace('{X}', `<span>${status.amount}</span>`));
			modalsDiv.append(modalDiv);
		});
	});
}

/*******************************************************/
/* fadeInEnemyOmenDom：予兆アイコンを生成しフェードイン
/*******************************************************/
function fadeInEnemyOmenDom(){
	currentEnemies.forEach((enemy) => {
		// 予測攻撃[omen]の要素
		const nextActionImage = $('<img>')
			.attr('src', enemy.currentStatus.nextAction.image);
		const omenInnerDiv = $('<div>')
			.addClass('omen-inner')
			.append(nextActionImage);
		if(enemy.currentStatus.nextAction.damage > 0){
			const damageDiv = $('<div>')
				.addClass('damage')
				.html(enemy.currentStatus.nextAction.damage);
			omenInnerDiv.append(damageDiv);
		}
		const omenDiv = $('<div>')
			.css('opacity', 0)
			.addClass('omen')
			.append(omenInnerDiv);
		$(`#${enemy.currentStatus.divId}`).append(omenDiv);

		omenDiv.animate({ opacity: '1' }, omenFadeInWaitTime, "easeInQuart");
	});
}
/*******************************************************/
/* fadeInEnemyOmenDom：予兆アイコンをフェードアウト
/*******************************************************/
function fadeOutEnemyOmenDom(enemy){
	// 予測攻撃[omen]の要素
	$(`#${enemy.currentStatus.divId}`).children('.omen')
		.animate({ 
			opacity: '0',
			top: '50px'
		}, omenFadeOutWaitTime, "linear");
	
}
/*******************************************************/
/* updateResultContentDom：報酬部分のDOM生成
/*******************************************************/
function updateResultContentDom(){
	let rewardFlag = false;
	$('.result-content').html('');
	rewards.forEach((reward) => {
		if(reward.getFlag){
			switch(reward.type){
				case 'money':
					moneyRewardDom(reward);
					break;
				case 'card':
					cardRewardDom(reward);
					break;
				default:
					break;
			}
			rewardFlag = true;
		}
	});
	if (rewardFlag) {
		$('.skip-btn').children('p').html('スキップ');
	} else {
		$('.skip-btn').children('p').html('進む');
	}
}
/*******************************************************/
/* moneyRewardDom：コイン報酬DOM生成
/*******************************************************/
function moneyRewardDom(money){
	// コイン報酬
	const rewardImage = $('<img>')
		.attr('src', 'images/information/money.png');
	const rewardParagraph = $('<p>')
		.html(`黄金の古紋 ${money.amount}枚`);
	const rewardDiv = $('<div>')
		.addClass('reward')
		.append(rewardImage)
		.append(rewardParagraph)
		.click(() => {
			playerStatus.money += money.amount;
			rewardDiv.remove();
			money.getFlag = false;
			updateMoney();
			setLocalStorage(keyContinuePlayerStatus, playerStatus);
			setLocalStorage(keyContinueReward, rewards);
		});
	$('.result-content').append(rewardDiv);

}
/*******************************************************/
/* cardRewardDom：カード報酬DOM生成
/*******************************************************/
function cardRewardDom(rewardCards){
	// 武器報酬
	const rewardImage = $('<img>')
		.attr('src', 'images/information/card.png');
	const rewardParagraph = $('<p>')
		.html(`武器を入手`);
	const rewardDiv = $('<div>')
		.addClass('reward')
		.append(rewardImage)
		.append(rewardParagraph)
		.click(() => {
			selectcardRewardDom(rewardCards);
		});
	$('.result-content').append(rewardDiv);
}
/*****************************************************/
/* カード報酬選択関数
/*****************************************************/
function selectcardRewardDom(rewardCards){
	$(`.select-cards-area`).html('');
	$(`.select-skip`).html('');
	console.log(rewardCards);
	rewardCards.amount.forEach((card) => {
		const selectCardDiv = createCardDom(card);
		selectCardDiv
			.addClass('select-card')
			.click(card ,() => {
				addCardToOriginalDeck(card);
				rewardCards.getFlag = false;
				setLocalStorage(keyContinueReward, rewards);
				updateResultContentDom();
				$('.card-select').addClass('hidden');
				$('.result-modal-body').removeClass('hidden');
			});
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
			updateResultContentDom();
			$('.card-select').addClass('hidden');
			$('.result-modal-body').removeClass('hidden');
		});
	$(`.select-skip`).append(selectSkipBtnDiv);
	$('.result-modal-body').addClass('hidden');
	$('.card-select').removeClass('hidden');
}
/*******************************************************/
/* updateTrashDecideTitleDom：カードを捨てるUIのDOM生成
/*******************************************************/
function updateHandDecideTitleDom(text){
	$('.hand-decide-title').html(text);
}

/*******************************************************/
/* updateRestoreDecideTitleDom：カードを拾うUIのDOM生成
/*******************************************************/
function updateReturnDecideTitleDom(text){
	$('.return-decide-title').html(text);
}
/*******************************************************/
/* createTrashListDom：捨て札一覧のDOM生成
/*******************************************************/
function createTrashListDom(){
	$('.card-list').html('');
	myTrash.forEach((card) => {
		const trashCardDiv = createCardDom(card);
		trashCardDiv
			.addClass('enhance-card');
		$('.card-list').append(trashCardDiv);
	});
}

/*******************************************************/
/* createTrashListDom：廃棄札一覧のDOM生成
/*******************************************************/
function createDiscardListDom(){
	$('.card-list').html('');
	discard.forEach((card) => {
		const discardCardDiv = createCardDom(card);
		discardCardDiv
			.addClass('enhance-card');
		$('.card-list').append(discardCardDiv);
	});
}
/*******************************************************/
/* createRestoreListDom：捨て札一覧のDOM生成
/*******************************************************/
function createRestoreListDom(){
	$('.card-list-area').html('');
	myTrash.forEach((card) => {
		const restoreCardDiv = createCardDom(card);
		restoreCardDiv
			.addClass('enhance-card')
			.click(() => {
				clickTrashCardProcess(restoreCardDiv, card);
			});
		$('.card-list-area').append(restoreCardDiv);
	});
}
/*******************************************************/
/* createReuseListDom：廃棄札一覧のDOM生成
/*******************************************************/
function createReuseListDom(){
	$('.card-list-area').html('');
	discard.forEach((card) => {
		const reuseCardDiv = createCardDom(card);
		reuseCardDiv
			.addClass('enhance-card')
			.click(() => {
				clickDiscardCardProcess(reuseCardDiv, card);
			});
		$('.card-list-area').append(reuseCardDiv);
	});
}
/*******************************************************/
/* updateEnhanceTitleDom：カード強化UIのDOM生成
/*******************************************************/
function updateEnhanceTitleDom(text){
	$('.enhance-title').html(text);
}

/*******************************************************/
/* disabledMyHand：手札のdisabled化
/*******************************************************/
function disabledMyHand(flag){
	return $('.hand-area').prop('disabled', flag);
}
/*******************************************************/
/* disabledMyHand：「ターン終了」ボタンのdisabled化
/*******************************************************/
function disabledEndBtn(flag){
	if (flag) {
		$('.end-btn').off();
	} else {
		$('.end-btn').off();
		$('.end-btn').click((e) => {
			const repair = playerStatus.statuses
				.find((status) => status.name === bufStatus.repair.name);
			if (repair){
				startPhase(phase.repair);
			}else{
				startPhase(phase.enemy);
			}
		});
	}
	return $('.end-btn').prop('disabled', flag);
}
/*******************************************************/
/* disabledMyHand：強化するカードの選択UIのDOM表示
/*******************************************************/
function decideEnhanceCardDom(card){
	updateEnhanceTitleDom('この武器を強化しますか。');
	$('.enhance-content').addClass('hidden');
	$('.enhance-decide-content').removeClass('hidden');
	$('.enhance-decide-content').html('');
	$('.enhance-btn-area').addClass('active');
	// 強化元のカード表示
	const enhanceCardDiv = createCardDom(card);
	enhanceCardDiv
		.addClass('enhance-decide-card')
		.addClass('before');
	$('.enhance-decide-content').append(enhanceCardDiv);
	// 矢印
	const arrowIcon = $('<i>')
		.addClass('arrow-icon')
		.addClass('fa-solid')
		.addClass('fa-angles-right');
	$('.enhance-decide-content').append(arrowIcon);
	// 強化後のカードを表示
	let enhancedCard;
	if(card.class === cardClass.gran){
		enhancedCard = granEnhancedCardList[card.key];
	} else if(card.class === cardClass.djeeta){
		enhancedCard = djeetaEnhancedCardList[card.key];
	}
	console.log(enhancedCard);
	const enhancedCardDiv = createCardDom(enhancedCard)
	enhancedCardDiv
		.addClass('enhance-decide-card')
		.addClass('after');
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
/*******************************************************/
/* disabledMyHand：強化するカードの選択UIのDOM表示(カード効果)
/*******************************************************/
function selectEnhanceCardDom(card){
	$('.hand-enhance-area').html('');
	// 強化元のカード表示
	const enhanceCardDiv = createCardDom(card);
	enhanceCardDiv
		.addClass('enhance-decide-card')
		.addClass('before');
	$('.hand-enhance-area').append(enhanceCardDiv);
	// 矢印
	const arrowIcon = $('<i>')
		.addClass('fa-solid')
		.addClass('fa-angles-right');
	$('.hand-enhance-area').append(arrowIcon);
	// 強化後のカードを表示
	const enhancedCard = granEnhancedCardList[card.key];
	const enhancedCardDiv = createCardDom(enhancedCard);
	enhancedCardDiv
		.addClass('enhance-decide-card')
		.addClass('after')
		// 手札クリック時の処理登録
		.click(enhancedCard ,() => {
			console.log(enhancedCard);
			decideEnhanceCardDom(enhancedCard);
		});
	$('.hand-enhance-area').append(enhancedCardDiv);


}