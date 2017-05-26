import React from 'react'
import PropTypes from 'prop-types'
import client from '../utils/contentfulClient.js'
import {connect} from 'react-redux'
import {setProjectData} from '../utils/actionCreators'

import fuckMobile from '../assets/fuck_mobile.png'

const Layout = React.createClass({
  propTypes: {
    projectData: PropTypes.array,
    dispatch: PropTypes.func,
  },
  componentDidMount() {
    this.getProjectData()
  },
  getProjectData() {
    client
      .getEntries({content_type: 'projectList', include: 2})
      .then(response => {
        this.props.dispatch(
          setProjectData(response.items[0].fields.projectsReference)
        )
      })
  },
  render() {
    return (
      <div className="site">
        <div className="page row expanded">
          {this.props.children}
        </div>
        <div className="small-screen">
          <a href="mailto:robin@robinmajor.us">
            <img
              role="presentation"
              style={{width: '100%', maxWidth: 'none'}}
              src={fuckMobile}
            />
          </a>
        </div>
      </div>
    )
  },
})

const mapStateToProps = state => {
  return {
    projectData: state.projectData,
  }
}

export default connect(mapStateToProps)(Layout)
