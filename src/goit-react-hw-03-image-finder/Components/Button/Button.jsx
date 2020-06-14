import React from 'react';

const Button = ({ onMore }) => (
  <button type="button" className="Button" onClick={onMore}>
    Load More
  </button>
);

export default Button;
