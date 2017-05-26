/*global React*/
import React from 'react'

const Vimeo = function(props) {
  const {vimLoop, vimAutoplay, vimID} = props.fields
  return (
    <div
      className="overlay"
      data-loop={vimLoop}
      data-autoplay={vimAutoplay}
      data-vimeoid={vimID}
    >
      <div className="playpause start" />
    </div>
  )
}
export default Vimeo
