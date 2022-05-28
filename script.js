// daysElement was declared 
let daysElenment = document.getElementById('days');
let hoursElenment = document.getElementById('hours');
let minsElenment = document.getElementById('mins');
let secElenment = document.getElementById('sec');


let newYears = '1 Jan 2023';

function countdown() {
    let newYearDate = new Date(newYears)
    let currentDate = new Date()

    let totalseconds = (newYearDate - currentDate) / 1000;

    //call id in html with math floor funct
    let days = Math.floor(totalseconds / 3600 / 24);
    let hours = Math.floor(totalseconds / 3600) % 24;
    let mins = Math.floor(totalseconds / 60) % 60;
    let sec = Math.floor(totalseconds) % 60;

    daysElenment.innerHTML = days;
    hoursElenment.innerHTML = formatTime(hours);
    minsElenment.innerHTML = formatTime(mins);
    secElenment.innerHTML = formatTime(sec);

    // console.log(days, hours, mins, sec); //same as id used in html
}

//ternary (adding 0 to the sec i.e 01,02,03... )
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
//initial call
countdown();
//call the countdown every sec 1sec= 1000milisec
setInterval(countdown, 1000);