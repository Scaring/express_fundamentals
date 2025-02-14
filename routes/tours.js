const express = require('express');

const {
  getAllTours,
  getTourById,
  postTour,
  patchTour,
  deleteTour,
} = require('../controllers/tours');

const { checkTourId, checkTourBody } = require('../middlewares');

const router = express.Router();

router.param('id', checkTourId);

router.route('/').get(getAllTours).post(checkTourBody, postTour);
router.route('/:id').get(getTourById).patch(patchTour).delete(deleteTour);

module.exports = router;
