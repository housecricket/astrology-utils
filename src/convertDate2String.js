module.exports = function convertDateToString(sDate){
    var days = ["Chủ nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"]
    var months = ["Tháng Một", "Tháng Hai", "Tháng Ba", "Tháng Tư", "Tháng Năm", " Tháng Sáu", 
              "Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một", "Tháng Mười Hai"]
    var dayOfWeek = days[sDate.getDay()]
    var day = sDate.getUTCDate()
    var month = months[sDate.getUTCMonth()]
    var year = sDate.getUTCFullYear()
    return "" + dayOfWeek + ", Ngày " + day + " " + month + ", năm " + year
}