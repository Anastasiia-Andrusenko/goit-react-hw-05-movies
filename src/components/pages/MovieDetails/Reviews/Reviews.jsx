import css from './Reviews.module.css';


const Reviews = () => {

  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li className={css.item}>
          <article className={css.review}>
            <p className={css.author}></p>
            <p className={css.text}></p>
          </article>
        </li>
      </ul>
    </div>
  )
}

export default Reviews;