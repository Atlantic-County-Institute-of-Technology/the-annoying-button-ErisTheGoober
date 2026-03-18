let score = document.getElementById("score");
let cookie_button = document.getElementById("cookie_button");
let main_button = document.getElementById("main_button")
const imageUrl = "https://media.tenor.com/CF6RvBzqX5cAAAAM/boom-explosion.gif"

var click = 0;
var click_power = 1;

cookie_button.addEventListener("click", main_click)

function main_click() {
    click += click_power;
    score.innerText = click;
    check_score();
}



function check_score() {
    if (click == 10 ) {
        cookie_button.innerText = 'I SAID STOP';
    }

        if (click == 20 ) {
        cookie_button.innerText = 'EY!!!';
    }

            if (click == 30 ) {
        cookie_button.innerText = 'IM GONNA BLOW UP';
    }

    if (click > 50) {
        cookie_button.style.height = `${click *4}px`   //  500px
        cookie_button.style.width =  `${click *4}px`
    }
if (click == 100){
    cookie_button.innerText = 'IM WARNING YOU'
}
if (click == 150){
window.location.href = imageUrl
}
    // else if (cookies >= 200 && cookies < 300 ) {
    //     cookie_button.style.backgroundColor = 'orange';
    // }
    // else if (cookies >= 300 && cookies < 400 ) {
    //     cookie_button.style.backgroundColor = 'green';
    // }

//     if (cookies == 100) {
//         cookie_button.style.backgroundColor = 'blue';
//     }
//     else if (cookies == 200) {
//         cookie_button.style.backgroundColor = 'orange';
//     }
//     else if (cookies == 300) {
//         cookie_button.style.backgroundColor = 'green';
//     }

}






