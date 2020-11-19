const Todo = require('../models/todo')

module.exports = {
    index,
    create,
    show
}


function index(req, res) {
    Todo.find({}, function(err, todos) {
        res.render('todos/new', {
            todos,
            user: req.user,
        })
    })
}

function create(req, res) {
    // Sanitize the data
    const todo = new Todo(req.body);
    todo.save(function(err) {
        console.log(todo)
        res.redirect('/todos')
    })
}

function show(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
        res.render('todos/show', {title: 'Todo Detail', todo})
    })
}