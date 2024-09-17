"use strict";
/*
const bookings = [];
const createBokking = function (flightNum, numOfPassengers = 1, price = 299) {
  // ES5 OLD WAY
  //   numOfPassengers = numOfPassengers || 1;
  //   price = price || 299;
  const booking = {
    flightNum,
    numOfPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBokking("ll444");
createBokking("LA567", 2);
createBokking("AB123", undefined, 477);




// reference to object not a primitive value
const flight = "AH345";

const karim = {
  name: "Karim Adel",
  passsport: 43567890000,
};

const checkIn = function (flightNum, person) {
  flightNum = "AH989";
  person.name = "Eng. " + person.name;

  if (person.passsport === 43567890000) alert("Checked In");
  else {
    alert("Wrong passport");
  }
};

// checkIn(flight, karim);
// console.log(flight); // AH345
// console.log(karim); // name = Eng. Karim Adel as it is a reference to object not a primitive value

const newPassport = function (person) {
  person.passsport = Math.trunc(Math.random() * 100000000000);
};

newPassport(karim);
console.log(karim);
checkIn(flight, karim);



const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher order function
const transform = function (str, fn) {
  console.log(`the ORIGINAL string is ${str}`);
  console.log(
    `the transformed string is ${fn(str)} and it is called by ${fn.name}`
  );
};

transform("JavaScript is Great!", oneWord);
transform("JavaScript is Great!", upperFirstWord);

*/

// Functions Returning Functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetHey = greet("Hey");
greetHey("karim");

greet("Hi")("MO");

const greet2 = (greeting) => (name) => console.log(`${greeting} ${name}`);

greet2("hello")("kimo");
