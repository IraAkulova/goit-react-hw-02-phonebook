import React, { Component } from 'react';
import { ContactForm } from './form/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from './list/ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    data.id = nanoid();
    const newContacts = this.state.contacts;
    newContacts.push(data);
    return this.setState({ contacts: newContacts });
  };

  filterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const normalizedFilter = this.state.filter.toLocaleLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.filterChange} />
        <ContactList contacts={visibleContacts} id={this.state.id} />
      </div>
    );
  }
};
