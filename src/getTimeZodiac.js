const Gan = new Array('Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý');
const Zhi = new Array('Tí', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi');

module.exports = function getTimeZodiac(cDay){
	var gan = cDay.split(" ")[0]
	var idxGan = 0
	switch(gan){
		case "Giáp":
		case "Kỷ":
			idxGan = 0
			break
		case "Ất":
		case "Canh":
			idxGan = 2
			break
		case "Bính":
		case "Tân":
			idxGan = 4
			break
		case "Đinh":
		case "Nhâm":
			idxGan = 6
			break
		case "Mậu":
		case "Quý":
			idxGan = 8
			break
	}

    idxZhi = 0
    result = []
    timeZodiac = {}
    timeZodiac['hour'] = "0"
    timeZodiac['ganzhi'] = Gan[idxGan] + " " + Zhi[idxZhi] 
	result.push(timeZodiac)
	for (let i = 2; i<23; i+=2){
        timeZodiac = {}
		idxZhi++
		idxGan++
		ganTime = idxGan % 10
        zhiTime = idxZhi % 12
        timeZodiac['hour'] = (i-1).toString()
        timeZodiac['ganzhi'] = Gan[ganTime] + " " + Zhi[zhiTime] 
        result.push(timeZodiac)
	} 
	
    timeZodiac = {}
    timeZodiac['hour'] = '23'
    timeZodiac['ganzhi'] = result[0]['ganzhi']
	result.push(timeZodiac)
	console.log(result[12])
	return result
}