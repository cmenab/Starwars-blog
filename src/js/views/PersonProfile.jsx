import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PersonProfile = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(
		() => {
			actions.loadPeopleDetail(params.theid);
		},
		[params.theid]
	);

	return (
		!!store.peopleDetail && (
			<div className="container">
				{/* Row de l foto y descripción */}
				<div className="row">
					<img
						src="https://i.pinimg.com/originals/70/62/f8/7062f8ace037f344cad1d568ea72cbbe.jpg"
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
					<span className="col-2">Birth Year</span>
					<span className="col-2">Gender</span>
					<span className="col-2">Height</span>
					<span className="col-2">Skin Color</span>
					<span className="col-2">Eye Color</span>
				</div>
				{/* Row de los detalles del personaje */}
				<div className="row text-danger">
					<span className="col-2">{store.peopleDetail.properties.name}</span>
					<span className="col-2">{store.peopleDetail.properties.birth_year}</span>
					<span className="col-2">{store.peopleDetail.properties.gender}</span>
					<span className="col-2">{store.peopleDetail.properties.height}</span>
					<span className="col-2">{store.peopleDetail.properties.skin_color}</span>
					<span className="col-2">{store.peopleDetail.properties.eye_color}</span>
				</div>
			</div>
		)
	);
};
