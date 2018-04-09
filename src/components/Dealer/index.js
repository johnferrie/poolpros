import React from 'react'
import PropTypes from 'prop-types'

import slugify from '../../utils/slugify'
import {capitalizeFirst, getDealerHours} from '../../utils/hours'

const Dealer = (props) => {
  const { 
    addressLine1,
    addressLine2,
    certifications,
    city,
    companyID,
    email,
    name,
    phone1,
    state,
    weekHours,
    zipcode
  } = props.data;
  const hoursMap = getDealerHours(weekHours);
  const hoursMapKeys = Object.keys(hoursMap);

  return (
    <div className="dealer">
      <div className="dealer__top-content">
        <h3 className="dealer__name">{name}</h3>
        <a href="tel:" className="dealer__phone">{phone1}</a>
        <p className="dealer__email-message">Can't talk now? Click below to send an email.</p>
        <button 
          className="dealer__contact-btn"
          onClick={event => props.setModal({ screen: 'email', data: props.data })}
        >
          Contact this Pro
        </button>
        <div className="dealer__hours">
          <h4 className="dealer__hours-title">Business Hours</h4>
          {hoursMapKeys.length ? 
            <ul className="dealer__hours-list">
              {hoursMapKeys.map(key => <li key={key} className="dealer__hours-open">{capitalizeFirst(key)} {hoursMap[key]}</li>)}
            </ul>
          : null}
        </div>
      </div>
      {certifications.length ?
        <div className="dealer__certifications">
          <ul className="dealer__certifications-list">
            {certifications.map(certification => <li key={slugify(certification)} className={`dealer__certification dealer__certification--${slugify(certification)}`}>{certification}</li> )}
          </ul>
        </div>
      : null}
    </div>
  )
}

Dealer.propTypes = {
  data: PropTypes.object.isRequired
}

export default Dealer
