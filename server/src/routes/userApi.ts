export {};
const express = require('express');

const userController = require('../controllers/user');

const userApiRouter = express.Router();

userApiRouter.post('/signup', userController.createUser);

userApiRouter.post('/signin', userController.signIn);

module.exports = userApiRouter;
