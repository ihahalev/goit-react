import { createReducer } from '@reduxjs/toolkit';
import themeActions from './themeActions';

export const themes = {
  light: {
    conteinerBg: '#fff',
    formBg: 'lightgray',
  },
  dark: {
    conteinerBg: '#4f4f4f',
    formBg: '#5f5f5f',
  },
};

const onThemeChange = (state, { payload }) => {
  return { themeType: payload, themeConfig: themes[payload] };
};

const theme = createReducer(
  { themeType: 'light', themeConfig: themes.light },
  {
    [themeActions.themeChange]: onThemeChange,
  },
);

export default theme;
