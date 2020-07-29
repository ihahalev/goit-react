import { lazy } from 'react';
import baseRoutes from '../routes';

export default [
  {
    path: `${baseRoutes[10].path}/register`,
    label: 'Register',
    isInMenu: true,
    exactRoute: false,
    exactLink: false,
    component: lazy(() => import('./Components/pages/RegisterPage' /* webpackChunkName: "register-page" */)),
    restricted: true,
    priv: false,
  },
  {
    path: `${baseRoutes[10].path}/login`,
    label: 'Login',
    isInMenu: true,
    exactRoute: false,
    exactLink: false,
    component: lazy(() => import('./Components/pages/LoginPage' /* webpackChunkName: "login-page" */)),
    restricted: true,
    priv: false,
  },
  {
    path: `${baseRoutes[10].path}/contacts`,
    label: 'Contacts',
    isInMenu: true,
    exactRoute: false,
    exactLink: false,
    component: lazy(() => import('./Components/pages/ContactsPage' /* webpackChunkName: "contacts-page" */)),
    restricted: true,
    priv: true,
  },
];
