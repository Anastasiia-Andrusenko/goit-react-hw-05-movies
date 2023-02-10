import PropTypes from "prop-types";
import frame from '../../../src/frame.jpg';
import css from './Poster.module.css';

const Poster = ({ poster, alt }) => {
  const posterSrc = `https://image.tmdb.org/t/p/w300/${poster}`

  // console.log(poster);

  return <>
    {poster === null ? <img className={css.poster} src={frame} alt={alt}></img> : <img className={css.poster} src={posterSrc} alt={alt}></img>}
  </>

}

export default Poster;

Poster.propTypes = {
  poster: PropTypes.string,
  alt: PropTypes.string,
}