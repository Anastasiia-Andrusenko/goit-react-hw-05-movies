import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import css from './Reviews.module.css';
import { getReviews } from 'api/getMovies';
import Message from 'components/Message/Message';

var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;

const Reviews = () => {
  const { movieId } = useParams();
  const [items, setItems] = useState([]);


  // console.log(getReviews(movieId));
  
  useEffect(() => {
    getReviews(movieId).then(response => {
      // console.log(response.results);
      setItems(response.results);
    })

    scroll.scrollTo(200);

  }, [movieId] )


  return ( items.length === 0 ? <Message text='Sorry, no reviews yet'/> :
    <div className={css.container}>
      <ul className={css.list}>
        {items.map(item => 
        <li className={css.item} key={item.id}>
          <article className={css.review}>
              <p className={css.author}>{item.author}</p>
              <p className={css.text}>{item.content}</p>
          </article>
        </li>
        )}
      </ul>
    </div>
  )
}

export default Reviews;