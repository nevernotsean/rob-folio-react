import React from 'react'
// import PropTypes from 'prop-types'
import slugify from '../utils/slugify'

import ProjectRow from '../components/singleProject/ProjectRow.js'
import ProjectDetails from '../components/singleProject/ProjectDetails.js'

import '../assets/stylesheets/singleProject.css'

const SingleProject = React.createClass({
  propTypes: {},
  getInitialState() {
    return {
      activeProjectData: {},
    }
  },
  componentDidMount() {
    this.getActiveProjectData()
  },
  getActiveProjectData() {
    const activeProject = this.store.projectData.filter(project => {
      let testSlug = project.fields.projectSlug
      if (!testSlug) {
        testSlug = slugify(project.fields.title)
      }
      return testSlug === this.props.match.params.projectSlug
    })

    this.setState({ activeProject: activeProject[0] })
  },
  render() {
    if (!this.state.activeProject) {
      return false
    }
    const assets = this.state.activeProject.fields.assets

    return (
      <div className="single-project">
        <div className="row expanded medium-collapse padded">
          <div className="small-12 medium-4 large-3 column" ref="column">
            <ProjectDetails {...this.state.activeProject.fields} />
          </div>
          <div className="small-12 medium-8 large-9 column end">
            <div className="images">
              {assets.map(asset => {
                return <ProjectRow asset={asset.fields} key={asset.sys.id} />
              })}
            </div>
          </div>
        </div>
      </div>
    )
  },
})

export default SingleProject
