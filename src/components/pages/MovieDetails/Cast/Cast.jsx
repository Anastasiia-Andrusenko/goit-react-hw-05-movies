import css from './Cast.module.css';
import Poster from 'components/MovieCards/Poster';
import { useEffect, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { getMovieCredits } from 'api/getMovies';
import Message from 'components/Message/Message';
import {ScrollButtonRight, ScrollButtonLeft} from 'components/ScrollButton/ScrollButtonHorizontal';
// import { IoIosArrowDropright } from 'react-icons/io';

var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;

const Cast = () => {
  const [items, setItems] = useState([]);
  // const [personId, setPersonId] = useState();

  const { movieId } = useParams();
  // console.log(movieId);

  const location = useLocation();

  useEffect(() => {
    getMovieCredits(movieId).then(response => {
      // console.log(response.cast);
      const cast = response.cast.slice(0, 16);
      // console.log(cast);
      setItems(cast);
    })

    scroll.scrollTo(500);

  }, [movieId]);

  const scrollToRight = () => {
    const castList = document.getElementById('castList');

    castList.scrollLeft += 515;
  }

  const scrollToLeft = () => {
    const castList = document.getElementById('castList');

    castList.scrollLeft = 0;
  }

  
  return ( items.length === 0 ? <Message text='Sorry, no information yet'/> :
    <div className={css.container}>
      <div className={css.cast}>
        <ul className={css.list} id='castList'>
        {items.map(item => 
          <Link key={item.id} to={`/person/${item.id}`} state={{from: location}} className={css.item} poster={item.profile_path}>
            <li id={item.id}>
              <div className={css.photo}>
                <Poster poster={item.profile_path} />
              </div>
              <p className={css.name}>{item.original_name}</p>
              <p className={css.character}>{item.character}</p>
            </li>
          </Link>)}
        </ul>
        <div onClick={scrollToLeft}>
          <ScrollButtonLeft/>
        </div>
        <div onClick={scrollToRight} >
          <ScrollButtonRight/>
        </div>
      </div>
    </div>
  )
}

export default Cast;