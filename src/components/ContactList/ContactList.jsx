// Import the React library to create a React component.
import React from 'react';

// Define a functional component called ContactList that takes two props:
// - contacts: an array of contact objects
// - handleDeleteContact: a function to handle contact deletion
const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    // Create an unordered list (ul) to display the contact list.
    <ul>
      {contacts.map(contact => (
        // Map through the 'contacts' array and create a list item (li) for each contact.
        // Use the 'contact.id' as the 'key' to uniquely identify each list item.
        <li key={contact.id}>
          {/* Display the contact's name and number */}
          {contact.name} - {contact.number}
          {/* Create a button to delete the contact when clicked.
               Use an arrow function to pass the 'contact.id' to the 'handleDeleteContact' function */}
          <button onClick={() => handleDeleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

// Export the ContactList component as the default export of this module.
export default ContactList;

// This module defines a React component called ContactList that takes an array of contacts and a function for deleting contacts as props.
// It maps through the contacts array, creating a list item for each contact with a delete button.
// The key attribute is used to ensure React can efficiently update the list when contacts are added or removed.
