"use strict";

/*
 This is my version of the Pig Game before watching the tutorial 🤷

 NOTE::: This Version doesn't Comply with the DRY Method ⚠️⛔️⚠️ STILL Working on it THO 💪
*/

let player0 = document.querySelector(".player--0");
let player1 = document.querySelector(".player--1");

let score0 = document.getElementById("score--0");
let score1 = document.getElementById("score--1");

let diceEl = document.querySelector(".dice");

let currentScore0 = 0;
let currentScore1 = 0;
let currentPlayer = 0;
let player;

const determinePlayer = function (playerNumber) {
  playerNumber = playerNumber === 0 ? 1 : 0;
  return playerNumber;
};

const init = function () {
  currentScore0 = 0;
  currentScore1 = 0;
  currentPlayer = 0;

  score0.textContent = 0;
  score1.textContent = 0;
  diceEl.classList.add("hidden");
  document.getElementById("current--1").textContent = 0;
  document.getElementById("current--0").textContent = 0;
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
};

init();

const roll = function () {
  let dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove("hidden");

  if (currentPlayer === 0) {
    currentScore0 += dice;
    if (dice === 1) {
      currentScore0 = 0;
      hold();
    }
    document.getElementById("current--0").textContent = currentScore0;
  } else if (currentPlayer === 1) {
    currentScore1 += dice;
    if (dice === 1) {
      currentScore1 = 0;
      hold();
    }
    document.getElementById("current--1").textContent = currentScore1;
  }
};

document.querySelector(".btn--roll").addEventListener("click", roll);

const switchPlayer = function () {
  player = document.querySelector(`.player--${currentPlayer}`);
  player.classList.remove("player--active");
  currentPlayer = determinePlayer(currentPlayer);
  player = document.querySelector(`.player--${currentPlayer}`);
  player.classList.add("player--active");
};

const hold = function () {
  if (currentPlayer === 0) {
    document.getElementById("score--0").textContent =
      Number(document.getElementById("score--0").textContent) + currentScore0;
    currentScore0 = 0;
    document.getElementById("current--0").textContent = 0;
    checkWinner();
  } else if (currentPlayer === 1) {
    document.getElementById("score--1").textContent =
      Number(document.getElementById("score--1").textContent) + currentScore1;
    currentScore1 = 0;
    document.getElementById("current--1").textContent = 0;
    checkWinner();
  }
  switchPlayer();
};

document.querySelector(".btn--hold").addEventListener("click", hold);

const removeEvent = function () {
  document.querySelector(".btn--hold").removeEventListener("click", hold);
  document.querySelector(".btn--roll").removeEventListener("click", roll);
};

const addEvent = function () {
  document.querySelector(".btn--hold").addEventListener("click", hold);
  document.querySelector(".btn--roll").addEventListener("click", roll);
};

const checkWinner = function () {
  if (score0.textContent >= 100) {
    player0.classList.add("player--winner");
    removeEvent();
  } else if (score1.textContent >= 100) {
    player1.classList.add("player--winner");
    removeEvent();
  }
};

document.querySelector(".btn--new").addEventListener("click", function () {
  init();
  addEvent();
});
