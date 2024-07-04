function digitalClock(){
    let time = new Date()
    let hours = time.getHours()
    let mins = time.getMinutes()
    let secs = time.getSeconds()
    let am_pm = 'AM'

    if(hours > 12){
        am_pm = 'PM'
    }else{
        am_pm = 'AM'
    }
    if(hours == 0){
        hours = 12
    }
    if(hours < 10){
        hours = "0" + hours
    }else if(mins < 10){
        mins = "0" + mins
    }
    if (secs < 10){
        secs = "0" + secs
    }

    let currTime = `${hours} : ${mins} : ${secs} ${am_pm}`
    console.log(currTime)
    document.getElementById('clock').innerHTML = `<span>${currTime}</span>`;
    setTimeout(digitalClock , 1000)

}

digitalClock()

