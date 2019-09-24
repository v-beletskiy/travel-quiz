export {};
const express = require('express');

const userController = require('../controllers/user');

const userApiRouter = express.Router();

userApiRouter.post('/user', userController.createUser);

module.exports = userApiRouter;
