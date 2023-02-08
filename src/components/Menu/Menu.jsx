
import { NavLink } from 'react-router-dom';
import { BiCameraMovie } from 'react-icons/bi'

import css from '../Menu/Menu.module.css';


// MdLocalMovies

// IoIosPeople
// VscFeedback


const getClassName = ({ isActive }) => {
  return isActive ? `${css.link} ${css.current}` : css.link;
}



const Menu = () => {
  return (
    <div className={css.container}>
      <BiCameraMovie className={css.icon}>
        <NavLink className={getClassName} to='/'>Home</NavLink>
      </BiCameraMovie>
      <ul className={css.menu}>
        <li>
          <NavLink className={getClassName} to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink className={getClassName} to='/movies'>Movies</NavLink>
        </li>
      </ul>
    </div>
  )
}


export default Menu;
