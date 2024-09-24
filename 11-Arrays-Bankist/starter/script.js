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

const displayMovement = function (movement) {
  containerMovements.innerHTML = "";
  movement.forEach(function (value, idx) {
    const type = value > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      idx + 1
    } ${type} </div>
        <div class="movements__value">${value}</div>
    </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

displayMovement(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

*/
