import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';

import createRootReducer from '../reducers';

export const history = createBrowserHistory();

const routerMiddlewareRedux = routerMiddleware(history);

export const store = createStore(createRootReducer(history),
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history), thunk, routerMiddlewareRedux)
  )
);
