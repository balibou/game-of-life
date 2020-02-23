import { combineReducers } from 'redux';
import * as types from './types';

const dataReducer = (
  state = {
    data: '',
  },
  action,
) => {
  switch (action.type) {
    case types.GET_DATA:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  data: dataReducer,
});

export default reducer;
