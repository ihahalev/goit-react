import React, { Suspense } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';

import Loader from 'react-loader-spinner';

import routes from '../../routes';

const Content = () => (
  <Suspense fallback={<Loader type="ThreeDots" color="#00BFFF" height={80} width={80} className="Loader" />}>
    <Switch>
      {routes.map((route) => {
        return route.priv ? <PrivateRoute key={route.path} {...route} /> : <PublicRoute key={route.path} {...route} />;
      })}
      <Redirect to={routes[1].path} />
    </Switch>
  </Suspense>
);

export default Content;
