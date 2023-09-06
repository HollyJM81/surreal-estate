import React from "react";
import "../styles/alert.css";
// import PropTypes from "prop-types";

const Alert = ({ message, success }) => (
	<div className={`Alert${success ? "--success" : "--error"}`}>{message}</div>
);

export default Alert;
