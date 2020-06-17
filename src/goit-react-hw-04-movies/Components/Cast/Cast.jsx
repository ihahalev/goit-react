import React, { Component } from 'react';
import movieAPI from '../../services/movieAPI';

class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    movieAPI
      .fetchMovieCredits(this.props.match.params.movieId)
      .then((response) => this.setState({ cast: [...response] }));
  }
  render() {
    const { cast } = this.state;
    return (
      <ul className="cast-list">
        {cast.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt="" />
            <p>{name}</p>
            <span>Character:</span>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    );
  }
}
export default Cast;
