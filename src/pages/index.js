import React, { Component } from 'react'
import Link from 'gatsby-link'

import Filter from '../components/Filter'
import Dealer from '../components/Dealer'

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: [],
    }

    this.setFilters = this.setFilters.bind(this);
  }

  setFilters({ target }) {
    const { checked, value } = target;
    const { filters } = this.state;

    if (checked) {
      this.setState({
        filters: [...filters, value]
      })
    } else {
      this.setState({
        filters: filters.filter(item => item !== value)
      })
    }
  }

  filterDealers() {
    const { dealers } = this.props;
    const { filters } = this.state;
    let filteredDealers;

    if (!filters.length) {
      filteredDealers = dealers;
    } else {
      filteredDealers = dealers.filter(dealer => {
        if (filters.filter(key => dealer.data.certifications.indexOf(key) > -1).length) {
          return dealer;
        }
      })
    }

    return filteredDealers;
  }

  render() {
    const { zipcide, location, filters, dealers, setModal } = this.props;
    const filteredDealers = this.filterDealers();

    return (
      <div className="page-container">
        <Filter setFilters={this.setFilters} visibleCount={filteredDealers.length} totalCount={dealers.length} />
        <div className="page-dealers">
          {filteredDealers.map(dealer => <Dealer key={dealer.data.companyID} data={dealer.data} setModal={setModal} />)}
        </div>
      </div>
    )
  }
}

export default IndexPage
