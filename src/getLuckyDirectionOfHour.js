const luckyDirection = ["Đông Bắc", "Tây Bắc", "Tây Nam", "Chính Nam", "Đông Nam"]
const Gan = new Array('Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quí');


module.exports = (cDay) =>{
    /*
        This function get the lucky direction of the day
        Parameters:
            cDay: string
                Gan zhi day of this day
        Return:
            Return lucky direction
    */
    gan = cDay.split(" ")[0]
	// console.log(Gan.indexOf(gan))
	return luckyDirection[Gan.indexOf(gan) % 5]
}