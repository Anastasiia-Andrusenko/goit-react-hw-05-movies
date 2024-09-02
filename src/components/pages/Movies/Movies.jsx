import { useEffect, useState } from 'react';
import { getMoviesByQuery } from '../../../api/getMovies';
import { useSearchParams } from 'react-router-dom';

import MovieCards from '../../MovieCards/MovieCards';
import SearchForm from './SearchForm';
import LoadMore from '../../LoadMore/LoadMore';
import css from '../Movies/Movies.module.css';
import ScrollButton from '../../ScrollButton/ScrollButton';
import Message from 'components/Message/Message';

const Movies = () => {
  const [items, setItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [totalResults, setTotalResults] = useState();
  const query = searchParams.get('query');
  // console.log(query);

  const onSubmit = query => {
    setItems([]);
    setSearchParams({ query });
  };

  useEffect(() => {
    if (query) {
      getMoviesByQuery(query, page)
        .then(response => {
          setItems(prevItems => [...prevItems, ...response.results]);
          setTotalPage(response.total_pages);
          setTotalResults(response.total_results);
        })
        .catch(error => console.log(error.message));
    }
  }, [query, page]);

  const loadMoreBtn = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className={css.page}>
      <div className={css.container}>
        <SearchForm onSubmit={onSubmit} query={query} />
        {items.length > 0 && <MovieCards items={items} />}
        {totalResults === 0 && (
          <Message text="No matches. Please, try again." />
        )}
        {items.length !== 0 && totalPage !== page && (
          <LoadMore loadMoreBtn={loadMoreBtn}>Load more</LoadMore>
        )}
        <ScrollButton />
      </div>
    </div>
  );
};

export default Movies;
