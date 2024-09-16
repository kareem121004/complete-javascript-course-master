"use strict";

/*
function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printInfo() {
    let output = `You are ${firstName}, and you are ${age} years old...`;
    //console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const firstName = "Kimo";
      var millenial = true; // this is a var variable it will be accessed  it is a function scope not a block scope
      const str = `oh ${firstName} you are a millenial`;
      console.log(str);
      console.log(output);

      function add(a, b) {
        return a + b;
      }

      output = `New Output`;
    }
    console.log(output);
    console.log(millenial);
    // console.log(add(2, 3)); error but will work without strict mode
    // console.log(str); error can not be accessed
  }
  printInfo();
  return age;
}

const firstName = "karim";
console.log(calcAge(1990));


// variable HOISTING
console.log(me); // undefined
// console.log(job); // uninitialized TDZ temporal dead zone
// console.log(year); // uninitialized TDZ

var me = "karim";
let job = "student";
const year = 2004;

// FUNCTION HOISTING
console.log(addDecl(2, 3)); // This will Work
console.log(addExpre(2, 3)); //uninitialized TDZ
console.log(addArrow(2, 3)); //uninitialized TDZ

function addDecl(a, b) {
  return a + b;
}

const addExpre = function (a, b) {
  return a + b;
};

// var addExpre = function (a, b) { // We will get a different Error message As var will be undefined
//   return a + b;
// };

const addArrow = (a, b) => a + b;


// Example
console.log(numProducts);
if (!numProducts) deleteCart(); // numProducts  is undefined because of Hoisting

var numProducts = 10;

function deleteCart() {
  console.log("All Products Deleted...");
}


var x = 1; // will create a property in the window object...
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);




//Arrow Functions Don’t have a “this” keyword .. there is the lexical “this” which is for the surroundings

console.log(this); // the window

const calcAge = function (birthYear) {
  console.log(2024 - birthYear);
  console.log(this); // undefined
};

calcAge(2004);

const calcAgeArrow = (birthYear) => {
  console.log(2024 - birthYear);
  console.log(this); // it is Window.. arrow Functions Don’t have a “this” keyword .. there is the lexical “this” which is for the surroundings
};
calcAgeArrow(2003);


const karim = {
  year: 2004,
  clacAge: function () {
    console.log(this);
    console.log(2024 - this.year);
  },
};

karim.clacAge();

const adel = {
  year: 1954,
};

adel.clacAge = karim.clacAge; // method borrowing
adel.clacAge();

const f = karim.clacAge;
f(); // error undefined


//var firstName = "wrong";
const karim = {
  year: 2004,
  firstName: "kimo",

  greet: () => console.log(`hey ${this.firstName}`), // undefined  as Arrow Functions Don’t have a “this” keyword
  // with thw new var global variable it will be accessed as it will create a property in the window object...
};

karim.greet();


const karim = {
  year: 2004,
  clacAge: function () {
    console.log(this);
    console.log(2024 - this.year);

    // Solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(this.year >= 1981 && this.year <= 1996); // Error , This is not defined use self instead
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () =>
      console.log(this.year >= 1981 && this.year <= 1996); // Arrow Functions use the this of its parent
    isMillenial();
  },
};

karim.clacAge();



const addExpre = function (a, b) {
  console.log(arguments); // array
  return a + b;
};

addExpre(2, 3);

const addArrow = (a, b) => {
  console.log(arguments); // Arrow Functions Don’t have arguments...
  return a + b;
};

addArrow(2, 3);



let age = 19;
let oldAge = age;
age = 20;
console.log(age); // 20
console.log(oldAge); // 19

const me = {
  firstName: "karim",
  age: 19,
};

const friend = me;
friend.age = 20;
console.log(me.age); // 20
console.log(friend.age); // 20


// Primitive Types
let lastName = "Mohamed";
let oldName = lastName;
lastName = "Adel";
console.log(lastName, oldName);

// Reference Types

const trent = {
  firstName: "trent",
  lastName: "Arnold",
  age: 25,
};

const trent2 = trent;
trent2.lastName = "Alexandar";
console.log(trent, trent2);

// Copying Object

const trentPlayer = {
  firstName: "trent",
  lastName: "Arnold",
  age: 25,
  family: ["jurgen", "pep"],
};

// This is a Shallow Copy
const trentPlayer2 = Object.assign({}, trentPlayer);

trentPlayer2.lastName = "Alexandar";
trentPlayer2.family.push("Mo", "Virgil");
console.log(trentPlayer, trentPlayer2);

*/
