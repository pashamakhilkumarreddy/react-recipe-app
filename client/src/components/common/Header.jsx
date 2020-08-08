import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [navbarBurgerDisplay, setNavbarBurgerDisplay] = useState(false);
  return (
    <header>
      <nav className={`navbar`} role='navigation' aria-label='main-navigation'>
        <div className={`navbar-brand`}>
          <Link to='/' className={`navbar-item`}>
            <img className={`header-logo`} src='#' alt='Logo' />
          </Link>
          <Link to='/' className={`navbar-item`}>
            Home
          </Link>
          <span
            role='button'
            className={
              'navbar-burger burger ' + (navbarBurgerDisplay ? 'is-active' : '')
            }
            aria-label='menu'
            aria-expanded='false'
            data-target='main-navbar'
            onClick={() => setNavbarBurgerDisplay(!navbarBurgerDisplay)}>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </span>
        </div>
        <div
          id='main-navbar'
          className={
            'navbar-menu ' + (navbarBurgerDisplay ? 'is-active' : '')
          }></div>
      </nav>
    </header>
  );
};

export default Header;
