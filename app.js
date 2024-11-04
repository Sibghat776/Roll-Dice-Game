let user1 = prompt("Enter your Name , Mr Player 1")
let user2 = prompt("Enter your Name , Mr Player 2")

let userName1 = document.querySelector(".name1")
let userName2 = document.querySelector(".name2")

let randomNumber = Math.ceil(Math.random() *6);
let image = document.querySelector('#img')
let count = 0


userName1.innerHTML = user1
userName2.innerHTML = user2

function rollDice() {
    image.src = `./images/${randomNumber}.png`
    console.log(randomNumber);
    
    
}
