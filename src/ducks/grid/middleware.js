import * as types from './types';
import { pauseGrid, setGrid, addCounter } from './actions';

const gridMiddleware = (store) => (next) => (action) => {
  if (action.type === types.GO_TO_NEXT_STEP) {
    const nextAction = next(action);
    const { grid } = store.getState().grid;
    store.dispatch(pauseGrid());
    store.dispatch(setGrid(grid));

    return nextAction;
  }

  if (action.type === types.SET_GRID) {
    const nextAction = next(action);
    store.dispatch(addCounter());

    return nextAction;
  }

  return next(action);
};

export default gridMiddleware;
