// There are 2 sorted arrays.
// Create 3rd sorted array which includes elements of 2 initial arrays.
// Complexity of algorithm  O(n+m).
// Please  do not use internet for solution.
// Don't use array.sort as well

const a = [2, 5, 6, 8, 20, 40, 43, 57];
const b = [1, 4, 7, 8, 23, 38, 41, 43, 53, 68, 73];

const sortArrays = (arr1, arr2) => {
  const thirdAr = [...arr1, ...arr2];

  for (let i = 0; i < thirdAr.length; i++) {
    if (thirdAr[i] > thirdAr[i + 1]) {
      thirdAr[i] = thirdAr[i + 1];
    }
  }

  return thirdAr;
};

console.log(sortArrays(a, b));
