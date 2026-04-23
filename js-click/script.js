let i = 0;

function showClicks(){
    let numClick = i++;
    let header = document.querySelector("h1");
    header.innerHTML = i;
}
