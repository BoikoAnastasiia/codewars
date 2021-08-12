const days = [9, 16, 2, 1, 55, 6, 12];
const days2 = [9, 16, 2, 1, 55, 6, 70];

const theBestDayForBuying = arr => {
  return arr.reduce((acc, el, index, array) => {
    if (acc > el && array.indexOf(acc) < 6) {
      return acc;
    }
    return el;
  });
};

console.log(theBestDayForBuying(days2));
