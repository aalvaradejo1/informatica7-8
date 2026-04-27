function coin(){
    let num = Math.random();
    console.log(num);

    let title = document.querySelector("h1");

    if (num > 0.5) {
        title.innerHTML = "Heads";
    }else {
        title.innerHTML = "Tails";
    }
}
