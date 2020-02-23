import React from 'react';
import PropTypes from 'prop-types';
import Cell from '../Cell';
import './Grid.css';

class Grid extends React.Component {
  componentDidMount() {
    const { setNexStep, grid } = this.props;
    this.interval = setInterval(() => setNexStep(grid), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  renderCell(i, j) {
    const { grid } = this.props;

    return (
      <Cell key={j} value={grid[i][j]} />
    );
  }

  renderRow(i) {
    const { grid } = this.props;

    return (
      <tr key={i}>
        {grid[i].map((e, j) => this.renderCell(i, j))}
      </tr>
    );
  }

  render() {
    const { grid } = this.props;

    return (
      <table>
        {grid.map((e, i) => this.renderRow(i))}
      </table>
    );
  }
}

Grid.propTypes = {
  grid: PropTypes.arrayOf(PropTypes.array),
  setNexStep: PropTypes.func,
};

Grid.defaultProps = {
  grid: [],
  setNexStep: () => {},
};

export default Grid;
