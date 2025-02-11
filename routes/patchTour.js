const fs = require('fs');
const { tours } = require('../helpers');

const patchTour = (req, res) => {
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

  const newTour = {
    ...curentTour,
    ...req.body,
  };

  tours.splice(curentTourIdx, 1);

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(200).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};

module.exports = patchTour;
