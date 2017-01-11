import React from 'react';

class Vimeo extends React.Component {
  render() {
    let { vimLoop, vimAutoplay, vimID } = this.props.fields
    return (
        <div className="overlay" data-loop={vimLoop} data-autoplay={vimAutoplay} data-vimeoid={vimID}>
            <div className="playpause start"></div>
        </div>
    );
  }
}
export default Vimeo;
