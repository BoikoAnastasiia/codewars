function changeEven(numbers, value) {
  const newNumbers = [];

  numbers.forEach(number => {
    if (number % 2 === 0) {
      number += value;
    }
    newNumbers.push(number);
    console.log(newNumbers);
  });
  return newNumbers;
}
changeEven([1, 2, 3, 4, 5], 10);
