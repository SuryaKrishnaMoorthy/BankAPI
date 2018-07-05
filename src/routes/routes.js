const express = require("express");
const router = express.Router();
const ctrl = require('../controllers/bank')

// CRUD for accounts
router.get('/all', ctrl.getAccounts);
router.get('/:account_id', ctrl.getAccount);
router.post('/', ctrl.createAccount);
router.put('/:account_id', ctrl.updateAccount);
router.delete('/:account_id', ctrl.deleteAccount);

//CRUD for transactions
router.get('/:account_id/transaction/all', ctrl.getTransactions);
router.get('/:account_id/transaction/:transaction_id', ctrl.getTransaction);
router.post('/:account_id/transaction', ctrl.createTransaction);
router.put('/:account_id/transaction/:transaction_id', ctrl.updateTransaction);
router.delete('/:account_id/transaction/:transaction_id', ctrl.deleteTransaction);

module.exports = router;
