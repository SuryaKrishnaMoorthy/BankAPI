let bankAccounts = [{
  accountId: "bc79f527-54fc-4c4a-ba99-9b512e6f03ed",
  name: "Savings Account",
  bankName: "Bank of America",
  description: "Account for savings purpose",
  transactions: [{
    transactionId: "cb646602-ade8-4d4e-b638-99466c41ebb9",
    title: "walmart",
    amount: 100,
    transactionPending: true,
  }, {
    transactionId: "fd89b4e4-2c17-46e5-bd41-e258bc64feec",
    title: "costco",
    amount: 80,
    transactionPending: false
  }]
}, {
  accountId: "9105376b-e995-4d43-a64a-f91b439bb0b4",
  name: "Checking Account",
  bankName: "Citi Bank",
  description: "Account for salary",
  transactions: [{
    transactionId: "9105376b-e995-4d43-a64a-f81b339bb0b3",
    title: "amazon",
    amount: 30,
    transactionPending: true,
  }, {
    transactionId: "fc92e488-24c7-413b-8e33-973abf131e85",
    title: "costco",
    amount: 80,
    transactionPending: true
  }]
}];

module.exports = bankAccounts;
