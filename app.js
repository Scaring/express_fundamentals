const express = require('express');
const morgan = require('morgan');

const { getReqTime } = require('./middlewares');

const { toursRouter, usersRouter } = require('./routes');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(getReqTime);

app.use(express.static(`${__dirname}/public`));

app.use('/api/v1/tours', toursRouter);
app.use('/api/v1/users', usersRouter);

app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(400).json(err.message);
});

module.exports = app;
