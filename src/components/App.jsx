import React, { Component } from 'react'; // Import React and Component from the 'react' library.
import ContactForm from './ContactForm/ContactForm'; // Import the ContactForm component from a specific path.
import ContactList from './ContactList/ContactList'; // Import the ContactList component from a specific path.
import Filter from './Filter/Filter'; // Import the Filter component from a specific path.

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ], // Initialize the state with an array of contact objects.
    filter: '', // Initialize the filter state.
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value }); // Update the filter state based on the input value.
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value }); // Update the state dynamically based on input name and value.
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number, contacts } = this.state;
    if (contacts.some(contact => contact.name === name)) {
      alert(`Contact with name "${name}" already exists.`); // Display an alert if a contact with the same name already exists.
      return;
    }
    const newContact = { id: this.generateId(), name, number }; // Create a new contact object.
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact], // Add the new contact to the contacts array.
      name: '',
      number: '',
    }));
  };

  generateId = () => {
    return Math.random().toString(36).substr(2, 9); // Generate a unique ID for contacts.
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId), // Remove a contact based on its ID.
    }));
  };

  render() {
    const { name, number, contacts, filter } = this.state;
    const filteredContacts = contacts.filter(
      contact => contact.name.toLowerCase().includes(filter.toLowerCase()) // Filter contacts based on the filter value.
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          name={name}
          number={number}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <h2>Contacts</h2>
        <Filter filter={filter} handleFilterChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          handleDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}

export default App; // Export the App component as the default export.

// This code defines a React app that allows users to manage a list of contacts.
// Users can add new contacts with names and phone numbers, filter contacts based on name, and delete contacts from the list.
// The app utilizes various methods to handle user interactions and maintain the state of the contacts.
