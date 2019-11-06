const GoodDaysTable ={
	'Dần,Thân'	: 'Tuất,Mùi,Tỵ,Thìn,Sửu,Tí',
	'Mão,Dậu' 	: 'Tí,Dậu,Mùi,Ngọ,Mão,Dần',
	'Thìn,Tuất'	: 'Dần,Hợi,Dậu,Thân,Tỵ,Thìn',
	'Tỵ,Hợi'	: 'Thìn,Sửu,Hợi,Tuất,Mùi,Ngọ',
	'Tí,Ngọ'	: 'Ngọ,Mão,Tí,Sửu,Thân,Dậu',
	'Sửu,Mùi'	: 'Thân,Tỵ,Dần,Mão,Tuất,Hợi'
}
module.exports = function (cMonth, cDay) {
	let zhiMonth = cMonth.split(" ")[1]
	let zhiDay = cDay.split(" ")[1]
	for (let[key, value] of Object.entries(GoodDaysTable)){
		if (key.split(",").includes(zhiMonth)){
			if(value.split(",").includes(zhiDay)){
				return true
			}
		}
	}
	return false
}