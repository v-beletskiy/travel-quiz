export {};
const express = require('express');
const cityController = require('../controllers/city');
const authService = require('../services/authService');

const citiesApiRouter = express.Router();

citiesApiRouter.post('/find-appropriate-cities-for-rest', authService.verifyJWT, cityController.getSuitableCitiesByParams);

citiesApiRouter.get('/city-photos', authService.verifyJWT, cityController.getCityPhotos);

module.exports = citiesApiRouter;
