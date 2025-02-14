const { users } = require('../helpers');

const checkUserId = (req, res, next, val) => {
  const user = users.find((el) => el._id === val);

  if (!user) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  next();
};

module.exports = checkUserId;
