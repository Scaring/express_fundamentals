const { Tour } = require('../../models');
const { catchAsync } = require('../../utils');

const deleteTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findByIdAndDelete(req.params.id);

  if (!tour) {
    return next(new AppError('No tour found with that id!', 404));
  }

  res.status(204).json(null);
});

module.exports = deleteTour;
