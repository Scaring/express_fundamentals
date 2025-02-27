const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const { AppError } = require('./utils');
const { globalErrorHandler } = require('./controllers/errors');
const { toursRouter, usersRouter } = require('./routes');

dotenv.config({ path: './config.env' });

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use(express.static(`${__dirname}/public`)); // http://localhost:3000/overview.html lets view html templates

app.use('/api/v1/tours', toursRouter);
app.use('/api/v1/users', usersRouter);

app.all('*', (req, res, next) => {
  const err = new AppError(
    `Can't find ${req.originalUrl} on this server!`,
    404,
  );
  next(err);
});

app.use(globalErrorHandler);

module.exports = app;
