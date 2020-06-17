import React from 'react';
import { NavLink } from 'react-router-dom';

import routs from '../../routes';

const Navigation = () => (
  <div>
    <ul className="start-list">
      <li>
        <NavLink to={routs.HOME} exact className="NavLink" activeClassName="NavLink-active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={routs.MOVIES} className="NavLink" activeClassName="NavLink-active">
          Movies
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Navigation;
