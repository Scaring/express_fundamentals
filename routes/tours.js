const express = require('express');

const {
  getAllTours,
  getTourById,
  createTour,
  patchTour,
  deleteTour,
} = require('../controllers/tours');

const router = express.Router();

router.route('/').get(getAllTours).post(createTour);
router.route('/:id').get(getTourById).patch(patchTour).delete(deleteTour);

module.exports = router;
