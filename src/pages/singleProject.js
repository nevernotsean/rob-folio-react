import React from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import ProjectRow from '../components/ProjectRow.js'

import '../assets/stylesheets/singleProject.css'

const SingleProject = React.createClass({
  propTypes: {},
  getInitialState() {
    return {
      activeProject: false,
      scrollY: window.innerHeight,
    }
  },
  componentDidMount() {
    window.scrollTop = 0

    this.scrollHandler()
    this.lookupProject()

    window.addEventListener('scroll', this.scrollHandler)
  },
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler)
  },
  scrollHandler() {
    setTimeout(() => {
      this.setState({ scrollY: window.scrollY })
    }, 500)
  },
  slugify(text) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, '') // Trim - from end of text
  },
  lookupProject() {
    const activeProject = this.store.projectData.filter(project => {
      let testSlug = project.fields.projectSlug
      if (!testSlug) {
        testSlug = this.slugify(project.fields.title)
      }
      return testSlug === this.props.match.params.projectSlug
    })

    this.setState({ activeProject: activeProject[0] })
  },
  createCredits(row, i) {
    return (
      <li key={'credit-' + i}>
        <h6 className="credit">
          {row.name}<br />
          <span className="role">{row.role}</span>
        </h6>
      </li>
    )
  },
  lerp(v0, v1, t) {
    return v0 * (1 - t) + v1 * t
  },
  render() {
    console.log(this.props)
    if (!this.state.activeProject) {
      return false
    }
    const {
      title,
      description,
      projectCredits,
      assets,
    } = this.state.activeProject.fields,
      roles = this.state.activeProject.fields.roles.join(' / ')

    return (
      <div
        className="single-project"
        style={{
          padding: '80px 0',
        }}
      >
        <div className="row expanded medium-collapse padded">
          <div className="small-12 medium-4 large-3 column" ref="column">
            <div className="content-wrapper">
              <div
                className="content"
                style={{
                  paddingTop: this.state.scrollY + 'px',
                  transition: 'padding-top 0.8s ease',
                }}
              >
                <span className="roles">{roles}</span>
                <h1 className="title">{title}</h1>
                <div className="description">
                  <ReactMarkdown source={description} />
                </div>
                <div className="credits">
                  {projectCredits && <ReactMarkdown source={projectCredits} />}
                </div>
              </div>
            </div>
          </div>
          <div className="small-12 medium-8 large-9 column end">
            <div className="images">
              {assets.map(function(asset, i) {
                return <ProjectRow rowData={asset.fields} key={asset.sys.id} />
              })}
            </div>
          </div>
        </div>
      </div>
    )
  },
})

export default SingleProject
