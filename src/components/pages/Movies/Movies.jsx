
import { useState } from 'react';
import { getMoviesByQuery } from '../../../api/getMovies';

import MovieCard from '../../MovieCard/MovieCard';

import css from '../Movies/Movies.module.css';

const Movies = ({id}) => {
  const [searchValue, setSearchValue] = useState('');
  const [items, setItems] = useState([]);


  const handleSubmit = evt => {
    evt.preventDefault();

    if (searchValue.trim() === '') {
      return;
    }

    getMoviesByQuery(searchValue).then(response => {
      // console.log(response.results);
      setItems(response.results);
    })
  }


  return <div className={css.container}>
    <div className={css.search_bar}>
      <form className={css.form} onSubmit={handleSubmit}>
      <button type="submit" className={css.button}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24" height="24"
            viewBox="0 0 24 24"
            fill="none" stroke="#657789"
            strokeWidth="3" strokeLinecap="round"
            strokeLinejoin="round"
            className={css.svg}>
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        <span className={css.label}>Search</span>
      </button>
      <input
        className={css.input}
        type="search"
        autoComplete='off'
        placeholder="Search images and photos"
        onChange={(evt) => {setSearchValue(evt.currentTarget.value.toLowerCase().trim())}}
      />
    </form>
    </div>
    <MovieCard items={items} movieId={id}/>
  </div>

}

export default Movies;