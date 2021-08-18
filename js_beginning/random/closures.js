function getDataFromServer(apiUrl) {
  var name = 'John';
  return {
    then: function (fn) {
      fn(name);
    },
  };
}

// getDataFromServer('www.google.com').then(function (name) {
//   console.log(name);
// });
console.log(getDataFromServer('www.google.com'));
