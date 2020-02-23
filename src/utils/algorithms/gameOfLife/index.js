import { getFinalGrid, getNextStep } from './utils';

const runGameOfLife = (grid) => getFinalGrid(getNextStep(grid));

export default runGameOfLife;
