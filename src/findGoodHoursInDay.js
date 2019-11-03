const goodHoursInDayTable = {
	'Dần,Thân': 'Tí, Sửu, Thìn, Tỵ, Mùi, Tuất',
	'Mão,Dậu': 'Tí, Dần, Mão, Ngọ, Mùi, Dậu',
	'Thìn,Tuất': 'Dần, Thìn, Tỵ, Thân, Dậu, Hợi',
	'Tỵ,Hợi': 'Sửu, Thìn, Ngọ, Mùi, Tuất, Hợi',
	'Tí,Ngọ': 'Tí, Sửu, Mão, Ngọ, Thân, Dậu',
	'Sửu,Mùi': 'Dần, Mão, Tỵ, Thân, Tuất, Hợi'
}

module.exports = function (day) {
	for (const key in goodHoursInDayTable){
		if (key.split(",").includes(day)){
			return goodHoursInDayTable[key]
		}
	}
}