import React from 'react';
import PropTypes from 'prop-types';

import VideoPlayer from '../video-player/video-player';

class FilmCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };

    this._handleCardMouseEnter = this._handleCardMouseEnter.bind(this);
    this._handleCardMouseLeave = this._handleCardMouseLeave.bind(this);
  }

  _handleCardMouseEnter() {
    this.setState({
      isPlaying: true
    });
  }

  _handleCardMouseLeave() {
    this.setState({
      isPlaying: false
    });
  }

  render() {
    const {data} = this.props;

    return <article className="small-movie-card catalog__movies-card" onMouseEnter={this._handleCardMouseEnter} onMouseLeave={this._handleCardMouseLeave}>
      <VideoPlayer
        data={data}
        isPlaying={this.state.isPlaying}
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
  }
}

FilmCard.propTypes = {
  data: PropTypes.exact({
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired
  }).isRequired
};

export default FilmCard;
