const getCount = str =>
  str.match(/[aeiou]/gi) ? str.match(/[aeiou]/gi).length : 0;

console.log(getCount('my pyx'));
