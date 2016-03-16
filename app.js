var userName = prompt('Hello there. What is your name?');
alert('Well, ' + userName + ', Enjoy the following guessing game...');
console.log('Aked user for name. Got ' + userName);

var answer1 = prompt('Do you think I have a car?');
answer1 = answer1.toLowerCase();

if (answer1 === 'yes' || answer1 === 'y') {
  alert('Wrong, ' + userName + '. I used to have one, but I sold it last month.');
} else if (answer1 === 'no' || answer1 === 'n') {
  alert('Correct, ' + userName + '. I have a motorcycle, though.');
} else {
  alert('That is not a valid response. Please only enter "yes/no" or "y/n."');
};

var answer2 = prompt('Do you think my motorcycle is a sweet, loud, black-and-chrome, American-made machine?');
answer2 = answer2.toLowerCase();

if (answer2 === 'yes' || answer2 === 'y') {
  alert('Wrong, ' + userName + '. It is white and Italian and beautiful. I do like a good Harley, though.');
} else if (answer2 === 'no' || answer2 === 'n') {
  alert('Correct, ' + userName + '. It is Italian, in fact. Moto Guzzi V7. Look it up.');
} else {
  alert('I am pretty sure I already told you... Please only enter "yes/no" or "y/n."');
};

var answer3 = prompt('Had I been to Washington before coming here for Code Fellows?');
answer3 = answer3.toLowerCase();

if (answer3 === 'yes' || answer3 === 'y') {
  alert('Correct, ' + userName + '. This is probably my 20th time here.');
} else if (answer3 === 'no' || answer3 === 'n') {
  alert('Well, ' + userName + ', I had! Many, many times.');
} else {
  alert('Come on. Please only enter "yes/no" or "y/n."');
};

var answer4 = prompt('Am I over 30 years old?');
answer4 = answer4.toLowerCase();

if (answer4 === 'yes' || answer4 === 'y') {
  alert('Wrong, ' + userName + '. The beard adds a few years.');
} else if (answer4 === 'no' || answer4 === 'n') {
  alert('Correct, ' + userName + '.');
} else {
  alert('Seriously. Please only enter "yes/no" or "y/n."');
};

var answer5 = prompt('Do you know kung fu?');
answer5 = answer5.toLowerCase();

if (answer5 === 'yes' || answer5 === 'y') {
  var bonus = prompt('Sweet, ' + userName + '. Can you teach me?');
  bonus = bonus.toLowerCase();
  if (bonus === 'yes' || bonus === 'y') {
    alert(userName + ', when do we start?');
  } else if (bonus === 'no' || bonus === 'n') {
    alert('Fine, ' + userName + '. Be that way.');
  } else {
    alert('How did you get this far without learning how to answer the questions properly? Go away.');
  };

} else if (answer5 === 'no' || answer5 === 'n') {
  alert('Then you are of no use to me, ' + userName + '.');
} else {
  alert('You know that was invalid. You are done.');
};
