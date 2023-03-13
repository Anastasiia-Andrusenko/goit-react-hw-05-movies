
import classNames from 'classnames';
// import { useRef, useState } from 'react';
import {IoIosArrowDropright, IoIosArrowDropleft} from 'react-icons/io';
import css from './ScrollButtonHorizontal.module.css';


export const ScrollButtonRight = () => {
  // const [visible, setVisible] = useState(false);

  return <div className={classNames(css.btn, css.right)} >
    <IoIosArrowDropright/>
  </div>
}

export const ScrollButtonLeft = () => {
  // const [visible, setVisible] = useState(false);


  return <div className={classNames(css.btn, css.left)} >
    <IoIosArrowDropleft/>
  </div>
}
