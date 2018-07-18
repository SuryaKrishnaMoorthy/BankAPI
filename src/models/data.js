let bankAccounts = [{
  accountId: "1",
  name: "Savings Account",
  bankName: "Bank of America",
  description: "Account for savings purpose",
  transactions: [{
    transactionId: "1a",
    title: "walmart",
    amount: 100,
    transactionPending: true,
  }, {
    transactionId: "1b",
    title: "costco",
    amount: 80,
    transactionPending: false
  }]
}, {
  accountId: "2",
  name: "Checking Account",
  bankName: "Citi Bank",
  description: "Account for salary",
  transactions: [{
    transactionId: "2a",
    title: "amazon",
    amount: 30,
    transactionPending: true,
  }, {
    transactionId: "2b",
    title: "costco",
    amount: 80,
    transactionPending: true
  }]
}];

module.exports = bankAccounts;
