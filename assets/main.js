// HTML-declarations

const pups = document.querySelectorAll(".pup");
const holes = document.querySelectorAll(".hole");
const scoreDisplay = document.getElementById("score");
const startButton = document.getElementById("start");
const magicDog = document.getElementById("pup3")
const cats = document.getElementsByClassName("cat");

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
        if (timeUp = false) {
            pupOut();
        } 
    }, time);
}

//Petting functions

let score = 0;

function pet(e){
    score++;
    scoreDisplay.textContent = score;
}
pups.forEach(pup => pup.addEventListener("mousemove", pet));


/*function petCat(e){
    score--;
    scoreDisplay.textContent = score;
}
cats.forEach(cat => cat.addEventListener("mousemove", petCat));

function magicPet(e) {
    score+100;
    score.textContent = score;
}
magicDog.addEventListener("click", magicPet);
function blackCat score-1000;
*/

//Start game with reset at end

function startGame() {
    score = 0;
    score.textContent = 0;
    setTimeout(function(){
        alert("You petted dogs");
        timeUp = true;
    }, Math.random() * 60000 + 30000)
    pupOut();
}