import React from 'react'

import {Link} from 'react-router-dom'

class ProjectNavigation extends React.Component {
  render() {
    return (
      <nav>
        <ul className="corners">
          <li className="menu-item home">

            <Link to="/">Robin Major</Link>
          </li>
          <li className="menu-item" />
          <li className="menu-item">
            {this.props.previousSlug &&
              <Link to={`/projects/${this.props.previousSlug}`}>Previous</Link>}
            {!this.props.previousSlug && <Link to="/">Back</Link>}
          </li>
          <li className="menu-item">
            {this.props.nextSlug &&
              <Link to={`/projects/${this.props.nextSlug}`}>Next</Link>}
          </li>
        </ul>
      </nav>
    )
  }
}

export default ProjectNavigation
