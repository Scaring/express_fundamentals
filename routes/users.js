const express = require('express');

const {
  getAllUsers,
  getUserById,
  postUser,
  patchUser,
  deleteUser,
} = require('../controllers/users');

const router = express.Router();

router.route('/').get(getAllUsers).post(postUser);
router.route('/:id').get(getUserById).patch(patchUser).delete(deleteUser);

module.exports = router;
