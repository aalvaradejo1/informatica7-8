let counter = 10;
const alarm = new Audio("alarm.mp3");
function count() {

    if (counter > 0){
    counter--;
    document.querySelector('h1').innerHTML = counter;


    if (counter == 0){
    alarm.currentTime = 0;
            alarm.play();
}
    }
}

document.addEventListener('DOMContentLoaded', function() {




    document.querySelector('button').onclick = function(){
    setInterval(count, 1000);
    document.querySelector("button").disabled = true;
    };
});
