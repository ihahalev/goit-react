import React from 'react';
import { connect } from 'react-redux';

import * as contacsActions from '../../modules/contacts/contactsActions';
import * as contactsSelectors from '../../modules/contacts/constactsSelectors';
import * as themeSelectors from '../../modules/theme/themeSelectors';

const Filter = ({ filter, onFilter, theme }) => (
  <>
    <label className="phonebook-form" style={{ background: theme.themeConfig.formBg }}>
      <p style={{ color: theme.themeConfig.fontColor }}>Find contacts by name</p>
      <input type="text" value={filter} onChange={(e) => onFilter(e.target.value)} />
    </label>
  </>
);

const mapStateToProps = (state) => ({
  theme: themeSelectors.getTheme(state),
  filter: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = { onFilter: contacsActions.filterContact };

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
