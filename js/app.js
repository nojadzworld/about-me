'use strict';

let userName = prompt('What is your name');

alert(`Welcome ${userName} ! Lets play a guessing game..answer with yes or no`);

let answer1 = prompt('Do I like chocolate?').toLowerCase();

if (answer1 === 'yes' || answer1 === 'y')
{
  alert('That is not correct. Chocolate is gross');
} else if (answer1 === 'no' || answer1 === 'n'){ // console.log(no)
  alert('You are correct! I do not like chocolate');
}

let answer2 = prompt('Do i enjoy coding?').toLowerCase();

if (answer2 === 'yes' || answer2 === 'y')
{
  alert('That is correct. I wouldnt have started learning at Code Fellows');
}
else if (answer2 === 'no' || answer2 === 'n')
{
  alert('That is incorrect I love the challenges of coding!');
}

let answer3 = prompt('Do i write with my left hand?').toLowerCase();

if (answer3 === 'yes' || answer3 === 'y')
{
  alert('That is correct and I am very ambedextrious with the exception of writing with my right ');
}
else if (answer3 === 'no' || answer3 === 'n')
{
  alert('That is incorrect I am a very ambedextrious lefty with the exception of writing with my right');
}

let answer4 = prompt('Do I play on hard difficulty on Guitar Hero?').toLowerCase();

if (answer4 === 'yes' || answer4 === 'y')
{
  alert('Wrong! I can play expert on guitar hero! I started playing when i was about 10-11 years old.');
}
else if (answer4 === 'no' || answer4 === 'n')
{
  alert('That is correct! I can play expert on guitar hero! I started playing when i was about 10-11 years old.');
}

let answer5 = prompt('Do I think that Kendrick Lamar is the greatest music artist alive?').toLowerCase();

if (answer5 === 'yes' || answer5 === 'y')
{
  alert('You are darn right!! His discography replayabilty is unmatched!' );
}
else if (answer5 === 'no' || answer5 === 'n')
{
  alert('You have got to be joking if you dont think that I love Kendrick Lamar!');
}

alert(`Thanks for playing ${userName}!`);




