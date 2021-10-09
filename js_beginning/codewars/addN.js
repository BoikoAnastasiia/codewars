function add(n) {
  function addSomething(y) {
    return y + n;
  }
  return addSomething;
}
console.log(add(1)(3));
