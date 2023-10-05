'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function changeScreenStartToPlay() {
    startScreen.style.display = "none";
    playScreen.style.display = "block";
}


function taipingGame() {
    console.log("ゲーム開始！！！")
}

function judgement() {
    console.log("実行が押された")
}
function isEnter(e) {
    console.log("なんかおされた")
    if (e.code === "Enter") {
        console.log("エンターおされた")
    }
} 

const startScreen = document.querySelector("#startScreen");
const playScreen = document.querySelector("#playScreen");

const startButton = document.querySelector("#start");

const submitButton = document.querySelector("#judge");
const inputLabel = document.querySelector("#inputLabel");

startButton.addEventListener("click", changeScreenStartToPlay);
startButton.addEventListener("click", taipingGame);
submitButton.addEventListener("click",judgement);
submitButton.addEventListener("submit",judgement);
inputLabel.addEventListener("submit",judgement);
inputLabel.addEventListener("keypress",isEnter);
