import React from 'react';
import Phonebook from './Phonebook';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../modules/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Phonebook />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
