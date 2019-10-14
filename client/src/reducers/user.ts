import { ActionType } from '../actions/user/actionTypes';

const userInitialState = {
  role: '',
};

export default (state = userInitialState, action: any) => {
  switch (action.type) {
    case ActionType.LOGIN:
      let role = 'admin';
      return { ...state, role: '' };
    default:
      return state;
  }
};
