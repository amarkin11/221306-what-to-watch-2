import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = (props) => {
  const {data, isPlayVideo} = props;

  return <video
      width='100%'
      height='100%'
      poster={data.src}
      muted
    >
      <source
        src={data.preview}
        type='video/mp4'
      />
    </video>;
};

VideoPlayer.propTypes = {
  data: PropTypes.exact({
    preview: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }).isRequired,
};

export default VideoPlayer;
