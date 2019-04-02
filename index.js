// This file contains the logic for the course of the game, which depends on `Word.js` 
var Word = require("./word");

// Load the NPM Package inquirer
// This package will be used to ask the user to chose their options
var inquirer = require("inquirer");

// Bank of Words for the Word Guess Game
// Top Secret!!
var travelWords = [
  "adventure",
  "train",
  "airplane",
  "mountain",
  "river",
  "road",
  "hotel",
  "restaurant"
];

//   * Randomly selects a word and uses the `Word` constructor to store it
// shuffle the array so you don't always get the same order of words
travelWords = shuffle(travelWords);
// Get a new top secret word, select the first one
var theWord = new Word(travelWords[0]);
console.log("The word is "+ theWord.theWord);
// keep going until reached 10 tries
var maxTry = 10;
// the number of tries left
var triesLeft = maxTry;
// the number of games so far
var numGames = 0;


//  Prompts the user for each guess and keeps track of the user's remaining guesses
var askQuestion = function() {
  // if statement to ensure that our questions are only asked five times
  if (triesLeft > 0) {

    // Create a "Prompt" with a question.
    inquirer.prompt([
        // Here we give the user a list to choose from.
        {
          type: "input",
          message: "Tries left:" + triesLeft + "\nHere is your word: " + theWord.displayWord() + "\nPlease guess a letter",
          name: "action"
        }
      ])
      .then(function(inquirerResponse) {
        console.log("the prompt is " + inquirerResponse.action)
        theWord.checkUserGuess(inquirerResponse.action);
        triesLeft--;
        // Want to check if the word was guessed. Print Congratualions and grab a new word.
        if (!theWord.displayWord().includes("_")){
          console.log("Congratulations you got it!");
          console.log("Let's pick a new word!");
          resetGame();
        }
        askQuestion();
      });

    }// end of if
    else {
      console.log("You are out of guesses. The answer is: " + theWord.theWord);
      console.log("Let's pick a new word!");
      resetGame();
      askQuestion();
    }
}// end of ask question
askQuestion();


// An array for players guesses
var guesses;


// Let's jumble the order of travelWords array, So you never know what you're going to get.
// Fisher-Yates (aka Knuth) Shuffle.
function shuffle(array) 
{
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element... Once element is picked the currentIndex is reduced and so is the range of randomIndex
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  // This function will prepare the screen for a new game
function resetGame()
{
    //Increase the number of games for next time
    numGames++;
    // if we have run through the entire array of candy words, We will reset and run through them again
    if (numGames==travelWords.length)
    {
        numGames = 0;
    }
    // Get a new top secret word
    // store the selected word inside a Word obbject
    theWord = new Word(travelWords[numGames]);

    // reset user guesses
    // guesses = new Array();
    // reset the number of tries
    triesLeft = maxTry;    
}

  