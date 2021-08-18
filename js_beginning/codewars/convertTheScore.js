function scoreboard(string) {
  const vocabulary = [
    'nil',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  const regex =
    /((nil)|(one)|(two)|(three)|(four)|(five)|(six)|(seven)|(eight)|(nine))/gm;

  return string
    .match(regex)

    .map(el => vocabulary.indexOf(el));
}

console.log(scoreboard('The score is four nil'));

const groupRegex = /(nil|one|two|three|four|five|six|seven|eight|nine)/g;
