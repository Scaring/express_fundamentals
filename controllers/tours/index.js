const getAllTours = require('./getAllTours');
const getTourById = require('./getTourById');
const createTour = require('./createTour');
const patchTour = require('./patchTour');
const deleteTour = require('./deleteTour');
const aliasTopTours = require('./aliasTopTours');
const getTourStats = require('./getTourStats');
const getMonthlyPlan = require('./getMonthlyPlan');

module.exports = {
  getAllTours,
  getTourById,
  createTour,
  patchTour,
  deleteTour,
  aliasTopTours,
  getTourStats,
  getMonthlyPlan,
};
