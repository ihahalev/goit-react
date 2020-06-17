import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from '../HomePage';
import MoviesPage from '../MoviesPage';
import MovieDetailsPage from '../MovieDetailsPage';

import routs from '../../routes';

const Content = () => (
  <Switch>
    <Route path={routs.HOME} exact component={HomePage} />
    <Route path={routs.MOVIES} exact component={MoviesPage} />
    <Route path={routs.MOVIE_DETAILS} component={MovieDetailsPage} />
    <Redirect to={routs.HOME} />
  </Switch>
);

export default Content;
