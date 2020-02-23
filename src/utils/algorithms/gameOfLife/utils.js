import {
  LIVE_TO_DEAD_CELL_STATUS,
  DEAD_CELL_STATUS,
  LIVE_CELL_STATUS,
  DEAD_TO_LIVE_CELL_STATUS,
} from './constants';
import {
  getNeighborCells,
  getNumberOfRowsAndColunmsOfArray,
} from '../../dataStructure/array';

const isOrWasLiveCell = (e) => Math.abs(e) === LIVE_CELL_STATUS;
const isUnderPopulatedNeighbor = (counter) => counter < 2;
const isOverPopulatedNeighbor = (counter) => counter > 3;
const isWellPopulatedNeighbor = (counter) => counter === 3;


const calculateliveNeighbors = (board, row, col) => getNeighborCells(board, { row, col })
  .reduce((liveNeighborsCounter, neighborCell) => {
    if (isOrWasLiveCell(neighborCell)) {
      liveNeighborsCounter += 1; // eslint-disable-line no-param-reassign
      return liveNeighborsCounter;
    }
    return liveNeighborsCounter;
  }, 0);


/*
1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
2. Any live cell with more than three live neighbours dies, as if by overcrowding.
3. Any live cell with two or three live neighbours lives on to the next generation.
4. Any dead cell with exactly three live neighbours becomes a live cell.
*/

const isLiveCell = ({ nextStepArray, row, col }) => nextStepArray[row][col] === LIVE_CELL_STATUS;

const checkFirstRule = (
  liveNeighbors, { nextStepArray, row, col },
) => isLiveCell({ nextStepArray, row, col }) && isUnderPopulatedNeighbor(liveNeighbors);

const checkSecondRule = (
  liveNeighbors, { nextStepArray, row, col },
) => isLiveCell({ nextStepArray, row, col }) && isOverPopulatedNeighbor(liveNeighbors);

const checkFourthRule = (
  liveNeighbors, { nextStepArray, row, col },
) => !isLiveCell({ nextStepArray, row, col }) && isWellPopulatedNeighbor(liveNeighbors);

const checkRules = (liveNeighbors, { nextStepArray, row, col }) => {
  if (
    checkFirstRule(liveNeighbors, { nextStepArray, row, col })
    || checkSecondRule(liveNeighbors, { nextStepArray, row, col })
  ) {
    return LIVE_TO_DEAD_CELL_STATUS;
  }
  if (checkFourthRule(liveNeighbors, { nextStepArray, row, col })) {
    return DEAD_TO_LIVE_CELL_STATUS;
  }
  return nextStepArray[row][col];
};

export const getNextStep = (array) => {
  const nextStepArray = [...array];
  const { rows, cols } = getNumberOfRowsAndColunmsOfArray(nextStepArray);

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const liveNeighbors = calculateliveNeighbors(nextStepArray, row, col);

      nextStepArray[row][col] = checkRules(liveNeighbors, { nextStepArray, row, col });
    }
  }

  return nextStepArray;
};

export const getFinalGrid = (grid) => {
  const finalGrid = [...grid];
  const { rows, cols } = getNumberOfRowsAndColunmsOfArray(finalGrid);

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      if (finalGrid[row][col] > 0) {
        finalGrid[row][col] = LIVE_CELL_STATUS;
      } else {
        finalGrid[row][col] = DEAD_CELL_STATUS;
      }
    }
  }

  return finalGrid;
};
