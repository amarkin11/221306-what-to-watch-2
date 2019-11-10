import React from 'react';
import PropTypes from 'prop-types';

import VideoPlayer from '../video-player/video-player';

const FilmCard = (props) => {
  const {data, onCardMouseEnter, isPlayVideo} = props;
  const mouseEnterHandler = () => {
    setTimeout(onCardMouseEnter(data), 1000);
  };

  return <article className="small-movie-card catalog__movies-card" onMouseEnter={mouseEnterHandler}>
    <VideoPlayer
      data={data}
      isPlayVideo={isPlayVideo}
    />
    <div className="small-movie-card__image">
      <img
        src={data.src}
        alt={data.name}
        width="280"
        height="175"
      />
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html">{data.name}</a>
    </h3>
  </article>;
};

FilmCard.propTypes = {
  data: PropTypes.exact({
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }).isRequired,
  onCardMouseEnter: PropTypes.func.isRequired,
};

export default FilmCard;
