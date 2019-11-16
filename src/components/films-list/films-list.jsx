import React from 'react';
import PropTypes from 'prop-types';

import FilmCard from "../film-card/film-card";

const FilmsList = (props) => {
  const {films} = props;

  return films.map((it) => {
    return <FilmCard
      data={it}
      key={it.name}
    />;
  });
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired
  })).isRequired
};

export default FilmsList;
