const express = require('express');
const router = express.Router();

const todosCtrl = require('../controllers/todos')

router.get('/', isLoggedIn, todosCtrl.index);
router.post('/', isLoggedIn, todosCtrl.create);
router.get('/:id', isLoggedIn, todosCtrl.show);
router.delete('/:id', isLoggedIn, todosCtrl.delete);
router.get('/:id/edit', isLoggedIn, todosCtrl.edit);
router.put('/:id', isLoggedIn, todosCtrl.update)

router.post('/:id', todosCtrl.addPriority);

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google')
}

module.exports = router;