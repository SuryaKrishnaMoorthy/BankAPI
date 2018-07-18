const data = require('./data');
const uuid = require('uuid/v4');

const validateAccountId = (accountId) => {
  let account = data.find(account => account.accountId === accountId);
  return account;
}

const validateAccountBody = (body) => {
  const errors = []
  const name = body.name
  const bankName = body.bankName
  const description = body.description

  if (!name || typeof name !== `string`) {
    errors.push(`Name is required and has to be a string of characters`)
  }

  if (!bankName || typeof bankName !== `string`) {
    errors.push(`Bank name is required and has to be a string of characters`)
  }

  if (!description || typeof description !== `string`) {
    errors.push(`Description is required and has to be a string of characters`)
  }
  return errors
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
  const accountBody = validateAccountBody(body);
  if (accountBody.length) {
    errors.push({
      message: accountBody
    });
    response = {
      errors
    };
    return response
  }

  const bankAccount = {
    accountId: uuid(),
    ...body,
    transactions: []
  };
  data.push(bankAccount);
  response = bankAccount;

  return response;
}

const updateAccount = (accountId, body) => {
  const errors = [];
  let response;
  const account = validateAccountId(accountId);
  if (!account) {
    errors.push({
      message: `Could not find an account with id ${accountId}`
    });

    return {
      errors
    };
  };

  const accountBody = validateAccountBody(body);
  if (accountBody.length) {
    errors.push({
      message: accountBody
    });
    response = {
      errors
    };
    return response
  }

  return { ...account, ...body };
}

const deleteAccount = (accountId) => {
  const errors = [];
  let response;
  const accountIndex = data.findIndex(account => account.accountId === accountId);
  if (accountIndex === -1) {
    errors.push({
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

module.exports = {
  getAccounts,
  getAccount,
  createAccount,
  updateAccount,
  deleteAccount,
  validateAccountId,
  validateAccountBody
}
