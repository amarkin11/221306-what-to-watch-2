
import React from "react";
import ReactDOM from "react-dom";

import App from './components/app/app';

const init = () => {
  const filmTitles = [
    `Fantastic Beasts: The Crimes of Grindelwald`,
    `Bohemian Rhapsody`,
    `Macbeth`,
    `Aviator`
  ];
  ReactDOM.render(
      <App
        filmTitles={filmTitles}
        onFilmTitleClick={() => {}}
      />,
      document.querySelector(`#root`)
  );
};

init();
