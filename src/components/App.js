import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import { BrowserRouter } from "react-router-dom";

import "../styles/app.css";
import "../styles/navbar.css";

const App = () => {
	return (
		<BrowserRouter>
			<div className="App">
				<NavBar />
				<Routes>
					<Route path="/" element={Properties()} />
					<Route path="/add-property" element={AddProperty()} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
