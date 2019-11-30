const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();
require('dotenv').config();
const port = process.env.PORT;
const initializeDB = require("./db/DBconnection");

const userApiRoutes = require("./routes/userApi");
const serviceApiRoutes = require("./routes/serviceApi");
const updateCitiesWeather = require("./services/updateCitiesWeather");


const app = express();
initializeDB();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, }));

app.use('/api', userApiRoutes);
app.use('/service-api', serviceApiRoutes );

updateCitiesWeather.start();

app.listen(port, function () {
  console.log(`Server is running on port: ${port}`);
});
