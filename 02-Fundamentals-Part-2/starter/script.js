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

*/