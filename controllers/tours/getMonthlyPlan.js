const { Tour } = require('../../models');
const { catchAsync } = require('../../utils');

const getMonthlyPlan = catchAsync(async (req, res, next) => {
  const { year } = req.params;

  const plan = await Tour.aggregate([
    { $unwind: '$startDates' },
    {
      $match: {
        startDates: {
          $gte: new Date(`${+year}-01-01`),
          $lte: new Date(`${+year}-12-31`),
        },
      },
    },
    {
      $group: {
        _id: {
          $month: '$startDates',
        },
        numTourStarts: { $sum: 1 },
        tours: { $push: '$name' },
      },
    },
    {
      $addFields: { month: '$_id' },
    },
    {
      $project: {
        _id: 0,
      },
    },
    {
      $sort: {
        numTourStarts: -1,
      },
    },
    {
      $limit: 12,
    },
  ]);

  //SEND QUERY
  res.status(200).json({
    status: 'success',
    reaults: plan.length,
    data: { plan },
  });
});

module.exports = getMonthlyPlan;
