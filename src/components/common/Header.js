import React, {
  Fragment
} from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Fragment>
      <header>
        <nav className={`navbar`} role="navigation" aria-label="main-navigation">
          <div className={`navbar-brand`}>
            <Link to="/" className={`navbar-item`}>
              <img className={`header-logo`} src="#" alt="Logo" />
            </Link> 
            <Link to="/" className={`navbar-item`}>Home</Link>
            <a role="button" className={`navbar-burger burger`} aria-label="menu" aria-expanded="false" data-target="main-navbar">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        </nav>
      </header>
    </Fragment>
  )
}

export default Header;
