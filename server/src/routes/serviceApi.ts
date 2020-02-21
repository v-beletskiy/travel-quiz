export {};
const authService = require('../services/authService');
const express = require('express');
const cityController = require('../controllers/city');
const currencyController = require('../controllers/currency');

const serviceApiRouter = express.Router();

serviceApiRouter.get('/fill-cities-db', authService.verifyJWT, cityController.fillDB);

serviceApiRouter.get('/update-city-coords-db', authService.verifyJWT, cityController.getCityCoordsByName);

serviceApiRouter.get('/fill-currency-db', authService.verifyJWT, currencyController.fillCurrencyDB);

module.exports = serviceApiRouter;
