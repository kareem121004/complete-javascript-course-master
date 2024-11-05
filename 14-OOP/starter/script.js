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
console.log(karim);

console.log(karim instanceof Person);
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

// ProtoTypes

console.log(Person.prototype); // empty

Person.prototype.calAge = function () {
  return 2024 - this.birthYear;
};
console.log(Person.prototype);

console.log(karim.calAge());

console.log(karim.__proto__);
console.log(karim.__proto__ === Person.__proto__);
