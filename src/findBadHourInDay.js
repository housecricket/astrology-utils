const badHoursInDayTable = {
    'Dần': 'Dần, Mão, Ngọ, Thân, Dậu, Hợi',
    'Thân': 'Dần, Mão, Ngọ, Thân, Dậu, Hợi',
    'Mão': 'Sửu, Thìn, Tỵ, Thân, Tuất, Hợi',
    'Dậu': 'Sửu, Thìn, Tỵ, Thân, Tuất, Hợi',
    'Thìn': 'Tí, Sửu, Mão, Ngọ,Mùi, Tuất',
    'Tuất': 'Tí, Sửu, Mão, Ngọ,Mùi, Tuất',
    'Tỵ': 'Tí, Dần, Mão, Tỵ, Thân, Dậu',
    'Hợi': 'Tí, Dần, Mão, Tỵ, Thân, Dậu',
    'Tí': 'Dần, Thìn, Tỵ, Mùi, Tuất, Hợi',
    'Ngọ': 'Dần, Thìn, Tỵ, Mùi, Tuất, Hợi',
    'Sửu': 'Tí, Sửu, Thìn, Ngọ, Mùi, Dậu',
    'Mùi': 'Tí, Sửu, Thìn, Ngọ, Mùi, Dậu',

}

module.exports = (cDay) => {
    /*
        This function will return evil hours in day
        Parameters:
            cDay: string
                Gan zhi of day
        Return:
            Return string containing evil hours in day
    */

    zhi = cDay.split(" ")[1]
    return badHoursInDayTable[zhi]
}