import React from 'react';

const Total = ({ value }) => <h3>Total: {value}</h3>;

Total.defaultProps = {
  value: 0,
};

export default Total;
