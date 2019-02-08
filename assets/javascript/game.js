
// Variables interacting with the DOM
//display key that was pressed
var userText = document.getElementById("usertext");

var numberGuess = document.getElementById("number-guess");

// display the amount of times you have tried
var letterPicked = document.getElementById("letter-guess");
var letterGuess = [];

//word box text
var wordtext = document.getElementById("wordtext");
var wordArray = ["word1", "word2", "word3", "word4", "word5", "word6", "word7"];
var wordField = randomWord(wordArray);

// Document functions
document.onkeyup = function (event) {
	userText.textContent = event.key;
	letterPicked.textContent = letterGuess.push(event.key); // How can I make this add the key pressed letter?
	console.log(letterGuess)
};

// calling random word function on loading page to write the element which was picked by the random function
document.onload = randomWord(wordArray);


//Functions

// created a random function, to go through wordArray and pick one element.
function randomWord(wordArray) {
	wordtext.textContent = wordArray[Math.floor(Math.random() * wordArray.length)];
}














// Testing Console
// console.log(wordtext);
// randomWord(wordArray);