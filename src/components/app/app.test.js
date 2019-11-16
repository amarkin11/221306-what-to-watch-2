import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

it(`App correctly renders after relaunch`, () => {
  const filmsListMock = [
    {
      name: `Macbeth`,
      src: `img/macbeth.jpg`,
      preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
    },
    {
      name: `Aviator`,
      src: `img/aviator.jpg`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
    },
  ];
  const tree = renderer
    .create(<App
      films={filmsListMock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
