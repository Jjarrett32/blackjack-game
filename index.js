let firstCard = 10
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""


let messageEl = document.getElementById("message-el")
let sumEl  = document.getElementById("sum-el")

function startGame(){
    sumEl.textContent = "Sum" + sum
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    }else if(sum === 21){
        message = "Wohoo! You've got Blackjack!"
    
    }else {
        message = "you're out of the game"};
        console.log("message")
        messageEl.textContent = message;
    }