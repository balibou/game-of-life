import {
  PREVIOUS_INDEX,
  CURRENT_INDEX,
  NEXT_INDEX,
  MAX_NEIGHBORS_INDEX_COUNT,
} from './constants';

const neighbors = [PREVIOUS_INDEX, CURRENT_INDEX, NEXT_INDEX];

export const getNumberOfRowsAndColunmsOfArray = (array) => ({
  rows: array.length,
  cols: array[0].length,
});

export const isNeighborCell = (i, j) => !(neighbors[i] === 0 && neighbors[j] === 0);

export const isExistingIndex = (index, max) => index >= 0 && index < max;

export const isExistingCell = ({
  r, rows, c, cols,
}) => isExistingIndex(r, rows) && isExistingIndex(c, cols);

export const getNeighborCells = (board, { row, col }) => {
  const { rows, cols } = getNumberOfRowsAndColunmsOfArray(board);
  let array = [];

  for (let i = 0; i < MAX_NEIGHBORS_INDEX_COUNT; i += 1) {
    for (let j = 0; j < MAX_NEIGHBORS_INDEX_COUNT; j += 1) {
      if (isNeighborCell(i, j)) {
        const r = row + neighbors[i];
        const c = col + neighbors[j];

        if (
          isExistingCell({
            r, rows, c, cols,
          })
        ) {
          array = [...array, board[r][c]];
        }
      }
    }
  }

  return array;
};
