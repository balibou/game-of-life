import {
  isOrWasLiveCell,
  isUnderPopulatedNeighbor,
  isOverPopulatedNeighbor,
  isWellPopulatedNeighbor,
  calculateliveNeighbors,
  isLiveCell,
  checkFirstRule,
  checkSecondRule,
  checkFourthRule,
  checkRules,
  getNextStep,
  getFinalGrid,
} from './utils';
import {
  LIVE_TO_DEAD_CELL_STATUS,
  DEAD_TO_LIVE_CELL_STATUS,
} from './constants';

const array = [[0, 1, 0], [1, 0, 1], [1, 1, 0]];

describe('isOrWasLiveCell', () => {
  it('should return true if cell is live', () => {
    const result = isOrWasLiveCell(1);

    expect(result).toBe(true);
  });

  it('should return true if cell was live', () => {
    const result = isOrWasLiveCell(-1);

    expect(result).toBe(true);
  });

  it("should return false if cell isn't or wasn't live", () => {
    const result = isOrWasLiveCell(0);

    expect(result).toBe(false);
  });
});

describe('isUnderPopulatedNeighbor', () => {
  it('should return true if cell is underpopulated', () => {
    const result = isUnderPopulatedNeighbor(1);

    expect(result).toBe(true);
  });

  it('should return false if cell is not underpopulated', () => {
    const result = isUnderPopulatedNeighbor(2);

    expect(result).toBe(false);
  });
});

describe('isOverPopulatedNeighbor', () => {
  it('should return true if cell is overpopulated', () => {
    const result = isOverPopulatedNeighbor(4);

    expect(result).toBe(true);
  });

  it('should return false if cell is not overpopulated', () => {
    const result = isOverPopulatedNeighbor(3);

    expect(result).toBe(false);
  });
});

describe('isWellPopulatedNeighbor', () => {
  it('should return true if cell is well populated', () => {
    const result = isWellPopulatedNeighbor(3);

    expect(result).toBe(true);
  });

  it('should return false if cell is not well populated', () => {
    const result = isWellPopulatedNeighbor(2);

    expect(result).toBe(false);
  });
});

describe('calculateliveNeighbors', () => {
  const expectedList = [
    {
      array, row: 0, col: 0, position: 'top left', expectedCount: 2,
    },
    {
      array, row: 0, col: 1, position: 'top middle', expectedCount: 2,
    },
    {
      array, row: 0, col: 2, position: 'top right', expectedCount: 2,
    },
    {
      array, row: 1, col: 0, position: 'middle left', expectedCount: 3,
    },
    {
      array, row: 1, col: 1, position: 'middle middle', expectedCount: 5,
    },
    {
      array, row: 1, col: 2, position: 'middle right', expectedCount: 2,
    },
    {
      array, row: 2, col: 0, position: 'bottom left', expectedCount: 2,
    },
    {
      array, row: 2, col: 1, position: 'bottom middle', expectedCount: 3,
    },
    {
      array, row: 2, col: 2, position: 'bottom right', expectedCount: 2,
    },
  ];

  expectedList.map(({
    row, col, position, expectedCount,
  }) => it(`
  should return ${expectedCount} if selected value is in the ${position} of the 2D matrix`, () => {
    const result = calculateliveNeighbors(array, row, col);

    expect(result).toBe(expectedCount);
  }));
});

describe('isLiveCell', () => {
  it('should return true if cell is live', () => {
    const validObj = { nextStepArray: array, row: 0, col: 1 };
    const result = isLiveCell(validObj);

    expect(result).toBe(true);
  });

  it('should return false if cell is not live', () => {
    const invalidObj = { nextStepArray: array, row: 0, col: 0 };
    const result = isLiveCell(invalidObj);

    expect(result).toBe(false);
  });
});

describe('checkFirstRule', () => {
  it(`
    should return true because cell is live with fewer than two live neighbours`,
  () => {
    const liveNeighbors = 1;
    const validObj = { nextStepArray: array, row: 0, col: 1 };
    const result = checkFirstRule(liveNeighbors, validObj);

    expect(result).toBe(true);
  });

  it('should return false because cell is not live with fewer than two live neighbours', () => {
    const liveNeighbors = 1;
    const validObj = { nextStepArray: array, row: 0, col: 0 };
    const result = checkFirstRule(liveNeighbors, validObj);

    expect(result).toBe(false);
  });

  it('should return false because cell is live but neighbor cells are not fewer than two', () => {
    const liveNeighbors = 2;
    const validObj = { nextStepArray: array, row: 0, col: 1 };
    const result = checkFirstRule(liveNeighbors, validObj);

    expect(result).toBe(false);
  });
});

