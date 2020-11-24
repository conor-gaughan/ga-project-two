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
    checklist: {
        type: String,
    },
    date: {
        type: Date,
    }
}, { timestamps: true })


module.exports = mongoose.model('Todo', todoSchema)