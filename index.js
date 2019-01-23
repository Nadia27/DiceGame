// random Number Generator 1-6
var dice1RandomNumber = Math.floor(Math.random() * 6) + 1;
var dice2RandomNumber = Math.floor(Math.random() * 6) + 1;

// Random image picker
var image1Picker = "./images/dice" + dice1RandomNumber + ".png";
var image2Picker = "./images/dice" + dice2RandomNumber + ".png";

// Change image based on random picker to match random number/imagePicker
var diceRoll1 = document.querySelector("img.player1-dice").setAttribute("src", image1Picker);
var diceRoll2 = document.querySelector("img.player2-dice").setAttribute("src", image2Picker);

var title = document.querySelector("h1");

// Claim Winner of Dice roll
if (dice1RandomNumber > dice2RandomNumber) {
  title.textContent = "🚩 Player 1 Wins!";
} else if (dice1RandomNumber < dice2RandomNumber) {
    title.textContent = "Player 2 Wins! 🚩";
} else {
  title.textContent = "Draw!";
}
