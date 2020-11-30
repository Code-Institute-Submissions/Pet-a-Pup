//Fundamental HTML-declarations for game functionality

const pups = document.querySelectorAll(".pup");
const holes = document.querySelectorAll(".hole");
const scoreDisplay = document.getElementById("score");
const startButton = document.getElementById("start");
const magicDog = document.getElementById("pup3")


// Enter name prompt

const nameButton = document.getElementById("submit");
let playerName = document.getElementById("player-name");
let writeName = document.getElementById("enter-name");
const namePrompt = document.getElementById("prompt");

function submitName() {
    namePrompt.classList.add("hidden");
    playerName.innerHTML = writeName.value;
}


//Select random hole

let prevHole;

function randomHole(holes) {
    const holeId = Math.floor(Math.random() * holes.length);
    const hole = holes[holeId];
    if (hole === prevHole) {
        return randomHole(holes);
    }
    prevHole = hole;
    return hole;
}

// Make pup come out function

let timeUp = false;

function pupOut() {
    const hole = randomHole(holes);
    const time = Math.random() * 2000 + 500;
    hole.classList.add("up");
    setTimeout(function () {
        hole.classList.remove("up");
        if (!timeUp) pupOut();
    }, time);
}

//Game functions

let score = 0;

function pet(e){
    score++;
    scoreDisplay.textContent = score;
}
pups.forEach(pup => pup.addEventListener("mousemove", pet));

const scoreText = document.getElementById("score-text");
const scoreCard = document.getElementById("scorecard");

function startGame() {
    score = 0;
    score.textContent = 0;
    setTimeout(function () {
        let points = score;
        scoreCard.classList.remove("hidden");
        scoreText.innerHTML = `Well done ${playerName.innerText} you scored ${points}!`;
        timeUp = true;
    }, 6000)
    pupOut();
} 

function playAgain() {
    timeUp = false;
    scoreCard.classList.add("hidden");
    startGame();
}
    

let scoreArray = [
    {
    "name": "Jeff",
    "score": "4120"
}, {
    "name": "Jane",
    "score": "3215"
}, {
    "name": "Jim",
    "score": "2145"
}, {
    "name": "Johanna",
    "score": "4632"
}, {
    "name": "Jessica",
    "score": "2736"
}
]

