const fs = require('fs');
const path = require('path');

const unicId = require('generate-unique-id');

const { users } = require('../../helpers');

const usersPath = path.join(__dirname, '../../dev-data/data/users.json');

const postUser = (req, res) => {
  const newId = unicId();

  const newUser = {
    ...req.body,
    _id: newId,
  };

  users.push(newUser);

  fs.writeFile(usersPath, JSON.stringify(users), (err) => {
    res.status(201).json({
      status: 'success',
      data: {
        user: newUser,
      },
    });
  });
};

module.exports = postUser;
