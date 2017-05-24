import React from 'react'
import ProjectRow from './ProjectRow.js'

const ProjectAssets = function(props) {
  return (
    <div className="images">
      {props.assets.map(asset => {
        return <ProjectRow asset={asset.fields} key={asset.sys.id} />
      })}
    </div>
  )
}

export default ProjectAssets
