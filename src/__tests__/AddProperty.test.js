import { render } from "@testing-library/react";
import AddProperty from "../components/AddProperty";

const mockData = {
	title: "Spacious City Apartment",
	type: "Flat",
	bedrooms: "2",
	bathrooms: "1",
	price: "170000",
	city: "Manchester",
	email: "info@manchesterflats.com",
};

describe("AddProperty", () => {
	it("renders correctly", () => {
		const { asFragment, getByTestId } = render(<AddProperty />);
		expect(asFragment()).toMatchSnapshot();
		expect(getByTestId("add-property-form")).toBeInTheDocument();
	});
});
