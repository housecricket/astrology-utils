const ganValues = {
	"Giáp,Ất" 	: 1,
	"Bính,Đinh"	: 2,
	"Mậu,Kỷ"	: 3,
	"Canh,Tân"	: 4,
	"Nhâm,Quý"	: 5
}

const zhiValues = {
	"Tí,Sửu,Ngọ,Mùi"	: 0,
	"Dần,Mão,Thân,Dậu"	: 1,
	"Thìn,Tỵ,Tuất,Hợi"	: 2
}
const elementTable = ['Kim', 'Thuỷ', 'Hoả', 'Thổ', 'Mộc'];

module.exports = function(ganZhi) {
	var gan = ganZhi.split(" ")[0]
	var zhi = ganZhi.split(" ")[1]
	var ganValue, zhiValue
	for (const key in ganValues){
		if (key.split(",").includes(gan)){
			ganValue = ganValues[key]
			break
		}
	}

	for (const key in zhiValues){
		if (key.split(",").includes(zhi)){
			zhiValue = zhiValues[key]
			break
		}
	}
	
	elementValue = ganValue + zhiValue
    elementValue = elementValue > 5 ? elementValue - 5 : elementValue
    elementValue--;

	return elementTable[elementValue];
}