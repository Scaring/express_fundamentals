const { Tour } = require('../../models');

const patchTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: { tour },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error.message,
    });
  }
};

module.exports = patchTour;

// const currentTour = tours.find((el) => el.id === +req.params.id);
// const currentTourIdx = tours.indexOf(currentTour);
// const newTour = {
//   ...currentTour,
//   ...req.body,
// };
// tours.splice(currentTourIdx, 1);
// tours.push(newTour);
// fs.writeFile(toursPath, JSON.stringify(tours), () => {
//   res.status(200).json({
//     status: 'success',
//     data: {
//       tour: newTour,
//     },
//   });
// });
