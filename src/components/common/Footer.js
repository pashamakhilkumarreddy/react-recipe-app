import React, {
  Fragment
} from 'react';

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <footer className={`footer`}>
          <div className={`content has-text-centered`}>
            <p>
              &copy; 2020 <strong>Recipe App</strong> - All Rights Reserved
            </p>
          </div>
        </footer>
      </footer>
    </Fragment>
  )
}

export default Footer;
