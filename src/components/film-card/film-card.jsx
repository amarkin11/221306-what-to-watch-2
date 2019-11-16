import React from 'react';
import PropTypes from 'prop-types';

const FilmCard = (props) => {
  const {data, onCardMouseEnter} = props;
  const mouseEnterHandler = () => {
    onCardMouseEnter(data);
  };

  return <article className="small-movie-card catalog__movies-card" onMouseEnter={mouseEnterHandler}>
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
    src: PropTypes.string.isRequired
  }).isRequired,
  onCardMouseEnter: PropTypes.func.isRequired,
};

export default FilmCard;
