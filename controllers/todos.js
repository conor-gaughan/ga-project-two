const Todo = require('../models/todo')

module.exports = {
    index,
    create,
}


function index(req, res) {
    res.render('todos/new', {title: 'Forget Me Note'})
}

function create(req, res) {
    const todo = new Todo(req.body);
    todo.save(function(err) {
        console.log(todo)
        res.redirect('/todos')
    })
}