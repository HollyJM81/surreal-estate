import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders surreal estate link", () => {
	render(<App />);
	const linkElement = screen.getByText(/Surreal Estate/i);
	expect(linkElement).toBeInTheDocument();
});
