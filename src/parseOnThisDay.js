const {convertSolar2Lunar, isLeapYear} = require('./index')
const fs = require('fs')

var initialData = function(startYear, endYear){
    var initialResult = []
    for (let year=startYear; year<=endYear; year+=1){
        for (let month=1; month<=12; month++){
            for(let day=1; day<=31; day++){
                var resultJSON = {}
                const date = new Date(year, month, day, 12, 0, 0)
                var strTitle = ''
                if (day < 10){
                    strTitle += "0" + String(day)
                }else{
                    strTitle += String(day)
                }

                if (month < 10){
                    strTitle += "0" + String(month)
                }else{
                    strTitle += String(month)
                }
                
                strTitle += String(year)
                resultJSON["title"] = strTitle
                resultJSON["day"] = day
                resultJSON["month"] = month
                resultJSON["year"] = year
                resultJSON["data"] = null
                initialResult.push(resultJSON)
            }
        }
    }
    return initialResult
}


var assignValue = function(pathSolarEvent, pathLunarEvent, startYear, endYear){
    var initialResult = initialData(startYear,endYear)
    var contentSolar = fs.readFileSync(pathSolarEvent, 'utf8')
    var contentLunar = fs.readFileSync(pathLunarEvent, 'utf8')
    var solarEvents = JSON.parse(contentSolar)
    var lunarEvents = JSON.parse(contentLunar)
    for (let pivotYear=startYear; pivotYear<=endYear; pivotYear++){
        for (let date of initialResult){
            const day = date.day
            const month = date.month
            const year = date.year
            for (let solarEvent of solarEvents){
                const solarDay = solarEvent.day
                const solarMonth = solarEvent.month
                const solarData = solarEvent.data
                if(day == solarDay && month == solarMonth && year == pivotYear){
                    date.data = solarData
                    break
                }
            }

            for (let lunarEvent of lunarEvents){
                const lunarDate = convertSolar2Lunar(day,month,year, 7.0)
                const lunarDay = lunarEvent.day
                const lunarMonth = lunarEvent.month
                const lunarData = lunarEvent.data
                if(lunarDate[0] == lunarDay && lunarDate[1] == lunarMonth && lunarDate[2] == pivotYear){
                    date.data = lunarData
                    break
                }
            }
        }
    }
    for (let i=initialResult.length-1; i>=0; i--){
            if (initialResult[i].data === null){
                initialResult.splice(i,1)
            }
        }
    return initialResult
}

var finalResult = assignValue("./solarEvent.json", "./lunarEvent.json", 2020,2021)
var json = JSON.stringify(finalResult)
fs.writeFileSync('./OnThisDayFinal.json', json)
