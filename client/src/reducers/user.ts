import { ActionType } from '../actions/user/actionTypes';
import IUser from './types/user';

const userInitialState: IUser = {
  email: '',
  firstName: '',
  lastName: '',
};

export default (state = userInitialState, action: any) => {
  switch (action.type) {
    case ActionType.SIGNINLOCAL:
    case ActionType.SIGNUPSOCIAL: {
      const { email, firstName, lastName } = action.user.userData;
      return { ...state, email, firstName, lastName };
    }
    default: {
      return state;
    }
  }
};
