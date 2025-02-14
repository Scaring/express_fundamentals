const fs = require('fs');
const path = require('path');
const { tours } = require('../../helpers');

const toursPath = path.join(__dirname, '../../dev-data/data/tours-simple.json');

const deleteTour = (req, res) => {
  const currentTour = tours.find((el) => el.id === +req.params.id);

  const currentTourIdx = tours.indexOf(currentTour);

  tours.splice(currentTourIdx, 1);

  fs.writeFile(toursPath, JSON.stringify(tours), () => {
    res.status(204).json();
  });
};

module.exports = deleteTour;
