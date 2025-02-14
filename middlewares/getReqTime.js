const getReqTime = (req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
};

module.exports = getReqTime;
