const aliasTopTours = (req, res, next) => {
  req.query.limit = 5;
  req.query.sort = '-ratingAvarage,price';
  req.query.fields = 'name,duration,difficulty,price,ratingAvarage';
  next();
};

module.exports = aliasTopTours;
