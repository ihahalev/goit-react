import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as contactsOperations from '../../modules/contacts/contactsOperations';
import * as contactsSelectors from '../../modules/contacts/constactsSelectors';
import * as themeSelectors from '../../modules/theme/themeSelectors';

const ContactItem = ({ name, number, onDelete, theme }) => (
  <li className="phonebook-form" style={{ background: theme.themeConfig.formBg }}>
    <div className="phonebook-contact">
      <span style={{ color: theme.themeConfig.fontColor }}>{name}</span>
      <span style={{ color: theme.themeConfig.fontColor }}>{number}</span>
    </div>
    <button onClick={onDelete}>Delete</button>
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
