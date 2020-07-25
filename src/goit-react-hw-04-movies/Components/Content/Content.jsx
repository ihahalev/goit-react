import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Loader from 'react-loader-spinner';

// import HomePage from '../HomePage';
// import MoviesPage from '../MoviesPage';
// import MovieDetailsPage from '../MovieDetailsPage';

import routes from '../../routes';

const Content = () => (
  <Suspense fallback={<Loader type="ThreeDots" color="#00BFFF" height={80} width={80} className="Loader" />}>
    <Switch>
      {routes.map(({ path, exactRoute, component }) => (
        <Route key={path} path={path} exact={exactRoute} component={component} />
      ))}
      <Redirect to={routes[0].path} />
      {/* <Route path={routes.HOME} exact component={HomePage} />
    <Route path={routes.MOVIES} exact component={MoviesPage} />
    <Route path={routes.MOVIE_DETAILS} component={MovieDetailsPage} /> */}
      {/* <Route
        path={routes.HOME}
        exact
        component={lazy(() => import('../HomePage' / webpackChunkName: "home-page" /))}
      />
      <Route
        path={routes.MOVIES}
        exact
        component={lazy(() => import('../MoviesPage' / webpackChunkName: "movie-page" /))}
      />
      <Route
        path={routes.MOVIE_DETAILS}
        component={lazy(() => import('../MovieDetailsPage' / webpackChunkName: "movie-details" /))}
      /> */}
      {/* <Redirect to={routes[0].path} /> */}
    </Switch>
  </Suspense>
);

export default Content;
