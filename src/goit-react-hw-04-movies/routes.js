import { lazy } from 'react';
import baseRoutes from '../routes';
// import HomePage from './Components/HomePage';
// import MoviesPage from './Components/MoviesPage';
// import MovieDetailsPage from './Components/MovieDetailsPage';

export default [
  {
    path: `${baseRoutes[6].path}/`,
    label: 'Home',
    isInMenu: true,
    exactRoute: true,
    exactLink: true,
    // componentRout: HomePage,
    component: lazy(() => import('./Components/pages/HomePage' /* webpackChunkName: "home-page" */)),
  },
  {
    path: `${baseRoutes[6].path}/movies`,
    label: 'Movies',
    isInMenu: true,
    exactRoute: true,
    exactLink: false,
    // componentRout: MoviesPage,
    component: lazy(() => import('./Components/pages/MoviesPage' /* webpackChunkName: "movie-page" */)),
  },
  {
    path: `${baseRoutes[6].path}/movies/:movieId`,
    label: 'Movie Details',
    isInMenu: false,
    exactRoute: false,
    exactLink: false,
    // componentRout: MovieDetailsPage,
    component: lazy(() => import('./Components/pages/MovieDetailsPage' /* webpackChunkName: "movie-details" */)),
  },
];

// {
//   HOME: `${baseRouts.hw04mov}/`,
//   MOVIES: `${baseRouts.hw04mov}/movies`,
//   MOVIE_DETAILS: `${baseRouts.hw04mov}/movies/:movieId`,
// };
