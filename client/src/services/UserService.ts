import axios from 'axios';
import { authStrategyTypes } from '../../../server/src/data/authRoles';

export default class UserService {
    static isAuthenticated(authData: String[]) {
        const [ accessToken ] = authData;
        if (accessToken) {
            const { exp } = this.parseAccessTokenPayload(accessToken.split('.')[1]);
            return Date.now() < exp;
        } else {
            return false;
        }
    }

    static parseAccessTokenPayload(payload: string) {
        const accessTokenPayload = atob(payload);
        return JSON.parse(accessTokenPayload); 
    }

    static signUpLocal = async (email: String, password: String, firstName: String, lastName: String) => {
        try {
            const userData = {
                email,
                password,
                firstName,
                lastName,
            }
            const user = await axios.post(`${process.env.SERVER_ORIGIN}/api/signup`, { type: authStrategyTypes.local, user: userData });
            return user.data ? user.data : null;
        } catch (err) {
            console.error(err);
        }
    }

    static signInLocal = async (email: String, password: String) => {
        try {
            const userData = {
                email,
                password,
            }
            const user = await axios.post(`${process.env.SERVER_ORIGIN}/api/signin`, { type: authStrategyTypes.local, user: userData });
            return user.data ? user.data : null;
        } catch (err) {
            console.error(err);
        }
    }

    static signUpInViaGoogle = async (data: any, actionType: String) => {
        try {
            const googleUser = await axios.post(`${process.env.SERVER_ORIGIN}/api/${actionType}`, { type: authStrategyTypes.google, token: data.getAuthResponse().id_token });
            return googleUser.data ? googleUser.data : null;
        } catch (err) {
            console.error(err);
            return `google ${actionType} failed`;
        }
    }

    static signUpInViaFacebook = async (data: any, actionType: String) => {
        try {
            const facebookUser = await axios.post(`${process.env.SERVER_ORIGIN}/api/${actionType}`, { type: authStrategyTypes.facebook, token: data.accessToken });
            return facebookUser.data ? facebookUser.data : null;
        } catch (err) {
            console.error(err);
            return `facebook ${actionType} failed`;
        }
    }
}
