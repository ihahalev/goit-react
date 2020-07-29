import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import { actionBtn } from '../materialStyles';

import { contactsOperations, contactsSelectors } from '../../modules/contacts';
import { themeSelectors } from '../../modules/theme';

const ContactItem = ({ name, number, onDelete, theme }) => {
  // const classes = actionBtn();
  return (
    <li className="phonebook-form" style={{ background: theme.themeConfig.formBg }}>
      <div className="phonebook-contact">
        <span style={{ color: theme.themeConfig.fontColor }}>{name}</span>
        <span style={{ color: theme.themeConfig.fontColor }}>{number}</span>
      </div>
      <Button variant="contained" color="primary" onClick={onDelete} style={actionBtn}>
        Delete
      </Button>
    </li>
  );
};

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
