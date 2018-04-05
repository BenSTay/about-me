'use strict';

//Initializes the score variable
var correctCount = 0;
var invalidInput;
var questionPrompts = [];
var questionAnswers = ['TRUE', 'FALSE', 'TRUE', 'TRUE', 'FALSE'];

//Fills questionPrompts with five questions.
questionPrompts.push('I was born in Washington State.');
questionPrompts.push('I went to Garfield High School.');
questionPrompts.push('I worked at a circus.');
questionPrompts.push('I still regularly buy music on CDs');
questionPrompts.push('I never coded anything before coming to CodeFellows.');

//Asks the user for their name, and stores their response in the userName variable.
var userName = prompt('Welcome to the "About Me" guessing game!\nPlease enter your name!');

//QUESTIONS 1-5
function trueOrFalse(questions, answers) {

  // //Initializes the variables used in the following loop.
  var userResponses = [];

  //The following code repeats 5 times, once for each index of questionPrompts
  for (var i in questions) {

  //The following code repeats until the user enters either 'TRUE' or 'FALSE'
    do {

      //Stores the user's response to the userResponses array in all caps.
      userResponses[i] = prompt('True or False: ' + questions[i]).toUpperCase();
      console.log('userResponses['+i+'] = ' + userResponses[i]);

      //Checks if the user entered either 'TRUE' or 'FALSE.
      if (userResponses[i] === 'TRUE' || userResponses[i] === 'FALSE') {

        //The invalidInput flag is set to false, which will cause the loop to end.
        invalidInput = false;

        /*Lets the user know if their answer was right or not.
  If the user entered the right answer, their score will increase. */
        if (userResponses[i] === answers[i]) {
          alert('Correct!');
          correctCount++;
        } else {
          alert('Incorrect!');
        }
      } else { //This runs if the user enters anything other than 'TRUE' or 'FALSE'.
        /*The invalidInput flag is set to true, which will cause the loop to continue.
  The user told that their response wasn't accepted. */
        invalidInput = true;
        alert('Invalid input, try again.');
      }
    } while (invalidInput);
  }
}

trueOrFalse(questionPrompts, questionAnswers);


//QUESTION 6

function numberGuess(answer, upperBound, lowerBound, userPrompt, tries) {

  var ageGuess;

  /*The following code repeats until the user either correctly answers the question,
or runs out of tries.
*/
  do {

  //Asks the user to guess my age, and stores their response in the variable ageGuess.
    ageGuess = parseInt(prompt(userPrompt + ' (' + tries + ' tries left)'));
    console.log('ageGuess = ' + ageGuess);

    /*Checks if the user entered a number. If not, the user is told that their input
  wasn't accepted.
  */
    if (isNaN(ageGuess)) {
      alert('Invalid input.');

    /*Checks if the user entered a negative number or thinks that I'm the oldest
    person who ever lived. If they did, the user is told not to be ridiculous.
    */
    } else if (ageGuess > upperBound || ageGuess < lowerBound) {
      alert('Don\'t be ridiculous!');
    } else {

    //Checks if the user guessed below my age.
      if (ageGuess < answer) {
        alert('Too low!');

      //Checks if the user guessed above my age.
      } else if (ageGuess > answer) {
        alert('Too high!');

      //The user's score increases and the loop ends if the correct age was guessed.
      } else {
        alert('Correct!');
        correctCount++;
        break;
      }
    }
    tries--;
  } while (tries > 0);
}

numberGuess(24, 122, 0, 'How old am I in years?', 4);

//QUESTION 7

//Initializes the variables used in the following loop.
var myDogs = ['MOBY', 'COCO', 'CARLY', 'BESSIE', 'BELLA'];

function wordGuess(answer, acceptedWords, userPrompt, tries) {

  var dogGuess;

  /*The following code repeats until either the user either correctly answers the question, or runs out of tries
*/

  userPrompt += '\n' + answer + ', ';

  for (var i in acceptedWords){
    userPrompt += acceptedWords[i];
    if (i < acceptedWords.length - 1) {
      userPrompt += ', ';
    }
  }

  do {

  //invalidInput is set to a default value (true).
    invalidInput = true;

    /*Asks the user to enter one of the listed names, and stores the response in the
  variable dogGuess
  */

    dogGuess = prompt(userPrompt).toUpperCase();
    console.log('dogGuess = ' + dogGuess);

    /*Checks if the correct answer was chosen. If so, the score increases and the loop
  ends.
  */
    if (dogGuess === answer) {
      alert('Correct!');
      correctCount++;
      break;
    }

    //Checks the user input against each of the valid answers.
    for (i of acceptedWords){
      if(dogGuess === i){
        alert('Incorrect!');
        invalidInput = false;
        break;
      }
    }

    /*If the user didn't enter one of the names given, the user is told that their input
  wasn't accepted.
  */
    if (invalidInput) {
      alert('Invalid input');
    }

    tries--;
  } while (tries > 0);
}

wordGuess('DUCKY', myDogs, 'Which of the following names does NOT belong to a dog that I\'ve'
+ ' lived with?', 6);


var endMessage = 'Thank you for playing, ' + userName + '! You correctly answered ' + correctCount + ' out of 7 '+ 'questions!';

if (correctCount >= 6) {
  endMessage += ' Great job!';
} else if (correctCount <= 3) {
  endMessage += ' Better luck next time!';
}
//Displays a message telling the user how many questions they got right.
alert(endMessage);