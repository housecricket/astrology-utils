const getLunarMonth11 = require('./getLunarMonth11')
const getNewMoonDay = require('./getNewMoonDay')
const jdToDate = require('./jdToDate')

module.exports = function(lunarDay, lunarMonth, lunarYear, isLeapYear, timeZone){
    var k, a11, b11, off, leapOff, leapMonth, monthStart;
	if (lunarMonth < 11) {
		a11 = getLunarMonth11(lunarYear-1, timeZone);
		b11 = getLunarMonth11(lunarYear, timeZone);
	} else {
		a11 = getLunarMonth11(lunarYear, timeZone);
		b11 = getLunarMonth11(lunarYear+1, timeZone);
	}
	off = lunarMonth - 11;
	if (off < 0) {
		off += 12;
	}
	if (b11 - a11 > 365) {
		leapOff = getLeapMonthOffset(a11, timeZone);
		leapMonth = leapOff - 2;
		if (leapMonth < 0) {
			leapMonth += 12;
		}
		if (isLeapYear != 0 && lunarMonth != leapMonth) {
			return new Array(0, 0, 0);
		} else if (isLeapYear != 0 || off >= leapOff) {
			off += 1;
		}
	}
	k = Math.floor(0.5 + (a11 - 2415021.076998695) / 29.530588853);
    monthStart = getNewMoonDay(k+off, timeZone);
    solarDate = jdToDate(monthStart+lunarDay-1);
    return new Array(solarDate.dd, solarDate.mm, solarDate.yy)
}