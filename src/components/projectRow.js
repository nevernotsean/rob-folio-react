import React from 'react';
import classNames from 'classnames';
import Image from './projectRow/image.js'
import Vimeo from './projectRow/vimeo.js'

class ProjectRow extends React.Component {
    render() {
        let fields = this.props.rowData

        let { photo, mockupMobile, vimID } = fields

        let rowClasses = classNames({
            oneAsset: !mockupMobile,
            twoUp: mockupMobile
        })
        return (
            <div className={'row project--row ' + rowClasses} >
                { photo && <Image fields={fields} src={photo.fields}/> }
                { mockupMobile && <Image fields={fields} src={mockupMobile.fields}/> }
                { vimID && <Vimeo fields={fields} /> }
            </div>
        );
    }
}
export default ProjectRow;
