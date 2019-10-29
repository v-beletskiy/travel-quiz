export {};
const authService = require('../services/authService');
const express = require('express');
import { Request, Response, NextFunction } from 'express';

const userController = require('../controllers/user');

const userApiRouter = express.Router();

userApiRouter.post('/signup', userController.createUser);

userApiRouter.post('/signin', userController.signIn);

userApiRouter.get('/user', authService.verifyJWT, (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send('HELLO!!!');
})

module.exports = userApiRouter;
