import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const PersonCard = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card-container">
			{!!store.people &&
				store.people.results.map((item, index) => {
					return (
						<div key={index} className="card card-properties m-3">
							<img
								className="card-img-top"
								src="https://i.blogs.es/26ba45/star-wars-eras/450_1000.jpeg"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the cards
									content.
								</p>
								<Link className="btn btn-outline-primary mr-2" to={"/personprofile/" + item.uid}>
									Learn more!
								</Link>
								<button
									type="button"
									className="btn btn-outline-warning ml-2"
									onClick={() => {
										actions.addFavorites(item);
									}}>
									<i className="far fa-heart fa-1x" />
								</button>
							</div>
						</div>
					);
				})}
		</div>
	);
};
