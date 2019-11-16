import React from "react";
import renderer from "react-test-renderer";
import videoPlayer from "./video-player";

it(`video player correctly renders after relaunch`, () => {
  const filmsListMock = [
    {
      name: `Macbeth`,
      src: `img/macbeth.jpg`,
      preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
    }
  ];

  const tree = renderer
    .create(<videoPlayer
      data={filmsListMock}
      isPlaying={false}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
