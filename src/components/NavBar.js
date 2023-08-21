/* eslint-disable prettier/prettier */
import React from "react";
import { Link } from "react-router-dom";
import img from "../real-estate-logo.png";

const NavBar = () => {
	return (
		<div className="navbar">
			<img className="company-logo" src={img} alt="real-estate-logo" />
			<ul className="navbar-links-parent">
				<li className="navbar-links-item">
					<Link to="/" className="navbar-links-text">
						View Properties
					</Link>
				</li>
				<li className="navbar-links-item">
					<Link to="/add-property" className="navbar-links-text">
						Add a Property
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
