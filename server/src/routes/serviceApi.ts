export {};
const authService = require('../services/authService');
const express = require('express');
const cityController = require('../controllers/city');

const serviceApiRouter = express.Router();

serviceApiRouter.get('/update-city-coords-db', cityController.getCityCoordsByName);

module.exports = serviceApiRouter;
