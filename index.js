let firstCard = 10
let secondCard = 10
let cards = [firstCard, secondCard]//array -order list of items
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
//let sumEl  = document.getElementById("sum-el")its the same thing as line 11 and its also the same concept as line 9
let sumEl  = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard() {
    let randomCard = Math.floor(Math.random() *13 ) + 1
    return randomCard
}
console.log(randomCard())

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i= 0; i < cards.length; i++) {
        cardsEl.textContent = cards[i] + " "
    }
     
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    }else if(sum === 21){
        message = "Wohoo! You've got Blackjack!"
    
    }else {
        message = "you're out of the game"};
        isAlive = false
    }
    messageEl.textContent = message;

    function newCard() {
        let card = getRandomCard
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame();

    }
   