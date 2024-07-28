/*

const country = "Egypt";
const continent = "Africa";
let population = 120;

console.log(country);
console.log(continent);
console.log(population);


const isIsland = false;
let language;

// console.log(typeof isIsland, typeof population, typeof country, typeof language);

language = "arabic";

console.log(population / 2);

population++;
console.log(population);

const moreThanFinland = population > 6;

console.log(moreThanFinland);
console.log(population < 33);

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

console.log(description);


if (population > 33) {
    console.log(`${country}'s population is above average`)
}
else {
    console.log(`${country}'s population is ${33 - population} million
    below average`);
}

console.log('9' - '5'); // -> ?   4
console.log('19' - '13' + '17'); // -> ?  617
console.log('19' - '13' + 17); // -> ? 23
console.log('123' < 57); // -> ?  false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> ?  1143

const numNeighbours = Number(prompt('How many neighbour countries does your contry have?'));

if (numNeighbours === 1)
    console.log('Only 1 border!');

else if (numNeighbours > 1)
    console.log('More than 1 border');
else {
    console.log('No borders');
}


if (language === "English" && population < 50 && !isIsland)
    console.log(`You should live in ${country} `);
else {
    console.log(`${country} does not meet your criteria :(`);
}


switch (language) {
    case "chinese":
    case "mandarin":
        console.log('MOST number of native speakers!');
        break;

    case "spanish":
        console.log('2nd place in number of native speakers');
        break;

    case "english":
        console.log('3rd place');
        break;

    case "hindi":
        console.log('Number 4');
        break;

    case "arabic":
        console.log('5th most spoken language');
        break;

    default:
        console.log('Great language too :D');
}


const checkPop = population > 33 ? `${country}'s population is above average` : `${continent}'s population is below average`;

console.log(checkPop);

// Done with the first Assignment...

*/