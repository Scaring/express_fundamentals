const { tours } = require('../../helpers');

const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    requestTime: req.requestTime,
    data: { tours },
  });
};

module.exports = getAllTours;
