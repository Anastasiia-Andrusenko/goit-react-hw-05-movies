import { Suspense } from "react";
import { NavLink, useParams, useNavigate, Outlet, useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import css from '../MovieDetails/MovieDetails.module.css';
import { Oval } from 'react-loader-spinner';

import { MdArrowBackIos } from 'react-icons/md';
import { FaTheaterMasks } from 'react-icons/fa';
import { AiOutlineLike } from 'react-icons/ai';
import { GiDirectorChair } from 'react-icons/gi';

import { getMovieDetails, getMovieCredits } from '../../../api/getMovies';

import Poster from "../../MovieCards/Poster";
import classNames from "classnames";

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
  const [director, setDirector] = useState('');
  const [directorID, setDirectorID] = useState();
  const [dirPhoto, setDirPhoto] = useState('');

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
    });

    getMovieCredits(movieId).then(response => {
      const { crew } = response;

      const directing = crew.find(obj => obj.known_for_department === "Directing");
      setDirector(directing.original_name);
      setDirectorID(directing.id);
      setDirPhoto(directing.profile_path);
      // console.log(crew);
      // console.log(directing);
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
      {title ? <div className={css.detail}>
        <h2 className={css.name}>{title}</h2>
        <p className={css.year}>{date}</p>
        <p className={css.info}>User score
          <AiOutlineLike className={css.icon} />
          <span className={css.number}>{vote ? `${vote} %` : 'No info'}</span></p>
        <p className={css.title}>Overview</p>
        <p className={css.info}>{overview ? overview : 'No info'}</p>
        <p className={css.title}>Genres <FaTheaterMasks className={css.icon}/></p>
        <p className={css.info}>{genres ? genres : 'No info'}</p>
        <p className={css.title}>Director<GiDirectorChair className={css.icon} /></p>
        <Link to={`/director/${directorID}`} state={{ from: location }} poster={dirPhoto}>
          <p className={classNames(css.info, css.director)}>{director ? director : 'No info'}</p>
        </Link>
      </div> : <Oval
          className={css.loader}
          height={50}
          width={50}
          color="#AC8BCC"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel='oval-loading'
          secondaryColor="#C2B6D1"
          strokeWidth={6}
          strokeWidthSecondary={6}
        />}
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
