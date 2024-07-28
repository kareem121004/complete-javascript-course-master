/*

let js = "amazing";
if (js === "amazing") alert("js is FUN!");

console.log(40 + 8 + 23 - 10);

console.log("karim");

// Naming Convention

let firstName = "karim";
console.log(firstName);


// let last_name = "adel";
let $_lastName = "Adel";
console.log($_lastName);

// Don't use the word "name", it is kind of a reserved word but will not throw an Error.
// Always give the Variables a Descriptive name.




// boolean
let javaScript = true;

console.log(typeof true);
console.log(typeof javaScript);
console.log(typeof 11);
console.log(typeof "karim");

// will throw an Error.
//console.log(typeof "karim');


//dynamic typing
javaScript = "Changing the Data type";
console.log(typeof javaScript);

let year;

console.log(year);
console.log(typeof year);


// bug
console.log(typeof null);




// We can reassaign it.
let age = 11;
age = 20;


// We can't reassaign it.
const birthYear = 2004;
//birthYear = 2000;
//const job;


const currentYear = 2024;

const myAge = currentYear - 2004;

console.log(myAge);

const firstName = "Karim";
const lastName = "Adel"
const fullName = firstName + ' ' + lastName;
console.log(fullName);


// Assignment Operator
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);

// Comparison Operator

console.log(myAge > 19);


let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);



// First Code Challenge

//  Write your code below. Good luck! 🙂
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / (heightMark * heightMark);

const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log(markHigherBMI);




const firstName = "Karim";
const job = "Student";
const birthYear = 2004;
const currentYear = 2024;

const introMessage = "Hi " + "I'm " + firstName + ", and I'm a " +
    (currentYear - birthYear) + " Year old " + job + " !";
console.log(introMessage);

// Template Literals

const newIntro = `I'm ${firstName} a ${(currentYear - birthYear)} year old ${job} !`;
console.log(newIntro);

console.log(`Just a regular string...`);

// This Works because of a Bug!, use Template Literals.
console.log("String with\n\
multiple \n\
lines")



const age = 15;
//const isOldEnough = age >= 18;

if (age >= 18) {
    console.log(`You are eligible to drive 🚗`);
}
else {
    console.log(`You still have ${18 - age} years to get your license`);
}

// IF , ELSE are called a control structure


// Second Code Challenge

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

// Write your code below. Good luck! 🙂

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
}
else {
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
}



// type conversion
const birthYear = "2004";
console.log(birthYear + 18); // output is 200418
console.log(Number(birthYear) + 18);  // use type conversion

console.log(Number("Karim")); // NaN

// type coercion

console.log("I'm " + 20);
console.log("23" - 10);
console.log("23" * 10);
console.log("23" / 10);


let n = "1" + 1; // "11"
n = n - 1;
console.log(n);



// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean('karim'));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean({}));



console.log(18 === 18); //True
console.log(18 == 18); //True

console.log(18 == "18"); //True it performs type coercion.  called loose equality
console.log(18 === "18"); //False. it doesn't perform type coercion.  alled strict equality

// always use === Not ==

const num = prompt("Enter a num !");

if (num === 23)
    console.log(23);

else if (num !== 23)
    console.log("convert it first");



const hasLicense = true;
const hasGoodVision = true;

const shouldDrive = hasGoodVision && hasLicense;



// if (hasGoodVision && hasLicense)
//     console.log("You Can Drive!");
// else {
//     console.log("You Can not Drive!");
// }

const isTired = false;

console.log(hasGoodVision || hasLicense || isTired);


if (hasGoodVision && hasLicense && !isTired)
    console.log("You Can Drive!");
else {
    console.log("You Can not Drive!");
}



// Third Code Challenge
// Write your code below. Good luck! 🙂

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// if (scoreDolphins > scoreKoalas)
//     console.log("Dolphins win the trophy");

// else if (scoreKoalas > scoreDolphins)
//     console.log("Koalas win the trophy");

// else {
//     console.log("Both win the trophy");
// }

// Bonus 1

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;


// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100)
//     console.log("Dolphins win the trophy");

// else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100)
//     console.log("Koalas win the trophy");

// else {
//     console.log("Both win the trophy");
// }



// Bonus 2

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;


if (scoreDolphins > scoreKoalas && scoreDolphins >= 100)
    console.log("Dolphins win the trophy");

else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100)
    console.log("Koalas win the trophy");

else if (scoreDolphins === scoreKoalas && (scoreDolphins >= 100 && scoreKoalas >= 100))
    console.log("Both win the trophy");

else {
    console.log("no team wins the trophy");
}




const day = "friday";

switch (day) {
    case "saturday": // only equality ===
        console.log("it is saturday");
        break;
    case "friday":
    case "thursday":
        console.log("it is either thursday or friday");
        break;
    default:
        console.log("no idea 🤷");

}




const str = "23 is greater"; // this is a statement while this "23 is greater" is an expression which is = to a value



const age = 20;

age >= 18 ? console.log("above 18") :
    console.log("less than 18");

console.log(age >= 18 ? "Hi" : "No");



// Fourth Code Challenge

// Write your code below. Good luck! 🙂 

const bill = 275;
const tip = (bill >= 50 && bill <= 300) ? 0.15 * bill : 0.20 * bill;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


// Done with Part ONE...

*/

