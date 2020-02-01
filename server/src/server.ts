const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const router = express.Router();
require('dotenv').config();
const port = process.env.PORT;
const initializeDB = require("./db/DBconnection");
import { Request, Response } from 'express';

const userApiRoutes = require("./routes/userApi");
const serviceApiRoutes = require("./routes/serviceApi");
const citiesApiRoutes = require("./routes/citiesApi");
const tourApiRoutes = require("./routes/tourApi");
const updateCitiesWeather = require("./services/updateCitiesWeather");
const updateCurrencyExchangeRate = require("./services/updateCurrencyExchangeRate");
const updateCitiesPhotos = require("./services/updateCitiesPhotos");


const app = express();
initializeDB();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', userApiRoutes, citiesApiRoutes, tourApiRoutes);
app.use('/service-api', serviceApiRoutes);

app.use('/static/images/cities', express.static(path.join(__dirname, '/static/images/cities')));
app.use('/upload', express.static(path.join(__dirname, '../upload')));

updateCitiesWeather.start();
updateCurrencyExchangeRate.start();
updateCitiesPhotos.start();

app.use(express.static(path.join(__dirname, '../../build')));

app.get('/*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(port, function () {
  console.log(`Server is running on port: ${port}`);
});
