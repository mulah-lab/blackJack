let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")


function getRandomCard() {
  let randomNumber = Math.floor((Math.random() * 11) +1);
  return randomNumber
}


function startGame() {
  renderGame()
}

function renderGame() {
sumEl.textContent = "Sum: " + sum 
cardsEl.textContent = "Cards: "
for (let i = 0; i < cards.length; i++ ) {
  cardsEl.textContent += cards[i] + " "
}
if (sum <= 20) {
  message = "Do you want to draw a new card? "
} else if (sum === 21) {
 message = "You've got Blackjack!"
  hasBlackJack = true
} else {
  message = "You're out of the game!"
  isAlive = false
}
messageEl.textContent = message

}


function newCard() {
  console.log("Drawing a new card from the deck!");
  let card = getRandomCard()
  sum += card 
  cards.push(card)
  renderGame()
}



