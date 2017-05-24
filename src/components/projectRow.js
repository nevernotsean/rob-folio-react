import React from 'react'
import classNames from 'classnames'
import Image from './projectRow/image'
import Vimeo from './projectRow/vimeo'

const ProjectRow = React.createClass({
  render() {
    let { photo, mockupMobile, vimID } = this.props.rowData

    let rowClasses = classNames({
      oneAsset: !mockupMobile,
      twoUp: mockupMobile,
    })
    return (
      <div className={'row project--row ' + rowClasses}>
        {photo && <Image fields={this.props.rowData} src={photo.fields} />}
        {mockupMobile &&
          <Image fields={this.props.rowData} src={mockupMobile.fields} />}
        {vimID && <Vimeo fields={this.props.rowData} />}
      </div>
    )
  },
})
export default ProjectRow
