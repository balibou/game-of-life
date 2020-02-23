import * as types from './types';

const setGrid = (grid) => ({
  type: types.SET_GRID,
  payload: grid,
});

export { setGrid };
