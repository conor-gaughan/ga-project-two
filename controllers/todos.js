const Todo = require('../models/todo')

module.exports = {
    index,
    create,
    show,
    delete: deleteTodo,
    edit,
    update,
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

function deleteTodo(req, res) {
    Todo.deleteOne(req.params.id, function(err, todo) {
        todo.splice(req.params.id, 1)
        res.redirect('/todos');
    });
}

function edit(req, res) {
    Todo.findOne(req.params.id, function(err, todo) {
        res.render('todos/edit', {
            todo,
            todos: req.params.id
        })
    })
}


function update(req, res) {
    req.body.done = false;
    Todo.updateOne(req.body, req.params.id);
    res.redirect('/todos');
}