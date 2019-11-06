const INT = require('./INT')

/*
    This function will return date from juliusday with format dd/mm/yy
    Parameter:
        jd: number
            Julius day
    Return: 
        Object:
            Containing day, month, year of solar calendar
*/

module.exports = function(jd){
    var a, b, c, d, e, m, day, month, year;
	if (jd > 2299160) { 
		a = jd + 32044;
		b = INT((4*a+3)/146097);
		c = a - INT((b*146097)/4);
	} else {
		b = 0;
		c = jd + 32082;
	}
	d = INT((4*c+3)/1461);
	e = c - INT((1461*d)/4);
	m = INT((5*e+2)/153);
	day = e - INT((153*m+2)/5) + 1;
	month = m + 3 - 12*INT(m/10);
	year = b*100 + d - 4800 + INT(m/10);
	return {dd: day, mm: month, yy: year}
}