import React from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

import { themeSelectors, themeActions } from '../../modules/theme';

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 64,
    height: 32,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(32px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#d3d3d4',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 30,
    height: 30,
  },
  track: {
    borderRadius: 32 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: '#2196f3',
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

const Toolbar = ({ theme, onThemeChange }) => (
  <div className="toolbar">
    <h1>Phonebook</h1>
    <IOSSwitch
      checked={theme.themeType !== 'light'}
      onChange={(e) => onThemeChange(e.target.checked ? 'dark' : 'light')}
      name="theme"
    />
  </div>
);

const mapStateToProps = (state) => ({
  theme: themeSelectors.getTheme(state),
});

const mapDispatchToProps = { onThemeChange: themeActions.themeChange };

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
