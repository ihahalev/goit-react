import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';

function Home() {
  return (
    <ul>
      <li>
        <Link to={routes.hw01}>goit-react-hw-01-components</Link>
      </li>
      <li>
        <Link to={routes.hw02fb}>goit-react-hw-02-feedback</Link>
      </li>
      <li>
        <Link to={routes.hw02pb}>goit-react-hw-02-phonebook</Link>
      </li>
    </ul>
  );
}

export default Home;
