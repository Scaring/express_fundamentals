const fs = require('fs');
const { tours } = require('../helpers');

const postTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;

  const newTour = {
    ...req.body,
    id: newId,
  };

  tours.push(newTour);
  
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};

module.exports = postTour;
