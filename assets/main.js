const pup = document.querySelectorAll(".pup");
const holes = document.querySelectorAll(".hole");
const timeLeft = document.getElementById("time-left");
const startButton = document.getElementById("start");

function randomHole(holes) {
    const holeId = Math.floor(Math.random() * holes.length);
    const hole = holes[holeId];
    console.log(hole);
}