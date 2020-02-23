import {
  getNumberOfRowsAndColunmsOfArray,
  isNeighborCell,
  isExistingIndex,
  isExistingCell,
  getNeighborCells,
} from './index';

describe('getNumberOfRowsAndColunmsOfArray', () => {
  it('should return the number of rows and columns of an array', () => {
    const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const result = getNumberOfRowsAndColunmsOfArray(array);

    expect(result).toEqual({ cols: 3, rows: 3 });
  });
});

describe('isNeighborCell', () => {
  it('should return true if a cell is in the neighborhood', () => {
    const result = isNeighborCell(-1, 1);

    expect(result).toBe(true);
  });

  it('should return false if a cell is the current one', () => {
    const result = isNeighborCell(1, 1);

    expect(result).toBe(false);
  });
});

describe('isExistingIndex', () => {
  it('should return true if index exists', () => {
    const result = isExistingIndex(0, 2);

    expect(result).toBe(true);
  });

  it("should return false if index doesn't exist", () => {
    const result = isExistingIndex(2, 1);

    expect(result).toBe(false);
  });
});

describe('isExistingCell', () => {
  it('should return true if cell exists', () => {
    const validObj = {
      r: 0, rows: 1, c: 2, cols: 3,
    };
    const result = isExistingCell(validObj);

    expect(result).toBe(true);
  });

  it("should return false if cell doesn't exist", () => {
    const invalidObj = {
      r: 0, rows: 1, c: 3, cols: 2,
    };
    const result = isExistingCell(invalidObj);

    expect(result).toBe(false);
  });
});

describe('getNeighborCells', () => {
  const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

  const expectedList = [
    {
      expectedValuesCount: 3, position: 'top left', coordinates: { row: 0, col: 0 }, expectedResult: [2, 4, 5],
    },
    {
      expectedValuesCount: 5, position: 'top middle', coordinates: { row: 0, col: 1 }, expectedResult: [1, 3, 4, 5, 6],
    },
    {
      expectedValuesCount: 3, position: 'top right', coordinates: { row: 0, col: 2 }, expectedResult: [2, 5, 6],
    },
    {
      expectedValuesCount: 5, position: 'middle left', coordinates: { row: 1, col: 0 }, expectedResult: [1, 2, 5, 7, 8],
    },
    {
      expectedValuesCount: 8, position: 'middle middle', coordinates: { row: 1, col: 1 }, expectedResult: [1, 2, 3, 4, 6, 7, 8, 9],
    },
    {
      expectedValuesCount: 5, position: 'middle right', coordinates: { row: 1, col: 2 }, expectedResult: [2, 3, 5, 8, 9],
    },
    {
      expectedValuesCount: 3, position: 'bottom left', coordinates: { row: 2, col: 0 }, expectedResult: [4, 5, 8],
    },
    {
      expectedValuesCount: 5, position: 'bottom middle', coordinates: { row: 2, col: 1 }, expectedResult: [4, 5, 6, 7, 9],
    },
    {
      expectedValuesCount: 3, position: 'bottom right', coordinates: { row: 2, col: 2 }, expectedResult: [5, 6, 8],
    },
  ];

  expectedList.map(({
    expectedValuesCount, position, coordinates, expectedResult,
  }) => it(`
      should return a list of neighbor cells with ${expectedValuesCount} values if
      selected value is in the ${position} of the 2D matrix`,
  () => {
    const result = getNeighborCells(array, coordinates);

    expect(result).toHaveLength(expectedValuesCount);
    expect(result).toEqual(expectedResult);
  }));
});
