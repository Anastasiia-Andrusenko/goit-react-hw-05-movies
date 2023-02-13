import { Suspense } from "react";
import { NavLink, useParams, useNavigate, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import css from '../MovieDetails/MovieDetails.module.css';

import { MdArrowBackIos } from 'react-icons/md';
import { FaTheaterMasks } from 'react-icons/fa';
import { AiOutlineLike } from 'react-icons/ai';

import { getMovieDetails } from '../../../api/getMovies';

import Poster from "../../MovieCards/Poster";

var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const [genres, setGenres] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [overview, setOverview] = useState('');
  const [poster, setPoster] = useState('');
  const [vote, setVote] = useState(0);

  const location = useLocation();
  const from = location.state?.from || "/";
  // console.log(location.state.from);
  const goBack = () => navigate(from);

  useEffect(() => {
    getMovieDetails(movieId).then(response => {
      // console.log(response);
      const { original_title, overview, genres, release_date, poster_path, vote_average } = response;
      setDate(release_date.slice(0, -6));
      setTitle(original_title);
      setGenres(genres.map(genre => genre.name).join(', '));
      setOverview(overview);
      setPoster(poster_path);
      setVote(Math.round(vote_average * 10));
    })

    scroll.scrollToTop();

  }, [movieId])
  
const getClassName = ({ isActive }) => {
  return isActive ? `${css.link} ${css.current}` : css.link;
}

  return <div className={css.container}>
    <div className={css.go_back} onClick={goBack}>
      <p><MdArrowBackIos className={css.arrow}/>back</p>
    </div>
    <div className={css.movie}>
      <div className={css.poster}>
        <Poster poster={poster} alt={title} />
      </div>
      <div className={css.detail}>
        <h2 className={css.name}>{title}</h2>
        <p className={css.year}>{date}</p>
        <p className={css.info}>User score
          <AiOutlineLike className={css.icon} />
          <span className={css.number}>{vote}</span> %</p>
        <p className={css.title}>Overview</p>
        <p className={css.info}>{overview}</p>
        <p className={css.title}>Genres <FaTheaterMasks className={css.icon}/></p>
        <p className={css.info}>{genres}</p>
      </div>
    </div>
    <div className={css.add_info}>
      <h3 className={css.title_extra}>additional information</h3>
      <ul className={css.extra_info_menu}>
        <li>
          <NavLink state={{from}} className={getClassName} to={`/movies/${movieId}/trailer`}>Trailer</NavLink>
        </li>
        <li>
          <NavLink state={{from}} className={getClassName} to={`/movies/${movieId}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink state={{from}} className={getClassName} to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>...loading</div>}>
        <Outlet />
      </Suspense>
    </div>
  </div>
}

export default MovieDetails;