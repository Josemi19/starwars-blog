import React from "react";
import "../../styles/home.css";
import Characters from "./Characters.jsx";
import Planets from "./Planets.jsx";
import Vehicules from "./Vehicules.jsx";

export const Home = () => {
	return (
		<>
			<Characters/>
			<Planets/>
			<Vehicules/>
		</>
	)
}
