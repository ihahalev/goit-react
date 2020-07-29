import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const fetchContacts = () => {
  return axios.get(`/contacts`).then(({ data }) => {
    return data;
  });
};

const postContact = ({ name, number }) => {
  return axios.post(`/contacts`, { name, number }).then(({ data }) => {
    return data;
  });
};

const deleteContact = ({ id }) => {
  return axios.delete(`/contacts/${id}`).then(() => {
    return id;
  });
};

const registerUser = (credentials) => {
  return axios.post('/users/signup', credentials).then((response) => {
    token.set(response.data.token);
    return response.data;
  });
};

const loginUser = (credentials) => {
  return axios.post('/users/login', credentials).then((response) => {
    token.set(response.data.token);
    return response.data;
  });
};

const logoutUser = () => {
  return axios.post('/users/logout').then(() => {
    token.unset();
  });
};

const currentUser = () => {
  return axios.get('/users/current').then((response) => response.data);
};

export default {
  fetchContacts,
  postContact,
  deleteContact,
  registerUser,
  loginUser,
  logoutUser,
  currentUser,
};
