import { lazy } from 'react';

export default [
  {
    isInMenu: false,
    exact: true,
    path: `/`,
    label: 'homeworks',
    component: lazy(() => import('./Navigation' /* webpackChunkName: "home" */)),
  },
  {
    isInMenu: true,
    exact: false,
    path: `/goit-react-hw-01-components`,
    label: 'goit-react-hw-01-components',
    component: lazy(() => import('./goit-react-hw-01-components/Components/App' /* webpackChunkName: "hw01" */)),
  },
  {
    isInMenu: true,
    exact: false,
    path: `/goit-react-hw-02-feedback`,
    label: 'goit-react-hw-02-feedback',
    component: lazy(() => import('./goit-react-hw-02-feedback/Components/App' /* webpackChunkName: "hw02-feedback" */)),
  },
  {
    isInMenu: true,
    exact: false,
    path: `/goit-react-hw-02-phonebook`,
    label: 'goit-react-hw-02-phonebook',
    component: lazy(() =>
      import('./goit-react-hw-02-phonebook/Components/App' /* webpackChunkName: "hw02-phonebook" */),
    ),
  },
  {
    isInMenu: true,
    exact: false,
    path: `/goit-react-hw-03-phonebook`,
    label: 'goit-react-hw-03-phonebook',
    component: lazy(() =>
      import('./goit-react-hw-03-phonebook/Components/App' /* webpackChunkName: "hw03-phonebook" */),
    ),
  },
  {
    isInMenu: true,
    exact: false,
    path: `/goit-react-hw-03-image-finder`,
    label: 'goit-react-hw-03-image-finder',
    component: lazy(() =>
      import('./goit-react-hw-03-image-finder/Components/App' /* webpackChunkName: "hw03-image-finder" */),
    ),
  },
  {
    isInMenu: true,
    exact: false,
    path: `/goit-react-hw-04-movies`,
    label: 'goit-react-hw-04-movies',
    component: lazy(() => import('./goit-react-hw-04-movies/App' /* webpackChunkName: "hw04-movies" */)),
  },
  {
    isInMenu: true,
    exact: false,
    path: `/goit-react-hw-05-phonebook-ctx`,
    label: 'goit-react-hw-05-phonebook-ctx',
    component: lazy(() =>
      import('./goit-react-hw-05-phonebook-ctx/Components/App' /* webpackChunkName: "hw05-phonebook-ctx" */),
    ),
  },
  {
    isInMenu: true,
    exact: false,
    path: `/goit-react-hw-06-phonebook`,
    label: 'goit-react-hw-06-phonebook',
    component: lazy(() =>
      import('./goit-react-hw-06-phonebook/Components/App' /* webpackChunkName: "hw06-phonebook" */),
    ),
  },
  {
    isInMenu: true,
    exact: false,
    path: `/goit-react-hw-07-phonebook`,
    label: 'goit-react-hw-07-phonebook',
    component: lazy(() =>
      import('./goit-react-hw-07-phonebook/Components/App' /* webpackChunkName: "hw07-phonebook" */),
    ),
  },
];
