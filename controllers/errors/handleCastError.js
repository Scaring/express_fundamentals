const { AppError } = require('../../utils');

const handleCastError = (err) => {
  const message = `Invalid ${err.path}: ${err.value}`;

  return new AppError(message, 400);
};

module.exports = handleCastError;
