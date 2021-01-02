const cardsImage = ["img1", "img1", "img2", "img2", "img3", "img3", "img4", "img4", "img5", "img5", "img6", "img6", "img7", "img7", "img8", "img8", "img9", "img9"];

let cards = document.querySelectorAll("div");
cards = [...cards];

let startTime = "";

let activeCard = "";
const activeCards = [];

const gamePairs = cards.length/2;
let gameResult = 0;

// odtąd

let clickCounter = 0;

console.log(startTime)

let score = "?";
document.querySelector(".info").innerHTML = `
        <div class="module">
            <p id="note">Your score: ${score} seconds</p>
            <p id="time">${startTime}</p>
            <button type="button" id="btn">once again</button>
        </div>
    `;
// dotąd


const clickCard = function () {
  clickCounter++;
  console.log(clickCounter);

  if(clickCounter === 1){
    startTime = new Date().getTime()
    console.log(startTime);
  };

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
        // odtąd
          document.getElementById("note").innerHTML = `Your score: ${gameTime} seconds`;


// dotąd

    //      alert(`Udało się! Twój wynik to: ${gameTime} sekund`);

  //  setTimeout(function () {
  //    location.reload();
  //  }, 5000)


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

document.getElementById("btn").addEventListener("click", function() {
  location.reload();
});
