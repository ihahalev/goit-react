import React, { Component } from 'react';

import localStorageUtils from '../utils/localStorage';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

import ContactForm from '../ContactForm';
import ContactList from '../Contacts';
import Filter from '../Filter';
import Toolbar from '../Toolbar';

import { connect } from 'react-redux';

class Phonebook extends Component {
  componentDidMount() {
    const contactsParsed = localStorageUtils.get('contactList');

    if (contactsParsed) {
      this.setState(() => ({
        contacts: [...contactsParsed],
      }));
    }
  }

  componentDidUpdate() {
    localStorageUtils.save('contactList', this.state.contacts);
  }

  render() {
    const { theme, contacts } = this.props;
    console.log(theme);
    return (
      <>
        <div className="conteiner-pb" style={{ background: theme.themeConfig.conteinerBg }}>
          <Toolbar />
          <ContactForm />
          <h2>Contacts</h2>
          {contacts.length > 1 && <Filter />}
          <ContactList />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: state.theme,
  contacts: state.contacts.items,
});

export default connect(mapStateToProps)(Phonebook);
