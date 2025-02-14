const express = require('express');

const {
  getAllUsers,
  getUserById,
  postUser,
  patchUser,
  deleteUser,
} = require('../controllers/users');

const { checkUserId } = require('../middlewares');

const router = express.Router();

router.param('id', checkUserId);

router.route("/").get(getAllUsers).post(postUser);
router.route('/:id').get(getUserById).patch(patchUser).delete(deleteUser);

module.exports = router;
