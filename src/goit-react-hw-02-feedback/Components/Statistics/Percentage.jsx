import React from 'react';

const Percentage = ({ value }) => <h3>Positive feedback: {value}%</h3>;

Percentage.defaultProps = {
  value: 0,
};

export default Percentage;
