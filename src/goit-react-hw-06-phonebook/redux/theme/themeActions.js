import themeActionTypes from './themeActionTypes';

const themeChange = (theme) => ({
  type: themeActionTypes.CHANGE,
  payload: {
    theme,
  },
});

export default { themeChange };
