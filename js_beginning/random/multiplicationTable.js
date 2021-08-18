const multiplicationTable = size => {
  let mainArray = [];
  for (let i = 1; i <= size; i++) {
    let row = Array(size)
      .fill(1)
      .map((el, index) => (el + index) * i);
    mainArray.push(row);
  }
  return mainArray;
};

console.log(multiplicationTable(3));
