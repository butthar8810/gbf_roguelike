/***********************************************************************************/
/* システム関数
/***********************************************************************************/
/*******************************************************/
/* deepCopySupply：サプライカード配列をディープコピーする
/*******************************************************/
function deepCopyCard(arraycard){
	const cloneArray = [];
	arraycard.forEach((cardOjt) => {
		const cloneOjt = {};
		cloneOjt.name = cardOjt.name;
		cloneOjt.class = cardOjt.class;
		cloneOjt.cost = cardOjt.cost;
		cloneOjt.rarity = cardOjt.rarity;
		cloneOjt.type = cardOjt.type;
		cloneOjt.effect = cardOjt.effect;
		cloneOjt.func = cardOjt.func;
		cloneOjt.image = cardOjt.image;
		cloneArray.push(cloneOjt);
	});
	return cloneArray;
}
/*******************************************************/
/* deepCopyEnemies：エネミー配列をディープコピーする
/*******************************************************/
function deepCopyEnemies(arrayEnemies){
	const cloneArray = [];
	arrayEnemies.forEach((EnemyOjt) => {
		const cloneOjt = {};
		cloneOjt.name = EnemyOjt.name;
		cloneOjt.image = EnemyOjt.image;
		cloneOjt.minHP = EnemyOjt.minHP;
		cloneOjt.maxHP = EnemyOjt.maxHP;
		cloneOjt.actionAlgorithm = EnemyOjt.actionAlgorithm;
		const cloneCurrentStatus = {};
		cloneCurrentStatus.remainHP = EnemyOjt.currentStatus.remainHP;
		cloneCurrentStatus.maxHP = EnemyOjt.currentStatus.maxHP;
		cloneCurrentStatus.status = EnemyOjt.currentStatus.status;
		cloneCurrentStatus.nextAction = EnemyOjt.currentStatus.nextAction;
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
	if ('id' in card) {
		myOriginalDeck.push({
			name: card.name,
			class: card.class,
			cost: card.cost,
			rarity: card.rarity,
			type: card.type,
			effect: card.effect,
			image: card.image,
			func: card.func
		});
	} else {
		myOriginalDeck.push(card);
	}
}
/*******************************************************/
/* unshiftOriginalDeck：デッキキューの先頭にデータを追加する
/*******************************************************/
function unshiftOriginalDeck(card){
	if ('id' in card) {
		myOriginalDeck.unshift({
			name: card.name,
			class: card.class,
			cost: card.cost,
			rarity: card.rarity,
			type: card.type,
			effect: card.effect,
			image: card.image,
			func: card.func
		});
	} else {
		myOriginalDeck.unshift(card);
	}
}
/*******************************************************/
/* shiftOriginalDeck：デッキキューの先頭からデータを取り出す
/*******************************************************/
function shiftOriginalDeck(){
	return myOriginalDeck.shift();
}
/*******************************************************/
/* deletAllOriginalDeck：デッキキューをすべて削除する
/*******************************************************/
function deletAllOriginalDeck(){
	return myOriginalDeck.splice(0, myOriginalDeck.length);
}
/*******************************************************/
/* pushDeck：デッキキューの末尾にカードを追加する
/*******************************************************/
function pushDeck(card){
	if ('id' in card) {
		myDeck.push({
			name: card.name,
			class: card.class,
			cost: card.cost,
			rarity: card.rarity,
			type: card.type,
			effect: card.effect,
			image: card.image,
			func: card.func
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
			name: card.name,
			class: card.class,
			cost: card.cost,
			rarity: card.rarity,
			type: card.type,
			effect: card.effect,
			image: card.image,
			func: card.func
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
/* deletAllDeck：デッキキューをすべて削除する
/*******************************************************/
function deletAllDeck(){
	return myDeck.splice(0, myDeck.length);
}
/*******************************************************/
/* pushHand：手札キューの末尾にカードを追加する
/*******************************************************/
function pushHand(card){
	// IDを採番しなおす
	myHand = myHand.map((user, index) => ({
		...user,
		id: index + 1
	}));
	// デッキから手札へカードを引く
	myHand.push({
		id: myHand.length+1,
		name: card.name,
		class: card.class,
		cost: card.cost,
		rarity: card.rarity,
		type: card.type,
		effect: card.effect,
		image: card.image,
		func: card.func
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
/* deletAllHand：手札キューをすべて削除する
/*******************************************************/
function deletAllHand(){
	return myHand.splice(0, myHand.length);
}
/*******************************************************/
/* pushTrash：捨て札キューの末尾にカードを追加する
/*******************************************************/
function pushTrash(card){
	if ('id' in card) {
		myTrash.push({
			name: card.name,
			class: card.class,
			cost: card.cost,
			rarity: card.rarity,
			type: card.type,
			effect: card.effect,
			image: card.image,
			func: card.func
		});
	} else {
		myTrash.push(card);
	}
}
/*******************************************************/
/* spliceTrash：捨て札キューのIndex番目のデータを取り出す
/*******************************************************/
function spliceTrash(index){
	return myTrash.splice(index, 1)[0];
}
/*******************************************************/
/* findIndexHand：手札キューから検索する
/*******************************************************/
function findIndexTrash(id, key){
	return myTrash.findIndex((card) => card[id] == key);
}
/*******************************************************/
/* deletAllTrash：捨て札キューをすべて削除する
/*******************************************************/
function deletAllTrash(){
	return myTrash.splice(0, myTrash.length);
}
/*******************************************************/
/* pushDiscard：廃棄キューの末尾にカードを追加する
/*******************************************************/
function pushDiscard(card){
	if ('id' in card) {
		discard.push({
			name: card.name,
			class: card.class,
			cost: card.cost,
			type: card.type,
			effect: card.effect,
			image: card.image,
			func: card.func
		});
	} else {
		discard.push(card);
	}
}
/*******************************************************/
/* deletAllDiscard：廃棄キューをすべて削除する
/*******************************************************/
function deletAllDiscard(){
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
/* deletAllTemporaryArea：一時用キューをすべて削除する
/*******************************************************/
function deletAllTemporaryArea(){
	return tmpArea.splice(0, tmpArea.length);
}
/*******************************************************/
/* pushStackCard：カード効果実行キューの末尾にカードを追加する
/*******************************************************/
function pushStackCard(func){
	stackCard.push(func);
}
/*******************************************************/
/* shiftStackCard：カード効果実行キューの先頭からデータを取り出す
/*******************************************************/
function shiftStackCard(){
	return stackCard.shift();
}
/*******************************************************/
/* deletAllStackCard：カード効果実行キューをすべて削除する
/*******************************************************/
function deletAllStackCard(){
	return stackCard.splice(0, stackCard.length);
}
/*******************************************************/
/* shuffleArray：配列のシャッフル
/*******************************************************/
function shuffleArray(array) {
	const shuffled = [...array]; // 元の配列を破壊しないようにコピー
	const mt = new MersenneTwister();
	for (let i = shuffled.length - 1; i > 0; i--) {
		// 0 から i までのランダムなインデックスを生成
		const j = mt.nextInt(0, (i + 1));
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