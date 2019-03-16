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

var cardOne = cards[0];
cardsInPlay.push(cardOne[cardId].rank);
console.log('User flipped ' + cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo[cardId].rank);
console.log('User flipped ' + cardTwo);

var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log('You found a match');
  } else {
    console.log('sorry try again');
  }
};

var flipCard = function (cardId) {
  if (cardsInPlay.length === 2) {
    console.log('User flipped' + cards[cardId].rank);
  }

  checkForMatch();
};

flipCard(0);
flipCard(2);
console.log(cards.cardImage);
console.log(cards.suit);
