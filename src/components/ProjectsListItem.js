import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProjectListItem = React.createClass({
  propTypes: {
    assets: PropTypes.array,
    previewThumbnail: PropTypes.object,
    roles: PropTypes.array,
    title: PropTypes.string,
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
  render() {
    const roles = this.props.roles.join(' / '),
      thumb = this.props.previewThumbnail,
      slug = !this.props.projectSlug
        ? this.slugify(this.props.title)
        : this.slugify(this.props.projectSlug),
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
