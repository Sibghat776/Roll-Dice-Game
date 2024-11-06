const player1 = prompt("Write your name, Mr Player 1");
const player2 = prompt("Write your name, Mr Player 2");

document.querySelector(".name1").innerHTML = player1;
document.querySelector(".name2").innerHTML = player2;

const player1Element = document.querySelector(".player-1");
const player2Element = document.querySelector(".player-2");

let currentPlayer = true;

let currentScore1 = 0;
let currentScore2 = 0;

function rollDice() {
  console.log("==>> chala");
  const diceNumber = Math.ceil(Math.random() * 6);
  console.log(diceNumber, "==>> diceNumber");
  console.log(document.querySelector("img").src);
  document.querySelector("img").src = `./Images/${diceNumber}.png`;
  if (diceNumber !== 1) {
    if (currentPlayer) {
      currentScore1 += diceNumber;
      document.querySelector("#currentScore1").innerHTML = currentScore1;
    } else {
      currentScore2 += diceNumber;
      document.querySelector("#currentScore2").innerHTML = currentScore2;
    }
  } else {
    if (currentPlayer) {
      currentScore1 = 0;
      document.querySelector("#currentScore1").innerHTML = currentScore1;
    } else {
      currentScore2 = 0;
      document.querySelector("#currentScore2").innerHTML = currentScore2;
    }
    currentPlayer = !currentPlayer;
  }
}

function hold() {
  if (currentPlayer) {
    let score1Html = document.querySelector(".score1");
    score1Html.innerHTML = +score1Html.innerHTML + currentScore1;
    currentScore1 = 0;
    document.querySelector("#currentScore1").innerHTML = currentScore1;
    if (score1Html.innerHTML >= 100) {
      document.querySelector(
        ".main"
      ).innerHTML = `<h1>Winner is ${player1}</h1>`;
    }
  } else {
    let score2Html = document.querySelector(".score2");
    score2Html.innerHTML = +score2Html.innerHTML + currentScore2;
    currentScore2 = 0;
    document.querySelector("#currentScore2").innerHTML = currentScore2;
    if (score2Html.innerHTML >= 100) {
      document.querySelector(
        ".main"
      ).innerHTML = `<h1>Winner is ${player2}</h1>`;
    }
  }
  currentPlayer = !currentPlayer;
}