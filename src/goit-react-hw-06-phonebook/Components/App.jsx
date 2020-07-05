import React from 'react';
import Phonebook from './Phonebook';
import ThemeContext from './context/ThemeContext';
import { Provider } from 'react-redux';
import store from '../redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeContext>
          <Phonebook />
        </ThemeContext>
      </Provider>
    </>
  );
}

export default App;
