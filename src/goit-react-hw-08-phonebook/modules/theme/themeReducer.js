import { createReducer } from '@reduxjs/toolkit';
import themeActions from './themeActions';

export const themes = {
  light: {
    conteinerBg: '#fff',
    fontColor: 'black',
    formBg: 'lightgray',
    btnBg: '#2196f3',
  },
  dark: {
    conteinerBg: '#4f4f4f',
    fontColor: 'white',
    formBg: '#5f5f5f',
    btnBg: '#d3d3d4',
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
