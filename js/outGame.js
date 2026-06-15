/*******************************************************/
/* startGame：ゲームスタート
/*******************************************************/
function startGame(){
	// セットアップ
	setupCharaStatus();
	setupDeck();
	if (getLocalStorage(keyContinueBattleFlag)) {
		console.log('戦闘再開');
		continueBattle();
	} else if (getLocalStorage(keyContinueFlag)) {
		console.log('再開');
		continueGame();
	} else {
		$('.rest-area').removeClass('hidden');
		$('.talk-area').removeClass('hidden');
		const btn = appendTalkingBtn('準備を整える');
		btn.click((e) => {
			deleteTalkingBtn();
			getReady();
		});
	}
}
/*******************************************************/
/* continueGame：ゲーム再開
/*******************************************************/
function continueGame(){
	map = getLocalStorage(keyContinueMap);
	climbTowerContinue();
}
/*******************************************************/
/* setupCharaStatus：キャラステータスをセットアップ
/*******************************************************/
function setupCharaStatus(){
	const continueFlag = getLocalStorage(keyContinueFlag);
	const selectChara = getLocalStorage(keySelectChara);
	const remainHp = getLocalStorage(keyContinueRemainHp);
	const maxHp = getLocalStorage(keyContinueMaxHp);
	const remainMoney = getLocalStorage(keyContinueMoney);
	const lastMaxEnergy = getLocalStorage(keyContinueMaxEnergy);

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
	}

	if (remainHp && continueFlag) {
		myRemainHP = remainHp;
		$('.remainHp').html(remainHp);
	} else{
		if (selectChara == selectCharacter.gran.name){
			myRemainHP = selectCharacter.gran.maxHP;
			$('.remainHp').html(selectCharacter.gran.maxHP);
			setLocalStorage(keyContinueRemainHp, selectCharacter.gran.maxHP);
		} else if (selectChara == selectCharacter.djeeta.name){
			myRemainHP = selectCharacter.djeeta.maxHP;
			$('.remainHp').html(selectCharacter.djeeta.maxHP);
			setLocalStorage(keyContinueRemainHp, selectCharacter.djeeta.maxHP);
		}
	}
	if (maxHp && continueFlag) {
		myMaxHP = maxHp;
		$('.maxHp').html(maxHp);
	} else{
		if (selectChara == selectCharacter.gran.name){
			myMaxHP = selectCharacter.gran.maxHP;
			$('.maxHp').html(selectCharacter.gran.maxHP);
			setLocalStorage(keyContinueMaxHp, selectCharacter.gran.maxHP);
		} else if (selectChara == selectCharacter.djeeta.name){
			myMaxHP = selectCharacter.djeeta.maxHP;
			$('.maxHp').html(selectCharacter.djeeta.maxHP);
			setLocalStorage(keyContinueMaxHp, selectCharacter.djeeta.maxHP);
		}
	}
	if (remainMoney && continueFlag) {
		myMoney = remainMoney;
		$('.remainMoney').html(remainMoney);
	} else{
		if (selectChara == selectCharacter.gran.name){
			myMoney = selectCharacter.gran.money;
			$('.remainMoney').html(selectCharacter.gran.money);
			setLocalStorage(keyContinueMoney, selectCharacter.gran.money);
		} else if (selectChara == selectCharacter.djeeta.name){
			myMoney = selectCharacter.djeeta.money;
			$('.remainMoney').html(selectCharacter.djeeta.money);
			setLocalStorage(keyContinueMoney, selectCharacter.djeeta.money);
		}
	}
	if (maxEnergy && continueFlag) {
		maxEnergy = lastMaxEnergy;
	} else{
		maxEnergy = initialEnergy;
		setLocalStorage(keyContinueMaxEnergy, maxEnergy);
	}
}
/*******************************************************/
/* setupDeck：初期デッキとなる10枚のカードを配る
/*******************************************************/
function setupDeck(){
	const continueFlag = getLocalStorage(keyContinueFlag);
	const selectChara = getLocalStorage(keySelectChara);
	const lastDeck = getLocalStorage(keyContinueOriginalDeck);
	const lastOriginalDeck = getLocalStorage(keyContinueOriginalDeck);

	if(lastDeck !== null && continueFlag){
		// 続きからの場合
		myDeck = lastDeck;
		myOriginalDeck = lastOriginalDeck;
	} else {
		// プレイヤーに初期デッキとなる10枚のカードを配る
		if (selectChara == selectCharacter.gran.name){
			addCardToOriginalDeck(granCardList.Wide, 5);
			addCardToOriginalDeck(granCardList.Defense, 4);
			addCardToOriginalDeck(granCardList.Powerswing, 1);
		} else if (selectChara == selectCharacter.djeeta.name){
			addCardToOriginalDeck(djeetaCardList.Wide, 5);
			addCardToOriginalDeck(djeetaCardList.Defense, 5);
			addCardToOriginalDeck(djeetaCardList.Fast, 1);
			addCardToOriginalDeck(djeetaCardList.Pulverizer, 1);
		}
	}
	
}

