// Just so I know the file is linked!

console.log("It's working!")

//Pseudo-Code

// Scores

// Win Score starts at 0.
var winScore = 0;
document.getElementById("win-score").innerHTML = winScore

// Loss Score starts at 0.
var lossScore = 0;
document.getElementById("loss-score").innerHTML = lossScore

// Guesses starts at 13.
var guesses = 13;
document.getElementById("guesses-left").innerHTML = guesses

// 1. The computer randomnly chooses one of the letters of the alphabet.

// This array contains all the letters in the alphabet, each one as a string.
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
console.log(letters)

// This function randomly chooses a letter inside the letters array.

var chosenLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(chosenLetter)


function myFunction() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}