"use strict";

// let randomNumber = Math.trunc(Math.random() * 20 + 1);
// let score = 20;

// let myNumber = Number(prompt("Enter a Number between 1 to 20 !"));

// const check = function (inputNumber, generatedNumber) {
//   if (inputNumber === generatedNumber) return true;
// };

// while (!check(myNumber, randomNumber)) {
//   score--;
//   console.log(`Wrong please try again...`);
//   myNumber = Number(prompt("Enter a Number between 1 to 20 !"));
// }

// if (check(myNumber, randomNumber))
//   console.log(`correct the number is indeed ${randomNumber}`);

// console.log(` your score is ${score}`);

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "🎉 Correct Number!";

// document.querySelector(".number").textContent = 11;

// document.querySelector(".score").textContent = 7;

//document.querySelector(".guess").value = 7;

// console.log(document.querySelector(".guess").value);

let randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess)
    document.querySelector(".message").textContent = "Not a valid Number⛔️";
  else if (guess === randomNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector(".number").textContent = randomNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > randomNumber ? "📈 Too high!" : "📉 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    document.querySelector(".message").textContent = "You Lost 💀";
    document.querySelector(".score").textContent = 0;
  }
});

/// the again button to restart the game

document.querySelector(".again").addEventListener("click", function () {
  let randomNumber = Math.trunc(Math.random() * 20 + 1);
  let score = 20;

  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textConten = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
});
