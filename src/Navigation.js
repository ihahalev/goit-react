import React from 'react';
import { Link } from 'react-router-dom';
import routes from './routes';

function Navigation() {
  return (
    <ul>
      {routes.map(
        ({ path, label, isInMenu }) =>
          isInMenu && (
            <li key={path}>
              <Link to={path}>{label}</Link>
            </li>
          ),
      )}
    </ul>
  );
}

export default Navigation;
