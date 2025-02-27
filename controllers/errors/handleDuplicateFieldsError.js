const { AppError } = require('../../utils');

const handleDuplicateFieldsError = (err) => {
  const duplicatedField = err.keyValue.name;
  const message = `Duplicate field value: ${duplicatedField}. Please use another value`;
  
  return new AppError(message, 400);
};

module.exports = handleDuplicateFieldsError;
