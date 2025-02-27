const { Tour } = require('../../models');
const { catchAsync } = require('../../utils');

const getTourStats = catchAsync(async (req, res, next) => {
  const stats = await Tour.aggregate([
    { $match: { ratingAvarage: { $gte: 4.5 } } },
    {
      $group: {
        _id: { $toUpper: '$difficulty' },
        numTours: { $sum: 1 },
        numRatings: { $sum: '$ratingQuantity' },
        avgRating: { $avg: '$ratingAvarage' },
        avgPrice: { $avg: '$price' },
        maxPrice: { $max: '$price' },
        minPrice: { $min: '$price' },
      },
    },
    {
      $sort: {
        avgPrice: 1,
      },
    },
  ]);

  //SEND QUERY
  res.status(200).json({
    status: 'success',
    data: { stats },
  });
});

module.exports = getTourStats;

//EXCLUDE EASY DIFFICALTY FROM STATS RESULT
//   {
//     $match: {
//       _id: { $ne: 'EASY' },
//     },
//   },
