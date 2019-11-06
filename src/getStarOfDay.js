const jdFromDate = require('./jdFromDate');       

const starsTable = ["Hư","Nguy","Thất","Bích","Khuê","Lâu","Vị","Mão","Tất","Chũy","Sâm","Tỉnh",
				"Quỷ","Liễu","Tinh","Trương","Dực","Chuẩn","Giác","Cang","Đê","Phòng",
                "Tâm","Vĩ","Cơ","Đẩu","Ngưu","Nữ"]
                
module.exports = function(sDay, sMonth, sYear) {
        pivot = jdFromDate(1,1,1995)
        jd = jdFromDate(sDay,sMonth,sYear)
        return (starsTable[Math.abs(pivot-jd) % 28])
}