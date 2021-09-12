const isAnagram = (word1, word2) => {
  const arrayFromWordFirst = word1.split('');
  const arrayFromWordSecond = word2.split('');

  if (
    arrayFromWordFirst.reduce((acc, el) => {
      if (acc.includes(el)) {
        acc.splice(acc.indexOf(el), 1);
      }
      return acc;
    }, arrayFromWordSecond).length === 0
  ) {
    return true;
  }
};

function anagrams(word, words) {
  return words.filter(el => isAnagram(word, el));
}

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
