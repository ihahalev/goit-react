import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:2000';

// const fetchData = () => {
//   return axios.get(`/`).then((res) => {
//     console.log(res);
//     return res;
//   });
// };

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

export default {
  fetchContacts,
  postContact,
  deleteContact,
  // fetchData,
};
