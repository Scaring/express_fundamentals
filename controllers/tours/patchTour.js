const { Tour } = require('../../models');
const { catchAsync } = require('../../utils');

const patchTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!tour) {
    return next(new AppError('No tour found with that id!', 404));
  }

  res.status(200).json({
    status: 'success',
    data: { tour },
  });
});

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
