const data = require('./data');
const uuid = require('uuid/v4');

const validateAccountId = (accountId) => {
  let account = data.find(account => account.accountId === accountId);
  return account;
}

const getAccounts = (limit) => {
  let response;
  response = limit ? data.slice(0, limit) : data
  return response;
}

const getAccount = (accountId) => {
  const errors = [];
  const account = validateAccountId(accountId);
  if (!account) {
    errors.push({
      status: 404,
      message: `Could not find an account with id ${accountId}`
    });
    response = {
      errors
    };
  } else {
    response = account;
  }
  return response;
}

const createAccount = (body) => {
  const errors = [];
  let response;
  const name = body.name;
  const bankName = body.bankName;
  const description = body.description;
  if (!name || !bankName || !description) {
    errors.push({
      status: 400,
      message: `Please provide name, bank name and description`
    });
    response = {
      errors
    };
  } else {
    const bankAccount = {
      accountId: uuid(),
      name,
      bankName,
      description,
      transactions: []
    };
    data.push(bankAccount);
    response = bankAccount;
  }
  return response;
}

const updateAccount = (accountId, body) => {
  const errors = [];
  let response;
  const account = validateAccountId(accountId);
  if (!account) {
    errors.push({
      status: 404,
      message: `Could not find an account with id ${accountId}`
    });
    response = {
      errors
    };
    return response;
  }
  const name = body.name;
  const bankName = body.bankName;
  const description = body.description;
  if (!name && !bankName && !description) {
    errors.push({
      status: 400,
      message: `Please provide name or bank name or description`
    });
    response = {
      errors
    };
  } else {
    account.name = name ? name : account.name;
    account.bankName = bankName ? bankName : account.bankName;
    account.description = description ? description : account.description;
    response = account;
  }
  return response;
}

const deleteAccount = (accountId) => {
  const errors = [];
  let response;
  const accountIndex = data.findIndex(account => account.accountId === accountId);
  if (accountIndex === -1) {
    errors.push({
      status: 404,
      message: `Could not find an account with id ${accountId}`
    });
    response = {
      errors
    };
  } else {
    response = data.splice(accountIndex, 1);
  }
  return response;
}

const getTransactions = (accountId, limit) => {
  const errors = [];
  const account = validateAccountId(accountId);
  if (!account) {
    errors.push({
      status: 404,
      message: `Could not find an account with id ${accountId}`
    });
    response = {
      errors
    };
    return response;
  }
  return limit ? account.transactions.slice(0, limit) : account.transactions
}

const getTransaction = (accountId, transactionId) => {
  const errors = [];
  const account = validateAccountId(accountId);
  if (!account) {
    errors.push({
      status: 404,
      message: `Could not find an account with id ${accountId}`
    });
    response = {
      errors
    };
    return response;
  }
  const transaction = account.transactions.find(transaction => transactionId === transaction.transactionId);
  if (!transaction) {
    errors.push({
      status: 404,
      message: `Could not find an transaction with id ${transactionId}`
    });
    response = {
      errors
    };
    return response;
  }
  return transaction;
}

const createTransaction = (accountId, body) => {
  const errors = [];
  let account = validateAccountId(accountId);
  if (!account) {
    errors.push({
      status: 404,
      message: `Could not find an account with id ${accountId}`
    });
    response = {
      errors
    };
    return response;
  }
  const title = body.title;
  const amount = body.amount;
  const transactionPending = body.transactionPending;
  if (!title || !amount || typeof transactionPending !== 'boolean') {
    errors.push({
      status: 400,
      message: `Please provide title or amount or transactionPending status`
    });
    response = {
      errors
    };
    return response;
  }
  const transaction = {
    transactionId: uuid(),
    title,
    amount,
    transactionPending
  };
  account.transactions.push(transaction);
  return transaction;
}

const updateTransaction = (accountId, transactionId, body) => {
  const errors = [];
  let response;
  const account = validateAccountId(accountId);
  if (!account) {
    errors.push({
      status: 404,
      message: `Could not find an account with id ${accountId}`
    });
    response = {
      errors
    };
    return response;
  }
  const transaction = account.transactions.find(transaction => transactionId === transaction.transactionId);
  if (!transaction) {
    errors.push({
      status: 404,
      message: `Could not find a transaction with id ${transactionId}`
    });
    response = {
      errors
    };
    return response;
  }
  const title = body.title;
  const amount = body.amount;
  const transactionPending = body.transactionPending;
  if (!title && !amount && typeof transactionPending !== 'boolean') {
    errors.push({
      status: 400,
      message: `Please provide title or amount or transactionPending status`
    });
    response = {
      errors
    };
    return response;
  }
  transaction.title = title ? title : transaction.title;
  transaction.amount = amount ? amount : transaction.amount;
  transaction.transactionPending = typeof transactionPending !== 'boolean' ? transaction.transactionPending : transactionPending;
  return transaction;
}

const deleteTransaction = (accountId, transactionId) => {
  const errors = [];
  let response;
  const account = validateAccountId(accountId);
  if (!account) {
    errors.push({
      status: 404,
      message: `Could not find an account with id ${accountId}`
    });
    response = {
      errors
    };
    return response;
  }
  const transactionIndex = account.transactions.findIndex(transaction => transactionId === transaction.transactionId);
  if (transactionIndex === -1) {
    errors.push({
      status: 404,
      message: `Could not find a transaction with id ${transactionId}`
    });
    response = {
      errors
    };
    return response;
  }
  return account.transactions.splice(transactionIndex, 1);
}

module.exports = {
  getAccounts,
  getAccount,
  createAccount,
  updateAccount,
  deleteAccount,
  getTransactions,
  getTransaction,
  createTransaction,
  updateTransaction,
  deleteTransaction
}
