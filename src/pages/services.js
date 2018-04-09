import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const Services = () => (
  <div className="page-services page-container">
    <Helmet title="Services | Pool Pros" />
    <header className="services__header">
      <picture className="services__picture">
        <source srcSet="/images/hero-image-mobile.png" media="(max-width: 600px)" />
        <source srcSet="/images/hero-image.png" />
        <img srcSet="/images/hero-image.png" alt="Pool" />
      </picture>
      <h2 className="services__title">Pool Services in North Carolina</h2>
      <p className="services__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et turpis ac dolor aliquet tincidunt. Maecenas dapibus ornare purus et mollis. Sed efficitur eros mi, at consectetur leo sagittis ac. Sed rutrum cursus accumsan. Nulla gravida dui at nunc suscipit tristique. Cras lobortis maximus eros sit amet molestie. Nullam semper sed odio ac consectetur. Sed sapien nisl, pharetra in lacus in, molestie consequat enim. Praesent cursus lorem quis rhoncus pharetra. Phasellus aliquet magna ligula, nec dignissim lacus malesuada pretium. Fusce pharetra sed dui quis faucibus.
      </p>
    </header>
    <div className="services__container">
      <div className="services__service">
        <h3 className="services__subtitle services__subtitle--1">Management</h3>
        <ul className="services__list">
          <li className="services__item">Lifeguard Hiring/Staffing</li>
          <li className="services__item">Red Cross Training</li>
          <li className="services__item">Summer Incentives</li>
          <li className="services__item">Online Scheduling</li>
          <li className="services__item">Layered Supervision</li>
          <li className="services__item">Online Employee Portal</li>
        </ul>
      </div>
      <div className="services__service">
        <h3 className="services__subtitle services__subtitle--2">Construction</h3>
        <ul className="services__list">
          <li className="services__item">Commercial Pool Renovations</li>
          <li className="services__item">Tile</li>
          <li className="services__item">Coping</li>
          <li className="services__item">Plaster</li>
          <li className="services__item">Decking</li>
          <li className="services__item">Skimmers</li>
          <li className="services__item">Slides</li>
          <li className="services__item">Filter Systems</li>
          <li className="services__item">Caulking</li>
          <li className="services__item">Leak Detection</li>
          <li className="services__item">Safety Covers</li>
          <li className="services__item">Underground Plumbing</li>
          <li className="services__item">Playgrounds</li>
          <li className="services__item">Renosys PVC Liners</li>
          <li className="services__item">ADA/VGB Compliance</li>
          <li className="services__item">Pump and Motor</li>
          <li className="services__item">Sprayparks</li>
          <li className="services__item">Lighting</li>
          <li className="services__item">Chemical Automation</li>
          <li className="services__item">Heaters</li>
        </ul>
        </div>
      <div className="services__service">
        <h3 className="services__subtitle services__subtitle--3">Maintenance</h3>
        <ul className="services__list">
          <li className="services__item">Chemical Balancing</li>
          <li className="services__item">Water Testing</li>
          <li className="services__item">Vacuuming</li>
          <li className="services__item">Summerization</li>
          <li className="services__item">Winterization</li>
          <li className="services__item">Chemical Deliveries</li>
          <li className="services__item">On-site Reporting</li>
          <li className="services__item">Quality Assurance Program</li>
          <li className="services__item">Customized Contracts</li>
        </ul>
      </div>
    </div>
  </div>
)

export default Services
