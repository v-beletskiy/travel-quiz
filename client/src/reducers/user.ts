import { ActionType } from '../actions/user/actionTypes';

const userInitialState = {
  accessToken: '',
  email: '',
  firstName: '',
  lastName: '',
};

export default (state = userInitialState, action: any) => {
  switch (action.type) {
    case ActionType.SIGNINLOCAL:
    case ActionType.SIGNUPSOCIAL: {
      const { email, firstName, lastName } = action.user.userData;
      const accessToken = action.user.token;
      return { ...state, email, firstName, lastName, accessToken };
    }
    case ActionType.SIGNOUT: {
      return { ...state, ...userInitialState };
    }
    default: {
      return state;
    }
  }
};
