import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { contactsOperations, contactsSelectors } from '../../modules/contacts';
import { themeSelectors } from '../../modules/theme';

const ContactItem = ({ name, number, onDelete, theme }) => (
  <li className="phonebook-form" style={{ background: theme.themeConfig.formBg }}>
    <div className="phonebook-contact">
      <span style={{ color: theme.themeConfig.fontColor }}>{name}</span>
      <span style={{ color: theme.themeConfig.fontColor }}>{number}</span>
    </div>
    <button className="actionBtn" onClick={onDelete}>
      Delete
    </button>
  </li>
);

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

const mapStateToProps = (state, { id }) => {
  const { name, number } = contactsSelectors.getContactById(state, id);
  return {
    name,
    number,
    theme: themeSelectors.getTheme(state),
  };
};

const mapDispatchToProps = (dispatch, { id }) => ({
  onDelete: () => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
