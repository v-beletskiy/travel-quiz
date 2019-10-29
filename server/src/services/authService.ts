const crypto = require('crypto');
import { Request, Response, NextFunction } from 'express';
import axios from 'axios';
const { OAuth2Client } = require('google-auth-library');

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    res.status(401).send('Access denied');
}

const keyToSignToken = process.env.TOKEN_KEY;

const generateJWT = (tokenData: any) => {
    //expirationTime is provided in hours
    const { id, expirationTime } = tokenData;
    const header = {
        "alg": "SHA256",
        "typ": "JWT"
    };
    const payload = {
        "userID": id,
        "iat": Date.now(),
        "exp": Date.now() + expirationTime * 60 * 60 * 1000
    }
    const base64EncodedHeader = Buffer.from(JSON.stringify(header)).toString('base64');
    const base64EncodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64');
    const dataToSign = base64EncodedHeader + '.' + base64EncodedPayload;
    const signature = crypto.createHmac(header.alg, keyToSignToken).update(dataToSign).digest('base64');
    const base64EncodedSignature = Buffer.from(signature).toString('base64');

    const token = base64EncodedHeader + '.' + base64EncodedPayload + '.' + base64EncodedSignature;
    return token;
}

const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (token && token.length) {
        const tokenWithoutBearer = token.split(' ')[1];
        const [tokenHeader, tokenPayload, tokenSignature] = tokenWithoutBearer.split('.');
        const base64decodedHeader = Buffer.from(tokenHeader, 'base64').toString('utf8');
        const dataToSign = tokenHeader + '.' + tokenPayload;
        const generatedSignature = crypto.createHmac(JSON.parse(base64decodedHeader).alg, keyToSignToken).update(dataToSign).digest('base64');
        const base64DecodedTokenSignature = Buffer.from(tokenSignature, 'base64').toString('utf8');
        if (base64DecodedTokenSignature === generatedSignature) {
            const decodedPayload = JSON.parse(Buffer.from(tokenPayload, 'base64').toString('utf-8'));
            if (decodedPayload.exp > Date.now()) {
                next();
            } else {
                res.status(401).json('Access denied. Token expired.');
            }
        } else {
            res.status(401).json('Access denied. Token is invalid.');
        }
    } else {
        res.status(401).json('Access denied. No token provided.');
    }
}

//GOOGLE AUTH
const decodeGoogleAuthToken = async (token: String) => {
    return new Promise(async (resolve, reject) => {
        const client = new OAuth2Client(process.env.GOOGLE_AUTH_CLIENT_ID);
        try {
            const ticket = await client.verifyIdToken({
                idToken: token,
                audience: process.env.GOOGLE_AUTH_CLIENT_ID,
            });
            const payload = ticket.getPayload();
            const { email, given_name, family_name } = payload;
            if (!payload.email) {
                reject('Email must be granted to the app.');
            } else {
                const userData = {
                    email: email,
                    firstName: given_name,
                    lastName: family_name,
                }
                resolve(userData);
            }
        } catch (err) {
            reject('Token is invalid.');
        }
    })
}

//FACEBOOK AUTH
const decodeFacebookAuthToken = async (token: String) => {
    const user = await axios.get(`https://graph.facebook.com/${process.env.FACEBOOK_API_VERSION}/me?fields=email,name&access_token=${token}`);
    return user.data;
}

module.exports = {
    generateJWT,
    verifyJWT,
    decodeGoogleAuthToken,
    decodeFacebookAuthToken,
}
