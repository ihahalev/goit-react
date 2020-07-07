import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import contacsActions from '../../modules/contacts/contactsActions';

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
  const { name, number } = state.contacts.items.find((item) => item.id === id);
  return {
    name,
    number,
    theme: state.theme,
  };
};

const mapDispatchToProps = (dispatch, { id }) => ({ onDelete: () => dispatch(contacsActions.deleteContact(id)) });

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
