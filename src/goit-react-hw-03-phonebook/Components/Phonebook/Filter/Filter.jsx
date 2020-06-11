import React from 'react';

const Filter = ({ filter, onFilter }) => (
  <>
    <input type="text" value={filter} onChange={onFilter} />
  </>
);

export default Filter;
