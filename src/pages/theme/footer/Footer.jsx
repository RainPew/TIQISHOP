import React from 'react';
import './style.scss'

function Footer(props) {
    return (
        <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        <p>
          Follow us on
          <a href="https://twitter.com"> Twitter</a>,
          <a href="https://facebook.com"> Facebook</a>,
          and
          <a href="https://instagram.com"> Instagram</a>.
        </p>
      </div>
    </footer>
    );
}

export default Footer;