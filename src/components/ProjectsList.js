import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import ProjectListItem from '../components/ProjectsListItem'

import '../assets/stylesheets/projectList.css'

const ProjectList = React.createClass({
  propTypes: {
    projects: PropTypes.array,
  },
  getInitialState() {
    return {
      winh: null,
      listOffset: 0,
    }
  },
  componentDidMount() {
    window.addEventListener('resize', this.resizeHandler)
    window.addEventListener('scroll', this.scrollHandler)
  },
  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHandler)
    window.removeEventListener('scroll', this.scrollHandler)
  },
  resizeHandler() {
    this.setState({
      winh: window.innerHeight,
    })
  },
  scrollHandler() {
    const node = ReactDOM.findDOMNode(this)
    const trigger = node.clientHeight / 2 + 50
    const scrollY = window.scrollY

    if (scrollY > trigger) {
      window.scrollTo(0, 0)
    }
  },
  reorderList() {
    const projects = this.props.projects,
      firstArr = projects.slice(0, this.state.listOffset),
      secondArr = projects.slice(this.state.listOffset, projects.length)

    let reorderProjects

    reorderProjects = secondArr.concat(firstArr)
    reorderProjects = reorderProjects.concat(reorderProjects)

    return reorderProjects
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
  test(project) {
    return <h1>{project.fields.title}</h1>
  },
  render() {
    return (
      <div className="project-list">
        <ul className="projects menu vertical">
          {this.props.projects.map(this.createProjectListItem)}
        </ul>
      </div>
    )
  },
})

export default ProjectList
