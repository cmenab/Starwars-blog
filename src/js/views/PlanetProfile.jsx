import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetProfile = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(
		() => {
			actions.loadPlanetsDetail(params.theid);
		},
		[params.theid]
	);

	return (
		!!store.planetsDetail && (
			<div className="container">
				{/* Row de l foto y descripción */}
				<div className="row">
					<img
						src="https://popculturalstudies.files.wordpress.com/2020/01/star-wars-planets.png"
						className="img-thumbnail col-5"
					/>
					<p className="col-5 text-danger">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, dolore asperiores. Distinctio
						vitae accusantium dolore mollitia doloremque hic nostrum tempora explicabo rem architecto modi,
						necessitatibus eius veniam ipsa alias quod.
					</p>
				</div>
				{/* Row del titulo de los detalles del personaje */}
				<div className="row border-top border-danger text-danger mt-3">
					<span className="col-2">Name</span>
					<span className="col-2">Population</span>
					<span className="col-2">Climate</span>
					<span className="col-2">Terrain</span>
					<span className="col-2">Gravity</span>
					<span className="col-2">Surface Water</span>
				</div>
				{/* Row de los detalles del personaje */}
				<div className="row text-danger">
					<span className="col-2">{store.planetsDetail.properties.name}</span>
					<span className="col-2">{store.planetsDetail.properties.population}</span>
					<span className="col-2">{store.planetsDetail.properties.climate}</span>
					<span className="col-2">{store.planetsDetail.properties.terrain}</span>
					<span className="col-2">{store.planetsDetail.properties.gravity}</span>
					<span className="col-2">{store.planetsDetail.properties.surface_water}</span>
				</div>
			</div>
		)
	);
};
