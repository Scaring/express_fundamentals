const { Tour } = require('../../models');
const { catchAsync } = require('../../utils');

const createTour = catchAsync(async (req, res, next) => {
  const newTour = await Tour.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      tour: newTour,
    },
  });
});

module.exports = createTour;

// const fs = require('fs');
// const path = require('path');
// const { tours } = require('../../helpers');

// const toursPath = path.join(__dirname, '../../dev-data/data/tours-simple.json');
