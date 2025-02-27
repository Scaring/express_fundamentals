const { AppError } = require('../../utils');

const handleValidationError = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `Invalid input data. ${errors.join('. ')}`;
  //   console.log(message);
  return new AppError(message, 400);
};

module.exports = handleValidationError;
