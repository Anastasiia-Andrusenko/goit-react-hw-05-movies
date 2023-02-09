
import {useState, useEffect} from "react";

import css from '../Home/Home.module.css';
import { MdMovieFilter } from 'react-icons/md';


import { getTrendingMovies } from '../../../api/getMovies';
import MovieCard from "components/MovieCard/MovieCard";





const Home = ({id}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(response => {
      // console.log(response.results);
      const arrayOfTrendingMovies = response.results;
      setItems(arrayOfTrendingMovies);
    })
  }, [setItems])


  // useEffect(() => {
  //   if (!id) {
  //     return;
  //   }

  //   getMovieDetails(id).then(response => {
  //     console.log(response);
  //   })

  // }, [id])



  return <div className={css.container}>
    <div className={css.page_title}>
      <MdMovieFilter className={css.icon} />
      <h2 className={css.title}>Trending today</h2>
    </div>
    <MovieCard items={items} movieId={id} />
  </div>
}


export default Home;