/*******************************************************/
/* loadTopPage：トップページの処理
/*******************************************************/
function loadTopPage(){
	// Infoモーダルの設定
	$('.toppage-credit-btn').click((e) => {
		$('.information-modal').addClass('active');
	});
	$('.close-information-modal-btn').click((e) => {
		$('.information-modal').removeClass('active');
	});
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
}