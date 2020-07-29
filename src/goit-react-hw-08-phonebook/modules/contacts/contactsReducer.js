import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactActions from './contactsActions';
import { authActions } from '../auth';

const initContacts = [];

const addContact = (state, action) => {
  const { name, number } = action.payload;
  if (!name || !number) {
    return state;
  }
  return [...state, action.payload];
};

const deleteContact = (state, action) => state.filter((contact) => contact.id !== action.payload);

const items = createReducer(initContacts, {
  [contactActions.fetchContactsSuccess]: (state, action) => action.payload,
  [contactActions.addContactSuccess]: addContact,
  [contactActions.deleteContactSuccess]: deleteContact,
  [authActions.logoutSuccess]: () => initContacts,
});

const filter = createReducer('', {
  [contactActions.filterContact]: (state, action) => action.payload,
});

const loading = createReducer(false, {
  [contactActions.fetchContactsRequest]: () => true,
  [contactActions.fetchContactsSuccess]: () => false,
  [contactActions.fetchContactsError]: () => false,
  [contactActions.addContactRequest]: () => true,
  [contactActions.addContactSuccess]: () => false,
  [contactActions.addContactError]: () => false,
  [contactActions.deleteContactRequest]: () => true,
  [contactActions.deleteContactSuccess]: () => false,
  [contactActions.deleteContactError]: () => false,
});

export default combineReducers({ items, filter, loading });
