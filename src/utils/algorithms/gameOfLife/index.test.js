import runGameOfLife from './index';

describe('runGameOfLife', () => {
  it('should return expected array for the next step', () => {
    const rawArray = [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 1],
    ];
    const expectedArray = [
      [1, 1, 1],
      [1, 0, 0],
      [1, 0, 1],
    ];
    const result = runGameOfLife(rawArray);

    expect(result).toEqual(expectedArray);
  });
});
