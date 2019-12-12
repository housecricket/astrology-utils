const goodStarsTable = {
	"Thiên đức*Tốt cho mọi việc"		: 	"Đinh,Thân,Nhâm,Tân,Hợi,Giáp,Quý,Dần,Bính,Ất,Tỵ,Canh",
	"Thiên đức hợp*Tốt cho mọi việc"	:	"Nhâm,Tỵ,Đinh,Bính,Dần,Kỷ,Mậu,Hợi,Tân,Canh,Thân,Ất",
	"Nguyệt đức*Tốt cho mọi việc"	: "Bính,Giáp,Nhâm,Canh,Bính,Giáp,Nhâm,Canh,Bính,Giáp,Nhâm,Canh",
	"Nguyệt đức hợp*Tốt cho mọi việc, Kỵ kiện tụng"	:	"Tân,Kỷ,Đinh,Ất,Tân,Kỷ,Đinh,Ất,Tân,Kỷ,Đinh,Ất",
	"Thiên Phú*Tốt cho mọi việc, nhất là xây dựng nhà cửa, khai trương và an táng"	:	"Thìn,Tỵ,Ngọ,Mùi,Thân,Dâu,Tuất,Hợi,Tí,Sửu,Dần,Mão",
	"Thiên giải*Tốt cho mọi việc"	: "Ngọ,Thân,Tuất,Tí,Dần,Thìn,Ngọ,Thân,Tuất,Tí,Dần,Thìn",
	"Thiên hỷ*Tốt cho mọi việc"		: "Tuất,Hợi,Tí,Sửu,Dần,Mão,Thìn,Tỵ,Ngọ,Mùi,Thân,Dậu",
	"Thiên quí*Tốt cho mọi việc"		: "Dần,Thân,Mão,Dậu,Thìn,Tuất,Tỵ,Hợi,Ngọ,Tí,Mùi,Sửu",
	"Tam hợp*Tốt cho mọi việc"		: "Ngọ,Mùi,Thân,Dậu,Tuất,Hợi,Tí,Sửu,Dần,Mão,Thìn,Tỵ",
	"Sinh khí*Tốt cho làm nhà, sửa nhà, động thổ"	: "Tí,Sửu,Dần,Mão,Thìn,Tỵ,Ngọ,Mùi,Thân,Dậu,Tuất,Hợi",
	"Thiên thành*Tốt cho việc cưới gả, giao dịch"	: "Mùi,Dậu,Hợi,Sửu,Mão,Tỵ,Mùi,Dậu,Mùi,Sửu,Mão,Tỵ",
	"Thiên quan*Tốt cho việc xuất hành, giao dịch*"	: "Tuất,Tí,Dần,Thìn,Ngọ,Thân,Tuất,Tí,Dần,Thìn,Ngọ,Thân",
	"Lộc mã*Tốt cho việc xuất hành, di chuyển"		: "Ngọ,Thân,Tuất,Tí,Dần,Thìn,Ngọ,Thân,Tuất,Tí,Dần,Thìn",
	"Giải thần*Giải trừ cát tinh, tốt cho việc tế tự, kiện tụng, giải oan"	: "Thân,Thân,Tuất,Tuất,Tí,Tí,Dần,Dần,Thìn,Thìn,Ngọ,Ngọ",
	"Thiên ân*Được hưởng phúc ân, tốt cho làm nhà, khai trương"		: "Tuất,Sửu,Dần,Tỵ,Dậu,Mão,Tí,Ngọ,Thân,Thìn,Thân,Mùi",
	"Nguyệt Không*Tốt cho việc sửa nhà, đặt giường"	: "Nhâm,Canh,Bính,Giáp,Nhâm,Canh,Bính,Giáp,Nhâm,Canh,Bính,Giáp",
	"Thánh Tâm*Tốt cho mọi việc, nhất là cầu phúc, tế tự" : "Hợi,Tỵ,Tí,Ngọ,Sửu,Mùi,Dần,Thân,Mão,Dậu,Thìn,Tuất",
	"Ngũ Phú*Tốt cho mọi việc": "Hợi,Dần,Tỵ,Thân,Hợi,Dần,Tỵ,Thân,Hợi,Dần,Tỵ,Thân",
	"Phúc Sinh*Tốt cho mọi việc": "Dậu,Mão,Tuất,Thìn,Hợi,Tỵ,Tí,Ngọ,Sửu,Mùi,Dần,Thân",
	"Cát Khánh*Tốt cho mọi việc": "Dậu,Dần,Hợi,Thìn,Sửu,Ngọ,Mão,Thân,Tỵ,Tuất,Mùi,Tí",
	"Thiên Tài,Kim Quỹ*Tốt cho việc cầu tài lộc, khai trương"	:	"Thìn,Ngọ,Thân,Tuất,Tí,Dần,Thìn,Ngọ,Thân,Tuất,Tí,Dần",
	"Địa Tài*Tốt cho việc cầu tài lộc, khai trương"	: "Tỵ,Mùi,Dậu,Hợi,Sửu,Mão,Tỵ,Mùi,Dậu,Hợi,Sửu,Mão",
	"Nguyệt Tài*Tốt cho việc cầu tài lộc, khai trương, xuất hành, di chuyển, giao dịch"	: "Ngọ,Tỵ,Tỵ,Mùi,Dậu,Hợi,Ngọ,Tỵ,Tỵ,Mùi,Dậu,Hợi",
	"Nguyệt Ân*Tốt cho việc cầu tài lộc, khai trương, xuất hành, di chuyển, giao dịch"	: "Bính,Đinh,Canh,Kỷ,Mậu,Tân,Nhâm,Quý,Canh,Ất,Giáp,Tân",
	"Thiên Phúc*Tốt cho mọi việc"	:	"Kỷ,Mậu,,Tân*Quý,Canh*Nhâm,,Ất,Giáp,,Đinh,Bính,",
	"Thiên Mã*Tốt cho xuất hành, cầu tài lộc, giao dịch"	: 	"Giáp,Tí,Dần,Thìn,Ngọ,Thân,Tuất,Tí,Dần,Thìn,Ngọ,Thân",
	"Dịch Mã*Tốt cho việc xuất hành"	: 	"Thân,Tỵ,Dần,Hợi,Thân,Tỵ,Dần,Hợi,Thân,Tỵ,Dần,Hợi",
	"Lục hợp*Tốt cho mọi việc"	:	"Hợi,Tuất,Dậu,Thân,Mùi,Ngọ,Tỵ,Thìn,Mão,Dần,Sửu,Tí",
	"Mẫu thương*Tốt cho việc cầu tài, khai trương"	:	"Hợi*Tí,Hợi*Tí,Hợi,Dần*Mão,Dần*Mão,Dần*Mão,Thìn*Sửu,Thìn*Sửu,Thìn*Sửu,Dậu*Thân,Dậu*Thân,Dậu*Thân",
	"Quan Nhật*Tốt cho mọi việc"	:	",Mão,,,Ngọ,,,Dậu,,,Tí,",
	"Phổ hộ*Tốt cho mọi việc"	:	"Thân,Dần,Dậu,Mão,Tuất,Thìn,Hợi,Tỵ,Tí,Ngọ,Sửu,Mùi",
	"Ích hậu*Tốt cho mọi việc nhất là cưới hỏi"	:	"Tí,Ngọ,Sửu,Mùi,Dần,Thân,Mão,Dậu,Thìn,Tuất,Tỵ,Hợi",
	"Tục thế*Tốt cho mọi việc nhất là cưới hỏi"	:	"Sửu,Mùi,Dần,Thân,Mão,Dậu,Thìn,Tuất,Tỵ,Hợi,Ngọ,Tí",
	"Minh Tinh*Tốt cho mọi việc"	:	"Thân,Tuất,Tí,Dần,Thìn,Ngọ,Thân,Tuất,Tí,Dần,Thìn,Ngọ",
	"Âm đức*Tốt cho mọi việc"	:	"Dậu,Mùi,Tỵ,Mão,Sửu,Hợi,Dậu,Mùi,Tỵ,Mão,Sửu,Hợi",
	"U vi tinh*Tốt cho mọi việc"	:	"Hợi,Thìn,Sửu,Ngọ,Mão,Thân,Tỵ,Tuất,Mùi,Tí,Dậu,Dần",
	"Mãn đức tính*Tốt cho mọi việc"	:	"Dần,Mùi,Thìn,Dậu,Ngọ,Hợi,Thân,Sửu,Tuất,Mão,Tí,Tỵ",
	"Kinh tâm*Tốt với tang tế"	:	"Mùi,Sửu,Thaa,Dần,Dậu,Mão,Tuất,Thìn,hợi,Tỵ,Tí,Ngọ",
	"Tuế hợp*Tốt cho mọi việc"	:	"Sửu,Tí,Hợi,Tuất,Dâu,Thân,Mùi,Ngọ,Tỵ,Thìn,Mão,Dần",
	"Hoạt diệu* Tốt nhưng gặp Thụ tử thì xấu"	:	"Tỵ,Tuất,Mùi,Tí,Dậu,Dần,Hợi,Thìn,Sửu,Ngọ,Mão,Thân",
	"Yếu yên*Tốt cho mọi việc nhất là giá thú"	:	"Dần,Thân,Mão,Dậu,Thìn,Tuất,Tỵ,Hợi,Ngọ,Tí,Mùi,Sửu",
	"Phúc hậu*Tốt cho cầu tài lộc, khai trương"	:	"Dần,Dần,Dần,Tỵ,Tỵ,Tỵ,Thân,Thân,Thân,Hợi,Hợi,Hợi",
	"Đại hồng sa*Tốt cho mọi việc"	:	"Tí*Sửu,Tí*Sửu,Tí*Sửu,Thìn*Tỵ,Thìn*Tỵ,Thìn*Tỵ,Ngọ*Mùi,Ngọ*Mùi,Ngọ*Mùi,Thân*Tuất,Thân*Tuất,Thân*Tuất",
	"Dân nhật,Thời đức*Tốt cho mọi việc"	:	"Ngọ,Ngọ,Ngọ,Dậu,Dậu,Dậu,Tí,Tí,Tí,Mão,Mão,Mão"

}

module.exports = function (lMonth, cDay) {
    gan = cDay.split(" ")[0]
	zhi = cDay.split(" ")[1]
	goodStars = {}
	for (let [key, value] of Object.entries(goodStarsTable)){
		valueArr = value.split(",")
		ganZhiGoodStar = valueArr[lMonth-1].split("*")

		if (ganZhiGoodStar.includes(gan) || ganZhiGoodStar.includes(zhi)){
			arr = key.split("*")
			goodStarArr = arr[0]
			shouldDo = arr[1]
			if (!goodStarArr.includes(",")){
				goodStars[goodStarArr] = shouldDo
			}else{
				for (const v of goodStarArr.split(",")){
					goodStars[v] = shouldDo
				}
			}
		}
	}
	return goodStars
}