const INT = require('./INT')
const SunLongitude = require('./SunLongitude');

/* Compute sun position at midnight of the day with the given Julian day number. 
 * The time zone if the time difference between local time and UTC: 7.0 for UTC+7:00.
 * The function returns a number between 0 and 11. 
 * From the day after March equinox and the 1st major term after March equinox, 0 is returned. 
 * After that, return 1, 2, 3 ... 
 */
module.exports = function (dayNumber, timeZone) {
	return INT(SunLongitude(dayNumber - 0.5 - timeZone/24)/Math.PI*6);
}