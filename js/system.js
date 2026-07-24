/***********************************************************************************/
/* システム関数
/***********************************************************************************/
/*******************************************************/
/* recoveryHP：HPを回復する
/*******************************************************/
function recoveryHP(recovery){
	if (playerStatus.remainHP + recovery > playerStatus.maxHP){
		playerStatus.remainHP = playerStatus.maxHP;
	} else {
		playerStatus.remainHP += recovery;
	}
}
/*******************************************************/
/* damageHP：HPが減少する
/*******************************************************/
function damageHP(damage, playerInfo, animationFlag = false){
	console.log(`Damage: ${damage}`);
	if(!animationFlag){
		playerInfo.Count.HPDownCount++;
		console.log(`HPDownCount: ${playerInfo.Count.HPDownCount}`);
		myArtifacts.forEach((artifact) => {
			if('lossHPFunc' in artifact){
				if (artifact.lossHPFunc !== '') {
					const storedFunc = globalThis[artifact.lossHPFunc];
					if( typeof storedFunc === 'function'){
						ret = storedFunc(artifact.amount);
					} 
				}
			}
		});
	}
	setLocalStorage(keyContinuePlayerStatus, playerStatus);
	if (playerInfo.remainHP > damage){
		playerInfo.remainHP -= damage;
	} else {
		playerInfo.remainHP -= damage;
		console.log('敗北処理');
	}
}
/*******************************************************/
/* deepCopySupply：カード単体をディープコピーする
/*******************************************************/
function deepCopyCard(cardOjt){
	const cloneOjt = {};
	cloneOjt.No = cardOjt.No;
	cloneOjt.key = cardOjt.key;
	cloneOjt.name = cardOjt.name;
	cloneOjt.class = cardOjt.class;
	cloneOjt.rarity = cardOjt.rarity;
	cloneOjt.type = cardOjt.type;
	cloneOjt.func = cardOjt.func;
	cloneOjt.image = cardOjt.image;
	cloneOjt.effect = cardOjt.effect;
	cloneOjt.amount = { ...cardOjt.amount };
	return cloneOjt;
}
/*******************************************************/
/* deepCopySupply：カード配列をディープコピーする
/*******************************************************/
function deepCopyCardList(arrayCard){
	const cloneArray = [];
	arrayCard.forEach((cardOjt) => {
		const cloneOjt = {};
		cloneOjt.No = cardOjt.No;
		cloneOjt.key = cardOjt.key;
		cloneOjt.name = cardOjt.name;
		cloneOjt.class = cardOjt.class;
		cloneOjt.rarity = cardOjt.rarity;
		cloneOjt.type = cardOjt.type;
		cloneOjt.func = cardOjt.func;
		cloneOjt.image = cardOjt.image;
		cloneOjt.effect = cardOjt.effect;
		cloneOjt.amount = { ...cardOjt.amount };
		cloneArray.push(cloneOjt);
	});
	return cloneArray;
}
/*******************************************************/
/* deepCopyEnemies：プレイヤー配列をディープコピーする
/*******************************************************/
function deepCopyPlayerStatus(player){
	const cloneOjt = {};
	cloneOjt.remainHP = player.remainHP;
	cloneOjt.maxHP = player.maxHP;
	cloneOjt.money = player.money;
	cloneOjt.remainEnergy = player.remainEnergy;
	cloneOjt.maxEnergy = player.maxEnergy;
	cloneOjt.block = player.block;
	cloneOjt.statuses = [];
	player.statuses.forEach((status) => {
		const cloneStatus = {};
		cloneStatus.name = status.name;
		cloneStatus.amount = status.amount;
		cloneStatus.effect = status.effect;
		cloneStatus.image = status.image;
		cloneOjt.statuses.push(cloneStatus);
	});
	cloneOjt.Count = { ...player.Count };

	return cloneOjt;
}
/*******************************************************/
/* deepCopyEnemies：エネミー配列をディープコピーする
/*******************************************************/
function deepCopyEnemies(arrayEnemies){
	const cloneArray = [];
	arrayEnemies.forEach((EnemyOjt) => {
		const cloneOjt = {};
		cloneOjt.name = EnemyOjt.name;
		cloneOjt.size = EnemyOjt.size;
		cloneOjt.image = EnemyOjt.image;
		cloneOjt.minHP = EnemyOjt.minHP;
		cloneOjt.maxHP = EnemyOjt.maxHP;
		cloneOjt.actionAlgorithm = EnemyOjt.actionAlgorithm;
		cloneOjt.actionFirst = EnemyOjt.actionFirst;
		const cloneCurrentStatus = {};
		cloneCurrentStatus.remainHP = EnemyOjt.currentStatus.remainHP;
		cloneCurrentStatus.maxHP = EnemyOjt.currentStatus.maxHP;
		cloneCurrentStatus.block = EnemyOjt.currentStatus.block;
		cloneCurrentStatus.status = [];
		EnemyOjt.currentStatus.status.forEach((status) => {
			const cloneStatus = {};
			cloneStatus.name = status.name;
			cloneStatus.amount = status.amount;
			cloneStatus.effect = status.effect;
			cloneStatus.image = status.image;
			cloneCurrentStatus.status.push(cloneStatus);
		});
		cloneCurrentStatus.nextAction = {...EnemyOjt.currentStatus.nextAction};
		cloneCurrentStatus.actionCount = {...EnemyOjt.currentStatus.actionCount};
		cloneCurrentStatus.divId = EnemyOjt.currentStatus.divId;
		cloneOjt.currentStatus = cloneCurrentStatus;
		cloneArray.push(cloneOjt);
	});
	return cloneArray;
}

