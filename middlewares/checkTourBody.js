const checkTourBody = (req, res, next) => {
  if (!req.body.name) {
    throw new Error('Missed prop "name"!');
  }
  if (!req.body.duration) {
    throw new Error('Missed prop "duration"!');
  }
  if (!req.body.difficulty) {
    throw new Error('Missed prop "difficulty"!');
  }

  next();
};

module.exports = checkTourBody;
