import React from 'react';
import PropTypes from 'prop-types';
import withTheme from '../hoc/withTheme';

const ContactItem = ({ name, number, onDelete, theme }) => (
  <li>
    <span style={{ color: theme.themeConfig.fontColor }}>
      {name}: {number}
    </span>
    <button onClick={onDelete}>Delete</button>
  </li>
);

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
export default withTheme(ContactItem);
