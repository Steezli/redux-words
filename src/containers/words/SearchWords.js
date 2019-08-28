import { connect } from 'react-redux';
import SearchForm from '../../components/words/SearchForm';
import { getSearchTerm } from '../../selectors/wordsSelectors';
import { updateSearchTerm } from '../../actions/wordsActions';

const mapStateToProps = state => ({
  searchTerm: getSearchTerm(state)
});

const mapDispatchToState = dispatch => ({
  handleChange({ target }) {
    dispatch(updateSearchTerm(target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToState
)(SearchForm);
