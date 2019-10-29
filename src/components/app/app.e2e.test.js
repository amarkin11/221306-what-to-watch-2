
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from './app';

Enzyme.configure({adapter: new Adapter()});

it(`App film title click`, () => {
  const filmTitles = [
    `Fantastic Beasts: The Crimes of Grindelwald`,
    `Bohemian Rhapsody`,
    `Macbeth`,
    `Aviator`
  ];
  const clickHandler = jest.fn();
  const app = shallow(<App
    filmTitles={filmTitles}
    onFilmTitleClick={clickHandler}
  />);

  const filmTitleLink = app.find(`.small-movie-card__link`).first();
  filmTitleLink.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
