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

const displayData = function (acc, sort = false) {
  containerMovements.innerHTML = "";
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  movs.forEach(function (value, idx) {
    const type = value > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}"> ${
      idx + 1
    } ${type} </div>
    <div class="movements__value">${value.toFixed(2)}£</div>
    </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur);
  labelBalance.textContent = acc.balance.toFixed(2) + "£";
};

const calcSummary = function (acc) {
  const ins = acc.movements
    .filter((value) => value > 0)
    .reduce((acc, cur) => acc + cur);
  labelSumIn.textContent = ins.toFixed(2) + "£";

  const outs = acc.movements
    .filter((value) => value < 0)
    .reduce((acc, cur) => acc + cur);
  labelSumOut.textContent = -outs.toFixed(2) + "£";

  const interest = acc.movements
    .filter((value) => value > 0)
    .map((value) => (value * acc.interestRate) / 100)
    .filter((value) => value >= 1)
    .reduce((acc, cur) => acc + cur, 0);

  labelSumInterest.textContent = interest.toFixed(2) + "£";
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

    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = +inputLoanAmount.value;
  if (
    amount > 0 &&
    currentAccount.movements.some((value) => value >= amount * 0.1)
  ) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayData(currentAccount, !sorted);
  sorted = !sorted;
});
