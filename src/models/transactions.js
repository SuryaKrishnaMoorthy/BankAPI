const accounts = require("./accounts.js")
const data = require('./data');
const uuid = require('uuid/v4');

const validateTransactionBody = (body) => {
  const errors = []
  const title = body.title
  const amount = body.amount
  const transactionPending = body.transactionPending

  if (!title || typeof title !== `string` || title.length > 8) {
    errors.push(`Title is required and has to be a string that cannot be longer than 8 characters`)
  }

  if (!amount || typeof amount !== `number`) {
    errors.push(`Amount is required and has to be a numeric number`)
  }

  if (!transactionPending || typeof transactionPending !== `boolean`) {
    errors.push(`Transaction status is required and has to be a true/false value`)
  }

  return errors
}

const getTransactions = (accountId, limit) => {
  const errors = [];
  const account = accounts.validateAccountId(accountId);
  if (!account) {
    errors.push({
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
  const account = accounts.validateAccountId(accountId);
  if (!account) {
    errors.push({
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
  let account = accounts.validateAccountId(accountId);
  if (!account) {
    errors.push({
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

  const transactionBody = validateTransactionBody(body)
  if (transactionBody.length) {
    errors.push({
      message: transactionBody
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
  const account = accounts.validateAccountId(accountId);
  if (!account) {
    errors.push({
      message: `Could not find an account with id ${accountId}`
    });
    response = {
      errors
    };
    return response;
  }

  const transactionBody = validateTransactionBody(body)
  if (transactionBody.length) {
    errors.push({
      message: transactionBody
    });
    response = {
      errors
    };
    return response;
  }

  const transaction = account.transactions.find(transaction => transactionId === transaction.transactionId);
  if (!transaction) {
    errors.push({
      message: `Could not find a transaction with id ${transactionId}`
    });
    response = {
      errors
    };
    return response;
  }

  return {...transaction, ...body};
}

const deleteTransaction = (accountId, transactionId) => {
  const errors = [];
  let response;
  const account = accounts.validateAccountId(accountId);
  if (!account) {
    errors.push({
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
  getTransactions,
  getTransaction,
  createTransaction,
  updateTransaction,
  deleteTransaction
}
