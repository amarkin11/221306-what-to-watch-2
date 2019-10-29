
import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

it(`App correctly renders after relaunch`, () => {
  const filmTitles = [
    `Fantastic Beasts: The Crimes of Grindelwald`,
    `Bohemian Rhapsody`,
    `Macbeth`,
    `Aviator`
  ];
  const tree = renderer
    .create(<App
      filmTitles={filmTitles}
      onFilmTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
