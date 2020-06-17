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
      <li>
        <Link to={routes.hw03pb}>goit-react-hw-03-phonebook</Link>
      </li>
      <li>
        <Link to={routes.hw03img}>goit-react-hw-03-image-finder</Link>
      </li>
      <li>
        <Link to={routes.hw04mov}>goit-react-hw-04-movies</Link>
      </li>
    </ul>
  );
}

export default Home;
