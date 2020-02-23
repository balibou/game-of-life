import * as types from './types';

const getData = (data) => ({
  type: types.GET_DATA,
  payload: data,
});

export { getData };
