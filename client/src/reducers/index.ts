import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import userReducer from './user';
import appReducer from './app';

const createRootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  user: userReducer,
  app: appReducer,
})

export default createRootReducer;
