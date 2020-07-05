import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => ({
  theme: state.theme,
});

export default connect(mapStateToProps)(ContactItem);
