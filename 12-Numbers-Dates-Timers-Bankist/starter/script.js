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
    "2024-10-04T17:01:17.194Z",
    "2024-10-06T11:36:17.929Z",
    "2024-10-07T10:51:36.790Z",
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

const formatMovementDate = function (date) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  const day = `${date.getDate()}`.padStart(2, 0);
  const month = `${date.getMonth() + 1}`.padStart(2, 0);
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const displayMovement = function (acc, sort = false) {
  containerMovements.innerHTML = "";
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  movs.forEach(function (value, idx) {
    const type = value > 0 ? "deposit" : "withdrawal";
    const date = new Date(acc.movementsDates[idx]);

    const displayDate = formatMovementDate(date);

    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      idx + 1
    } ${type} </div>
        <div class="movements__date">${displayDate}</div>
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
  displayMovement(account);
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

    // Date

    const now = new Date();

    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const hour = `${now.getHours()}`.padStart(2, 0);
    const min = `${now.getMinutes()}`.padStart(2, 0);
    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;
    displayUI(currentAccount);
  }
});

// Transfer
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    (acc) => acc.userName === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  console.log(amount, receiverAcc);

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
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
    currentAccount.movementsDates.push(new Date().toISOString());
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
  displayMovement(currentAccount, !sorted);
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




const diameter = 287_460_000_000;
console.log(diameter);

const transFee1 = 15_00;
const transFee2 = 1_500;

// console.log(Number("223_888")); // NAN (_)
console.log(Number("223_888".replaceAll("_", "")));




// BIG INT

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

console.log(92347789899999999446666666665444333222n);
const bigValue = BigInt(9234778989999999944);
console.log(bigValue);

console.log(1000n + 2000n);

console.log(7777999992222333344n * 100000n);

const huge = 7777999992222333344n;

const num = 23;
console.log(huge + BigInt(num));

console.log(23n > 2);
console.log(23n === 23); // false
console.log(23n == 23); // true




// Date

const date = new Date();
console.log(date);
console.log(new Date("Nov 11 2004"));

console.log(new Date(account1.movementsDates[0]));
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));




const now = new Date();
console.log(now);

console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getDate()); // day
console.log(now.getDay()); // sunday = 0
console.log(now.toISOString());
console.log(now.getTime());
console.log(new Date(1728192397857));
console.log(Date.now()); // time stamp




const calcMonthPassed = (date1, date2) =>
  (date2 - date1) / (1000 * 60 * 60 * 24 * 7 * 4);

console.log(calcMonthPassed(new Date(2004, 11, 11), Date.now()));
*/
