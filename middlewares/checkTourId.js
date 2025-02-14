const { tours } = require('../helpers');

const checkTourId = (req, res, next, val) => {
  const currentTour = tours.find((el) => el.id === +val);

  if (!currentTour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  next();
};

module.exports = checkTourId;
