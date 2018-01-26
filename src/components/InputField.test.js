import React from "react";
import InputField from "./InputField";
import renderer from "react-test-renderer";

const props = {
	input: { value: "hello" },
	meta: {},
	type: "number",
	name: "name",
	placeholder: "hello"
};

it("renders without crashing", () => {
	const tree = renderer.create(<InputField {...props} />).toJSON();
	expect(tree).toMatchSnapshot();
});
