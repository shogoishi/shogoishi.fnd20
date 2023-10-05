'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function changeScreenStartToPlay() {
    startScreen.style.display = "none";
    playScreen.style.display = "block";
    resultScreen.style.display = "none";
}
function changeScreenPlayToResult() {
    startScreen.style.display = "none";
    playScreen.style.display = "none";
    resultScreen.style.display = "block";
}
function changeScreenResultToStart() {
    startScreen.style.display = "block";
    playScreen.style.display = "none";
    resultScreen.style.display = "none";
}


function taipingGame() {
    console.log("ゲーム開始！！！")
}

function gameTimer() {
    setTimeout(changeScreenPlayToResult,gameTimeMsec);
    intervalId = setInterval(() => {
        gameTimeSec--;
        remainingTime.value = gameTimeSec;
        console.log(gameTimeSec);
        if (gameTimeSec === 0) {
            clearInterval(intervalId);
            console.log("大麻終了")
            gameTimeSec = 120;
        }
    }, 1000);
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
const resultScreen =document.querySelector("#resultScreen");

const startButton = document.querySelector("#start");

const remainingTime = document.querySelector("#remainingTime");

const inputLabel = document.querySelector("#inputLabel");


const gameTimeMsec = 120500;
let gameTimeSec = 120;
let intervalId;

const prefectureList = [
    "ほっかいどう（北海道）",
    "あおもり（青森）",
    "いわて（岩手）",
    "みやぎ（宮城）",
    "あきた（秋田））",
    "やまがた山形）",
    "ふくしま福島）",
    "いばらぎ茨城）",
    "とちぎ栃木）",
    "ぐんま群馬）",
    "さいたま埼玉）",
    "ちば千葉）",
    "とうきょう東京）",
    "かながわ神奈川）",
    "にいがた新潟）",
    "とやま富山）",
    "いしかわ石川）",
    "ふくい福井）",
    "やまなし山梨）",
    "ながの長野）",
    "ぎふ岐阜）",
    "しずおか静岡）",
    "あいち愛知）",
    "みえ三重）",
    "しが滋賀）",
    "きょうと京都）",
    "おおさか大阪）",
    "ひょうご兵庫）",
    "なら奈良）",
    "わかやま和歌山）",
    "とっとり鳥取）",
    "しまね島根）",
    "おかやま岡山）",
    "ひろしま広島）",
    "やまぐち山口）",
    "とくしま徳島）",
    "かがわ香川）",
    "えひめ愛媛）",
    "こうち高知）",
    "ふくおか福岡）",
    "さが佐賀）",
    "ながさき長崎）",
    "くまもと熊本）",
    "おおいた大分）",
    "みやざき宮崎）",
    "かごしま鹿児島）",
    "おきなわ（沖縄）"
];

startButton.addEventListener("click", changeScreenStartToPlay);
startButton.addEventListener("click", gameTimer);
startButton.addEventListener("click", gameTimer);
startButton.addEventListener("click", taipingGame);

inputLabel.addEventListener("keypress",isEnter);
