var ageNow = prompt('How old are you?');

ageNow = parseInt(ageNow);

if (ageNow > 15) {
  console.log('Hurray!');
} else {
  console.log('Boo!');
}

var agreeWithConditions = prompt('Do you agree with me? yes or no?');
var yesString = 'yes';
if (agreeWithConditions.toUpperCase() === yesString.toUpperCase()) {
  console.log('Neat!');
} else {
  console.log('Uncool');
}
