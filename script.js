'use strict';

// selecting elements this code will make your code appear as zero for player one and two
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// starting conditions this will hide your dice from your page so it does not appear
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// This code let you click the ROLL DICE AND IT WILL KEEP TRACK OF PLAYER ONE CURRENT SCORE
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2. Display dice

  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3. CHECK FOR ROLLED 1: IF TRUE, SWITCH TO NEXT PLAYER
  if (dice !== 1) {
    //Add dice to the current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // SWITCH TO NEXT PLAYER
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    // This code makes it so the color will change when one player gets on the dice 1 the next player will go this will highlight which player is currently playing
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
