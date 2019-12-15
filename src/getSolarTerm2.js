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

var solarTermsTable1 = [
    'Xuân Phân',
    'Thanh Minh',
    'Cốc Vũ',
    'Lập Hạ',
    'Tiểu Mãn',
    'Mang Chủng',
    'Hạ Chí',
    'Tiểu Thử',
    'Đại Thử',
    'Lập Thu',
    'Xử Thử',
    'Bạch Lộ',
    'Thu Phân',
    'Hàn Lộ',
    'Sương Giáng',
    'Lập Đông',
    'Tiểu Tuyết',
    'Đại Tuyết',
    'Đông Chí',
    'Tiểu Hàn',
    'Đại Hàn',
    'Lập Xuân',
    'Vũ Thủy',
    'Kinh Trập'
]

var solarTermsTable2 = {
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

var nextJdnSolarterm = function(jdn, nextSolarterm){
    count = 1
    while(true) {
        for (let j =0; j<=24; j+=12){
            let sunLongitude = INT(getSunLongitude2(jdn + count- 7/24, j))
            let solarTerm = solarTermsTable2[sunLongitude]
            if (solarTerm === nextSolarterm){
                return count
            }
        }
        count+=1
    }
}

module.exports = function(dd, mm, yy){
    var jdn = jdFromDate(dd,mm,yy)
	var sunLongitude, dayBefore, solarTermBefore, solarTermNow
	for (let i = 0; i<=24; i+=12){
        dayBefore = INT(getSunLongitude2(jdn-1 - 7/24, i))
		if (solarTermsTable2[dayBefore]){
            solarTermBefore = solarTermsTable2[dayBefore]
			break
		}
	}
	for (let j = 0; j<=24; j+=12){
		sunLongitude = INT(getSunLongitude2(jdn - 7/24, j))
		solarTermNow = solarTermsTable2[sunLongitude]
		if (solarTermNow && solarTermNow !== solarTermBefore){
			return solarTermNow
		}
    }
    
    sunLongitude = INT(getSunLongitude2(jdn - 7/24, 12))
    currentIdx = parseInt(sunLongitude / 15)
    nextIdx = currentIdx + 1 > 23 ? 0 : currentIdx + 1
    currentSolarTerm = solarTermsTable1[currentIdx]
    nextSolarTerm = solarTermsTable1[nextIdx]
    duration = nextJdnSolarterm(jdn, nextSolarTerm)

	return {'currentSolarTerm': currentSolarTerm, 'currentJdn' : jdn, 'nextSolarTerm': nextSolarTerm, 'nextJdn': jdn + duration}
}