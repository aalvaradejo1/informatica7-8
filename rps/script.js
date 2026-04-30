function coin(user){
    let num = Math.random();
    console.log(num);

    let title = document.querySelector("h2");
    let computer;

    if ( num < 0.3) {
        title.innerHTML = "Rock";
        computer = "Rock";
    }else if ( num < 0.6) {
        title.innerHTML = "Paper";
        computer = "Paper";
    } else {
        title.innerHTML = "Scissors";
        computer = "Scissors";
    }

    let result = document.querySelector("h3");

    if (user > computer) {
        result.innerHTML = "You Won!!";
    } else if (user == computer) {
        result.innerHTML = "You Tied";
    }else if (user == "Rock", computer == "Scissors") {
        result.innerHTML = "You Won!!";
    } else {
        result.innerHTML = "You Lost:(";
    }
}
