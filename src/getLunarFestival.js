const lunarFestivalTable = [
    '0101*Tết Nguyên Đán',
	'0115*Tết Nguyên Tiêu',
	'0303*Tết Hàn Thực',
	'0310*Giỗ tổ Hùng Vương',
	'0415*Lễ Phật Đản',
	'0505*Tết Đoan Ngọ',
	'0715*Lễ Vu Lan',
	'0815*Tết Trung Thu',
	'0909*Tết Trùng Cửu',
	'1010*Tết Thường Tân',
	'1015*Tết Hạ Nguyên',
    '1223*Tiễn ông táo về trời'
]


module.exports = function(lDay, lMonth){

    // This function used to get festival of lunar lDay
    // Parameters:
    //     lDay: int   
    //         lunar day
    //     lMonth: int     
    //         lunar month 
    // Return:
    //     Return string containing festival of current lunar day, lunar month

    for (var i=0, item; item=lunarFestivalTable[i]; i++){
		if(item.match( /^(\d{2})(\d{2})([\*](.+))/)){
			if(Number(RegExp.$1) == lMonth){
				if(Number(RegExp.$2) == lDay){
					return RegExp.$4;
				}
			}
		}
	}
	return ''
}
