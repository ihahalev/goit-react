import React, { useEffect, useState } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import movieAPI from '../../services/movieAPI';
import routs from '../../routes';

import Cast from '../Cast';
import Reviews from '../Reviews';

const MovieDetailsPage = ({ match, location, history }) => {
  const [movie, setUser] = useState();
  const { movieId } = match.params;

  useEffect(() => {
    movieAPI.fetchMovieDetails(movieId).then(setUser);
  }, [movieId]);

  const handleBackFrom = () => {
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push(routs.HOME);
  };

  const { title = '', release_date = '', vote_average = 0, overview = '', genres = [], poster_path = '' } = movie || {};

  return movie ? (
    <div>
      <button className="back-to" onClick={handleBackFrom}>
        &#60; Last query
      </button>
      <div className="movie-details">
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
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
            <NavLink to={`${match.url}/cast`} className="NavLink" activeClassName="NavLink-active">
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to={`${match.url}/reviews`} className="NavLink" activeClassName="NavLink-active">
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path={`${match.path}/cast`} component={Cast} />
        <Route path={`${match.path}/reviews`} component={Reviews} />
      </Switch>
    </div>
  ) : null;
};

export default MovieDetailsPage;
