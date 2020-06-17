import axios from 'axios';

const fetchMoviesPopularDay = (page = 1) => {
  return axios
    .get(`https://api.themoviedb.org/3/trending/movie/day?page=${page}&api_key=676b050b9e1ae3ff4b7bb472f439b690`)
    .then((responce) => {
      return responce.data.results;
    });
};

const fetchMoviesWithQuery = (query) => {
  return axios
    .get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=676b050b9e1ae3ff4b7bb472f439b690`)
    .then((responce) => {
      return responce.data.results;
    });
};

const fetchMovieDetails = (id) => {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${id}?api_key=676b050b9e1ae3ff4b7bb472f439b690`)
    .then((responce) => {
      return responce.data;
    });
};

const fetchMovieCredits = (id) => {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=676b050b9e1ae3ff4b7bb472f439b690`)
    .then((responce) => {
      return responce.data.cast;
    });
};

const fetchMovieReviews = (id) => {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=676b050b9e1ae3ff4b7bb472f439b690`)
    .then((responce) => {
      return responce.data.results;
    });
};

export default { fetchMoviesPopularDay, fetchMoviesWithQuery, fetchMovieDetails, fetchMovieCredits, fetchMovieReviews };
