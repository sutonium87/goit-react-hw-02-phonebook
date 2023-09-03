// Import the React library to create a React component.
import React from 'react';

// Define a functional component called Filter that takes two props:
// - filter: the current filter value
// - handleFilterChange: a function to handle changes in the filter input
const Filter = ({ filter, handleFilterChange }) => {
  return (
    // Create a div to contain the filter input field.
    <div>
      <label>
        {/* Display a label for the filter input field */}
        Filter contacts by name:
        {/* Create an input element of type text with attributes:
             - value: set to the 'filter' prop to display the current filter value
             - onChange: call the 'handleFilterChange' function when the input value changes */}
        <input type="text" value={filter} onChange={handleFilterChange} />
      </label>
    </div>
  );
};

// Export the Filter component as the default export of this module.
export default Filter;

// This code defines a React component called Filter that renders an input field for filtering contacts by name.
// It takes two props: filter, which represents the current filter value, and handleFilterChange, a function to handle changes in the filter input.
// The input field's value is bound to the filter prop, and the handleFilterChange function is called when the input value changes.
