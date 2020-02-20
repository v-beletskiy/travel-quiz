export { };
import { Request, Response } from 'express';
const bcrypt = require('bcrypt');
const User = require('../db/models/user');
const authService = require('../services/authService');
const { authStrategyTypes } = require('../data/authRoles');

const tokenExpirationTime = 0.5; //set in hours

async function createUser(req: Request, res: Response) {
    const type = req.body.type;
    switch (type) {        
        case 'local': {
            const { email, password, firstName, lastName } = req.body.user;
            if (email) {
                try {
                    const user = await User.findOne({ authType: authStrategyTypes.local, email: email });
                    if (user) return res.status(401).json('User already exists.');
                    const hashOfPass = await bcrypt.hash(password, 10);
                    const newUser = new User({
                        authType: 'local',
                        email: email,
                        password: hashOfPass,
                        firstName: firstName,
                        lastName: lastName,
                    });
                    await newUser.save();
                    res.status(200).json('User has been saved successfully.');
                } catch (err) {
                    res.status(500).json({ mes: 'db error', err });
                }
            } else {
                res.status(401).json('Provide email');
            }
            break;
        }
    }
}

async function signIn(req: Request, res: Response) {
    const type = req.body.type;
    switch (type) {
        case 'local': {
            const { email, password } = req.body.user;
            if (email && password) {
                try {
                    const user = await User.findOne({ authType: authStrategyTypes.local, email: email });
                    if (!user) return res.status(401).json('No such a user. Provide valid email or sign up.');
                    const passIsValid = await bcrypt.compare(password, user.password);
                    if (!passIsValid) return res.status(401).json('Password is incorrect.');
                    const token = authService.generateJWT({ id: user._id, expirationTime: tokenExpirationTime });
                    const userToSend = {
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName,
                    };
                    res.status(200).json({ token: token, userData: userToSend });
                } catch (err) {
                    res.status(500).json({ mes: 'db error', err });
                }
            } else {
                res.status(401).json('Provide your email and password');
            }
            break;
        }

        case 'google': {
            try {
                const token = req.body.token;
                const userData = await authService.decodeGoogleAuthToken(token);
                const { email, firstName, lastName } = userData;
                const user = await User.findOne({ authType: authStrategyTypes.google, email: email });
                if (user !== null) {
                    const token = authService.generateJWT({ id: user._id, expirationTime: tokenExpirationTime });
                    const userToSend = {
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName,
                    };
                    res.status(200).json({ token: token, userData: userToSend });
                } else {
                    const newUser = new User({
                        authType: 'google',
                        email: email,
                        firstName: firstName,
                        lastName: lastName,
                    });
                    const savedUser = await newUser.save();
                    const token = authService.generateJWT({ id: savedUser._id, expirationTime: tokenExpirationTime });
                    const userToSend = {
                        email: savedUser.email,
                        firstName: savedUser.firstName,
                        lastName: savedUser.lastName,
                    };
                    res.status(200).json({ token: token, userData: userToSend, mes: 'User has been saved successfully.' });
                }
            } catch (err) {
                res.status(401).json('Google token is invalid.');
            }
            break;
        }

        case 'facebook': {
            try {
                const token = req.body.token;
                const userData = await authService.decodeFacebookAuthToken(token);
                const user = await User.findOne({ authType: authStrategyTypes.facebook, email: userData.email });
                if (user !== null) {
                    const token = authService.generateJWT({ id: user._id, expirationTime: tokenExpirationTime });
                    const userToSend = {
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName,
                    };
                    res.status(200).json({ token: token, userData: userToSend });
                } else {
                    const userNameChunks = userData.name.split(' ');
                    const newUser = new User({
                        authType: 'facebook',
                        email: userData.email,
                        firstName: userNameChunks.length > 1 ? userNameChunks[0] : '',
                        lastName: userNameChunks.length > 1 ? userNameChunks[1] : userNameChunks[0],
                    });
                    const savedUser = await newUser.save();
                    const tokenJWT = authService.generateJWT({ id: savedUser._id, expirationTime: tokenExpirationTime });
                    const userToSend = {
                        email: savedUser.email,
                        firstName: savedUser.firstName,
                        lastName: savedUser.lastName,
                    };
                    res.status(200).json({ token: tokenJWT, userData: userToSend, mes: 'User has been saved successfully.' });
                }
            } catch (err) {
                res.status(401).json('Facebook token is invalid.');
            }
            break;
        }
    }
}

module.exports = {
    createUser,
    signIn,
}
