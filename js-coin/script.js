function coin(user){
    let num = Math.random();
    console.log(num);

    let title = document.querySelector("h2");
    let computer;

    if (num > 0.5) {
        title.innerHTML = "Heads";
        computer = "Heads";
    }else {
        title.innerHTML = "Tails";
        computer = "Tails";
    }

    let result = document.querySelector("h3");

    if (computer == user) {
        result.innerHTML = "You Won!";
    } else{
        result.innerHTML = "You Lost:(";
    }
}
