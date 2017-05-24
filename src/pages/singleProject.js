import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setActiveProjectData } from '../utils/actionCreators'
import slugify from '../utils/slugify'

import ProjectAssets from '../components/singleProject/ProjectAssets.js'
import ProjectDetails from '../components/singleProject/ProjectDetails.js'

import '../assets/stylesheets/singleProject.css'

const SingleProject = React.createClass({
  propTypes: {
    projectData: PropTypes.array,
    activeProjectData: PropTypes.array,
    dispatch: PropTypes.func,
  },
  componentDidMount() {
    this.getActiveProjectData()
  },
  getActiveProjectData() {
    const activeProject = this.props.projectData.filter(project => {
      let testSlug = project.fields.projectSlug
      testSlug = !testSlug ? slugify(project.fields.title) : testSlug
      return testSlug === this.props.match.params.projectSlug
    })
    console.log(this.props)
    this.props.dispatch(setActiveProjectData(activeProject))
  },
  render() {
    if (!this.props.activeProjectData.fields) {
      return null
    }
    return (
      <div className="single-project">
        <div className="row expanded medium-collapse padded">
          <div className="small-12 medium-4 large-3 column" ref="column">
            <ProjectDetails {...this.props.activeProjectData.fields} />
          </div>
          <div className="small-12 medium-8 large-9 column end" />
          <ProjectAssets assets={this.props.activeProjectData.fields.assets} />
        </div>
      </div>
    )
  },
})

const mapStateToProps = state => {
  return {
    projectData: state.projectData,
    activeProjectData: state.activeProjectData,
  }
}

export default connect(mapStateToProps)(SingleProject)
