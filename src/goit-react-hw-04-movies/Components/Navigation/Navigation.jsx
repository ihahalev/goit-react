import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../../routes';

const Navigation = () => (
  <div>
    <ul className="start-list">
      {routes.map(
        ({ isInMenu, path, label, exactLink }) =>
          isInMenu && (
            <li key={label}>
              <NavLink to={path} exact={exactLink} className="NavLink" activeClassName="NavLink-active">
                {label}
              </NavLink>
            </li>
          ),
      )}
      {/* <li>
        <NavLink to={routes.HOME} exact className="NavLink" activeClassName="NavLink-active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={routes.MOVIES} className="NavLink" activeClassName="NavLink-active">
          Movies
        </NavLink>
      </li> */}
    </ul>
  </div>
);

export default Navigation;
