const getSunLongitude = require('./getSunLongitude')
const getNewMoonDay = require('./getNewMoonDay')
const INT = require('./INT')

/* Find the index of the leap month after the month starting on the day a11. */
module.exports = function(a11, timeZone) {
	var k, last, arc, i;
	k = INT((a11 - 2415021.076998695) / 29.530588853 + 0.5);
	last = 0;
	i = 1; // We start with the month following lunar month 11
	arc = getSunLongitude(getNewMoonDay(k+i, timeZone), timeZone);
	do {
		last = arc;
		i++;
		arc = getSunLongitude(getNewMoonDay(k+i, timeZone), timeZone);
	} while (arc != last && i < 14);
	return i-1;
}
