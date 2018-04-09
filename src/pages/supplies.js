import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const Supplies = () => (
  <div className="page-supplies page-container">
    <Helmet title="Supplies | Pool Pros" />
    <div className="supply-item">
      <figure className="supply-item__image">
        <img src="/images/pool-chemicals.jpg" alt="Pool Chemicals"/>
      </figure>
      <h2 className="supply-item__title">Pool Chemicals</h2>
    </div>
    <div className="supply-item">
      <figure className="supply-item__image">
        <img src="/images/pool-covers.jpg" alt="Pool Covers"/>
      </figure>
      <h2 className="supply-item__title">Pool Covers</h2>
    </div>
    <div className="supply-item">
      <figure className="supply-item__image">
        <img src="/images/pool-toys.jpg" alt="Pool Toys"/>
      </figure>
      <h2 className="supply-item__title">Pool Toys</h2>
    </div>
  </div>
)

export default Supplies
