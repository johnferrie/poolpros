import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Email, Success } from './screens'

class Modal extends Component {
  renderScreen() {
    const { screen } = this.props

    // return <Success />

    switch (screen) {
      case 'email':
        return <Email {...this.props} />
        break
      case 'success':
        return <Success {...this.props} />
        break
      default:
        return null
        break
    }

    return null
  }

  render() {
    const { screen, setModal } = this.props

    return (
      <div
        className={`modal ${screen ? 'modal--active' : ''}`}
        onClick={() => setModal()}
      >
        <div
          className="modal__content"
          onClick={event => event.stopPropagation()}
        >
          <button className="modal__close ss-close" onClick={() => setModal()}>
            Close
          </button>
          {this.renderScreen()}
        </div>
      </div>
    )
  }
}

export default Modal
