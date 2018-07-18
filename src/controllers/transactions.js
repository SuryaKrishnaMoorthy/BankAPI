const modelAccounts = require('../models/accounts');
const modelTransactions = require('../models/transactions');

const getTransactions = (req, res, next) => {
  const limit = req.query.limit;
  const result = modelTransactions.getTransactions(req.params.account_id, limit);
  if (result.errors) {
    next(result.errors);
  } else {
    res.status(200).send({
      transactions: result
    });
  }
}

const getTransaction = (req, res, next) => {
  const result = modelTransactions.getTransaction(req.params.account_id, req.params.transaction_id);
  if (result.errors) {
    next(result.errors);
  } else {
    res.status(200).send({
      transaction: result
    });
  }
}

const createTransaction = (req, res, next) => {
  const result = modelTransactions.createTransaction(req.params.account_id, req.body);
  if (result.errors) {
    next(result.errors);
  } else {
    res.status(201).send({
      transaction: result
    });
  }
}

const updateTransaction = (req, res, next) => {
  const result = modelTransactions.updateTransaction(req.params.account_id, req.params.transaction_id, req.body);
  if (result.errors) {
    next(result.errors);
  } else {
    res.status(200).send({
      transaction: result
    });
  }
}

const deleteTransaction = (req, res, next) => {
  const result = modelTransactions.deleteTransaction(req.params.account_id, req.params.transaction_id);
  if (result.errors) {
    next(result.errors);
  } else {
    res.status(204).send();
  }
}

module.exports = {
  getTransactions,
  getTransaction,
  createTransaction,
  updateTransaction,
  deleteTransaction
}
