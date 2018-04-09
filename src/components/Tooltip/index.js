import React from 'react'
import PropTypes from 'prop-types'

const Tooltip = ({ description }) => (
  <div className="tooltip">
    <span className="tooltip__icon">?</span>
    <p className="tooltip__description">{description}</p>
  </div>
)

Tooltip.propTypes = {
  description: PropTypes.string.isRequired,
}

export default Tooltip
