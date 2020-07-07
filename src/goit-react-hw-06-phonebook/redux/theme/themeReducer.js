import { combineReducers } from 'redux';
import actionTypes from './themeActionTypes';

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

const themeType = (state = 'light', { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE:
      return payload.theme;
    default:
      return state;
  }
};

const themeConfig = (state = themes.light, { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE:
      return themes[payload.theme];
    default:
      return state;
  }
};

export default combineReducers({ themeType, themeConfig });
