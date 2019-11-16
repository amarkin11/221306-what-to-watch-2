import React from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();

    this.state = {
      isPlaying: this.props.isPlaying
    };
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      setTimeout(() => {
        video.play();
      }, 1000);
    } else {
      video.pause();
    }
  }
  render() {
    const {data} = this.props;

    return <video
      width='100%'
      height='100%'
      poster={data.src}
      muted
      ref= {this._videoRef}
    >
      <source
        src={data.preview}
        type='video/mp4'
      />
    </video>;
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  data: PropTypes.exact({
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired
  }).isRequired,
};

export default VideoPlayer;
