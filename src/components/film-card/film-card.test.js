import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card";

it(`Film card correctly renders after relaunch`, () => {
  const FilmCardMock = {
    name: `Macbeth`,
    src: `img/macbeth.jpg`
  };

  const tree = renderer
    .create(<FilmCard
      data={FilmCardMock}
      onCardMouseEnter={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
