typeof new (class {
  class() {}
})();
//object

var a = Function.length,
  b = new Function().length;

// data.sort((a, b) => b - a);

var o = new F();
// console.log(o.constructor === F);

(function (x, f = () => x) {
  var x;
  var y = x;
  x = 2;
  return [x, y, f()];
})(1);
