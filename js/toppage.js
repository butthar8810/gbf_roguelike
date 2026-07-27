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
			removeLocalStorage(keyContinueArtifact);
			removeLocalStorage(keyContinuePlayerStatus);
			removeLocalStorage(keyContinueMap);
			removeLocalStorage(keyContinueCurrentMap);
			removeLocalStorage(keyContinueOriginalDeck);
			removeLocalStorage(keyContinueShopLineup);
			removeLocalStorage(keyContinueTreasure);
			
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

	// メニューモーダル表示
	$('.toppage-menu-btn').click((e) => {
		$('.menu-list-area').addClass('active');
	});
	$('.menu-close-btn').click((e) => {
		$('.menu-list-area').removeClass('active');
	});
	// カード一覧の設定
	$('.menu-card-list-btn').click((e) => {
		$('.list-back-area').addClass('active');
		$('.cards-list').addClass('active');
		const checked = $('.upgrade-checkbox').prop("checked");
		if(checked){
			createTopPageEnhancedCardListDom();
		} else {
			createTopPageCardListDom();
		}
	});
	$('.menu-artifact-list-btn').click((e) => {
		$('.list-back-area').addClass('active');
		$('.artifacts-list').addClass('active');
		createTopPageArtifactListDom();
	});
	$('.close-list-btn').click((e) => {
		$('.list-back-area').removeClass('active');
		$('.cards-list').removeClass('active');
		$('.artifacts-list').removeClass('active');
	});

		// Infoモーダルの設定
	$('.toppage-credit-btn').click((e) => {
		$('.information-modal').addClass('active');
	});
	$('.close-information-modal-btn').click((e) => {
		$('.information-modal').removeClass('active');
	});

	createTopPageProcessDom();
}