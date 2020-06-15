import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ name, number, onDelete, onStatusChange }) => (
  <li>
    <span>
      {name}: {number}
    </span>
    <button onClick={onDelete}>Delete</button>
  </li>
);

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
export default ContactItem;
