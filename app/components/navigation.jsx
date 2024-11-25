import { NavLink } from '@remix-run/react';

const MainNav = () => {
  return (
    <header className="header">
      <ul className="nav-ul">
        <li className="nav-li">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-li">
          <NavLink className="nav-link" to="/notes">
            Notes
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default MainNav;
