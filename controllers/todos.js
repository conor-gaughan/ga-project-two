module.exports = {
    index,
}


function index(req, res) {
    res.render('todos/new', {title: 'Forget Me Note'})
}