export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export const updateSearchTerm = (words) => ({
  type: UPDATE_SEARCH_TERM,
  payload: { words }
});
