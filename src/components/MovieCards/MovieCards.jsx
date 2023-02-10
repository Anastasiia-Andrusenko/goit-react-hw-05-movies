
import { Link, useLocation } from 'react-router-dom';
// import { useState } from "react";

import css from './MovieCard.module.css';


import Poster from "./Poster";


const MovieCards = ({ items }) => {
  const location = useLocation();
  
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