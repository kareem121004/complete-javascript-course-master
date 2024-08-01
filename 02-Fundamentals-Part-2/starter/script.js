'use strict';
// Activating Strict Mode

/*

// Without Strict Mode this will not display the error
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;

if (hasDriversLicense) console.log("I can drive :D");




function logger() {
    console.log("My name is Karim");
}


// Calling, Running, OR Invoking the Function.
logger();
logger();


function nameAge(name, age) {
    console.log(name, age);

    const intro = `Hi My Name is ${name}, and I'm ${age} Years Old.`;

    return intro;
}

nameAge("Karim", 19);
console.log(nameAge("Karim", 20));

const hi = nameAge("Karim", 20);
console.log(hi);




// Called a function declaration

console.log(calcAge1(2004));


function calcAge1(BirthYear) {
    return 2024 - BirthYear;
}



// Called a function expression

const calcAge2 = function (BirthYear) {
    return 2024 - BirthYear;
}

console.log(calcAge2(2004));




// Arrow Function

const calcAge3 = BirthYear => 2024 - BirthYear;

const age3 = calcAge3(2004);
console.log(age3);


const yearsUntillRetirement = BirthYear => 60 - (2024 - BirthYear);

const retirementAge = yearsUntillRetirement(2004);
console.log(retirementAge);

const yearsUntillRetirement2 = (BirthYear, firstName) => {
    const yearsLeft = 60 - (2024 - BirthYear);

    const fullSentence = `Hi ${firstName} You Have ${yearsLeft} Years Until Retirement...`;

    return fullSentence;
}

console.log(yearsUntillRetirement2(2004, "Karim"));



const fruitGenerator = (apples, oranges) => {
    const juice = `juice with ${apples} apples and ${oranges} oranges...`;
    return juice;
}

console.log(fruitGenerator(2, 3));




// Function Calling other Functions...

const fruitPieces = (fruit) => fruit * 4;

const fruitGenerator = (apples, oranges) => {
    const applePieces = fruitPieces(apples);
    const orangePieces = fruitPieces(oranges);

    const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange...`;
    return juice;
}

console.log(fruitGenerator(2, 3));


const calcAge = BirthYear => 2024 - BirthYear;


const yearsUntillRetirement = (BirthYear, firstName) => {

    const age = calcAge(BirthYear);
    const yearsLeft = 60 - age;

    if (yearsLeft > 0) {
        console.log(`Hi ${firstName} You Have ${yearsLeft} Years Until Retirement...`);
        return yearsLeft;
    }
    else
    return -1;
}

console.log(yearsUntillRetirement(2004, "adel"));
console.log(yearsUntillRetirement(1950, "adel"));




// First Coding Challenge!!

// Write your code below. Good luck! 🙂
const calcAverage = (firstNum, secondNum, thirdNum) => (firstNum + secondNum + thirdNum) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const scoreDolphins2 = calcAverage(85, 54, 41);
const scoreKoalas2 = calcAverage(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2)
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);

    else if (avgKoalas >= avgDolphins * 2)
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    else
        console.log("No team wins...");
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins2, scoreKoalas2);




const friend1 = "karim";
const friend2 = "MO";
const friend3 = "peter";

const friends = ['karim', 'Mo', 'peter'];
console.log(friends);

const years = new Array(2004, 2003, 2002);
console.log(years);

console.log(friends[0]);
console.log(friends[friends.length - 1]);
console.log(friends.length);

friends[2] = 'adel';
console.log(friends);

//friends = ['messi', 'mane']; // Error cannot mutate an entire array with const...

const firstName = 'karim';
const karim = [firstName, 'adel', 2024 - 2004, 'student', friends];
console.log(karim);


const calcAge = birthYear => 2024 - birthYear;

console.log(calcAge(years[0]));
console.log(calcAge(years[1]));
console.log(calcAge(years[years.length - 1]));

const calcYears = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(calcYears);



// Add Elements
const friends = ['karim', 'Mo', 'peter'];
const newLength = friends.push('messi');
console.log(friends);
console.log(newLength);

friends.unshift('salah');
console.log(friends);


// Remove Elements

const popped = friends.pop(); // Last
console.log(popped);
friends.pop();
console.log(friends);

friends.shift() // First
console.log(friends);

// Checking the Array

console.log(friends.indexOf('Mo')); // index of Mo = 1
console.log(friends.indexOf('Cristiano')); // -1


friends.push(11);
console.log(friends.includes('Mo')); // true
console.log(friends.includes('Cristiano')); // false

console.log(friends.includes('11')); // false.  it is Testing With Strict Equality No Type Coercion
console.log(friends.includes(11)); // true

console.log(friends.indexOf('11')); // false it is Testing With Strict Equality No Type Coercion


if (friends.includes('karim'))
    console.log("You have a friend named karim");





// Second Coding Challenge!!

// Write your code below. Good luck! 🙂

const bill = 100;

//const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;

const calcTip = inputBill => (inputBill >= 50 && inputBill <= 300) ? inputBill * 0.15 : inputBill * 0.2;

console.log(calcTip(bill));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];

const total = [tips[0] + bills[0], tips[1] + bills[1], tips[tips.length - 1] + bills[bills.length - 1]];

console.log(tips);
console.log(total);




// Objects...

const karim = {
    firstName: 'Karim',
    lastName: 'Adel',
    age: 20,
    job: 'Student',
    friends: ['Mo', 'Salah', 'Messi'],
    hobbies: ['football', 'programming'],
    // yearWasBorn: function () {
    //     return 2024 - this.age;
    // }
};

console.log(karim);
console.log(karim.age);
// console.log(karim.yearWasBorn());
console.log(karim['lastName']);

const nameKey = 'Name';


console.log(karim['first' + nameKey]);
console.log(karim['last' + nameKey]);


const interestedIn = prompt("What do You want to know about Karim ?? Choose between firstName, lastName, age, job, friends, hobbies");

//console.log(karim.interestedIn); // will cause an error interestedIn is not defined.

if (karim[interestedIn]) {
    console.log(karim[interestedIn]);
} else {
    console.log("Wrong Request 😑");
}

karim.location = 'Egypt';
karim['gender'] = 'Male';
console.log(karim);

// Challenge

const info = `${karim.firstName} has ${karim.friends.length} friends, and his best friend is called
${karim.friends[0]}`;

console.log(info);



const karim = {
    firstName: 'Karim',
    lastName: 'Adel',
    birthYear: 2004,
    job: 'Student',
    hasDriverLicense: true,
    hobbies: ['football', 'programming'],

    // calcAge: function () {
    //     return 2024 - this.birthYear;
    // }
    calcAge: function () {
        this.age = 2024 - this.birthYear;
        return this.age;
    },

    // calcAge: function (birthYear) {
    //     return 2024 - birthYear;
    // }

    getSummary: function () {
        this.summary = `your name is ${this.firstName} ${this.lastName}, and you are ${this.calcAge()} years old and you love ${this.hobbies[0]} and ${this.hobbies[1]}...`;
        return this.summary;
    }
};

// console.log(karim.calcAge());
// console.log(karim['calcAge']());

// console.log(karim.age);

console.log(karim.getSummary());
console.log(karim);




// Third Coding Challenge!!

// Write your code below. Good luck! 🙂

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: "John Smithr",
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

if (john.calcBMI() > mark.calcBMI()) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
}
else {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
}



// LOOPS

// for loop keeps running while condition is true.

for (let rep = 1; rep <= 10; rep++) {
    console.log(`lifting weights rep ${rep} 🏋️‍♀️`);
}

const karimArray = [
    "Karim",
    "Adel",
    2024 - 2004,
    "Student",
    ["football", 'programming'],
    true
];

const newArray = [];
for (let i = 0; i < karimArray.length; i++) {
    console.log(karimArray[i], typeof karimArray[i]);
    newArray.push(typeof karimArray[i]);
    // newArray[i] = typeof karimArray[i];
}
console.log(newArray);


const years = [2004, 2007, 1973];

const calcAge = yearOfBirth => 2024 - yearOfBirth;

const arrayOfCalcAges = [];

for (let i = 0; i < years.length; i++) {
    const age = calcAge(years[i]);
    arrayOfCalcAges.push(age);
}

console.log(arrayOfCalcAges);

// Continue And Break...

console.log("--- ONLY STRINGS ---");
for (let i = 0; i < karimArray.length; i++) {
    if (typeof karimArray[i] !== 'string')
        continue;
    console.log(karimArray[i], typeof karimArray[i]);

}
console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < karimArray.length; i++) {
    if (typeof karimArray[i] === 'number')
        break;
    console.log(karimArray[i], typeof karimArray[i]);

}



const karimArray = [
    "Karim",
    "Adel",
    2024 - 2004,
    "Student",
    ["football", 'programming'],
];


for (let i = karimArray.length - 1; i >= 0; i--) {
    console.log(i, karimArray[i]);
}

// The new 123 Trend...
for (let i = 1; i < 9; i++) {
    console.log(`Round ${i}`);

    for (let j = i; j < 9; j++) {
        console.log(j);
    }
}


// let rep = 1;
// while (rep <= 10) {
//     console.log(`lifting weights rep ${rep} 🏋️‍♀️`);
//     rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}



// Fourth Coding Challenge!!

// Write your code below. Good luck! 🙂
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}

console.log(tips);
console.log(totals);


// Bonus Challenge
const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(totals));


// Done with this Section...🎂
*/