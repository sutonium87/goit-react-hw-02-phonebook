// Import the React library to create a React component.
import React from 'react';

// Define a functional component called ContactForm that takes four props:
// - name: the name input value
// - number: the number input value
// - handleChange: a function to handle input value changes
// - handleSubmit: a function to handle form submission
const ContactForm = ({ name, number, handleChange, handleSubmit }) => {
  return (
    // Create a form element with an onSubmit event handler that calls the handleSubmit function when the form is submitted.
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          // Create an input element for the name with various attributes:
          // - type: text input
          // - name: name input field identifier
          // - pattern: regular expression to validate the input format
          // - title: tooltip text to describe the input format
          // - required: make the input required
          // - value: bind the value to the 'name' prop
          // - onChange: call the handleChange function when the input value changes
          type="text"
          name="name"
          pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        Number:
        <input
          // Create an input element for the number with various attributes:
          // - type: telephone input
          // - name: number input field identifier
          // - pattern: regular expression to validate the input format for phone numbers
          // - title: tooltip text to describe the input format
          // - required: make the input required
          // - value: bind the value to the 'number' prop
          // - onChange: call the handleChange function when the input value changes
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      {/* Create a submit button for the form */}
      <button type="submit">Add Contact</button>
    </form>
  );
};

// Export the ContactForm component as the default export of this module.
export default ContactForm;

// This module defines a React component called ContactForm that renders a form with input fields for a contact's name and number.
// It also includes regular expressions and tooltips to validate and guide user input.The component uses props for the input values, change handling, and form submission.
