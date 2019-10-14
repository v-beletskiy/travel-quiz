import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import userReducer from './user';

const createRootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  user: userReducer,
})

export default createRootReducer;