/*******************************************************/
/* pushOriginalDeck：デッキキューの末尾にカードを追加する
/*******************************************************/
function pushOriginalDeck(card){
	myOriginalDeck = myOriginalDeck.map((user, index) => ({
		...user,
		id: index + 1
	}));
	// デッキから手札へカードを引く
	myOriginalDeck.push({
		id: myOriginalDeck.length+1,
		No: card.No,
		key: card.key,
		name: card.name,
		class: card.class,
		rarity: card.rarity,
		type: card.type,
		func: card.func,
		image: card.image,
		effect: card.effect,
		amount: card.amount
	});
}

/*******************************************************/
/* shiftOriginalDeck：デッキキューの先頭からデータを取り出す
/*******************************************************/
function shiftOriginalDeck(){
	return myOriginalDeck.shift();
}
/*******************************************************/
/* spliceDeck：デッキキューのIndex番目のデータを取り出す
/*******************************************************/
function spliceOriginalDeck(index){
	return myOriginalDeck.splice(index, 1)[0];
}
/*******************************************************/
/* findIndexTrash：捨て札キューから検索する
/*******************************************************/
function findIndexOriginalDeck(id, key){
	return myOriginalDeck.findIndex((card) => card[id] == key);
}
/*******************************************************/
/* deleteAllOriginalDeck：デッキキューをすべて削除する
/*******************************************************/
function deleteAllOriginalDeck(){
	return myOriginalDeck.splice(0, myOriginalDeck.length);
}
/*******************************************************/
/* pushDeck：デッキキューの末尾にカードを追加する
/*******************************************************/
function pushDeck(card){
	if ('id' in card) {
		myDeck.push({
			No: card.No,
			key: card.key,
			name: card.name,
			class: card.class,
			rarity: card.rarity,
			type: card.type,
			func: card.func,
			image: card.image,
			effect: card.effect,
			amount: card.amount
		});
	} else {
		myDeck.push(card);
	}
}
/*******************************************************/
/* unshiftDeck：デッキキューの先頭にデータを追加する
/*******************************************************/
function unshiftDeck(card){
	if ('id' in card) {
		myDeck.unshift({
			No: card.No,
			key: card.key,
			name: card.name,
			class: card.class,
			rarity: card.rarity,
			type: card.type,
			func: card.func,
			image: card.image,
			effect: card.effect,
			amount: card.amount
		});
	} else {
		myDeck.unshift(card);
	}
}
/*******************************************************/
/* shiftDeck：デッキキューの先頭からデータを取り出す
/*******************************************************/
function shiftDeck(){
	return myDeck.shift();
}
/*******************************************************/
/* spliceDeck：デッキキューのIndex番目のデータを取り出す
/*******************************************************/
function spliceDeck(index){
	return myDeck.splice(index, 1)[0];
}
/*******************************************************/
/* deleteAllDeck：デッキキューをすべて削除する
/*******************************************************/
function deleteAllDeck(){
	return myDeck.splice(0, myDeck.length);
}
/*******************************************************/
/* pushHand：手札キューの末尾にカードを追加する
/*******************************************************/
function pushHand(card){
	console.log(card);
	// IDを採番しなおす
	myHand = myHand.map((user, index) => ({
		...user,
		id: index + 1
	}));
	// デッキから手札へカードを引く
	myHand.push({
		id: myHand.length+1,
		No: card.No,
		key: card.key,
		name: card.name,
		class: card.class,
		rarity: card.rarity,
		type: card.type,
		func: card.func,
		image: card.image,
		effect: card.effect,
		amount: card.amount
	});
}
/*******************************************************/
/* spliceHand：手札キューのIndex番目のデータを取り出す
/*******************************************************/
function spliceHand(index){
	return myHand.splice(index, 1)[0];
}
/*******************************************************/
/* findIndexHand：手札キューから検索する
/*******************************************************/
function findIndexHand(id, key){
	return myHand.findIndex((card) => card[id] == key);
}
/*******************************************************/
/* deleteAllHand：手札キューをすべて削除する
/*******************************************************/
function deleteAllHand(){
	return myHand.splice(0, myHand.length);
}
/*******************************************************/
/* pushTrash：捨て札キューの末尾にカードを追加する
/*******************************************************/
function pushTrash(card){
	myTrash = myTrash.map((user, index) => ({
		...user,
		id: index + 1
	}));
	myTrash.push({
		id: myTrash.length+1,
		No: card.No,
		key: card.key,
		name: card.name,
		class: card.class,
		rarity: card.rarity,
		type: card.type,
		func: card.func,
		image: card.image,
		effect: card.effect,
		amount: card.amount
	});
}
/*******************************************************/
/* spliceTrash：捨て札キューのIndex番目のデータを取り出す
/*******************************************************/
function spliceTrash(index){
	return myTrash.splice(index, 1)[0];
}
/*******************************************************/
/* findIndexTrash：捨て札キューから検索する
/*******************************************************/
function findIndexTrash(id, key){
	return myTrash.findIndex((card) => card[id] == key);
}
/*******************************************************/
/* deleteAllTrash：捨て札キューをすべて削除する
/*******************************************************/
function deleteAllTrash(){
	return myTrash.splice(0, myTrash.length);
}
/*******************************************************/
/* pushPlayArea：プレイエリアキューの末尾にカードを追加する
/*******************************************************/
function pushPlayArea(card){
	if ('id' in card) {
		playArea.push({
			No: card.No,
			key: card.key,
			name: card.name,
			class: card.class,
			rarity: card.rarity,
			type: card.type,
			func: card.func,
			image: card.image,
			effect: card.effect,
			amount: card.amount
		});
	} else {
		playArea.push(card);
	}
}
/*******************************************************/
/* deleteAllPlayArea：プレイエリアキューをすべて削除する
/*******************************************************/
function deleteAllPlayArea(){
	return playArea.splice(0, playArea.length);
}
/*******************************************************/
/* pushDiscard：廃棄キューの末尾にカードを追加する
/*******************************************************/
function pushDiscard(card){
	discard = discard.map((user, index) => ({
		...user,
		id: index + 1
	}));
	discard.push({
		id: discard.length+1,
		No: card.No,
		key: card.key,
		name: card.name,
		class: card.class,
		rarity: card.rarity,
		type: card.type,
		func: card.func,
		image: card.image,
		effect: card.effect,
		amount: card.amount
	});
}
/*******************************************************/
/* findIndexHand：手札キューから検索する
/*******************************************************/
function findIndexDiscard(id, key){
	return discard.findIndex((card) => card[id] == key);
}
/*******************************************************/
/* spliceTrash：捨て札キューのIndex番目のデータを取り出す
/*******************************************************/
function spliceDiscard(index){
	return discard.splice(index, 1)[0];
}
/*******************************************************/
/* deleteAllDiscard：廃棄キューをすべて削除する
/*******************************************************/
function deleteAllDiscard(){
	return discard.splice(0, discard.length);
}
/*******************************************************/
/* pushTemporaryArea：一時用キューの末尾にカードを追加する
/*******************************************************/
function pushTemporaryArea(item){
	tmpArea.push(item);
}
/*******************************************************/
/* shiftTemporaryArea：一時用キューの先頭からデータを取り出す
/*******************************************************/
function shiftTemporaryArea(){
	return tmpArea.shift();
}
/*******************************************************/
/* spliceTemporaryArea：一時用キューのIndex番目のデータを取り出す
/*******************************************************/
function spliceTemporaryArea(index){
	return tmpArea.splice(index, 1)[0];
}
/*******************************************************/
/* findIndexTemporaryArea：一時用キューから検索する
/*******************************************************/
function findIndexTemporaryArea(id, key){
	return tmpArea.findIndex((card) => card[id] == key);
}

