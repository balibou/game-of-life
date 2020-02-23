import * as types from './types';

const getData = data => {
  return {
    type: types.GET_DATA,
    payload: data
  };
};

export { getData };
