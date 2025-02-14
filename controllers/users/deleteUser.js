const fs = require('fs');
const path = require('path');
const { users } = require('../../helpers');

const usersPath = path.join(__dirname, '../../dev-data/data/users.json');

const deleteUser = (req, res) => {
  const curentUser = users.find((el) => {
    return el._id === req.params.id;
  });
  const curentUserIdx = users.indexOf(curentUser);

  users.splice(curentUserIdx, 1);

  fs.writeFile(usersPath, JSON.stringify(users), (err) => {
    res.status(204).json();
  });
};

module.exports = deleteUser;
