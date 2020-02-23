import * as types from './types';
import runGameOfLife from '../../utils';

const setGrid = (grid) => ({
  type: types.SET_GRID,
  payload: runGameOfLife(grid),
});

const pauseGrid = () => ({
  type: types.PAUSE_GRID,
});

const playGrid = () => ({
  type: types.PLAY_GRID,
});

const goToNextStep = () => ({
  type: types.GO_TO_NEXT_STEP,
});

const addCounter = () => ({
  type: types.ADD_GRID_COUNTER,
});

export {
  setGrid, pauseGrid, playGrid, goToNextStep, addCounter,
};
