Array.prototype.groupBy = function (fn) {
  if (!fn) {
    return this.reduce((acc, item, index, array) => {
      acc[item] = [...array.filter(el => el === item)];
      return acc;
    }, {});
  }

  return this.reduce((acc, item, index, array) => {
    let objIndex = fn(item);

    console.log(objIndex);
    acc[objIndex] = [...array.filter(el => fn(el) === fn(item))];
    return acc;
  }, {});
};

console.log(
  [1, 2, 3, 2, 4, 1, 5, 1, 6].groupBy(function (val) {
    return val % 3;
  })
);
// {
//   0: [3, 6],
//   1: [1, 4, 1, 1],
//   2: [2, 2, 5]
// }
