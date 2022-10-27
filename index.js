let firstCard = 10
let secondCard = 10
let cards = [firstCard, secondCard]//array -order list of items
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let cardsEl = document.getElementById("cards-el")
let messageEl = document.getElementById("message-el")
//let sumEl  = document.getElementById("sum-el")its the same thing as line 11 and its also the same concept as line 9
let sumEl  = document.querySelector("#sum-el")

function renderGame(){
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    }else if(sum === 21){
        message = "Wohoo! You've got Blackjack!"
    
    }else {
        message = "you're out of the game"};
        console.log("message")
        messageEl.textContent = message;
    }
    function newCard() {
        cardsEl.textContent = "Cards: " + sum
        sumEl.textContent = "Sum: " + sum 
        console.log("drawing a new card from the deck")
        let card = 2
        sum = sum + card
        renderGame();

    }
    function startGame() {
        renderGame()
    }