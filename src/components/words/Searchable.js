import React from 'react';
import SearchWords from '../../containers/words/SearchWords';
import TopWords from '../../containers/words/TopWords';
import PropTypes from 'prop-types';

export default function Searchable({ match, searchTerm }) {
  return (
    <>
      <SearchWords />
      <TopWords count={match.params.count} searchTerm={searchTerm} />
    </>
  );
}

Searchable.propTypes = {
  match: PropTypes.object.isRequired,
  searchTerm: PropTypes.string
};
