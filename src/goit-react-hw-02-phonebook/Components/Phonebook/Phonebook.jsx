import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './Contacts';
import Filter from './Filter';
import { v4 as uuidv4 } from 'uuid';

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
      return;
    }
    if (this.state.contacts.find((contact) => contact.name === name)) {
      alert(`${name} is already in contacts`);
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

  render() {
    const { contacts, filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.handleAdd} />

        <h2>Contacts</h2>
        {contacts.length > 1 && <Filter filter={filter} onFilter={this.handleFilter} />}
        <ContactList contacts={this.filterContacts()} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default Phonebook;
