const clock = () => {
    let date = new Date()


let month_num = date.getMonth()
let day = date.getDate()
let hours = date.getHours()
let minute = date.getMinutes()
let seconds = date.getSeconds()

if(day<=9)day="0"+day
if(hours<=9)hours="0"+hours
if(minute<=9)minute="0"+minute
if(seconds<=9)seconds="0"+seconds

let month =["Ян","Фев","Март","Апрель","Май","Июн","Июль","Агуст","Сент","Окт","Ноя","Дек"]

console.log(month[11])

let date_time = "Бугун: " + day + " - " + month[month_num] + " саат "+ hours +":"+minute+":"+seconds

let element = document.getElementById('time')
element.innerHTML = date_time
setTimeout(() => {
    clock()
}, 1000);



}

clock()