/*****************************************************************************/
/* アーティファクト情報
/*****************************************************************************/
const starterArtifact = {
	recovery: {name: '癒しのガントレット', effect: '戦闘終了時、HP6回復。', image: '', func: 'artifactRecovery'},
	startDraw: {name: '速攻の指輪', effect: '戦闘開始時、カード2枚を追加で引く。', image: '', func: 'artifactStartDraw'},
};

const nomalArtifact = {
	agility: {name: '癒しのガントレット', effect: '戦闘開始時、敏捷性1を得る。', image: '', func: 'artifactAgility'},
	hitPoint: {name: '速攻の指輪', effect: '最大HPが増加:7', image: '', func: 'artifactHitPoint'},
	strength: {name: '筋力の指輪', effect: '戦闘開始時、攻撃力アップ1獲得。', image: '', func: 'artifactStrength'},
	attackUpGrade: {name: 'ギガス鋼', effect: '獲得時に、ランダムな2枚の「アタック」をアップグレードする。', image: '', func: 'artifactAttackUpGrade'},
	skillUpGrade: {name: '玉鋼', effect: '獲得時に、ランダムな2枚の「スキル」をアップグレードする。', image: '', func: 'artifactSkillUpGrade'},
	normalRecovery: {name: 'バンドエイド', effect: '戦闘開始時、HP2回復。', image: '', func: 'artifactNormalRecovery'},
	block: {name: '盾', effect: '戦闘開始時に10ブロックを得る。', image: '', func: 'artifactBlock'},
};

/*******************************************************/
/* setupDeck：初期アーティファクトを配る
/*******************************************************/
function setupArtifact(){
	const continueFlag = getLocalStorage(keyContinueFlag);
	const selectChara = getLocalStorage(keySelectChara);
	const lastArtifact = getLocalStorage(keyContinueArtifact);

	if(lastArtifact && continueFlag){
		// 続きからの場合
		myArtifact = lastArtifact;
	} else {
		// プレイヤーに初期デッキとなる10枚のカードを配る
		if (selectChara == selectCharacter.gran.name){
			myArtifact.push(starterArtifact.recovery);
		} else if (selectChara == selectCharacter.djeeta.name){
			myArtifact.push(starterArtifact.startDraw);
		}
		setLocalStorage(keyContinueArtifact, myArtifact);
	}
}
/*****************************************************************************/
/* アーティファクト効果
/*****************************************************************************/
/*******************************************************/
/* 戦闘終了時、HP6回復。
/*******************************************************/
function artifactRecovery(){
	const recoveryHP = playerStatus.remainHP + 6;
	if (playerStatus.maxHP < recoveryHP){
		playerStatus.remainHP = playerStatus.maxHP;
	} else {
		playerStatus.remainHP = recoveryHP;
	}
	return true;
}
/*******************************************************/
/* 戦闘開始時、カード2枚を追加で引く。
/*******************************************************/
function artifactStartDraw(){
	console.log('artifactStartDraw');
	const drawCards = drawCardFromDeck(2);
	
	for(const card of drawCards) {
		animateDrawDeck(card);
	}
	return true;
}
/*******************************************************/
/* 戦闘開始時、敏捷性1を得る。
/*******************************************************/
function artifactAgility(){
	console.log('artifactAgility');
	console.log(artifactRecovery);
	
	return true;
}
/*******************************************************/
/* 戦闘開始時、攻撃力アップ1獲得。
/*******************************************************/
function artifactStrength(){
	console.log('artifactStrength');
	
	return true;
}
/*******************************************************/
/* 戦闘開始時、HP2回復。
/*******************************************************/
function artifactNormalRecovery(){
	console.log('artifactNormalRecovery');
	
	return true;
}
/*******************************************************/
/* 戦闘開始時に10ブロックを得る。
/*******************************************************/
function artifactBlock(){
	console.log('artifactBlock');
	playerStatus.block += 10;
	
	animatePlayerBlocked()
	
	return true;
}
