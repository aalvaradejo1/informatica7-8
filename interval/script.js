let counter = 15;
const alarm = new Audio("alarm.mp3");
function count(user) {

    let minutes = Math.floor(counter/60);
    let seconds = counter % 60;

if (user = "1"){
        counter = 120;
    } else if (user = 5){
        counter = 300;
    } else if (user = 10) {
        counter = 600;
    }


    if (seconds < 10){
        seconds = "0" + seconds
    }

    document.querySelector('h1').innerHTML = minutes + ":" + seconds;
    if (counter > 0){
        counter--;
    } else if (counter == 0){
        alarm.currentTime = 0;
        alarm.play();
    }


}

document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('#start').onclick = function(){
    setInterval(count, 1000);
    document.querySelector("#start").disabled = true;
    };
});
