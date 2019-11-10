import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

it(`App correctly renders after relaunch`, () => {
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
    .create(<App
      films={filmsListMock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
