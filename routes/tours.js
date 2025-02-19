const express = require('express');

const {
  getAllTours,
  getTourById,
  createTour,
  patchTour,
  deleteTour,
  aliasTopTours,
  getTourStats,
  getMonthlyPlan,
} = require('../controllers/tours');

const router = express.Router();

router.route('/top-5-cheep').get(aliasTopTours, getAllTours);
router.route('/tour-stats').get(getTourStats);
router.route('/monthly-plan/:year').get(getMonthlyPlan);

router.route('/').get(getAllTours).post(createTour);
router.route('/:id').get(getTourById).patch(patchTour).delete(deleteTour);

module.exports = router;
