import React, { useEffect, useState, Suspense, lazy } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import Loader from 'react-loader-spinner';

import movieAPI from '../../services/movieAPI';
import routes from '../../routes';

// import Cast from '../Cast';
// import Reviews from '../Reviews';

const MovieDetailsPage = ({ match, location, history }) => {
  const [movie, setMovie] = useState();
  const [error, setError] = useState(null);
  const { movieId } = match.params;

  useEffect(() => {
    movieAPI.fetchMovieDetails(movieId).then(setMovie).catch(setError);
  }, [movieId]);

  const handleBackFrom = () => {
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push(routes[0].path);
  };

  const { title = '', release_date = '', vote_average = 0, overview = '', genres = [], poster_path = '' } = movie || {};

  return movie && !error ? (
    <div>
      <button className="back-to" onClick={handleBackFrom}>
        &#60; Last query
      </button>
      <div className="movie-details">
        <img src={`${movieAPI.IMG_SERVER}${poster_path}`} alt="" />
        <div>
          <h2>{`${title} (${Number.parseInt(release_date)})`}</h2>
          <p>User Score {vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>
            {genres.map(({ name }) => (
              <span key={name}>{name}</span>
            ))}
          </p>
        </div>
      </div>
      <div className="additional-list">
        <h4>Additional information</h4>
        <ul>
          <li>
            <NavLink
              to={{ pathname: `${match.url}/cast`, state: { from: location?.state?.from } }}
              className="NavLink"
              activeClassName="NavLink-active"
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{ pathname: `${match.url}/reviews`, state: { from: location?.state?.from } }}
              className="NavLink"
              activeClassName="NavLink-active"
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader type="ThreeDots" color="#00BFFF" height={80} width={80} className="Loader" />}>
        <Switch>
          <Route path={`${match.path}/cast`} component={lazy(() => import('../Cast' /* webpackChunkName: "Cast" */))} />
          <Route
            path={`${match.path}/reviews`}
            component={lazy(() => import('../Reviews' /* webpackChunkName: "Reviews" */))}
          />
        </Switch>
      </Suspense>
    </div>
  ) : (
    <div>Something is bad: {error}</div>
  );
};

export default MovieDetailsPage;
