
import {useState, useEffect} from "react";

import css from '../Home/Home.module.css';
import { MdMovieFilter } from 'react-icons/md';


import { getTrendingMovies } from '../../../api/getMovies';
import Poster from "./Poster";




const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(response => {
      // console.log(response);
      const arrayOfTrendingMovies = response.results;
      setItems(arrayOfTrendingMovies);
    })
  }, [setItems])

  // getTrendingMovies();


  return <div className={css.container}>
    <div className={css.page_title}>
      <MdMovieFilter className={css.icon} />
      <h2 className={css.title}>Trending today</h2>
    </div>
    <ul className={css.list}>
      {items.map(item => <li key={item.id} className={css.card}>
        <Poster poster={item.poster_path} alt={item.title} />
        <h3 className={css.name}>{item.title}</h3>
      </li>)}
    </ul>
  </div>
}


export default Home;