import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';

import ContactForm from '../ContactForm';
import ContactList from '../Contacts';
import Filter from '../Filter';

import { contactsOperations, contactsSelectors } from '../../modules/contacts';

class ContactsPage extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    const { contacts, loading } = this.props;
    return (
      <>
        <ContactForm />
        <h2>Contacts</h2>
        {contacts.length > 1 && <Filter />}
        {loading ? (
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} className="Loader" />
        ) : (
          <ContactList />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getItems(state),
  loading: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = { onFetchContacts: contactsOperations.fetchContacts };

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
