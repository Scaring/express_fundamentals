const { Tour } = require('../../models');

const getTourStats = async (req, res, next) => {
  try {
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
      //EXCLUDE EASY DIFFICALTY FROM STATS RESULT
      //   {
      //     $match: {
      //       _id: { $ne: 'EASY' },
      //     },
      //   },
    ]);

    //SEND QUERY
    res.status(200).json({
      status: 'success',
      data: { stats },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getTourStats;
