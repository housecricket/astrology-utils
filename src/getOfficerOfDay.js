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

const officerTable = [ "Kiên*Tốt với xuất hành, giá thú nhưng tránh động thổ", 
                    "Trừ*Tốt mọi việc", 
                    "Mãn*Nên cầu tài, cầu phúc, tế tự", 
                    "Bình*Nên cầu tài, cầu phúc, tế tự", 
                    "Định*Tốt về cầu tài, ký hợp đồng, yến tiệc. Tránh kiện tụng, tranh chấp, chữa bệnh", 
                    "Chấp*Tốt cho khởi công xây dựng. Tránh xuất hành, di chuyển, khai trương", 
                    "Phá*Nên chữa bệnh, phá dỡ nhà, đồ vật", 
                    "Nguy*Xấu mọi việc", 
                    "Thành*Tốt cho xuất hành, khai trương, giá thú. Tránh kiện tụng, tranh chấp", 
                    "Thâu*Thu hoạch tốt. Kỵ khởi công, xuất hành, an táng", 
                    "Khai*Tốt mọi việc trừ động thổ, an táng", 
                    "Bế*Xấu mọi việc trừ đắp đê, lấp hố, rãnh"
                ];

module.exports = function(dd, mm, yy){
    var pivot = jdFromDate(23,12,1940)
    var thisDay = jdFromDate(dd,mm,yy)
    var count = 0
	for (var i = pivot; i <=thisDay; i++){
        var date = jdToDate(i)
		const solarTerm = getSolarTerm(date.dd,date.mm,date.yy)
		if (solarTerm != '' && solarTerm != "Vũ Thủy" && solarTerm != "Xuân Phân" &&
		solarTerm != "Cốc Vũ" && solarTerm != "Tiểu Mãn" && solarTerm != "Hạ Chí" &&
		solarTerm != "Đại Thử" && solarTerm != "Xử Thử" && solarTerm != "Thu Phân" &&
		solarTerm != "Sương Giáng" && solarTerm != "Tiểu Tuyết" && solarTerm != "Đông Chí" &&
		solarTerm != "Đại Hàn"){
			count++
		}
    }
    offset = thisDay - pivot - count
    officer = officerTable[offset % 12].split("*")[0]
    shouldDo = officerTable[offset % 12].split("*")[1]
    result = {}
    result[officer] = shouldDo
	return result
}