Array.prototype.square = function () {
  return this.map(el => el * el);
};

Array.prototype.cube = function () {
  return this.map(el => el * el * el);
};

var numbers = [1, 2, 3, 4, 5];
console.log(numbers.average());

Array.prototype.average = function () {
  return this.length > 0
    ? this.reduce((acc, value) => (acc + value) / this.length)
    : NaN;
};
