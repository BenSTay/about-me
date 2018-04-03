'use strict';

//Creates a variable used to count the number of correct responses.
var correctCount = 0;

//Creates a dialog with an introductory message.
alert('Welcome to the "About Me" guessing game!');

/*Initializes the variable ageGuess and asks the user to guess my age. The returned
  value is assigned to ageGuess as an integer. This event is then logged in the
  console.
*/
var ageGuess = parseInt(prompt('How old am I, in years?\nPlease enter a number:'));
console.log('Age guess: ' + ageGuess);


/*Checks the guessed age against my actual age, 24. The user is then told if their
  guess was correct or not and correctCount is incremented if they were.
*/
if (ageGuess === 24) {
  alert('Correct!');
  correctCount++;
} else {
  alert('Incorrect!');
}

/*Initializes the variable stateGuess and asks the user to guess which state I'm from.
  The returned value is assigned to stateGuess as a capitalized string. This event is
  then logged in the console.
*/
var stateGuess = prompt('Which state am I from?\nPlease enter a 2-letter state '+ 'abbreviation').toUpperCase();
console.log('State guess: ' + stateGuess);

/*Checks the guessed state against my actual home state, WA. The user is then told if
  their guess was correct or not and correctCount is incremented if they were.
*/
if (stateGuess === 'WA') {
  alert('Correct!');
  correctCount++;
} else {
  alert('Incorrect!');
}

/*Initializes the variable schoolGuess and asks the user to guess if I went to
  Garfield High School. The returned value is assigned to stateGuess as a capitalized
  string. This event is then logged in the console.
*/
var schoolGuess = prompt('True or False: I went to Garfield High School.').toUpperCase();
console.log('School guess: ' + schoolGuess);

/*Checks the guess against the correct response, FALSE. The user is then told if
  their guess was correct or not and correctCount is incremented if they were. If the user enters something other than TRUE or FALSE, an alert is displayed telling the user their response was not recognized.
*/
if (schoolGuess === 'FALSE') {
  alert('Correct!');
  correctCount++;
} else if (schoolGuess === 'TRUE') {
  alert('Incorrect!');
} else {
  alert('ERROR: Invalid input!');
}

/*Initializes the variable petGuess and asks the user to guess which name does not
  belong to a dog I've owned. The returned value is assigned to stateGuess as a capitalized string. This event is then logged in the console.
*/
var petGuess = prompt('Which of the following is NOT the name of a dog I\'ve owned:'+
' Moby, Coco, Ducky, or Carly?').toUpperCase();
console.log('Pet guess: ' + petGuess);

/*Checks the guessed name against the correct response, DUCKY. The user is then told if
  their guess was correct or not and correctCount is incremented if they were. If the user enters something other than one of the given names, an alert is displayed telling the user their response was not recognized.
*/
switch (petGuess) {
case 'MOBY':
  alert('Incorrect!');
  break;
case 'COCO':
  alert('Incorrect!');
  break;
case 'DUCKY':
  alert('Correct!');
  correctCount++;
  break;
case 'CARLY':
  alert('Incorrect!');
  break;
default:
  alert('ERROR: Invalid input!');
}

/*Initializes the variable circusGuess and asks the user to guess if I've worked at a
  circus. The returned value is assigned to stateGuess as a capitalized string. This event is then logged in the console.
*/
var circusGuess = prompt('True or False: Have I ever worked at a circus?').toUpperCase();
console.log('Circus guess: ' + circusGuess);

/*Checks the guess against the correct response, TRUE. The user is then told if
  their guess was correct or not and correctCount is incremented if they were. If the user enters something other than TRUE or FALSE, an alert is displayed telling the user their response was not recognized.
*/
if (circusGuess === 'TRUE') {
  alert('Correct!');
  correctCount++;
} else if (circusGuess === 'FALSE') {
  alert('Incorrect!');
} else {
  alert('ERROR: Invalid input!');
}

//Displays a message telling the user how many questions they got right.
alert('Thank you for playing! You correctly answered ' + correctCount + ' out of 5 '+
'questions!');