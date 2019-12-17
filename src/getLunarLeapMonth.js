const isLunarLeapYear = require('./isLeapYear')
const getLeapMonthOffset = require('./getLeapMonthOffset')

module.exports = function(year){
    if(isLunarLeapYear(year)) {
        off = getLeapMonthOffset(getLunarMonth11(year - 1, tz), tz)
        lm = off - 2
        if(lm > 0) {
            lm += 12
        }
        return lm
    } else {
        return 0
    }
}