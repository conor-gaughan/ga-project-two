const express = require('express');
const port = process.env.PORT || 3000;
const morgan = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');


require('dotenv').config();

const app = express();

require('./config/database');
require('./config/passport');

const indexRouter = require('./routes/index');
const todosRouter = require('./routes/todos');
const usersRouter = require('./routes/users');


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}))


app.use(passport.initialize());
app.use(passport.session());


app.use('/', indexRouter);
app.use('/todos', todosRouter);
app.use('/', usersRouter);


app.listen(port, function() {
    console.log(`Express listening on ${port}`)
})