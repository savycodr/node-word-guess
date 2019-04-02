//  Contains a constructor, Letter. This constructor has a function to  display its  character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. It also has a function to set whether the user has guessed the letter.


// * A constructor that takes a character as an argument and set the object's letter to the input.

function Letter(letter){

    // A single letter. Make sure we are only dealing with lowercase
    this.letter = letter.toLowerCase();
    // has this letter been guessed?
    this.guessedYet = false;

    // this function returns the object's letter if it has been guessed otherwise _
    this.getLetter = function( ){
        if (this.guessedYet===true)
        {
            return this.letter;
        }
        return "_";
    }

    // this function checks if the letter the user guessed matches the letter in this object 
    this.checkLetter = function(userGuess){
        // want to only compare the lower case 
        if (userGuess.toLowerCase() == this.letter)
        {
            this.guessedYet = true;
        }
    }
}

module.exports = Letter;

// Test Case
// var letter = new Letter("H");
// console.log("the letter is " + letter.letter);
// console.log("you've guessed this before " + letter.getLetter());
// letter.checkLetter("H");
// console.log("you've guessed this before " + letter.getLetter());
