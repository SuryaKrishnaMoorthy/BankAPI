const express = require("express");
const router = express.Router();
const ctrl = require('../controllers/accounts')

// CRUD for accounts
router.get('/', ctrl.getAccounts);
router.get('/:account_id', ctrl.getAccount);
router.post('/', ctrl.createAccount);
router.put('/:account_id', ctrl.updateAccount);
router.delete('/:account_id', ctrl.deleteAccount);

module.exports = router;
