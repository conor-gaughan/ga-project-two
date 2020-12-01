const Todo = require('../models/todo')

module.exports = {
    index,
    addPriority,
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


function addPriority(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
        todo.tags.push(req.body)
        todo.save(function(err) {
            console.log(todo)
            res.redirect(`/todos/${todo._id}`)
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
    Todo.findByIdAndDelete(req.params.id, function(err, todo) {
        res.redirect('/todos');
    });
}

function edit(req, res) {
    Todo.findByIdAndUpdate(req.params.id, req.body, function(err, todo) {
        res.render('todos/edit', {
            todo,
            user: req.user
        })
    })
}

function update(req, res) {
    Todo.findByIdAndUpdate(req.params.id, req.body, function(err, todo) {
        res.redirect(`/todos`);
    });
}