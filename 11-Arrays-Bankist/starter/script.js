"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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
        <div class="movements__value">${value}£</div>
    </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calculateBalnace = function (account) {
  const balance = account.movements.reduce((acc, cur) => acc + cur);
  account.balance = balance;
  labelBalance.textContent = balance + "£";
};

const calcDisplaySummary = function (account) {
  const income = account.movements
    .filter((mov) => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = income + "£";

  const outs = account.movements
    .filter((mov) => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `${outs * -1}£`;

  const interest = account.movements
    .filter((mov) => mov > 0)
    .map((mov) => (mov * account.interestRate) / 100)
    .filter((mov) => mov >= 1)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumInterest.textContent = interest + "£";
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

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
let arr = ["a", "b", "c", "d", "e"];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(3, 5));
console.log(arr.slice(-2));
console.log(arr.slice(2, -1));
console.log(arr.slice()); // Shallow Copy
console.log([...arr]); // Shallow Copy

// SPLICE  " it is the same as slice but mutates the original array"
// console.log(arr.splice(2)); // ['c', 'd', 'e']
arr.splice(-1); // we can use this to delete from the array
arr.splice(1, 2); // the second argument is the number of elemnts to remove not the index
console.log(arr); // ['a', 'b']

// REVERSE " it reverses the array and mutates the original one"

arr = ["a", "b", "c", "d", "e"];

const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN

console.log(letters.join("\n\n\n"));



// At Method
const arr = [23, 11, 64];

console.log(arr[0]);
console.log(arr.at(0));
// getting the last element
console.log(arr[arr.length - 1]);
console.log(...arr.slice(-1));
console.log(arr.at(-1));

console.log("karim".at(-1));


// FOREACH

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [idx, ele] of movements.entries()) {
  ele > 0
    ? console.log(`movement ${idx + 1} you deposited ${ele}`)
    : console.log(`movement ${idx + 1} you withdrew ${ele * -1}`);
}

console.log("             FOREACH              ");

movements.forEach(function (ele, idx, array) {
  ele > 0
    ? console.log(`movement ${idx + 1} you deposited ${ele}`)
    : console.log(`movement ${idx + 1} you withdrew ${ele * -1}`);
});

// There are neither break nor continue in the FOREACH function.....


const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`the value is ${value}, and the key is ${key}`);
  console.log(map);
});

const currencySet = new Set(["USD", "EUR", "GDB", "USD"]);
console.log(currencySet);

currencySet.forEach(function (value, key, set) {
  console.log(value, key); //USD USD
  console.log(set);
});
// the Set has neither key nor index



// First code Challenge ✅
const checkDogs = function (dogsJulia, dogsKate) {
  const newJulia = dogsJulia.slice(1, -2);
  const arr = [...newJulia, ...dogsKate];
  // const arr = newJulia.concat(dogsKate);

  arr.forEach(function (value, idx) {
    value >= 3 &&
      console.log(
        `Dog number ${idx + 1} is an adult, and is ${value} years old`
      );
    value < 3 && console.log(`Dog number ${idx + 1} is still a puppy 🐶`);
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);



// MAP FUNCTION
const euroToUsd = 1.1;
const newMovement = movements.map(function (mov) {
  return mov * euroToUsd;
});

// OR
const newMovement2 = movements.map((mov) => mov * euroToUsd);
console.log(newMovement);
console.log(newMovement2);



// FILTER FUNCTION
const depsit = movements.filter((mov, idx, array) => mov > 0);
console.log(depsit);

const withDrawal = movements.filter((mov) => mov < 0);
console.log(withDrawal);




// THE REDUCE FUNCTION
const balance = movements.reduce((acc, cur) => acc + cur);
console.log(balance);

// Max function using reduce
const max = movements.reduce(function (acc, cur) {
  if (cur > acc) acc = cur;
  return acc;
}, movements[0]);
console.log(max);



// Code Challenge 2 AND 3 ✅
const calcAverageHumanAge = function (dogs) {
  const humanAge = dogs
    .map(function (value) {
      if (value <= 2) return 2 * value;
      else {
        return 16 + value * 4;
      }
    })
    .filter((value) => value >= 18)
    .reduce((acc, cur, i, array) => acc + cur / array.length, 0);

  return humanAge;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));



// THE FIND METHOD

const firstWithdrawal = movements.find((mov) => mov < 0); // -400
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find((acc) => acc.owner === "Sarah Smith");
console.log(account);



// Some Method or u can call it any

console.log(movements.includes(-130));

console.log(movements.some((mov) => mov === -130));

const anyDeposit = movements.some((mov) => mov > 0);
console.log(anyDeposit);


// Every Method

console.log(account4.movements.every((mov) => mov > 0));



const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));


// Flat
const mov = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, cur) => acc + cur, 0);
console.log(mov);

// FlatMap
const mov2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, cur) => acc + cur, 0);
console.log(mov2);



// SORT

const arr = ["karim", "mo", "ahemd", "hi"];
console.log(arr.sort()); // it mutates the original array

console.log(movements.sort()); // this will not work as it changes the values to string first

// Return < 0 A ,B Keep order
// Return > 0 B, A Switch order

// Ascending
// console.log(
//   movements.sort((a, b) => {
//     if (a > b) return 1;
//     if (b > a) return -1;
//   })
// );

console.log(movements.sort((a, b) => a - b));

// Descending

// console.log(
//   movements.sort((a, b) => {
//     if (a > b) return -1;
//     if (b > a) return 1;
//   })
// );

console.log(movements.sort((a, b) => b - a));



const x = new Array(7);
console.log(x.fill(1, 5, 6));

const z = Array.from({ length: 7 }, (cur, idx) => idx + 1);
console.log(z);

const random = Array.from({ length: 100 }, (_, idx) =>
  Math.trunc(Math.random() * idx + 1)
);
console.log(random);




labelBalance.addEventListener("click", function () {
  const movementsUI = Array.from(
    document.querySelectorAll(".movements__value"),
    (ele) => Number(ele.textContent.replace("£", ""))
  );
  console.log(movementsUI);
});

*/

// ARRAY Practice
// 1:
const allInOne = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log(allInOne);

//  2:

const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, cur) => {
    if (cur >= 1000) acc++;
    return acc;
  }, 0);
console.log(numDeposits1000);

// 3:

const sumsObject = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (acc, cur) => {
      // cur > 0 ? (acc.deposits += cur) : (acc.withDrawal += cur);
      acc[cur > 0 ? "deposits" : "withDrawal"] += cur;
      return acc;
    },
    { deposits: 0, withDrawal: 0 }
  );

console.log(sumsObject);

// 4
const mapUsingReduce = movements.reduce((acc, cur) => {
  cur > 0 && acc.push(cur);
  return acc;
}, []);

console.log(mapUsingReduce);
