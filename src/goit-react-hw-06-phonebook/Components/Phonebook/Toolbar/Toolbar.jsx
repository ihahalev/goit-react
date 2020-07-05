import React from 'react';
import withTheme from '../hoc/withTheme';

const Toolbar = ({ theme }) => (
  <div className="toolbar">
    <h1>Phonebook</h1>
    <div className="switch">
      <input
        className="switch__input"
        type="checkbox"
        checked={theme.themeType !== 'light'}
        onChange={theme.onThemeChange}
        name="theme"
        id="theme-switch-control"
      />
      <label
        aria-hidden="true"
        className="switch__label"
        htmlFor="theme-switch-control"
        style={{ background: theme.themeConfig.btnBg }}
      >
        On
      </label>
      <div aria-hidden="true" className="switch__marker"></div>
    </div>
  </div>
);

export default withTheme(Toolbar);
