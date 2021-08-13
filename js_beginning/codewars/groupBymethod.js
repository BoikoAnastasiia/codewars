Array.prototype.groupBy = function (fn) {
  return this.reduce((acc, item, index, array) => {
    acc[index] = array.filter(el => el === index);
    return acc;
  }, {});
};

console.log([1, 2, 3, 2, 4, 1, 5, 1, 6].groupBy());
