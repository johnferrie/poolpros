import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Tooltip from '../Tooltip'

class Filter extends Component {
  constructor() {
    super()

    this.state = {
      active: false,
    }

    this.toggleFilters = this.toggleFilters.bind(this)
  }

  toggleFilters() {
    this.setState({
      active: !this.state.active,
    })
  }

  render() {
    const { active } = this.state
    const { visibleCount, totalCount, setFilters } = this.props

    return (
      <div className="filter">
        <div className="filter__count">
          {visibleCount} Dealers in {totalCount}
        </div>
        <form className="filter__options">
          <legend
            className={`filter__legend ${
              active ? 'filter__legend--active' : ''
            }`}
            onClick={this.toggleFilters}
          >
            Filter Results
          </legend>
          <ul
            className={`filter__list ${active ? 'filter__list--active' : ''}`}
          >
            <li className="filter__item">
              <div className="filter__checkbox faux-checkbox">
                <input
                  className="faux-checkbox__input"
                  type="checkbox"
                  name="service"
                  value="Service Pro"
                  id="service"
                  onChange={setFilters}
                />
                <span className="faux-checkbox__box" />
              </div>
              <label className="filter__label" htmlFor="service">
                Service
              </label>
            </li>
            <li className="filter__item">
              <div className="filter__checkbox faux-checkbox">
                <input
                  className="faux-checkbox__input"
                  type="checkbox"
                  name="installation"
                  value="Installation Pro"
                  id="installation"
                  onChange={setFilters}
                />
                <span className="faux-checkbox__box" />
              </div>
              <label className="filter__label" htmlFor="installation">
                Installation
              </label>
            </li>
            <li className="filter__item">
              <div className="filter__checkbox faux-checkbox">
                <input
                  className="faux-checkbox__input"
                  type="checkbox"
                  name="residential"
                  value="Residential Pro"
                  id="residential"
                  onChange={setFilters}
                />
                <span className="faux-checkbox__box" />
              </div>
              <label className="filter__label" htmlFor="residential">
                Residential
              </label>
            </li>
            <li className="filter__item">
              <div className="filter__checkbox faux-checkbox">
                <input
                  className="faux-checkbox__input"
                  type="checkbox"
                  name="commercial"
                  value="Commercial Pro"
                  id="commercial"
                  onChange={setFilters}
                />
                <span className="faux-checkbox__box" />
              </div>
              <label className="filter__label" htmlFor="commercial">
                Commercial
              </label>
              <Tooltip description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et consectetur nisi." />
            </li>
          </ul>
        </form>
      </div>
    )
  }
}

Filter.propTypes = {
  visibleCount: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  setFilters: PropTypes.func.isRequired,
}

export default Filter
