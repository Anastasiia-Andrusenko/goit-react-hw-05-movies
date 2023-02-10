import PropTypes from "prop-types";
import css from './LoadMore.module.css';

const LoadMore = ({loadMoreBtn}) => {
  return <button type='button' className={css.button} onClick={loadMoreBtn}>
  </button>
}

export default LoadMore;

LoadMore.propTypes = {
  children: PropTypes.string.isRequired,
  loadMoreBtn: PropTypes.func.isRequired,
}