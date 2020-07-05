import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import { connect } from 'react-redux';

import contacsActions from '../../redux/contacts/contactsActions';

const ContactList = ({ contacts, onDelete }) => (
  <ul className="contact-list">
    {contacts.map(({ id, name, number }) => (
      <ContactItem key={id} name={name} number={number} onDelete={() => onDelete(id)} />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
};

const mapStateToProps = (state) => {
  const { items, filter } = state.contacts;
  const loweredFilter = filter.toLowerCase();
  const filteredContacts = items.filter(({ name }) => {
    if (name.toLowerCase().includes(loweredFilter)) {
      return name;
    }
  });
  return {
    contacts: filteredContacts,
  };
};

const mapDispatchToProps = { onDelete: contacsActions.deleteContact };

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
