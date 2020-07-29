import phonebookAPI from '../../services/phonebookAPI';
import contactActions from './contactsActions';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const addContact = ({ name, number }) => (dispatch, getState) => {
  if (!name || !number) {
    toast.warn('Fill required fields', { position: 'top-center' });
    return;
  }
  const { contacts } = getState();
  if (contacts.items.find((contact) => contact.name === name)) {
    toast.error(`${name} is already in contacts`, { position: 'top-center' });
    return;
  }
  dispatch(contactActions.addContactRequest());
  phonebookAPI
    .postContact({ name, number })
    .then((res) => {
      dispatch(contactActions.addContactSuccess(res));
    })
    .catch((err) => dispatch(contactActions.addContactError(err)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(contactActions.fetchContactsRequest());
  phonebookAPI
    .fetchContacts()
    .then((res) => {
      dispatch(contactActions.fetchContactsSuccess(res));
    })
    .catch((err) => dispatch(contactActions.fetchContactsError(err)));
};

const deleteContact = (id) => (dispatch) => {
  dispatch(contactActions.deleteContactRequest());
  phonebookAPI
    .deleteContact({ id })
    .then((res) => {
      dispatch(contactActions.deleteContactSuccess(res));
    })
    .catch((err) => dispatch(contactActions.deleteContactError(err)));
};

export default {
  addContact,
  fetchContacts,
  deleteContact,
};
