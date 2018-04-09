import React from 'react'
import PropTypes from 'prop-types'

const Success = ({ screen, data }) => (
  <div>
    <header className="modal__header">
      <p className="modal__screen">{screen}</p>
      <h4 className="modal__company-name">{data.name}</h4>
    </header>
    <p className="modal__message">An email was sent to {data.email} please look for a reply at {data.user_email}.</p>
  </div>
)

Success.propTypes = {
  screen: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
}

export default Success
