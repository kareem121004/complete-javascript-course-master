"use strict";

const Person = function (firstName, birthYear) {
  // Attributes
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Methods But DON'T create them inside the constructor

  //   this.calcAge = function () {
  //     return 2024 - this.birthYear;
  //   };
};

const karim = new Person("karim", 2004);
// console.log(karim);

// console.log(karim instanceof Person);
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

// ProtoTypes

// console.log(Person.prototype); // empty

// Person.prototype.calAge = function () {
//   return 2024 - this.birthYear;
// };
// console.log(Person.prototype);

// console.log(karim.calAge());

// console.log(karim.__proto__);
// console.log(karim.__proto__ === Person.__proto__);

// console.log(karim.__proto__.__proto__); // this is prototype chaining which leads to the object prototype
// console.log(karim.__proto__.__proto__.__proto__); // null  the object prototype is the top

// const arr = [1, 2, 2, 2, 2, 3, 6, 7, 8]; //  new Array === []

// console.log(arr.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

// Code Challenge 1 ✅

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

console.log(car1.make, car1.speed);
console.log(car2.make, car2.speed);
car1.accelerate();
car1.brake();
car2.brake();
car2.accelerate();
