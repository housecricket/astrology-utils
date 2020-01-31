const getOfficerOfDay = require('./getOfficerOfDay')
const fs = require('fs')

var flag = true
var calculateDate = new Date(1960,0,1,12,0)
var data = []
var contentJson = {}
while(flag){
    const day = calculateDate.getUTCDate()
    const month = calculateDate.getUTCMonth() + 1
    const year = calculateDate.getUTCFullYear()
    const officerData = getOfficerOfDay(parseInt(day), parseInt(month), parseInt(year))
    var dateString = String(day) + "/" + String(month) + "/" + String(year)
    // officer.data.push({ [dateString]: officerData.name})
    contentJson[[dateString]] = officerData.name
    if (year === 2080 && month === 12 && day === 31){
        flag = false
    }
    calculateDate.setDate(calculateDate.getDate() + 1)
}
// console.log(contentJson)
data.push(contentJson)
var json = JSON.stringify(data)
// console.log((json))

fs.writeFile('officer.json', json, 'utf8', function(){
    console.log("DONE")
})

// fs.readFile('./officer.json', 'utf8', function(err, data){
//     var obj = JSON.parse(data)
//     console.log(obj[0]["1/1/1960"])

// })


