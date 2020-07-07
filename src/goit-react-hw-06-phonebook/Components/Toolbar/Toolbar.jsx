import React from 'react';
import { connect } from 'react-redux';

import themeActions from '../../modules/theme/themeActions';

const Toolbar = ({ theme, onThemeChange }) => (
  <div className="toolbar">
    <h1>Phonebook</h1>
    <div className="switch">
      <input
        className="switch__input"
        type="checkbox"
        checked={theme.themeType !== 'light'}
        onChange={(e) => onThemeChange(e.target.checked ? 'dark' : 'light')}
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
// (e) => theme.onThemeChange(e.target.checked ? 'dark' : 'light')
const mapStateToProps = (state) => ({
  theme: state.theme,
});

const mapDispatchToProps = { onThemeChange: themeActions.themeChange };

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
