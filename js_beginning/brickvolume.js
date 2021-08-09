function iceBrickVolume(radius, bottleLength, rimLength) {
  return (bottleLength - rimLength) * 2 * radius ** 2;
}

console.log(iceBrickVolume(1, 10, 2));
