// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const printForecast = function (array) {
  let info = '';
  for (let i = 0; i < array.length; i++) {
    info += `${array[i]}C in ${i + 1} days... `;
  }
  console.log('...' + info);
};

printForecast([17, 21, 23]);
