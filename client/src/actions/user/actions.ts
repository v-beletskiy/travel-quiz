import { ActionType } from './actionTypes';
import UserService from '../../services/UserService';
import { authStrategyTypes } from '../../../../server/src/data/authRoles';

export const signUpLocal = (email: String, password: String) => {
    return async () => {
        try {
            UserService.signUpLocal(email, password);
        } catch (err) {
            console.log(err);
        }
    }
}

export const signInLocal = (email: String, password: String, setAuthData: Function) => {
    return async (dispatch: any) => {
        try {
            const user = await UserService.signInLocal(email, password);
            if (user) {
                dispatch({
                    type: ActionType.SIGNINLOCAL,
                    user,
                });
                const authData = [user.token];
                setAuthData(authData);
                dispatch({
                    type: ActionType.SET_SIGN_IN_STRATEGY,
                    payload: authStrategyTypes.local,
                })
            }
        } catch (err) {
            console.log(err);
        }
    }
}

export const signUpInSocial = (type: String, data: any, actionType: String, setAuthData: Function) => {
    return async (dispatch: any) => {
        try {
            let user;
            switch (type) {
                case authStrategyTypes.google: {
                    user = await UserService.signUpInViaGoogle(data, actionType);
                    const authData = [user.token];
                    setAuthData(authData);
                    break;
                }
                case authStrategyTypes.facebook: {
                    user = await UserService.signUpInViaFacebook(data, actionType);
                    const authData = [user.token];
                    setAuthData(authData);
                    break;
                }
            }
            if (user) {
                dispatch({
                    type: ActionType.SIGNUPSOCIAL,
                    user,
                });
                dispatch({
                    type: ActionType.SET_SIGN_IN_STRATEGY,
                    payload: type,
                })
            }
        } catch (err) {
            console.log(err);
        }
    };
}

export const logOut = () => {
    return (dispatch: any) => {
        dispatch({
            type: ActionType.CLEAR_USER_INFO,
        })
    }
}
