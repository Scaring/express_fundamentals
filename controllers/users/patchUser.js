// const fs = require('fs');
// const path = require('path');
// const { users } = require('../../helpers');

// const usersPath = path.join(__dirname, '../../dev-data/data/users.json');

const patchUser = (req, res) => {
  // const curentUser = users.find((el) => el._id === req.params.id);
  // const curentUserIdx = users.indexOf(curentUser);
  // const newUser = {
  //   ...curentUser,
  //   ...req.body,
  // };
  // users.splice(curentUserIdx, 1);
  // users.push(newUser);
  // fs.writeFile(usersPath, JSON.stringify(users), () => {
  //   res.status(200).json({
  //     status: 'success',
  //     data: {
  //       user: newUser,
  //     },
  //   });
  // });
};

module.exports = patchUser;
