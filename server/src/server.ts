const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();
require('dotenv').config();
const port = process.env.PORT;
const initializeDB = require("./db/DBconnection");

const userApi = require("./db/routes/userApi");


const app = express();
initializeDB();

app.use(cors());
app.use(bodyParser.urlencoded());

app.use('/api', userApi);

app.listen(port, function () {
  console.log(`Server is running on port: ${port}`);
});
