
import React from 'react';
import PropTypes from 'prop-types';

import FilmCard from "../film-card/film-card";

class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: {}
    };
  }

  render() {
    const {films} = this.props;

    return films.map((it) => {
      return <FilmCard
        film={it}
        key={it.name}
      />;
    });
  }
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  })).isRequired
};

export default FilmsList;
