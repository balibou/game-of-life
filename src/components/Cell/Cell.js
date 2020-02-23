import React from 'react';
import PropTypes from 'prop-types';
import './Cell.css';

function Cell({ value }) {
  return (
    <button type="button" className="cell">
      {value}
    </button>
  );
}

Cell.propTypes = {
  value: PropTypes.number,
};

Cell.defaultProps = {
  value: 0,
};

export default Cell;
