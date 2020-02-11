import { ActionType } from '../actions/user/actionTypes';
import IUser from './types/user';

const userInitialState: IUser = {
  email: '',
  firstName: '',
  lastName: '',
  signInStrategy: '',
};

export default (state = userInitialState, action: any) => {
  switch (action.type) {
    case ActionType.SIGNINLOCAL:
    case ActionType.SIGNUPSOCIAL: {
      const { email, firstName, lastName } = action.user.userData;
      return { ...state, email, firstName, lastName };
    }
    case ActionType.SET_SIGN_IN_STRATEGY: {
      const { payload } = action;
      return { ...state, signInStrategy: payload };
    }
    case ActionType.CLEAR_USER_INFO: {
      return { ...userInitialState };
    }
    default: {
      return state;
    }
  }
};
