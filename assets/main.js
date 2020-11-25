const pup = document.querySelectorAll(".pup");
const holes = document.querySelectorAll(".hole");
const timeLeft = document.getElementById("time-left");
const startButton = document.getElementById("start");

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

function pupOut() {
    const hole = randomHole(holes);
    const time = Math.random() * 1000 + 500;
    hole.classList.add("up");
    setTimeout(function(){
        hole.classList.remove("up");
        pupOut();
    }, time);
}

function startPet() {

}