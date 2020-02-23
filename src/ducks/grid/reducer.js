import { combineReducers } from 'redux';
import * as types from './types';

const input = [
  [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
  [0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0],
  [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0],
  [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
  [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0],
];

const gridReducer = (
  state = input,
  action,
) => {
  switch (action.type) {
    case types.SET_GRID:
      return action.payload;
    default:
      return state;
  }
};

const reducer = combineReducers({
  grid: gridReducer,
});

export default reducer;
