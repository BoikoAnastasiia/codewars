function DNAStrand(dna) {
  let arDna = dna.split('');
  for (let i = 0; i < arDna.length; i++) {
    if (arDna[i] === 'A') {
      arDna[i] = 'T';
      continue;
    }

    if (arDna[i] === 'T') {
      arDna[i] = 'A';
      continue;
    }

    if (arDna[i] === 'G') {
      arDna[i] = 'C';
      continue;
    }

    if (arDna[i] === 'C') {
      arDna[i] = 'G';
      continue;
    }

    console.log(arDna[i]);
  }
  return arDna.join('');
}

// function DNAStrand(dna) {
//   return dna.split('').map((el, index, array) => {
//     if (el === 'A') {
//         el = 'T';
//         continue
//     }

//     if (el === 'T') {
//         el = 'A';
//         continue
//     }

//     if (el === 'G') {
//         el = 'C';
//         continue
//     }

//     if (el === 'C') {
//         el = 'G';
//         continue
//     }
//     console.log(el);
//     return el;
//   });
// }

console.log(DNAStrand('ATTGC')); // return "TAACG"
