function outed(meet, boss) {
  return (Object.values(meet).reduce((acc, val) => acc + val) + meet[boss]) /
    Object.values(meet).length <=
    5
    ? 'Get Out Now'
    : 'Nice Work Champ!';
}

console.log(
  outed(
    {
      tim: 2,
      jim: 4,
      randy: 0,
      sandy: 5,
      andy: 8,
      katie: 6,
      laura: 2,
      saajid: 2,
      alex: 3,
      john: 2,
      mr: 8,
    },
    'john'
  )
);
