export {};
const authService = require('../services/authService');
const express = require('express');
import { Request, Response } from 'express';
import CityData from '../db/scriptsToFillDB/cityData';

const userController = require('../controllers/user');

const userApiRouter = express.Router();

userApiRouter.post('/signup', userController.createUser);

userApiRouter.post('/signin', userController.signIn);

userApiRouter.get('/user', authService.verifyJWT, (req: Request, res: Response) => {
    res.status(200).send('HELLO!!!');
})

userApiRouter.get('/city', CityData);

module.exports = userApiRouter;
