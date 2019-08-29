const getWords = state => state.words.dictionary;

export const getSearchTerm = state => state.words.searchTerm;

export const getFirstWords = (state, count) => {
  getWords(state).slice(0, count);
};

export const getTopWordsByTerm = (state, count) => {
  const searchTerm = getSearchTerm(state);
  return getWords(state).filter(word => {
    return word.includes(searchTerm);
  }).slice(0, count);
};
