// HTML-declarations

const pups = document.querySelectorAll(".pup");
const holes = document.querySelectorAll(".hole");
const scoreDisplay = document.getElementById("score");
const startButton = document.getElementById("start");
const magicDog = document.getElementById("pup3")

//Select random hole

let prevHole;

function randomHole(holes) {
    const holeId = Math.floor(Math.random() * holes.length);
    const hole = holes[holeId];
    if (hole === prevHole) {
        return randomHole(holes);
    }
    prevHole = hole;
    return hole;
}

// Make pup come out function

let timeUp = false;

function pupOut() {
    const hole = randomHole(holes);
    const time = Math.random() * 2000 + 500;
    hole.classList.add("up");
    setTimeout(function(){
        hole.classList.remove("up");
        if (!timeUp) pupOut();
    }, time);
}

//Petting functions, to add score as mouse moves over, also magic dog function to add extra points

let score = 0;

function pet(e){
    score++;
    scoreDisplay.textContent = score;
}
pups.forEach(pup => pup.addEventListener("mousemove", pet));


//pups.forEach(pup => pup.addEventListener("onmousemove", pet));

/*function magicPet(e) {
    score+100;
    score.textContent = score;
}
magicDog.addEventListener("click", magicPet);
function blackCat score-1000;
*/

function startGame() {
    score = 0;
    score.textContent = 0;
    setTimeout(function(){
        alert("You scored points");
        timeUp = true;
    }, 600)
    pupOut();
}