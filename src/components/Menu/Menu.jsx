
import { NavLink } from 'react-router-dom';
import { BiCameraMovie } from 'react-icons/bi'
import items from './items';
import css from '../Menu/Menu.module.css';


const getClassName = ({ isActive }) => {
  return isActive ? `${css.link} ${css.current}` : css.link;
}


const Menu = () => {
  const elements = items.map(({ id, to, content, icon }) => (
    <li key={id}>
      <NavLink className={getClassName} to={to}>{icon}{content}</NavLink>
    </li>
  ))

  return (
    <div className={css.container}>
        <NavLink to='/'><BiCameraMovie className={css.icon}/></NavLink>
      <ul className={css.menu}>
        {elements}
      </ul>
    </div>
  )
}


export default Menu;
