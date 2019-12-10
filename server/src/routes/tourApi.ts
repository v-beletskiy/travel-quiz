export {};
const express = require('express');
const tourController = require('../controllers/tour');

const tourApiRouter = express.Router();

tourApiRouter.post('/find-tour-by-city', tourController.getSuitableToursByParams);

module.exports = tourApiRouter;
