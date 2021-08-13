Array.prototype.square = function () {
  const newAr = this;
  return newAr.map(el => el * el);
};

Array.prototype.cube = function () {
  const newAr = this;
  return newAr.map(el => el * el * el);
};

Array.prototype.average = function () {
  const newAr = this;
  return newAr.length > 0
    ? newAr.reduce((acc, value) => acc + value) / newAr.length
    : NaN;
};

var numbers = [1, 2, 3, 4, 5];
console.log(numbers.average());

Array.prototype.sum = function () {
  const newAr = this;
  return newAr.reduce((acc, value) => acc + value);
};

Array.prototype.even = function () {
  const newAr = this;
  return newAr.filter(el => (el % 2 === 0 ? el : null));
};

Array.prototype.odd = function () {
  const newAr = this;
  return newAr.filter(el => (el % 2 !== 0 ? el : null));
};
