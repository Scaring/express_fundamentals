const fs = require('fs');
const path = require('path');
const { tours } = require('../../helpers');

const toursPath = path.join(__dirname, '../../dev-data/data/tours-simple.json');

const postTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;

  const newTour = {
    ...req.body,
    id: newId,
  };

  tours.push(newTour);

  fs.writeFile(toursPath, JSON.stringify(tours), () => {
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  });
};

module.exports = postTour;
