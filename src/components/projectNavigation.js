import React from 'react'
import { Link } from 'react-router'

class ProjectNavigation extends React.Component {
  // TODO: match the pagination to the data model
  // getProjects(){
  //   let activeID = this.props.activeProject.id
  //   let nextProject = this.props.projects[activeID + 1]
  //   let prevProject = this.props.projects[activeID - 1]
  //   return {
  //     prev: prevProject,
  //     next: nextProject
  //   }
  // }

  render() {
    return (
      <div className="project-nav">
        <nav>
          <Link to={'/projects/'}>Previous</Link>
          <Link to={'/projects/'}>Next</Link>
        </nav>
      </div>
    )
  }
}
ProjectNavigation.propTypes = {}
export default ProjectNavigation
