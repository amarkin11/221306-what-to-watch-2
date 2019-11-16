import React from "react";
import ReactDOM from "react-dom";

import App from './components/app/app';
import filmsList from "./mocks/films";

const init = () => {
  ReactDOM.render(
      <App
        films={filmsList}
      />,
      document.querySelector(`#root`)
  );
};

init();
