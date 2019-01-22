// Dice 1 : random Number Generator
var dice1RandomNumber = Math.floor(Math.random() * 6) + 1;
console.log("Dice 1: " + dice1RandomNumber);

// Select Dice 1 image
var dice1Image = document.querySelector(".player1-dice");


function rollDiceOne () {
  var n = dice1RandomNumber;
  console.log(n);

}

rollDiceOne();
