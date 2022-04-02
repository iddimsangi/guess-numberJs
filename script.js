'use strict';
let score = 20;
let HighScore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  HighScore = HighScore + score;
  document.querySelector('.highscore').textContent = HighScore;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#000';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const inValue = Number(document.querySelector('.guess').value);
  //   console.log(inValue, typeof inValue);

  if (inValue) {
    if (inValue > secretNumber) {
      document.querySelector('.message').textContent = 'Too High guessing';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else if (inValue < secretNumber) {
      document.querySelector('.message').textContent = 'Too low guessing';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (inValue == secretNumber) {
      document.querySelector('.message').textContent = 'Congratulations!!';
      document.querySelector('.number').textContent = secretNumber;
      score++;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = 'green';
    }
  } else {
    document.querySelector('.message').textContent = 'ENTER NUMBER PLEASE';
  }
});
