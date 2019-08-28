import { connect } from 'react-redux';
import Words from '../../components/words/Words';
import { getTopWordsByTerm } from '../../selectors/wordsSelectors';

const mapStateToProps = (state, count = 1000) => ({
  words: getTopWordsByTerm(state, count)
});

export default connect(
  mapStateToProps
)(Words);
