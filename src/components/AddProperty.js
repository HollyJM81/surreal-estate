import React, { useState } from "react";
import "../styles/add-property.css";
import CurrencyInput from "react-currency-input-field";

const axios = require("axios").default;

const AddProperty = () => {
	const initialState = {
		fields: {
			title: "",
			city: "Manchester",
		},
	};

	const [fields, setFields] = useState(initialState.fields);
	const handleAddProperty = (event) => {
		event.preventDefault();
		console.log(fields);
	};

	const handleFieldChange = (event) => {
		setFields({ ...fields, [event.target.name]: event.target.value });
	};

	return (
		<div className="add-property">
			<h1 className="add-property__title">Add your property details here</h1>
			<form onSubmit={handleAddProperty} className="add-property__form">
				<label htmlFor="title">
					Title
					<input
						id="title"
						type=""
						name="title"
						defaultValue=""
						onChange={handleFieldChange}
					/>
				</label>

				<label htmlFor="type">
					Type
					<select
						id="type"
						name="type"
						value={fields.type}
						onChange={handleFieldChange}
					>
						<option value="Flat">Flat</option>
						<option value="Detached">Detached</option>
						<option value="Semi-Detached">Semi-Detached</option>
						<option value="Terraced">Terraced</option>
						<option value="End of Terrace">End of Terrace</option>
						<option value="Cottage">Cottage</option>
						<option value="Bungalow">Bungalow</option>
					</select>
				</label>

				<label htmlFor="bedrooms">
					Bedrooms
					<select
						id="bedrooms"
						type="number"
						name="bedrooms"
						value={fields.bedrooms}
						onChange={handleFieldChange}
					>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5+">5+</option>
					</select>
				</label>

				<label htmlFor="bathrooms">
					Bathrooms
					<select
						id="bathrooms"
						type="number"
						name="bathrooms"
						value={fields.bathrooms}
						onChange={handleFieldChange}
					>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4+">4=</option>
					</select>
				</label>

				<label htmlFor="price">
					Price
					<input
						id="price"
						name="price"
						placeholder="Please enter a price"
						// prefix="£"
						// defaultValue={1000}
						// decimalsLimit={2}
						value={fields.price}
						onChange={handleFieldChange}
					/>
				</label>

				<label htmlFor="city">
					City
					<select
						id="city"
						name="city"
						value={fields.city}
						onChange={handleFieldChange}
					>
						<option value="Manchester">Manchester</option>
						<option value="Leeds">Leeds</option>
						<option value="Sheffield">Sheffield</option>
						<option value="Liverpool">Liverpool</option>
					</select>
				</label>

				<label htmlFor="email">
					Email
					<input
						id="email"
						type="email"
						name="email"
						defaultValue=""
						onChange={handleFieldChange}
					/>
				</label>
				<button type="submit" className="add-property__submit-btn">
					Add
				</button>
			</form>
		</div>
	);
};

export default AddProperty;
