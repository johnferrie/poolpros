import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  validateFirstLast,
  validatePhoneNumber,
  validateEmailAddress,
} from '../../../utils/validation'

class Email extends Component {
  constructor() {
    super()

    this.validation = {
      first_last: validateFirstLast,
      phone_number: validatePhoneNumber,
      email_address: validateEmailAddress,
    }

    this.state = {
      values: {
        first_last: '',
        phone_number: '',
        email_address: '',
        comments: '',
        own: '',
      },
      valid: {
        first_last: false,
        phone_number: false,
        email_address: false,
      },
      processing: false,
    }

    this.submitForm = this.submitForm.bind(this)
    this.onChangeInput = this.onChangeInput.bind(this)
  }

  submitForm(event) {
    event.preventDefault()

    const { valid, processing } = this.state

    if (!processing) {
      this.setState({ processing: true })
      const isValid = Object.keys(valid).filter(key => !valid[key]).length === 0

      if (isValid) {
        // TODO: post form
        console.log(this.state.values)
        // on success
        // reset state values
        const { data, setModal } = this.props
        const { name, email } = data
        setModal({
          screen: 'success',
          data: {
            name,
            email,
            user_email: this.state.values.email_address,
          },
        })
        // on error
        // this.setState({ processing: false });
      } else {
        this.setState({ processing: false })
      }
    }
  }

  onChangeInput({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    const stateObj = { ...this.state }
    const validation = this.validation[name]

    stateObj.values[name] = value

    if (validation) {
      stateObj.valid[name] = validation(value)
    }

    this.setState(stateObj)
  }

  setLabelClasses(name) {
    const baseName = 'modal__label'
    const classList = [baseName]

    if (this.validation[name]) {
      classList.push(`${baseName}--validate`)
    } else {
      classList.push(`${baseName}--optional`)
    }

    if (this.state.valid[name]) {
      classList.push(`${baseName}--valid`)
    }

    return classList.join(' ')
  }

  render() {
    const { values, valid, processing } = this.state
    const { screen, data } = this.props
    const { name } = data

    return (
      <div>
        <header className="modal__header">
          <p className="modal__screen">{screen}</p>
          <h4 className="modal__company-name">{name}</h4>
        </header>
        <form className="modal__form" onSubmit={this.submitForm}>
          <fieldset className="modal__fieldset">
            <legend className="modal__legend">
              Fill out the form below and {name} will get in touch.
            </legend>
            <div className="modal__field-container">
              <label className={this.setLabelClasses('first_last')} htmlFor="">
                First and last name
              </label>
              <input
                className="modal__input"
                type="text"
                name="first_last"
                value={values.first_last}
                onChange={this.onChangeInput}
              />
            </div>
            <div className="modal__field-container modal__field-container--short">
              <label
                className={this.setLabelClasses('phone_number')}
                htmlFor=""
              >
                Phone number
              </label>
              <input
                className="modal__input"
                type="text"
                name="phone_number"
                value={values.phone_number}
                onChange={this.onChangeInput}
                maxLength="15"
                pattern="\d*"
              />
            </div>
            <div className="modal__field-container">
              <label
                className={this.setLabelClasses('email_address')}
                htmlFor=""
              >
                Email Address
              </label>
              <input
                className="modal__input"
                type="email"
                name="email_address"
                value={values.email_address}
                onChange={this.onChangeInput}
              />
            </div>
            <div className="modal__field-container">
              <label className={this.setLabelClasses('comments')} htmlFor="">
                Comments or questions
              </label>
              <textarea
                className="modal__textarea"
                name="comments"
                cols="30"
                rows="10"
                onChange={this.onChangeInput}
              />
            </div>
            <div className="modal__field-container">
              <label className={this.setLabelClasses('own')}>
                Do you currently own a pool or spa?
              </label>
              <label className="modal__radio-container">
                <input
                  className="modal__input modal__input--radio"
                  type="radio"
                  name="own"
                  value="yes"
                  onChange={this.onChangeInput}
                />
                <span className="modal__radio">Yes</span>
              </label>
              <label className="modal__radio-container">
                <input
                  className="modal__input modal__input--radio"
                  type="radio"
                  name="own"
                  value="no"
                  onChange={this.onChangeInput}
                />
                <span className="modal__radio">No</span>
              </label>
            </div>
            <div className="modal__button-container">
              {processing ? (
                <div className="modal__loading">Loading...</div>
              ) : (
                <button className="modal__submit" onClick={this.submitForm}>
                  Send <span className="mobile-hidden">my email</span>
                </button>
              )}
            </div>
          </fieldset>
        </form>
        <footer className="modal__footer">
          <p className="modal__disclaimer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex.
          </p>
        </footer>
      </div>
    )
  }
}

Email.propTypes = {
  screen: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  setModal: PropTypes.func.isRequired,
}

export default Email
