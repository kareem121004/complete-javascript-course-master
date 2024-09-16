"use strict";

const bookings = [];
const createBokking = function (flightNum, numOfPassengers = 1, price = 299) {
  // ES5 OLD WAY
  //   numOfPassengers = numOfPassengers || 1;
  //   price = price || 299;
  const booking = {
    flightNum,
    numOfPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBokking("ll444");
createBokking("LA567", 2);
createBokking("AB123", undefined, 477);
