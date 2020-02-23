import React from 'react';
import PropTypes from 'prop-types';
import Cell from '../Cell';
import './Grid.css';

const nextStep = [[1, 0, 1]];

class Grid extends React.Component {
  componentDidMount() {
    const { setNexStep } = this.props;
    this.interval = setInterval(() => setNexStep(nextStep), 5000);
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
      <div key={i} className="grid-row">
        {grid[i].map((e, j) => this.renderCell(i, j))}
      </div>
    );
  }

  render() {
    const { grid } = this.props;

    return (
      <>
        {grid.map((e, i) => this.renderRow(i))}
      </>
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
