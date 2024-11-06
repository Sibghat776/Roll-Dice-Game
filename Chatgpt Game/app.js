const player1 = prompt("Write your name, Mr Player 1");
const player2 = prompt("Write your name, Mr Player 2");

document.querySelector(".name1").innerHTML = player1;
document.querySelector(".name2").innerHTML = player2;

const player1Element = document.querySelector(".player-1");
const player2Element = document.querySelector(".player-2");

let currentPlayer = true; // true = Player 1, false = Player 2
let currentScore1 = 0;
let currentScore2 = 0;

function playSound(src) {
    const sound = new Audio(src);
    sound.play();
}

function rollDice() {
    playSound('dice-roll.mp3');
    const diceNumber = Math.ceil(Math.random() * 6);
    document.querySelector("img").src = `../Images/${diceNumber}.png`;

    if (diceNumber !== 1) {
        if (currentPlayer) {
            currentScore1 += diceNumber;
            document.querySelector("#currentScore1").innerHTML = currentScore1;
        } else {
            currentScore2 += diceNumber;
            document.querySelector("#currentScore2").innerHTML = currentScore2;
        }
    } else {
        resetCurrentScore();
        togglePlayer();
    }
}

function hold() {
    if (currentPlayer) {
        updateTotalScore('.score1', currentScore1);
        if (checkWinner('.score1', player1)) return;
    } else {
        updateTotalScore('.score2', currentScore2);
        if (checkWinner('.score2', player2)) return;
    }
    resetCurrentScore();
    togglePlayer();
}

function updateTotalScore(scoreSelector, currentScore) {
    const scoreElement = document.querySelector(scoreSelector);
    scoreElement.innerHTML = +scoreElement.innerHTML + currentScore;
}

function checkWinner(scoreSelector, playerName) {
    if (document.querySelector(scoreSelector).innerHTML >= 100) {
        document.querySelector(".main").innerHTML = `<h1>Winner is ${playerName}</h1>`;
        playSound('winner.mp3');
        return true;
    }
    return false;
}

function resetCurrentScore() {
    currentScore1 = 0;
    currentScore2 = 0;
    document.querySelector("#currentScore1").innerHTML = currentScore1;
    document.querySelector("#currentScore2").innerHTML = currentScore2;
}

function togglePlayer() {
    currentPlayer = !currentPlayer;
    player1Element.classList.toggle('activePlayer');
    player2Element.classList.toggle('activePlayer');
}

function newGame() {
    location.reload();
}
