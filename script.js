
// function makeBubble() {
//     let clutter = "";

//     for (let i = 1; i <= 133; i++) {
//         let rand_no = document.querySelector(".bubble").innerHTML = Math.floor(Math.random() * 10);
//         clutter += `<div class="bubble">${rand_no}</div>`;
//     }

//     document.querySelector("#pbtm").innerHTML = clutter;
// }

// console.log(bubble_score_mobile);
// console.log(bubble_score_mobile.matches);

let makeBubble= () => {
    let bubble_score_mobile = window.matchMedia("(max-width: 500px)");
    let clutter = "";
    if (bubble_score_mobile.matches == "true") {
        let createClass = document.querySelector("#pbtm");
        createClass.classList.add("bubble-score-mobile");
        for (let i = 1; i <= 30; i++) {
            let rand_no = document.querySelector(".bubble-score-mobile").innerHTML = Math.floor(Math.random() * 10);
            clutter += `<div class="bubble-score-mobile">${rand_no}</div>`;
        }
        document.querySelector("#pbtm").innerHTML = clutter;
    }
    else {
        for (let i = 1; i <= 133; i++) {
            let rand_no = document.querySelector(".bubble-score-pc").innerHTML = Math.floor(Math.random() * 10);
            clutter += `<div class="bubble-score-pc">${rand_no}</div>`;
        }
        document.querySelector("#pbtm").innerHTML = clutter;
    }
}



// (()=>{
//     let createClass=document.querySelector(".bubble-score-pc");
//     createClass.classList.add("bubble-score-mobile");

//     if(createClass.classList.contains("bubble-score-pc") == "true"){
//         createClass.classList.remove("bubble-score-mobile");
//     }

// })();


let timer = 60;
function runTimer() {
    let timerClear = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector(".timerval").innerHTML = timer;
        }
        else {
            clearInterval(timerClear);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}

function getNewHit() {
    rn = document.querySelector(".box").innerHTML = Math.floor(Math.random() * 10);
}

let score = 0;
function increasScore() {
    score += 10;
    document.querySelector(".score").innerHTML = score;
}

document.addEventListener("click", function (dets) {
    let clickedNum = Number(dets.target.textContent);
    if (clickedNum === rn) {
        increasScore();
        makeBubble();
        getNewHit();
    }
})

runTimer();
getNewHit();
makeBubble();