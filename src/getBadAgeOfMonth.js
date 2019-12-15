const badAgeOfDayTable = {
	"Giáp Tí": "Mậu Ngọ - Nhâm Ngọ - Canh Dần - Canh Thân",
	"Ất Sửu": "Kỷ Mùi - Quý Mùi - Tân Mão - Tân Dậu",
	"Bính Dần": "Giáp Thân - Nhâm Thân - Nhâm Tuất - Nhâm Thìn",
	"Đinh Mão": "Ất Dậu - Quý Dậu - Quý Tỵ - Quý Hợi",
	"Mậu Thìn": "Canh Tuất - Bính Tuất",
	"Kỷ Tỵ": "Tân Hợi - Đinh Hợi",
	"Canh Ngọ": "Bính Tí - Nhâm Tí - Giáp Thân - Giáp Dần",
	"Tân Mùi": "Quý Sửu - Đinh Sửu - Ất Dậu - Ất Mão",
	"Nhâm Thân": "Bính Thân - Canh Dần - Bính Dần",
	"Quý Dậu": "Đinh Mão - Tân Mão - Đinh Dậu",
	"Giáp Tuất": "Nhâm Thìn - Canh Thìn - Canh Tuất",
	"Ất Hợi": "Quý Tỵ - Tân Tỵ - Tân Hợi",
	"Bính Tí": "Canh Ngọ - Mậu Ngọ",
	"Đinh Sửu": "Tân Mùi - Kỷ Mùi",
	"Mậu Dần": "Canh Thân - Giáp Thân",
	"Kỷ Mão": "Tân Dậu - Ất Dậu",
	"Canh Thìn": "Giáp Tuất - Mậu Tuất - Giáp Thìn",
	"Tân Tỵ": "Ất Hợi - Kỷ Hợi - Ất Tỵ",
	"Nhâm Ngọ": "Giáp Tí - Canh Tí - Bính Tuất - Bính Thìn",
	"Quý Mùi": "Ất Sửu - Tân Sửu - Đinh Hợi - Đinh Tỵ",
	"Giáp Thân": "Mậu Dần - Bính Dần - Canh Ngọ - Canh Tí",
	"Ất Dậu": "Kỷ Mão - Đinh Mão - Tân Mùi - Tân Sửu",
	"Bính Tuất": "Mậu Thìn - Nhâm Thìn - Nhâm Ngọ - Nhâm Tuất - Nhâm Tí",
	"Đinh Hợi": "Kỷ Tỵ - Quý Tỵ - Quý Mùi - Quý Hợi - Quý Sửu",
	"Mậu Tí": "Bính Ngọ - Giáp Ngọ",
	"Kỷ Sửu": "Đinh Mùi - Ất Mùi",
	"Canh Dần": "Nhâm Thân - Mậu Thân - Giáp Tí - Giáp Ngọ",
	"Tân Mão": "Quý Dậu - Kỷ Dậu - Ất Sửu - Ất Mùi",
	"Nhâm Thìn": "Bính Tuất - Giáp Tuất - Bính Dần",
	"Quý Tỵ": "Đinh Hợi - Ất Hợi - Đinh Mão",
	"Giáp Ngọ": "Mậu Tí - Nhâm Tí - Canh Dần - Canh Thân",
	"Ất Mùi": "Kỷ Sửu - Quý Sửu - Tân Mão - Tân Dậu",
	"Bính Thân": "Giáp Dần - Nhâm Dần - Nhâm Thân - Nhâm Tuất- Nhâm Thìn",
	"Đinh Dậu": "Ất Mão - Quý Mão - Đinh Mão - Quý Dâu - Quý Tỵ - Quý Hợi",
	"Mậu Tuất": "Canh Thìn - Bính Thìn",
	"Kỷ Hợi": "Tân Tỵ - Đinh Tỵ",
	"Canh Tí": "Nhâm Ngọ - Bính Ngọ - Giáp Thân - Giáp Dần",
	"Tân Sửu": "Quý Mùi - Đinh Mùi - Ất Dậu - Ất Mão",
	"Nhâm Dần": "Bính Thân - Canh Thân - Bính Dần'",
	"Quý Mão": "Đinh Dậu - Tân Dậu - Đinh Mão",
	"Giáp Thìn": "Nhâm Tuất - Canh Tuất - Canh Thìn",
	"Ất Tỵ": "Quý Hợi - Tân Hợi - Tân Tỵ",
	"Bính Ngọ" : "Canh Tí - Mậu Tí",
	"Đinh Mùi" : "Tân Sửu - Kỷ Sửu",
	"Mậu Thân" : "Canh Dần - Giáp Dần",
	"Kỷ Dậu": "Tân Mão - Ất Mão",
	"Canh Tuất" : "Giáp Thìn - Mậu Thìn - Giáp Tuât",
	"Tân Hợi" : "Kỷ Tỵ - Ất Tỵ - Ất Hợi",
	"Nhâm Tí" : "Bính Ngọ - Canh Ngọ - Bính Tuất - Bính Thìn",
	"Quý Sửu" : "Đinh Mùi - Tân Mùi - Đinh Hợi - Đinh Tỵ ",
	"Giáp Dần": "Mậu Thân - Bính Thân - Canh Ngọ - Canh Tí",
	"Ất Mão": "Kỷ Dậu - Tân Dậu - Tân Mùi - Tân Sửu",
	"Bính Thìn": "Canh Tuất - Nhâm Tuất - Nhâm Ngọ - Nhâm Thìn - Mậu Thìn - Nhâm Tí",
	"Đinh Tỵ": "Tân Hợi - Quý Hợi - Quý Mùi - Quý Tỵ - Quý Sửu",
	"Mậu Ngọ": "Nhâm Tí - Giáp Tí",
	"Kỷ Mùi": "Quý Sửu - Ất Sửu",
	"Canh Thân": "Giáp Dần - Mậu Dần - Giáp Tí - Giáp Ngọ",
	"Tân Dậu": "Ất Mão - Kỷ Mão - Ất Sửu - Ất Mùi",
	"Nhâm Tuất": "Bính Thìn - Mậu Thìn - Bính Thân - Bính Dần - Bính Tuất",
	"Quý Hợi": "Đinh Tỵ - Ất Tỵ - Đinh Mão - Đinh Hợi - Đinh Dậu"
}

module.exports = function(cDay){

    /*
        This function will return  chinese age not good in a day
        Parameters:
            cDay: string    
                Gan zhi of specific day
        Returns:
            Return a string containing list of bad age of specific day
    */

   var result = ''
   for (let [key, value] of Object.entries(badAgeOfDayTable)){
       if (key === cDay){
           arr = value.split("-")
           for (const badAge of arr){
               result += badAge.trim() + ", "
           }
       }
   }
   return result.substring(0, result.length-2)

}