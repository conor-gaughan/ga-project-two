const router = require('express').Router();
const userCtrl = require('../controllers/users')

router.get('/todos', userCtrl.index);



module.exports = router;