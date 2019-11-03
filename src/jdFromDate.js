const INT = require('./INT')

/* Compute the (integral) Julian day number of day dd/mm/yyyy, i.e., the number 
 * of days between 1/1/4713 BC (Julian calendar) and dd/mm/yyyy. 
 * Formula from http://www.tondering.dk/claus/calendar.html
 */
module.exports = function (dd, mm, yy) {
	var a, y, m, jd;
	a = INT((14 - mm) / 12);
	y = yy+4800-a;
	m = mm+12*a-3;
	jd = dd + INT((153*m+2)/5) + 365*y + INT(y/4) - INT(y/100) + INT(y/400) - 32045;
	if (jd < 2299161) {
		jd = dd + INT((153*m+2)/5) + 365*y + INT(y/4) - 32083;
	}
	return jd;
}