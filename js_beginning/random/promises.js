Promise.resolve(1)
  .then(x => x + 1)
  .finally(() => console.log('here'))
  .then(x => {
    throw Error('My Error');
  })
  .finally(() => console.log('here 2'))
  .catch(() => 1)
  .then(x => x + 1)
  .then(x => console.log(x))
  .catch(console.error);
