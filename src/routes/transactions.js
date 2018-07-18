const express = require("express");
const router = express.Router({ mergeParams: true });
const ctrl = require('../controllers/transactions')

//CRUD for transactions
router.get('/', ctrl.getTransactions);
router.get('/:transaction_id', ctrl.getTransaction);
router.post('/', ctrl.createTransaction);
router.put('/:transaction_id', ctrl.updateTransaction);
router.delete('/:transaction_id', ctrl.deleteTransaction);

module.exports = router;
