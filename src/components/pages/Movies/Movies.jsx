
import { useEffect, useState } from 'react';
import { getMoviesByQuery } from '../../../api/getMovies';
import { useSearchParams } from 'react-router-dom';

import MovieCards from '../../MovieCards/MovieCards';
import SearchForm from './SearchForm';

import css from '../Movies/Movies.module.css';


const Movies = () => {
  const [items, setItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  // console.log(query);

  const onSubmit = query => {
    setSearchParams({query});
  }

  useEffect(() => {
    if (query) {
      getMoviesByQuery(query).then(response => {
      // console.log(response.results);
      setItems(response.results);
      }).catch((error) => console.log(error.message))
    }
  }, [query])


  return <div className={css.container}>
    <SearchForm onSubmit={onSubmit}/>
    {items.length > 0 && <MovieCards items={items}/>}
  </div>

}

export default Movies;