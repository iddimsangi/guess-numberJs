'use strict';
let score = 20;
let HighScore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

const messageContent = message =>
  (document.querySelector('.message').textContent = message);
const scoreContent = score =>
  (document.querySelector('.score').textContent = score);
const numberContent = number =>
  (document.querySelector('.number').textContent = number);
const bodyContent = color =>
  (document.querySelector('body').style.backgroundColor = color);
document.querySelector('.again').addEventListener('click', function () {
  messageContent('Start guessing...');
  score = 20;
  scoreContent(score);
  bodyContent('#000');
  numberContent('?');
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secretNumber);
});

document.querySelector('.check').addEventListener('click', function () {
  const inValue = Number(document.querySelector('.guess').value);

  if (inValue) {
    if (inValue > secretNumber) {
      messageContent('Too High guessing');
      score = score - 1;
      scoreContent(score);
    } else if (inValue < secretNumber) {
      messageContent('Too low guessing');
      score--;
      scoreContent(score);
    } else if (inValue == secretNumber) {
      messageContent('Congratulations!!');
      numberContent(secretNumber);
      score++;
      scoreContent(score);

      document.querySelector('.highscore').textContent =
        score > HighScore ? (HighScore = score) : HighScore;
      bodyContent('green');
    }
  } else {
    messageContent('ENTER NUMBER PLEASE');
  }
});
