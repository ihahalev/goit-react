import { combineReducers } from 'redux';
import actionTypes from './contactsActionTypes';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const items = (state = initContacts, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      const { name, number } = payload.contact;
      if (!name || !number) {
        toast.warn('Fill required fields', { position: 'top-center' });
        return state;
      }
      if (state.find((contact) => contact.name === name)) {
        toast.error(`${name} is already in contacts`, { position: 'top-center' });
        return state;
      }
      return [...state, payload.contact];
    case actionTypes.DELETE:
      return state.filter((contact) => contact.id !== payload.id);
    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.FILTER:
      return payload.filter;
    default:
      return state;
  }
};

export default combineReducers({ items, filter });
