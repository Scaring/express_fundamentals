const { tours } = require('../../helpers');

const getTourById = (req, res) => {
  const currentTour = tours.find((el) => el.id === +req.params.id);

  res.status(200).json({
    status: 'success',
    data: {
      tour: currentTour,
    },
  });
};

module.exports = getTourById;
