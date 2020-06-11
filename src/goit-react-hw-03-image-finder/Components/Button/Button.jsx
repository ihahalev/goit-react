import React from 'react';

const Button = ({ onMore }) => (
  <button type="button" className="Button" onClick={onMore}>
    Load More
  </button>
  // window.scrollTo({
  //   top: document.documentElement.scrollHeight,
  //   behavior: 'smooth',
  // });
);

export default Button;
