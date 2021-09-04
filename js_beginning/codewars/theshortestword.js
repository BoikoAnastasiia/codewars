function findShort(s) {
  return Math.min(...s.split(' ').map(el => (el = el.length)));
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'));
