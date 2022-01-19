'use strict';
//selecting elements
let score0El = document.getElementById('score--0');
let score1El = document.getElementById('score--1');
let dice = document.querySelector('.dice');
let btnRoll = document.querySelector('.btn--roll');
let btnNew = document.querySelector('.btn--new');
let btnHold = document.querySelector('.btn--hold');
let currentScore0EL = document.getElementById('current--0');
let currentScore1El = document.getElementById('current--1');
const playerFirst = document.querySelector('.player--0');
const playerSecond = document.querySelector('.player--1');

//starting conditions

let score;
let currentScore;
let activePlayer; //zero means is first player and 1 means second player;
let playing;

//intilizing the variables
function intailize() {
  activePlayer = 0;
  currentScore = 0;
  playing = true;
  score = [0, 0];
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0EL.textContent = 0;
  currentScore1El.textContent = 0;
  dice.classList.add('hidden');
  btnHold.classList.remove('hidden');
  btnRoll.classList.remove('hidden');
  if (playerFirst.classList.contains('player--winner'))
    playerFirst.classList.remove('player--winner');
  if (playerSecond.classList.contains('player--winner'))
    playerSecond.classList.remove('player--winner');
  if (!playerFirst.classList.contains('player--active'))
    playerFirst.classList.add('player--active');
  if (playerSecond.classList.contains('player--active'))
    playerSecond.classList.remove('player--active');
}

intailize();

//utility function to switch the player
const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer == 0 ? 1 : 0;
  currentScore = 0;
  playerFirst.classList.toggle('player--active');
  playerSecond.classList.toggle('player--active');
};

//rolling the dice
btnRoll.addEventListener('click', function () {
  if (playing) {
    let dicenumber = Math.trunc(Math.random() * 6) + 1;
    if (dice.classList.contains('hidden')) {
      dice.classList.remove('hidden');
    }
    dice.src = `dice-${dicenumber}.png`;
    if (dicenumber !== 1) {
      currentScore += dicenumber;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

//holding the current score  and add to original score of active player
btnHold.addEventListener('click', function () {
  if (playing) {
    let player = document.getElementById(`score--${activePlayer}`);
    score[activePlayer] += currentScore;
    player.textContent = score[activePlayer];
    if (score[activePlayer] < 100) {
      switchPlayer();
    } else {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
      btnHold.classList.add('hidden');
      btnRoll.classList.add('hidden');
      dice.classList.add('hidden');
    }
  }
});

//new game
btnNew.addEventListener('click', function () {
  intailize();
});
