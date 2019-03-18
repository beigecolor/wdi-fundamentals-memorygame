console.log('Up and Running!');

var cards = [{
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png',
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png',
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png',
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-diamonds.png',
  },
];
var cardsInPlay = [];

var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert('You found a match');
  } else if (cardsInPlay.length === 1) {
    alert('pick one another card');
  } else {
    alert('sorry no match');
  }
};

var createboard = function () {
  for (var i = 0; i < cards.length; i += 1) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
};

var flipCard = function () {
  if (cardsInPlay.length < 2) {
    var cardId = this.getAttribute('data-id');
    this.setAttribute('src', cards[cardId].cardImage);
    cardsInPlay.push(cards[cardId].rank);
  }

  checkForMatch();
};

createboard();

console.log(cards.cardImage);
console.log(cards.suit);
