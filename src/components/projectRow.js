import React from 'react';
import classNames from 'classnames';
import Image from './projectRow/image.js'
import Vimeo from './projectRow/vimeo.js'

class ProjectRow extends React.Component {
    render() {
        let fields = this.props.rowData.fields

        if ( !fields ) { return null }

        let { photo, mockupMobile, vimID } = fields
        let imgURL = photo.fields.file.url
        let mockupMobileURL = mockupMobile.fields.file.url

        let rowClasses = classNames({
            oneAsset: !this.mockupMobile,
            twoUp: this.mockupMobile
        })
        return (
            <div className={'row project--row ' + rowClasses}>
                { photo && <Image fields={photo}/> }
                { mockupMobile && <Image fields={fields} src={mockupMobile}/> }
                { vimID && <Vimeo fields={fields} /> }
            </div>
        );
    }
}
export default ProjectRow;
