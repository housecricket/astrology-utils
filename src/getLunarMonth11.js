const jdFromDate = require('./jdFromDate');
const INT = require('./INT');
const getNewMoonDay = require('./getNewMoonDay');
const getSunLongitude = require('./getSunLongitude');

/* Find the day that starts the luner month 11 of the given year for the given time zone */
module.exports = function (yy, timeZone) {
	var k, off, nm, sunLong;
	//off = jdFromDate(31, 12, yy) - 2415021.076998695;
	off = jdFromDate(31, 12, yy) - 2415021;
	k = INT(off / 29.530588853);
	nm = getNewMoonDay(k, timeZone);
	sunLong = getSunLongitude(nm, timeZone); // sun longitude at local midnight
	if (sunLong >= 9) {
		nm = getNewMoonDay(k-1, timeZone);
	}
	return nm;
}