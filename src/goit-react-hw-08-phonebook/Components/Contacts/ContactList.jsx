import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import { connect } from 'react-redux';

import { contactsSelectors } from '../../modules/contacts';

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

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getFilteredContacts(state),
});

export default connect(mapStateToProps)(ContactList);
