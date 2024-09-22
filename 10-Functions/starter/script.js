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




const lufthansa = {
  name: "lufthansa",
  iataCode: "LH",
  booking: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.name} ${this.iataCode}${flightNum}`
    );
    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Karim Adel");
lufthansa.book(344, "Mo Salah");
console.log(lufthansa);

const euroWings = {
  name: "euroWings",
  iataCode: "EW",
  booking: [],
};

const book = lufthansa.book;

//Error this is undefined
// book(333, "Mohamed");

// Call Method
book.call(lufthansa, 458, "Trent Arnold");
console.log(lufthansa);
book.call(euroWings, 786, "Andy Robertson");
console.log(euroWings);

// Apply Metod
const flightData = [635, "Darwin Nunez"];
book.apply(euroWings, flightData); // takes an array
console.log(euroWings);

//Or use this
book.call(euroWings, ...flightData);
console.log(euroWings);

// Bind Method

const bookEw = book.bind(euroWings); // returns a function with this
bookEw(321, "Steven Gerard");
console.log(euroWings);

const bookEW23 = book.bind(euroWings, 23);
bookEW23("Luis Diaz");
bookEW23("Allison Becker");
console.log(euroWings);

lufthansa.plane = 200;
lufthansa.buyPlane = function () {
  console.log(this);
  this.plane++;
  console.log(this.plane);
};
lufthansa.buyPlane();

// document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane); // Nan as this will point to the document.querySelector(".buy")

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

const addTax2 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTax2(0.1)(200);
console.log(addVAT2);



//

// Coding Challenge #1

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    let ans;
    let flag = false;
    while (!flag) {
      {
        ans = prompt(
          `${this.question} \n ${this.options.join(
            "\n"
          )} \n Write option number`
        );
        if (ans > 3 || ans < 0 || isNaN(ans)) {
          alert("Please Enter a valid Number");
        } else {
          flag = true;
        }
      }
    }
    this.answers[ans]++;
    this.displayResults();
    this.displayResults("string");
  },

  displayResults(type = "array") {
    if (type === "array") console.log(this.answers);
    else if (type === "string") console.log(`Poll results are ${this.answers}`);
  },
};

const btn = document.querySelector(".poll");
btn.addEventListener("click", poll.registerNewAnswer.bind(poll));
// console.log(poll.answers);



// Immediately Invoked Function Expressions

(function () {
  console.log("this will run once");
})();

(() => console.log("this will run once arrow Function"))();




//  Closures

const bookSecure = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount}: passenger`);
  };
};

const booker = bookSecure();
booker();
booker();
booker();

console.dir(booker);




// Example 1

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
g();
f();
console.dir(f);



// Example 2

const boardPassengers = function (n, wait) {
  const passGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 Groups each with ${passGroup} Passengers`);
  }, wait * 1000);

  console.log(`We will start boarding in ${wait} Seconds...`);
};

// The Closures has priority over scope Chain
const passGroup = 100;
boardPassengers(180, 5);


*/
