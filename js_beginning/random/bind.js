(function () {
  var fooAccount = {
    name: 'John',
    amount: 4000,
    deductAmount: function (amount) {
      this.amount -= amount;
      return 'Total amount left in account: ' + this.amount;
    },
  };
  var barAccount = {
    name: 'John',
    amount: 6000,
  };
  var withdrawAmountBy = function (totalAmount) {
    return fooAccount.deductAmount.bind(barAccount, totalAmount);
  };
  console.log(withdrawAmountBy(400)());
  console.log(withdrawAmountBy(300)());
})();
