const ho = a => (!a ? 'Ho' + '!' : 'Ho' + ' ' + a);

console.log(ho(ho(ho())));

// ho(); // should return "Ho!"
// ho(ho()); // should return "Ho Ho!"
// ho(ho(ho())); // should return "Ho Ho Ho!"
