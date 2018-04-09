import React, { Component } from 'react'
import Link from 'gatsby-link'

import ServiceBar from '../ServiceBar'

class Header extends Component {
  constructor() {
    super()

    this.state = {
      active: false,
    }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu(event) {
    this.setState({
      active: event ? !this.state.active : false,
    })
  }

  render() {
    const { active } = this.state

    return (
      <header className="page-header">
        <ServiceBar modifier="desktop" />
        <div className="page-container page-container--flex">
          <h1 className="page-header__logo">
            <Link className="page-header__logo-link" to="/">
              Pool Pros
            </Link>
          </h1>
          <nav className="page-header__nav">
            <ul
              className={`page-header__list ${
                active ? 'page-header__list--active' : ''
              }`}
            >
              <li className="page-header__item">
                <Link
                  className="page-header__item-link"
                  activeClassName="page-header__item-link--active"
                  to="/pools-and-spas"
                  onClick={() => this.toggleMenu()}
                >
                  Pools &amp; Spas
                </Link>
              </li>
              <li className="page-header__item">
                <Link
                  className="page-header__item-link"
                  activeClassName="page-header__item-link--active"
                  to="/supplies"
                  onClick={() => this.toggleMenu()}
                >
                  Supplies
                </Link>
              </li>
              <li className="page-header__item">
                <Link
                  className="page-header__item-link"
                  activeClassName="page-header__item-link--active"
                  to="/resources"
                  onClick={() => this.toggleMenu()}
                >
                  Resources
                </Link>
              </li>
              <li className="page-header__item">
                <Link
                  className="page-header__item-link"
                  activeClassName="page-header__item-link--active"
                  to="/services"
                  onClick={() => this.toggleMenu()}
                >
                  Services
                </Link>
              </li>
            </ul>
            <div className="page-header__button-container">
              <Link className="page-header__button" to="/">
                Find a <span className="page-header__optional-text mobile-hidden">Pool</span> Pro
              </Link>
              <button
                className={`page-header__mobile ${
                  active ? 'page-header__mobile--active' : ''
                } tablet-and-mobile`}
                onClick={this.toggleMenu}
              >
                Close
              </button>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
