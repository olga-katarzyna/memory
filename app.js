const cardsImage = ["apple", "apple", "backpack", "backpack", "boots", "boots", "carrot", "carrot", "map", "map", "pippi", "pippi", "dog", "dog", "dora", "dora", "chicken", "chicken"];

let cards = document.querySelectorAll("div");
cards = [...cards];

const startTime = new Date().getTime();

let activeCard = "";
const activeCards = [];

const gamePairs = cards.length/2;
let gameResult = 0;

const clickCard = function () {
  activeCard = this;
  if(activeCard == activeCards[0]) return;
  activeCard.classList.remove("covered");

  if(activeCards.length === 0){
    activeCards[0] = activeCard;
    return;
  }
  else {
    cards.forEach(card => card.removeEventListener("click", clickCard))
    activeCards[1] = activeCard;
    setTimeout(function(){
      if(activeCards[0].className === activeCards[1].className){
        activeCards.forEach(card => card.classList.add("inactive"))
        gameResult++;
        cards = cards.filter(card => !card.classList.contains("inactive"))
        if(gameResult == gamePairs) {
          const endTime = new Date().getTime();
          const gameTime = (endTime - startTime) /1000
          alert(`Udało się! Twój wynik to: ${gameTime} sekund`);
          location.reload();
        }
      }
      else{
        activeCards.forEach(card => card.classList.add("covered"))
      }
      activeCard ="";
      activeCards.length = 0;
      cards.forEach(card => card.addEventListener("click", clickCard))
    }, 500)
  }
};

const init = function () {
  cards.forEach(function (card) {
    const position = Math.floor(Math.random() * cardsImage.length);
    card.classList.add(cardsImage[position]);
    cardsImage.splice(position, 1);
  })

  setTimeout(function () {
    cards.forEach(function(card){
      card.classList.add("covered")
      card.addEventListener("click", clickCard)
    })
  }, 2000)
}

init()
