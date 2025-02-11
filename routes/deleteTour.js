const fs = require('fs');
const { tours } = require('../helpers');

const deleteTour = (req, res) => {
  const curentTour = tours.find((el) => {
    return el.id === +req.params.id;
  });
  const curentTourIdx = tours.indexOf(curentTour);

  if (!curentTour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  tours.splice(curentTourIdx, 1);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(204).json();
    }
  );
};

module.exports = deleteTour;
