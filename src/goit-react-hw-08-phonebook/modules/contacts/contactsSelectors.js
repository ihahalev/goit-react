import { createSelector } from '@reduxjs/toolkit';

const getLoading = (state) => {
  return state.contacts.loading;
};

const getItems = (state) => {
  return state.contacts.items;
};

const getFilter = (state) => {
  return state.contacts.filter;
};

const getFilteredContacts = createSelector([getItems, getFilter], (items, filter) => {
  return items.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
});

const getContactById = (state, id) => {
  const items = getItems(state);
  return items.find((item) => item.id === id);
};

export default {
  getLoading,
  getItems,
  getFilter,
  getFilteredContacts,
  getContactById,
};
