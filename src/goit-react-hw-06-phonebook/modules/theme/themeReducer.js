import { combineReducers } from 'redux';
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

const themeType = createReducer('light', {
  [themeActions.themeChange]: (state, action) => action.payload,
});

const themeConfig = createReducer(themes.light, {
  [themeActions.themeChange]: (state, action) => themes[action.payload],
});

export default combineReducers({ themeType, themeConfig });
