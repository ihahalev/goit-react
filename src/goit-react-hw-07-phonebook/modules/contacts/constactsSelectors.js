import { createSelector } from '@reduxjs/toolkit';

export const getLoading = (state) => {
  return state.contacts.loading;
};

export const getItems = (state) => {
  return state.contacts.items;
};

export const getFilter = (state) => {
  return state.contacts.filter;
};

export const getFilteredContacts = createSelector([getItems, getFilter], (items, filter) => {
  return items.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
});

export const getContactById = (state, id) => {
  const items = getItems(state);
  return items.find((item) => item.id === id);
};
