"use strict";

/*
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


// ES6 OOP

class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2024 - this.birthYear);
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert("not full");
  }

  get fullName() {
    return this._fullName;
  }
  // static methods    ..... it is not inherited
  static hey() {
    console.log("hey there 👋");
  }
}

const karim = new Person("Karim adel", 2004);
karim.calcAge();
Person.prototype.greet = function () {
  console.log(`hi ${this.firstName} from prototype`);
};
karim.greet();

console.log(karim);
console.log(karim.fullName);
Person.hey();
karim.hey(); // will not work

const walt = new Person("walt", 2000);

const accounts = {
  owner: "Karim Adel",
  movements: [10, 40, 800, 60],

  get lMov() {
    return this.movements.slice(-1).pop();
  },

  set movemnt(mov) {
    this.movements.push(mov);
  },
};

console.log(accounts.lMov);
accounts.movemnt = 700;
console.log(accounts);


// Object Create
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const PersonProto = {
  calcAge() {
    return 2024 - this.birthYear;
  },

  init(FirstName, birthYear) {
    this.FirstName = FirstName;
    this.birthYear = birthYear;
  },
};

const person1 = Object.create(PersonProto);
person1.name = "karim";
person1.birthYear = 20;
console.log(person1.calcAge());

const Adel = Object.create(PersonProto);
Adel.init("Mo", 2021);
console.log(Adel);


// Code Challenge 2 ✅
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate = function () {
    this.speed += 10;
    console.log(this.speed);
  };

  brake = function () {
    this.speed -= 5;
    console.log(this.speed);
  };

  get SpeedUS() {
    return this.speed / 1.6;
  }

  set SpeedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const car1 = new CarCl("BMW", 120);
const car2 = new CarCl("Mercedes", 95);

console.log(car1.make, car1.speed);
console.log(car2.make, car2.speed);
car1.accelerate();
car1.brake();
car2.brake();
car2.accelerate();

console.log(car1.SpeedUS);
car1.speed = 120;
console.log(car1.SpeedUS);




const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

const Student = function (firstName, birthYear, Course) {
  Person.call(this, firstName, birthYear);
  this.Course = Course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.intro = function () {
  console.log(`my name is ${this.firstName}, and i study ${this.Course}`);
};

const karim = new Student("karim", 20, "Computer Science");
karim.intro();
karim.calcAge();

console.log(karim.__proto__); // Person
console.log(karim.__proto__.__proto__); // Student

console.log(karim instanceof Person); // true
console.log(karim instanceof Student); // true

Student.prototype.constructor = Student;

console.dir(Student.prototype.constructor); // Student




// Code Challenge 3 ✅
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

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge = this.charge - this.charge * 0.1;
  console.log(
    `${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV("Tesla", 120, 23);
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
tesla.accelerate();



class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2024 - this.birthYear);
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert("not full");
  }

  get fullName() {
    return this._fullName;
  }
  // static methods    ..... it is not inherited
  static hey() {
    console.log("hey there 👋");
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear); // IF YOU DON'T HAVE ADDITIONAL ATTS , THERE IS NO NEED TO CREATE A CONSTRUCTOR.
    this.course = course;
  }

  intro() {
    console.log(`my name is ${this.fullName}, and i study ${this.course}`);
  }
  // OVERRIDE THE CALC METHOD

  calcAge() {
    console.log(`i feel like i'm ${2024 - this.birthYear + 10}`);
  }
}

const karim = new StudentCl("Karim Adel", 2004, "CS");
karim.intro();
karim.calcAge();



// using the object create method

const PersonProto = {
  calcAge() {
    return 2024 - this.birthYear;
  },

  init(FirstName, birthYear) {
    this.FirstName = FirstName;
    this.birthYear = birthYear;
  },
};

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (FirstName, birthYear, course) {
  PersonProto.init.call(this, FirstName, birthYear);
  this.course = this.course;
};

const karim = Object.create(StudentProto);
karim.init("karim adel", 20, "CS");
console.log(karim.calcAge());


// Real Example
// Encapsulation

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, pin, currency) {
    this.owner = owner;
    this.#pin = pin;
    this.currency = currency;

    // A convention to let Developers know that the ATT is private.
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks ${this.owner} for opening an account in our bank...`);
  }

  // 3) Public methods

  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestloan(val) {
    if (this.#approvloan(val)) {
      this.deposit(val);
      console.log(
        `Loan approved ,and ${val}${this.currency} will be added in your account`
      );
      return this;
    }
  }

  // 4) Private methods
  #approvloan(val) {
    return true;
  }
}

const acc1 = new Account("Karim", 1111, "£");
acc1.deposit(100);
acc1.deposit(700);
acc1.withdraw(90);
acc1.requestloan(20000);
// console.log(acc1.#pin);
// console.log(acc1.#approvloan());

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestloan(25000).withdraw(4000);
console.log(acc1);


// Code Challenge 4 ✅

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
class EV extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EV("Rivian", 120, 23);
console.log(rivian);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);

// DONE ✅
*/
