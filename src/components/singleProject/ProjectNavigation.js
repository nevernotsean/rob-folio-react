import React from 'react'
import ReactCreateClass from 'create-react-class'
import {Link} from 'react-router-dom'

const ProjectNavigation = ReactCreateClass({
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
      <nav>
        <ul className="corners">
          <li className="menu-item home">
            <Link to="/">Back</Link>
          </li>
          <li className="menu-item" />
          <li className="menu-item">
            <Link to={`/projects/${this.props.previousSlug}`}>Previous</Link>
          </li>
          <li className="menu-item">
            <Link to={`/projects/${this.props.nextSlug}`}>Next</Link>
          </li>
        </ul>
      </nav>
    )
  },
})

export default ProjectNavigation
