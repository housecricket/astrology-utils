const getSunLongitude2 = require('./SunLongitude2')
const jdFromDate = require('./jdFromDate')
const INT = require('./INT')
/*
    This function will return the solar term of the day
    Parameter
        - dd: int
            Solar day 
        - mm: int
            Solar Month
        - yy: int
            Solar Year
    Return 
        - String
            Containing solar term of day
*/
var solarTermsTable = {
    0	: 'Xuân Phân',
	15	: 'Thanh Minh',
	30	: 'Cốc Vũ',
	45	: 'Lập Hạ',
	60	: 'Tiểu Mãn',
	75	: 'Mang Chủng',
	90	: 'Hạ Chí',
	105	: 'Tiểu Thử',
	120	: 'Đại Thử',
	135	: 'Lập Thu',
	150	: 'Xử Thử',
	165	: 'Bạch Lộ',
	180	: 'Thu Phân',
	195	: 'Hàn Lộ',
	210	: 'Sương Giáng',
	225	: 'Lập Đông',
	240	: 'Tiểu Tuyết',
	255	: 'Đại Tuyết',
	270	: 'Đông Chí',
	285	: 'Tiểu Hàn',
	300	: 'Đại Hàn',
	315 : 'Lập Xuân',
	330 : 'Vũ Thủy',
	345	: 'Kinh Trập'
}

module.exports = function(dd, mm, yy){
    var jdn = jdFromDate(dd,mm,yy)
	var sunLongitude, dayBefore, solarTermBefore, solarTermNow
	for (var i = 0; i<=24; i+=12){
		dayBefore = INT(getSunLongitude2(jdn-1 - 7/24, i))
		if (solarTermsTable[dayBefore]){
			solarTermBefore = solarTermsTable[dayBefore]
			break
		}
	}
	for (var i = 0; i<=24; i+=12){
		sunLongitude = INT(getSunLongitude2(jdn - 7/24, i))
		solarTermNow = solarTermsTable[sunLongitude]
		if (solarTermNow && solarTermNow !== solarTermBefore){
			return solarTermNow
		}
	}
	return ''
}