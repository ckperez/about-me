var correctAnswers = [];

var questionsArray = [];
var responsesArray = [];
var promptQ1 = 'Do you think I have a car?';
var promptQ2 = 'Do you think my motorcycle is a sweet, loud, black-and-chrome, American-made machine?';
var promptQ3 = 'Had I been to Washington before coming here for Code Fellows?';
var promptQ4 = 'Am I over 30 years old?';
var promptQ5 = 'Is Conan a Barbarian?';
var promptQ6 = 'So, ' + userName + ', is crushing your enemies, seeing them driven before you, and hearing the lamentations of their women best in life?';
var promptQ7 = 'How many motorcycles have I owned?';

var answerOne = document.getElementById('ans1');
var answerTwo = document.getElementById('ans2');
var answerThree = document.getElementById('ans3');
var answerFour = document.getElementById('ans4');
var answerFive = document.getElementById('ans5');
var answerSix = document.getElementById('ans6');
var answerSeven = document.getElementById('ans7');

var userName = prompt('Hello there. What is your name?');
alert('Well, ' + userName + ', Enjoy the following guessing game...');
console.log('Aked user for name. Got ' + userName);

function ask1(){
  var answer1 = prompt(promptQ1);
  questionsArray.push(promptQ1);
  answer1 = answer1.toLowerCase();
  console.log('used str.toLowerCase() to avoid case sensitivity issues in responses.');

  if (answer1 === 'yes' || answer1 === 'y') {
    //alert('Wrong, ' + userName + '. I used to have one, but I sold it last month.');
    //console.log('user answered yes. Wrong.');
    answerOne.textContent = 'Wrong, ' + userName + '. I used to have one, but I sold it last month.';
    responsesArray.push(answerOne.textContent);
  } else if (answer1 === 'no' || answer1 === 'n') {
    //alert('Correct, ' + userName + '. I have a motorcycle, though.');
    //console.log('user answered no. Correct.');
    answerOne.textContent = 'Correct, ' + userName + '. I have a motorcycle, though.';
    responsesArray.push(answerOne.textContent);
    correctAnswers.push(true);
  } else {
    alert('That is not a valid response. Please only enter "yes/no" or "y/n."');
    console.log('invalid response given');
  };
};

function ask2(){
  var answer2 = prompt(promptQ2);
  questionsArray.push(promptQ2);
  answer2 = answer2.toLowerCase();
  console.log('used str.toLowerCase() to avoid case sensitivity issues in responses.');

  if (answer2 === 'yes' || answer2 === 'y') {
    //alert('Wrong, ' + userName + '. It is white and Italian and beautiful. I do like a good Harley, though.');
    //console.log('user answered yes. Wrong.');
    answerTwo.textContent = 'Wrong, ' + userName + '. It is white and Italian and beautiful. I do like a good Harley, though.';
    responsesArray.push(answerTwo.textContent);
  } else if (answer2 === 'no' || answer2 === 'n') {
    //alert('Correct, ' + userName + '. It is Italian, in fact. Moto Guzzi V7. Look it up.');
    //console.log('user answered no. Correct.');
    answerTwo.textContent = 'Correct, ' + userName + '. It is Italian, in fact. Moto Guzzi V7. Look it up.';
    responsesArray.push(answerTwo.textContent);
    correctAnswers.push(true);
  } else {
    alert('I am pretty sure I already told you... Please only enter "yes/no" or "y/n."');
    console.log('invalid response given');
  };
};

function ask3(){
  var answer3 = prompt(promptQ3);
  questionsArray.push(promptQ3);
  answer3 = answer3.toLowerCase();
  console.log('used str.toLowerCase() to avoid case sensitivity issues in responses.');

  if (answer3 === 'yes' || answer3 === 'y') {
    //alert('Correct, ' + userName + '. This is probably my 20th time here.');
    //console.log('used answered yes. Correct.');
    answerThree.textContent = 'Correct, ' + userName + '. This is probably my 20th time here.';
    responsesArray.push(answerThree.textContent);
    correctAnswers.push(true);
  } else if (answer3 === 'no' || answer3 === 'n') {
    //alert('Well, ' + userName + ', I had! Many, many times.');
    //console.log('user answered no. Wrong.');
    answerThree.textContent = 'Well, ' + userName + ', I had! Many, many times.';
    responsesArray.push(answerThree.textContent);
  } else {
    alert('Come on. Please only enter "yes/no" or "y/n."');
    console.log('invalid response given');
  };
};

