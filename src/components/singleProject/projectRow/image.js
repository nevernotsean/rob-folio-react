/* global React */
import React from 'react'

const Image = function(props) {
  return (
    <img
      data-shadow={props.fields.applyDropShadow}
      src={props.src.file.url}
      alt={props.title}
    />
  )
}
export default Image
