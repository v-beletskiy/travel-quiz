export {};
const express = require('express');
const cityController = require('../controllers/city');

const citiesApiRouter = express.Router();

citiesApiRouter.post('/find-appropriate-cities-for-rest', cityController.getSuitableCitiesByParams);

citiesApiRouter.get('/city-photos', cityController.getCityPhotos);

module.exports = citiesApiRouter;
