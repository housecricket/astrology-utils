const wealthDirections = {
	"Giáp,Ất" : "Đông Nam",
	"Bính,Đinh" : "Đông",
	"Mậu"	: "Bắc",
	"Kỷ"	: "Nam",
	"Canh,Tân" : "Tây Nam",
	"Nhâm" 	: "Tây",
	"Quý"	: "Tây Bắc"
}

module.exports = (cDay) =>{
    /* This function will return wealth direction of the day
        Parameters:
            cDay: String
                Gan Zhi of the day
        Return:
            Wealth direction of the day
    */

   var gan = cDay.split(" ")[0]
   for (const key in wealthDirections){
       if (key.split(",").includes(gan)){
           return wealthDirections[key]
       }
   }
}
