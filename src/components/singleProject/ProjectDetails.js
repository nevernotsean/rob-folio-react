import React from 'react'
import ReactCreateClass from 'create-react-class'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

var ProjectDetails = ReactCreateClass({
  propTypes: {
    roles: PropTypes.array,
    title: PropTypes.string,
    description: PropTypes.string,
  },
  componentDidMount() {
    window.scrollTop = 0
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
  render() {
    return (
      <div className="content-wrapper">
        <div className="content">
          <span className="roles">
            {this.props.roles && this.props.roles.join(' / ')}
          </span>
          <h1 className="title">{this.props.title}</h1>
          <div className="description">
            {this.props.description &&
              <ReactMarkdown source={this.props.description} />}
          </div>
          <div className="credits">
            {this.props.projectCredits &&
              <ReactMarkdown source={this.props.projectCredits} />}
          </div>
        </div>
      </div>
    )
  },
})

export default ProjectDetails
