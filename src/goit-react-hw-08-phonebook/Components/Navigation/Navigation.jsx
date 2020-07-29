import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { authSelectors } from '../../modules/auth';
import routes from '../../routes';

const Navigation = ({ isLogged }) => (
  <div>
    <ul className="start-list">
      {routes.map(
        ({ isInMenu, path, label, exactLink, priv, restricted }) =>
          isInMenu &&
          (priv
            ? isLogged && (
                <li key={label}>
                  <NavLink to={path} exact={exactLink} className="NavLink" activeClassName="NavLink-active">
                    {label}
                  </NavLink>
                </li>
              )
            : !isLogged &&
              restricted && (
                <li key={label}>
                  <NavLink to={path} exact={exactLink} className="NavLink" activeClassName="NavLink-active">
                    {label}
                  </NavLink>
                </li>
              )),
      )}
    </ul>
  </div>
);

const mapStateToProps = (state) => ({
  isLogged: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
