import React from 'react';
import Phonebook from './Phonebook';
import ThemeContext from './Phonebook/context/ThemeContext';

function App() {
  return (
    <>
      <ThemeContext>
        <Phonebook />
      </ThemeContext>
    </>
  );
}

export default App;
