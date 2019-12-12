const goodHoursInDayTable = {
	'Dần': 'Tí, Sửu, Thìn, Tỵ, Mùi, Tuất',
	'Thân': 'Tí, Sửu, Thìn, Tỵ, Mùi, Tuất',
	'Mão': 'Tí, Dần, Mão, Ngọ, Mùi, Dậu',
	'Dậu': 'Tí, Dần, Mão, Ngọ, Mùi, Dậu',
	'Thìn': 'Dần, Thìn, Tỵ, Thân, Dậu, Hợi',
	'Tuất': 'Dần, Thìn, Tỵ, Thân, Dậu, Hợi',
	'Tỵ': 'Sửu, Thìn, Ngọ, Mùi, Tuất, Hợi',
	'Hợi': 'Sửu, Thìn, Ngọ, Mùi, Tuất, Hợi',
	'Tí': 'Tí, Sửu, Mão, Ngọ, Thân, Dậu',
	'Ngọ': 'Tí, Sửu, Mão, Ngọ, Thân, Dậu',
	'Sửu': 'Dần, Mão, Tỵ, Thân, Tuất, Hợi',
	'Mùi': 'Dần, Mão, Tỵ, Thân, Tuất, Hợi'
}

module.exports = function (cDay) {
	zhi = cDay.split(" ")[1]
	return goodHoursInDayTable[zhi]
}