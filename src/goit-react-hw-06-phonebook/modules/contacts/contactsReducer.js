import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactActions from './contactsActions';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const addContact = (state, action) => {
  const { name, number } = action.payload.contact;
  if (!name || !number) {
    toast.warn('Fill required fields', { position: 'top-center' });
    return state;
  }
  if (state.find((contact) => contact.name === name)) {
    toast.error(`${name} is already in contacts`, { position: 'top-center' });
    return state;
  }
  return [...state, action.payload.contact];
};

const deleteContact = (state, action) => state.filter((contact) => contact.id !== action.payload);

const items = createReducer(initContacts, {
  [contactActions.addContact]: addContact,
  [contactActions.deleteContact]: deleteContact,
});

const filter = createReducer('', {
  [contactActions.filterContact]: (state, action) => action.payload,
});

export default combineReducers({ items, filter });
