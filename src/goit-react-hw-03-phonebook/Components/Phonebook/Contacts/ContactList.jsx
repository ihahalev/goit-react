import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, onDelete, onStatusChange }) => (
  <ul className="contact-list">
    {contacts.map(({ id, name, number }) => (
      <ContactItem
        key={id}
        name={name}
        number={number}
        onDelete={() => onDelete(id)}
        onStatusChange={() => onStatusChange(id)}
      />
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
export default ContactList;
