import React from 'react';
import Homeworks from './Homeworks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles.css';

const App = () => (
  <div className="container">
    <Homeworks />
    <ToastContainer />
  </div>
);

export default App;
