// **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

// * A string value to store the underlying character for the letter

// * A boolean value that stores whether that letter has been guessed yet

// * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

// * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

function Letter(letter){

    // A single letter. Make sure we are only dealing with lowercase
    this.letter = letter.toLowerCase();
    // has this letter been guessed before?
    this.guessedYet = false;

    // this returns the letter if it has been guessed otherwise _
    this.getLetter = function( ){
        if (this.guessedYet===true)
        {
            return this.letter;
        }
        return "_";
    }

    // this function checks if the letter the user guessed matches this letter
    this.checkLetter = function(userGuess){
        var uGuess = userGuess.toLowerCase();
        console.log("User guessed " + uGuess);
        if (userGuess.toLowerCase() == this.letter)
        {
            this.guessedYet = true;
            // return true;
        }
        console.log ("the booliean is " + this.guessedYet)
    }
}

module.exports = Letter;

// Test Case
// var letter = new Letter("H");
// console.log("the letter is " + letter.letter);
// console.log("you've guessed this before " + letter.getLetter());
// letter.checkLetter("H");
// console.log("you've guessed this before " + letter.getLetter());
