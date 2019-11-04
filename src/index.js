
import React from "react";
import ReactDOM from "react-dom";

import App from './components/app/app';
import filmsCards from "./mocks/films";

const init = () => {
  ReactDOM.render(
      <App
        films={filmsCards}
      />,
      document.querySelector(`#root`)
  );
};

init();
