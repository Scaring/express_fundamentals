const getAllTours = require('./getAllTours');
const getById = require('./getById');
const postTour = require('./postTour');
const patchTour = require("./patchTour");
const deleteTour = require('./deleteTour');

module.exports = {
  getAllTours,
  getById,
  postTour,
  patchTour,
  deleteTour
};
