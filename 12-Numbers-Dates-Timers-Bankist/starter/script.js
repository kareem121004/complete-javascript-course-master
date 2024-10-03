"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
// Functions

const displayMovement = function (movement, sort = false) {
  containerMovements.innerHTML = "";
  const movs = sort ? movement.slice().sort((a, b) => a - b) : movement;
  movs.forEach(function (value, idx) {
    const type = value > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      idx + 1
    } ${type} </div>
        <div class="movements__value">${value.toFixed(2)}£</div>
    </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calculateBalnace = function (account) {
  const balance = account.movements.reduce((acc, cur) => acc + cur);
  account.balance = balance;
  labelBalance.textContent = balance.toFixed(2) + "£";
};

const calcDisplaySummary = function (account) {
  const income = account.movements
    .filter((mov) => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = income.toFixed(2) + "£";

  const outs = account.movements
    .filter((mov) => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `${(outs * -1).toFixed(2)}£`;

  const interest = account.movements
    .filter((mov) => mov > 0)
    .map((mov) => (mov * account.interestRate) / 100)
    .filter((mov) => mov >= 1)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumInterest.textContent = interest.toFixed(2) + "£";
};

const computeUserName = function (accounts) {
  accounts.forEach(function (account) {
    account.userName = account.owner
      .toLowerCase()
      .split(" ")
      .map((value) => value.at(0))
      .join("");
  });
};

computeUserName(accounts);

const displayUI = function (account) {
  displayMovement(account.movements);
  calculateBalnace(account);
  calcDisplaySummary(account);
};

// Event Handlers
// Login
let currentAccount;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.userName === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome Back ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = "1";
    inputLoginUsername.value = inputLoginPin.value = "";

    displayUI(currentAccount);
  }
});

// Transfer
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const transTo = inputTransferTo.value;
  const transAmount = Number(inputTransferAmount.value);
  const targetAccount = accounts.find((acc) => acc.userName === transTo);
  if (
    transAmount > 0 &&
    currentAccount.balence >= transAmount &&
    targetAccount?.userName !== currentAccount.userName
  ) {
    currentAccount.movements.push(transAmount * -1);
    targetAccount.movements.push(transAmount);
    inputTransferTo.value = inputTransferAmount.value = "";
    displayUI(currentAccount);
  }
});

// Loan Functionality

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    Number(inputLoanAmount.value) > 0 &&
    currentAccount.movements.some(
      (mov) => mov >= Number(inputLoanAmount.value) * 0.1
    )
  ) {
    currentAccount.movements.push(Number(inputLoanAmount.value));
    displayUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

// Close

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  const confirmUser = inputCloseUsername.value;
  const confirmPin = Number(inputClosePin.value);

  inputCloseUsername.value = inputClosePin.value = "";
  if (
    currentAccount.userName === confirmUser &&
    currentAccount.pin === confirmPin
  ) {
    const accountToDelete = accounts.findIndex(
      (acc) => acc.userName === confirmUser && acc.pin === confirmPin
    );
    accounts.splice(accountToDelete, 1);
    containerApp.style.opacity = 0;
  }
});

// Sort
let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovement(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*
// Conversion
console.log(Number('23'));
console.log(+'23');

// Parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23', 10));

console.log(Number.parseInt('  2.5rem  '));
console.log(Number.parseFloat('  2.5rem  '));

// console.log(parseFloat('  2.5rem  '));

// Check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

// Checking if value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));

*/

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2
const arr = [1, 4, 5, 9];
console.log(Math.max(...arr));
console.log(Math.min(...arr));

console.log(Math.round(Math.random())); // 0 or 1
console.log(Math.trunc(Math.random() * 6) + 1);

// trunc and floor

console.log(Math.trunc(23.7)); // 23
console.log(Math.floor(23.7)); // 23

console.log(Math.trunc(-23.7)); // -23
console.log(Math.floor(-23.7)); // -24

console.log((2.56).toFixed(0)); // 3 string
console.log(+(2.5666).toFixed(3));
