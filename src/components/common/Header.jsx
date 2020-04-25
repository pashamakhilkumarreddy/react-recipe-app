import React, {
  Fragment, useState
} from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [displayNavbarBurger, setNavbarBurgerDisplay] = useState(false);
  const toggleNavbarBurger = (e) => {
    e.preventDefault();
    setNavbarBurgerDisplay(!displayNavbarBurger);
  }
  return (
    <Fragment>
      <header>
        <nav className={`navbar`} role="navigation" aria-label="main-navigation">
          <div className={`navbar-brand`}>
            <Link to="/" className={`navbar-item`}>
              <img className={`header-logo`} src="#" alt="Logo" />
            </Link> 
            <Link to="/" className={`navbar-item`}>Home</Link>
            <a role="button" className={'navbar-burger burger ' + (displayNavbarBurger ? 'is-active' : '')} aria-label="menu" aria-expanded="false" data-target="main-navbar" onClick={toggleNavbarBurger}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="main-navbar" className={'navbar-menu ' + (displayNavbarBurger ? 'is-active' : '')}>

          </div>
        </nav>
      </header>
    </Fragment>
  )
}

export default Header;
