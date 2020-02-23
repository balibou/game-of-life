import React from 'react';
import PropTypes from 'prop-types';
import './Cell.css';


function Cell({ value }) {
  return (
    <td
      className={`${value === 1 ? 'isLive' : ''}`}
    />
  );
}

Cell.propTypes = {
  value: PropTypes.number,
};

Cell.defaultProps = {
  value: 0,
};

export default Cell;
