import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import { connect } from 'react-redux';

const ContactList = ({ contacts }) => (
  <ul className="contact-list">
    {contacts.map(({ id }) => (
      <ContactItem key={id} id={id} />
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

export default connect(mapStateToProps)(ContactList);
