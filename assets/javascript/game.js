// Just so I know the file is linked!

console.log("It's working!");

//Pseudo-Code

// Scores

// Win Score starts at 0.
var winScore = 0;
document.getElementById("win-score").innerHTML = winScore;

// Loss Score starts at 0.
var lossScore = 0;
document.getElementById("loss-score").innerHTML = lossScore;

// Guesses starts at 13.
var guesses = 13;
document.getElementById("guesses-left").innerHTML = guesses;

// 1. The computer randomnly chooses one of the letters of the alphabet.

// This array contains all the letters in the alphabet, each one as a string.
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(letters);

// This function randomly chooses a letter inside the letters array.

var chosenLetter = letters[Math.floor(Math.random() * letters.length)];
console.log("First hidden letter: " + chosenLetter);

document.onkeyup = function(event){

    var playerChoice = event.key;
    document.getElementById("guesses-so-far").innerHTML = playerChoice;

    // A little test to see if the listener works.

    if (playerChoice === "a") {
        console.log("'a' was pressed.");
    }

    if (playerChoice === chosenLetter) {
        winScore++;
        document.getElementById("win-score").innerHTML = winScore;
        console.log("I won!");
        chosenLetter = letters[Math.floor(Math.random() * letters.length)];
        console.log("New hidden letter: " + chosenLetter);
    }
    else {
        guesses--;
        document.getElementById("guesses-left").innerHTML = guesses;
    }

    if (guesses === 0) {
        lossScore++;
        document.getElementById("loss-score").innerHTML = lossScore;
        console.log ("I lost!");
        guesses = 13;
        document.getElementById("guesses-left").innerHTML = guesses;
        chosenLetter = letters[Math.floor(Math.random() * letters.length)];
        console.log("New hidden letter: " + chosenLetter);
    }

}