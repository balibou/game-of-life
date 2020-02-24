import React from 'react';
import PropTypes from 'prop-types';
import Cell from '../Cell';
import './Grid.css';

class Grid extends React.Component {
  componentDidMount() {
    const { setNexStep, grid } = this.props;
    this.interval = setInterval(() => setNexStep(grid), 1000);
  }

  componentDidUpdate(prevProps) {
    const { isPlaying, setNexStep, grid } = this.props;

    if (prevProps.isPlaying && !isPlaying) clearInterval(this.interval);
    if (!prevProps.isPlaying && isPlaying) {
      setNexStep(grid);
      this.interval = setInterval(() => setNexStep(grid), 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  renderCell(rowIndex, columnIndex) {
    const { grid } = this.props;

    return (
      <Cell key={columnIndex} value={grid[rowIndex][columnIndex]} />
    );
  }

  renderRow(rowIndex) {
    const { grid } = this.props;

    return (
      <tr key={rowIndex}>
        {grid[rowIndex].map((column, columnIndex) => this.renderCell(rowIndex, columnIndex))}
      </tr>
    );
  }

  render() {
    const {
      grid, pauseGrid, playGrid, goToNextStep, counter,
    } = this.props;

    return (
      <>
        <h2>Game of Life</h2>
        <div className="controls">
          <button type="button" onClick={() => pauseGrid()}>Pause</button>
          <button type="button" onClick={() => playGrid()}>Play</button>
          <button type="button" onClick={() => goToNextStep()}>Go to next Step</button>
        </div>
        <div className="counter">
          Generation:
          <span className="counter-number">{counter}</span>
        </div>
        <table>
          <tbody>
            {grid.map((row, rowIndex) => this.renderRow(rowIndex))}
          </tbody>
        </table>
      </>
    );
  }
}

Grid.propTypes = {
  grid: PropTypes.arrayOf(PropTypes.array),
  setNexStep: PropTypes.func,
  isPlaying: PropTypes.bool,
  pauseGrid: PropTypes.func,
  playGrid: PropTypes.func,
  goToNextStep: PropTypes.func,
  counter: PropTypes.number,
};

Grid.defaultProps = {
  grid: [],
  setNexStep: () => {},
  isPlaying: true,
  pauseGrid: () => {},
  playGrid: () => {},
  goToNextStep: () => { },
  counter: 0,
};

export default Grid;