describe('checkSecondRule', () => {
  it(`
    should return true because cell is live with bigger than three live neighbours`,
  () => {
    const liveNeighbors = 4;
    const validObj = { nextStepArray: array, row: 0, col: 1 };
    const result = checkSecondRule(liveNeighbors, validObj);

    expect(result).toBe(true);
  });

  it('should return false because cell is not live with bigger than three live neighbours', () => {
    const liveNeighbors = 4;
    const validObj = { nextStepArray: array, row: 0, col: 0 };
    const result = checkSecondRule(liveNeighbors, validObj);

    expect(result).toBe(false);
  });

  it('should return false because cell is live but neighbor cells are not bigger than three', () => {
    const liveNeighbors = 2;
    const validObj = { nextStepArray: array, row: 0, col: 1 };
    const result = checkSecondRule(liveNeighbors, validObj);

    expect(result).toBe(false);
  });
});

describe('checkFourthRule', () => {
  it(`
    should return true because cell is not live with bigger than three live neighbours`,
  () => {
    const liveNeighbors = 3;
    const validObj = { nextStepArray: array, row: 0, col: 0 };
    const result = checkFourthRule(liveNeighbors, validObj);

    expect(result).toBe(true);
  });

  it('should return false because cell is live with bigger than three live neighbours', () => {
    const liveNeighbors = 3;
    const validObj = { nextStepArray: array, row: 0, col: 1 };
    const result = checkFourthRule(liveNeighbors, validObj);

    expect(result).toBe(false);
  });

  it('should return false because cell is not live but neighbor cells are not bigger than three', () => {
    const liveNeighbors = 2;
    const validObj = { nextStepArray: array, row: 0, col: 0 };
    const result = checkFourthRule(liveNeighbors, validObj);

    expect(result).toBe(false);
  });
});

describe('checkRules', () => {
  it(`
    should return LIVE_TO_DEAD_CELL_STATUS if rule 1`,
  () => {
    const liveNeighbors = 1;
    const validObj = { nextStepArray: array, row: 0, col: 1 };
    const result = checkRules(liveNeighbors, validObj);

    expect(result).toBe(LIVE_TO_DEAD_CELL_STATUS);
  });

  it(`
    should return LIVE_TO_DEAD_CELL_STATUS if rule 2`,
  () => {
    const liveNeighbors = 4;
    const validObj = { nextStepArray: array, row: 0, col: 1 };
    const result = checkRules(liveNeighbors, validObj);

    expect(result).toBe(LIVE_TO_DEAD_CELL_STATUS);
  });

  it(`
    should return DEAD_TO_LIVE_CELL_STATUS if rule 4`,
  () => {
    const liveNeighbors = 3;
    const validObj = { nextStepArray: array, row: 0, col: 0 };
    const result = checkRules(liveNeighbors, validObj);

    expect(result).toBe(DEAD_TO_LIVE_CELL_STATUS);
  });

  it(`
    should return the element of the array if rule 3 (no rule 1, 2 or 4)`,
  () => {
    const liveNeighbors = 2;
    const row = 0;
    const col = 1;
    const validObj = { nextStepArray: array, row, col };
    const result = checkRules(liveNeighbors, validObj);

    expect(result).toBe(array[row][col]);
  });
});

describe('getNextStep', () => {
  it('should return expected array for the next step', () => {
    const expectedArray = [
      [0, 1, 0],
      [1, 0, 1],
      [1, 1, 0],
    ];
    const result = getNextStep(array);

    expect(result).toEqual(expectedArray);
  });
});

describe('getFinalGrid', () => {
  it('should return expected array for the next step', () => {
    const rawArray = [
      [-1, 1, 0],
      [-1, 2, 1],
      [2, 1, -1],
    ];
    const expectedArray = [
      [0, 1, 0],
      [0, 1, 1],
      [1, 1, 0],
    ];
    const result = getFinalGrid(rawArray);

    expect(result).toEqual(expectedArray);
  });
});
