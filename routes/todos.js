const express = require('express');
const router = express.Router();

const todosCtrl = require('../controllers/todos')

// router.get('/', isLoggedIn, todosCtrl.index)

router.get('/', todosCtrl.index);
router.post('/', todosCtrl.create);
router.get('/:id', todosCtrl.show);



module.exports = router;