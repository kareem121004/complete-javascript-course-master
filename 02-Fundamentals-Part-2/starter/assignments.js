'use strict';

/*
const describeCountry = function (country, population, capitalCity) {
    const info = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return info;
}

const test1 = describeCountry('egypt', 120, 'cairo');
const test2 = describeCountry('uae', 10, 'abu dhabi');
const test3 = describeCountry('qatar', 3, 'doha');

console.log(test1, test2, test3);

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentageOfWolrd2 = function (population) {
    return (population / 7900) * 100;
}

const percentageOfWorld3 = population => (population / 7900) * 100;


const population1 = percentageOfWorld1(1441);
const population2 = percentageOfWorld1(120);
const population3 = percentageOfWorld1(332);


const population21 = percentageOfWolrd2(1441);
const population22 = percentageOfWolrd2(120);
const population23 = percentageOfWolrd2(332);



const population31 = percentageOfWorld3(1441);
const population32 = percentageOfWorld3(120);
const population33 = percentageOfWorld3(332);



console.log(population1, population2, population3);
console.log(population21, population22, population23);
console.log(population31, population32, population33);


const describePopulation = (country, population) => `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world`;

console.log(describePopulation('Portugal', 10));
console.log(describePopulation('China', 1441));
console.log(describePopulation('USA', 332));




const populations = [120, 1441, 332, 10];

const hasFourElements = populations.length === 4;
console.log(hasFourElements);


const percentages = [
    percentageOfWorld1(populations[0])
    , percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];

console.log(percentages);



const neighbours = ['Canada', 'Mexico'];
neighbours.push('Utopia');
neighbours.pop();

if (!neighbours.includes('Germany'))
    console.log('Probably not a central european country :D');

neighbours[neighbours.indexOf('Mexico')] = 'USA';

console.log(neighbours);

const myCountry = {
    country: "Egypt",
    capital: "Cairo",
    language: "Arabic",
    population: 120,
    neighbours: ["Sudan", "Libya", "Palestinian"]
};


const info = `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`;

console.log(info);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);




const myCountry = {
    country: "Egypt",
    capital: "Cairo",
    language: "Arabic",
    population: 120,
    neighbours: ["Sudan", "Libya", "Palestinian"],
    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
    },

    checkIsland: function () {
        this.isIsland = (this.neighbours.length > 1) ? false : true;
    }
};

myCountry.describe();
myCountry.checkIsland();

console.log(myCountry);



for (let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting`);
}



const populations = [120, 1441, 332, 10];


function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);


const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++) {

    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    }
}



const populations = [120, 1441, 332, 10];


function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentages3 = [];

let lengthOfArray = 0;

while (lengthOfArray !== populations.length) {
    percentages3.push(percentageOfWorld1(populations[lengthOfArray]));
    lengthOfArray++;
}

console.log(percentages3);


// Done with this Assignment...✌️

*/