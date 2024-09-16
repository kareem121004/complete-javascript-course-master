"use strict";

/*
// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const flightArray = flights.split("+");

for (const flight of flightArray) {
  const flightDetail = flight.split(";");
  const fullDetail = `${flightDetail[0]
    .slice(1)
    .replace("_", " ")} from ${flightDetail[1]
    .slice(0, 3)
    .toUpperCase()} to ${flightDetail[2]
    .slice(0, 3)
    .toUpperCase()} (${flightDetail[3].replace(":", "h")})`;

  const delay = flightDetail[0].slice(1).toLowerCase().split("_");

  if (delay[0].toLowerCase() === "delayed") console.log("🔴 " + fullDetail);
  else {
    console.log(fullDetail.padStart(40));
  }
}

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order(starterMenu, mainMenu) {
    return [this.starterMenu[starterMenu], this.mainMenu[mainMenu]];
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Your pasta takes 3 ings: ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIng, ...otherIngs) {
    console.log(mainIng);
    console.log(otherIngs);
  },

  // old way
  //openingHours: openingHours,

  // Enhanced Object Literals
  openingHours,
};

//Strings

// const airLine = "Tap Air Portugal";
// const plane = "A34X";

// console.log(airLine.slice(0, 4)); // TAP
// console.log(airLine.slice(4)); // Air Portugal
// console.log(airLine.indexOf("r")); // 6
// console.log(airLine.lastIndexOf("r")); // 10
// console.log(airLine.slice(0, airLine.indexOf(" "))); // TAP
// console.log(airLine.slice(airLine.lastIndexOf(" ") + 1)); // PORTUGAL

// // STRINGS ARE PRIMITIVES BUT JS DOES THIS TRICK AND TURN IT INTO STRING OBJECTS IN ORDER TO USE MRTHODS, THIS TRICK IS CALLED BOXING
// console.log(new String("karim")); // OBJECT

// const passenger = "kArIm";
// const passengerLower = passenger.toLocaleLowerCase();
// const passCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passCorrect);

// // Compare Email

// const email = "karim@gmail.com";
// const loginMail = "     KArim@Gmail.COm";

// const correctMail = loginMail.toLocaleLowerCase().trim();
// // const mail = correctMail.slice(correctMail.lastIndexOf(" "));
// console.log(correctMail);

// Replacing

// const planeReplaced = plane.replace("A", "X");
// console.log(planeReplaced);

// const priceGP = "123,456£";
// const priceUS = priceGP.replace("£", "$").replace(",", ".");
// console.log(priceUS);

// const announcement =
//   "All passengers come to boarding door 23. Boarding door 23!";

// console.log(announcement.replaceAll("door", "gate"));
// console.log(announcement.replace("door", "gate"));
// console.log(announcement.replace(/door/g, "gate"));

// const plane = "AirBus A320neo";
// console.log(plane.includes("A32"));
// console.log(plane.startsWith("AirB"));

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes("knife") || baggage.includes("gun"))
//     console.log("You are not allowed on board");
//   else {
//     console.log("You are allowed on board");
//   }
// };

// checkBaggage("I have a laptop, some Food and a pocket Knife");
// checkBaggage("Socks and camera");
// checkBaggage("Got some snacks and a gun for protection");

// Split and Join

// console.log("a+very+nice+string".split("+"));

// const name = "karim adel";
// const [firstName, lastname] = name.split(" ");
// console.log(firstName, lastname);

// const addTitle = [
//   "Eng.",
//   firstName[0].toUpperCase() + firstName.slice(1),
//   lastname[0].toUpperCase() + lastname.slice(1),
// ].join(" ");
// console.log(addTitle);

// const capitalizeName = function (name) {
//   const names = name.split(" ");
//   const uppered = [];

//   for (const first of names) {
//     // uppered.push(first[0].toUpperCase() + first.slice(1));
//     uppered.push(first.replace(first[0], first[0].toUpperCase()));
//   }
//   console.log(uppered.join(" "));
// };

// capitalizeName("jessica ann smith davis");
// capitalizeName("jonas schmedtmann");
// capitalizeName("karim adel");

// // Paddding
// const maskCreditCard = function (number) {
//   const str = String(number);
//   const lastFour = str.slice(str.length - 4);

//   const maskedCard = lastFour.padStart(11, "*");
//   return maskedCard;
// };

// console.log(maskCreditCard(64637836));
// console.log(maskCreditCard(43378463864647384));
// console.log(maskCreditCard("334859493847755774747"));

// // Repeat
// const planesInLine = function (n) {
//   console.log(`There are ${n} planes waiting ${"🛩️".repeat(n)}`);
// };

// planesInLine(5);
// planesInLine(3);
// planesInLine(11);


// Maps

// const newMap = new Map();
// newMap.set("name", "Classico Italiano");
// newMap.set(1, "italy");
// newMap.set(2, "portugal");

// newMap
//   .set(true, "We are open")
//   .set(false, "We are closed")
//   .set("open", 11)
//   .set("close", 23)
//   .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"]);

// console.log(newMap);

// console.log(newMap.get("name"));
// console.log(newMap.get("categories"));
// console.log(newMap.get(1));

// const time = 21;

// console.log(
//   newMap.get(time > newMap.get("open") && time < newMap.get("close"))
// );

// console.log(newMap.has("name"));
// console.log(newMap.delete(2));
// //newMap.clear();
// const arr = [1, 2];
// newMap.set(arr, "test");
// console.log(newMap);
// console.log(newMap.size);
// console.log(newMap.get([1, 2])); // undefined use a variable
// console.log(newMap.get(arr));

const question = new Map([
  ["question", "what is the best programming language in the world ?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "correct"],
  [false, "try again"],
]);

console.log(Object.entries(openingHours));

const openMap = new Map(Object.entries(openingHours));
console.log(openMap);

console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key} : ${value}`);
}

const user = 3;

// user === question.get("correct") && console.log(question.get(true));
// user !== question.get("correct") && console.log(question.get(false));

// OR

console.log(question.get(user === question.get("correct")));

// Convert map to array

console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);


// Sets
const orderSet = new Set(["karim", "adel", "karim", "mo"]);
console.log(orderSet);
console.log(orderSet.size);
orderSet.add("trent");
orderSet.add("mo");
console.log(orderSet);
orderSet.delete("adel");
console.log(orderSet);
console.log(new Set("karim"));
console.log(orderSet.has("karim"));
console.log(orderSet.has("adel"));

for (const el of orderSet) console.log(el);

// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

const staffUnique = [...new Set(staff)];
const arr = new Array(staffUnique);
console.log(staffUnique);
console.log(arr);



// Object Keys

const properties = Object.keys(openingHours);

let openStr = `we open ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

const values = Object.values(openingHours);

const entries = Object.entries(openingHours);
console.log(entries);

for (const [, { open, close }] of Object.entries(values)) {
  console.log(` we open at ${open}, and close at ${close}`);
}

for (const [key, { open, close }] of entries) {
  console.log(`on ${key} we open at ${open}, and close at ${close}`);
}


// Optional Chaining (?.)

// console.log(restaurant.openingHours.mon.open); // ERROR
console.log(restaurant.openingHours.mon?.open); // UNDEFINED

// Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "Don't";
  console.log(`on ${day} we open at ${open}`);
}

// Methods

console.log(restaurant.order?.(1, 0) ?? "Method doesn't exist");
console.log(restaurant.orderkoshari?.(1, 0) ?? "Method doesn't exist");

// ARRAYS

const user = [{ name: "karim", age: 19, gender: "male" }];

console.log(user[0]?.name ?? "User doesn't exist");



// The FOR-OF LOOP

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

for (const item of menu) {
  console.log(item);
}

// USE THE ENTRIES METHOD IF U WANT TO DISPLAY THE INDEX...
// IT GENERATES AN ARRAY THAT CONATINS THE INDEX (0) AND THE VALUE (1)

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

for (const [idx, ele] of menu.entries()) {
  console.log(`${idx + 1}: ${ele}`);
}


// Logical Assignment Operators

const rest1 = {
  name: "mac",
  numGuests: 111,
};

const rest2 = {
  name: "la shawerma",
  owner: "kimo",
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// console.log(rest1);
// console.log(rest2);

// More Concise Way

// OR ASSIGNMENT operator
// nullish ASSIGNMENT operator

rest1.numGuests ??= 10;
rest2.numGuests ||= 10;

rest1.owner ||= "anonymous";
rest2.owner &&= "anonymous";
console.log(rest1);
console.log(rest2);



// The Nullish Coalescing Operator

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefibed NOT (0, '')
const correctGuest = restaurant.numGuests ?? 10;
console.log(correctGuest);



//  short-circuiting

console.log("--- OR ---");

console.log(3 || "karim"); // 3
console.log("" || "karim"); // karim
console.log(true || 0); // true
console.log(undefined || null); // null

restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log("--- AND ---");

console.log("hello" && 23 && null && "karim"); // null

if (restaurant.orderPizza) {
  restaurant.orderPizza("Mushrooms", "onion");
}

restaurant.orderPizza && restaurant.orderPizza("Mushrooms", "onion");
//////////////////////////////////////////



// 1) Destructuring
// Rest parameters . IT IS ON THE LEFT SIDE OF THE =
const [a, b, ...others] = [1, 2, 3, 4, 6];
console.log(a, b, others);

const [pizza, , risotto, ...other] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, other);

// Objects

const { sat, ...rest } = restaurant.openingHours;
console.log(sat, rest);

// Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3, 4);

const x = [1, 2, 3];
add(...x);

restaurant.orderPizza("Mushrooms", "onion", "olives");



// Spread Operator
//It is Only used when creating functions or building arrays...
const arr = [7, 8, 9];
// arr.unshift(1, 2);

const badArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badArr);

const newArr = [1, 2, ...arr];
console.log(newArr); // [1, 2, 7, 8, 9]
console.log(...newArr); // 1, 2, 7, 8, 9

const newMenu = [...restaurant.mainMenu, "Koshari"];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects

const str = "karim";
const letters = [...str, " ", ".S"];
console.log(letters);

// Real Example
// const arrOfIngs = [prompt("ing1"), prompt("ing2"), prompt("in31")];
// restaurant.orderPasta(...arrOfIngs);

// Objects
const newResturant = { founded: 1990, ...restaurant, founder: "karim" };
console.log(newResturant);

const objectCopy = { ...restaurant };
objectCopy.name = "restorante";
console.log(objectCopy.name);
console.log(restaurant.name);
//   // Error Unexpected token '...'



/////////////////////////////////////////////////////////
//Destructuring Objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// default values
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

// swaping and mutating variables

let a = 111;
let b = 888;
const obj = { a: 11, b: 7, c: 5 };

// {a, b} = obj; // error
({ a, b } = obj);
console.log(a, b);

// nested object

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);



/////////////////////////////////////////////////////////
// Destructuring Arrays

const arr = [1, 2, 3];

const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

const [first, second] = restaurant.categories;
console.log(first, second);

let [one, , three] = restaurant.categories;
console.log(one, three);

// Swaping Variables

// const temp = one;
// one = three;
// three = temp;
// console.log(one, three);

// Very USEFUL TRIC

[one, three] = [three, one];
console.log(one, three);

const [starter, maincourse] = restaurant.order(2, 0);
console.log(starter, maincourse);

// Destructure nested
const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values

const [q = 1, r = 1, s = 1] = [8, 9];
console.log(q, r, s);



// Coding Challenge #1 ✅
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const { players } = game;
const [gk1] = players[0];
const [gk2] = players[1];
const [, ...fieldPlayers1] = players[0];
const [, ...fieldPlayers2] = players[1];
const players1 = [gk1, ...fieldPlayers1];
const players2 = [gk2, ...fieldPlayers2];
const allPlayers = [gk1, ...fieldPlayers1, gk2, ...fieldPlayers2];
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

const { team1, x: draw, team2 } = game.odds;

const printGoals = function (...numplayers) {
  for (let i = 0; i < numplayers.length; i++) {
    console.log(numplayers[i]);
  }
  console.log(`${numplayers.length} goals scored`);
};

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");

printGoals(...game.scored);

game.odds.team1 < game.odds.team2 && console.log("Team One Won the Game 🏆");
game.odds.team1 > game.odds.team2 && console.log("Team two Won the Game 🏆");

for (const [goal, name] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${name}`);
}

console.log(Object.entries(game.odds));

let avg = 0;
for (const [, value] of Object.entries(game.odds)) {
  avg += value;
}
console.log(avg / Object.keys(game.odds).length);

for (const [key, value] of Object.entries(game.odds)) {
  key === "team1" && console.log(`Odd of victory ${game.team1}: ${value}`);
  key === "team2" && console.log(`Odd of victory ${game.team2}: ${value}`);
  key === "x" && console.log(`Odd of draw: ${value}`);
}

const scorers = {};

for (const [goal, name] of game.scored.entries()) {
  if (!scorers[name]) {
    scorers[name] = 0;
  }
  scorers[name] += 1;
}

console.log(scorers);

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

console.log(
  `Ane vent happened,on average, every ${90 / gameEvents.size} minutes`
);

for (const [key, value] of gameEvents) {
  key < 45 && console.log(`[FIRST HALF] ${key}: ${value}`);
  key > 45 && console.log(`[Second HALF] ${key}: ${value}`);
}



// Last Challenge ✌️
const textarea = document.createElement("textarea");
textarea.classList.add("text");
document.body.append(textarea);

const button = document.createElement("button");
button.classList.add(".btn");
document.body.append(button);
let textValue = "";

const converToCamel = function (underscore_case) {
  const lines = underscore_case.split("\n");
  const arrOfNames = [];
  for (const line of lines) {
    const [firstPart, secondPart] = line.split("_");
    const secondCamel = secondPart[0].toUpperCase() + secondPart.slice(1);
    const entirePart = (firstPart + secondCamel).trim();
    arrOfNames.push(entirePart.padEnd(17, " "));
  }
  return arrOfNames;
};

button.addEventListener("click", function () {
  textValue = document.querySelector(".text").value;
  const arrCameled = converToCamel(textValue);

  for (const [idx, name] of arrCameled.entries()) {
    const last = name + "✅".repeat(idx + 1);
    console.log(last);
  }
});



//  Finally Done ✅

*/