/*******************************************************/
/* deleteAllTemporaryArea：一時用キューをすべて削除する
/*******************************************************/
function deleteAllTemporaryArea(){
	return tmpArea.splice(0, tmpArea.length);
}
/*******************************************************/
/* pushStackCards：カード効果実行キューの末尾にカードを追加する
/*******************************************************/
function pushStackCards(func){
	stackCards.push(func);
}
/*******************************************************/
/* shiftStackCards：カード効果実行キューの先頭からデータを取り出す
/*******************************************************/
function shiftStackCards(){
	return stackCards.shift();
}
/*******************************************************/
/* deleteAllStackCards：カード効果実行キューをすべて削除する
/*******************************************************/
function deleteAllStackCards(){
	return stackCards.splice(0, stackCards.length);
}
/*******************************************************/
/* shuffleArray：配列のシャッフル
/*******************************************************/
function shuffleArray(array) {
	const shuffled = [...array]; // 元の配列を破壊しないようにコピー
	for (let i = shuffled.length - 1; i > 0; i--) {
		// 0 から i までのランダムなインデックスを生成
		let j = Math.floor(Math.random() * (i + 1));
		// 要素を交換
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
/*******************************************************/
/* localStorage：localStorageアクセス関数
/*******************************************************/
function getLocalStorage(key) {
	const item = localStorage.getItem(key);
	const parseItem = item ? JSON.parse(item) : null;
	return parseItem;
}
function setLocalStorage(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}
function removeLocalStorage(key) {
	localStorage.removeItem(key);
}

/*******************************************************/
/* sleep：スリープ関数
/*******************************************************/
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));