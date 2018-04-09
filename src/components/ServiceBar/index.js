import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const ServiceBar = ({ modifier }) => (
  <div className={`service-bar service-bar--${modifier}`}>
    <div className="service-bar__wrapper page-container">
      <ul className="service-bar__list">
        <li className="service-bar__item">
          <Link className="service-bar__link" to="/">Dealers and Distributors</Link>
        </li>
        <li className="service-bar__item">
          <Link className="service-bar__link service-bar__link--commercial-service" to="/">Commercial Service</Link>
        </li>
      </ul>
    </div>
  </div>
)

ServiceBar.propTypes = {
  modifier: PropTypes.string.isRequired,
}

export default ServiceBar
