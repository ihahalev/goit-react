import React, { Component } from 'react';
import MovieList from '../MovieList';
import movieAPI from '../../services/movieAPI';

class HomePage extends Component {
  state = {
    popularMovies: [],
  };
  componentDidMount() {
    movieAPI.fetchMoviesPopularDay().then((response) => this.setState({ popularMovies: [...response] }));
  }
  render() {
    const { popularMovies } = this.state;
    return (
      <>
        <h1>Trending today</h1>
        <MovieList items={popularMovies} backFrom={this.props.location} />
      </>
    );
  }
}

export default HomePage;
