import phonebookAPI, { token } from '../../services/phonebookAPI';
import authActions from './authActions';

const register = (credentials) => (dispatch) => {
  dispatch(authActions.registerRequest());
  phonebookAPI
    .registerUser(credentials)
    .then((res) => {
      dispatch(authActions.registerSuccess(res));
    })
    .catch((error) => dispatch(authActions.registerError(error)));
};

const logIn = (credentials) => (dispatch) => {
  dispatch(authActions.loginRequest());
  phonebookAPI
    .loginUser(credentials)
    .then((res) => {
      dispatch(authActions.loginSuccess(res));
    })
    .catch((error) => dispatch(authActions.loginError(error)));
};

const logOut = () => (dispatch) => {
  dispatch(authActions.logoutRequest());
  phonebookAPI
    .logoutUser()
    .then(() => {
      dispatch(authActions.logoutSuccess());
    })
    .catch((error) => dispatch(authActions.logoutError(error)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());
  phonebookAPI
    .currentUser()
    .then((res) => dispatch(authActions.getCurrentUserSuccess(res)))
    .catch((error) => authActions.getCurrentUserError(error));
};

export default { register, logIn, logOut, getCurrentUser };
