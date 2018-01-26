import React from "react";
import { Movie } from "./Movie";
import renderer from "react-test-renderer";

const movie = {
	title: "title",
	year: "1998",
	format: "vhs",
	actors: [{ name: "John" }]
};

it("renders without crashing", () => {
	const tree = renderer
		.create(<Movie movie={movie} params={{ id: 99 }} />)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
