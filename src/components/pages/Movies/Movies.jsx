
import { useEffect, useState } from 'react';
import { getMoviesByQuery } from '../../../api/getMovies';
import { useSearchParams } from 'react-router-dom';

import MovieCards from '../../MovieCards/MovieCards';
import SearchForm from './SearchForm';
import LoadMore from '../../LoadMore/LoadMore';
import css from '../Movies/Movies.module.css';
import ScrollButton from '../../ScrollButton/ScrollButton';


const Movies = () => {
  const [items, setItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const query = searchParams.get('query');
  console.log(query);

  const onSubmit = query => {
    setItems([]);
    setSearchParams({ query });
  }

  useEffect(() => {
    if (query) {
      getMoviesByQuery(query, page).then(response => {
        setItems(prevItems => [...prevItems, ...response.results]);
      }).catch((error) => console.log(error.message))
    }
  }, [query, page])

  const loadMoreBtn = () => {setPage(prevPage => (prevPage + 1))};

  return <div className={css.container}>
    <SearchForm onSubmit={onSubmit} query = {query}/>
    {items.length > 0 && <MovieCards items={items} />}
    {items.length !== 0 && <LoadMore loadMoreBtn={loadMoreBtn}>Load more</LoadMore>}
    <ScrollButton/>
  </div>

}

export default Movies;