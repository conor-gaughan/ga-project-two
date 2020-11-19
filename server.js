const express = require('express');
const port = 3000;
const morgan = require('morgan');
const method_override = require('method-override');
const session = require('express-session');
const passport = require('passport');


require('dotenv').config();

const app = express();

const indexRouter = require('./routes/index');
const todosRouter = require('./routes/todos');

require('./config/database');
require('./config/passport');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// TODO Add session middleware here

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}))


app.use(passport.initialize());
app.use(passport.session());


app.use('/', indexRouter);
app.use('/todos', todosRouter);

app.listen(port, function() {
    console.log(`Express listening on ${port}`)
})