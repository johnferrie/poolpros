import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import dealers from '../data/dealers.json'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import '../styles/main.scss'

class TemplateWrapper extends Component {
  constructor() {
    super()

    this.state = {
      ...dealers,
      modal: {},
    }

    this.setModal = this.setModal.bind(this)
  }

  setModal(data = {}) {
    this.setState({
      modal: data,
    })
  }

  render() {
    const { children } = this.props
    const { dealers, modal } = this.state
    const pageScrolling = modal.screen ? 'no-scroll' : ''

    return (
      <div className="page-wrapper">
        <Helmet
          htmlAttributes={{ lang: 'en', class: pageScrolling }}
          title="Pool Pros"
          link={[
            {
              rel: 'icon',
              type: 'image/png',
              sizes: '32x32',
              href: '/favicons/favicon-32x32.png',
            },
          ]}
          meta={[
            {
              name: 'viewport',
              content:
                'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
            },
            {
              name: 'description',
              content:
                'Pool Pro, is a distributor of swimming pool supplies, equipment and related leisure products.',
            },
            { name: 'keywords', content: 'pools, installations' },
            { name: 'og:url', content: 'http://poolpros.ferrie.me' },
            { name: 'og:title', content: 'Pool Pros' },
            {
              name: 'og:description',
              content:
                'Pool Pro, is a distributor of swimming pool supplies, equipment and related leisure products.',
            },
            {
              name: 'og:image',
              content: 'http://poolpros.ferrie.me/images/hero-image-mobile.png',
            },
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:site', content: '@PoolPros' },
            { name: 'twitter:title', content: 'Pool Pros' },
            {
              name: 'twitter:description',
              content:
                'Pool Pro, is a distributor of swimming pool supplies, equipment and related leisure products.',
            },
            {
              name: 'twitter:image',
              content: 'http://poolpros.ferrie.me/images/hero-image-mobile.png',
            },
          ]}
        />
        <Header />
        <main className="page-content">
          {children({ ...this.props, dealers, setModal: this.setModal })}
        </main>
        <Footer />
        <Modal {...this.state.modal} setModal={this.setModal} />
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
