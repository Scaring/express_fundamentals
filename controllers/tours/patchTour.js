const fs = require('fs');
const path = require('path');
const { tours } = require('../../helpers');

const toursPath = path.join(__dirname, '../../dev-data/data/tours-simple.json');

const patchTour = (req, res) => {
  const currentTour = tours.find((el) => el.id === +req.params.id);

  const currentTourIdx = tours.indexOf(currentTour);

  const newTour = {
    ...currentTour,
    ...req.body,
  };

  tours.splice(currentTourIdx, 1);

  tours.push(newTour);

  fs.writeFile(toursPath, JSON.stringify(tours), () => {
    res.status(200).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  });
};

module.exports = patchTour;
