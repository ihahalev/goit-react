import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

import localStorageUtils from './utils/localStorage';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

import ContactForm from './ContactForm';
import ContactList from './Contacts';
import Filter from './Filter';

class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAdd = ({ name, number }) => {
    if (!name || !number) {
      toast.warn('Fill required fields', { position: 'top-center' });
      return;
    }
    if (this.state.contacts.find((contact) => contact.name === name)) {
      toast.error(`${name} is already in contacts`, { position: 'top-center' });
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, { id: uuidv4(), name, number }],
    }));
  };

  handleDelete = (id) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== id),
    }));
  };

  handleFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  filterContacts = () => {
    return this.state.filter
      ? this.state.contacts.filter(({ name }) => name.toLowerCase().includes(this.state.filter.toLowerCase()))
      : this.state.contacts;
  };

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
    const { contacts, filter } = this.state;
    return (
      <div className="conteiner-pb">
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.handleAdd} />

        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        {contacts.length > 1 && <Filter filter={filter} onFilter={this.handleFilter} />}
        <ContactList contacts={this.filterContacts()} onDelete={this.handleDelete} />
        <ToastContainer />
      </div>
    );
  }
}

export default Phonebook;
