
import { Link, useLocation } from 'react-router-dom';
import PropTypes from "prop-types";

import css from './MovieCard.module.css';


import Poster from "./Poster";


const MovieCards = ({ items }) => {
  console.log(items);
  const location = useLocation();

  const sortArrayByDate = (items) => {
    items.sort()
  }
  
  return <ul className={css.list}>
    {items.map(item => <li key={item.id} >
      <Link to={`/movies/${item.id}`} className={css.card} state={{from: location}}>
        <Poster poster={item.poster_path} alt={item.title}/>
        <div className={css.info}>
          <h3 className={css.name}>{item.title}</h3>
          <p className={css.date}>{item.release_date.slice(0, -6)}</p>
        </div>
      </Link>
      </li>)}
    </ul>
}

export default MovieCards;

MovieCards.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
  }).isRequired,)
}