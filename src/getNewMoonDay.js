const INT = require('./INT')
const NewMoon = require('./NewMoon')

/* Compute the day of the k-th new moon in the given time zone.
 * The time zone if the time difference between local time and UTC: 7.0 for UTC+7:00
 */
module.exports = function (k, timeZone) {
	return INT(NewMoon(k) + 0.5 + timeZone/24);
}