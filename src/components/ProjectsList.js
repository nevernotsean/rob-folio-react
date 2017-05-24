import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import ProjectListItem from '../components/ProjectsListItem'

import '../assets/stylesheets/projectList.css'

const ProjectList = React.createClass({
  propTypes: {
    projects: PropTypes.array,
  },
  componentDidMount() {
    window.addEventListener('resize', this.resizeHandler)
    window.addEventListener('scroll', this.scrollHandler)
  },
  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHandler)
    window.removeEventListener('scroll', this.scrollHandler)
  },
  scrollHandler() {
    const node = ReactDOM.findDOMNode(this)
    const trigger = node.clientHeight / 2 + 50
    const scrollY = window.scrollY

    if (scrollY > trigger) {
      window.scrollTo(0, 0)
    }
  },
  dupeList() {
    const projects = this.props.projects

    return projects
  },
  createProjectListItem(project, i) {
    const flipThumb = i % 2 === 0 ? '-100%' : '0'
    return (
      <ProjectListItem
        key={project.sys.id}
        flipThumb={flipThumb}
        {...project.fields}
      />
    )
  },
  render() {
    return (
      <div className="project-list">
        <ul className="projects menu vertical">
          {this.dupeList().map(this.createProjectListItem)}
        </ul>
      </div>
    )
  },
})

export default ProjectList
