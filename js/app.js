'use strict';
let counter = 0;
let userName = prompt('What is your name');

while (!userName) {
  userName = prompt('Please enter you name to begin!');
}

alert(`Welcome ${userName} ! Lets play a guessing game..answer with yes or no`);
// Question 1 //
let answer1 = prompt('Do I like chocolate?').toLowerCase();

if (answer1 === 'yes' || answer1 === 'y')
{ // console.log('yes')
  alert('That is not correct. Chocolate is gross');
} else if (answer1 === 'no' || answer1 === 'n'){ // console.log('no')
  alert('You are correct! I do not like chocolate');
  counter++;
}
// End Question 1 //
// Question 2 //
let answer2 = prompt('Do i enjoy coding?').toLowerCase();

if (answer2 === 'yes' || answer2 === 'y')
{ // console.log('yes')
  alert('That is correct. I wouldnt have started learning at Code Fellows');
  counter++;
}
else if (answer2 === 'no' || answer2 === 'n')
{ // console.log('no')
  alert('That is incorrect I love the challenges of coding!');
}
// End Question 2 //
// Question 3 //
let answer3 = prompt('Do i write with my left hand?').toLowerCase();

if (answer3 === 'yes' || answer3 === 'y')
{ // console.log('yes')
  alert('That is correct and I am very ambedextrious with the exception of writing with my right ');
  counter++;
}
else if (answer3 === 'no' || answer3 === 'n')
{ // console.log('no')
  alert('That is incorrect I am a very ambedextrious lefty with the exception of writing with my right');
}
// End Question 3 //
// Question 4 //
let answer4 = prompt('Do I play on hard difficulty on Guitar Hero?').toLowerCase();

if (answer4 === 'yes' || answer4 === 'y')
{ // console.log('yes')
  alert('Wrong! I can play expert on guitar hero! I started playing when i was about 10-11 years old.');
}
else if (answer4 === 'no' || answer4 === 'n')
{ // console.log('no')
  alert('That is correct! I can play expert on guitar hero! I started playing when i was about 10-11 years old.');
  counter++;
}
// End Question 4 //
// Question 5 //
let answer5 = prompt('Do I think that Kendrick Lamar is the greatest music artist alive?').toLowerCase();

if (answer5 === 'yes' || answer5 === 'y')
{ // console.log('yes')
  alert('You are darn right!! His discography replayabilty is unmatched!' );
  counter++;
}
else if (answer5 === 'no' || answer5 === 'n')
{ // console.log('no')
  alert('You have got to be joking if you dont think that I love Kendrick Lamar!');
}
// End Question 5 //
// Question 6 //
function questionSix() {
  let answer6 = prompt('Guess a number from 1-10?');
  let answer6b = parseInt(answer6);
  console.log(answer6b);

  if (answer6b < 2) {
    alert('It\'s higher. Four more tries.');
  } else if (answer6b > 2) {
    alert('It\'s lower. Four more tries.');
  } else {
    alert('Correct.');
    maxNumberOfAnswer = 4;
  }
}

let maxNumberOfAnswer = 0;

while(maxNumberOfAnswer < 4 ){
  maxNumberOfAnswer++;
  questionSix();}
alert('The answer is 2.');
// End Question 6 //

// Question 7 //
let answer7 = ['yellow','orange'];
let score = 0;
for(let i = 0; i < 6; i++){

  let guess7 = prompt('What color is the 3rd and 5th fret button on a guitar hero controller? Green? Yellow? Red? Blue? White? or Orange?').toLowerCase();
  for(let j = 0; j < answer7.length; j++){
    if (answer7[j] === guess7){
      alert('You are correct');
      score++;
      i = 6;
      break;
    }
  }
  score++;

}
// End Question 7//
alert(`It took you ${score} times to answer. The correct answers were ${answer7}. `);

alert('Thanks for playing ' + userName + ' your overall score was ' + counter + ' out of 7');




