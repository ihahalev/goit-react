import React, { Component } from 'react';
import movieAPI from '../../services/movieAPI';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    movieAPI
      .fetchMovieReviews(this.props.match.params.movieId)
      .then((response) => this.setState({ reviews: [...response] }));
  }

  render() {
    const { reviews } = this.state;
    return reviews.length ? (
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>We don't have any reviews on this movie</p>
    );
  }
}

export default Reviews;
