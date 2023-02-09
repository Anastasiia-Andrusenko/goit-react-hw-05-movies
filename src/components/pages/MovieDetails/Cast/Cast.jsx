import css from './Cast.module.css';
import Poster from 'components/MovieCard/Poster';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'api/getMovies';

const Cast = () => {
  const [items, setItems] = useState([]);

  const { movieId } = useParams();
  // console.log(movieId);


  useEffect(() => {
    getMovieCredits(movieId).then(response => {
      // console.log(response.cast);
      const cast = response.cast.slice(0, 12);
      // console.log(cast);
      setItems(cast);
    })

  }, [movieId])

  
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {items.map(item => 
          <li className={css.item} key={item.id}>
            <div className={css.photo}>
              <Poster poster={item.profile_path} />
            </div>
            <p className={css.name}>{item.original_name}</p>
            <p className={css.character}>{item.character}</p>
        </li>)}
      </ul>
    </div>
  )
}

export default Cast;