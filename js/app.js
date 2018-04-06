'use strict';

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
        If the user entered the right answer, their score will increase.
        */
        if (userResponses[i] === answers[i]) {
          alert('Correct!');
          correctCount++;
        } else {
          alert('Incorrect!');
        }
      } else { //This runs if the user enters anything other than 'TRUE' or 'FALSE'.
        /*The invalidInput flag is set to true, which will cause the loop to continue.
        The user told that their response wasn't accepted.
        */
        invalidInput = true;
        alert('Invalid input, try again.');
      }
    } while (invalidInput);
  }
}

function numberGuess(answer, upperBound, lowerBound, userPrompt, tries) {

  //Local variables
  var guess;

  /*The following code repeats until the user either correctly answers the question,
  or runs out of tries.
  */
  do {

    //Asks the user to guess my age, and stores their response in the variable ageGuess.
    if (tries > 1){
      guess = parseInt(prompt(userPrompt + ' (' + tries + ' tries left!)'));
    } else {
      guess = parseInt(prompt(userPrompt + ' (' + tries + ' try left!)'));
    }
    console.log('ageGuess = ' + guess);

    /*Checks if the user entered a number. If not, the user is told that their input
    wasn't accepted.
    */
    if (isNaN(guess)) {
      alert('Invalid input.');

    /*Checks if the user entered a negative number or thinks that I'm the oldest
    person who ever lived. If they did, the user is told not to be ridiculous.
    */
    } else if (guess > upperBound || guess < lowerBound) {
      alert('Don\'t be ridiculous!');
    } else {

    //Checks if the user guessed below my age.
      if (guess < answer) {
        alert('Too low!');

      //Checks if the user guessed above my age.
      } else if (guess > answer) {
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

function wordGuess(answer, acceptedWords, userPrompt, tries) {

  //Local variables
  var guess;
  var answerPos = Math.floor(acceptedWords.length / 2);

  /*Adds the possible answers to the prompt on a new line, with the correct answer
  inserted halfway through the list.
  */
  userPrompt += '\n';
  for (var i = 0; i < acceptedWords.length; i++){
    if (i === answerPos){
      userPrompt += answer.charAt(0) + answer.substring(1).toLowerCase()+ ', ';
    }
    userPrompt += acceptedWords[i].charAt(0);
    userPrompt += acceptedWords[i].substring(1).toLowerCase();
    if (i < acceptedWords.length - 1) {
      userPrompt += ', ';
    }
  }

  /*The following code repeats until either the user either correctly answers the
  question, or runs out of tries
  */
  do {

  //invalidInput is set to a default value (true).
    invalidInput = true;

    /*Asks the user to enter one of the listed names, and stores the response in the
    variable dogGuess
    */

    guess = prompt(userPrompt).toUpperCase();
    console.log('dogGuess = ' + guess);

    /*Checks if the correct answer was chosen. If so, the score increases and the loop
    ends.*/
    if (guess === answer) {
      alert('Correct!');
      correctCount++;
      break;
    }

    //Checks the user input against each of the valid answers.
    for (i of acceptedWords){
      if(guess === i){
        alert('Incorrect!');
        invalidInput = false;
        break;
      }
    }

    /*If the user didn't enter one of the names given, the user is told that their
    input wasn't accepted.*/
    if (invalidInput) {
      alert('Invalid input');
    }

    tries--;
  } while (tries > 0);
}

//MAIN PROGRAM

//Initializes global variables
var correctCount = 0;
var invalidInput;
var questionPrompts = [];
var questionAnswers = ['TRUE', 'FALSE', 'TRUE', 'TRUE', 'FALSE'];
var myDogs = ['MOBY', 'COCO', 'CARLY', 'BESSIE', 'BELLA'];

//Fills questionPrompts with five questions.
questionPrompts.push('I was born in Washington State.');
questionPrompts.push('I went to Garfield High School.');
questionPrompts.push('I worked at a circus.');
questionPrompts.push('I still regularly buy music on CDs');
questionPrompts.push('I never coded anything before coming to CodeFellows.');

//Asks the user for their name, and stores their response in the userName variable.
var userName = prompt('Welcome to the "About Me" guessing game!\nPlease enter your name!');

//Questions 1-5
trueOrFalse(questionPrompts, questionAnswers);

//Question 6
numberGuess(24, 122, 0, 'How old am I in years?', 4);

//Question 7
wordGuess('DUCKY', myDogs, 'Which of the following names does NOT belong to a dog that'
+' I\'ve lived with?', 6);

//Generates a message that includes the user's name and the user's score.
var endMessage = 'Thank you for playing, ' + userName + '! You correctly answered ' +
correctCount + ' out of 7 '+ 'questions!';

if (correctCount >= 6) {
  endMessage += ' Great job!';
} else if (correctCount <= 3) {
  endMessage += ' Better luck next time!';
}
//Displays the message
alert(endMessage);