import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './ducks';
import grid from './ducks/grid/middleware';

const enhancers = [];
const middleware = [thunk, grid];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension({ trace: true, traceLimit: 25 }));
  }
}

const createRootReducer = () => combineReducers({ ...reducers });

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export default createStore(createRootReducer(), composedEnhancers);
