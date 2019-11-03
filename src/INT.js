/* Discard the fractional part of a number, e.g., INT(3.2) = 3 */
module.exports = function (d) {
	return Math.floor(d);
}