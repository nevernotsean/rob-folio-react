import React from 'react'
import ReactMarkdown from 'react-markdown'
// import PropTypes from 'prop-types'

var ProjectDetails = React.createClass({
  propTypes: {},
  getInitialState() {
    return {
      scrollY: window.innerHeight,
    }
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
    const style = {
      paddingTop: this.state.scrollY + 'px',
    }
    return (
      <div className="content-wrapper">
        <div className="content" style={style}>
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
