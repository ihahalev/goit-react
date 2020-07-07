import React from 'react';
import Phonebook from './Phonebook';
import { Provider } from 'react-redux';
import store from '../modules/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Phonebook />
      </Provider>
    </>
  );
}

export default App;
