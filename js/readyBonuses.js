const firstReadyBonuses = [
	{text: 'カードを1枚選んで獲得', func: bonusDammy },
	{text: 'ランダムなレアのカードを1枚獲得', func: bonusDammy},
	{text: '無色のアンコモンのカードを1枚獲得', func: bonusDammy},
	{text: 'カードを1枚削除させる', func: bonusDammy},
	{text: 'カードを1枚変化させる', func: bonusDammy},
	{text: 'カードを1枚アップグレード', func: bonusDammy},
];
const secondReadyBonuses = [
	{text: 'ランダムなノーマルAFを１個獲得', func: bonusDammy},
	{text: '最初の3回の戦闘で、敵のHPを1にする', func: bonusDammy},
	{text: 'ゴールド100獲得', func: bonusDammy},
	{text: '最大HP+10%', func: bonusDammy},
	{text: 'ランダムなポーションを3個獲得', func: bonusDammy},
];
const thirdReadyBonuses = [
	{text: 'レアなカードを1枚選んで得る', func: bonusDammy},
	{text: 'レアな無色カードを1枚選んぶ', func: bonusDammy},
	{text: 'カードを2枚削除させる', func: bonusDammy},
	{text: 'カードを2枚変化させる', func: bonusDammy},
	{text: 'ランダムなレアAFを1個獲得', func: bonusDammy},
	{text: 'ゴールド250獲得', func: bonusDammy},
	{text: '最大HP+20%', func: bonusDammy},
];
const thirdReandCurses = [
	{text: '現在のHPの30%を失い、', func: bonusDammy},
	{text: '最大HPを10%減らし、', func: bonusDammy},
	{text: 'ゴールドを全て失い、', func: bonusDammy},
	{text: '呪いを獲得。', func: bonusDammy},
];
const fourthReadyBonus = {
	text: '初期AFを失い、ランダムなボスAFを獲得', func: bonusDammy
}

function bonusDammy(){
}