function arithmetic(a, b, operator) {
  let result;
  switch (operator) {
    case 'add':
      result = a + b;
      break;

    case 'subtract':
      result = a - b;
      break;

    case 'divide':
      result = a / b;
      break;

    case 'multiply':
      result = a * b;
      break;

    default:
      result = 'Invalid params';
  }
  return result;
}

console.log(arithmetic(5, 2, 'divide'));

// arithmetic(5, 2, "add")      => returns 7
// arithmetic(5, 2, "subtract") => returns 3
// arithmetic(5, 2, "multiply") => returns 10
// arithmetic(5, 2, "divide")   => returns 2.5
