import React from 'react';
import { connect } from 'react-redux';

import { InputText } from '../materialStyles';

import { contactsSelectors, contactsActions } from '../../modules/contacts';
import { themeSelectors } from '../../modules/theme';

const Filter = ({ filter, onFilter, theme }) => (
  <>
    <div className="phonebook-form" style={{ background: theme.themeConfig.formBg }}>
      <InputText
        id="outlined-basic"
        label="Find contacts by name"
        variant="outlined"
        type="text"
        value={filter}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  </>
);

const mapStateToProps = (state) => ({
  theme: themeSelectors.getTheme(state),
  filter: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = { onFilter: contactsActions.filterContact };

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
