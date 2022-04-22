import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const setActive = ({ isActive }) => (isActive ? s.activeLink : s.link);

export const Navigation = () => (
  <nav className={s.navContainer}>
    <NavLink to="/" className={setActive}>
      Home
    </NavLink>
    <NavLink to="/movies" className={setActive}>
      Movies
    </NavLink>
  </nav>
);
