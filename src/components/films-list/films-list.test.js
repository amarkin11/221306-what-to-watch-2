
import React from "react";
import renderer from "react-test-renderer";
import FilmsList from "./films-list";

it(`Film card correctly renders after relaunch`, () => {
  const filmsListMock = [
    {
      name: `Macbeth`,
      src: `img/macbeth.jpg`
    },
    {
      name: `Aviator`,
      src: `img/aviator.jpg`
    },
  ];

  const tree = renderer
    .create(<FilmsList
      films={filmsListMock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
