import React from 'react';

const Section = ({ title, children }) => (
  <>
    <h2>{title}</h2>
    {children}
  </>
);

export default Section;
