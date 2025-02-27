const { Tour } = require('../../models');
const { catchAsync, AppError } = require('../../utils');

const getTourById = catchAsync(async (req, res, next) => {
  const tour = await Tour.findById(req.params.id);

  if (!tour) {
    return next(new AppError('No tour found with that id!', 404));
  }

  res.status(200).json({
    status: 'success',
    data: { tour },
  });
});

module.exports = getTourById;
