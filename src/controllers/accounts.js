const modelAccounts = require('../models/accounts');
const modelTransactions = require('../models/transactions')

const getAccounts = (req, res, next) => {
  const limit = req.query.limit;
  const result = modelAccounts.getAccounts(limit);
  res.status(200).send({
    accounts: result
  });
}

const getAccount = (req, res, next) => {
  const result = modelAccounts.getAccount(req.params.account_id);
  if (result.errors) {
    next(result.errors);
  } else {
    res.status(200).send({
      account: result
    });
  }
}

const createAccount = (req, res, next) => {
  const result = modelAccounts.createAccount(req.body);
  res.status(201).send({
    account: result
  });
}

const updateAccount = (req, res, next) => {
  const result = modelAccounts.updateAccount(req.params.account_id, req.body);
  if (result.errors) {
    next(result.errors);
  } else {
    res.status(200).send({
      account: result
    });
  }
}

const deleteAccount = (req, res, next) => {
  const result = modelAccounts.deleteAccount(req.params.account_id);
  if (result.errors) {
    next(result.errors);
  } else {
    res.status(204).send();
  }
}

module.exports = {
  getAccounts,
  getAccount,
  createAccount,
  updateAccount,
  deleteAccount
}
