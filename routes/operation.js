'use strict'

var express = require('express');
var OperationController = require('../controllers/operation');

var router = express.Router();

router.post('/save-operation', OperationController.saveOperation);
router.get('/operation/:id?', OperationController.getOperation);
router.get('/operations', OperationController.getOperations);
router.put('/operation/:id', OperationController.updateOperation);
router.delete('/operation/:id', OperationController.deleteOperation);
module.exports = router;