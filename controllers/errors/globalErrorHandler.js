const sendDevError = require('./sendDevError');
const sendProdError = require('./sendProdError');
const handleCastError = require('./handleCastError');
const handleDuplicateFieldsError = require('./handleDuplicateFieldsError');
const handleValidationError = require('./handleValidationError');

const globalErrorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'fail';

  console.log(process.env.NODE_ENV);

  if (process.env.NODE_ENV === 'development') {
    sendDevError(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    //let error = Object.assign({}, err);
    let error = { ...err, name: err.name };

    console.log(error.name);

    if (error.name === 'CastError') error = handleCastError(error);
    if (error.code === 11000) error = handleDuplicateFieldsError(error);
    if (error.name === 'ValidationError') error = handleValidationError(error);

    sendProdError(error, res);
  }
};

module.exports = globalErrorHandler;
