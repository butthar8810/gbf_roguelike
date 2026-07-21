/*****************************************************************************/
/* アーティファクト情報
/*****************************************************************************/
const artifactRarity = {starter: 'starter',common: 'common', uncommon: 'uncommon', rare: 'rare', boss: 'boss', shop: 'shop'};
const artifactdedicated = {common: 'common', gran: 'gran', djeeta: 'djeeta'};


const starterTest = {
	test: {
		name: 'TestArtifact', 
		rarity: artifactRarity.starter,
		effect: '戦闘開始時、攻撃力アップ3。', 
		image: 'images/artifact/gladiator.png', 
		firstFunc: 'effectBuff',
		amount: {
			buffType: 'attackUp',
			buff: 1,
		}
	},
};


const normalArtifact = {
	recovery: {
		name: '剣の銀片', 
		rarity: artifactRarity.starter,
		dedicated: artifactdedicated.gran,
		effect: '戦闘終了時、HP6回復。', 
		image: 'images/artifact/SilverSword.png', 
		endFunc: 'effectRecovery',
		amount: {
			recovery: 6,
		}
	},
	startDraw: {
		name: '杖の銀片', 
		rarity: artifactRarity.starter,
		dedicated: artifactdedicated.djeeta,
		effect: '戦闘開始時、カード2枚を追加で引く。', 
		image: 'images/artifact/SilverCane.png', 
		firstFunc: 'effectDraw',
		amount: {
			draw: 2,
		}
	},
	/*********************************コモン*************************************/
	hitPoint7: {
		name: '栄華の指輪', 
		rarity: artifactRarity.common,
		dedicated: artifactdedicated.common,
		effect: '最大HPが増加:7', 
		image: 'images/artifact/Crown.png', 
		getFunc: 'effectGetMaxHP',
		amount: {
			maxHP: 7,
		}
	},
	attackUpGrade: {
		name: 'ギガス鋼', 
		rarity: artifactRarity.common,
		dedicated: artifactdedicated.common,
		effect: '獲得時に、ランダムな2枚の「アタック」をアップグレードする。', 
		image: 'images/artifact/Gigas.png', 
		getFunc: 'effectRandomUpgrade',
		amount: {
			type: type.attack,
			count: 2,
		}
	},
	skillUpGrade: {
		name: '玉鋼', 
		rarity: artifactRarity.common,
		dedicated: artifactdedicated.common,
		effect: '獲得時に、ランダムな2枚の「スキル」をアップグレードする。', 
		image: 'images/artifact/Tamahagane.png', 
		getFunc: 'effectRandomUpgrade',
		amount: {
			type: type.skill,
			count: 2,
		}
	},
	firstAttack: {
		name: '剣闘士の証', 
		rarity: artifactRarity.common,
		dedicated: artifactdedicated.common,
		effect: '戦闘中最初のアタックは追加で8ダメージを与える。', 
		image: 'images/artifact/ProofOfGladiator.png', 
		firstFunc: 'effectBuff',
		amount: {
			buffType: 'firstAttackUp',
			buff: 8,
		}
	},
	noBlock: {
		name: '守護騎士の証', 
		rarity: artifactRarity.common,
		dedicated: artifactdedicated.common,
		effect: 'ブロック無しでターン終了した時、6ブロックを得る',
		image: 'images/artifact/ProofOfDefender.png', 
		turnEndFunc: 'effectDefenseForNoBlock',
		amount: {
			block: 6,
		}
	},
	shopRecovery: {
		name: '聖職者の証', 
		rarity: artifactRarity.common,
		dedicated: artifactdedicated.common,
		effect: 'ショップに来店するたび、HPを15回復。', 
		image: 'images/artifact/ProofOfClergyman.png',
		shopFunc: 'effectRecovery',
		amount: {
			recovery: 6,
		}
	},
	allWeak: {
		name: '魔導士の証', 
		rarity: artifactRarity.common,
		dedicated: artifactdedicated.common,
		effect: '戦闘開始時、敵全体に恐怖1を与える。',
		image: 'images/artifact/ProofOfMage.png', 
		firstFunc: 'effectALLDebuff',
		amount: {
			debuff: 1,
			debuffType: 'weak',
		}
	},
	firstEnergy: {
		name: '盗賊の証', 
		rarity: artifactRarity.common,
		dedicated: artifactdedicated.common,
		effect: '戦闘開始時、1エナジーを得る。', 
		image: 'images/artifact/ProofOfBandit.png', 
		firstFunc: 'effectGetEnergy',
		amount: {
			energy: 1,
		}
	},
	firstDraw: {
		name: '魔剣士の証', 
		rarity: artifactRarity.common,
		dedicated: artifactdedicated.common,
		effect: '戦闘開始時、カード2枚を追加で引く。', 
		image: 'images/artifact/ProofOfSwordsman.png', 
		firstFunc: 'effectDraw',
		amount: {
			draw: 2,
		}
	},
	firstStrength: {
		name: '格闘士の証', 
		rarity: artifactRarity.common,
		dedicated: artifactdedicated.common,
		effect: '戦闘開始時、攻撃力アップ1獲得。', 
		image: 'images/artifact/ProofOfCombat.png', 
		firstFunc: 'effectBuff',
		amount: {
			buffType: 'attackUp',
			buff: 1,
		}
	},
	firstAgility: {
		name: '射手の証', 
		rarity: artifactRarity.common,
		dedicated: artifactdedicated.common,
		effect: '戦闘開始時、回避率アップ1を得る。', 
		image: 'images/artifact/ProofOfArcher.png', 
		firstFunc: 'effectBuff',
		amount: {
			buffType: 'dexterity',
			buff: 1,
		}
	},
	firstRecovery: {
		name: '吟遊詩人の証', 
		rarity: artifactRarity.common,
		dedicated: artifactdedicated.common,
		effect: '戦闘開始時、HP2回復。', 
		image: 'images/artifact/ProofOfBard.png', 
		firstFunc: 'effectRecovery',
		amount: {
			recovery: 2,
		}
	},
	everyTrunEnergy: {
		name: '槍騎兵の証',
		rarity: artifactRarity.common,
		dedicated: artifactdedicated.common,
		effect: '3ターンごとに、1エナジーを得る。', 
		image: 'images/artifact/ProofOfLancer.png',
		firstFunc: 'effectGetEnergyEveryTurn',
		turnFunc: 'effectGetEnergyEveryTurn',
		amount: {
			Count: 0,
			everyTurn: 3,
			energy: 1,
		}
	},
	twice: {
		name: '双剣士の証', 
		rarity: artifactRarity.common,
		dedicated: artifactdedicated.common,
		effect: 'アタックの使用10回ごとにダメージが2倍になる。', 
		image: 'images/artifact/ProofOfTwinSwordsman.png', 
		attackFunc: '',
		amount: {
			Count: 0,
			everyAttack: 10,
		}
	},
	tenAttackEnergy: {
		name: '森人の証', 
		rarity: artifactRarity.common,
		dedicated: artifactdedicated.common,
		effect: 'アタックを10枚プレイするたび、1エナジーを得る。', 
		image: 'images/artifact/ProofOfDweller.png', 
		attackFunc: 'effectGetEnergyEveryAttack',
		amount: {
			Count: 0,
			everyAttack: 10,
			energy: 1,
		}
	},
	Counter: {
		name: '重竜騎兵の証', 
		rarity: artifactRarity.common,
		dedicated: artifactdedicated.common,
		effect: 'ダメージを受けるたび、敵に3の反撃ダメージを与える。', 
		image: 'images/artifact/ProofOfDragoon.png', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	noAttackEnergy: {
		name: '僧兵の証', 
		rarity: artifactRarity.common,
		dedicated: artifactdedicated.common,
		effect: 'このターン、「アタック」を1枚もプレイしなかった場合、次のターン開始時、1エナジーを得る。', 
		image: 'images/artifact/ProofOfMonk.png', 
	},
	damageBuff: {
		name: '義弓の証', 
		rarity: artifactRarity.common,
		dedicated: artifactdedicated.common,
		effect: '自分がアタックで与える、ブロックされなかった4以下のダメージを5ダメージに増加する。', 
		image: 'images/artifact/ProofOfRobinHood.png', 
	},
	eliteHpDown: {
		name: '契約者の証', 
		rarity: artifactRarity.common,
		dedicated: artifactdedicated.common,
		effect: 'エリート部屋にいる敵のHPが25%低下する。', 
		image: 'images/artifact/ProofOfContractHolder.png', 
	},
	takenDraw: {
		name: '尊命の証', 
		rarity: artifactRarity.common,
		dedicated: artifactdedicated.common,
		effect: '戦闘中初めてHPを失うと、カードを3枚引く。', 
		image: 'images/artifact/ProofOfOrder.png', 
	},
	firstBlock: {
		name: '盾騎士の証', 
		rarity: artifactRarity.common,
		dedicated: artifactdedicated.common,
		effect: '戦闘開始時に10ブロックを得る。', 
		image: 'images/artifact/ProofOfShielder.png', 
		firstFunc: 'effectDefense',
		amount: {
			block: 10,
		}
	},
	restDraw: {
		name: 'コーデックス', 
		rarity: artifactRarity.common,
		dedicated: artifactdedicated.common,
		effect: '休憩時にカードを1枚獲得する。', 
		image: 'images/artifact/Codex.png',
	},
	restRecovery: {
		name: 'キャンプセット', 
		rarity: artifactRarity.common,
		dedicated: artifactdedicated.common,
		effect: '休憩時に追加で15HPが回復する。', 
		image: 'images/artifact/Camp.png',
	},
	restEnergy: {
		name: 'ハンサムゴリラTA', 
		rarity: artifactRarity.common,
		dedicated: artifactdedicated.common,
		effect: '休憩場所を通過した次の戦闘において、2エナジーを得た状態でスタートする。', 
		image: 'images/artifact/Hansamu.png',
	},
	curseMount: {
		name: '八寒の呪符', 
		rarity: artifactRarity.common,
		dedicated: artifactdedicated.common,
		effect: '次に受ける「呪い」を2回まで無効にする。', 
		image: 'images/artifact/CurseAmulet.png',
	},
	shopService: {
		name: '金露果', 
		rarity: artifactRarity.common,
		dedicated: artifactdedicated.common,
		effect: '商人のカード削除サービスの費用が50ゴールドに固定される。', 
		image: 'images/artifact/Apple.png',
	},
	randomRoom: {
		name: '封印櫃', 
		rarity: artifactRarity.common,
		dedicated: artifactdedicated.common,
		effect: 'ランダム部屋4部屋毎に財宝部屋が出現する。', 
		image: 'images/artifact/Sealed.png',
	},
	potionRecovery: {
		name: '紺碧の怪水', 
		rarity: artifactRarity.common,
		dedicated: artifactdedicated.common,
		effect: 'ポーションを使用するたび、HP5回復。', 
		image: 'images/artifact/Water.png',
	},
	insertDeckMoney: {
		name: '聖性の経典', 
		rarity: artifactRarity.common,
		dedicated: artifactdedicated.common,
		effect: 'デッキにカードを追加するたび、9ゴールドを得る。', 
		image: 'images/artifact/Sutra.png',
	},
	halfAttackUp: {
		name: '', 
		rarity: artifactRarity.common,
		dedicated: artifactdedicated.gran,
		effect: 'HPが50％以下になると、筋力3を得る。グラン専用', 
		image: 'images/artifact/Sutra.png',
	},
	AdditionalPoison: {
		name: '', 
		rarity: artifactRarity.common,
		dedicated: artifactdedicated.djeeta,
		effect: '敵に毒を与えるたび、追加で毒1を与える。ジータ専用', 
		image: 'images/artifact/Sutra.png',
	},

	/*********************************アンコモン*************************************/
	hitPoint10: {
		name: '覇業の指輪', 
		rarity: artifactRarity.uncommon,
		dedicated: artifactdedicated.common,
		effect: '最大HPが増加:10', 
		image: 'images/artifact/Conquest.png', 
		getFunc: 'effectGetMaxHP',
		amount: {
			maxHP: 10,
		}
	},
	attackUpgrade: {
		name: '極到の暁', 
		rarity: artifactRarity.uncommon,
		dedicated: artifactdedicated.common,
		effect: '「アタック」を獲得するたび、それをアップグレードする。', 
		image: 'images/artifact/Dawn.png', 
	},
	skillUpgrade: {
		name: '極到の雫', 
		rarity: artifactRarity.uncommon,
		dedicated: artifactdedicated.common,
		effect: '「スキル」を獲得するたび、それをアップグレードする。', 
		image: 'images/artifact/Drop.png', 
	},
	powerUpgrade: {
		name: '極到の星', 
		rarity: artifactRarity.uncommon,
		dedicated: artifactdedicated.common,
		effect: '「パワー」を獲得するたび、それを「アップグレード」する。', 
		image: 'images/artifact/Star.png', 
	},
	potionDrop: {
		name: '錬金術師の証', 
		rarity: artifactRarity.uncommon,
		dedicated: artifactdedicated.common,
		effect: '戦闘終了後に必ずポーションをドロップする。', 
		image: 'images/artifact/ProofOfAlchemist.png', 
	},
	everyAllDamage: {
		name: '侍の証', 
		rarity: artifactRarity.uncommon,
		dedicated: artifactdedicated.common,
		effect: 'ターン開始時、敵全体に3ダメージを与える。', 
		image: 'images/artifact/ProofOfSamurai.png', 
		firstFunc: '',
		amount: {
			attack: 3,
		}
	},
	threeSkillAllD: {
		name: '忍の証', 
		rarity: artifactRarity.uncommon,
		dedicated: artifactdedicated.common,
		effect: '1ターンの間に「スキル」を3枚プレイするたび、敵全体に5ダメージを与える。', 
		image: 'images/artifact/ProofOfNinja.png', 
		firstFunc: '',
		amount: {
			attack: 5,
		}
	},
	threeAttackPower: {
		name: '剣聖の証', 
		rarity: artifactRarity.uncommon,
		dedicated: artifactdedicated.common,
		effect: '1ターンに3枚の「アタック」をプレイするたび、攻撃力アップ1を得る。', 
		image: 'images/artifact/ProofOfSwordSaint.png',
	},
	threeAttackDexterity: {
		name: '撃手の証', 
		rarity: artifactRarity.uncommon,
		dedicated: artifactdedicated.common,
		effect: '1ターンに3枚の「アタック」をプレイするたび、回避率アップ1を得る。', 
		image: 'images/artifact/ProofOfShooter.png', 
	},
	secondTurnBlock: {
		name: '賢者の証', 
		rarity: artifactRarity.uncommon,
		dedicated: artifactdedicated.common,
		effect: '2ターン目開始時、14ブロックを得る。', 
		image: 'images/artifact/ProofOfSage.png',
	},
	bossRecovery: {
		name: '暗殺者の証', 
		rarity: artifactRarity.uncommon,
		dedicated: artifactdedicated.common,
		effect: 'ボスとの戦闘開始時、HP25回復。', 
		image: 'images/artifact/ProofOfAssassin.png',
	},
	threeAttackBlock: {
		name: '楽師の証', 
		rarity: artifactRarity.uncommon,
		dedicated: artifactdedicated.common,
		effect: '「アタック」を3枚プレイするたび、4のブロックを得る。', 
		image: 'images/artifact/ProofOfMusician.png',
	},
	shuffleEnergy: {
		name: '踊手の証', 
		rarity: artifactRarity.uncommon,
		dedicated: artifactdedicated.common,
		effect: 'デッキを3回シャッフルするたび、2エナジーを得る。', 
		image: 'images/artifact/ProofOfDancer.png',
	},
	knockEnergyAndDraw: {
		name: '英勇のエンブレム', 
		rarity: artifactRarity.uncommon,
		dedicated: artifactdedicated.common,
		effect: '敵を倒すと、1エナジーを得て、カードを1枚引く。', 
		image: 'images/artifact/Emblem.png', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	tenPlayDraw: {
		name: '幻麗の紋章', 
		rarity: artifactRarity.uncommon,
		dedicated: artifactdedicated.common,
		effect: 'カードを10枚プレイするたび、カードを1枚引く。', 
		image: 'images/artifact/Arms.png', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	everyDeckRecovery: {
		name: '', 
		rarity: artifactRarity.uncommon,
		dedicated: artifactdedicated.common,
		effect: 'デッキのカード5枚ごとに、HP3回復。(休憩場所入室時に発動)', 
		image: 'images/artifact/', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	getcurseHP: {
		name: '', 
		rarity: artifactRarity.uncommon,
		dedicated: artifactdedicated.common,
		effect: '呪いを獲得するたび、最大HPが増加:6.', 
		image: 'images/artifact/', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	playCurse: {
		name: '', 
		rarity: artifactRarity.uncommon,
		dedicated: artifactdedicated.common,
		effect: '使用不可の呪いがプレイできるようになる。呪いをプレイすると、HP1を失い、廃棄する。', 
		image: 'images/artifact/', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	bonusRelic: {
		name: '', 
		rarity: artifactRarity.uncommon,
		dedicated: artifactdedicated.common,
		effect: '次に開封する2つ目の宝箱まで、2つのレリックが入っている。(ボスの宝箱を除く)', 
		image: 'images/artifact/', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	everyPowerCostDown: {
		name: '', 
		rarity: artifactRarity.uncommon,
		dedicated: artifactdedicated.common,
		effect: '「パワー」をプレイ時、このターンの間手札のランダムなカード1枚のコストが0になる。', 
		image: 'images/artifact/', 
	},
	skipBonus: {
		name: '', 
		rarity: artifactRarity.uncommon,
		dedicated: artifactdedicated.common,
		effect: 'カード報酬をスキップするたびに最大HPが+2', 
		image: 'images/artifact/',
	},
	fourChoice: {
		name: '', 
		rarity: artifactRarity.uncommon,
		dedicated: artifactdedicated.common,
		effect: '報酬のカード選択画面で、3枚ではなく4枚のカードから選択できるようになる。', 
		image: 'images/artifact/', 
	},
	newArrival: {
		name: '', 
		rarity: artifactRarity.uncommon,
		dedicated: artifactdedicated.common,
		effect: '商人が販売するカード、レリック、ポーションは売り切れにならず、価格は20％割引される。', 
		image: 'images/artifact/', 
	},
	dyingRecovery: {
		name: '', 
		rarity: artifactRarity.uncommon,
		dedicated: artifactdedicated.common,
		effect: '戦闘終了時のHPが50％以下の場合、HP12回復', 
		image: 'images/artifact/', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	powerfulDefenseDown: {
		name: '', 
		rarity: artifactRarity.uncommon,
		dedicated: artifactdedicated.gran,
		effect: '防御ダウンを持つ敵へのダメージが50％ではなく、75％増加する。グラン専用', 
		image: 'images/artifact/', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	HPDownBlock: {
		name: '', 
		rarity: artifactRarity.uncommon,
		dedicated: artifactdedicated.gran,
		effect: 'HPが失われるたび、次のターン開始時に、3ブロックを得る。グラン専用', 
		image: 'images/artifact/', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	threeKnifes: {
		name: '', 
		rarity: artifactRarity.uncommon,
		dedicated: artifactdedicated.djeeta,
		effect: '戦闘開始時に3枚のナイフを手札に加える。ジータ専用', 
		image: 'images/artifact/', 
		firstFunc: 'effectAddCommonCard',
		amount: {
			commonCard: 'Knife',
			count: 3,
		}
	},
	powerfulWeak: {
		name: '', 
		rarity: artifactRarity.uncommon,
		dedicated: artifactdedicated.djeeta,
		effect: '脱力を持つ敵からのダメージが25％ではなく、40％減になる。ジータ専用', 
		image: 'images/artifact/', 
	},
	/*********************************レア*************************************/
	hitPoint14: {
		name: '至極の指輪', 
		rarity: artifactRarity.rare,
		dedicated: artifactdedicated.common,
		effect: '最大HPが増加:14', 
		image: 'images/artifact/Extremely.png', 
		getFunc: 'effectGetMaxHP',
		amount: {
			maxHP: 14,
		}
	},
	invalidWeak: {
		name: '豪傑の証', 
		rarity: artifactRarity.rare,
		dedicated: artifactdedicated.common,
		effect: '恐怖にならない。', 
		image: 'images/artifact/ProofOfMightyman.png', 
	},
	mitigation: {
		name: '聖騎士の証', 
		rarity: artifactRarity.rare,
		dedicated: artifactdedicated.common,
		effect: 'ブロックできなかった5以下のダメージを1に軽減する。', 
		image: 'images/artifact/ProofOfPaladin.png', 
	},
	Reraise: {
		name: '波動の証', 
		rarity: artifactRarity.rare,
		dedicated: artifactdedicated.common,
		effect: '戦闘不能になりそうになると最大HPの50%を回復する(一度きり)', 
		image: 'images/artifact/ProofOfWaves.png', 
	},
	thirdTurnBlock: {
		name: '使役者の証', 
		rarity: artifactRarity.rare,
		dedicated: artifactdedicated.common,
		effect: '3ターン目開始時、18ブロックを得る。', 
		image: 'images/artifact/ProofOfSummoner.png', 
		firstFunc: '',
		amount: {
			block: 18,
		}
	},
	redraw: {
		name: '大立者の証', 
		rarity: artifactRarity.rare,
		dedicated: artifactdedicated.common,
		effect: '戦闘開始時、好きなカードを捨てて同じ枚数のカードを引く。', 
		image: 'images/artifact/ProofOfKing.png', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	noCardDraw: {
		name: '陰陽の証', 
		rarity: artifactRarity.rare,
		dedicated: artifactdedicated.common,
		effect: '手札にカードが1枚もない時に、カードを1枚引く。', 
		image: 'images/artifact/ProofOfCosmicForces.png', 
	},
	invalidFrail: {
		name: '古豪の証', 
		rarity: artifactRarity.rare,
		dedicated: artifactdedicated.common,
		effect: '脆弱化にならない。', 
		image: 'images/artifact/ProofOfPowerhouse.png', 
	},
	everyDamageCut: {
		name: '復讐者の証', 
		rarity: artifactRarity.rare,
		dedicated: artifactdedicated.common,
		effect: '6ターン毎に、ダメージカット1を得る。', 
		image: 'images/artifact/ProofOfAvenger.png', 
		firstFunc: '',
		amount: {
			buff: 1,
			buffType: 'damageCut',
		}
	},
	everyPowerRecovery: {
		name: '奏者の証', 
		rarity: artifactRarity.rare,
		dedicated: artifactdedicated.common,
		effect: '「パワー」をプレイするたび、HP2回復。', 
		image: 'images/artifact/ProofOfPlayer.png', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	AccumulationEnergy: {
		name: 'テルマ', 
		rarity: artifactRarity.rare,
		dedicated: artifactdedicated.common,
		effect: '使用しなかったエナジーが蓄積されていく。', 
		image: 'images/artifact/Thelma.png', 
	},
	firstArmor: {
		name: 'オメガの器', 
		rarity: artifactRarity.rare,
		dedicated: artifactdedicated.common,
		effect: '戦闘開始時、プレートアーマー4を得る。', 
		image: 'images/artifact/Omega.png', 
	},
	retentionBlock: {
		name: 'ガフスキー', 
		rarity: artifactRarity.rare,
		dedicated: artifactdedicated.common,
		effect: 'ターン開始時、すべてのブロックを失うのではなく、15ブロックを失う。(残ったブロックは保持される)', 
		image: 'images/artifact/Gavsky.png', 
	},
	starFragment: {
		name: '星の欠片', 
		rarity: artifactRarity.rare,
		dedicated: artifactdedicated.common,
		effect: '7ターン目の終了時、すべての敵に52ダメージを与える。', 
		image: 'images/artifact/StarFragment.png', 
		amount: {
			attack: 52,
		}
	},
	restAttackUp: {
		name: '', 
		rarity: artifactRarity.rare,
		dedicated: artifactdedicated.common,
		effect: '休憩場所で筋力1を獲得。(最大3回)', 
		image: 'images/artifact/', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	HPMitigation: {
		name: '', 
		rarity: artifactRarity.rare,
		dedicated: artifactdedicated.common,
		effect: 'HP喪失時、その値を1軽減する。', 
		image: 'images/artifact/', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	cursePower: {
		name: '', 
		rarity: artifactRarity.rare,
		dedicated: artifactdedicated.common,
		effect: '戦闘開始時、デッキの呪い1枚につき、筋力1を得る。', 
		image: 'images/artifact/', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	goldCoin: {
		name: '', 
		rarity: artifactRarity.rare,
		dedicated: artifactdedicated.common,
		effect: '300金貨獲得。', 
		image: 'images/artifact/', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	discardDraw: {
		name: '', 
		rarity: artifactRarity.rare,
		dedicated: artifactdedicated.common,
		effect: 'カードを廃棄するたび、手札にランダムなカードを加える。', 
		image: 'images/artifact/', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	restRemove: {
		name: '', 
		rarity: artifactRarity.rare,
		dedicated: artifactdedicated.common,
		effect: '休憩場所でカードの削除ができるようになる。', 
		image: 'images/artifact/', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	fewPlayDraw: {
		name: '', 
		rarity: artifactRarity.rare,
		dedicated: artifactdedicated.common,
		effect: 'あなたが1ターンにプレイしたカードの枚数が3枚以下だったとき、次のターン開始時、カードを追加で3枚引く。', 
		image: 'images/artifact/', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	AdditionalRemuneration: {
		name: '', 
		rarity: artifactRarity.rare,
		dedicated: artifactdedicated.common,
		effect: '通常の敵が追加でカードをドロップするようになる。', 
		image: 'images/artifact/', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	flying: {
		name: '', 
		rarity: artifactRarity.rare,
		dedicated: artifactdedicated.common,
		effect: '次の部屋を選択する時、あなたは3回まで道を無視して飛ぶことが出来る。', 
		image: 'images/artifact/', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	firstDisable: {
		name: '', 
		rarity: artifactRarity.rare,
		dedicated: artifactdedicated.common,
		effect: '戦闘中、最初のHPの損失を無効化する。', 
		image: 'images/artifact/', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	everyDiscardAllAttack: {
		name: '', 
		rarity: artifactRarity.rare,
		dedicated: artifactdedicated.gran,
		effect: 'カードを廃棄するたび、敵全体に3ダメージを与える。グラン専用', 
		image: 'images/artifact/', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	defenseDownAndWeak: {
		name: '', 
		rarity: artifactRarity.rare,
		dedicated: artifactdedicated.gran,
		effect: '敵に防御ダウンを与えると恐怖1も与える。グラン専用', 
		image: 'images/artifact/', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	powerfulRecovery: {
		name: '', 
		rarity: artifactRarity.rare,
		dedicated: artifactdedicated.gran,
		effect: '戦闘中の回復を50％増加。グラン専用', 
		image: 'images/artifact/', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	everyTrashRandomAttack: {
		name: '', 
		rarity: artifactRarity.rare,
		dedicated: artifactdedicated.djeeta,
		effect: 'ターン中にカードを1枚捨てるたび、ランダムな敵に3ダメージを与える。ジータ専用', 
		image: 'images/artifact/', 
	},
	everyTrashBlock: {
		name: '', 
		rarity: artifactRarity.rare,
		dedicated: artifactdedicated.djeeta,
		effect: 'ターン中にカードを捨てるたびに3ブロックを得る。ジータ専用', 
		image: 'images/artifact/', 
	},
	poisonInfection: {
		name: '', 
		rarity: artifactRarity.rare,
		dedicated: artifactdedicated.djeeta,
		effect: '倒した敵に蓄積していた毒をランダムな敵に付与する。ジータ専用', 
		image: 'images/artifact/', 
	},
	/*********************************BOSS*************************************/
	energyNoGold: {
		name: '灼滅の焔角', 
		rarity: artifactRarity.boss,
		dedicated: artifactdedicated.common,
		effect: 'ターン開始時に、1エナジーを得る。ゴールドを入手できなくなる。', 
		image: 'images/artifact/Annihilation.png', 
		turnFunc: '',
		amount: {
			energy: 1,
		}
	},
	energySixPlay: {
		name: '氷獄の結晶', 
		rarity: artifactRarity.boss,
		dedicated: artifactdedicated.common,
		effect: 'ターン開始時に、1エナジーを得る。1ターンの間に、6枚までしかカードを使えなくなる。', 
		image: 'images/artifact/Prison.png', 
		turnFunc: '',
		amount: {
			energy: 1,
		}
	},
	energyEnemyPower: {
		name: '裁考の水晶', 
		rarity: artifactRarity.boss,
		dedicated: artifactdedicated.common,
		effect: 'ターン開始時に、1エナジーを得る。戦闘開始時、すべての敵は筋力1を得る。', 
		image: 'images/artifact/Judgment.png', 
		turnFunc: '',
		amount: {
			energy: 1,
		}
	},
	energyChooseOne: {
		name: '人馬の円盤', 
		rarity: artifactRarity.boss,
		dedicated: artifactdedicated.common,
		effect: 'ターン開始時に、1エナジーを得る。報酬のカード選択画面で、選択できるカードが2枚減る。', 
		image: 'images/artifact/Horse.png', 
		turnFunc: '',
		amount: {
			energy: 1,
		}
	},
	energyNotClear: {
		name: '妃光の水晶', 
		rarity: artifactRarity.boss,
		dedicated: artifactdedicated.common,
		effect: 'ターン開始時に、1エナジーを得る。敵の行動予測がわからなくなる。', 
		image: 'images/artifact/Crystal.png', 
		turnFunc: '',
		amount: {
			energy: 1,
		}
	},
	energyNoBreak: {
		name: '幻魔の破片', 
		rarity: artifactRarity.boss,
		dedicated: artifactdedicated.common,
		effect: 'ターン開始時に、1エナジーを得る。休憩場所で休息ができなくなる。', 
		image: 'images/artifact/Genma.png', 
		turnFunc: '',
		amount: {
			energy: 1,
		}
	},
	energyNoPotion: {
		name: '', 
		rarity: artifactRarity.boss,
		dedicated: artifactdedicated.common,
		effect: 'ターン開始時に、1エナジーを得る。ポーションを入手できなくなる。', 
		image: 'images/artifact/', 
		turnFunc: '',
		amount: {
			energy: 1,
		}
	},
	energyCurse: {
		name: '', 
		rarity: artifactRarity.boss,
		dedicated: artifactdedicated.common,
		effect: 'ターン開始時に、1エナジーを得る。宝箱を開けるたびに呪いを獲得。(ボスの宝箱は除く。)', 
		image: 'images/artifact/', 
		turnFunc: '',
		amount: {
			energy: 1,
		}
	},
	energyNoBlacksmithing: {
		name: '', 
		rarity: artifactRarity.boss,
		dedicated: artifactdedicated.common,
		effect: 'ターン開始時、1エナジーを得る。休憩場所で鍛冶ができなくなる。', 
		image: 'images/artifact/', 
		turnFunc: '',
		amount: {
			energy: 1,
		}
	},
	energyBoss: {
		name: '漆黒の棘翅', 
		rarity: artifactRarity.boss,
		dedicated: artifactdedicated.common,
		effect: 'ボスとエリートとの戦闘において、ターン開始時に、1エナジーを得る。', 
		image: 'images/artifact/Thorn.png', 
		turnFunc: '',
		amount: {
			energy: 1,
		}
	},
	eliteAdditionalRemuneration: {
		name: '蒼の羽根', 
		rarity: artifactRarity.boss,
		dedicated: artifactdedicated.common,
		effect: 'エリートを倒すと2個のレリックをドロップするようになる。', 
		image: 'images/artifact/Blue.png', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	twoRemove: {
		name: '虚ろなる鍵', 
		rarity: artifactRarity.boss,
		dedicated: artifactdedicated.common,
		effect: '獲得時、2枚のカードをデッキから削除する。', 
		image: 'images/artifact/Key.png', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	changeAndUpgrade: {
		name: '', 
		rarity: artifactRarity.boss,
		dedicated: artifactdedicated.common,
		effect: '獲得時、3枚のカードを選択して変化させ、それらをアップグレードする。', 
		image: 'images/artifact/', 
	},
	drawAndconfusion: {
		name: '', 
		rarity: artifactRarity.boss,
		dedicated: artifactdedicated.common,
		effect: 'ターン開始時、2枚カードを追加で引く。戦闘開始時に混乱。', 
		image: 'images/artifact/', 
	},
	NoTrash: {
		name: '', 
		rarity: artifactRarity.boss,
		dedicated: artifactdedicated.common,
		effect: 'ターン終了時に、手札を捨てなくなる。', 
		image: 'images/artifact/', 
	},
	getCurseAndRelic: {
		name: '', 
		rarity: artifactRarity.boss,
		dedicated: artifactdedicated.common,
		effect: '特異な呪いとレリックx3を獲得する。', 
		image: 'images/artifact/', 
	},
	House: {
		name: '', 
		rarity: artifactRarity.boss,
		dedicated: artifactdedicated.common,
		effect: 'ポーションを1個獲得する。ゴールド50獲得。カードを1枚獲得する。ランダムなカードを1枚アップグレードする。', 
		image: 'images/artifact/', 
	},
	twicePotion: {
		name: '', 
		rarity: artifactRarity.boss,
		dedicated: artifactdedicated.common,
		effect: 'ポーションの効果を2倍にする。', 
		image: 'images/artifact/', 
	},
	recovery2: {
		name: '', 
		rarity: artifactRarity.boss,
		dedicated: artifactdedicated.gran,
		effect: '「剣の銀片」と置き換える。戦闘終了時、HP12回復。グラン専用', 
		image: 'images/artifact/', 
	},
	HpDownDraw: {
		name: '', 
		rarity: artifactRarity.boss,
		dedicated: artifactdedicated.gran,
		effect: 'HPを失うたび、カードを1枚引く。グラン専用', 
		image: 'images/artifact/', 
	},
	energyAbnormalCard: {
		name: '', 
		rarity: artifactRarity.boss,
		dedicated: artifactdedicated.gran,
		effect: 'ターン開始時に、1エナジーを得る。戦闘開始時に負傷を2枚山札に加える。グラン専用', 
		image: 'images/artifact/', 
	},
	costZeroAttack: {
		name: '', 
		rarity: artifactRarity.boss,
		dedicated: artifactdedicated.djeeta,
		effect: 'コストが0の「アタック」が4の追加ダメージを与える。ジータ専用', 
		image: 'images/artifact/', 
	},
	turnDraw: {
		name: '', 
		rarity: artifactRarity.boss,
		dedicated: artifactdedicated.djeeta,
		effect: '「杖の銀片」と置き換える。ターン開始時、追加でカードを1枚引く。ジータ専用', 
		image: 'images/artifact/', 
	},
	firstTrashEnergy: {
		name: '', 
		rarity: artifactRarity.boss,
		dedicated: artifactdedicated.djeeta,
		effect: '毎ターン、最初にカードを捨てたとき、1エナジーを得る。ジータ専用', 
		image: 'images/artifact/', 
	},
	/*********************************BOSS*************************************/
	card: {
		name: 'よろずや会員カード', 
		rarity: artifactRarity.shop,
		dedicated: artifactdedicated.common,
		effect: '全商品50％割引！', 
		image: 'images/artifact/Card.png', 
		firstFunc: '',
		amount: {
			draw: 2,
		}
	},
	eliteAttackUp: {
		name: '', 
		rarity: artifactRarity.shop,
		dedicated: artifactdedicated.common,
		effect: 'エリートとの戦闘開始時、攻撃力アップ2を得る。', 
		image: 'images/artifact/', 
	},
	shuffleBlock: {
		name: '', 
		rarity: artifactRarity.shop,
		dedicated: artifactdedicated.common,
		effect: 'デッキをシャッフルするたび、6ブロックを得る。', 
		image: 'images/artifact/', 
	},
	mount: {
		name: '', 
		rarity: artifactRarity.shop,
		dedicated: artifactdedicated.common,
		effect: '戦闘開始時、弱体無効1を得る。', 
		image: 'images/artifact/', 
		firstFunc: 'effectBuff',
		amount: {
			buffType: 'mount',
			buff: 1,
		}
	},
	eye: {
		name: '嵐竜の琥珀眼', 
		rarity: artifactRarity.shop,
		dedicated: artifactdedicated.common,
		effect: '山札を見た時、カードの並び順通りに表示される。', 
		image: 'images/artifact/Eye.png', 
	},
	clear: {
		name: '', 
		rarity: artifactRarity.shop,
		dedicated: artifactdedicated.common,
		effect: '同じターン内で「パワー」「アタック」「スキル」を1枚ずつプレイした時、自分にかかっているすべてのデバフを取り除く。', 
		image: 'images/artifact/', 
	},
	XPlus: {
		name: '', 
		rarity: artifactRarity.shop,
		dedicated: artifactdedicated.common,
		effect: '消費エナジーがXのカードをプレイしたとき、その効果はX+2', 
		image: 'images/artifact/', 
	},
	Reproduction: {
		name: '', 
		rarity: artifactRarity.shop,
		dedicated: artifactdedicated.common,
		effect: '獲得時、あなたのデッキのカード1枚を複製する。', 
		image: 'images/artifact/', 
	},
	breakBlockWeak: {
		name: '', 
		rarity: artifactRarity.shop,
		dedicated: artifactdedicated.common,
		effect: '敵のブロックを破るたび、弱体化2を与える。', 
		image: 'images/artifact/', 
	},
	prism: {
		name: '', 
		rarity: artifactRarity.shop,
		dedicated: artifactdedicated.common,
		effect: '戦闘後の報酬に、無色と他の色のカードが提示されるようになる。', 
		image: 'images/artifact/', 
	},
	hitPoint7AndRecovery: {
		name: '', 
		rarity: artifactRarity.shop,
		dedicated: artifactdedicated.common,
		effect: '最大HPが増加:7HPが全回復。', 
		image: 'images/artifact/', 
	},
	playAbnormal: {
		name: '', 
		rarity: artifactRarity.shop,
		dedicated: artifactdedicated.common,
		effect: '使用不可の「状態異常」がプレイできるようになる。「状態異常」はプレイすると廃棄する。', 
		image: 'images/artifact/', 
	},
	fivePotion: {
		name: '', 
		rarity: artifactRarity.shop,
		dedicated: artifactdedicated.common,
		effect: '獲得時にポーションx5を調合する。', 
		image: 'images/artifact/', 
	},
	insertDeck: {
		name: '', 
		rarity: artifactRarity.shop,
		dedicated: artifactdedicated.common,
		effect: 'カードを5枚選んでデッキに追加する。', 
		image: 'images/artifact/', 
	},
	probabilityTrash: {
		name: '', 
		rarity: artifactRarity.shop,
		effect: 'カードを廃棄した時、50％の確率で廃棄ではなく捨て札にする。', 
		image: 'images/artifact/', 
	},
	randomCommonCard: {
		name: '', 
		rarity: artifactRarity.shop,
		dedicated: artifactdedicated.common,
		effect: '戦闘開始時、3枚のランダムな無色のカードから1枚選び、手札に加える。', 
		image: 'images/artifact/', 
	},
	AllAttackUp: {
		name: '', 
		rarity: artifactRarity.shop,
		dedicated: artifactdedicated.gran,
		effect: 'ターン開始時、自分は筋力2を得て、すべての敵は筋力1を得る。グラン専用', 
		image: 'images/artifact/', 
	},
	firstPoison: {
		name: '', 
		rarity: artifactRarity.shop,
		dedicated: artifactdedicated.djeeta,
		effect: '戦闘開始時、すべての敵に毒4を与える。ジータ専用', 
		image: 'images/artifact/', 
	},
};
/*******************************************************/
/* setupArtifact：初期アーティファクトを配る
/*******************************************************/
function setupArtifact(){
	const Continued = getLocalStorage(keyContinueFlag);
	const selectChara = getLocalStorage(keySelectChara);
	const lastArtifact = getLocalStorage(keyContinueArtifact);

	if(lastArtifact && Continued){
		// 続きからの場合
		myArtifacts = lastArtifact;
	} else {
		// プレイヤーに初期デッキとなる10枚のカードを配る
		if (selectChara == selectCharacter.gran.name){
			getArtifact(normalArtifact.recovery);
		} else if (selectChara == selectCharacter.djeeta.name){
			getArtifact(normalArtifact.startDraw);
			getArtifact(normalArtifact.twice);
			getArtifact(normalArtifact.tenAttackEnergy);
		}
		setLocalStorage(keyContinueArtifact, myArtifacts);
	}
	updateArtifactDom();
}

/*******************************************************/
/* getArtifactEffect：アーティファクト獲得関数
/*******************************************************/
function getArtifact(artifact){
	// 獲得時効果発動
	if('getFunc' in artifact){
		if (artifact.getFunc !== '') {
			const storedFunc = globalThis[artifact.getFunc];
			if( typeof storedFunc === 'function'){
				ret = storedFunc(artifact.amount);
			} 
		}
	}
	myArtifacts.push(artifact);
}
/*******************************************************/
/* setupArtifact：ショップラインナップ決定関数
/*******************************************************/
function decideArtifactLineup(){
	const selectArtifacts = [];
	const lineupPrice = {
		common:{minPrice: 149, maxPrice: 201},
		uncommon:{minPrice: 191, maxPrice: 259},
		rare:{minPrice: 234, maxPrice: 316},
		shop:{minPrice: 170, maxPrice: 230},
		boss:{minPrice: 9999, maxPrice: 9999},
	};
	let index = 0
	// ラインナップ抽選
	let filteringArtifact = Object.values(normalArtifact).filter((artifact) => 
		artifact.rarity === artifactRarity.common ||
		artifact.rarity === artifactRarity.uncommon ||
		artifact.rarity === artifactRarity.rare
	)
	filteringArtifact = filteringArtifact.filter((artifact) => {
		return !myArtifacts.find((myArtifact) => myArtifact.name === artifact.name);
	});
	console.log(filteringArtifact);
	const lineupArtifact = shuffleArray(filteringArtifact).splice(0, 2);
	const shopArtifact = Object.values(normalArtifact).filter((artifact) => 
		artifact.rarity === artifactRarity.shop
	).filter((artifact) => {
		return !myArtifacts.find((myArtifact) => myArtifact.name === artifact.name);
	});
	lineupArtifact.push(shuffleArray(shopArtifact).splice(0, 1)[0]);
	//レア度別に値段を決める
	lineupArtifact.forEach((artifact) => {
		const price = lineupPrice[artifact.rarity];
		let randomPrice = Math.floor(
			Math.random() * (price.maxPrice - price.minPrice) + price.minPrice
		);
		selectArtifacts.push({
			id: index,
			artifact: artifact,
			price: randomPrice,
		});
		index++;
	});
	return selectArtifacts;
}

/*******************************************************/
/* decideArtifactReward：報酬用アーティファクト決定関数
/*******************************************************/
function decideArtifactReward(){
	let selectRarity = {};
	let selectArtifact = {};
	const artifactReward = {
		common:{weight:50, rarity: artifactRarity.common},
		uncommon:{weight:33, rarity: artifactRarity.uncommon},
		rare:{weight:17, rarity: artifactRarity.rare},
	};
	const totalWeight = Object.values(artifactReward).reduce((sum, item) => sum + item.weight, 0);
	let random = Math.floor(Math.random() * totalWeight);
	for (const rarity of Object.values(artifactReward)) {
		if (random < rarity.weight) {
			selectRarity = rarity.rarity;
			break;
		}
		random -= rarity.weight;
	}
	const filteringArtifact = Object.values(normalArtifact)
		.filter((artifact) => artifact.rarity === selectRarity)
		.filter((artifact) => {
			return !myArtifacts.find((myArtifact) => myArtifact.name === artifact.name);
		});
	console.log(filteringArtifact);
	selectArtifact = shuffleArray(filteringArtifact).shift();

	return {type: rewardType.artifact, getFlag: true, amount: selectArtifact};
}
/*******************************************************/
/* decideBossArtifactReward：報酬用ボスアーティファクト決定関数
/*******************************************************/
function decideBossArtifactReward(){
	let selectArtifacts = {};
	const filteringArtifact = Object.values(normalArtifact)
		.filter((artifact) => artifact.rarity === artifactRarity.boss)
		.filter((artifact) => {
			return !myArtifacts.find((myArtifact) => myArtifact.name === artifact.name);
		});
	console.log(filteringArtifact);
	selectArtifacts = shuffleArray(filteringArtifact).splice(0, 3);
	return {type: rewardType.boss, getFlag: true, amount: selectArtifacts};
}
/*****************************************************************************/
/* アーティファクト効果
/*****************************************************************************/
/*******************************************************/
/* 戦闘終了時、HP6回復。
/*******************************************************/
function effectRecovery(amount){
	if('recovery' in amount){
		recoveryHP(amount.recovery);
	}
	return true;
}

/*******************************************************/
/* 最大HPが増加:〇〇
/*******************************************************/
function effectGetMaxHP(amount){
	if('maxHP' in amount){
		playerStatus.maxHP += amount.maxHP;
		recoveryHP(amount.maxHP);
		setLocalStorage(keyContinuePlayerStatus, playerStatus);
	}
	return true;
}
/*******************************************************/
/* 獲得時に、ランダムな2枚の「〇〇」をアップグレードする。
/*******************************************************/
function effectRandomUpgrade(amount){
	let enhancedCard = [];
	if('type' in amount && 'count' in amount ){
		const filteringDeck = myOriginalDeck.filter((card) => {
			return card.type === amount.type &&
			 'key' in card && card.key !== undefined;
		});
		const UpgradeCards = shuffleArray(filteringDeck).splice(0, amount.count);
		for(const card of UpgradeCards){
			if('key' in card && card.key !== undefined){
				if(card.class === cardClass.gran){
					enhancedCard.push(granEnhancedCardList[card.key]);
				} else if(card.class === cardClass.djeeta){
					enhancedCard.push(djeetaEnhancedCardList[card.key]);
				} else if(card.class === cardClass.common){
					enhancedCard.push(commonEnhancedCardList[card.key]);
				}
				myOriginalDeck = myOriginalDeck.filter((deckCard) => {
					return deckCard.id !== card.id;
				});
			}
		}
		insertCardsToOriginalDeckDom(enhancedCard);
		enhancedCard.forEach((card) => {
			pushOriginalDeck(card);
		});
		setupOriginalDeckBtnDom();
	}
	return true;
}

/*******************************************************/
/* ブロック無しでターン終了した時、〇ブロックを得る
/*******************************************************/
function effectDefenseForNoBlock(amount){
	console.log('effectDefenseForNoBlock');
	if('block' in amount && playerStatus.block === 0){
		actionBlockNoBuff(amount.block);
	}
	return true;
}

/*******************************************************/
/* 〇ターンごとに、〇エナジーを得る。
/*******************************************************/
function effectGetEnergyEveryTurn(amount){
	console.log('effectGetEnergyEveryTurn');
	if('energy' in amount && 'Count' in amount && 'everyTurn' in amount){
		amount.Count++;
		if(amount.Count >= amount.everyTurn){
			playerStatus.remainEnergy += amount.energy;
			amount.Count = 0;
		}
	}
	console.log(amount);
	return true;
}
/*******************************************************/
/* アタックを〇枚プレイするたび、〇エナジーを得る。
/*******************************************************/
function effectGetEnergyEveryAttack(amount){
	console.log('effectGetEnergyEveryTurn');
	if('energy' in amount && 'Count' in amount && 'everyAttack' in amount){
		amount.Count++;
		if(amount.Count >= amount.everyAttack){
			playerStatus.remainEnergy += amount.energy;
			amount.Count = 0;
		}
	}
	console.log(amount);
	return true;
}