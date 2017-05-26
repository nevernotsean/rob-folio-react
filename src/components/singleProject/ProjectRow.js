import React from 'react'
import ReactCreateClass from 'create-react-class'
import classNames from 'classnames'
import Image from './projectRow/image'
import Vimeo from './projectRow/vimeo'

const ProjectRow = ReactCreateClass({
  render() {
    const {photo, mockupMobile, vimID} = this.props.asset

    const rowClasses = classNames({
      oneAsset: !mockupMobile,
      twoUp: mockupMobile,
    })
    return (
      <div className={'row project--row ' + rowClasses}>
        {photo && <Image fields={this.props.asset} src={photo.fields} />}
        {mockupMobile &&
          <Image fields={this.props.asset} src={mockupMobile.fields} />}
        {vimID && <Vimeo fields={this.props.asset} />}
      </div>
    )
  },
})
export default ProjectRow
