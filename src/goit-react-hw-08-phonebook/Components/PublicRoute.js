import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import routes from '../routes';
import { authSelectors } from '../modules/auth';

const PublicRoute = ({ component: Component, isLogged, restricted, ...routeProps }) => (
  <Route
    {...routeProps}
    render={(props) => {
      return isLogged && restricted ? <Redirect to={routes[2].path} /> : <Component {...props} />;
    }}
  />
);

const mapStateToProps = (state) => ({
  isLogged: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);
