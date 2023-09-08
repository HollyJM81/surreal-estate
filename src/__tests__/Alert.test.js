import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert";
import AddProperty from "../components/AddProperty";
import { Fragment } from "react";

test("displays a success message", () => {
	const { getByText } = render(<Alert message="Property Added!" success />);

	expect(getByText(/Property Added!/).textContent).toBe("Property Added!");
});

test("does not render an error or a success message if message props is empty", () => {
	const { asFragment } = render(<Alert message="" />);
	const alert = asFragment();

	expect(alert).toMatchSnapshot();
});
