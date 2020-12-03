(function () {
    //Fundamental HTML-declarations for game functionality

    const pups = document.querySelectorAll(".pup");
    const holes = document.querySelectorAll(".hole");
    const scoreDisplay = document.getElementById("score");

    // Enter name prompt

    let playerName = document.getElementById("player-name");
    let writeName = document.getElementById("enter-name");
    const namePrompt = document.getElementById("prompt");

    function submitName() {
        let x = writeName.value;
        if (x === "") {
            alert("Write a name!");
            return;
        }
        namePrompt.classList.add("hidden");
        playerName.innerHTML = writeName.value;
    }

    //Event-listeners

    const submitButton = document.getElementById("submit");
    if (submitButton) {
        submitButton.addEventListener("click", submitName);
    } 

    const startGameButton = document.getElementById("start-game-btn");
    if (startGameButton) {
        startGameButton.addEventListener("click", startGame);
    }

    const playAgainButton = document.getElementById("play-again");
    if (playAgainButton) {
        playAgainButton.addEventListener("click", playAgain);
    }

    const submitScoreButton = document.getElementById("show-top-dogs");
    if (submitScoreButton) {
        submitScoreButton.addEventListener("click", submitScore);
    }

    const updateScoreButton = document.getElementById("update-score-btn");
    if (updateScoreButton) {
        updateScoreButton.addEventListener("click", updateScores);
    }

    //Select random hole

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

    // Make pup move up and down

    let timeUp = false;

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

    //Scoring functions
    
    let score = 0;

    function pet(e) {
        score++;
        scoreDisplay.textContent = score;
    }
    pups.forEach((pup) => pup.addEventListener("mousemove", pet));

    const scoreText = document.getElementById("score-text");
    const scoreCard = document.getElementById("scorecard");
    const gameTime = 20000;

    //Function initialises game, retrieves the score and then at the end pushes it to the array of made-up scores.
    //Submitscore is called to save the scores to localstorage. 

    function startGame() {
        score = 0;
        score.textContent = 0;
        setTimeout(function () {
            let points = score;
            scoreCard.classList.remove("hidden");
            scoreText.innerHTML = `Well done ${playerName.innerText} you scored ${points}!`;
            timeUp = true;
            let roundScore = {
                name: playerName.innerText,
                score: points,
            };
            scoresArray.push(roundScore);
            scoresArray.sort(sortScores);
            submitScore();
        }, gameTime);
        pupOut();
    }

    function sortScores(a, b) {
        return b.score - a.score;
    }

    function playAgain() {
        timeUp = false;
        scoreCard.classList.add("hidden");
        startGame();
    }

    //Scoring - including array with made-up scores to populate the highscores list

    scoresArray = [
        {
            name: "Jeff",
            score: 809,
        },
        {
            name: "Johanna",
            score: 945,
        },
        {
            name: "Jim",
            score: 745,
        },
        {
            name: "Jessica",
            score: 126,
        },
        {
            name: "Jasmine",
            score: 1002,
        },
        {
            name: "John",
            score: 754,
        },
        {
            name: "Jeremy",
            score: 846,
        },
        {
            name: "Janet",
            score: 711,
        },
        {
            name: "Jill",
            score: 645,
        },
        {
            name: "Josh",
            score: 112,
        },
    ];

    const topScores = document.getElementById("top-scores");

    //Generates HTML for the scoreboard

    function generateScoreBoard(scores) {
        scores.forEach((value, index) => {
            var playerScore = `<tr>
                        <th scope="row">${index+1}</th>
                            <td>${value.name}</td>
                            <td>${value.score}</td>
                        </tr>
                                 `;
            topScores.innerHTML += playerScore;
        }); 
    }

    //Save new scores to localstorage and when view top scores is pressed on topscores.html updatescores runs and updates from localstorage 

    function submitScore() {
        localStorage.setItem("topScoreList", JSON.stringify(scoresArray));
    }

    function updateScores() {
        var scoreBoard = document.getElementById("top-scores");
        scoreBoard.innerHTML = "";
        let updatedScores = JSON.parse(localStorage.getItem("topScoreList"));
        updatedScores.splice(10);
        generateScoreBoard(updatedScores);
    }
})();
