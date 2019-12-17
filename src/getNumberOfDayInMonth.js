const isLeapYear = require('./isLeapYear')
const convertLunar2Solar = require('./convertLunar2Solar')
const getLunarLeapMonth = require('./getLunarLeapMonth')
const jdFromDate = require('./jdFromDate')
module.exports = function(month, year, leapYear, tz=7){
    var solar1 = convertLunar2Solar(1, month, year, isLeapYear, tz)
    console.log(solar1)
    var solar2 = null
    var haveLeapMonth = false
    leapMonth = getLunarLeapMonth(year)
    if (isLeapYear){
        if (leapMonth === month){
            haveLeapMonth = true
        }
    } 

    if (haveLeapMonth){
        if(month !== 12){
            if(!leapYear){
                solar2 = convertLunar2Solar(1, month, year, !leapYear, tz)
            }else{
                solar2 = convertLunar2Solar(1, month + 1, year, !leapYear, tz)
            }
        }
    }else{
        if (month !==12){
            console.log(month)
            solar2 = convertLunar2Solar(1, month+1, year, leapYear, tz)
        }else{
            solar2 = convertLunar2Solar(1, 1, year+1, leapYear, tz)
        }
    }
    console.log(solar2)
    return Math.abs(parseInt(jdFromDate(solar2[0], solar2[1], solar2[2]) - jdFromDate(solar1[0], solar1[1], solar1[2])))
}