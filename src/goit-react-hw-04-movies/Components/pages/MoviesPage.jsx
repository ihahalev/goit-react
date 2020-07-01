import React, { Component } from 'react';

import MovieList from '../MovieList';
import routes from '../../routes';
import movieAPI from '../../services/movieAPI';
import getQueryParams from '../../services/getQueryParams';

class MoviesPage extends Component {
  state = {
    value: '',
    serchMovies: [],
    error: null,
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);
    if (query) {
      this.fetchMovies(query);
      return;
    }
    this.props.history.replace({
      // pathname: this.props.location.pathname,
      ...this.props.location,
      search: '',
      pathname: `${routes[1].path}`,
    });
  }

  componentDidUpdate(prevProp, prevState) {
    const { query: prevQuery } = getQueryParams(prevProp.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);
    if (!nextQuery) {
      return;
    }
    if (nextQuery !== prevQuery) {
      this.fetchMovies(nextQuery);
      return;
    }
  }

  fetchMovies = (query) => {
    movieAPI
      .fetchMoviesWithQuery(query)
      .then((response) => this.setState({ serchMovies: [...response], value: '' }))
      .catch((error) => this.setState({ error }));
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleChangeQuery = () => {
    this.props.history.push({
      // pathname: this.props.location.pathname,
      ...this.props.location,
      search: `query=${this.state.value}`,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // movieAPI.fetchMoviesWithQuery(this.state.value).then((response) => this.setState({ serchMovies: [...response] }));
    if (this.state.value) {
      this.handleChangeQuery();
    }
  };

  render() {
    const { serchMovies, error } = this.state;
    return (
      <>
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
        {error ? (
          <div>Something is bad: {error}</div>
        ) : (
          <MovieList items={serchMovies} backFrom={this.props.location} />
        )}
      </>
    );
  }
}

export default MoviesPage;
