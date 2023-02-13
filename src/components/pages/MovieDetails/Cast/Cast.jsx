import css from './Cast.module.css';
import Poster from 'components/MovieCards/Poster';
import { useEffect, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { getMovieCredits } from 'api/getMovies';


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
      const cast = response.cast.slice(0, 12);
      // console.log(cast);
      setItems(cast);
    })


    scroll.scrollTo(200);

  }, [movieId])

  
  return (
    <div className={css.container}>
      <ul className={css.list}>
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
    </div>
  )
}

export default Cast;