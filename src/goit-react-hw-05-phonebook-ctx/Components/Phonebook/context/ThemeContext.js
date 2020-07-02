import React, { createContext, Component } from 'react';

export const themeConfig = {
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

const Context = createContext();

class ThemeContext extends Component {
  static Consumer = Context.Consumer;
  themeChange = (e) => {
    const theme = e.target.checked ? 'dark' : 'light';
    this.setState({ themeType: theme, themeConfig: themeConfig[theme] });
  };
  state = {
    themeType: 'light',
    themeConfig: {
      conteinerBg: '#fff',
      fontColor: 'black',
      formBg: 'lightgray',
      btnBg: '#2196f3',
    },
    onThemeChange: this.themeChange,
  };

  render() {
    return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
  }
}

export default ThemeContext;
