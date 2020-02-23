import { combineReducers } from 'redux';
import * as types from './types';

const input = [
  [0, 1, 0, 0, 0, 1],
  [0, 0, 1, 0, 1, 0],
  [1, 1, 1, 1, 0, 0],
  [0, 0, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 0, 0],
];

const dataReducer = (
  state = input,
  action,
) => {
  switch (action.type) {
    case types.GET_DATA:
      return action.payload;
    default:
      return state;
  }
};

const reducer = combineReducers({
  data: dataReducer,
});

export default reducer;
