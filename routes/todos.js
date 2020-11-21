const express = require('express');
const router = express.Router();

const todosCtrl = require('../controllers/todos')

// router.get('/', isLoggedIn, todosCtrl.index)

router.get('/', todosCtrl.index);
router.post('/', todosCtrl.create);
router.get('/:id', todosCtrl.show);
router.delete('/:id', todosCtrl.delete);
router.get('/:id/edit', todosCtrl.edit);



module.exports = router;