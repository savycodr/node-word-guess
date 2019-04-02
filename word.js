// Contains a constructor, Word that depends on the Letter constructor. It is used to create an object representing the current word the user is attempting to guess. "_ _ _ a _ e". 

var Letter = require("./letter");

// A constructor that take the full secret word that the user needs to guess
function Word(theWord){
    // the word that the user tries to guess
    this.theWord = theWord;
    // An array of `new` Letter objects representing the letters of the underlying word. These Letters will know if they should display "a" or "_"
    this.letterArray = [];

    // set an array of letters from theWord
    var letters = this.theWord.split("");
    // for every letter in theWord, create a new Letter object and add to the array
    for (var i=0; i<letters.length; i++)
    {
        var letter = new Letter (letters[i]);
        this.letterArray.push(letter);
    }

    // A function that returns a string representing the word. 
    // One _ for each letter in the word. Unless the letter has been guessed and it will return the letter (_ _ _ a _). This function returns the string that shall be displayed to command line
    this.displayWord = function() {
        var display = "";
        for (i=0; i<this.letterArray.length; i++){
            var letter = this.letterArray[i];
            display = display.concat(letter.getLetter() + " ");
        }
        return display;
    } 

    // A function that takes a character as an argument and calls the checkLetter function on each Letter object 
    this.checkUserGuess = function (userGuess)
    {
        for (i=0; i<this.letterArray.length; i++){
            var letter = this.letterArray[i];
            letter.checkLetter(userGuess);
        }
    }
}

module.exports = Word;

// Test Code
// var word = new Word("matt");
// console.log("The display word is " + word.displayWord());
// word.checkUserGuess("a");
// console.log("After guess the display word is " + word.displayWord());