function ask4(){
  var answer4 = prompt(promptQ4);
  questionsArray.push(promptQ4);
  answer4 = answer4.toLowerCase();
  console.log('used str.toLowerCase() to avoid case sensitivity issues in responses.');

  if (answer4 === 'yes' || answer4 === 'y') {
    //alert('Well, ' + userName + ', I had! Many, many times.');
    //console.log('user answered yes. Wrong.');
    answerFour.textContent = 'Well, ' + userName + ', I had! Many, many times.';
    responsesArray.push(answerFour.textContent);
  } else if (answer4 === 'no' || answer4 === 'n') {
    //alert('Correct, ' + userName + '.');
    //console.log('user answered no. Correct.');
    answerFour.textContent = 'Correct, ' + userName + '.';
    responsesArray.push(answerFour.textContent);
    correctAnswers.push(true);
  } else {
    alert('Seriously. Please only enter "yes/no" or "y/n."');
    console.log('invalid response given');
  };
};

function ask5(){
  var answer5 = prompt(promptQ5);
  questionsArray.push(promptQ5);
  answer5 = answer5.toLowerCase();
  console.log('used str.toLowerCase() to avoid case sensitivity issues in responses.');

  if (answer5 === 'yes' || answer5 === 'y') {
    answerFive.textContent = 'Correct.';
    responsesArray.push(answerFive.textContent);
    ask6();
    function ask6(){
      var bonus = prompt(promptQ6);
      questionsArray.push(promptQ6);
      correctAnswers.push(true);
      bonus = bonus.toLowerCase();
      console.log('used str.toLowerCase() to avoid case sensitivity issues in responses.');
      if (bonus === 'yes' || bonus === 'y') {
        //alert(userName + ', you are so right. Though the open steppe, fleet horse, falcons at your wrist, and the wind in your hair is also good.');
        answerSix.textContent = 'Oh, ' + userName + ', you are so right. Though the open steppe, fleet horse, falcons at your wrist, and the wind in your hair is also good.';
        responsesArray.push(answerSix.textContent);
        correctAnswers.push(true);
        //console.log('user said yes! Going to learn kung fu');
      } else if (bonus === 'no' || bonus === 'n') {
        //alert('Wrong, ' + userName + '! Go ask Conan what is best in life.');
        //console.log('user said no. user is lame.');
        answerSix.textContent = 'Wrong, ' + userName + '! Go ask Conan what is best in life.';
        responsesArray.push(answerSix.textContent);
      } else {
        alert('How did you get this far without learning how to answer the questions properly? Go away.');
        console.log('invalid response given');
      };
    };
  } else if (answer5 === 'no' || answer5 === 'n') {
    //alert('Wrong, ' + userName + '. Even if you were thinking of the late-night TV host.');
    //console.log('user answered no. Game over.');
    answerFive.textContent = 'Wrong, ' + userName + '. Even if you were thinking of the late-night TV host.';
    responsesArray.push(answerFive.textContent);

  } else {
    alert('You know that was invalid. You are done.');
    console.log('invalid response given');
  };

};

function ask7(){
  for (var i = 0; i < 4 && numMotorcycles !== 2 ; i++) {
    var numMotorcycles = prompt(promptQ7);
    questionsArray.push(promptQ7);
    numMotorcycles = parseInt(numMotorcycles);
    if (numMotorcycles < 2) {
      alert('Too low!');
      responsesArray.push('Too low!');
    //  console.log('Guess too low');

    } else if (numMotorcycles > 2) {
      alert('Too high!');
      responsesArray.push('Too high!');
    //  console.log('Guess too high');
    } else if (isNaN(numMotorcycles)) {
      alert('That does not make sense.');
      responsesArray.push('invalid');
    //  console.log('Guess not a number');
    } else {
    //  alert('Correct!');
    //  console.log('Correct. Loop should stop.');
      answerSeven.textContent = 'Correct.';
      responsesArray.push(answerSeven.textContent);
      correctAnswers.push(true);
    }
  };
};

ask1();
ask2();
ask3();
ask4();
ask5();
ask7();

console.table(questionsArray);
console.table(responsesArray);
console.log(correctAnswers.length);

/*alert('You got ' + correctAnswers.length + ' out of 7 questions right. Nice job, ' + userName);

var favGames = [];
for (var i = 0; i < 5; i++) {

  favGames.push(prompt('Tell me one of your five favorite games?'));
}

alert('So... your favorite games are ' + favGames.join(', ') + '.'); */
