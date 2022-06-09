import React from "react";
import ReactDOM from "react-dom";

const animals = [{ label: "Horse" }, { label: "Turtle" }, { label: "Elephant" }, { label: "Monkey" }];

const animalsInHTML = [
	<li>Horse</li>,
	<li>Turtle</li>,
	<li>Elephant</li>,
	<li>Monkey</li>
  ];
ReactDOM.render(<ul>{animalsInHTML}</ul>, document.querySelector("#myDiv"));
