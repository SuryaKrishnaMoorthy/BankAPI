const model = require('../models/bank')

const getAccounts = (req, res, next) => {
  const limit = req.query.limit;
  const result = model.getAccounts(limit);
  res.status(200).send({
    accounts: result
  });
}

const getAccount = (req, res, next) => {
  const result = model.getAccount(req.params.account_id);
  if (result.errors) {
    next(result.errors[0]);
  } else {
    res.status(200).send({
      account: result
    });
  }
}

const createAccount = (req, res, next) => {
  const result = model.createAccount(req.body);
  res.status(201).send({
    account: result
  });
}

const updateAccount = (req, res, next) => {
  const result = model.updateAccount(req.params.account_id, req.body);
  if (result.errors) {
    next(result.errors[0]);
  } else {
    res.status(200).send({
      account: result
    });
  }
}

const deleteAccount = (req, res, next) => {
  const result = model.deleteAccount(req.params.account_id);
  if (result.errors) {
    next(result.errors[0]);
  } else {
    res.status(204).send();
  }
}

const getTransactions = (req, res, next) => {
  const limit = req.query.limit;
  const result = model.getTransactions(req.params.account_id, limit);
  if (result.errors) {
    next(result.errors[0]);
  } else {
    res.status(200).send({
      transactions: result
    });
  }
}

const getTransaction = (req, res, next) => {
  const result = model.getTransaction(req.params.account_id, req.params.transaction_id);
  if (result.errors) {
    next(result.errors[0]);
  } else {
    res.status(200).send({
      transaction: result
    });
  }
}

const createTransaction = (req, res, next) => {
  const result = model.createTransaction(req.params.account_id, req.body);
  if (result.errors) {
    next(result.errors[0]);
  } else {
    res.status(201).send({
      transaction: result
    });
  }
}

const updateTransaction = (req, res, next) => {
  const result = model.updateTransaction(req.params.account_id, req.params.transaction_id, req.body);
  if (result.errors) {
    next(result.errors[0]);
  } else {
    res.status(200).send({
      transaction: result
    });
  }
}

const deleteTransaction = (req, res, next) => {
  const result = model.deleteTransaction(req.params.account_id, req.params.transaction_id);
  if (result.errors) {
    next(result.errors[0]);
  } else {
    res.status(204).send();
  }
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
