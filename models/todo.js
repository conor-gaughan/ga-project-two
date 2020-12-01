const mongoose = require('mongoose');

const prioritySchema = new mongoose.Schema({
    tag: {
        type: String,
        enum: ['Priorty', 'In progress', 'Done']
    }
})


const todoSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
    },
    tags: [prioritySchema],
}, {
    timestamps: true
})


module.exports = mongoose.model('Todo', todoSchema)