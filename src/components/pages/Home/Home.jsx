
import {useState, useEffect} from "react";

import css from '../Home/Home.module.css';
import { MdMovieFilter } from 'react-icons/md';


import { getTrendingMovies } from '../../../api/getMovies';
import MovieCards from "components/MovieCards/MovieCards";
import LoadMore from '../../LoadMore/LoadMore';
import ScrollButton from '../../ScrollButton/ScrollButton';





const Home = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {

    getTrendingMovies(page).then(response => {
      // console.log(response.results);
      const arrayOfTrendingMovies = response.results;
      setItems(prevItems => [...prevItems, ...arrayOfTrendingMovies]);
    }).catch((err) => console.log(err.message))
  }, [page])

  const loadMoreBtn = () => {setPage(prevPage => (prevPage + 1))};

  return <div className={css.container}>
    <div className={css.page_title}>
      <MdMovieFilter className={css.icon} />
      <h2 className={css.title}>Trending today</h2>
    </div>
    <MovieCards items={items} />
    <LoadMore loadMoreBtn={loadMoreBtn}>Load more</LoadMore>
    <ScrollButton/>
  </div>
}


export default Home;
