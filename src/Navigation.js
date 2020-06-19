import React from 'react';
import { Link } from 'react-router-dom';
import routes from './routes';

function Navigation() {
  return (
    <ul>
      {routes.map(
        ({ path, label, isInMenu }) =>
          isInMenu && (
            <li>
              <Link key={path} to={path}>
                {label}
              </Link>
            </li>
          ),
      )}
    </ul>
  );
}

export default Navigation;
