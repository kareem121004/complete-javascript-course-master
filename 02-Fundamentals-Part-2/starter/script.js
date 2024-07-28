'use strict';
// Activating Strict Mode

/*

// Without Strict Mode this will not display the error
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;

if (hasDriversLicense) console.log("I can drive :D");

*/


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





