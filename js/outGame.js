/*******************************************************/
/* startGame：ゲームスタート
/*******************************************************/
function startGame(){
	const Continued = getLocalStorage(keyContinueFlag);
	// セットアップ
	setupCharaStatus();
	setupDeck();
	setupArtifact();
	setupOutGameInformation();
	if (Continued === continueFlag.inGame) {
		console.log('戦闘再開');
		continueBattle();
	} else if (Continued === continueFlag.restArea) {
		console.log('休憩再開');
		startRestEvent();
	} else if (Continued === continueFlag.shopArea) {
		console.log('ショップ再開');
		startShopEvent();
	} else if (Continued === continueFlag.giftArea) {
		console.log('宝箱再開');
		startGiftEvent();
	} else if (Continued === continueFlag.outGame) {
		console.log('再開');
		climbTowerContinue();
	}else {
		getReady();
	}
}
/*******************************************************/
/* setupCharaStatus：キャラステータスをセットアップ
/*******************************************************/
function setupCharaStatus(){
	const Continued = getLocalStorage(keyContinueFlag);
	const selectChara = getLocalStorage(keySelectChara);
	const lastPlayerStatus = getLocalStorage(keyContinuePlayerStatus);

	if (selectChara) {
		$('.name-space').html(selectChara);
		if (selectChara == selectCharacter.gran.name){
			$('.player-character').attr('src', 'images/gifs/gran_idle.gif');
		} else if (selectChara == selectCharacter.djeeta.name){
			$('.player-character').attr('src', 'images/gifs/djeeta_idle.gif');
		} else {
			alert('別キャラが選択されています。');
			window.location.href = 'index.html';
		}
	} else{
		alert('キャラが選択されていません。');
		window.location.href = 'index.html';
	}

	if (lastPlayerStatus && Continued) {
		playerStatus.remainHP = lastPlayerStatus.remainHP;
		playerStatus.maxHP = lastPlayerStatus.maxHP;
		playerStatus.money = lastPlayerStatus.money;
		playerStatus.maxEnergy = lastPlayerStatus.maxEnergy;
	} else{
		if (selectChara == selectCharacter.gran.name){// グランの場合
			playerStatus.remainHP = selectCharacter.gran.maxHP;
			playerStatus.maxHP = selectCharacter.gran.maxHP;
			playerStatus.money = selectCharacter.gran.money;
			
		} else if (selectChara == selectCharacter.djeeta.name){// ジータの場合
			playerStatus.remainHP = selectCharacter.djeeta.maxHP;
			playerStatus.maxHP = selectCharacter.djeeta.maxHP;
			playerStatus.money = selectCharacter.djeeta.money;
			playerStatus.remainEnergy = initialEnergy;
		}
		setLocalStorage(keyContinuePlayerStatus, playerStatus);
	}
	updateHPDom();
	updateMoneyDom();
}
/*******************************************************/
/* climbTowerStart：塔を上る（クライムスタート）
/*******************************************************/
function setupOutGameInformation(){
	const lastBattleCount = getLocalStorage(keyContinueBattleCount);
	if(lastBattleCount !== null){battleCount = lastBattleCount}
}
/*******************************************************/
/* climbTowerStart：塔を上る（クライムスタート）
/*******************************************************/
function climbTowerStart(){
	const mt = new MersenneTwister();
	const totalWeight = Object.values(stages).reduce((sum, item) => sum + item.weight, 0);
	currentMap = initialMap;
	setLocalStorage(keyContinueCurrentMap, currentMap);
	//ステージを生成する
	$('.map-modal-body').html('');
	for(let row = 0; row < mapRows; row++){
		const mapRows = [];
		for(let column = 0; column < mapColumns; column++){
			const mapDiv = $('<div>').addClass('stage');
			if (
				(row === 15 && (column < 4 || column > 6)) ||
				(row === 14 && (column < 3 || column > 7)) ||
				(row === 13 && (column < 2 || column > 8)) ||
				(row === 12 && (column < 1 || column > 9))
			) {
				// 空白を入れる
				$('.map-modal-body').append(mapDiv);
				mapRows.push({name:'',weight: 0,image:''});
				continue;
			}
			if (row === fixedStageBoss){
				// 最終ステージはボス部屋
				mapDiv.html(`<img src='${stages.boss.image}'>`);
				mapRows.push(stages.boss);
			} else if (row === fixedStageGift){
				// 中間は宝箱ステージ
				mapDiv.html(`<img src='${stages.gift.image}'>`);
				mapRows.push(stages.gift);
			} else if (row === fixedStageNormal){
/*				mapDiv.html(`<img src='${stages.normal.image}'>`);
				mapRows.push(stages.normal);
*/
				mapDiv.html(`<img src='${stages.gift.image}'>`);
				mapRows.push(stages.gift);
			} else {
				let randomMap = mt.nextInt(0, totalWeight);
				for (const stage of Object.values(stages)) {
					if (randomMap < stage.weight) {
						mapDiv.html(`<img src='${stage.image}'>`);
						mapRows.push(stage);
						break;
					}
					randomMap -= stage.weight;
				}
			}
			if (
				row === currentMap.row - 1 &&
				column >= currentMap.column - 1 &&
				column <= currentMap.column + 1
			) {
				mapDiv.addClass('choices');
				mapDiv.click((e) => {
					console.log(`row:[${row}] column:[${column}]`);
					console.log(map[row][column]);
					currentMap.row = row;
					currentMap.column = column;
					setLocalStorage(keyContinueCurrentMap, currentMap);
					admissionStage(map[row][column]);
				});
			}
			$('.map-modal-body').append(mapDiv);
		}
		map.push(mapRows);
	}
	$('.map-modal').addClass('active');
	$('.map-modal-body').scrollTop($('.map-modal-body')[0].scrollHeight);
	setLocalStorage(keyContinueMap, map);
	setLocalStorage(keyContinueFlag, continueFlag.outGame);
}
/*******************************************************/
/* climbTowerContinue：塔登頂を再開する（クライムコンティニュー）
/*******************************************************/
function climbTowerContinue(){
	map = getLocalStorage(keyContinueMap);
	const lastCurrentMap = getLocalStorage(keyContinueCurrentMap);
	if (lastCurrentMap) {
		currentMap = lastCurrentMap;
	} else {
		alert('マップが保存されていません');
		climbTowerStart();
	}
	$('.map-modal-body').html('');
	for(let row = 0; row < mapRows; row++){
		for(let column = 0; column < mapColumns; column++){
			const mapDiv = $('<div>').addClass('stage');
			if (
				(row === 15 && (column < 4 || column > 6)) ||
				(row === 14 && (column < 3 || column > 7)) ||
				(row === 13 && (column < 2 || column > 8)) ||
				(row === 12 && (column < 1 || column > 9))
			) {
				$('.map-modal-body').append(mapDiv);
				continue;
			}
			if (
				row === currentMap.row - 1 &&
				column >= currentMap.column - 1 &&
				column <= currentMap.column + 1
			) {
				mapDiv.addClass('choices');
				mapDiv.click((e) => {
					console.log(`row:[${row}] column:[${column}]`);
					console.log(map[row][column]);
					currentMap.row = row;
					currentMap.column = column;
					setLocalStorage(keyContinueCurrentMap, currentMap);
					admissionStage(map[row][column]);
				});
			}
			mapDiv.html(`<img src='${map[row][column].image}'>`);
			$('.map-modal-body').append(mapDiv);
		}
	}
	$('.map-modal').addClass('active');
	setLocalStorage(keyContinueFlag, continueFlag.outGame);
}
/*******************************************************/
/* admissionStage：ステージに入場する
/*******************************************************/
function admissionStage(stageInfo){
	deleteTalkingBtn();
	$('.talk-area').addClass('hidden');
	$('.rest-area').addClass('hidden');
	$('.map-modal').removeClass('active');
	$('.map-modal-body').html('');
	console.log(stageInfo);
	switch(stageInfo.name){
		case stages.boss.name:
			battleCount++;
			setLocalStorage(keyContinueBattleCount, battleCount);
			currentLevel = stageLevel.boss;
			startBattle();
			break;
		case stages.gift.name:
			startGiftEvent();
			break;
		case stages.shop.name:
			startShopEvent();
			break;
		case stages.rest.name:
			startRestEvent();
			break;
		case stages.event.name:
			startRandomEvent();
			break;
		case stages.special.name:
			battleCount++;
			setLocalStorage(keyContinueBattleCount, battleCount);
			currentLevel = stageLevel.special;
			startBattle();
			break;
		case stages.normal.name:
			battleCount++;
			setLocalStorage(keyContinueBattleCount, battleCount);
			currentLevel = stageLevel.normal;
			startBattle();
			break;
		default:
			battleCount++;
			setLocalStorage(keyContinueBattleCount, battleCount);
			currentLevel = stageLevel.test;
			console.log(`currentLevel: ${currentLevel}`);
			startBattle();
			break;
	}
}

/*******************************************************/
/* appendTalkingBtn：hand-areaに会話ボタンを追加する
/*******************************************************/
function appendTalkingBtn(text){
	const talkingBtn = $('<div>').addClass('talking-btn');
	const btnImage = $('<img>').attr('src', 'images/btn4.png');
	const textSpan = $('<span>').html(text);
	talkingBtn
		.append(btnImage)
		.append(textSpan);
	$('.talk-area').append(talkingBtn);
	return talkingBtn;
}

