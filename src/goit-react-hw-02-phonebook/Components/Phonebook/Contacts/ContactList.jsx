import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, onDelete, onStatusChange }) => (
  <ul className="task-list">
    {contacts.map(({ id, ...rest }) => (
      <ContactItem key={id} {...rest} onDelete={() => onDelete(id)} onStatusChange={() => onStatusChange(id)} />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
};
export default ContactList;
