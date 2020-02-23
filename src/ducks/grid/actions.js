import * as types from './types';
import runGameOfLife from '../../utils';

const setGrid = (grid) => ({
  type: types.SET_GRID,
  payload: runGameOfLife(grid),
});

export { setGrid };
