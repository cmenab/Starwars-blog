import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-danger mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ml-3">
					<i className="fab fa-old-republic fa-3x" />
				</span>
			</Link>

			<div className="dropdown">
				<button
					className="btn btn-dark dropdown-toggle mr-4"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites
					{" " + store.favorites.length}
				</button>
				{/* Mapear los elementos que se agregan a la lista de favoritos */}
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					{store.favorites.map((item, index) => {
						return (
							<div
								style={{
									overflowY: "scroll",
									justifyContent: "space-between"
								}}
								className="d-flex contaienr -fluid"
								key={item.uid}>
								<p style={{ marginTop: "20px", marginLeft: "5px" }}>
									<strong>{item.name}</strong>
								</p>
								{/* LLama la funcion para borrar item de la lista de favoritos */}
								<button
									style={{ background: "none", border: "none" }}
									onClick={() => actions.deleteFavorite(item)}>
									<i className="fas fa-trash fa-1x" />
								</button>
							</div>
						);
					})}
				</div>
			</div>
		</nav>
	);
};
