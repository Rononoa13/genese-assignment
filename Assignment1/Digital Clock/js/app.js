window.onload = function setTime() {
    var now = new Date()
    var hours = now.getHours() % 12 || 12;
    var min = now.getMinutes();
    var seconds = now.getSeconds();

    var am_pm = (now.getHours() >= 12) ? "PM" : "AM"

    hours = (hours < 10) ? "0" + hours : hours;
    min = (min < 10) ? "0" + min : min;
    seconds = (seconds < 10) ? "0"+ seconds : seconds;

    document.getElementById('clock').innerHTML = hours + ":" + min + ":" + seconds +" "+ am_pm;
    setTimeout(setTime, 500);
    // onDisplay();
    // console.log(document.getElementById('clock'));
};



// function onDisplay() {
//     setTimeout(setTime, 500)
// }
// function startTime() {
//     var now = new Date()

//     document.getElementById('clock').innerHTML = now;
// }
