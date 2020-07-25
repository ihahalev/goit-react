import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

import ContactForm from '../ContactForm';
import ContactList from '../Contacts';
import Filter from '../Filter';
import Toolbar from '../Toolbar';

import * as contactsOperations from '../../modules/contacts/contactsOperations';
import * as contactsSelectors from '../../modules/contacts/constactsSelectors';
import * as themeSelectors from '../../modules/theme/themeSelectors';

import { connect } from 'react-redux';

class Phonebook extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    const { theme, contacts, loading } = this.props;
    return (
      <>
        <div className="conteiner-pb" style={{ background: theme.themeConfig.conteinerBg }}>
          <Toolbar />
          <ContactForm />
          <h2>Contacts</h2>
          {contacts.length > 1 && <Filter />}
          {loading ? (
            <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} className="Loader" />
          ) : (
            <ContactList />
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: themeSelectors.getTheme(state),
  contacts: contactsSelectors.getItems(state),
  loading: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = { onFetchContacts: contactsOperations.fetchContacts };

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
