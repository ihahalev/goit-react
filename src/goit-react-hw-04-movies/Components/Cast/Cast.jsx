import React, { Component } from 'react';
import { toast } from 'react-toastify';

import movieAPI from '../../services/movieAPI';

class Cast extends Component {
  state = {
    cast: [],
    error: null,
  };

  componentDidMount() {
    movieAPI
      .fetchMovieCredits(this.props.match.params.movieId)
      .then((response) => this.setState({ cast: [...response] }))
      .catch((error) => {
        this.setState({ error });
        toast.warn(`Something is bad:${error}`, { position: 'top-center' });
      });
  }
  render() {
    const { cast, error } = this.state;
    return (
      <ul className="cast-list">
        {error ? (
          <li>Something is bad: {error}</li>
        ) : (
          cast.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt="" />
              <p>{name}</p>
              <span>Character:</span>
              <p>{character}</p>
            </li>
          ))
        )}
      </ul>
    );
  }
}
export default Cast;
