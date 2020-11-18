const express = require('express');
const router = express.Router();

const todosCtrl = require('../controllers/todos')


router.get('/todos', todosCtrl.index);

module.exports = router;