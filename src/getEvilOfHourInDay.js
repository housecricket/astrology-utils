const evilHoursInDay = {
	'Dần,Thân'	: 'Dần, Mão, Ngọ, Thân, Dậu, Hợi',
	'Mão,Dậu' 	: 'Sửu, Thìn, Tỵ, Thân, Tuất, Hợi',
	'Thìn,Tuất'	: 'Tí, Sửu, Mão, Ngọ,Mùi, Tuất',
	'Tỵ,Hợi'	: 'Tí, Dần, Mão, Tỵ, Thân, Dậu',
	'Tí,Ngọ'	: 'Dần, Thìn, Tỵ, Mùi, Tuất, Hợi',
	'Sửu,Mùi'	: 'Tí, Sửu, Thìn, Ngọ, Mùi, Dậu'
}

module.exports = (cDay) =>{
    /*
        This function will return evil hours in day
        Parameters:
            cDay: string
                Gan zhi of day
        Return:
            Return string containing evil hours in day
    */

    zhi = cDay.split(" ")[1]
    for (const key in gioHacDao){
       if (key.split(",").includes(zhi)){
           return evilHoursInDay[key]
       }
   }
}