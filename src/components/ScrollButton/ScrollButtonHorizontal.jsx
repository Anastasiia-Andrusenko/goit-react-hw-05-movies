import classNames from 'classnames';
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io';
import css from './ScrollButtonHorizontal.module.css';

export const ScrollButtonRight = () => {
  return (
    <div className={classNames(css.btn, css.right)}>
      <IoIosArrowDropright />
    </div>
  );
};

export const ScrollButtonLeft = () => {
  return (
    <div className={classNames(css.btn, css.left)}>
      <IoIosArrowDropleft />
    </div>
  );
};
