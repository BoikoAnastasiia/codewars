function anagrams(word, words) {}

const isAnagram = (word1, word2) => {
  const arrayFromWordFirst = word1.split('');
  const arrayFromWordSecond = word2.split('');

  arrayFromWordFirst.reduce(
    (acc, el, index) => console.log(acc, el, index),
    arrayFromWordSecond
  );
};

console.log(isAnagram('carer', 'racer'));
