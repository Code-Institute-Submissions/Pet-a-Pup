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


/*
function thisRoundScore(name, score) {
    this.name = name;
    this.score = score;
}

let topScoresToArray = [];
$("#generate-array").click(function(){
    $("#top-scores tr").each(function() {
    var scoreArray = [];
    var findScore = $(this).filter("td");
    scoreArray.push(findScore.text);
    topScoresToArray.push(scoreArray);
});
});

let topFiveList = [];

function updateTopScores() {
} */

scoresArray = [ {
    "name" : "Jeff",
    "score": 1539
}, {
    "name" : "Johanna",
    "score": 1435
}, {
    "name" : "Jim",
    "score": 1476
}, {
    "name" : "Jessica",
    "score": 1846
}, {
    "name" : "Jasmine",
    "score": 1677
}, 
]

scoresArray.sort(function(a, b) {
    return b.score - a.score;
});

const topScores = document.getElementById("top-scores");

function generateScoreBoard(objects) {
    let position = 0;
    for (let i = 0; i < 5; i++){
        position++;
        var playerScore = `<tr>
                        <th scope="row">${position}</th>
                            <td>${objects[i].name}</td>
                            <td>${objects[i].score}</td>
                        </tr>
                                 `
        topScores.innerHTML += playerScore;
    }
}

function updateScores() {
    generateScoreBoard(scoresArray)
}; 

