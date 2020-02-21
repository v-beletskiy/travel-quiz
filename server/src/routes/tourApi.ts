export {};
const express = require('express');
const tourController = require('../controllers/tour');
const authService = require('../services/authService');

const tourApiRouter = express.Router();

tourApiRouter.post('/find-tour-by-city', authService.verifyJWT, tourController.getSuitableToursByParams);

module.exports = tourApiRouter;
