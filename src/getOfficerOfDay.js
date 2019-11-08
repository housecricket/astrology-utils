const jdFromDate = require('./jdFromDate');
const jdToDate = require('./jdToDate')
const getSolarTerm = require('./getSolarTerm');

/*
    This function will return "Truc" of the day
    Parameter:
        - dd: int
            Solar day
        - mm: int
            Solar month
        - yy: int
            Solar year
    Return:
        - String
            "Truc" of day
*/

const trucTable = ["Kiên", "Trừ", "Mãn", "Bình", "Định", "Chấp", "Phá", "Nguy", "Thành", "Thâu", "Khai", "Bế"];

module.exports = function(dd, mm, yy){
    var pivot = jdFromDate(23,12,1940)
    var thisDay = jdFromDate(dd,mm,yy)
    var count = 0
	for (var i = pivot; i <=thisDay; i++){
        var date = jdToDate(i)
		const tietKhi = getSolarTerm(date.dd,date.mm,date.yy)
		if (tietKhi != '' && tietKhi != "Vũ Thủy" && tietKhi != "Xuân Phân" &&
		tietKhi != "Cốc Vũ" && tietKhi != "Tiểu Mãn" && tietKhi != "Hạ Chí" &&
		tietKhi != "Đại Thử" && tietKhi != "Xử Thử" && tietKhi != "Thu Phân" &&
		tietKhi != "Sương Giáng" && tietKhi != "Tiểu Tuyết" && tietKhi != "Đông Chí" &&
		tietKhi != "Đại Hàn"){
			count++
		}
    }
	offset = thisDay - pivot - count
	return trucTable[offset % 12]
}