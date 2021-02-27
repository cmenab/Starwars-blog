import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { PlanetCard } from "../component/PlanetCard.jsx";
import { PersonCard } from "../component/PersonCard.jsx";

export const Home = () => (
	<div className="card-container items-left d-flex flex-column w-100">
		<h3 className="card-title text-danger ml-3">Characters</h3>
		<PersonCard />
		<h3 className="card-title text-danger ml-3">Planets</h3>
		<PlanetCard />
	</div>
);
