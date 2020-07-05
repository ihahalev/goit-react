import contactsActionTypes from './contactsActionTypes';
import { v4 as uuidv4 } from 'uuid';

const addContact = ({ name, number }) => ({
  type: contactsActionTypes.ADD,
  payload: { contact: { id: uuidv4(), name, number } },
});

const deleteContact = (id) => ({
  type: contactsActionTypes.DELETE,
  payload: {
    id,
  },
});

const filterContact = (filter) => ({
  type: contactsActionTypes.FILTER,
  payload: {
    filter,
  },
});

export default { addContact, deleteContact, filterContact };
