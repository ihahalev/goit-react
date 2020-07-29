import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import routes from '../routes';
import { authSelectors } from '../modules/auth';

const PrivateRoute = ({ component: Component, isLogged, ...routeProps }) => (
  <Route
    {...routeProps}
    render={(props) => {
      return isLogged ? <Component {...props} /> : <Redirect to={routes[1].path} />;
    }}
  />
);

const mapStateToProps = (state) => ({
  isLogged: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);
