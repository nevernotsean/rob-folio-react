import React from 'react'

// components
import Header from './Header'

// assets
import fuckMobile from '../assets/fuck_mobile.png'

const Layout = React.createClass({
  hideForLarge() {
    if (window.innerWidth < 768) {
      return 'block'
    } else {
      return 'none'
    }
  },
  render() {
    return (
      <div className="site">
        <Header />
        <div className="page row expanded">
          {this.props.children}
        </div>
        <div
          className="small-screen"
          style={{
            top: 0,
            position: 'absolute',
            zIndex: '9999',
            display: this.hideForLarge(),
          }}
        >
          <a href="mailto:robin@robinmajor.us">
            <img
              role="presentation"
              style={{ width: '100%', maxWidth: 'none' }}
              src={fuckMobile}
            />
          </a>
        </div>
      </div>
    )
  },
})

export default Layout
