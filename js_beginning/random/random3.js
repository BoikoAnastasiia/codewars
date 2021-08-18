function shortcut(string) {
  return string
    .match(/[BCDFGJKLMNPQSTVXZHRWY ?!]/gi)

    .join('')
    .replace(/\s\s+/g, '');
}
console.log(shortcut('how are you today?'));
