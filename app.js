const createError = require('http-errors');
const express = require('express');
const passport = require('passport');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const compression = require('compression');

const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const workersRouter = require('./routes/workers');

const app = express();
app.set('view engine', 'html');

mongoose.connect('mongodb://admin:asdqwe123@ds211774.mlab.com:11774/workers-app')
  .then(() => {console.log('MongoDB connected')})
  .catch(err => console.log(err));

app.use(passport.initialize());
require('./middleware/passport')(passport);
app.use('/uploads', express.static('uploads'));

app.use(compression());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.options('*', cors());

app.use('/api/', authRouter);
app.use('/api/users/', usersRouter);
app.use('/api/workers/', workersRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/dist/workers-app'));

  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(
        __dirname, 'client', 'dist', 'workers-app', 'index.html'
      )
    )
  })
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
