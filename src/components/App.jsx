import React, { Component } from 'react';
import { ContactForm } from './form/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from './list/ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      // { name: "Ira", id: "id-1" },
      // { name: "Vova", id: "id-2" },
      // { name: "Darusia", id: "id-3"},
    ],
  };


  formSubmitHandler = data => {
    data.id = nanoid();
    const newContacts = [...this.state.contacts];
    newContacts.push(data);
    return this.setState({ contacts: newContacts });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter />
        <ContactList contacts={this.state.contacts} id={this.state.id} />
      </div>
    );
  }
};
