/*******************************************************/
/* loadTopPage：トップページの処理
/*******************************************************/
function loadTopPage(){
	createStartBtnDom();

	// モーダルの設定
	$('.toppage-play-btn').click((e) => {
		$('.select-modal').addClass('active');
	});
	$('.close-play-btn').click((e) => {
		$('.select-modal').removeClass('active');
	});
	$('.chara-gran').click((e) => {
		$('.select-chara').removeClass('select');
		$('.chara-gran').addClass('select');
		setLocalStorage(keySelectChara, selectCharacter.gran.name);
	});
	$('.chara-djeeta').click((e) => {
		$('.select-chara').removeClass('select');
		$('.chara-djeeta').addClass('select');
		setLocalStorage(keySelectChara, selectCharacter.djeeta.name);
	});
	$('.start-btn').click((e) => {
		if(getLocalStorage(keySelectChara)){
			removeLocalStorage(keyContinueFlag);
			removeLocalStorage(keyContinueRestFlag);
			removeLocalStorage(keyContinueArtifact);
			removeLocalStorage(keyContinuePlayerStatus);
			removeLocalStorage(keyContinueMap);
			removeLocalStorage(keyContinueCurrentMap);
			removeLocalStorage(keyContinueOriginalDeck);
			
			removeLocalStorage(keyContinueBattleFlag);
			removeLocalStorage(keyContinueDeck);
			removeLocalStorage(keyContinueHand);
			removeLocalStorage(keyContinueTrash);
			removeLocalStorage(keyContinueDiscard);
			removeLocalStorage(keyContinueTemporary);
			removeLocalStorage(keyContinueStack);
			removeLocalStorage(keyContinueTurn);
			removeLocalStorage(keyContinueEnemy);
			removeLocalStorage(keyContinueLevel);
			removeLocalStorage(keyContinueReward);
			removeLocalStorage(keyContinueHold);
			removeLocalStorage(keyContinuePhase);
			window.location.href = 'roguelike.html';
		} else {
			alert('キャラが選択されておりません');
		}
	});

	$('.toppage-continue-btn').click((e) => {
		window.location.href = 'roguelike.html';
	});

		// カード一覧の設定
	$('.toppage-list-btn').click((e) => {
		$('.black-back-area').addClass('active');
		$('.card-list-area').html('');
		Object.values(granCardList).forEach((card) => {
			const cardDiv = createCardDom(card);
			cardDiv.addClass('enhance-card');
			$('.card-list-area').append(cardDiv);
		});
		Object.values(granEnhancedCardList).forEach((card) => {
			const cardDiv = createCardDom(card);
			cardDiv.addClass('enhance-card');
			$('.card-list-area').append(cardDiv);
		});
		Object.values(djeetaCardList).forEach((card) => {
			const cardDiv = createCardDom(card);
			cardDiv.addClass('enhance-card');
			$('.card-list-area').append(cardDiv);
		});
		Object.values(djeetaEnhancedCardList).forEach((card) => {
			const cardDiv = createCardDom(card);
			cardDiv.addClass('enhance-card');
			$('.card-list-area').append(cardDiv);
		});
		Object.values(commonCardList).forEach((card) => {
			const cardDiv = createCardDom(card);
			cardDiv.addClass('enhance-card');
			$('.card-list-area').append(cardDiv);
		});
		Object.values(commonEnhancedCardList).forEach((card) => {
			const cardDiv = createCardDom(card);
			cardDiv.addClass('enhance-card');
			$('.card-list-area').append(cardDiv);
		});
	});
	$('.close-list-btn').click((e) => {
		$('.black-back-area').removeClass('active');
	});

		// Infoモーダルの設定
	$('.toppage-credit-btn').click((e) => {
		$('.information-modal').addClass('active');
	});
	$('.close-information-modal-btn').click((e) => {
		$('.information-modal').removeClass('active');
	});
}