const multiplicationTable = size => {
  let mainArray = [];
  for (let i = 0; i < size; i++) {
    let row = [];
    for (let j = 0; j < size; j++) {
      row.push[j];
    }
    mainArray.push(row);
  }
  return mainArray;
};

console.log(multiplicationTable(3));
