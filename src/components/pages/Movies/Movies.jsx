
import { useEffect, useState } from 'react';
import { getMoviesByQuery } from '../../../api/getMovies';
import { useSearchParams } from 'react-router-dom';

import MovieCards from '../../MovieCards/MovieCards';
import SearchForm from './SearchForm';
import LoadMore from '../../LoadMore/LoadMore';
import css from '../Movies/Movies.module.css';


const Movies = () => {
  const [items, setItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const query = searchParams.get('query');
  // console.log(query);

  const onSubmit = query => {
    setSearchParams({query});
  }

  useEffect(() => {
    if (query) {
      getMoviesByQuery(query, page).then(response => {
        // запрос робиться двічі, як цього позбутися? не можу вигадати
        setItems(prevItems => [...prevItems, ...response.results]);
      }).catch((error) => console.log(error.message))
    }
  }, [query, page])

  const loadMoreBtn = () => {setPage(prevPage => (prevPage + 1))};

  return <div className={css.container}>
    <SearchForm onSubmit={onSubmit}/>
    {items.length > 0 && <MovieCards items={items} />}
    {items.length !== 0 && <LoadMore loadMoreBtn={loadMoreBtn}>Load more</LoadMore>}
  </div>

}

export default Movies;