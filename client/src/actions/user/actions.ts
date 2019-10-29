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

export const signInLocal = (email: String, password: String) => {
    return async (dispatch: any) => {
        try {
            const user = await UserService.signInLocal(email, password);
            if (user) {
                dispatch({
                    type: ActionType.SIGNINLOCAL,
                    user,
                });
            }
        } catch (err) {
            console.log(err);
        }
    }
}

export const signUpInSocial = (type: String, data: any, actionType: String) => {
    return async (dispatch: any) => {
        try {
            let user;
            switch (type) {
                case authStrategyTypes.google: {
                    user = await UserService.signUpInViaGoogle(data, actionType);
                    break;
                }
                case authStrategyTypes.facebook: {
                    user = await UserService.signUpInViaFacebook(data, actionType);
                }
            }
            if (user) {
                dispatch({
                    type: ActionType.SIGNUPSOCIAL,
                    user,
                });
            }
        } catch (err) {
            console.log(err);
        }
    };
}

export const signOut = () => {
    return {
        type: ActionType.SIGNOUT,
    }
}
