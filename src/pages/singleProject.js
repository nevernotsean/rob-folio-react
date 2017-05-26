import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getActiveProjectData} from '../utils/actionCreators'

import Project from '../components/singleProject/Project'

import '../assets/stylesheets/singleProject.css'

const SingleProject = React.createClass({
  propTypes: {
    projectData: PropTypes.array,
    activeProjectData: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
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
      <div className="single-project">
        <div className="header">
          <nav>
            <ul className="corners">
              <li className="menu-item home">
                <Link to="/">Robin Major</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Project {...this.props.activeProjectData} />
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
