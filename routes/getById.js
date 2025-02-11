const { tours } = require('../helpers');

const getById = (req, res) => {
  const tour = tours.find((el) => {
    return el.id === +req.params.id;
  });

  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};

module.exports = getById;