/*******************************************************/
/* getReady：準備を整える（4つから選ぶ）
/*******************************************************/
function getReady(){
	const firstReadyBonus = shuffleArray(firstReadyBonuses).slice(0, 1)[0];
	const firstBtn = appendTalkingBtn(firstReadyBonus.text);
	firstBtn.click((e) => {
		deleteTalkingBtn();
		firstReadyBonus.func();
		getReadyOK();
	});
	const secondReadyBonus = shuffleArray(secondReadyBonuses).slice(0, 1)[0];
	const secondBtn = appendTalkingBtn(secondReadyBonus.text);
	secondBtn.click((e) => {
		deleteTalkingBtn();
		secondReadyBonus.func();
		getReadyOK();
	});
	const thirdReadyBonus = shuffleArray(thirdReadyBonuses).slice(0, 1)[0];
	const thirdReadyCurse = shuffleArray(thirdReandCurses).slice(0, 1)[0];
	const thirdBtn = appendTalkingBtn(thirdReadyCurse.text + thirdReadyBonus.text);
	thirdBtn.click((e) => {
		deleteTalkingBtn();
		thirdReadyCurse.func();
		thirdReadyBonus.func();
		getReadyOK();
	});
	const fourthBtn = appendTalkingBtn(fourthReadyBonus.text);
	fourthBtn.click((e) => {
		deleteTalkingBtn();
		fourthReadyBonus.func();
		getReadyOK();
	});
}
function getReadyOK(){
	const btn = appendTalkingBtn('塔へ上る');
	btn.click((e) => {
		climbTowerStart();
	});
}
/*******************************************************/
/* climbTowerStart：塔を上る（クライムスタート）
/*******************************************************/
function climbTowerStart(){
	const mt = new MersenneTwister();
	const totalWeight = Object.values(stages).reduce((sum, item) => sum + item.weight, 0);
	currnetMap = initialMap;
	setLocalStorage(keyContinueCurrentMap, currnetMap);
	//ステージを生成する
	for(let row = 0; row < mapRows; row++){
		const mapRows = [];
		for(let column = 0; column < mapColumns; column++){
			const mapDiv = $('<div>').addClass('stage');
			let selectStage = {};
			if (
				(row === 15 && (column < 4 || column > 6)) ||
				(row === 14 && (column < 3 || column > 7)) ||
				(row === 13 && (column < 2 || column > 8)) ||
				(row === 12 && (column < 1 || column > 9))
			) {
				$('.map-modal-body').append(mapDiv);
				mapRows.push({name:'',weight: 0,image:''});
				continue;
			}
			if (row === fixedStageBoss){
				mapDiv.html(`<img src='${stages.boss.image}'>`);
				mapRows.push(stages.boss);
				selectStage = stages.boss;
			} else if (row === fixedStageGift){
				mapDiv.html(`<img src='${stages.gift.image}'>`);
				mapRows.push(stages.gift);
				selectStage = stages.gift;
			} else if (row === fixedStageNomal){
				mapDiv.html(`<img src='${stages.nomal.image}'>`);
				mapRows.push(stages.nomal);
				selectStage = stages.nomal;
			} else {
				let randomMap = mt.nextInt(0, totalWeight);
				for (const stage of Object.values(stages)) {
					if (randomMap < stage.weight) {
						mapDiv.html(`<img src='${stage.image}'>`);
						mapRows.push(stage);
						selectStage = stage;
						break;
					}
					randomMap -= stage.weight;
				}
			}
			if (
				row === currnetMap.row - 1 &&
				column >= currnetMap.column - 1 &&
				column <= currnetMap.column + 1
			) {
				mapDiv.addClass('choices');
				mapDiv.click((e) => {
					console.log(selectStage.name);
					currnetMap.row = row;
					currnetMap.column = column;
					admissionStage(selectStage);
				});
			}
			$('.map-modal-body').append(mapDiv);
		}
		map.push(mapRows);
	}
	$('.map-modal').addClass('active');
	$('.map-modal-body').scrollTop($('.map-modal-body')[0].scrollHeight);
	setLocalStorage(keyContinueMap, map);
	setLocalStorage(keyContinueFlag, true);
}
/*******************************************************/
/* climbTowerContinue：塔登頂を再開する（クライムコンティニュー）
/*******************************************************/
function climbTowerContinue(){
	const lastCurrentMap = getLocalStorage(keyContinueCurrentMap);
	if (lastCurrentMap) {
		currnetMap = lastCurrentMap;
	} else {
		alert('マップが保存されていません');
	}
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
				row === currnetMap.row - 1 &&
				column >= currnetMap.column - 1 &&
				column <= currnetMap.column + 1
			) {
				mapDiv.addClass('choices');
				mapDiv.click((e) => {
					console.log(map[row][column].name);
					currnetMap.row = row;
					currnetMap.column = column;
					admissionStage(map[row][column]);
				});
			}
			mapDiv.html(`<img src='${map[row][column].image}'>`);
			$('.map-modal-body').append(mapDiv);
		}
	}
	$('.map-modal').addClass('active');
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
	switch(stageInfo.name){
		case stages.boss.name:
			startButtle(stageLevel.boss);
			break;
		case stages.gift.name:
			startgiftEvent();
			break;
		case stages.shop.name:
			startShop();
			break;
		case stages.rest.name:
			startRestEvent();
			break;
		case stages.event.name:
			startRandomEvent();
			break;
		case stages.special.name:
			startButtle(stageLevel.special);
			break;
		case stages.nomal.name:
			startButtle(stageLevel.nomal);
			break;
		default:
			break;
	}
}

/*******************************************************/
/* drawSupplyCard：サプライからカードを取得する
/*******************************************************/
function addCardToOriginalDeck(card, count = 1){
	
	for(let i = 0; i < count; i++){
		// 獲得したカードは指示が無い限りは捨て札置き場に表向きにして置く
		pushOriginalDeck(card);
		setLocalStorage(keyContinueOriginalDeck, myOriginalDeck);
	}
	return true;
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
/*******************************************************/
/* appendTalkingBtn：hand-areaの会話ボタンを削除する
/*******************************************************/
function deleteTalkingBtn(){
	$('.talk-area').html('')
	return
}

