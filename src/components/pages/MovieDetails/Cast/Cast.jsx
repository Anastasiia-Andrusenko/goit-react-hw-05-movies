import css from './Cast.module.css';
import Poster from 'components/MovieCard/Poster';


const Cast = () => {

  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li className={css.item}>
          <Poster />
          <p className={css.name}></p>
        </li>
      </ul>
    </div>
  )
}

export default Cast;