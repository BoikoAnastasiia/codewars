function pluck(objs, name) {
  return objs.reduce((acc, value, array) => {
    acc.push(value[name]);
    return acc;
  }, []);
}

console.log(pluck([{ a: 1, b: 3 }, { a: 2 }], 'b'));
