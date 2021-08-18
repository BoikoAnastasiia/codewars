var employeeId = 'abc123';

function foo() {
  employeeId = '123bcd';
  return;

  function employeeId() {}
}
foo(); //abc123

console.log(employeeId);

let x = 1;
if (function f() {}) {
  x += typeof f;
}
x;
