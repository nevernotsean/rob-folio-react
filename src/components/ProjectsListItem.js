import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import slugify from '../utils/slugify'

const ProjectListItem = React.createClass({
  propTypes: {
    assets: PropTypes.array,
    previewThumbnail: PropTypes.object,
    roles: PropTypes.array,
    title: PropTypes.string,
  },
  render() {
    const roles = this.props.roles.join(' / '),
      thumb = this.props.previewThumbnail,
      slug = !this.props.projectSlug
        ? slugify(this.props.title)
        : slugify(this.props.projectSlug),
      style = {
        marginBottom: window.innerHeight / 6,
      }
    return (
      <li className="project" style={style}>
        <Link to={slug}>
          <div className="project-wrapper">
            <h1 className="outline">{this.props.title}</h1>
            <h2 className="subhead roles">{roles}</h2>
            <img
              style={{
                transform: `translate(${this.props.flipThumb}, -50%)`,
              }}
              className="thumb"
              src={thumb.fields.file.url}
              alt=""
            />
          </div>
        </Link>
      </li>
    )
  },
})

export default ProjectListItem
