const INT = require('./INT')

/* Compute the longitude of the sun at any time. This function will be used for calculate Solar Term
 * Parameter: floating number jdn, the number of days since 1/1/4713 BC noon
 * Algorithm from: "Astronomical Algorithms" by Jean Meeus, 1998
 */

module.exports = function(jdn, hh){
    if (hh === 24){
        hh -= 1
    }
    var mm = 59, ss=0;
	jdn = (jdn + (hh-12)/24 + mm/1440 + ss/ 86400);
	var T, T2, dr, M, L0, DL, lambda, theta, omega;
	T = (jdn - 2451545) / 36525;
	T2 = T*T;
	dr = Math.PI/180;
	L0 = 280.46645 + 36000.76983*T + 0.0003032*T2;
	M = 357.52910 + 35999.05030*T - 0.0001559*T2 - 0.00000048*T*T2;
	DL = (1.914600 - 0.004817*T - 0.000014*T2)*Math.sin(dr*M);
	C = DL + (0.01993 - 0.000101*T)*Math.sin(dr*2*M) + 0.000290*Math.sin(dr*3*M);
	theta = L0 + C;
	lambda = theta - 0.00569 - 0.00478 * Math.sin(125.04 - 1934.136*T*dr);
	lambda = theta - 360 *INT(theta/360);
	return lambda;
}