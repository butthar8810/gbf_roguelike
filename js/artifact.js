/*****************************************************************************/
/* アーティファクト情報
/*****************************************************************************/
const starterArtifact = {
	recovery: {name: '剣闘士の証', effect: '戦闘終了時、HP6回復。', image: 'images/artifact/gladiator.png', func: 'artifactRecovery'},
	startDraw: {name: '魔剣士の証', effect: '戦闘開始時、カード2枚を追加で引く。', image: 'images/artifact/swordsman.png', func: 'artifactStartDraw'},
};

const nomalArtifact = {
	agility: {name: '金華羽飾', effect: '戦闘開始時、敏捷性1を得る。', image: 'images/artifact/feather.png', func: 'artifactAgility'},
	hitPoint: {name: '古代布', effect: '最大HPが増加:7', image: 'images/artifact/cloth.png', func: 'artifactHitPoint'},
	strength: {name: '栄華の指輪', effect: '戦闘開始時、攻撃力アップ1獲得。', image: 'images/artifact/crown.png', func: 'artifactStrength'},
	attackUpGrade: {name: 'ギガス鋼', effect: '獲得時に、ランダムな2枚の「アタック」をアップグレードする。', image: 'images/artifact/Gigas.png', func: 'artifactAttackUpGrade'},
	skillUpGrade: {name: '玉鋼', effect: '獲得時に、ランダムな2枚の「スキル」をアップグレードする。', image: 'images/artifact/Tamahagane.png', func: 'artifactSkillUpGrade'},
	normalRecovery: {name: 'オミナス・ゴブレット', effect: '戦闘開始時、HP2回復。', image: 'images/artifact/goblet.png', func: 'artifactNormalRecovery'},
	block: {name: 'サント・キャスク', effect: '戦闘開始時に10ブロックを得る。', image: 'images/artifact/cask.png', func: 'artifactBlock'},
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
			myArtifact.push(nomalArtifact.agility);
		}
		setLocalStorage(keyContinueArtifact, myArtifact);
	}
	updateArtifactDom();
}
/*******************************************************/
/* setupDeck：初期アーティファクトを配る
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
	
	actionStatusBuf(bufStatus.dexterity, 1);
	
	return true;
}
/*******************************************************/
/* 戦闘開始時、攻撃力アップ1獲得。
/*******************************************************/
function artifactStrength(){
	console.log('artifactStrength');
	
	actionStatusBuf(bufStatus.attackUp, 1);

	return true;
}
/*******************************************************/
/* 戦闘開始時、HP2回復。
/*******************************************************/
function artifactNormalRecovery(){
	console.log('artifactNormalRecovery');
	const recoveryHP = playerStatus.remainHP + 2;
	if (playerStatus.maxHP < recoveryHP){
		playerStatus.remainHP = playerStatus.maxHP;
	} else {
		playerStatus.remainHP = recoveryHP;
	}
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
