
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTrailer } from '../../../../api/getMovies';
import { nanoid } from 'nanoid'

import css from './Trailer.module.css';

const Trailer = () => {
  const [key, setKey] = useState();
  const { movieId } = useParams();

  var Scroll = require('react-scroll');
  var scroll = Scroll.animateScroll;

  useEffect(() => {
    getTrailer(movieId).then(response => {
      // console.log(response.results);
      const officialTrailer = response.results.filter(result => result.name === 'Official Trailer')[0];
      // console.log(officialTrailer);
      setKey(officialTrailer.key);
    })

    scroll.scrollTo(800);

  }, [movieId, scroll]);

  return <div className={css.container}>
    <iframe title={nanoid()} id="player" type="text/html" width="720" height="480"
  src={`https://www.youtube.com/embed/${key}`} className={css.video}></iframe>
  </div>
}

export default Trailer;