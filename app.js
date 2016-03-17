var correctAnswers = [];

var userName = prompt('Hello there. What is your name?');
alert('Well, ' + userName + ', Enjoy the following guessing game...');
console.log('Aked user for name. Got ' + userName);

var answer1 = prompt('Do you think I have a car?');
answer1 = answer1.toLowerCase();
console.log('used str.toLowerCase() to avoid case sensitivity issues in responses.');

if (answer1 === 'yes' || answer1 === 'y') {
  alert('Wrong, ' + userName + '. I used to have one, but I sold it last month.');
  console.log('user answered yes. Wrong.');
} else if (answer1 === 'no' || answer1 === 'n') {
  alert('Correct, ' + userName + '. I have a motorcycle, though.');
  correctAnswers.push(true);
  console.log('user answered no. Correct.');
} else {
  alert('That is not a valid response. Please only enter "yes/no" or "y/n."');
  console.log('invalid response given');
};

var answer2 = prompt('Do you think my motorcycle is a sweet, loud, black-and-chrome, American-made machine?');
answer2 = answer2.toLowerCase();
console.log('used str.toLowerCase() to avoid case sensitivity issues in responses.');

if (answer2 === 'yes' || answer2 === 'y') {
  alert('Wrong, ' + userName + '. It is white and Italian and beautiful. I do like a good Harley, though.');
  console.log('user answered yes. Wrong.');
} else if (answer2 === 'no' || answer2 === 'n') {
  alert('Correct, ' + userName + '. It is Italian, in fact. Moto Guzzi V7. Look it up.');
  correctAnswers.push(true);
  console.log('user answered no. Correct.');
} else {
  alert('I am pretty sure I already told you... Please only enter "yes/no" or "y/n."');
  console.log('invalid response given');
};

var answer3 = prompt('Had I been to Washington before coming here for Code Fellows?');
answer3 = answer3.toLowerCase();
console.log('used str.toLowerCase() to avoid case sensitivity issues in responses.');

if (answer3 === 'yes' || answer3 === 'y') {
  alert('Correct, ' + userName + '. This is probably my 20th time here.');
  correctAnswers.push(true);
  console.log('used answered yes. Correct.');
} else if (answer3 === 'no' || answer3 === 'n') {
  alert('Well, ' + userName + ', I had! Many, many times.');
  console.log('user answered no. Wrong.');
} else {
  alert('Come on. Please only enter "yes/no" or "y/n."');
  console.log('invalid response given');
};

var answer4 = prompt('Am I over 30 years old?');
answer4 = answer4.toLowerCase();
console.log('used str.toLowerCase() to avoid case sensitivity issues in responses.');

if (answer4 === 'yes' || answer4 === 'y') {
  alert('Wrong, ' + userName + '. The beard adds a few years.');
  console.log('user answered yes. Wrong.');
} else if (answer4 === 'no' || answer4 === 'n') {
  alert('Correct, ' + userName + '. The beard made you think about it, right?');
  correctAnswers.push(true);
  console.log('user answered no. Correct.');
} else {
  alert('Seriously. Please only enter "yes/no" or "y/n."');
  console.log('invalid response given');
};

var answer5 = prompt('Is Conan a barbarian?');
answer5 = answer5.toLowerCase();
console.log('used str.toLowerCase() to avoid case sensitivity issues in responses.');
if (answer5 === 'yes' || answer5 === 'y') {
  var bonus = prompt('Correct, ' + userName + '. Now, is crushing your enemies, seeing them driven before you, and hearing the lamentations of their women best in life?');
  correctAnswers.push(true);
  bonus = bonus.toLowerCase();
  console.log('used str.toLowerCase() to avoid case sensitivity issues in responses.');
  if (bonus === 'yes' || bonus === 'y') {
    alert(userName + ', you are so right. Though the open steppe, fleet horse, falcons at your wrist, and the wind in your hair is also good.');
    correctAnswers.push(true);
    console.log('user said yes. Correct.');
  } else if (bonus === 'no' || bonus === 'n') {
    alert('Wrong, ' + userName + '! Go ask Conan what is best in life.');
    console.log('user said no. Wrong.');
  } else {
    alert('How did you get this far without learning how to answer the questions properly? Go away.');
    console.log('invalid response given');
  };
} else if (answer5 === 'no' || answer5 === 'n') {
  alert('Wrong, ' + userName + '. Even if you were thinking of the late-night TV host.');
  console.log('user answered no. Game over.');
} else {
  alert('You know that was invalid. You are done.');
  console.log('invalid response given');
};

for (var i = 0; i < 4 && numMotorcycles != 2 ; i++) {
  var numMotorcycles = prompt('How many motorcycles have I owned?');
  if (numMotorcycles < 2) {
    alert('Too low!');
    console.log('Guess too low');
  } else if (numMotorcycles > 2) {
    alert('Too high!');
    console.log('Guess too high');
  } else if (isNaN(numMotorcycles)) {
    alert('That does not make sense.');
    console.log('Guess not a number');
  } else {
    alert('Correct!');
    console.log('Correct. Loop should stop.');
    correctAnswers.push(true);
  }
};

alert('You got ' + correctAnswers.length + ' out of 7 questions right.');

var favGames = [];
for (var i = 0; i < 5; i++) {

  favGames.push(prompt('Tell me one of your five favorite games?'));
}
alert('So... your favorite games are ' + favGames.join(', ') + '.');
