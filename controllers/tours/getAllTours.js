const { Tour } = require('../../models');

const { APIFeatures, catchAsync } = require('../../utils');

const getAllTours = catchAsync(async (req, res, next) => {
  //EXECUTE QUERY
  const features = new APIFeatures(Tour.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .pagination();

  const tours = await features.query;

  //SEND QUERY
  res.status(200).json({
    status: 'success',
    results: tours.length,
    page: req.page,
    data: { tours },
  });
});

module.exports = getAllTours;

//BUILD QUERY
//1) Base filtering
// const queryObj = { ...req.query };
// const excludedFields = ['page', 'sort', 'limit', 'fields'];
// excludedFields.forEach((el) => delete queryObj[el]);

//2) Advanced filtering (gte - >=, gt - >, lte - <=, lt - <)
// let queryString = JSON.stringify(queryObj);
// queryString = queryString.replace(
//   /\b(gte|gt|lte|lt)\b/g,
//   (match) => `$${match}`,
// );

// let query = Tour.find(JSON.parse(queryString));

//3) Sorting
// if (req.query.sort) {
//   //req.query.sort - 'price,ratingAvarage'
//   const sortBy = req.query.sort.split(',').join(' ');
//   query = query.sort(sortBy);
//   //sort('price ratingAvarage')
// } else {
//   query = query.sort('price');
// }

//4) Field limiting
// if (req.query.fields) {
//   const fields = req.query.fields.split(',').join(' ');
//   query = query.select(fields);
//   //select("name duration price");
// } else {
//   query = query.select('-__v');
// }

//5) Pagination
// const page = req.query.page * 1 || 1;
// const limit = req.query.limit * 1 || 100;
// const skip = (page - 1) * limit;

// query = query.skip(skip).limit(limit);

// if (req.query.page) {
//   const numOfTours = await Tour.countDocuments();
//   if (skip >= numOfTours) throw new Error('This page doesnt exist!');
// }
