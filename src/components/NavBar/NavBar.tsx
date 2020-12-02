import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { routesComponent } from '../../router/ListRoutes';

import './NavBar.scss';

function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="navbar--logo">
        <Link className="navbar--logo__text" to={'/home'}>
          Control <br /> Panel
        </Link>
      </h1>
      <ul className="navbar--list">
        {routesComponent.map((item, idx) => (
          <li key={idx + item.name} className="navbar--list__item">
            <NavLink
              className={'navbar--link'}
              activeClassName={'active'}
              to={item.path}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="navbar--exit">
        <span className="navbar--exit__text">
          <Link to={'/'}>Logout</Link>
        </span>
      </div>
    </nav>
  );
}

export default NavBar;
