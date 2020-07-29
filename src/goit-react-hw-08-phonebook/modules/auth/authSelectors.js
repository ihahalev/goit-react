const isAuthenticated = (state) => {
  return state.auth.token;
};

const getUserEmail = (state) => state.auth.user.email;

export default { isAuthenticated, getUserEmail };
