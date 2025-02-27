const sendProdError = (err, res) => {
  // Operational, trusted error: send message to the client!
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });

    // Programming or other unknown error: don't leak error details
  } else {
    //1)Log error
    console.error('ERROR', err);

    //2)Send generic message
    res.status(500).json({ status: 'error', message: 'Something went wrong!' });
  }
};

module.exports = sendProdError;
