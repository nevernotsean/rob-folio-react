import React from 'react'

import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getProjectData} from '../utils/actionCreators'

import fuckMobile from '../assets/fuck_mobile.png'

class Layout extends React.Component {
  componentDidMount() {
    this.props.dispatch(getProjectData())
  }
  render() {
    const childrenWithProps = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        foo: this.props.projectData,
      })
    })
    return (
      <div className="site">
        <div className="page row expanded">
          {childrenWithProps}
        </div>
        <div className="small-screen">
          <a href="mailto:robin@robinmajor.us">
            <img
              alt="This site is not mobile friendly"
              style={{width: '100%', maxWidth: 'none'}}
              src={fuckMobile}
            />
          </a>
        </div>
      </div>
    )
  }
}

Layout.propTypes: {
  projectData: PropTypes.array,
  dispatch: PropTypes.func,
}

const mapStateToProps = state => {
  return {
    projectData: state.projectData,
  }
}

export default connect(mapStateToProps)(Layout)
