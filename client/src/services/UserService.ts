import axios from 'axios';
import { authStrategyTypes } from '../../../server/src/data/authRoles';

export default class UserService {
    static signUpLocal = async (email: String, password: String) => {
        try {
            const userData = {
                email: email,
                password: password,
            }
            const user = await axios.post(`${process.env.LOCAL_URL}/api/signup`, { type: authStrategyTypes.local, user: userData });
            return user.data ? user.data : null;
        } catch (err) {
            console.log(err);
        }
    }

    static signInLocal = async (email: String, password: String) => {
        try {
            const userData = {
                email: email,
                password: password,
            }
            const user = await axios.post(`${process.env.LOCAL_URL}/api/signin`, { type: authStrategyTypes.local, user: userData });
            return user.data ? user.data : null;
        } catch (err) {
            console.log(err);
        }
    }

    static signUpInViaGoogle = async (data: any, actionType: String) => {
        try {
            const googleUser = await axios.post(`${process.env.LOCAL_URL}/api/${actionType}`, { type: authStrategyTypes.google, token: data.getAuthResponse().id_token });
            return googleUser.data ? googleUser.data : null;
        } catch (err) {
            console.log(err);
            return `google ${actionType} failed`;
        }
    }

    static signUpInViaFacebook = async (data: any, actionType: String) => {
        try {
            const facebookUser = await axios.post(`${process.env.LOCAL_URL}/api/${actionType}`, { type: authStrategyTypes.facebook, token: data.accessToken });
            return facebookUser.data ? facebookUser.data : null;
        } catch (err) {
            console.log(err);
            return `facebook ${actionType} failed`;
        }
    }
}
