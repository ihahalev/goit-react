import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = '676b050b9e1ae3ff4b7bb472f439b690';
const IMG_SERVER = 'https://image.tmdb.org/t/p/w500';

const fetchMoviesPopularDay = (page = 1) => {
  return axios.get(`/trending/movie/day?page=${page}&api_key=${KEY}`).then((responce) => {
    return responce.data.results;
  });
};

const fetchMoviesWithQuery = (query) => {
  return axios.get(`/search/movie?query=${query}&api_key=${KEY}`).then((responce) => {
    return responce.data.results;
  });
};

const fetchMovieDetails = (id) => {
  return axios.get(`/movie/${id}?api_key=${KEY}`).then((responce) => {
    return responce.data;
  });
};

const fetchMovieCredits = (id) => {
  return axios.get(`/movie/${id}/credits?api_key=${KEY}`).then((responce) => {
    return responce.data.cast;
  });
};

const fetchMovieReviews = (id) => {
  return axios.get(`/movie/${id}/reviews?api_key=${KEY}`).then((responce) => {
    return responce.data.results;
  });
};

export default {
  fetchMoviesPopularDay,
  fetchMoviesWithQuery,
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieReviews,
  IMG_SERVER,
};
