import React from 'react'
import PropTypes from 'prop-types'

import ProjectAssets from './ProjectAssets'
import ProjectDetails from './ProjectDetails'

const Project = React.createClass({
  propTypes: {
    activeProjectData: PropTypes.array,
    dispatch: PropTypes.func,
  },
  render() {
    const {description, title, roles, projectCredits, assets} = this.props
    return (
      <div className="row expanded medium-collapse padded">
        <div className="small-12 medium-4 large-3 column" ref="column">
          <ProjectDetails
            description={description}
            title={title}
            roles={roles}
            projectCredits={projectCredits}
          />
        </div>
        <div className="small-12 medium-8 large-9 column end">
          {assets && <ProjectAssets assets={assets} />}
        </div>
      </div>
    )
  },
})
export default Project
