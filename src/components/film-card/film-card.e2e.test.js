import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmCard from "./film-card";

Enzyme.configure({adapter: new Adapter()});

it(`on hover card with a film, information about the film enters the handler`, () => {
  const FilmCardMock = {
    name: `Macbeth`,
    src: `img/macbeth.jpg`
  };

  const mouseEnterHandler = jest.fn();
  const filmCard = shallow(<FilmCard
    data={FilmCardMock}
    onCardMouseEnter={mouseEnterHandler}
  />);

  const movieCrad = filmCard.find(`.small-movie-card`);
  movieCrad.simulate(`mouseenter`);

  expect(mouseEnterHandler).toHaveBeenCalledWith(FilmCardMock);
});
