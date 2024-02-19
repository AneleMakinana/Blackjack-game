  // Variable assignment
  let player = {
      name: "Anele",
      chips: 310
  }
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  let messageEl = document.getElementById("message-el");
  let cardsEl = document.getElementById("cards-el");
  let sumEl = document.getElementById("sum-el");
  let startBtn = document.getElementById("strt-btn");
  let newCardBtn = document.getElementById("ncrd-btn");
  let playerEL = document.getElementById("player-el");
  let cards = [firstCard, secondCard];
  let sum = 0;
  let hasStarted = false;

  playerEL.textContent = player.name + ": $" + player.chips
  // Functions for when buttons clicked, code will be evoked
  document.getElementById("strt-btn").onclick = function startGame() {
    if (!hasStarted) {
      hasStarted = true;
      resetGame();
      drawCard();
      drawCard();
    }
  }

  function resetGame() {
    cards = [];
    sum = 0;
    renderGame();
  }

  function drawCard() {
    const card = getRandomCard();
    cards.push(card);
    sum += getCardValue(card);
    renderGame();
  }

  function renderGame() {
    cardsEl.textContent = "Cards: " + cards.join(", ");
    sumEl.textContent = "Sum: " + sum;

    if (sum === 21) {
      messageEl.textContent = "Congratulations! You've got Blackjack!";
    } else if (sum > 21) {
      messageEl.textContent = "Out of the game! You've exceeded 21.";
      hasStarted = false;
    } else {
      messageEl.textContent = "Want to draw a new card?"
      } 
  }

  document.getElementById("ncrd-btn").onclick = function newCard() {
    if (hasStarted) {
      drawCard();
    }
  }

  function getRandomCard() {
    const cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const randomIndex = Math.floor(Math.random() * cards.length);
    return cards[randomIndex];
  }

  function getCardValue(card) {
    if (["J", "Q", "K"].includes(card)) {
      return 10;
    } else if (card === "A") {
      return sum + 11 > 21 ? 1 : 11;
    } else {
      return parseInt(card);
    }
  }

