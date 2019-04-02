// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

//   * An array of `new` Letter objects representing the letters of the underlying word

//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
var Letter = require("./letter");

function Word(theWord){
    this.theWord = theWord;
    // An array of `new` Letter objects representing the letters of the underlying word
    this.letterArray = [];

    // set array of letters from theWord
    var letters = this.theWord.split("");
    // for every letter in theWord, create a new Letter and add to the array
    for (var i=0; i<letters.length; i++)
    {
        var letter = new Letter (letters[i]);
        this.letterArray.push(letter);
    }

    //the display of _ _ _ for the word one _ for each letter in the word. Returns what shall be displayed to command line
    this.displayWord = function() {
        var display = "";
        for (i=0; i<this.letterArray.length; i++){
            var letter = this.letterArray[i];
            display = display.concat(letter.getLetter() + " ");
        }
        return display;
    } // end of function

    //   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
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
