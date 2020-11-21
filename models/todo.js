const mongoose = require('mongoose');

module.exports = {
    getOne,
    deleteOne,
    updateOne
}

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    checklist: {
        type: String,
    },
    date: {
        type: Date,
    }
}, { timestamps: true })

function getOne(id) {
    return todos[id];
}

function deleteOne(id) {
    todos.splice(id, 1);
}

function updateOne(todo, id) {
    todos.splice(id, 1, todo);
}

module.exports = mongoose.model('Todo', todoSchema)