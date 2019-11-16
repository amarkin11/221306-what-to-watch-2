import React from 'react';
import PropTypes from 'prop-types';

import FilmCard from "../film-card/film-card";

class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: {}
    };

    this._handleCardMouseEnter = this._handleCardMouseEnter.bind(this);
  }

  _handleCardMouseEnter(data) {
    this.setState({
      activeCard: data
    });
  }

  render() {
    const {films} = this.props;

    return films.map((it) => {
      return <FilmCard
        data={it}
        key={it.name}
        onCardMouseEnter={this._handleCardMouseEnter}
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
