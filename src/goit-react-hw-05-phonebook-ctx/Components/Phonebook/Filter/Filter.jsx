import React from 'react';
import withTheme from '../hoc/withTheme';

const Filter = ({ filter, onFilter, theme }) => (
  <>
    <label className="phonebook-form" style={{ background: theme.themeConfig.formBg }}>
      <p style={{ color: theme.themeConfig.fontColor }}>Find contacts by name</p>
      <input type="text" value={filter} onChange={onFilter} />
    </label>
  </>
);

export default withTheme(Filter);
