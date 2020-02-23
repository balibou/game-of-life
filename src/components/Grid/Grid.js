import React from 'react';
import PropTypes from 'prop-types';
import Cell from '../Cell';
import './Grid.css';

class Grid extends React.Component {
  renderCell(i, j) {
    const { data } = this.props;

    return (
      <Cell key={j} value={data[i][j]} />
    );
  }

  renderRow(i) {
    const { data } = this.props;

    return (
      <div key={i} className="grid-row">
        {data[i].map((e, j) => this.renderCell(i, j))}
      </div>
    );
  }

  render() {
    const { data } = this.props;

    return (
      <>
        {data.map((e, i) => this.renderRow(i))}
      </>
    );
  }
}

Grid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array),
};

Grid.defaultProps = {
  data: [],
};

export default Grid;
