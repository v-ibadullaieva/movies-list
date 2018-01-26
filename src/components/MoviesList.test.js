import React from "react";
import { MoviesList } from "./MoviesList";
import renderer from "react-test-renderer";

const props = {
  movies: [
    {
      id: 99,
      title: "title",
      year: "1998",
      format: "vhs",
      actors: [{ name: "John" }]
    }
  ],
  params: { title: "", actor: "" },
  location: {
    query: {}
  },
  fetchMovies: () => {}
};

it("renders without crashing", () => {
  const tree = renderer.create(<MoviesList {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
