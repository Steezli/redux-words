import React from 'react';
import PropTypes from 'prop-types';

export default function SearchForm({ searchTerm, handleChange }) {
  console.log(searchTerm);
  return (
    <input
      type="text"
      value={searchTerm}
      name="searchTerm"
      placeholder="🔍"
      onChange={handleChange}
    />
  );
}

SearchForm.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleChange: PropTypes.func
};
