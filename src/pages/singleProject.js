import React from 'react'
import ReactCreateClass from 'create-react-class'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import ProjectNavigation from '../components/singleProject/ProjectNavigation'

import {connect} from 'react-redux'
import {getProjectData, getActiveProjectData} from '../utils/actionCreators'

import Project from '../components/singleProject/Project'

import '../assets/stylesheets/singleProject.css'
import fuckMobile from '../assets/fuck_mobile.png'

const SingleProject = ReactCreateClass({
  propTypes: {
    projectData: PropTypes.array,
    activeProjectData: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
  },
  componentDidMount() {
    this.props.dispatch(getProjectData())
  },
  componentWillReceiveProps(nextProps) {
    if (nextProps.projectData !== this.props.projectData) {
      this.props.dispatch(
        getActiveProjectData(this.props.match.params.projectSlug)
      )
    }
  },
  render() {
    return (
      <div className="page row expanded">
        <div className="single-project">
          <div className="header">
            <ProjectNavigation />
          </div>
          <Project {...this.props.activeProjectData} />
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
  },
})

const mapStateToProps = (state, ownProps) => {
  return {
    projectData: state.projectData,
    activeProjectData: state.activeProjectData,
  }
}

export default connect(mapStateToProps)(SingleProject)
