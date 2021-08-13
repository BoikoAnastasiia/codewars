Array.prototype.groupBy = function (fn) {
  if (!fn) {
    return this.reduce((acc, item, index, array) => {
      acc[item] = [...array.filter(el => el === item)];
      return acc;
    }, {});
  }

  return this.reduce((acc, item, index, array) => {
    acc[item] = [...array.filter(el => el === item)];
    return acc;
  }, {});
};

console.log([1, 2, 3, 2, 4, 1, 5, 1, 6].groupBy());
// {
//   1: [1, 1, 1],
//   2: [2, 2],
//   3: [3],
//   4: [4],
//   5: [5],
//   6: [6]
// }
