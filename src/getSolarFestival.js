const solarFestivalTable = [
    '0101*Tết Dương Lịch',
	'0214*Lễ Tình Nhân',
	'0227*Ngày thầy thuốc Việt Nam',
	'0308*Ngày quốc tế phụ nữ',
	'0401*Ngày cá tháng tư',
	'0430*Ngày giải phóng miền Nam',
	'0501*Ngày quốc tế lao động',
	'0519*Ngày sinh chủ tịch Hồ Chí Minh',
	'0601*Ngày quốc tế thiếu nhi',
	'0628*Ngày gia đình Việt Nam',
	'0727*Ngày thương binh liệt sĩ',
	'0902*NgàyQuốc Khánh',
	'1120*Ngày nhà giáo Việt Nam',
	'1224*Ngày giáng sinh',
	'1224*Ngày thành lập quân đội nhận dân Việt Nam'
]


module.exports = function(sDay, sMonth){

    // This function used to get festival of solar day
    // Parameters:
    //     sDay: int   
    //         solar day
    //     sMonth: int     
    //         solar month 
    // Return:
    //     Return string containing festival of current solar day, solar month

    for (var i=0, item; item=solarFestivalTable[i]; i++){
		if(item.match( /^(\d{2})(\d{2})([\*](.+))/)){
			if(Number(RegExp.$1) == sMonth){
				if(Number(RegExp.$2) == sDay){
					return RegExp.$4;
				}
			}
		}
	}
	return ''
}
