let user1 = prompt("Enter your Name , Mr Player 1")
let user2 = prompt("Enter your Name , Mr Player 2")

document.querySelector(".name1").innerHTML = user1
document.querySelector(".name2").innerHTML = user2

let randomNumber = Math.ceil(Math.random() * 6);
let image = document.querySelector('#img')

let currentScore1 = document.querySelector("#currentScore1")
let currentScore2 = document.querySelector("#currentScore2")

let player1 = document.querySelector(".player-1")
let player2 = document.querySelector(".player-2")

player1.classList.add("activePlayer")
player2.classList.remove("activePlayer")

let player;


function rollDice() {
    let randomNumber = Math.ceil(Math.random() * 6);
    image.src = `./images/${randomNumber}.png`
    if (randomNumber != 1) {
        if (player = true) {
            currentScore1.innerHTML = randomNumber + +currentScore1.innerHTML
        } else {
            currentScore2.innerHTML = randomNumber + +currentScore2.innerHTML
        }
    } else {
        if (player) {
            currentScore1.innerHTML = 0
        } else {
            currentScore2.innerHTML = 0
        }

        player !== player
        player1.classList.toggle("activePlayer")
        player2.classList.toggle("activePlayer")
    }
}
