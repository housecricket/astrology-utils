const badStarsTable = {
	"Thiên cương*Xấu trong mọi việc lớn"				:"Tỵ,Tí,Mùi,Dần,Dậu,Thìn,Hợi,Ngọ,Sửu,Thân,Mão,Tuất",
	"Thụ tử*Xấu trong mọi việc lớn"					:"Tuất,Thìn,Hợi,Tỵ,Tí,Ngọ,Sửu,Mùi,Dần,Thân,Mão,Dậu",
	"Đại hao,Tử Khí,Quan Phù*Xấu trong mọi việc lớn"	:"Ngọ,Mùi,Thân,Dậu,Tuất,Hợi,Tí,Sửu,Dần,Mão,Thìn,Tỵ",
	"Tiểu hao*Kỵ xuất nhập, tiền tài"					:"Tỵ,Ngọ,Mùi,Thân,Dậu,Tuất,Hợi,Tí,Sửu,Dần,Mão,Thìn",
	"Sát chủ*Xấu cho mọi việc"					:"Tí,Tỵ,Mùi,Mão,Thân,Tuất,Sửu,Hợi,Ngọ,Dậu,Dần,Thìn",
	"Thiên Hoả,Thiên Ngục*Kiêng làm nhà"					:"Tí,Mão,Ngọ,Dậu,Tí,Mão,Ngọ,Dậu,Tí,Mão,Ngọ,Dậu",
	"Địa Hoả*Kiêng làm nhà"					:"Tuất,Dậu,Thân,Mùi,Ngọ,Tỵ,Thìn,Mão,Dần,Sửu,Tí,Hợi",
	"Hoả Tai*Kiêng làm nhà"					:"Sửu,Mùi,Dần,Thân,Mão,Dậu,Thìn,Tuất,Tỵ,Hợi,Tí,Ngọ",
	"Nguyệt phá*Kiêng làm nhà"				:"Thân,Tuất,Tuất,Hợi,Sửu,Sửu,Dần,Thìn,Thìn,Tỵ,Mùi,Mùi",
	"Băng tiêu ngoạ giải*Kiêng làm nhà và mọi việc lớn"		:"Tỵ,Tí,Sửu,Thân,Mão,Tuất,Hợi,Ngọ,Mùi,Dần,Dậu,Thìn",
	"Thổ cấm*Kiêng động thổ"					:"Hợi,Hợi,Hợi,Dần,Dần,Dần,Tỵ,Tỵ,Tỵ,Thân,Thân,Thân",
	"Thổ kỵ,vãng vong*Kiêng xuất hành giá thú"			:"Dần,Tỵ,Thân,Hợi,Mão,Ngọ,Dậu,Tí,Thìn,Mùi,Tuất,Sửu",
	"Cô thần*Kiêng giá thú"					:"Tuất,Hợi,Tí,Sửu,Dần,Mão,Thìn,Tỵ,Ngọ,Mùi,Thân,Dậu",
	"Quả tú*Kiêng giá thú"					:"Thìn,Tỵ,Ngọ,Mùi,Thân,Dậu,Tuất,Hợi,Tí,Sửu,Dần,Mão",
	"Trùng tang*Kỵ hôn nhân, an táng, cải táng"				:"Giáp,Ất,Mậu,Bính,Đinh,Kỷ,Canh,Tân,Kỷ,Nhân,Quý,Mậu",
	"Trùng phục*Kỵ hôn nhân, an táng, cải táng"				:"Canh,Tân,Kỷ,Nhâm,Quý,Mậu,Giáp,Ất,Kỷ,Bính,Đinh,Mậu",
	"Thiên Lại*Xấu trong mọi việc"	:	"Dậu,Ngọ,Mão,Tí,Dậu,Ngọ,Mão,Tí,Dậu,Ngọ,Mão,Tí",
	"Tiểu hồng sa*Xấu cho mọi việc"	: "Tỵ,Dậu,Sửu,Tỵ,Dậu,Sửu,Tỵ,Dậu,Sửu,Tỵ,Dậu,Sửu",
	"Thiên Tặc*Xấu với khởi tạo, động thổ, nhập trạch, khai trương": "Thìn,Dậu,Dần,Mùi,Tí,Tỵ,Tuất,Mão,Thân,Sửu,Ngọ,Hợi",
	"Địa Tặc*Xấu cho việc khởi tạo, an táng, động thổ, xuất hành" : "Sửu,Tí,Hợi,Tuất,Dậu,Thân,Mùi,Ngọ,Tỵ,Thìn,Mão,Dần",
	"Nguyệt Hỏa,Độc Hỏa*Xấu với việc làm bếp, lợp nhà"	: "Tỵ,Thìn,Mão,Dần,Sửu,Tí,Hợi,Tuất,Dậu,Thân,Mùi,Ngọ",
	"Nguyệt Yếm Đại Hoạ*Xấu với xuất hành,giá thú": 	"Tuất,Dậu,Thân,Mùi,Ngọ,Tỵ,Thìn,Mão,Dần,Sửu,Tý,Hợi",
	"Nguyệt Kiến Chuyển Sát*Xấu cho việc động thổ"	:	"Mão,Mão,Mão,Ngọ,Ngọ,Ngọ,Dậu,Dậu,Dậu,Tí,Tí,Tí",
	"Lỗ Ban Sát*Xấu cho khởi tạo"	:	"Tí,Tí,Tí,Mão,Mão,Mão,Ngọ,Ngọ,Ngọ,Dậu,Dậu,Dậu",
	"Phủ Đầu Sát*Xấu cho khởi tạo"	:	"Thìn,Thìn,Thìn,Mùi,Mùi,Mùi,Dậu,Dậu,Dậu,Tí,Tí,Tí",
	"Nguyệt Hình*Xấu cho mọi việc"	:	"Tỵ,Tí,Thìn,Thân,Ngọ,Sửu,Dần,Dậu,Mùi,Hợi,Mão,Tuất",
	"Tội Chỉ*Xấu cho việc tế tụng, kiện tụng" 	: 	"Ngọ,Tí,Mùi,Sửu,Thân,Dần,Dậu,Mão,Tuất,Thìn,Hợi,Tỵ",
	"Nguyệt Hư,Nguyệt Sát*Xấu cho việc giá thú, mở cửa, mở hàng"	:	"Sửu,Tuất,Mùi,Thìn,Sửu,Tuất,Mùi,Thìn,Sửu,Tuất,Mùi,Thìn",
	"Hoàng Sa*Xấu với việc xuất hành"	:	"Ngọ,Dần,Tí,Ngọ,Dần,Tí,Ngọ,Dần,Tí,Ngọ,Dần,Tí",
	"Lục Bất Thành*Xấu với việc xây dựng"	:	"Dần,Ngọ,Tuất,Tỵ,Dậu,Sửu,Thân,Tí,Thìn,Hợi,Mão,Mùi",
	"Nhân Cách*Xấu với giá thú, khởi tạo"	:	"Dậu,Mùi,Tỵ,Mão,Sửu,Hợi,Dậu,Mùi,Tỵ,Mão,Sửu,Hợi",
	"Thần Cách*Xấu với tế tự"	:	"Tỵ,Mão,Sửu,Hợi,Dậu,Mùi,Tỵ,Mão,Sửu,Hợi,Dậu,Mùi",
	"Bạch Hổ*Kỵ an táng"	:	"Ngọ,Thân,Tuất,Tí,Dần,Thìn,Ngọ,Thân,Tuất,Tí,Dần,Thìn",
	"Huyền Vũ*Kỵ an táng"	:	"Dậu,Hợi,Sửu,Mão,Tỵ,Mùi,Dậu,Hợi,Sửu,Mão,Tỵ,Mùi",
	"Câu Trận*Kỵ an táng"	:	"Hợi,Sửu,Mão,Tỵ,Mùi,Dậu,Hợi,Sửu,Mão,Tỵ,Mùi,Dậu",
	"Lôi công*Kỵ an táng"	:	"Dần,Hợi,Tỵ,Thân,Dần,Hợi,Tỵ,Thân,Dần,Hợi,Tỵ,Thân",
	"Cô Thần*Xấu cho việc giá thú"	:	"Tuất,Hợi,Tí,Sửu,Dần,Mão,Thìn,Tỵ,Ngọ,Mùi,Thân,Dậu",
	"Ly Sàng*Kỵ giá thú"	:	"Dậu,Dậu,Dậu,Dần,Dần,Dần,Tuất,Tuất,Tuất,Tỵ,Tỵ,Tỵ",
	"Tứ thời cô quả*Kỵ giá thú"	:	"Sửu,Sửu,Sửu,Thìn,Thìn,Thìn,Mùi,Mùi,Mùi,Tuất,Tuất,Tuất",
	"Không Phòng*Kỵ giá thú"	:	"Thìn,Tỵ,Tí,Tuất,Hợi,Mùi,Dần,Mão,Ngọ,Thân,Dậu,Sửu",
	"Kiếp sát*Kỵ xuất hành, giá thú, an táng, xây dựng"	:	"Hợi,Thân,Tỵ,Dần,Hợi,Thân,Tỵ,Dần,Hợi,Thân,Tỵ,Dần",
	"Địa phá*Kỵ xây dựng"	:	"Hợi,Tí,Sửu,Dần,Mão,Thìn,Tỵ,Ngọ,Mùi,Thân,Dậu,Tuất",
	"Thổ phủ*Kỵ xây dựng, động thổ"	:	"Dần,Mão,Thìn,Tỵ,Ngọ,Mùi,Thân,Dậu,Tuất,Hợi,Tí,Sửu",
	"Thổ ôn*Kỵ xây dựng, đào ao, đào giếng, xấu về tế tự"	:	"Thìn,Tỵ,Ngọ,Mùi,Thân,Dậu,Tuất,Hợi,Tí,Sửu,Dần,Mão",
	"Thiên ôn*Kỵ xây dựng"	:	"Mùi,Tuất,Thìn,Dần,Ngọ,Tí,Dậu,Thân,Tỵ,Hợi,Sửu,Mão",
	"Hoang Vu*Xấu cho mọi việc"	:	"Tỵ*Dậu*Sửu,Tỵ*Dậu*Sửu,Tỵ*Dậu*Sửu,Thân*Tí*Thìn,Thân*Tí*Thìn,Thân*Tí*Thìn,Hợi*Mão*Mùi,Hợi*Mão*Mùi,Hợi*Mão*Mùi,Dần*Ngọ*Tuất,Dần*Ngọ*Tuất,Dần*Ngọ*Tuất",
	"Phi ma sát*Kỵ giá thú nhập trạch"	:	"Tí,Dậu,Ngọ,Mão,Tí,Dậu,Ngọ,Mão,Tí,Dậu,Ngọ,Mão",
	"Ngũ quỷ*Kỵ xuất hành"	:	"Ngọ,Dần,Thìn,Dậu,Mão,Thân,Sửu,Tỵ,Tí,Hợi,Mùi,Tuất",
	"Hà Khôi,Cẩu giảo*Kỵ khởi công xây dựng nhà cửa, xấu cho mọi việc"	:	"Hợi,Ngọ,Sửu,Thân,Mão,Tuất,Tỵ,Tí,Mùi,Dần,Dậu,Thìn",
	"Cửu không*Kỵ xuất hành, cầu tài, khai trương"	:	"Thìn,Sửu,Tuất,Mùi,Mão,Tí,Dậu,Ngọ,Dần,Hợi,Thân,Tỵ",
	"Tam tang*Kỵ khởi tạo, giá thú, an táng"	:	"Thin,Thìn,Thìn,Mùi,Mùi,Mùi,Tuất,Tuất,Tuất,Sửu,Sửu,Sửu",
	"Ngũ hư*Kỵ giá thú, khởi tạo, an táng"	:	"Tỵ,Dậu,Sửu,Thân,Tí,Thìn,Hợi,Mão,Mùi,Dần,Ngọ,Tuất",
}

module.exports = function (lDay, lMonth, cDay) {
    gan = cDay.split(" ")[0]
	zhi = cDay.split(" ")[1]
	badStars = []

	if (lDay === 5 || lDay === 14 || lDay === 23){
		badStars.push('Nguyệt Kỵ')
	}

	if (lDay === 3 || lDay === 7 ||lDay === 13 || lDay === 18 
		|| lDay === 22 ||lDay === 27){
		badStars.push('Tam Nương')
	}

	for (let [key, value] of Object.entries(badStarsTable)){
		valueArr = value.split(",")
		ganZhiBadStar = valueArr[lMonth-1].split("*")
		if (ganZhiBadStar.includes(gan) || ganZhiBadStar.includes(zhi) ){
			arr = key.split("*")
			badStarArr = arr[0]
			notDo = arr[1]
			if (!badStarArr.includes(",")){
				badStars.push(badStarArr)
			}else{
				for (const v of badStarArr.split(",")){
					badStars.push(v)
				}
			}
			
		}
	}
	return badStars
}