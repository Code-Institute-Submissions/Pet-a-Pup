// HTML-declarations

const pups = document.querySelectorAll(".pup");
const holes = document.querySelectorAll(".hole");
const scoreDisplay = document.getElementById("score");
const startButton = document.getElementById("start");
const magicDog = document.getElementById("pup3")


/* Prompt let name = document.getElementById("player-name");

let playerName = window.prompt("Please Enter Name", "doglover1290");
document.getElementById("player-name").innerHTML = playerName;

function submitName(e) {
    namePrompt.classList.add("hidden");

nameButton.addEventListener("click", nameButton);
}
*/

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

//Petting functions, to add score as mouse moves over

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
    

