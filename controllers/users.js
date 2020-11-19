const User = require('../models/user');

module.exports = {
    index,
}


function index(req, res) {
    User.find({}, function(err, users) {
        res.render('todos/new', {
            users,
            user: req.user
        })
    })
}