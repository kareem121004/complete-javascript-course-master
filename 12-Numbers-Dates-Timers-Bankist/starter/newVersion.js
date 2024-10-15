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

const movementDate = function (date, locale) {
  const daysPassed = function (date1, date2) {
    return Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  };

  const daysPass = daysPassed(new Date(), date);
  if (daysPass === 0) return "Today";
  if (daysPass === 1) return "Yesterday";
  if (daysPass <= 7) return `${daysPass} days ago`;

  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

const displayData = function (acc, sort = false) {
  containerMovements.innerHTML = "";
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  movs.forEach(function (value, idx) {
    const type = value > 0 ? "deposit" : "withdrawal";
    const date = new Date(acc.movementsDates[idx]);
    const displayTime = movementDate(date, acc.locale);
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}"> ${
      idx + 1
    } ${type} </div>
    <div class="movements__date">${displayTime}</div>
    <div class="movements__value">${formatCur(
      value,
      acc.locale,
      acc.currency
    )}</div>
    </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcSummary = function (acc) {
  const ins = acc.movements
    .filter((value) => value > 0)
    .reduce((acc, cur) => acc + cur);
  labelSumIn.textContent = formatCur(ins, acc.locale, acc.currency);

  const outs = acc.movements
    .filter((value) => value < 0)
    .reduce((acc, cur) => acc + cur);
  labelSumOut.textContent = formatCur(-outs, acc.locale, acc.currency);

  const interest = acc.movements
    .filter((value) => value > 0)
    .map((value) => (value * acc.interestRate) / 100)
    .filter((value) => value >= 1)
    .reduce((acc, cur) => acc + cur, 0);

  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const updateUI = function (acc) {
  displayData(acc);
  calcBalance(acc);
  calcSummary(acc);
};

const adduserName = function (accounts) {
  accounts.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((value) => value[0])
      .join("");
  });
};
adduserName(accounts);

const logOutTimer = function () {
  let time = 600;
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(tick);
      labelWelcome.textContent = "log in to get started";
      containerApp.style.opacity = "0";
    }
    time--;
  };
  tick();
  const timer = setInterval(tick, 1000);
};

let currentAccount;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  const user = inputLoginUsername.value;
  const password = +inputLoginPin.value;
  currentAccount = accounts.find((acc) => acc.username === user);
  if (currentAccount?.pin === password) {
    labelWelcome.textContent = `Welcome Back ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = "1";
    inputLoginPin.value = inputLoginUsername.value = "";

    const now = new Date();
    labelDate.textContent = new Intl.DateTimeFormat(navigator.language).format(
      now
    );
    logOutTimer();
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = +inputLoanAmount.value;
  inputLoanAmount.value = "";
  if (
    amount > 0 &&
    currentAccount.movements.some((value) => value >= amount * 0.1)
  ) {
    setTimeout(function () {
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());
      updateUI(currentAccount);
    }, 3000);
  }
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  const confirmuUser = inputCloseUsername.value;
  const confirmPin = +inputClosePin.value;
  inputCloseUsername.value = inputClosePin.value = "";
  if (
    confirmuUser === currentAccount.username &&
    confirmPin === currentAccount.pin
  ) {
    const accIdx = accounts.findIndex(
      (acc) => acc.username === confirmuUser && acc.pin === confirmPin
    );
    accounts.splice(accIdx, 1);
    containerApp.style.opacity = "0";
    labelWelcome.textContent = "log in to get started";
  }
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayData(currentAccount, !sorted);
  sorted = !sorted;
});
