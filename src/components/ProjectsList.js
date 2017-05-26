import React from 'react'

import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import ProjectListItem from '../components/ProjectsListItem'

import '../assets/stylesheets/projectList.css'

class ProjectList extends React.Component {
  constructor(props) {
    super(props)

    this.createProjectListItem = this.createProjectListItem.bind(this)
    this.scrollHandler = this.scrollHandler.bind(this)
  }
  componentDidMount() {
    window.addEventListener('resize', this.resizeHandler)
    window.addEventListener('scroll', this.scrollHandler)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHandler)
    window.removeEventListener('scroll', this.scrollHandler)
  }
  scrollHandler() {
    const node = ReactDOM.findDOMNode(this)
    const trigger = node.clientHeight / 2 + 50
    const scrollY = window.scrollY

    if (scrollY > trigger) {
      window.scrollTo(0, 0)
    }
  }
  duplicateList() {
    const projects = this.props.projects
    let doubleProjects = projects.concat(projects)
    return doubleProjects
  }
  createProjectListItem(project, i) {
    const flipThumb = i % 2 === 0 ? '-100%' : '0'
    return (
      <ProjectListItem
        key={`${project.sys.id}-${i}`}
        flipThumb={flipThumb}
        {...project.fields}
      />
    )
  }
  render() {
    return (
      <div className="project-list">
        <ul className="projects menu vertical">
          {this.duplicateList().map(this.createProjectListItem)}
        </ul>
      </div>
    )
  }
}

ProjectList.propTypes = {
  assets: PropTypes.array,
  previewThumbnail: PropTypes.object,
  roles: PropTypes.array,
  title: PropTypes.string,
}

export default ProjectList
