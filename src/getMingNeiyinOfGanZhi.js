const MingNeiyiTable = {
	"Giáp Tí,Ất Sửu": "Hải Trung Kim",
	"Nhâm Thân,Quý Dậu": "Kiếm Phong Kim",
	"Canh Thìn,Tân Tỵ": "Bạch lạp Kim",
	"Mậu Tí,Kỷ Sửu": "Tích Lịch Hỏa",
	"Bính Thân,Đinh Dậu": "Sơn Hạ Hỏa",
	"Giáp Thìn,Ất Tỵ": "Phú Đăng Hỏa",
	"Nhâm Tí,Quý Sửu": "Tăng Đố Mộc",
	"Canh Thân,Tân Dậu": "Thạch Lựu Mộc",
	"Mậu Thìn,Kỷ Tỵ": "Ðại Lâm Mộc",
	"Bính Tí,Đinh Sửu": "Giang Hạ Thủy",
	"Giáp Thân,Ất Dậu": "Tuyền Trung Thủy",
	"Nhâm thìn,Quý Tỵ": "Trường Lưu Thủy",
	"Canh Tí,Tân Sửu": "Bích Thượng Thổ",
	"Mậu Thân,Kỷ Dậu": "Đại Dịch Thổ",
	"Bính Thìn,Đinh Tỵ": "Sa Trung Thổ",
	"Giáp Ngọ,Ất Mùi": "Sa Trung Kim",
	"Nhâm Dần,Quý Mão": "Kim Bạch Kim",
	"Canh Tuất,Tân Hợi": "Thoa Xuyến Kim",
	"Mậu Ngọ,Kỷ Mùi": "Thiền Thượng Hỏa",
	"Bính Dần,Đinh Mão": "Lư Trung Hỏa",
	"Giáp Tuất,Ất Hợi": "Sơn Đầu Hỏa",
	"Nhâm Ngọ,Quý Mùi": "Dương Liễu Mộc",
	"Canh Dần,Tân Mão": "Tùng Bách Mộc",
	"Mậu Tuất,Kỷ Hợi": "Bình Địa Mộc",
	"Bính Ngọ,Đinh Mùi": "Thiên Hà Thủy",
	"Giáp Dần,Ất Mão": "Ðại Khe Thủy",
	"Nhâm Tuất,Qúi Hợi": "Ðại Hải Thủy",
	"Canh Ngọ,Tân Mùi": "Lộ Bàng Thổ ",
	"Mậu Dần,Kỷ Mão": "Thành Đầu Thổ",
	"Bính Tuất,Đinh Hợi": "Ốc Thượng Thổ"
}
module.exports = function (ganZhi) {
	for (const key in MingNeiyiTable) {
		if (key.includes(ganZhi)) {
			return MingNeiyiTable[key]
		}
	}
	return " "
}

