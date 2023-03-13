
import UserRoutes from "UserRoutes";

import Menu from "./Menu/Menu";


import css from './App.module.css';


export const App = () => {

  return (
    <div className={css.body}>
      <Menu />
      <UserRoutes/>
    </div>
  );
};
