const { Tour } = require('../../models');
// const fs = require('fs');
// const path = require('path');
// const { tours } = require('../../helpers');

// const toursPath = path.join(__dirname, '../../dev-data/data/tours-simple.json');

const createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

module.exports = createTour;
