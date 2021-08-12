const a = [1, 2, 5, 5, 9, 10];
const v = [10, 5];

const intersection = (arr1, arr2) => {
  return arr1.length < arr2.length
    ? arr1.filter(val => {
        for (let i = 0; i < arr2.length; i++) {
          if (val === arr2[i]) {
            return val;
          }
        }
      })
    : arr2.filter(val => {
        for (let i = 0; i < arr1.length; i++) {
          if (val === arr1[i]) {
            return val;
          }
        }
      });
};

console.log(intersection(a, v));
