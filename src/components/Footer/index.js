import React from 'react'
import Link from 'gatsby-link'

import ServiceBar from '../ServiceBar'

const Footer = () => {
  const year = (new Date()).getFullYear();

  return (
    <footer className="page-footer">
      <h5 className="page-footer__logo">
        <a className="page-footer__logo-link" href="#">Pool Pros</a>
      </h5>
      <div className="page-footer__social">
        <span className="page-footer__social-title">Connect with us</span>
        <a className="page-footer__social-link page-footer__social-link--twitter" href="#">Twitter</a>
        <a className="page-footer__social-link page-footer__social-link--facebook" href="#">Facebook</a>
        <a className="page-footer__social-link page-footer__social-link--youtube" href="#">YouTube</a>
      </div>
      <ServiceBar modifier="mobile" />
      <ul className="page-footer__legal">
        <li className="page-footer__legal-item">
          <small className="page-footer__legal--title">&copy; {year} Pool Pros</small>
        </li>
        <li className="page-footer__legal-item">
          <Link to="/privacy-policy" className="page-footer__legal-link">Privacy Policy</Link>
        </li>
        <li className="page-footer__legal-item">
          <Link to="/terms-and-conditions" className="page-footer__legal-link">Terms and Conditions</Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
