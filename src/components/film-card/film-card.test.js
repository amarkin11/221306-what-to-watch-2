import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card";

it(`Film card correctly renders after relaunch`, () => {
  const filmsListMock = {
    name: `Macbeth`,
    src: `img/macbeth.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  };

  const tree = renderer
    .create(<FilmCard
      data={filmsListMock}
      onCardMouseEnter={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
