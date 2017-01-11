import React from 'react';

class Image extends React.Component {
  render() {
    let src = this.props.fields.file.url
    let applyDropShadow = this.props.fields.applyDropShadow
    return (
      <img data-shadow={applyDropShadow} src={src} role="presentation"/>
    );
  }
}
export default Image;
