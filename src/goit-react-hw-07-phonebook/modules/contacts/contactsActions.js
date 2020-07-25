import { createAction } from '@reduxjs/toolkit';

export const addContactRequest = createAction('contacts/addRequest');
export const addContactSuccess = createAction('contacts/addSuccess');
export const addContactError = createAction('contacts/addError');

export const fetchContactsRequest = createAction('contacts/fetchRequest');
export const fetchContactsSuccess = createAction('contacts/fetchSuccess');
export const fetchContactsError = createAction('contacts/fetchError');

export const deleteContactRequest = createAction('contacts/deleteRequest');
export const deleteContactSuccess = createAction('contactsdeletedSuccess');
export const deleteContactError = createAction('contacts/deleteError');

// export const deleteContact = createAction('contacts/delete');

export const filterContact = createAction('contacts/filter');

// export default { addContact, deleteContact, filterContact };
