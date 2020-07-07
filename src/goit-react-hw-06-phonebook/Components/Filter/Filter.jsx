import React from 'react';
import { connect } from 'react-redux';

import contacsActions from '../../modules/contacts/contactsActions';

const Filter = ({ filter, onFilter, theme }) => (
  <>
    <label className="phonebook-form" style={{ background: theme.themeConfig.formBg }}>
      <p style={{ color: theme.themeConfig.fontColor }}>Find contacts by name</p>
      <input type="text" value={filter} onChange={(e) => onFilter(e.target.value)} />
    </label>
  </>
);

const mapStateToProps = (state) => ({
  theme: state.theme,
  filter: state.contacts.filter,
});

const mapDispatchToProps = { onFilter: contacsActions.filterContact };

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
